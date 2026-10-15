"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-black/10 bg-white/90 p-0.5 shadow-sm backdrop-blur ${
        compact ? "" : ""
      }`}
      role="group"
      aria-label="Language"
    >
      {(["fr", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase transition ${
              active
                ? "bg-[var(--brand)] text-white"
                : "text-[var(--muted)]"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
