"use client";

import { PageShell } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { hotel, tenActivities } from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

export default function TenPage() {
  const { t, tx, lang } = useI18n();

  return (
    <PageShell
      title={lang === "fr" ? "Espace TEN" : "TEN Space"}
      subtitle={
        lang === "fr"
          ? "Trampoline · Escalade · Ninja — 15 000 FCFA · Mar–Dim 10h–20h"
          : "Trampoline · Climbing · Ninja — 15,000 FCFA · Tue–Sun 10am–8pm"
      }
    >
      <div className="relative h-52 overflow-hidden rounded-[28px]">
        <SmartImage
          src="/hotel/ten/escalade.jpg"
          alt="TEN"
          fill
          className="object-cover"
          priority
          sizes="500px"
          unoptimized
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
          {lang === "fr"
            ? "Un seul espace, trois univers d’activités."
            : "One space, three activity worlds."}
        </p>
      </div>

      <section className="space-y-3">
        {tenActivities.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="relative h-40 w-full">
              <SmartImage
                src={item.image}
                alt={tx(item.title)}
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
            <div className="p-4">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--ink)]">
                {tx(item.title)}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{tx(item.subtitle)}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] bg-[var(--teal)] p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {lang === "fr" ? "Réservation" : "Booking"}
        </p>
        <p className="mt-2 text-sm text-white/90">
          {lang === "fr"
            ? "Tarif 15 000 FCFA · Ouvert du mardi au dimanche, 10h–20h. Réservez à la réception."
            : "Rate 15,000 FCFA · Open Tuesday to Sunday, 10am–8pm. Book at reception."}
        </p>
        <a
          href={`tel:${hotel.phone.replace(/\s/g, "")}`}
          className="mt-4 inline-flex rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-bold text-white"
        >
          {t("call")}
        </a>
      </section>
    </PageShell>
  );
}
