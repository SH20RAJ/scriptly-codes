"use client";

import Link from "next/link";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "Brand Strategy", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Contact", href: "/about" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Twitter", href: "https://x.com/sh20raj" },
      { label: "LinkedIn", href: "https://linkedin.com/in/sh20raj" },
      { label: "GitHub", href: "https://github.com/sh20raj" },
      { label: "Dribbble", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-background/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500" />
              <span className="text-xl font-bold tracking-tight">VORTEX</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium digital agency crafting world-class web experiences,
              brands, and products.
            </p>
          </div>
          {footerSections.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VORTEX Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
          <a
            href="https://scriptly.store/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Powered by Scriptly Store
          </a>
        </div>
      </div>
    </footer>
  );
}
