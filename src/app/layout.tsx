import type { Metadata, Viewport } from "next";
import { Barlow, Zilla_Slab } from "next/font/google";
import { BottomNav } from "@/components/BottomNav";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { hotel } from "@/data/guide";
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

/* URL publique du site — à définir dans NEXT_PUBLIC_SITE_URL en production */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fourpoint.linkup.sn";

const title = "Four Points by Sheraton Dakar Diamniadio · Guest Guide";
const description =
  "Guide client officiel du Four Points by Sheraton Dakar Diamniadio : hôtel, restaurant & bar, espace TEN (trampoline, escalade, ninja), transport, numéros utiles et découverte de Dakar et du Sénégal.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Four Points by Sheraton Dakar",
  },
  description,
  applicationName: "Guest Guide",
  keywords: [
    "Four Points by Sheraton",
    "Dakar Diamniadio",
    "hôtel Dakar",
    "guest guide",
    "guide client hôtel",
    "espace TEN",
    "trampoline escalade ninja Dakar",
    "Dakar Arena",
    "Pôle Urbain Diamniadio",
    "que faire à Dakar",
    "Sénégal",
  ],
  authors: [{ name: "Four Points by Sheraton Dakar Diamniadio" }],
  creator: "Four Points by Sheraton Dakar Diamniadio",
  publisher: "Four Points by Sheraton Dakar Diamniadio",
  category: "travel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Four Points by Sheraton Dakar Diamniadio — Guest Guide",
    title,
    description,
    url: siteUrl,
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Four Points by Sheraton Dakar Diamniadio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
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

/* Données structurées Schema.org pour les moteurs de recherche (rich results) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.fullName,
  brand: { "@type": "Brand", name: "Four Points by Sheraton" },
  description,
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/brand/logo-fourpoints.png`,
  telephone: hotel.phone,
  email: hotel.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: hotel.address,
    addressLocality: "Diamniadio",
    addressRegion: "Dakar",
    addressCountry: "SN",
  },
  sameAs: [hotel.instagramUrl, hotel.facebookUrl, hotel.linkedinUrl].filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
