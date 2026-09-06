import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hivemedia.co.in"),
  title: "Hive Media — Coming Soon",
  description:
    "Hive Media is a digital marketing agency. Social media, performance ads, content production and influencer campaigns. Launching soon.",
  openGraph: {
    title: "Hive Media — Coming Soon",
    description:
      "A digital marketing agency for brands that want to be seen. Launching soon.",
    url: "https://hivemedia.co.in",
    siteName: "Hive Media",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hive Media — Coming Soon",
    description:
      "A digital marketing agency for brands that want to be seen. Launching soon.",
  },
};

export const viewport = {
  themeColor: "#FBF6E9",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${instrument.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
