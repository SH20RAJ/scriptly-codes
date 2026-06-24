import { 
  Navbar, 
  Hero, 
  TrustBar, 
  Services, 
  Gallery, 
  WhyChooseUs, 
  MeetDoctor, 
  Testimonials, 
  CostCalculator, 
  BookingForm, 
  FAQ, 
  FinalCTA, 
  Footer 
} from "@/components/blocks/smileflow-sections";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Metrics Marquee */}
      <TrustBar />

      {/* Services Grid (Bento Box) */}
      <Services />

      {/* Before / After Gallery Slider */}
      <Gallery />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Meet Doctor Specialist */}
      <MeetDoctor />

      {/* Infinite Testimonials */}
      <Testimonials />

      {/* Cost Calculator Tool */}
      <CostCalculator />

      {/* Appointment Booking */}
      <BookingForm />

      {/* FAQs Accordion */}
      <FAQ />

      {/* Bottom CTA Banner */}
      <FinalCTA />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
