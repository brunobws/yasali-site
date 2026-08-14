import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
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
  title: "Yasali Perfumaria | Perfumes em Sorocaba",
  description:
    "Conheça a curadoria de perfumes árabes, importados e decants da Yasali Perfumaria, em Sorocaba.",
  icons: {
    icon: "/media/brand/yasali-logo-primary.png",
    shortcut: "/media/brand/yasali-logo-primary.png",
  },
};

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
