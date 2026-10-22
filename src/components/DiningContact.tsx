"use client";

import { hotel } from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

/** Bloc de contact partagé (accueil + fiches restau) : réservation email / site + carte Bonvoy */
export function DiningContact() {
  const { t, lang } = useI18n();

  return (
    <>
      <section className="rounded-[28px] bg-brand-gradient p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {lang === "fr" ? "Réservation" : "Booking"}
        </p>
        <p className="mt-2 text-sm text-white/90">{t("bookingText")}</p>
        <a
          href={`mailto:${hotel.reservationsEmail}`}
          className="mt-3 block break-all text-sm font-bold text-white underline underline-offset-2"
        >
          {hotel.reservationsEmail}
        </a>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={`tel:${hotel.phone.replace(/\s/g, "")}`}
            className="rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-bold text-white"
          >
            {t("call")}
          </a>
          <a
            href={hotel.diningUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/15 px-4 py-2.5 text-sm font-bold text-white"
          >
            {t("website")}
          </a>
        </div>
      </section>

      <a
        href={hotel.bonvoyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-[28px] border border-[var(--line)] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
          Marriott Bonvoy · −10 %
        </p>
        <p className="mt-2 text-sm text-[var(--ink)]">{t("bonvoyOffer")}</p>
        <span className="mt-3 inline-block text-sm font-bold text-[var(--brand)]">
          {t("bonvoyCta")} →
        </span>
      </a>
    </>
  );
}
