import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import { Providers } from "./providers";
import { PixelHeader } from "@/components/pixel-header";
import { PixelFooter } from "@/components/pixel-footer";

const CustomCursor = dynamic(() => import('@/components/custom-cursor'), {
  ssr: false,
  loading: () => null
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PIXELCRAFT — Retro Developer Portfolio & Blog",
  description: "A customizable retro pixel art styled personal portfolio and blog Next.js theme template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <CustomCursor />
          <PixelHeader />
          <main className="pt-24">{children}</main>
          <PixelFooter />
        </Providers>
      </body>
    </html>
  );
}