import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Analytics } from "./components/Analytics";
import { absoluteUrl, siteDescription, siteName, siteUrl } from "./lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Yasali Perfumaria | Perfumes em Sorocaba",
    description: siteDescription,
    applicationName: siteName,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "shopping",
    alternates: { canonical: "/" },
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
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.svg?v=4", type: "image/svg+xml" },
        { url: "/media/brand/yasali-icon-transparent.png?v=1", sizes: "16x16", type: "image/png" },
        { url: "/media/brand/yasali-icon-transparent.png?v=1", sizes: "32x32", type: "image/png" },
        { url: "/media/brand/yasali-icon-transparent.png?v=1", sizes: "48x48", type: "image/png" },
        { url: "/media/brand/yasali-icon-transparent.png?v=1", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.svg?v=4",
      apple: [{ url: "/media/brand/yasali-icon-transparent.png?v=1", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: "Yasali Perfumaria | Perfumes em Sorocaba",
      description: siteDescription,
      type: "website",
      url: siteUrl,
      siteName,
      locale: "pt_BR",
      images: [{ url: absoluteUrl("/og.jpg"), width: 1792, height: 896, alt: "Yasali Perfumaria — perfumes árabes e importados" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Yasali Perfumaria | Perfumes em Sorocaba",
      description: siteDescription,
      images: [absoluteUrl("/og.jpg")],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/media/brand/yasali-icon-transparent.png?v=1" sizes="32x32" type="image/png" />
        <link rel="icon" href="/media/brand/yasali-icon-transparent.png?v=1" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/media/brand/yasali-icon-transparent.png?v=1" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
