"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SmartImage } from "@/components/SmartImage";
import { getDiningVenue, hotel } from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

export default function DiningDetailPage() {
  const params = useParams<{ id: string }>();
  const { t, tx, lang } = useI18n();
  const venue = getDiningVenue(params.id);

  if (!venue) {
    return (
      <PageShell title={lang === "fr" ? "Introuvable" : "Not found"} backHref="/">
        <p className="text-sm text-[var(--muted)]">
          {lang === "fr"
            ? "Cet établissement n’existe pas."
            : "This venue doesn’t exist."}
        </p>
        <Link href="/" className="text-sm font-bold text-[var(--teal)]">
          {t("back")}
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell
      title={venue.name}
      subtitle={`${tx(venue.tag)} · ${venue.hours}`}
      backHref="/"
    >
      <div className="relative h-56 overflow-hidden rounded-[28px]">
        <SmartImage
          src={venue.image}
          alt={venue.name}
          fill
          className="object-cover"
          priority
          sizes="500px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-black">
          {tx(venue.tag)}
        </span>
      </div>

      <div className="flex items-center justify-between rounded-[22px] bg-[var(--wash)] px-4 py-3">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
          {t("hoursLabel")}
        </span>
        <span className="text-sm font-extrabold text-[var(--ink)]">
          {venue.hours}
        </span>
      </div>

      <p className="text-[15px] leading-relaxed text-[var(--ink)]">
        {tx(venue.description)}
      </p>

      {venue.gallery?.length ? (
        <div className="grid grid-cols-2 gap-3">
          {venue.gallery.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-[20px]"
            >
              <SmartImage
                src={src}
                alt={venue.name}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          ))}
        </div>
      ) : null}

      <section className="rounded-[28px] bg-[var(--teal)] p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {lang === "fr" ? "Réservation" : "Booking"}
        </p>
        <p className="mt-2 text-sm text-white/90">
          {lang === "fr"
            ? "Réservez ou renseignez-vous auprès de la réception."
            : "Book or ask reception for more information."}
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
