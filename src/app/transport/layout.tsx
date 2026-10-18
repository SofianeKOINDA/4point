import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Transport & accès",
  description:
    "Comment rejoindre le Four Points by Sheraton Dakar Diamniadio : TER, taxi, navettes et accès depuis l'aéroport AIBD et le centre de Dakar.",
  alternates: { canonical: "/transport" },
};

export default function TransportLayout({ children }: { children: ReactNode }) {
  return children;
}
