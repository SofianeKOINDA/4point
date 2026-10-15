"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";
import { InstallGuide, type InstallMode } from "./InstallGuide";

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
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) return;

    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      /* localStorage indisponible : on affiche quand même */
    }

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    /* eslint-disable react-hooks/set-state-in-effect */
    setIsIOS(ios);
    // iOS n'émet pas beforeinstallprompt : on peut proposer directement.
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
    setGuideOpen(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  async function runNativeInstall() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  }

  // Mode du guide : installation native si dispo, sinon pas-à-pas selon l'OS.
  const mode: InstallMode = deferred ? "native" : isIOS ? "ios" : "android";

  return (
    <>
      {visible && !guideOpen && (
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
                {t("installText")}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <button
                type="button"
                onClick={() => setGuideOpen(true)}
                className="rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-bold text-white active:scale-95"
              >
                {t("installButton")}
              </button>
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
      )}

      <InstallGuide
        open={guideOpen}
        mode={mode}
        onClose={() => setGuideOpen(false)}
        onInstall={runNativeInstall}
      />
    </>
  );
}
