import type { Metadata, Viewport } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const SITE_URL = "https://frolovalexey1.github.io";
const OG_IMAGE = `${BASE}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Алексей Фролов — AI Transformation Director",
  description:
    "Строю AI там, где он реально меняет бизнес — от стратегии до работающего кода. AI Transformation Director · DeepTech-предприниматель · 15+ лет.",
  keywords: [
    "AI Transformation",
    "Алексей Фролов",
    "DeepTech",
    "Industrial AI",
    "мультиагентные системы",
    "RAG",
    "MCP",
  ],
  authors: [{ name: "Алексей Фролов" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Алексей Фролов — AI Transformation Director",
    description:
      "Строю AI там, где он реально меняет бизнес — от стратегии до работающего кода.",
    siteName: "Алексей Фролов",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Алексей Фролов" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Алексей Фролов — AI Transformation Director",
    description:
      "Строю AI там, где он реально меняет бизнес — от стратегии до работающего кода.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
