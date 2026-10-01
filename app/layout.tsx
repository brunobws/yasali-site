import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "./components/Analytics";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const title = "Yasali Perfumaria | Perfumes em Sorocaba";
  const description = "Perfumes árabes, importados e decants em Sorocaba. Encontre uma fragrância para você com atendimento próximo da Yasali.";
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: "/" },
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
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1792, height: 896, alt: "Yasali Perfumaria — perfumes árabes e importados" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

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
