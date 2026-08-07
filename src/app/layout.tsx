import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/components/providers/root-provider";
import { Navbar } from "@/components/navigation/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aether.design"),
  title: "AETHER — Beyond Screens. Intelligent Air.",
  description:
    "The world's first screenless ambient neural companion. Crafted from acoustic-grade titanium and powered by the 5ms local NC-1 neural engine.",
  keywords: [
    "AETHER",
    "AETHER ONE",
    "AI companion",
    "screenless device",
    "ambient intelligence",
    "titanium hardware",
    "neural engine",
  ],
  authors: [{ name: "AETHER Technologies" }],
  openGraph: {
    title: "AETHER ONE — Beyond Screens. Intelligent Air.",
    description:
      "Experience AETHER ONE. The zero-display future of personal computing powered by localized air-gapped neural intelligence.",
    url: "https://aether.design",
    siteName: "AETHER",
    images: [
      {
        url: "/aether-one-device.jpg",
        width: 1200,
        height: 630,
        alt: "AETHER ONE Ambient Neural Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AETHER ONE — Beyond Screens.",
    description:
      "Screenless ambient neural companion powered by local 5ms NC-1 neural architecture.",
    images: ["/aether-one-device.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

const JSON_LD_PRODUCT = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "AETHER ONE",
  image: ["https://aether.design/aether-one-device.jpg"],
  description: "Screenless ambient neural companion crafted from Grade 5 titanium.",
  brand: {
    "@type": "Brand",
    name: "AETHER Technologies",
  },
  offers: {
    "@type": "Offer",
    url: "https://aether.design/#pre-order",
    priceCurrency: "USD",
    price: "1299.00",
    availability: "https://schema.org/PreOrder",
    itemCondition: "https://schema.org/NewCondition",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PRODUCT) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07080b] text-[var(--text-titanium)] selection:bg-[var(--accent-teal)] selection:text-[#07080b]">
        <RootProvider>
          <Navbar />
          <main className="flex-1 w-full relative">{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
