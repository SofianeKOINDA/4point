import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Infos pratiques & numéros utiles",
  description:
    "Informations pratiques du Four Points by Sheraton Dakar Diamniadio : réception, Wi-Fi, horaires, numéros d'urgence et contacts utiles.",
  alternates: { canonical: "/infos" },
};

export default function InfosLayout({ children }: { children: ReactNode }) {
  return children;
}
