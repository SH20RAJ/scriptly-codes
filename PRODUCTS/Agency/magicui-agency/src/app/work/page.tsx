import type { Metadata } from "next";
import WorkPageContent from "./content";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of premium web platforms, brand identities, and growth systems built for ambitious companies worldwide.",
  openGraph: {
    title: "Our Work | VORTEX Agency",
    description:
      "Premium web platforms, brand identities, and growth systems. See our portfolio.",
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
