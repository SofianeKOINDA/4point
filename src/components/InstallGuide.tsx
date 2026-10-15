"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

export type InstallMode = "native" | "ios" | "android";

type Props = {
  open: boolean;
  mode: InstallMode;
  onClose: () => void;
  onInstall: () => void;
  /** false = pas d'animation (ex. prévisualisation / capture). */
  animate?: boolean;
};

/* ── Petites icônes inline ───────────────────────────────── */
function IconShare() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 15V4m0 0L8.5 7.5M12 4l3.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconAddSquare() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8.5v7M8.5 12h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconDots() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

/* Flèche « dessinée », pointe vers le bas ou le haut. */
function CurvedArrow({ dir }: { dir: "down" | "up" }) {
  return (
    <svg
      viewBox="0 0 60 90"
      className={`h-20 w-14 ${dir === "up" ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M30 6 C 14 26, 46 48, 30 78"
        stroke="var(--brand)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M18 66 L30 82 L42 66"
        stroke="var(--brand)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstallGuide({ open, mode, onClose, onInstall, animate = true }: Props) {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  // Monte à l'ouverture, démonte après l'animation de sortie.
  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
      return;
    }
    if (!mounted) return;
    const done = () => setMounted(false);
    if (!cardRef.current) return done();
    gsap.to(arrowRef.current, { autoAlpha: 0, duration: 0.15 });
    gsap.to(cardRef.current, { y: 40, scale: 0.95, autoAlpha: 0, duration: 0.22, ease: "power2.in" });
    gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.28, onComplete: done });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Animation d'entrée (une fois monté).
  useLayoutEffect(() => {
    if (!mounted || !open) return;
    const ctx = gsap.context(() => {
      gsap.set(rootRef.current, { autoAlpha: 1 });
      if (!animate) return;
      const tl = gsap.timeline();
      tl.from(overlayRef.current, { autoAlpha: 0, duration: 0.25 });
      tl.from(
        cardRef.current,
        { y: 60, scale: 0.9, autoAlpha: 0, duration: 0.55, ease: "back.out(1.5)" },
        "-=0.08",
      );
      tl.from(
        cardRef.current?.querySelectorAll<HTMLElement>("[data-anim]") ?? [],
        { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.4, ease: "power2.out" },
        "-=0.28",
      );
      if (arrowRef.current) {
        tl.from(arrowRef.current, { autoAlpha: 0, duration: 0.3 }, "-=0.15");
        gsap.to(arrowRef.current, {
          y: mode === "ios" ? 16 : -16,
          repeat: -1,
          yoyo: true,
          duration: 0.75,
          ease: "sine.inOut",
        });
      }
    }, rootRef);
    return () => ctx.revert();
  }, [mounted, open, mode, animate]);

  function install() {
    onInstall();
    onClose();
  }

  if (!mounted) return null;

  const steps =
    mode === "ios"
      ? [
          { icon: <IconShare />, text: t("guideStep1Ios") },
          { icon: <IconAddSquare />, text: t("guideStep2Ios") },
        ]
      : [
          { icon: <IconDots />, text: t("guideStep1Android") },
          { icon: <IconAddSquare />, text: t("guideStep2Android") },
        ];

  return (
    <div ref={rootRef} className="fixed inset-0 z-[60] invisible" role="dialog" aria-modal="true">
      <div
        ref={overlayRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
      />

      {/* Flèche animée vers le bouton du navigateur (sauf install native) */}
      {mode !== "native" && (
        <div
          ref={arrowRef}
          className={`pointer-events-none fixed z-[61] flex flex-col items-center gap-1 ${
            mode === "ios"
              ? "bottom-3 left-1/2 -translate-x-1/2"
              : "right-4 top-3"
          }`}
        >
          {mode === "android" && <CurvedArrow dir="up" />}
          <span className="rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-bold text-white shadow-lg">
            {mode === "ios" ? t("guideLabelShare") : t("guideLabelMenu")}
          </span>
          {mode === "ios" && <CurvedArrow dir="down" />}
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center p-5">
        <div
          ref={cardRef}
          className="relative w-full max-w-sm overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        >
          {/* liseré de marque en haut */}
          <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#e10600,#eacb4e,#3a7190,#7dbfd3)]" />

          <button
            type="button"
            onClick={onClose}
            aria-label="×"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-[var(--muted)]"
          >
            ✕
          </button>

          <div data-anim className="flex items-center gap-3">
            <Image
              src="/icon-192.png"
              alt="Four Points"
              width={52}
              height={52}
              className="shrink-0 rounded-2xl shadow-sm"
            />
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-extrabold leading-tight text-[var(--ink)]">
                {t("guideTitle")}
              </h2>
              <p className="mt-0.5 text-[13px] leading-snug text-[var(--muted)]">
                {t("guideSubtitle")}
              </p>
            </div>
          </div>

          {mode === "native" ? (
            <button
              data-anim
              type="button"
              onClick={install}
              className="mt-6 w-full rounded-2xl bg-[var(--brand)] py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(225,6,0,0.3)] active:scale-[0.98]"
            >
              {t("guideInstallNow")}
            </button>
          ) : (
            <ol className="mt-5 space-y-3">
              {steps.map((step, i) => (
                <li
                  data-anim
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-[var(--teal-soft)] p-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[var(--teal)]">{step.icon}</span>
                  <span className="text-[13px] font-semibold leading-snug text-[var(--ink)]">
                    {step.text}
                  </span>
                </li>
              ))}
            </ol>
          )}

          <button
            data-anim
            type="button"
            onClick={onClose}
            className="mt-5 w-full rounded-2xl border border-[var(--line)] py-3 text-sm font-bold text-[var(--muted)] active:scale-[0.98]"
          >
            {t("guideGotIt")}
          </button>
        </div>
      </div>
    </div>
  );
}
