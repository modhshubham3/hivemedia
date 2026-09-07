import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

/**
 * Geist, from the reference the client sent (cheesecakedigital.in), read off
 * its computed styles. That site pairs Geist with Mango Grotesque for its two
 * biggest headings, but Mango Grotesque is not on Google Fonts (the API
 * returns 404) — it is a licensed face, so it cannot be embedded here. Geist
 * carries about a hundred elements on their page against Mango's nine, so it
 * is the voice of that design anyway, and it ships 100-900 which is what
 * lets the headings actually go bold.
 */
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
  themeColor: "#FDFBF5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
