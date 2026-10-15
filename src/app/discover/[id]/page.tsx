"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import {
  discoverHotelPhone,
  getDiscoverDetail,
} from "@/data/discoverDetails";
import { useI18n } from "@/i18n/LanguageProvider";

export default function DiscoverDetailPage() {
  const params = useParams<{ id: string }>();
  const { t, tx, lang } = useI18n();
  const detail = getDiscoverDetail(params.id);

  if (!detail) {
    return (
      <PageShell
        title={lang === "fr" ? "Introuvable" : "Not found"}
        backHref="/discover"
      >
        <p className="text-sm text-[var(--muted)]">
          {lang === "fr"
            ? "Cette activité n’existe pas."
            : "This activity doesn’t exist."}
        </p>
        <Link href="/discover" className="text-sm font-bold text-[var(--teal)]">
          {t("back")}
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell
      title={tx(detail.title)}
      subtitle={tx(detail.subtitle)}
      backHref="/discover"
    >
      <div className="relative h-56 overflow-hidden rounded-[28px]">
        <Image
          src={detail.image}
          alt={tx(detail.title)}
          fill
          className="object-cover"
          priority
          sizes="500px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        {detail.tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-black">
            {tx(detail.tag)}
          </span>
        ) : null}
      </div>

      <p className="text-[15px] leading-relaxed text-[var(--ink)]">
        {tx(detail.intro)}
      </p>

      <div className="grid grid-cols-3 gap-2">
        {[
          {
            label: lang === "fr" ? "Durée" : "Duration",
            value: detail.duration,
          },
          {
            label: lang === "fr" ? "Depuis l’hôtel" : "From hotel",
            value: detail.distance,
          },
          {
            label: lang === "fr" ? "Meilleur moment" : "Best time",
            value: detail.bestTime,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-[var(--teal-soft)] px-3 py-3"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--teal)]">
              {item.label}
            </p>
            <p className="mt-1 text-xs font-semibold leading-snug text-[var(--ink)]">
              {tx(item.value)}
            </p>
          </div>
        ))}
      </div>

      <section>
        <h2 className="section-title mb-3">
          {lang === "fr" ? "Comment ça se passe" : "How it works"}
        </h2>
        <ol className="space-y-3">
          {detail.steps.map((step, index) => (
            <li
              key={index}
              className="rounded-[22px] border border-[var(--line)] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              <p className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--ink)]">
                {tx(step.title)}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                {tx(step.text)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[24px] bg-[var(--wash)] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
          {lang === "fr" ? "Depuis l’hôtel" : "From the hotel"}
        </p>
        <p className="mt-2 text-sm font-medium text-[var(--ink)]">
          {tx(detail.fromHotel)}
        </p>
      </section>

      <section>
        <h2 className="section-title mb-3">
          {lang === "fr" ? "Conseils" : "Tips"}
        </h2>
        <ul className="space-y-2">
          {detail.tips.map((tip, index) => (
            <li
              key={index}
              className="rounded-2xl bg-[var(--teal-soft)] px-4 py-3 text-sm text-[var(--ink)]"
            >
              {tx(tip)}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[28px] bg-[var(--teal)] p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {lang === "fr" ? "Organisation" : "Planning"}
        </p>
        <p className="mt-2 text-sm text-white/90">
          {lang === "fr"
            ? "La réception organise taxi, chauffeur ou conseils du jour pour cette sortie."
            : "Reception can arrange a taxi, driver or today’s tips for this outing."}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`tel:${discoverHotelPhone.replace(/\s/g, "")}`}
            className="inline-flex rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-bold text-white"
          >
            {t("call")}
          </a>
          <Link
            href="/transport"
            className="inline-flex rounded-full bg-white/15 px-4 py-2.5 text-sm font-bold text-white"
          >
            {t("transport")}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
