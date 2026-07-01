"use client";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Lumina Health Platform",
    category: "Healthcare · Web App",
    description:
      "A patient engagement platform serving 2M+ users. Real-time appointment booking, telehealth integration, and health records dashboard.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "Stripe", "WebRTC"],
    results: "3x engagement · 40% fewer no-shows",
    color: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Drift Commerce",
    category: "E-Commerce · Storefront",
    description:
      "Headless e-commerce platform with AI-powered product recommendations. Sub-200ms page loads and 47% conversion rate improvement.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Next.js", "Shopify", "Tailwind", "Algolia"],
    results: "47% conversion lift · $2.1M revenue",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "NovaTech Dashboard",
    category: "SaaS · Admin Panel",
    description:
      "Real-time analytics dashboard handling 10M+ daily requests. Custom charting, role-based access, and API management console.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Redis", "WebSocket"],
    results: "10M+ req/day · 99.99% uptime",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Atlas Finance App",
    category: "Fintech · Mobile App",
    description:
      "Cross-platform mobile banking app with biometric auth, P2P transfers, budget tracking, and investment portfolio management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["React Native", "Plaid", "Stripe", "Firebase"],
    results: "500K downloads · 4.8★ rating",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Verdant Sustainability",
    category: "Non-Profit · Website",
    description:
      "Interactive data visualization platform tracking global carbon emissions. Animated maps, real-time data feeds, and impact calculators.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    tags: ["Next.js", "Mapbox", "D3.js", "Tailwind"],
    results: "2M visitors/month · UN partnership",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Pulse Creative Studio",
    category: "Agency · Portfolio",
    description:
      "Award-winning creative agency portfolio with WebGL transitions, custom cursor interactions, and cinematic scroll animations.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    tags: ["Three.js", "GSAP", "Next.js", "Framer"],
    results: "Awwwards SOTD · 200% lead increase",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const clientLogos = [
  "Lumina Health",
  "Drift Commerce",
  "NovaTech",
  "Atlas Finance",
  "Verdant",
  "Pulse Studio",
  "Meridian AI",
  "Flux Design",
  "Apex Ventures",
  "Cipher Security",
];

export default function WorkPageContent() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
        <AnimatedGradientText className="mb-6 text-sm font-medium">
          ✦ Our portfolio
        </AnimatedGradientText>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          <TextAnimate animation="blurInUp" by="word">
            Work that speaks
          </TextAnimate>
          <br />
          <AuroraText className="font-extrabold">for itself</AuroraText>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <TextAnimate animation="fadeIn" by="word" delay={0.3}>
            Real projects. Real results. Every case study below represents a
            business transformed through design and engineering.
          </TextAnimate>
        </p>
      </section>

      {/* ─── CLIENT LOGOS ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 py-12">
        <Marquee pauseOnHover className="[--duration:25s]">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="mx-8 flex items-center gap-2 text-sm font-medium text-muted-foreground/60"
            >
              <div className="h-6 w-6 rounded bg-white/10" />
              {logo}
            </div>
          ))}
        </Marquee>
      </section>

      {/* ─── PROJECTS GRID ─── */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-violet-400">
                      {project.results}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </div>
                <BorderBeam
                  size={200}
                  duration={10}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative z-10 border-t border-white/5 bg-background/40 px-6 py-32 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Want to be our <AuroraText>next success story?</AuroraText>
          </h2>
          <p className="mx-auto mt-6 text-lg text-muted-foreground">
            Let&apos;s discuss your project and see how we can deliver results
            like these for your business.
          </p>
          <ShimmerButton className="mt-10 px-10 py-5 text-lg">
            <span className="flex items-center gap-3">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </span>
          </ShimmerButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
