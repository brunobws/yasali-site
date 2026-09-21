import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { headers } from "next/headers";
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
        { url: "/favicon.svg?v=3", type: "image/svg+xml" },
        { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
        { url: "/favicon-48.png?v=3", sizes: "48x48", type: "image/png" },
        { url: "/favicon.png?v=2", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.svg?v=3",
      apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
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
      <body className={`${montserrat.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
