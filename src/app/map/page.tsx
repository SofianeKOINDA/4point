import type { Metadata } from "next";
import { MapExplorer } from "@/components/map/MapExplorer";

export const metadata: Metadata = {
  title: "Plan · Four Points Guest Guide",
  description:
    "Carte des lieux — hôtel, activités The Ground et alentours de Diamniadio.",
};

export default function MapPage() {
  return <MapExplorer />;
}
