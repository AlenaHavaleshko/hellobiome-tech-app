import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Skin Microbiome Explorer | Microbiome Research Platform",
    template: "%s | Skin Microbiome Explorer",
  },
  description:
    "Explore and analyze skin microbiome data. Discover bacteria and fungi living on human skin, their relative abundance, and roles in skin health. Interactive microbiome research platform.",
  keywords: [
    "skin microbiome",
    "microbiome research",
    "bacteria",
    "fungi",
    "cutibacterium acnes",
    "malassezia",
    "skin health",
    "microbiome analysis",
    "dermatology",
    "skin science",
  ],
  authors: [{ name: "HelloBiome Tech" }],
  creator: "HelloBiome Tech",
  publisher: "HelloBiome Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Skin Microbiome Explorer | Microbiome Research Platform",
    description:
      "Explore and analyze skin microbiome data. Discover bacteria and fungi living on human skin, their relative abundance, and roles in skin health.",
    siteName: "Skin Microbiome Explorer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Skin Microbiome Explorer - Research Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skin Microbiome Explorer | Microbiome Research Platform",
    description:
      "Explore and analyze skin microbiome data. Interactive platform for microbiome research.",
    images: ["/og-image.png"],
    creator: "@hellobiome",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
