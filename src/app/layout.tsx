import type { Metadata, Viewport } from "next";
import { Barlow, Zilla_Slab } from "next/font/google";
import { BottomNav } from "@/components/BottomNav";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

/* Proches de la plaquette PDF : Trade Gothic → Barlow, Clarendon → Zilla Slab */
const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Zilla_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Four Points · Guest Guide",
  description:
    "Guest guide — Four Points by Sheraton Dakar Diamniadio. Hotel, TEN, transport, Discover Dakar & Senegal.",
  applicationName: "Guest Guide",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Guest Guide",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3a7190",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <BottomNav />
          <InstallPrompt />
        </LanguageProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
