"use client";

import React from "react";
import { StudiovaPricingTable } from "./StudiovaPricingTable";

export function StudiovaPricingTableDemo() {
  return (
    <div className="min-h-screen bg-[#06070a] text-white flex flex-col justify-center py-10 px-4">
      <StudiovaPricingTable
        title="High-Converting Pricing Tiers"
        subtitle="Transparent, value-packed design & engineering subscription tiers crafted for forward-thinking brands and startups."
        brandBacklink="https://scriptly.store/"
      />
    </div>
  );
}

export default StudiovaPricingTableDemo;
