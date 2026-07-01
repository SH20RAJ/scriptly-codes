import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VORTEX — Premium Digital Agency | Web Design, Development & Branding",
    template: "%s | VORTEX Agency",
  },
  description:
    "VORTEX is a premium digital agency crafting world-class web experiences, brand identities, and growth systems for ambitious companies. Next.js, React, Tailwind CSS experts.",
  keywords: [
    "digital agency",
    "web design agency",
    "web development",
    "UI/UX design",
    "brand strategy",
    "Next.js agency",
    "React development",
    "Tailwind CSS",
    "premium web templates",
    "landing page design",
    "mobile app development",
    "e-commerce development",
    "SEO services",
    "growth marketing",
  ],
  authors: [{ name: "VORTEX Agency", url: "https://scriptly.store" }],
  creator: "VORTEX Agency",
  publisher: "Scriptly Store",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VORTEX Agency",
    title: "VORTEX — Premium Digital Agency",
    description:
      "We craft digital experiences that convert. Premium web design, development, and branding for ambitious companies.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "VORTEX Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VORTEX — Premium Digital Agency",
    description:
      "We craft digital experiences that convert. Premium web design, development, and branding.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} dark h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://vortex-agency.surge.sh" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VORTEX Agency",
              url: "https://vortex-agency.surge.sh",
              description:
                "Premium digital agency crafting world-class web experiences, brand identities, and growth systems.",
              sameAs: [
                "https://github.com/sh20raj",
                "https://twitter.com/sh20raj",
              ],
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: "9999",
                highPrice: "99999",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
