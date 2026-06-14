import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow, PageAmbient, ScrollProgress } from "@/components/effects";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteWidgets } from "@/components/SiteWidgets";
import { MobileStickyCall } from "@/components/MobileStickyCall";
import { JsonLd, localBusinessJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const fontDisplay = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline} | Citrus County, FL`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} — ${site.tagline} in ${site.location}. Mobile auto repair, handyman, and exterior services by ${site.owner}. ${site.status}. Call ${site.phone}.`,
  keywords: [
    "mobile auto repair Citrus County",
    "mobile mechanic Citrus County FL",
    "handyman Citrus County",
    "brake repair Citrus County",
    "pressure washing Citrus County",
    "Infinity Mobile",
    "Michael Caputo mechanic",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: `Professional mobile auto repair and handyman services in ${site.location}. ${site.status}. Call ${site.phone}.`,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: `Mobile auto repair and handyman services in ${site.location}. Call ${site.phone}.`,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} h-full scroll-smooth`}>
      <body className="relative min-h-full flex flex-col bg-bg text-fg antialiased">
        <PageAmbient />
        <CursorGlow />
        <ScrollProgress />
        <LoadingScreen />
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main className="relative z-[2] flex-1 pb-[4.5rem] md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCall />
        <SiteWidgets />
      </body>
    </html>
  );
}
