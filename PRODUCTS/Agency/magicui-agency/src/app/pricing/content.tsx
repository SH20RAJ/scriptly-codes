"use client";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Check, X, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: 49999,
    period: "one-time",
    description: "Perfect for startups and small businesses launching their first digital presence.",
    popular: false,
    features: [
      { text: "Single-page website or landing page", included: true },
      { text: "Responsive design (mobile + desktop)", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "2 rounds of revisions", included: true },
      { text: "7-day delivery", included: true },
      { text: "Custom animations", included: false },
      { text: "CMS integration", included: false },
      { text: "E-commerce setup", included: false },
      { text: "Priority support (30 days)", included: false },
    ],
  },
  {
    name: "Growth",
    price: 149999,
    period: "one-time",
    description: "For established businesses ready to level up their digital game with a full-featured platform.",
    popular: true,
    features: [
      { text: "Multi-page website (up to 10 pages)", included: true },
      { text: "Responsive design (all devices)", included: true },
      { text: "Advanced SEO + analytics", included: true },
      { text: "Custom animations & interactions", included: true },
      { text: "CMS integration (Sanity/Strapi)", included: true },
      { text: "5 rounds of revisions", included: true },
      { text: "14-day delivery", included: true },
      { text: "Priority support (90 days)", included: true },
      { text: "E-commerce setup", included: false },
      { text: "Mobile app", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: 499999,
    period: "per project",
    description: "Full-scale digital transformation for companies that need everything — web, mobile, and backend.",
    popular: false,
    features: [
      { text: "Unlimited pages + web app", included: true },
      { text: "Cross-platform mobile app", included: true },
      { text: "Custom backend & API", included: true },
      { text: "E-commerce with payment gateway", included: true },
      { text: "Advanced animations (WebGL/GSAP)", included: true },
      { text: "AI integration (chatbots, recommendations)", included: true },
      { text: "Cloud infrastructure setup", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "Dedicated project manager", included: true },
      { text: "Priority support (12 months)", included: true },
    ],
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Starter projects: 5-7 business days. Growth projects: 2-3 weeks. Enterprise: 4-8 weeks depending on scope. We always agree on a timeline before starting.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We typically split payments into 3 milestones: 40% upfront, 30% at midpoint review, and 30% on delivery. For Enterprise projects, we can customize the payment schedule.",
  },
  {
    q: "What if I need changes after launch?",
    a: "All plans include post-launch support (30-365 days depending on tier). After that, we offer retainer packages starting at ₹25,000/month for ongoing maintenance and updates.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. Our distributed team works across time zones. We've delivered projects for clients in the US, UK, UAE, Singapore, and Australia.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes. You can upgrade at any time — we'll credit what you've already paid toward the higher tier. Many clients start with Starter and upgrade to Growth after seeing results.",
  },
  {
    q: "What tech stack do you use?",
    a: "We primarily use Next.js, React, TypeScript, and Tailwind CSS for frontend. Backend varies by project: Node.js, Python, or Go. We host on Vercel, AWS, or GCP depending on needs.",
  },
];

export default function PricingPageContent() {
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
          ✦ Transparent pricing
        </AnimatedGradientText>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          <TextAnimate animation="blurInUp" by="word">
            Invest in results,
          </TextAnimate>
          <br />
          <AuroraText className="font-extrabold">not just websites</AuroraText>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <TextAnimate animation="fadeIn" by="word" delay={0.3}>
            No hidden fees. No surprise invoices. Three clear tiers — pick what
            fits, upgrade when you&apos;re ready.
          </TextAnimate>
        </p>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300",
                plan.popular
                  ? "border-violet-500/50 bg-violet-500/5 scale-[1.02]"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 rounded-full bg-violet-500 px-4 py-1.5 text-xs font-semibold text-white">
                    <Star className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">₹</span>
                <span className="text-5xl font-bold tracking-tight">
                  <NumberTicker value={plan.price / 100} />
                </span>
                <span className="ml-1 text-sm text-muted-foreground">
                  / {plan.period}
                </span>
              </div>

              <ShimmerButton
                className={cn(
                  "mt-8 w-full py-3",
                  plan.popular
                    ? "bg-violet-600"
                    : ""
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </span>
              </ShimmerButton>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <span
                      className={cn(
                        "text-sm",
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      )}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <BorderBeam
                size={plan.popular ? 200 : 150}
                duration={plan.popular ? 8 : 12}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="relative z-10 border-y border-white/5 bg-background/40 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Compare <AuroraText>all plans</AuroraText>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 text-left font-medium text-muted-foreground">Feature</th>
                  <th className="py-4 text-center font-medium">Starter</th>
                  <th className="py-4 text-center font-medium text-violet-400">Growth</th>
                  <th className="py-4 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pages", "1", "Up to 10", "Unlimited"],
                  ["Custom Design", "✓", "✓", "✓"],
                  ["Responsive", "✓", "✓", "✓"],
                  ["SEO Setup", "Basic", "Advanced", "Advanced"],
                  ["Animations", "—", "✓", "WebGL/GSAP"],
                  ["CMS", "—", "✓", "✓"],
                  ["E-Commerce", "—", "—", "✓"],
                  ["Mobile App", "—", "—", "✓"],
                  ["AI Features", "—", "—", "✓"],
                  ["Support", "30 days", "90 days", "12 months"],
                  ["Revisions", "2", "5", "Unlimited"],
                  ["Delivery", "7 days", "14 days", "4-8 weeks"],
                ].map(([feature, starter, growth, enterprise]) => (
                  <tr key={feature} className="border-b border-white/5">
                    <td className="py-3 text-muted-foreground">{feature}</td>
                    <td className="py-3 text-center">{starter}</td>
                    <td className="py-3 text-center text-violet-400">{growth}</td>
                    <td className="py-3 text-center">{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Questions?
            </TextAnimate>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently <AuroraText>asked</AuroraText>
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative z-10 border-t border-white/5 bg-background/40 px-6 py-32 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Not sure which <AuroraText>plan fits?</AuroraText>
          </h2>
          <p className="mx-auto mt-6 text-lg text-muted-foreground">
            Book a free 30-minute call. We&apos;ll help you pick the right tier
            and scope your project.
          </p>
          <ShimmerButton className="mt-10 px-10 py-5 text-lg">
            <span className="flex items-center gap-3">
              Book Free Consultation <ArrowRight className="h-5 w-5" />
            </span>
          </ShimmerButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
