import type { Metadata } from "next";
import AboutPageContent from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "VORTEX is a distributed team of 30+ engineers and designers crafting world-class digital experiences across time zones.",
  openGraph: {
    title: "About Us | VORTEX Agency",
    description:
      "A distributed team of 30+ engineers and designers building world-class digital products.",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
