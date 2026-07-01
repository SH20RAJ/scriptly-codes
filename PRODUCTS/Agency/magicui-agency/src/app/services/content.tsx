"use client";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  Cloud,
  Brain,
  Brush,
  BarChart3,
  Layers,
  Palette,
} from "lucide-react";

const serviceList = [
  {
    Icon: Layers,
    name: "Web Development",
    description:
      "Full-stack web applications built with Next.js, React, and TypeScript. Server-side rendering, edge functions, and API routes — all optimized for performance.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Palette,
    name: "UI/UX Design",
    description:
      "User research, wireframing, prototyping, and pixel-perfect design systems. We design experiences that users love and businesses depend on.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Brush,
    name: "Brand Strategy",
    description:
      "Logo design, brand guidelines, visual identity systems, and messaging frameworks that make your brand unforgettable.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Smartphone,
    name: "Mobile Apps",
    description:
      "Cross-platform mobile applications with React Native and Expo. Native performance, shared codebase, and faster time to market.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Globe,
    name: "E-Commerce",
    description:
      "Custom storefronts, headless commerce, payment integration, and inventory management. Built for conversions and scale.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Search,
    name: "SEO & Growth",
    description:
      "Technical SEO audits, content strategy, conversion rate optimization, and analytics dashboards. Data-driven growth, not guesswork.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Cloud,
    name: "Cloud Infrastructure",
    description:
      "AWS, GCP, and Vercel deployments. CI/CD pipelines, containerization, monitoring, and auto-scaling architectures.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Brain,
    name: "AI Integration",
    description:
      "LLM-powered features, chatbots, recommendation engines, and intelligent automation. We integrate AI where it actually matters.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We deep-dive into your business goals, users, and competitive landscape. No assumptions — only research.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We architect the solution, define the tech stack, create wireframes, and map out the project timeline.",
  },
  {
    step: "03",
    title: "Design & Build",
    description:
      "Pixel-perfect design meets production-grade code. Iterative sprints with weekly demos and feedback loops.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "Deploy, monitor, optimize. We don't disappear after launch — we stick around to drive measurable results.",
  },
];

export default function ServicesPageContent() {
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
          ✦ What we do
        </AnimatedGradientText>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          <TextAnimate animation="blurInUp" by="word">
            Services built for
          </TextAnimate>
          <br />
          <AuroraText className="font-extrabold">ambitious companies</AuroraText>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <TextAnimate animation="fadeIn" by="word" delay={0.3}>
            From strategy to launch, we handle every layer of your digital
            presence so you can focus on what you do best.
          </TextAnimate>
        </p>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <BentoGrid>
            {serviceList.map((service, idx) => (
              <BentoCard key={idx} {...service} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Our process
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              How we <AuroraText>work</AuroraText>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <span className="text-5xl font-bold text-violet-500/20">
                  {step.step}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <BorderBeam
                  size={100}
                  duration={8}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to <AuroraText>get started?</AuroraText>
          </h2>
          <p className="mx-auto mt-6 text-lg text-muted-foreground">
            Book a free discovery call. We&apos;ll map out the perfect
            engagement for your project.
          </p>
          <ShimmerButton className="mt-10 px-10 py-5 text-lg">
            <span className="flex items-center gap-3">
              Book Discovery Call <ArrowRight className="h-5 w-5" />
            </span>
          </ShimmerButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
