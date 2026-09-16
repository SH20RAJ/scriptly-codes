"use client";

import React from "react";
import { GitHubStatsMatrix } from "./GitHubStatsMatrix";

export function GitHubStatsMatrixDemo() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white flex flex-col justify-center py-10 px-4">
      <GitHubStatsMatrix
        username="sh20raj"
        mergedPrs={312}
        externalRepos={48}
        totalContributions="15,200+"
        brandLink="https://scriptly.store/"
      />
    </div>
  );
}

export default GitHubStatsMatrixDemo;
