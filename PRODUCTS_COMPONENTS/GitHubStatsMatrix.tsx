"use client";

import React, { useState } from "react";

export interface ContributionItem {
  repo: string;
  title: string;
  url: string;
  mergedAt: string;
  number: number;
}

export interface RepoHighlight {
  name: string;
  description: string;
  stars: number;
  language: string;
  prs: number;
}

interface GitHubStatsMatrixProps {
  username?: string;
  mergedPrs?: number;
  externalRepos?: number;
  totalContributions?: string;
  followers?: number;
  recentPRs?: ContributionItem[];
  topRepos?: RepoHighlight[];
  brandLink?: string;
  className?: string;
}

const DEFAULT_PRS: ContributionItem[] = [
  {
    repo: "google-gemini/gemini-cli",
    title: "fix(core): thread AbortSignal to chat compression requests",
    url: "https://github.com/google-gemini/gemini-cli",
    mergedAt: "Merged 2 days ago",
    number: 20778,
  },
  {
    repo: "tailwindlabs/tailwindcss",
    title: "perf: optimize arbitrary value parser for nested media queries",
    url: "https://github.com/tailwindlabs/tailwindcss",
    mergedAt: "Merged last week",
    number: 14820,
  },
  {
    repo: "shadcn-ui/ui",
    title: "feat(dialog): enhance keyboard trap accessibility in nested modals",
    url: "https://github.com/shadcn-ui/ui",
    mergedAt: "Merged 2 weeks ago",
    number: 4591,
  },
  {
    repo: "vercel/next.js",
    title: "docs(turbopack): clarify persistent cache invalidation rules",
    url: "https://github.com/vercel/next.js",
    mergedAt: "Merged 3 weeks ago",
    number: 68190,
  },
];

const DEFAULT_REPOS: RepoHighlight[] = [
  {
    name: "scriptly-codes",
    description: "Production templates, UI components, and automation engines for modern creators.",
    stars: 128,
    language: "TypeScript",
    prs: 45,
  },
  {
    name: "kinetic-motion-lab",
    description: "Experimental Three.js shaders and GSAP ScrollTrigger animation recipes.",
    stars: 340,
    language: "GLSL / React",
    prs: 28,
  },
  {
    name: "agentic-commerce-kit",
    description: "Headless Stripe & digital license generation runtime for autonomous developer agents.",
    stars: 215,
    language: "Python / Node",
    prs: 19,
  },
];

export function GitHubStatsMatrix({
  username = "sh20raj",
  mergedPrs = 312,
  externalRepos = 48,
  totalContributions = "15,200+",
  followers = 840,
  recentPRs = DEFAULT_PRS,
  topRepos = DEFAULT_REPOS,
  brandLink = "https://scriptly.store/",
  className = "",
}: GitHubStatsMatrixProps) {
  const [activeTab, setActiveTab] = useState<"prs" | "repos">("prs");

  return (
    <div
      className={`w-full max-w-4xl mx-auto rounded-2xl bg-[#090a10] border border-white/10 text-white p-6 md:p-8 font-sans shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Profile Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 flex items-center justify-center font-mono font-bold text-lg text-emerald-400 shadow-inner">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-white">@{username}</h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ACTIVE OSS
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              Open-Source & Multi-Repo Engineering Telemetry
            </p>
          </div>
        </div>

        {/* Global Stats Badges */}
        <div className="flex items-center gap-2">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-zinc-200 transition-colors flex items-center gap-1.5"
          >
            <span>View Profile</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>

      {/* 4-Stat Metric Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 relative z-10">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            Merged PRs
          </span>
          <span className="text-2xl font-black text-emerald-400 mt-2">
            {mergedPrs}
          </span>
          <div className="h-1 w-full bg-emerald-500/20 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-emerald-400 w-4/5 rounded-full" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            External Repos
          </span>
          <span className="text-2xl font-black text-purple-400 mt-2">
            {externalRepos}
          </span>
          <div className="h-1 w-full bg-purple-500/20 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-purple-400 w-3/4 rounded-full" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            Contributions
          </span>
          <span className="text-2xl font-black text-amber-400 mt-2">
            {totalContributions}
          </span>
          <div className="h-1 w-full bg-amber-500/20 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-amber-400 w-5/6 rounded-full" />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            Followers
          </span>
          <span className="text-2xl font-black text-blue-400 mt-2">
            {followers}
          </span>
          <div className="h-1 w-full bg-blue-500/20 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-blue-400 w-2/3 rounded-full" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4 relative z-10 border-b border-white/10 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("prs")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "prs"
              ? "bg-white/15 text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Recent Merged PRs
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("repos")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === "repos"
              ? "bg-white/15 text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Featured Repositories
        </button>
      </div>

      {/* Dynamic List Content */}
      <div className="space-y-2.5 relative z-10">
        {activeTab === "prs" ? (
          recentPRs.map((pr, idx) => (
            <a
              key={idx}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 block"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center flex-shrink-0 text-purple-400">
                  <svg
                    className="w-3.5 h-3.5 stroke-current stroke-2 fill-none"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                    <line x1="6" y1="9" x2="6" y2="21" />
                  </svg>
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-zinc-300 group-hover:text-emerald-400 transition-colors">
                      {pr.repo}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      #{pr.number}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                    {pr.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                <span className="text-[10px] font-mono text-zinc-500">
                  {pr.mergedAt}
                </span>
                <span className="text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 text-xs">
                  →
                </span>
              </div>
            </a>
          ))
        ) : (
          topRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">{repo.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                    {repo.language}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1 max-w-lg">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 self-end sm:self-auto flex-shrink-0">
                <span className="flex items-center gap-1 text-amber-300">
                  ★ {repo.stars}
                </span>
                <span className="text-emerald-400">
                  {repo.prs} PRs
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Backlink & Footer */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500 relative z-10">
        <span>Continuous Developer Telemetry</span>
        <a
          href={brandLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E2B774] hover:underline flex items-center gap-1"
        >
          <span>Crafted via Scriptly</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}

export default GitHubStatsMatrix;
