import type { Metadata } from "next";
import { Navbar, Footer, MeetDoctor } from "@/components/blocks/smileflow-sections";
import { ShieldCheck, Milestone, Sparkles, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Sarah Johnson & SmileFlow Practice — SmileFlow",
  description: "Learn about the clinical values, mission, and advanced technology used at SmileFlow. Meet our lead cosmetic dentist Dr. Sarah Johnson.",
};

const clinicValues = [
  {
    title: "Clinical Perfection",
    description: "Every restoration, aligner plan, and cleaning is executed to the highest clinical standards of modern aesthetic medicine.",
    icon: ShieldCheck,
  },
  {
    title: "Tech-Forward Diagnostics",
    description: "We use 3D digital CT imaging instead of uncomfortable traditional molds to map out treatment routes with extreme accuracy.",
    icon: Cpu,
  },
  {
    title: "Comfort-First Hospitality",
    description: "Our clinic is designed to alleviate dental anxiety. Relax with spa-like amenities, noise-canceling headphones, and gentle methods.",
    icon: Sparkles,
  },
  {
    title: "Patient Advocacy",
    description: "We explain all treatment options, schedules, and costs clearly upfront. You are an active partner in your dental journey.",
    icon: Milestone,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="py-20 lg:py-32 space-y-24">
        
        {/* Intro */}
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight animate-fade-in">
              Transforming Dental Visits Into a{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-350 bg-clip-text text-transparent">Premium Spa Experience</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Founded in 2011, SmileFlow was established with a singular mission: to combine world-class cosmetic and implant dentistry with warmth, transparency, and a luxury clinical experience.
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              We understand that visiting the dentist can be stressful. That is why we invested in pain-free anesthesia delivery, 3D intraoral digital scanners, and quiet handpieces to change the way patients experience dental health.
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-150 dark:border-slate-800">
            <img 
              src="/clinic.png" 
              alt="SmileFlow Modern Dental Office" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Meet the Doctor Block */}
        <MeetDoctor />

        {/* Values Grid */}
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Our Practice Values</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light text-base md:text-lg">
              At SmileFlow, we build long-term relationships based on clinical trust, gentle touch, and complete transparency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="border border-slate-100 dark:border-slate-850 bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-cyan-50 dark:bg-slate-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{value.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-3 leading-relaxed font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
