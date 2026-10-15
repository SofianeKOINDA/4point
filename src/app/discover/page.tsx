"use client";

import { SectionCarousel } from "@/components/SectionCarousel";
import { PageShell } from "@/components/PageShell";
import {
  discoverDakar,
  discoverSenegal,
  food,
  wolof,
} from "@/data/guide";
import { useI18n } from "@/i18n/LanguageProvider";

export default function DiscoverPage() {
  const { t } = useI18n();

  return (
    <PageShell title={t("discover")} subtitle={t("discoverSubtitle")}>
      <div className="-mx-5 space-y-7">
        <SectionCarousel
          id="dakar"
          title={t("discoverDakar")}
          items={discoverDakar}
          linkBase="/discover"
        />
        <SectionCarousel
          id="senegal"
          title={t("discoverSenegal")}
          items={discoverSenegal}
        />
      </div>

      <section>
        <h2 className="section-title mb-2">{t("terangaTitle")}</h2>
        <p className="mb-4 text-sm text-[var(--muted)]">{t("terangaText")}</p>
        <div className="space-y-2">
          {wolof.map((row) => (
            <div
              key={row.key}
              className="flex items-center justify-between rounded-2xl bg-[var(--wash)] px-4 py-3"
            >
              <span className="text-sm text-[var(--muted)]">{t(row.key)}</span>
              <span className="text-sm font-bold text-[var(--ink)]">{row.wo}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title mb-3">{t("foodTitle")}</h2>
        <div className="flex flex-wrap gap-2">
          {food.map((dish) => (
            <span
              key={dish}
              className="rounded-full bg-[var(--teal-soft)] px-3 py-1.5 text-sm font-semibold text-[var(--teal)]"
            >
              {dish}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-[var(--muted)]">{t("foodTip")}</p>
      </section>
    </PageShell>
  );
}
