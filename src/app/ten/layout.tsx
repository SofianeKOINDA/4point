import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Espace TEN — Trampoline, Escalade, Ninja",
  description:
    "L'espace TEN du Four Points by Sheraton Dakar Diamniadio : trampoline, escalade et parcours ninja pour petits et grands. Horaires, tarifs et infos.",
  alternates: { canonical: "/ten" },
};

export default function TenLayout({ children }: { children: ReactNode }) {
  return children;
}
