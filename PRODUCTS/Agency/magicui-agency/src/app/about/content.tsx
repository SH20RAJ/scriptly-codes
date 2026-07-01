"use client";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Globe } from "@/components/ui/globe";
import { BorderBeam } from "@/components/ui/border-beam";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Heart, Lightbulb, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Craft Over Speed",
    description:
      "We'd rather ship something exceptional in 8 weeks than something mediocre in 4. Every pixel, every line of code — intentional.",
  },
  {
    icon: Target,
    title: "Results, Not Vanity",
    description:
      "We measure success in conversion rates, user retention, and revenue impact — not awards or page views.",
  },
  {
    icon: Lightbulb,
    title: "Radical Transparency",
    description:
      "Weekly demos, open Slack channels, honest timelines. You'll never wonder what's happening with your project.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We don't just take orders. We challenge assumptions, suggest alternatives, and treat your business like our own.",
  },
];

const team = [
  {
    name: "Raj Shaswat",
    role: "Founder & Lead Engineer",
    bio: "Full-stack architect with 6+ years building production systems. Previously led engineering at two YC-backed startups.",
    image: "https://github.com/sh20raj.png",
  },
  {
    name: "Elena Vasquez",
    role: "Head of Design",
    bio: "Award-winning product designer. Former design lead at a Fortune 500 SaaS company. Obsessed with accessible interfaces.",
    image: "",
  },
  {
    name: "Kai Nakamura",
    role: "Frontend Architect",
    bio: "React and Next.js specialist. Contributor to several open-source UI libraries. Performance optimization fanatic.",
    image: "",
  },
  {
    name: "Priya Sharma",
    role: "Backend & Cloud Lead",
    bio: "Infrastructure engineer with deep AWS/GCP expertise. Built systems handling 50M+ daily requests at scale.",
    image: "",
  },
];

const milestones = [
  { year: "2021", event: "VORTEX founded as a freelance collective" },
  { year: "2022", event: "Grew to 10-person team, shipped 50+ projects" },
  { year: "2023", event: "Expanded to mobile apps and AI integration" },
  { year: "2024", event: "200+ projects delivered, 30+ team members" },
  { year: "2025", event: "Launched Scriptly Store product line" },
  { year: "2026", event: "Global expansion with offices in 3 continents" },
];

export default function AboutPageContent() {
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
          ✦ Who we are
        </AnimatedGradientText>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          <TextAnimate animation="blurInUp" by="word">
            A team obsessed with
          </TextAnimate>
          <br />
          <AuroraText className="font-extrabold">digital excellence</AuroraText>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <TextAnimate animation="fadeIn" by="word" delay={0.3}>
            We&apos;re 30+ engineers, designers, and strategists spread across
            the globe — united by a single belief: every business deserves a
            world-class digital presence.
          </TextAnimate>
        </p>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-20 md:grid-cols-4">
          {[
            { value: 30, suffix: "+", label: "Team Members" },
            { value: 200, suffix: "+", label: "Projects Shipped" },
            { value: 15, suffix: "M+", label: "End Users Served" },
            { value: 12, suffix: "", label: "Countries" },
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

      {/* ─── GLOBE + MISSION ─── */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Our mission
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Democratizing <AuroraText>premium digital craft</AuroraText>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We believe startups and mid-market companies deserve the same
              quality of design and engineering that big tech gets from
              100-person teams. VORTEX exists to close that gap.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every project we take on gets our full attention — no B-teams, no
              junior handoffs, no template-ware. Just senior talent solving real
              problems.
            </p>
          </div>
          <div className="relative h-[400px] w-[400px]">
            <Globe className="absolute inset-0" />
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              What drives us
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Our <AuroraText>values</AuroraText>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <value.icon className="h-8 w-8 text-violet-400" />
                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
                <BorderBeam
                  size={120}
                  duration={8}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              The people
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Meet the <AuroraText>team</AuroraText>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-blue-500">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-violet-400">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
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

      {/* ─── TIMELINE ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Our journey
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <AuroraText>Timeline</AuroraText>
            </h2>
          </div>
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-violet-500" />
                  <div className="h-full w-px bg-white/10" />
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-violet-400">
                    {m.year}
                  </span>
                  <p className="mt-1 text-muted-foreground">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Want to <AuroraText>join us?</AuroraText>
          </h2>
          <p className="mx-auto mt-6 text-lg text-muted-foreground">
            We&apos;re always looking for exceptional talent. If you&apos;re
            passionate about craft and impact, let&apos;s talk.
          </p>
          <ShimmerButton className="mt-10 px-10 py-5 text-lg">
            <span className="flex items-center gap-3">
              View Open Roles <ArrowRight className="h-5 w-5" />
            </span>
          </ShimmerButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
