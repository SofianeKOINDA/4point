import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDiscoverDetail } from "@/data/discoverDetails";
import { pick } from "@/i18n/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const detail = getDiscoverDetail(id);

  if (!detail) {
    return { title: "Découvrir" };
  }

  const title = pick(detail.title, "fr");
  const description = pick(detail.intro, "fr");

  return {
    title,
    description,
    alternates: { canonical: `/discover/${id}` },
    openGraph: {
      title,
      description,
      url: `/discover/${id}`,
      images: [{ url: detail.image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [detail.image],
    },
  };
}

export default function DiscoverDetailLayout({ children }: { children: ReactNode }) {
  return children;
}
