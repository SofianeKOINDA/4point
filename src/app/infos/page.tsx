"use client";

import { IconFacebook, IconInstagram, IconLinkedin } from "@/components/Icons";
import { PageShell } from "@/components/PageShell";
import {
  athletes,
  emergencies,
  hotel,
  practical,
} from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

export default function InfosPage() {
  const { t, tx } = useI18n();

  return (
    <PageShell title={t("infosTitle")} subtitle={t("infosSubtitle")}>
      <section id="urgence">
        <h2 className="section-title mb-3 text-[var(--coral)]">{t("emergencies")}</h2>
        <div className="space-y-2">
          {emergencies.map((row) => (
            <a
              key={typeof row.label === "string" ? row.label : row.label.fr}
              href={row.href}
              className="flex items-center justify-between rounded-2xl bg-[#fff1f0] px-4 py-3.5"
            >
              <span className="text-sm font-medium text-[var(--muted)]">
                {tx(row.label)}
              </span>
              <span className="text-sm font-bold text-[var(--brand)]">{tx(row.value)}</span>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title mb-3">{t("practical")}</h2>
        <div className="space-y-2">
          {practical.map((row) => (
            <div
              key={typeof row.label === "string" ? row.label : row.label.fr}
              className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--teal-soft)] px-4 py-3.5"
            >
              <span className="text-sm font-medium text-[var(--muted)]">
                {tx(row.label)}
              </span>
              <span className="text-right text-sm font-bold text-[var(--ink)]">
                {tx(row.value)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title mb-2">{t("athletesTitle")}</h2>
        <p className="mb-3 text-sm text-[var(--muted)]">{t("athletesSubtitle")}</p>
        <ul className="grid grid-cols-1 gap-2">
          {athletes.map((item) => (
            <li
              key={typeof item === "string" ? item : item.fr}
              className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium text-[var(--ink)]"
            >
              {tx(item)}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[28px] bg-[linear-gradient(135deg,#3a7190_0%,#131415_100%)] p-5 text-white">
        <p className="font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight">
          {hotel.fullName}
        </p>
        <p className="mt-2 text-sm text-white/70">{hotel.address}</p>
        <p className="mt-4 text-sm font-bold text-[#7dbfd3]">{hotel.phone}</p>
        <p className="mt-1 text-sm text-white/80">{hotel.phoneAlt}</p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={hotel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition active:scale-95"
          >
            <IconInstagram />
          </a>
          <a
            href={hotel.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition active:scale-95"
          >
            <IconFacebook />
          </a>
          <a
            href={hotel.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition active:scale-95"
          >
            <IconLinkedin />
          </a>
        </div>
        <p className="mt-3 text-sm font-semibold text-white/90">{t("shareStay")}</p>
      </section>
    </PageShell>
  );
}
