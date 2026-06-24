import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/blocks/smileflow-sections";
import { ImageComparison } from "@/components/ui/image-comparison";
import { Sparkles, Calendar, Smile } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export const metadata: Metadata = {
  title: "Smile Transformations Before & After Gallery — SmileFlow",
  description: "View real clinical results achieved by our patients. Compare teeth whitening, Invisalign orthodontics, and porcelain veneers smile makeovers.",
};

const caseStudies = [
  {
    title: "Laser Teeth Whitening Case Study",
    description: "Patient presented with moderate staining from coffee and tea. We performed a single-visit 60-minute Laser Whitening procedure combined with an at-home enamel-strengthening regimen.",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    specs: {
      treatment: "In-Office Laser Whitening",
      visits: "1 Visit (60 Mins)",
      improvement: "8 Shades Brighter",
    }
  },
  {
    title: "Porcelain Veneers Makeover",
    description: "Patient wanted to correct gaps and minor alignment issues. We placed six custom ultra-thin porcelain veneers matching their natural enamel translucency.",
    beforeImage: "/before.png", // reusing the high-quality assets to showcase slider
    afterImage: "/after.png",
    specs: {
      treatment: "6 Porcelain Veneers",
      visits: "2 Visits (14 Days)",
      improvement: "Restored Symmetry & Alignment",
    }
  },
  {
    title: "Invisalign Orthodontics Alignment",
    description: "Moderate crowding on lower and upper arches. Completed Invisalign treatment with custom smart-track aligners changed every 7 days.",
    beforeImage: "/before.png",
    afterImage: "/after.png",
    specs: {
      treatment: "Invisalign Clear Aligners",
      visits: "10 Months (Bi-weekly checks)",
      improvement: "Perfect Arch Symmetry",
    }
  }
];

export default function TransformationsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Smile Transformations
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
              Explore actual photographic before & after cases showing teeth whitening, alignment, and full mouth cosmetic restorations.
            </p>
          </div>

          {/* Cases */}
          <div className="space-y-24">
            {caseStudies.map((item, idx) => (
              <div key={idx} className="grid lg:grid-cols-[1fr_380px] gap-12 items-center border-b border-slate-100 dark:border-slate-850 pb-20 last:border-0 last:pb-0">
                
                {/* Before After Slider */}
                <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-2 md:p-6 border border-slate-100 dark:border-slate-800">
                  <ImageComparison 
                    beforeImage={item.beforeImage} 
                    afterImage={item.afterImage} 
                    title={item.title} 
                    description={item.description} 
                  />
                </div>

                {/* Case Specs */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-cyan-500" /> Treatment Details
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Procedure Type</p>
                      <p className="text-slate-800 dark:text-slate-200 font-bold text-base mt-1">{item.specs.treatment}</p>
                    </div>
                    <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Duration / Visits</p>
                      <p className="text-slate-800 dark:text-slate-200 font-semibold mt-1 flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-slate-400" /> {item.specs.visits}
                      </p>
                    </div>
                    <div className="pb-3">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Outcome Achieved</p>
                      <p className="text-teal-600 dark:text-teal-400 font-bold text-base mt-1 flex items-center gap-1.5">
                        <Smile className="h-5 w-5" /> {item.specs.improvement}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    <a href="/contact" className="w-full block">
                      <InteractiveHoverButton className="w-full h-12 text-center text-sm font-semibold">
                        Get Similar Results
                      </InteractiveHoverButton>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
