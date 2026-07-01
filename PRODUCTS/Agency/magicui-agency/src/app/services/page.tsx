import type { Metadata } from "next";
import ServicesPageContent from "./content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service digital capabilities — web development, UI/UX design, brand strategy, mobile apps, e-commerce, SEO, cloud infrastructure, and AI integration.",
  openGraph: {
    title: "Our Services | VORTEX Agency",
    description:
      "Full-service digital capabilities for ambitious companies. Web development, design, branding, and more.",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
