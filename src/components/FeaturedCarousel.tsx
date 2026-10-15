"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { featured } from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";
import { IconPlay } from "./Icons";
import { SmartImage } from "./SmartImage";

export function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const { tx, t } = useI18n();

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % featured.length);
    }, 4800);
    return () => window.clearInterval(id);
  }, []);

  const item = featured[index];
  const href = item.id === "ten" ? "/ten" : item.id === "pool" ? "/#hotel" : "/#hotel";

  return (
    <section className="px-5 pt-2">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="section-title">{t("featured")}</h2>
        <div className="flex gap-1.5 pb-1">
          {featured.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={tx(slide.title)}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-[var(--brand)]" : "w-1.5 bg-black/15"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
        {featured.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <SmartImage
              src={slide.image}
              alt={tx(slide.title)}
              fill
              priority={i === 0}
              className={`object-cover ${i === index ? "kenburns" : ""}`}
              sizes="(max-width: 512px) 100vw, 480px"
              unoptimized
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5">
          <div className="max-w-[75%]">
            <p className="animate-rise text-[11px] font-bold uppercase tracking-[0.2em] text-[#7dbfd3]">
              {t("tonight")}
            </p>
            <h3 className="animate-rise-2 mt-1 font-[family-name:var(--font-display)] text-[2.4rem] leading-[0.95] font-extrabold tracking-tight text-white">
              {tx(item.title)}
            </h3>
            <p className="animate-rise-3 mt-2 text-sm text-white/85">
              {tx(item.subtitle)}
            </p>
          </div>
          <Link
            href={href}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-lg transition active:scale-95"
            aria-label={tx(item.cta)}
          >
            <IconPlay />
          </Link>
        </div>
      </div>
    </section>
  );
}
