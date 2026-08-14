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
  const description = "Encontre perfumes árabes, importados e decants com a curadoria e o atendimento próximo da Yasali Perfumaria, em Sorocaba.";
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    title,
    description,
    icons: {
      icon: "/media/brand/yasali-logo-primary.png",
      shortcut: "/media/brand/yasali-logo-primary.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: socialImage, width: 1792, height: 896, alt: "Yasali Perfumaria — encontre um perfume com a sua presença" }],
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
