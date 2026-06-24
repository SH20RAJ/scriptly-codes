import type { Metadata } from "next";
import { Navbar, Footer, CostCalculator } from "@/components/blocks/smileflow-sections";
import { CreditCard, ShieldAlert, BadgeCheck, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing, Insurance & Financing Options — SmileFlow",
  description: "Find transparent pricing estimates for cosmetic and implant procedures using our online calculator. Explore 0% interest payment plans and insurance details.",
};

const pricingTable = [
  { service: "Laser Teeth Whitening", range: "$350 - $450", duration: "1 Visit (60 Mins)", emi: "$15/mo" },
  { service: "Invisalign (Clear Aligners)", range: "$3,800 - $4,800", duration: "6-12 Months", emi: "$180/mo" },
  { service: "Porcelain Veneers (per tooth)", range: "$1,100 - $1,350", duration: "2 Visits", emi: "$50/mo" },
  { service: "Dental Implants (per tooth)", range: "$2,800 - $3,400", duration: "3-6 Months", emi: "$120/mo" },
  { service: "Root Canal Treatment", range: "$850 - $1,100", duration: "1-2 Visits", emi: "$35/mo" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="py-20 lg:py-32 space-y-24">
        
        {/* Cost Calculator Section */}
        <CostCalculator />

        {/* Pricing Table Section */}
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
            
            {/* Standard Price List */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <FileSpreadsheet className="h-6 w-6 text-cyan-500" /> Standard Treatment Price List
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
                *Prices listed below represent general estimated ranges. Final quotes require clinical diagnosis by Dr. Sarah Johnson.
              </p>

              <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm">
                <table className="min-w-full divide-y divide-slate-100 dark:divide-slate-800 text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-4">Treatment</th>
                      <th className="px-6 py-4">Price Range</th>
                      <th className="px-6 py-4">Typical Duration</th>
                      <th className="px-6 py-4">As Low As (24 mo.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    {pricingTable.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{item.service}</td>
                        <td className="px-6 py-4 font-semibold text-cyan-600 dark:text-cyan-400">{item.range}</td>
                        <td className="px-6 py-4">{item.duration}</td>
                        <td className="px-6 py-4 font-bold text-teal-600 dark:text-teal-400">{item.emi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Insurance & Financing Policies */}
            <div className="space-y-8">
              
              {/* Insurance */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-teal-500" /> Insurance Providers We Accept
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
                  We accept and process claims directly with most major corporate insurance networks, including MetLife, Delta Dental, Cigna, Guardian, and Aetna.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["MetLife", "Delta Dental", "Cigna", "Aetna", "Guardian"].map((ins) => (
                    <span key={ins} className="bg-white dark:bg-slate-950 px-3 py-1.5 rounded-lg border text-xs font-semibold text-slate-600 dark:text-slate-400 border-slate-200/60 dark:border-slate-800">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>

              {/* Financing */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-cyan-500" /> 0% Interest Financing Plans
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
                  Split your cosmetic and implant costs into interest-free monthly installments of 12, 18, or 24 months. We coordinate approvals within minutes during your visit.
                </p>
                <div className="flex items-start gap-2.5 text-xs text-slate-400 dark:text-slate-500 mt-2 bg-white dark:bg-slate-950 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  <ShieldAlert className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>Subject to simple credit authorization. Zero hidden initiation or prepayment fees.</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
