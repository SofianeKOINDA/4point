import type { Metadata } from "next";
import { MapExplorer } from "@/components/map/MapExplorer";

export const metadata: Metadata = {
  title: "Plan & carte",
  description:
    "Carte des lieux — hôtel Four Points by Sheraton, activités TEN et alentours de Diamniadio.",
  alternates: { canonical: "/map" },
};

export default function MapPage() {
  return <MapExplorer />;
}
