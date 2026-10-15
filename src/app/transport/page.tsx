"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { hotel, transportDestinations, transportModes } from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

export default function TransportPage() {
  const { t, tx } = useI18n();

  return (
    <PageShell title={t("transportTitle")} subtitle={t("transportSubtitle")}>
      <section>
        <h2 className="section-title mb-3">{t("destinations")}</h2>
        <div className="space-y-3">
          {transportDestinations.map((dest) => (
            <article
              key={dest.id}
              className="rounded-[24px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-extrabold text-[var(--ink)]">
                    {tx(dest.title)}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">{tx(dest.subtitle)}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--teal)] px-3 py-1 text-xs font-bold text-white">
                  {tx(dest.time)}
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--ink)]">{tx(dest.tip)}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title mb-3">{t("howToGo")}</h2>
        <div className="space-y-3">
          {transportModes.map((mode) => (
            <article
              key={mode.id}
              className="rounded-[24px] border border-[var(--line)] bg-[var(--teal-soft)] p-4"
            >
              <h3 className="text-base font-bold text-[var(--ink)]">
                {tx(mode.title)}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--teal)]">
                {tx(mode.subtitle)}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">{tx(mode.detail)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] bg-[var(--teal)] p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {t("needRide")}
        </p>
        <p className="mt-2 text-sm text-white/90">{t("needRideText")}</p>
        <div className="mt-4 flex gap-2">
          <a
            href={`tel:${hotel.phone.replace(/\s/g, "")}`}
            className="rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-bold text-white"
          >
            {t("call")}
          </a>
          <Link
            href="/map"
            className="rounded-full bg-white/15 px-4 py-2.5 text-sm font-bold text-white"
          >
            {t("seeMap")}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
