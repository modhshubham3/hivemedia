import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Both taken from the reference the client sent (opengrey.media), read off
// its computed styles: Instrument Serif for headings, Space Grotesk for
// everything else. Instrument Serif ships a single weight — hierarchy comes
// from size and its tight negative tracking, not from bolding.
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${serif.variable} ${grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
