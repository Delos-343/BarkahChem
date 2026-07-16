import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline.en}`,
    template: `%s - ${site.name}`,
  },
  description: site.description.en,
  keywords: [
    "automotive care",
    "car polish",
    "engine flush",
    "fragrance",
    "natural deodorant",
    "dishwashing liquid",
    "gum rosin",
    "industrial rosin",
    "Indonesia chemical supplier",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} - ${site.tagline.en}`,
    description: site.description.en,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline.en}`,
    description: site.description.en,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
