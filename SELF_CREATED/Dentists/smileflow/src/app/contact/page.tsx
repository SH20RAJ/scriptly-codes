import type { Metadata } from "next";
import { Navbar, Footer, BookingForm } from "@/components/blocks/smileflow-sections";
import { Clock, Phone, MapPin, Mail, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment & Contact Us — SmileFlow",
  description: "Schedule your free cosmetic or implant consultation at SmileFlow. Find our clinic address, office hours, and contact information.",
};

const clinicHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { days: "Sunday", hours: "Emergency Appointments Only" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-cyan-500 selection:text-white">
      <Navbar />

      <main className="py-20 lg:py-32 space-y-20">
        
        {/* Booking Form Block */}
        <BookingForm />

        {/* Support Grid (Hours and Info) */}
        <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-2 gap-12">
          
          {/* Hours Card */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-8 rounded-3xl space-y-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="h-6 w-6 text-cyan-500" /> Clinic Operating Hours
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
              We offer flexible weekend schedules to ensure you do not have to skip work for dental checkups.
            </p>

            <div className="space-y-4">
              {clinicHours.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-3 last:border-0 last:pb-0 text-sm">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{item.days}</span>
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency support Card */}
          <div className="bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/10 dark:border-rose-500/20 p-8 rounded-3xl space-y-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-rose-500" /> Emergency Support Info
            </h3>
            <p className="text-slate-600 dark:text-slate-300 font-light text-sm leading-relaxed">
              If you are experiencing severe dental trauma, broken restorations, or intolerable throbbing pain, do not wait for standard hours.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-rose-600/70 dark:text-rose-450/70 font-semibold uppercase tracking-wider">Emergency HotLine</p>
                  <p className="text-lg font-extrabold text-rose-700 dark:text-rose-300 mt-0.5">+1 (555) 999-EMER</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-rose-600/70 dark:text-rose-450/70 font-semibold uppercase tracking-wider">Priority Desk</p>
                  <p className="text-lg font-bold text-rose-700 dark:text-rose-300 mt-0.5">urgent@smileflow.com</p>
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
