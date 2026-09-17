import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { userName } from "./page";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${userName}`,
  description: `Portfolio site for ${userName}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        suppressHydrationWarning
      >
        <Header />
        <div className="pt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
