"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  categoryMeta,
  places,
  type PlaceCategory,
} from "@/data/places";
import { useI18n } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SmartImage } from "@/components/SmartImage";
import { MapCanvas } from "./MapCanvas";

const filters: Array<PlaceCategory | "all"> = [
  "all",
  "hotel",
  "activites",
  "transport",
  "alentours",
];

const filterLabelKey = {
  all: "filterAll",
  hotel: "filterHotel",
  activites: "filterActivities",
  transport: "filterTransport",
  alentours: "filterAround",
} as const;

export function MapExplorer() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<PlaceCategory | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>("hotel");
  const [listOpen, setListOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visible = useMemo(
    () =>
      filter === "all" ? places : places.filter((p) => p.category === filter),
    [filter],
  );

  const selected =
    visible.find((p) => p.id === selectedId) ?? visible[0] ?? places[0];

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[var(--teal-soft)]">
      {mounted ? (
        <MapCanvas
          places={places}
          selectedId={selected?.id ?? null}
          onSelect={(id) => {
            setSelectedId(id);
            setListOpen(false);
          }}
          filter={filter}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#eef8fe] text-sm font-medium text-[var(--teal)]">
          {t("loadingMap")}
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-white/90 via-white/40 to-transparent" />

      <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4">
        <div className="mx-auto mb-2 flex max-w-lg justify-end">
          <LanguageSwitcher />
        </div>
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <Link
            href="/"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--ink)] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur"
            aria-label={t("back")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 5 8 12l7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="min-w-0 flex-1 rounded-full bg-white/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur">
            <p className="truncate text-center text-sm font-bold tracking-tight text-[var(--ink)]">
              {t("mapTitle")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setListOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-[0_10px_30px_rgba(58,113,144,0.35)]"
            aria-label={t("places")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 7h14M5 12h14M5 17h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mx-auto mt-3 flex max-w-lg gap-2 overflow-x-auto pb-1">
          {filters.map((key) => {
            const meta = categoryMeta[key];
            const active = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setFilter(key);
                  const first =
                    key === "all"
                      ? places[0]
                      : places.find((p) => p.category === key);
                  if (first) setSelectedId(first.id);
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                  active
                    ? "text-white shadow-md"
                    : "bg-white/90 text-[var(--ink)] shadow-sm backdrop-blur"
                }`}
                style={active ? { background: meta.color } : undefined}
              >
                {t(filterLabelKey[key])}
              </button>
            );
          })}
        </div>
      </header>

      {listOpen ? (
        <div className="absolute inset-x-0 bottom-0 z-30 max-h-[55vh] overflow-hidden rounded-t-[28px] bg-white shadow-[0_-20px_60px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between px-5 pb-2 pt-4">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-extrabold">
              {t("places")} ({visible.length})
            </h2>
            <button
              type="button"
              onClick={() => setListOpen(false)}
              className="text-sm font-semibold text-[var(--muted)]"
            >
              {t("close")}
            </button>
          </div>
          <div className="max-h-[46vh] space-y-2 overflow-y-auto px-4 pb-8">
            {visible.map((place) => {
              const color = categoryMeta[place.category].color;
              const active = place.id === selected?.id;
              return (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(place.id);
                    setListOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl p-2.5 text-left transition ${
                    active ? "bg-[var(--wash)]" : "bg-[var(--teal-soft)]/60"
                  }`}
                >
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                    <SmartImage
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-[var(--ink)]">
                      {place.name}
                    </p>
                    <p className="truncate text-xs text-[var(--muted)]">
                      {place.subtitle}
                    </p>
                  </div>
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: color }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {selected && !listOpen ? (
        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5">
          <article className="mx-auto max-w-lg overflow-hidden rounded-[28px] bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl animate-rise">
            <div className="flex gap-3 p-3">
              <div className="relative h-[104px] w-[96px] shrink-0 overflow-hidden rounded-2xl">
                <SmartImage
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                />
              </div>
              <div className="min-w-0 flex-1 py-1 pr-1">
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                    style={{
                      background: categoryMeta[selected.category].color,
                    }}
                  >
                    {t(filterLabelKey[selected.category])}
                  </span>
                  {selected.distance ? (
                    <span className="text-[11px] font-semibold text-[var(--muted)]">
                      {selected.distance}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight tracking-tight text-[var(--ink)]">
                  {selected.name}
                </h3>
                <p className="mt-0.5 text-xs text-[var(--muted)]">
                  {selected.subtitle}
                </p>
                {selected.hours || selected.tip ? (
                  <p className="mt-2 text-xs font-semibold text-[var(--teal)]">
                    {[selected.hours, selected.tip].filter(Boolean).join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex gap-2 border-t border-black/5 px-3 py-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-bold text-white"
              >
                {t("directions")}
              </a>
              <button
                type="button"
                onClick={() => setListOpen(true)}
                className="rounded-full bg-[var(--teal-soft)] px-4 py-2.5 text-sm font-bold text-[var(--teal)]"
              >
                {t("viewAll")}
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}
