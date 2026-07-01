"use client";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Globe } from "@/components/ui/globe";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { BorderBeam } from "@/components/ui/border-beam";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  Zap,
  Palette,
  Code2,
  BarChart3,
  Rocket,
  Shield,
  Star,
  Quote,
} from "lucide-react";

const techImages = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
];

const services = [
  "Brand Strategy",
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "E-Commerce",
  "SEO & Growth",
  "Cloud Infrastructure",
  "AI Integration",
  "Motion Design",
  "Content Strategy",
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, Lumina Health",
    quote:
      "VORTEX didn't just build our platform — they transformed how our patients interact with healthcare. 3x engagement in 60 days.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Founder, Drift Commerce",
    quote:
      "From concept to launch in 8 weeks. Our conversion rate jumped 47% after the redesign. These folks are the real deal.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "CTO, NovaTech",
    quote:
      "The technical architecture they built handles 10M+ requests daily without breaking a sweat. Exceptional engineering.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    role: "VP Product, Atlas Finance",
    quote:
      "VORTEX brought a level of craft and strategic thinking we hadn't found anywhere else. They're an extension of our team now.",
    rating: 5,
  },
];

const features = [
  {
    Icon: Zap,
    name: "Lightning Performance",
    description:
      "Sub-second load times with edge computing, ISR, and aggressive code splitting. Every millisecond counts.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Palette,
    name: "Design Systems",
    description:
      "Pixel-perfect design tokens, component libraries, and brand guidelines that scale with your product.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Code2,
    name: "Modern Stack",
    description:
      "Next.js 16, React 19, TypeScript, Tailwind CSS 4. We use the tools that ship the fastest products.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: BarChart3,
    name: "Data-Driven Growth",
    description:
      "A/B testing, analytics dashboards, and conversion funnels baked in from day one. No guesswork.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Shield,
    name: "Enterprise Security",
    description:
      "SOC 2 practices, OWASP compliance, encrypted at rest and in transit. Your data, protected.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Particles
        className="fixed inset-0 z-0"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />

      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="mb-6">
          <AnimatedGradientText className="text-sm font-medium">
            ✦ Trusted by 200+ brands worldwide
          </AnimatedGradientText>
        </div>

        <h1 className="font-display max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <TextAnimate animation="blurInUp" by="word">
            We craft digital
          </TextAnimate>
          <br />
          <AuroraText className="font-extrabold">
            experiences that convert
          </AuroraText>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <TextAnimate animation="fadeIn" by="word" delay={0.3}>
            VORTEX is a full-service digital agency building premium web
            platforms, brand identities, and growth systems for ambitious
            companies.
          </TextAnimate>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <ShimmerButton className="px-8 py-4 text-base">
            <span className="flex items-center gap-2">
              Book a Discovery Call <ArrowRight className="h-5 w-5" />
            </span>
          </ShimmerButton>
          <a
            href="/work"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Rocket className="h-4 w-4" /> See our work
          </a>
        </div>

        <div className="relative mx-auto mt-20 w-full max-w-4xl">
          <BorderBeam size={250} duration={12} />
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
            thumbnailSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            thumbnailAlt="VORTEX Agency Showreel"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
            thumbnailSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            thumbnailAlt="VORTEX Agency Showreel"
          />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-20 md:grid-cols-4">
          {[
            { value: 200, suffix: "+", label: "Projects Delivered" },
            { value: 97, suffix: "%", label: "Client Satisfaction" },
            { value: 15, suffix: "M+", label: "Users Reached" },
            { value: 4, suffix: "+", label: "Years of Craft" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                <NumberTicker value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES MARQUEE ─── */}
      <section id="services" className="relative z-10 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            What we do
          </TextAnimate>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <AuroraText>Full-Stack Excellence</AuroraText>
          </h2>
        </div>
        <div className="relative mt-16 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {services.map((service) => (
              <div
                key={service}
                className="mx-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {services.map((service) => (
              <div
                key={service}
                className="mx-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
        </div>
      </section>

      {/* ─── FEATURES / BENTO GRID ─── */}
      <section id="work" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Why choose us
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for <AuroraText>the modern web</AuroraText>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every project we ship is architected for performance, scalability,
              and conversion from the ground up.
            </p>
          </div>
          <BentoGrid>
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Our stack
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Powered by the <AuroraText>best tools</AuroraText>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We leverage the most reliable, performant, and modern technologies
              to deliver products that scale from MVP to millions of users.
            </p>
          </div>
          <div className="flex-1">
            <IconCloud images={techImages} />
          </div>
        </div>
      </section>

      {/* ─── ABOUT / GLOBE ─── */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row">
          <div className="relative h-[400px] w-[400px]">
            <Globe className="absolute inset-0" />
          </div>
          <div className="flex-1">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Global reach
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Serving clients <AuroraText>across the globe</AuroraText>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From San Francisco to Singapore, our distributed team of 30+
              engineers and designers works across time zones to deliver
              round-the-clock progress on your project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["North America", "Europe", "Asia Pacific", "Middle East"].map(
                (region) => (
                  <span
                    key={region}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                  >
                    {region}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Client love
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              What our clients <AuroraText>say about us</AuroraText>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <Quote className="mb-4 h-8 w-8 text-violet-400/40" />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <BorderBeam
                  size={150}
                  duration={10}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="pricing" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <TypingAnimation
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            duration={50}
          >
            Ready to build something extraordinary?
          </TypingAnimation>
          <h2 className="font-display mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s turn your vision
            <br />
            <AuroraText>into reality</AuroraText>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Book a free 30-minute discovery call. We&apos;ll map out your
            project, timeline, and budget — no strings attached.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ShimmerButton className="px-10 py-5 text-lg">
              <span className="flex items-center gap-3">
                Book Discovery Call <ArrowRight className="h-5 w-5" />
              </span>
            </ShimmerButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No commitment required · Free consultation · Response within 24h
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
