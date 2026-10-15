"use client";

import { useEffect, useRef, useState } from "react";
import {
  categoryMeta,
  HOTEL_CENTER,
  type Place,
  type PlaceCategory,
} from "@/data/places";

type Props = {
  places: Place[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  filter: PlaceCategory | "all";
};

type LeafletNS = typeof import("leaflet");

declare global {
  interface Window {
    L?: LeafletNS;
  }
}

function markerHtml(color: string, active: boolean) {
  const size = active ? 44 : 34;
  const ring = active ? 8 : 0;
  return `
    <div style="
      width:${size}px;height:${size}px;
      margin-left:${-size / 2}px;margin-top:${-size}px;
      position:relative;filter:drop-shadow(0 8px 14px rgba(0,0,0,.28));
    ">
      <div style="
        width:${size}px;height:${size}px;border-radius:999px;
        background:${color};
        border:3px solid #fff;
        box-shadow:0 0 0 ${ring}px ${color}33;
        display:flex;align-items:center;justify-content:center;
      ">
        <div style="width:8px;height:8px;border-radius:999px;background:#fff"></div>
      </div>
      <div style="
        width:0;height:0;margin:-2px auto 0;
        border-left:7px solid transparent;border-right:7px solid transparent;
        border-top:10px solid ${color};
      "></div>
    </div>
  `;
}

function loadLeaflet(): Promise<LeafletNS> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.L) return Promise.resolve(window.L);

  return new Promise((resolve, reject) => {
    const cssId = "leaflet-cdn-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const scriptId = "leaflet-cdn-js";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => {
        if (window.L) resolve(window.L);
        else reject(new Error("Leaflet missing after load"));
      });
      existing.addEventListener("error", () => reject(new Error("Leaflet script error")));
      if (window.L) resolve(window.L);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      if (window.L) resolve(window.L);
      else reject(new Error("Leaflet missing after load"));
    };
    script.onerror = () => reject(new Error("Impossible de charger Leaflet (réseau)"));
    document.head.appendChild(script);
  });
}

export function MapCanvas({ places, selectedId, onSelect, filter }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const layerRef = useRef<import("leaflet").LayerGroup | null>(null);
  const LRef = useRef<LeafletNS | null>(null);
  const onSelectRef = useRef(onSelect);
  const placesRef = useRef(places);
  const filterRef = useRef(filter);
  const selectedRef = useRef(selectedId);
  const [ready, setReady] = useState(false);

  onSelectRef.current = onSelect;
  placesRef.current = places;
  filterRef.current = filter;
  selectedRef.current = selectedId;

  const paintMarkers = () => {
    const map = mapRef.current;
    const layer = layerRef.current;
    const L = LRef.current;
    if (!map || !layer || !L) return;

    layer.clearLayers();

    const currentPlaces = placesRef.current;
    const currentFilter = filterRef.current;
    const currentSelected = selectedRef.current;

    const visible =
      currentFilter === "all"
        ? currentPlaces
        : currentPlaces.filter((p) => p.category === currentFilter);

    visible.forEach((place) => {
      const color = categoryMeta[place.category].color;
      const active = place.id === currentSelected;
      const icon = L.divIcon({
        className: "",
        html: markerHtml(color, active),
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      });

      const marker = L.marker([place.lat, place.lng], { icon });
      marker.on("click", () => onSelectRef.current(place.id));
      marker.addTo(layer);
    });

    if (visible.length > 1) {
      const bounds = L.latLngBounds(
        visible.map((p) => [p.lat, p.lng] as [number, number]),
      );
      map.fitBounds(bounds.pad(0.2), { animate: true, maxZoom: 17 });
    } else if (visible.length === 1) {
      map.flyTo([visible[0].lat, visible[0].lng], 17, { duration: 0.6 });
    }

    map.invalidateSize();
  };

  useEffect(() => {
    let cancelled = false;

    loadLeaflet()
      .then((L) => {
        if (cancelled || !containerRef.current || mapRef.current) return;
        LRef.current = L;

        const map = L.map(containerRef.current, {
          zoomControl: false,
          attributionControl: false,
          center: [HOTEL_CENTER.lat, HOTEL_CENTER.lng],
          zoom: 16,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        }).addTo(map);

        L.control.zoom({ position: "bottomright" }).addTo(map);
        layerRef.current = L.layerGroup().addTo(map);
        mapRef.current = map;

        setTimeout(() => {
          map.invalidateSize();
          paintMarkers();
          setReady(true);
        }, 80);
      })
      .catch((err) => {
        console.error(err);
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100%;padding:24px;text-align:center;color:#3a7190;font-weight:600;">
              Carte indisponible — vérifie ta connexion puis recharge.
            </div>
          `;
        }
      });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!ready) return;
    paintMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places, filter, selectedId, ready]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId || !ready) return;
    const place = places.find((p) => p.id === selectedId);
    if (!place) return;
    map.flyTo([place.lat, place.lng], Math.max(map.getZoom(), 16), {
      duration: 0.55,
    });
  }, [selectedId, places, ready]);

  return <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />;
}
