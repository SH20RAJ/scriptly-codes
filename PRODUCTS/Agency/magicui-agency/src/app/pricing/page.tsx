import type { Metadata } from "next";
import PricingPageContent from "./content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web development, design, and branding projects. Starter, Growth, and Enterprise tiers.",
  openGraph: {
    title: "Pricing | VORTEX Agency",
    description:
      "Transparent pricing for digital agency services. Starter, Growth, and Enterprise tiers.",
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
