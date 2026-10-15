"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/LanguageProvider";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  backHref?: string;
};

export function PageShell({
  title,
  subtitle,
  children,
  backHref = "/",
}: Props) {
  const { t } = useI18n();

  return (
    <main className="mx-auto w-full max-w-lg pb-28">
      <header className="px-5 pb-4 pt-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--teal)]"
          >
            {t("back")}
          </Link>
          <LanguageSwitcher />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[2.2rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 text-sm text-[var(--muted)]">{subtitle}</p>
        ) : null}
      </header>
      <div className="space-y-6 px-5">{children}</div>
    </main>
  );
}
