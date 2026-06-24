import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SmileFlow — Premium Cosmetic & Implant Dentistry",
  description: "Expert dental care with advanced technology, experienced specialists, and personalized treatment plans designed to keep your smile healthy and confident. Book your free consultation today.",
  keywords: ["dentist near me", "cosmetic dentist", "dental implants", "teeth whitening", "emergency dentist", "invisalign specialist", "best dental clinic", "smile makeover"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data for local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "SmileFlow Dental Practice",
    "image": "https://smileflow.shraj.workers.dev/clinic.png",
    "@id": "https://smileflow.shraj.workers.dev/#dentist",
    "url": "https://smileflow.shraj.workers.dev",
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/smileflow",
      "https://www.instagram.com/smileflow",
      "https://www.linkedin.com/company/smileflow"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased font-sans bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
