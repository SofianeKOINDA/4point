"use client";

import Image from "next/image";
import Link from "next/link";
import type { GuideItem } from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

type Props = {
  id?: string;
  title?: string;
  items: GuideItem[];
  wide?: boolean;
  /** Prefixe de lien pour chaque item, ex. "/discover" → /discover/[id] */
  linkBase?: string;
};

export function SectionCarousel({
  id,
  title,
  items,
  wide = false,
  linkBase,
}: Props) {
  const { tx, t } = useI18n();

  return (
    <section id={id} className="pt-2">
      {title ? (
        <div className="mb-3 flex items-end justify-between px-5">
          <h2 className="section-title">{title}</h2>
          <span className="pb-0.5 text-xs font-semibold tracking-wide text-[var(--muted)]">
            {t("swipe")}
          </span>
        </div>
      ) : (
        <div className="mb-3 flex justify-end px-5">
          <span className="text-xs font-semibold tracking-wide text-[var(--muted)]">
            {t("swipe")}
          </span>
        </div>
      )}
      <div className="carousel">
        {items.map((item) => {
          const href =
            item.id === "ten"
              ? "/ten"
              : linkBase
                ? `${linkBase}/${item.id}`
                : undefined;
          const body = (
            <>
              <Image
                src={item.image}
                alt={tx(item.title)}
                fill
                className="object-cover transition duration-500 group-active:scale-105"
                sizes={wide ? "320px" : "200px"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              {item.tag ? (
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-black">
                  {tx(item.tag)}
                </span>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight tracking-tight text-white">
                  {tx(item.title)}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-white/80">
                  {tx(item.subtitle)}
                </p>
              </div>
            </>
          );

          const className = `group relative overflow-hidden rounded-[24px] shadow-[0_14px_36px_rgba(0,0,0,0.14)] ${
            wide
              ? "h-44 w-[78vw] max-w-[320px]"
              : "h-[280px] w-[46vw] max-w-[200px]"
          }`;

          return href ? (
            <Link key={item.id} href={href} className={className}>
              {body}
            </Link>
          ) : (
            <article key={item.id} className={className}>
              {body}
            </article>
          );
        })}
      </div>
    </section>
  );
}
