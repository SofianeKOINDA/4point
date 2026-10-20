import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDiningVenue } from "@/data/guide";
import { pick } from "@/i18n/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const venue = getDiningVenue(id);

  if (!venue) {
    return { title: "Restaurants & Bars" };
  }

  const title = venue.name;
  const description = pick(venue.description, "fr");

  return {
    title,
    description,
    alternates: { canonical: `/restau/${id}` },
    openGraph: {
      title,
      description,
      url: `/restau/${id}`,
      images: [{ url: venue.image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [venue.image],
    },
  };
}

export default function DiningDetailLayout({ children }: { children: ReactNode }) {
  return children;
}
