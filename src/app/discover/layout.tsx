import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Découvrir Dakar & le Sénégal",
  description:
    "Idées de visites et d'excursions autour du Four Points by Sheraton Dakar Diamniadio : Gorée, Lac Rose, Monument de la Renaissance, marchés et plages.",
  alternates: { canonical: "/discover" },
};

export default function DiscoverLayout({ children }: { children: ReactNode }) {
  return children;
}
