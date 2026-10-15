"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconBed,
  IconCar,
  IconHome,
  IconPin,
  IconSpark,
} from "./Icons";
import { useI18n } from "@/i18n/LanguageProvider";

const items = [
  { href: "/", labelKey: "navHome" as const, match: "/" },
  { href: "/discover", labelKey: "navDiscover" as const, match: "/discover" },
  { href: "/transport", labelKey: "navTransport" as const, match: "/transport" },
  { href: "/infos", labelKey: "navInfos" as const, match: "/infos" },
];

function NavIcon({ labelKey, active }: { labelKey: string; active: boolean }) {
  if (labelKey === "navHome") return <IconHome filled={active} />;
  if (labelKey === "navDiscover") return <IconSpark />;
  if (labelKey === "navTransport") return <IconCar />;
  return <IconBed />;
}

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useI18n();

  if (pathname.startsWith("/map")) return null;

  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex w-full max-w-md items-center gap-2">
        <div className="flex flex-1 items-center justify-between rounded-full border border-black/5 bg-white/75 px-2 py-2 shadow-[0_16px_50px_rgba(0,0,0,0.16)] backdrop-blur-2xl">
          {items.map((item) => {
            const active = pathname === item.match;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-full px-1 py-1.5 text-[10px] font-semibold transition ${
                  active
                    ? "bg-[var(--wash)] text-[var(--brand)]"
                    : "text-[var(--muted)]"
                }`}
              >
                <NavIcon labelKey={item.labelKey} active={active} />
                <span className="truncate">{t(item.labelKey)}</span>
              </Link>
            );
          })}
        </div>
        <Link
          href="/map"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-black/5 bg-[var(--brand)] text-white shadow-[0_16px_40px_rgba(225,6,0,0.35)] backdrop-blur-2xl"
          aria-label={t("plan")}
        >
          <IconPin />
        </Link>
      </div>
    </nav>
  );
}
