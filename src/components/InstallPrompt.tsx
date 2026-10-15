"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "fp-install-dismissed";

export function InstallPrompt() {
  const { t } = useI18n();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Déjà installée (mode standalone) → ne rien afficher.
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) return;

    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* localStorage indisponible : on affiche quand même */
    }

    // Détection client-only (navigator/matchMedia absents au SSR) :
    // setState synchrone assumé ici.
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    /* eslint-disable react-hooks/set-state-in-effect */
    setIsIOS(ios);
    // Sur iOS, pas d'événement d'install : on montre l'astuce directement.
    if (ios) setVisible(true);
    /* eslint-enable react-hooks/set-state-in-effect */

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    const onInstalled = () => dismiss();
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-24 z-40 flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-[22px] border border-black/5 bg-white/90 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
        <Image
          src="/icon-192.png"
          alt="Four Points"
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-xl"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold leading-tight text-[var(--ink)]">
            {t("installTitle")}
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-[var(--muted)]">
            {isIOS ? t("installIosHint") : t("installText")}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          {!isIOS && (
            <button
              type="button"
              onClick={install}
              className="rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-bold text-white active:scale-95"
            >
              {t("installButton")}
            </button>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="px-2 py-1 text-[11px] font-semibold text-[var(--muted)]"
          >
            {t("installDismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
