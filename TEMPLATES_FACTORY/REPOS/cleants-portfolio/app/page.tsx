"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export const userName = "Roy Dereks";
export const userEmail = "roy@dereks.com";
export const githubUserName = "danmolloy";
export const linkedInUserName = "daniel-molloy-8b517032b";

export default function Home() {
  return (
    <div
      data-testid="home"
      className="bg-neutral-50 dark:bg-neutral-900 dark:text-slate-400"
    >
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
