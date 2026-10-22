"use client";

import Image from "next/image";
import Link from "next/link";
import { DiningContact } from "@/components/DiningContact";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SectionCarousel } from "@/components/SectionCarousel";
import { SmartImage } from "@/components/SmartImage";
import {
  IconCar,
  IconPhone,
  IconPin,
  IconWarning,
} from "@/components/Icons";
import {
  activities,
  diningVenues,
  discoverDakar,
  emergencies,
  hotel,
  hotelLife,
  meetingRooms,
  quickActions,
  transportDestinations,
} from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

const quickIcons = {
  urgence: IconWarning,
  reception: IconPhone,
  transport: IconCar,
  map: IconPin,
} as const;

export default function Home() {
  const { t, tx } = useI18n();

  return (
    <main className="mx-auto w-full max-w-lg pb-28">
      <header className="flex items-start justify-between gap-3 px-5 pb-4 pt-6">
        <div className="min-w-0">
          <Image
            src="/brand/logo-fourpoints.png"
            alt={hotel.fullName}
            width={220}
            height={70}
            className="h-14 w-auto object-contain"
            priority
          />
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <LanguageSwitcher />
          <a
            href={`tel:${hotel.phone.replace(/\s/g, "")}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            aria-label={t("call")}
          >
            <IconPhone />
          </a>
        </div>
      </header>

      <div className="space-y-7">
        <FeaturedCarousel />

        {/* Présentation de l'hôtel (demande client — document initial) */}
        <section className="px-5">
          <div className="rounded-[28px] border border-[var(--line)] bg-white/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
              {t("welcomeKicker")}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[1.7rem] font-extrabold leading-tight tracking-tight text-[var(--ink)]">
              {t("welcomeTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {t("welcomeText")}
            </p>
          </div>
        </section>

        <section className="px-5">
          <h2 className="section-title mb-4">{t("quickAccess")}</h2>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action) => {
              const Icon = quickIcons[action.id as keyof typeof quickIcons] ?? IconPin;
              return (
                <Link
                  key={action.id}
                  href={action.href}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className="flex h-[62px] w-[62px] items-center justify-center rounded-full text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition active:scale-95"
                    style={{ background: action.accent }}
                  >
                    <Icon />
                  </span>
                  <span className="text-[11px] font-semibold text-[var(--ink)]">
                    {tx(action.label)}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="px-5">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="section-title">{t("emergencies")}</h2>
            <Link href="/infos#urgence" className="text-xs font-bold text-[var(--brand)]">
              {t("seeAll")}
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {emergencies.slice(0, 3).map((row) => (
              <a
                key={typeof row.label === "string" ? row.label : row.label.fr}
                href={row.href}
                className="rounded-2xl bg-[#fff1f0] px-3 py-3 text-center"
              >
                <p className="flex items-center justify-center gap-1.5 text-lg font-extrabold text-[var(--brand)]">
                  <IconPhone className="h-4 w-4" />
                  {tx(row.value)}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[var(--muted)]">
                  {tx(row.label)}
                </p>
              </a>
            ))}
          </div>
        </section>

        <SectionCarousel id="hotel" title={t("atHotel")} items={hotelLife} wide />

        {/* Restaurants & Bars — horaires & descriptions (demande client) */}
        <section className="px-5">
          <div className="mb-3">
            <h2 className="section-title">{t("diningTitle")}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{t("diningSubtitle")}</p>
          </div>
          <div className="space-y-4">
            {diningVenues.map((venue) => (
              <Link
                key={venue.id}
                href={`/restau/${venue.id}`}
                className="block overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition active:scale-[0.99]"
              >
                <div className="relative h-44 w-full">
                  <SmartImage
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 512px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
                    {tx(venue.tag)}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold leading-none text-white">
                      {venue.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-bold text-white">
                      {venue.hours}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <p className="text-sm text-[var(--muted)]">{tx(venue.teaser)}</p>
                  <span className="shrink-0 text-xs font-bold text-[var(--brand)]">
                    {t("seeAll")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact réservation & Bonvoy — partagé avec les fiches restau */}
        <section className="space-y-4 px-5">
          <DiningContact />
        </section>

        {/* Salles de réunion — noms & photos fournis par l'hôtel */}
        <section id="meeting" className="scroll-mt-24 px-5">
          <div className="mb-3">
            <h2 className="section-title">{t("meetingTitle")}</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{t("meetingSubtitle")}</p>
          </div>
          <div className="space-y-4">
            {meetingRooms.map((room) => (
              <div
                key={room.id}
                className="relative h-44 overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <SmartImage
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 512px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-4 font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight text-white">
                  {room.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="section-title">{t("transport")}</h2>
            <Link href="/transport" className="text-xs font-bold text-[var(--teal)]">
              {t("fullTab")}
            </Link>
          </div>
          <div className="space-y-2">
            {transportDestinations.map((dest) => (
              <Link
                key={dest.id}
                href="/transport"
                className="flex items-center justify-between rounded-2xl bg-[var(--teal-soft)] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-bold text-[var(--ink)]">{tx(dest.title)}</p>
                  <p className="text-xs text-[var(--muted)]">{tx(dest.subtitle)}</p>
                </div>
                <span className="text-xs font-bold text-[var(--teal)]">
                  {tx(dest.time)}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div>
          <div className="mb-1 flex items-end justify-between px-5">
            <h2 className="section-title">{t("discoverDakar")}</h2>
            <Link href="/discover" className="pb-0.5 text-xs font-bold text-[var(--teal)]">
              {t("seeAll")}
            </Link>
          </div>
          <SectionCarousel items={discoverDakar} linkBase="/discover" />
        </div>

        {/* The Ground / Le complexe — déplacé en fin de page (demande client) */}
        <SectionCarousel id="activites" title={t("complex")} items={activities} />

        <section className="px-5 pb-2">
          <Link
            href="/infos"
            className="block rounded-[28px] bg-brand-gradient p-5 text-white"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
              Guest Guide
            </p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-extrabold">
              {t("guestGuideCard")}
            </p>
            <p className="mt-1 text-sm text-white/75">{t("guestGuideCardSub")}</p>
          </Link>
        </section>
      </div>
    </main>
  );
}
