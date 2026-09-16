"use client";

import React from "react";
import { StudiovaServicesTabs } from "./StudiovaServicesTabs";

export function StudiovaServicesTabsDemo() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white flex flex-col justify-center py-10 px-4">
      <StudiovaServicesTabs
        heading="Full-Service Creative Suite"
        subheading="Interactive design systems, responsive React architectures, and high-conversion agency workflows."
        brandLink="https://scriptly.store/"
      />
    </div>
  );
}

export default StudiovaServicesTabsDemo;
