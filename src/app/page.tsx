"use client";

import Image from "next/image";
import Link from "next/link";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SectionCarousel } from "@/components/SectionCarousel";
import {
  IconCar,
  IconPhone,
  IconPin,
  IconWarning,
} from "@/components/Icons";
import {
  activities,
  discoverDakar,
  emergencies,
  hotel,
  hotelLife,
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
                <p className="text-lg font-extrabold text-[var(--brand)]">{tx(row.value)}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[var(--muted)]">
                  {tx(row.label)}
                </p>
              </a>
            ))}
          </div>
        </section>

        <SectionCarousel id="hotel" title={t("atHotel")} items={hotelLife} wide />
        <SectionCarousel id="activites" title={t("complex")} items={activities} />

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

        <section className="px-5 pb-2">
          <Link
            href="/infos"
            className="block rounded-[28px] bg-[linear-gradient(135deg,#3a7190_0%,#131415_100%)] p-5 text-white"
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
