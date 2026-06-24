import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/blocks/smileflow-sections";
import { 
  ShieldCheck, 
  Sparkles, 
  Smile, 
  Activity, 
  Award, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export const metadata: Metadata = {
  title: "Comprehensive Dental Services — SmileFlow",
  description: "Explore our premium cosmetic, restorative, and general dental treatments. From Invisalign and dental implants to teeth whitening and root canals, we offer advanced digital care.",
};

const serviceDetails = [
  {
    name: "Dental Implants",
    tagline: "Permanent, Natural-Looking Solutions",
    description: "Replace single or multiple missing teeth with high-quality titanium or zirconia implants that integrate seamlessly with your jawbone.",
    Icon: ShieldCheck,
    benefits: [
      "Prevents bone loss and preserves facial structure",
      "Restores 100% of chewing strength",
      "Indistinguishable from natural teeth",
      "Designed to last a lifetime with proper care"
    ],
    duration: "3-6 months (including healing time)",
    bgClass: "from-cyan-500/10 to-teal-500/5"
  },
  {
    name: "Teeth Whitening",
    tagline: "Dazzling, Immediate Brightness",
    description: "Get a smile up to 8 shades brighter with our safe, state-of-the-art in-office whitening systems, or custom home kits.",
    Icon: Sparkles,
    benefits: [
      "In-office results in just 60 minutes",
      "Clinical-grade formulations that reduce sensitivity",
      "Removes deep coffee, tea, and tobacco stains",
      "Custom-molded trays for home maintenance"
    ],
    duration: "1-2 Hours (Same-Day)",
    bgClass: "from-teal-500/10 to-emerald-500/5"
  },
  {
    name: "Invisalign & Aligners",
    tagline: "Discreet Orthodontic Correction",
    description: "Straighten your teeth comfortably and virtually invisibly using custom-made removable clear plastic aligners.",
    Icon: Smile,
    benefits: [
      "Fully removable for eating and brushing",
      "Smooth, medical-grade plastic doesn't irritate gums",
      "Proprietary 3D digital tracking to preview results",
      "Fewer office visits required than traditional braces"
    ],
    duration: "6-12 Months",
    bgClass: "from-sky-500/10 to-cyan-500/5"
  },
  {
    name: "Root Canal Treatment",
    tagline: "Gentle, Pain-Free Tooth Preservation",
    description: "Save damaged or infected teeth with our advanced root canal therapy, performed using micro-dentistry tools.",
    Icon: Activity,
    benefits: [
      "Instantly relieves severe toothache and throbbing",
      "Prevents the spread of infection to neighboring teeth",
      "High success rate utilizing advanced microscopes",
      "Completed comfortably under local anesthesia"
    ],
    duration: "1-2 Visits",
    bgClass: "from-slate-500/10 to-slate-600/5"
  },
  {
    name: "Cosmetic Dentistry",
    tagline: "Complete Aesthetic Smile Makeovers",
    description: "Combine porcelain veneers, dental bonding, and gum contouring to craft the symmetrical, radiant smile you deserve.",
    Icon: Award,
    benefits: [
      "Custom designed to match your facial characteristics",
      "Corrects chipped, cracked, or misaligned teeth",
      "Uses premium, stain-resistant porcelain veneers",
      "Boosts self-confidence and professional appeal"
    ],
    duration: "2-3 Weeks",
    bgClass: "from-emerald-500/10 to-cyan-500/5"
  },
  {
    name: "Emergency Dental Care",
    tagline: "Same-Day Relief When You Need It Most",
    description: "Immediate slots kept open daily for knocked-out teeth, severe toothache, lost crowns, or dental trauma.",
    Icon: Clock,
    benefits: [
      "Priority same-day appointments",
      "Immediate pain management and diagnosis",
      "Emergency extractions and repairs",
      "Compassionate, urgent care coordination"
    ],
    duration: "Urgent (Same-Day)",
    bgClass: "from-rose-500/10 to-rose-600/5"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Premium Dental Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light">
              We leverage cutting-edge digital dentistry to provide precise, pain-free, and beautiful results. Discover our services below.
            </p>
          </div>

          {/* Details List */}
          <div className="space-y-16">
            {serviceDetails.map((service, idx) => {
              const Icon = service.Icon;
              return (
                <div 
                  key={idx}
                  className={`grid lg:grid-cols-[0.8fr_1.2fr] gap-8 p-8 md:p-12 rounded-3xl border border-slate-100 bg-gradient-to-br ${service.bgClass} relative overflow-hidden`}
                >
                  {/* Left Column (Main Info) */}
                  <div className="space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="h-14 w-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-cyan-600 shadow-sm mb-6">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                        {service.name}
                      </h2>
                      <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 mt-6 lg:mt-0">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Treatment Time</p>
                      <p className="text-slate-700 font-semibold flex items-center gap-2">
                        <Clock className="h-4 w-4 text-cyan-500" /> {service.duration}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Benefits and Details) */}
                  <div className="flex flex-col justify-between space-y-8">
                    <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200/50 flex justify-end">
                      <a href="/contact" id={`book-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <InteractiveHoverButton className="h-12 px-6 text-sm font-medium">
                          Book {service.name} Consultation <ArrowRight className="h-4 w-4 ml-1 inline" />
                        </InteractiveHoverButton>
                      </a>
                    </div>
                  </div>

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
