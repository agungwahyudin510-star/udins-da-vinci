import type { Metadata } from "next";
import { Spectral, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Cursor } from "@/components/ui/cursor";
import { Starfield } from "@/components/galaxy/starfield";
import { Nebula } from "@/components/galaxy/nebula";
import { Milkyway } from "@/components/galaxy/milkyway";
import { Astronaut } from "@/components/galaxy/astronaut";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${spectral.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Starfield />
        <Nebula />
        <Milkyway />
        <Astronaut />
        <Cursor />
        {children}
      </body>
    </html>
  );
}