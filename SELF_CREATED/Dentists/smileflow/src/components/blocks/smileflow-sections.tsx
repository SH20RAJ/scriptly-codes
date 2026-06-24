"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Activity, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Award, 
  Users, 
  ChevronRight, 
  Info,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Particles } from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ImageComparison } from "@/components/ui/image-comparison";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// --- Header / Navbar ---
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Transformations", href: "/transformations" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 dark:border-slate-800 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-cyan-600 dark:text-cyan-400">
          <Smile className="h-8 w-8 text-cyan-500 animate-pulse" />
          <span className="bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-350 bg-clip-text text-transparent">SmileFlow</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-[15px] font-semibold text-slate-600 dark:text-slate-350">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Theme Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <InteractiveHoverButton className="h-11 px-5 text-sm font-medium">Book Consultation</InteractiveHoverButton>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button className="text-slate-700 dark:text-slate-200" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-6 space-y-4 shadow-lg flex flex-col transition-colors">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="pt-4">
            <InteractiveHoverButton className="w-full h-12 text-center text-base font-semibold">Book Consultation</InteractiveHoverButton>
          </Link>
        </div>
      )}
    </header>
  );
}

// --- Hero Section ---
export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-32 lg:py-40">
      <Particles className="absolute inset-0 z-0" quantity={120} color="#0ea5e9" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">
        
        {/* Copy */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          {/* Trust rating badge */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-600">4.9/5 Patient Rating (10,000+ Treated)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Get the Smile You've{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Always Wanted</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Expert dental care with advanced technology, experienced specialists, and personalized treatment plans designed to keep your smile healthy and confident.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="#book" onClick={(e) => handleScroll(e, "#book")}>
              <ShimmerButton className="h-12 px-8 font-semibold text-base shadow-lg rounded-xl">Book Free Consultation</ShimmerButton>
            </a>
            <a href="#transformations" onClick={(e) => handleScroll(e, "#transformations")}>
              <button className="h-12 px-8 font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-base">
                View Smile Transformations <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto lg:mx-0">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-600">10k+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Patients Treated</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-600">15+</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-600">99%</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-600">Same-Day</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Appointments</p>
            </div>
          </div>
        </div>

        {/* Clinic image */}
        <div className="relative mx-auto max-w-md lg:max-w-none w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/clinic.png"
            alt="SmileFlow Premium Dental Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-800 text-sm">State-of-the-Art Clinic</p>
              <p className="text-xs text-slate-500">Equipped with 3D digital scanners</p>
            </div>
            <Activity className="h-6 w-6 text-cyan-500" />
          </div>
        </div>

      </div>
    </section>
  );
}

// --- Trust Bar / Infinite Marquee ---
export function TrustBar() {
  const trustMetrics = [
    "Trusted by Thousands of Happy Patients",
    "•",
    "4.9 Google Rating",
    "•",
    "10,000+ Smiles Improved",
    "•",
    "15+ Years of Excellence",
    "•",
    "State-of-the-Art Technology",
    "•",
    "Pain-Free Dental Care",
    "•",
    "Advanced Digital Dentistry",
    "•"
  ];

  return (
    <section className="bg-cyan-600 py-6 overflow-hidden select-none">
      <Marquee className="[--duration:25s] text-white font-semibold text-lg md:text-xl tracking-wide gap-8" repeat={4}>
        {trustMetrics.map((item, index) => (
          <span key={index} className="mx-4 whitespace-nowrap">
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

// --- Services Bento Grid ---
export function Services() {
  const services = [
    {
      name: "Dental Implants",
      description: "Replace missing teeth with permanent, natural-looking solutions designed for durability.",
      Icon: ShieldCheck,
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-cyan-100/50" />,
      className: "col-span-3 lg:col-span-2",
      href: "#book",
      cta: "Learn more",
    },
    {
      name: "Teeth Whitening",
      description: "Brighten your smile with safe and highly effective whitening treatments.",
      Icon: Sparkles,
      background: <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100/50" />,
      className: "col-span-3 lg:col-span-1",
      href: "#book",
      cta: "Learn more",
    },
    {
      name: "Invisalign & Aligners",
      description: "Straighten your teeth comfortably and discreetly without metal brackets.",
      Icon: Smile,
      background: <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-sky-100/50" />,
      className: "col-span-3 lg:col-span-1",
      href: "#book",
      cta: "Learn more",
    },
    {
      name: "Root Canal Treatment",
      description: "Pain-free root canal procedures performed using modern technology & gentle care.",
      Icon: Activity,
      background: <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100/50" />,
      className: "col-span-3 lg:col-span-2",
      href: "#book",
      cta: "Learn more",
    },
    {
      name: "Cosmetic Dentistry",
      description: "Transform your smile with custom veneers, bonding, and total smile makeovers.",
      Icon: Award,
      background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50" />,
      className: "col-span-3 lg:col-span-2",
      href: "#book",
      cta: "Learn more",
    },
    {
      name: "Emergency Dental Care",
      description: "Immediate relief and expert care for urgent dental concerns and trauma.",
      Icon: Clock,
      background: <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100/50" />,
      className: "col-span-3 lg:col-span-1",
      href: "#book",
      cta: "Learn more",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-slate-600 font-light">
            We provide full-spectrum cosmetic, restorative, and general dentistry procedures using state-of-the-art dental equipment.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {services.map((service, index) => (
            <BentoCard key={index} {...service} />
          ))}
        </BentoGrid>

      </div>
    </section>
  );
}

// --- Before & After Gallery ---
export function Gallery() {
  return (
    <section id="transformations" className="py-20 sm:py-32 bg-slate-50 border-y border-slate-100">
      <ImageComparison
        beforeImage="/before.png"
        afterImage="/after.png"
        title="Real Smile Transformations"
        description="See the life-changing results our patients achieve through personalized dental care. Drag the slider to compare before and after whitening & alignment."
      />
    </section>
  );
}

// --- Why Choose Us ---
export function WhyChooseUs() {
  const features = [
    {
      title: "Advanced Digital Dentistry",
      description: "We use the latest digital impressions, 3D CT scans, and virtual treatment planning for precision care.",
      icon: Activity,
    },
    {
      title: "Experienced Specialists",
      description: "Our clinic is staffed by highly trained professionals with advanced certifications in cosmetic & implant care.",
      icon: Users,
    },
    {
      title: "Patient-Centered Approach",
      description: "Customized treatment plans tailored to your specific clinical requirements, aesthetics, and goals.",
      icon: Smile,
    },
    {
      title: "Comfort First Dentistry",
      description: "Enjoy stress-free visits with options for mild sedation, pain-free anesthesia, and custom entertainment.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs. Detailed treatment cost estimates are provided upfront, with financing options.",
      icon: DollarSign,
    },
    {
      title: "Flexible Scheduling",
      description: "Book late evening and Saturday appointments to fit dental visits easily into your busy lifestyle.",
      icon: Clock,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Why Choose SmileFlow?
          </h2>
          <p className="text-lg text-slate-600 font-light">
            We combine premium clinical care, warm patient hospitality, and the most advanced dental technology in the region.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div 
                key={i} 
                className="group relative p-8 rounded-2xl border border-slate-100 hover:border-cyan-500/20 bg-white hover:bg-slate-50/50 transition-all duration-300 hover:shadow-lg shadow-sm"
              >
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mt-6 group-hover:text-cyan-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// --- Meet the Doctor ---
export function MeetDoctor() {
  const achievements = [
    "15+ Years of Dedicated Cosmetic & Implant Experience",
    "10,000+ Successful Dental Transformations Completed",
    "Advanced Implant Certification from International Dental College",
    "Active Board Member of International Cosmetic Dental Association",
  ];

  return (
    <section id="doctor" className="py-20 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        
        {/* Profile Card with BorderBeam */}
        <div className="relative mx-auto max-w-sm w-full bg-white rounded-3xl p-6 shadow-xl border border-slate-100 group">
          <BorderBeam size={300} duration={12} colorFrom="#06b6d4" colorTo="#0ea5e9" />
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6">
            <Image
              src="/doctor.png"
              alt="Dr. Sarah Johnson - Lead Dentist"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800">Dr. Sarah Johnson</h3>
            <p className="text-sm font-semibold text-cyan-600 mt-1 uppercase tracking-wider">Lead Cosmetic & Implant Specialist</p>
            <p className="text-xs text-slate-400 mt-2">DDS, MS in Restorative Dentistry</p>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <Badge className="w-fit border-cyan-500 text-cyan-500 bg-cyan-500/10" variant="outline">Expert Care</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Meet Dr. Sarah Johnson
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            With over 15 years of experience and thousands of successful procedures, Dr. Johnson is dedicated to delivering exceptional dental care while ensuring every patient feels comfortable, safe, and fully informed.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {achievements.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-cyan-600" />
                </div>
                <span className="text-slate-700 text-[15px] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// --- Testimonials ---
export function Testimonials() {
  const reviews = [
    {
      name: "Emily Davies",
      role: "Invisalign Patient",
      rating: 5,
      comment: "The entire experience was amazing. The team made me feel comfortable from day one and the Invisalign results exceeded my expectations!"
    },
    {
      name: "Marcus Vance",
      role: "Dental Implants Patient",
      rating: 5,
      comment: "I finally have the confidence to smile again after getting dental implants. Dr. Johnson and her team are highly professional and gentle."
    },
    {
      name: "Sarah Patel",
      role: "Cosmetic Makeover Patient",
      rating: 5,
      comment: "Professional staff, modern clinic, and outstanding care. The teeth whitening treatment was completely pain-free and results are dazzling."
    },
    {
      name: "Johnathan Mercer",
      role: "General Checkup",
      rating: 5,
      comment: "This clinic is like a luxury spa. They have TV screens on the ceiling, noise-canceling headphones, and the staff is incredibly warm."
    },
    {
      name: "Olivia Martinez",
      role: "Veneers Patient",
      rating: 5,
      comment: "Absolute dental artists! My new veneers look 100% natural. People compliment my teeth everywhere I go."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-8 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What Our Patients Say</h2>
        <p className="text-lg text-slate-500 font-light mt-4">Read authentic reviews from people who transformed their smiles at SmileFlow.</p>
      </div>

      <Marquee className="[--duration:35s] gap-6" pauseOnHover={true}>
        {reviews.map((review, i) => (
          <div 
            key={i} 
            className="w-[300px] md:w-[350px] shrink-0 border border-slate-100 rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <p className="text-slate-600 text-sm/relaxed font-light italic">"{review.comment}"</p>
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-100">
              <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center font-bold text-cyan-600 text-sm uppercase">
                {review.name.split(' ').map(n=>n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">{review.name}</p>
                <p className="text-xs font-semibold text-slate-400">{review.role}</p>
              </div>
              <div className="ml-auto flex text-amber-400">
                {[...Array(review.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="h-3 w-3 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

// --- Smile Cost Calculator ---
export function CostCalculator() {
  const [treatment, setTreatment] = useState<"implants" | "invisalign" | "whitening" | "veneers">("invisalign");
  const [quantity, setQuantity] = useState<number>(1);
  const [timeline, setTimeline] = useState<"immediate" | "soon" | "flexible">("immediate");

  // Calculate pricing based on logic
  const getCalculation = () => {
    let pricePerUnit = 0;
    let flatPrice = 0;
    let duration = "";

    switch(treatment) {
      case "whitening":
        pricePerUnit = 350;
        duration = "1-2 Hours (Same Day)";
        break;
      case "veneers":
        pricePerUnit = 1200;
        duration = "2 Visits (1-2 Weeks)";
        break;
      case "implants":
        pricePerUnit = 2950;
        duration = "3-6 Months Healing Period";
        break;
      case "invisalign":
        flatPrice = 4500;
        duration = "6-12 Months Treatment";
        break;
    }

    const total = flatPrice > 0 ? flatPrice : pricePerUnit * quantity;
    const emi = Math.round(total / 24); // 24 Months Financing

    return {
      total,
      emi,
      duration
    };
  };

  const { total, emi, duration } = getCalculation();

  return (
    <section id="calculator" className="py-20 sm:py-32 bg-slate-50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Smile Cost Calculator
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Estimate the investment for your customized dental procedure with transparent pricing details and monthly financing estimates.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="mx-auto max-w-4xl grid md:grid-cols-[1.1fr_0.9fr] gap-8 bg-white border border-slate-100 shadow-xl rounded-3xl p-6 sm:p-8 relative overflow-hidden">
          <BorderBeam size={200} duration={15} colorFrom="#14b8a6" colorTo="#2dd4bf" />
          
          {/* Inputs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800">Select Treatment Specifications</h3>

            {/* Treatment type */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-600">Choose Treatment</Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "invisalign", label: "Invisalign" },
                  { id: "implants", label: "Implants" },
                  { id: "whitening", label: "Whitening" },
                  { id: "veneers", label: "Veneers" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTreatment(item.id as any);
                      if (item.id === "invisalign") setQuantity(1);
                    }}
                    className={cn(
                      "px-4 py-3 rounded-xl border font-semibold text-sm transition-all duration-200",
                      treatment === item.id 
                        ? "border-cyan-500 bg-cyan-500/5 text-cyan-600" 
                        : "border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-700"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selection (disabled for Invisalign flat rate) */}
            {treatment !== "invisalign" && (
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-600">
                  Number of Teeth: <span className="text-cyan-600 font-bold text-base ml-1">{quantity}</span>
                </Label>
                <div className="flex items-center gap-3">
                  <button
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(quantity - 1)}
                    className="h-10 w-10 border rounded-lg flex items-center justify-center font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="flex-1 accent-cyan-500 h-2 bg-slate-100 rounded-lg cursor-pointer"
                  />
                  <button
                    disabled={quantity >= 14}
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 border rounded-lg flex items-center justify-center font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Timeline */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-600">Preferred Timeline</Label>
              <div className="flex gap-3">
                {[
                  { id: "immediate", label: "Immediate" },
                  { id: "soon", label: "1-3 Months" },
                  { id: "flexible", label: "Flexible" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id as any)}
                    className={cn(
                      "flex-1 px-4 py-2.5 rounded-xl border font-semibold text-sm transition-all duration-200",
                      timeline === item.id 
                        ? "border-cyan-500 bg-cyan-500/5 text-cyan-600" 
                        : "border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-700"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output Display */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs">Estimated Pricing Output</h3>
              <div className="mt-6">
                <span className="text-xs text-slate-400">Total Treatment Cost</span>
                <p className="text-4xl md:text-5xl font-extrabold text-teal-400 mt-1">
                  ${total.toLocaleString()} - ${(total * 1.15).toLocaleString()}*
                </p>
                <p className="text-[10px] text-slate-500 mt-2">*Inclusive of digital imaging & specialist consult.</p>
              </div>

              <div className="mt-8 space-y-4 border-t border-slate-800 pt-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Monthly EMI Option (24 mo.)</p>
                    <p className="text-lg font-bold text-white">${emi}/month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Estimated Duration</p>
                    <p className="text-sm font-semibold text-white">{duration}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a href="#book" className="block text-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-cyan-600/20 text-sm">
                Book consultation for final quote
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// --- Booking Form Section ---
export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "invisalign",
    date: "",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking success
    setIsSuccess(true);
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "invisalign",
        date: "",
        message: ""
      });
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="book" className="py-20 sm:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Contact info side */}
        <div className="flex flex-col gap-6">
          <Badge className="w-fit border-cyan-500 text-cyan-500 bg-cyan-500/10" variant="outline">Consultation</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Book Your Free consultation Today
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Schedule a session to meet Dr. Sarah Johnson and explore implant or aligner options. We accept major insurance providers and offer interest-free payment plans.
          </p>

          <div className="space-y-6 mt-6 border-t border-slate-100 pt-8">
            <div className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone Support</p>
                <p className="text-lg font-bold text-slate-800 mt-0.5">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Inquiry</p>
                <p className="text-lg font-bold text-slate-800 mt-0.5">hello@smileflow.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Clinic Address</p>
                <p className="text-lg font-bold text-slate-800 mt-0.5">123 Main Street, City, State</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className="bg-slate-50 border border-slate-100 shadow-xl rounded-3xl p-6 sm:p-8 relative">
          {isSuccess ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center animate-bounce">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Booking Request Received!</h3>
              <p className="text-slate-600 text-sm max-w-sm">
                Thank you! Our clinic coordinator will contact you shortly to confirm your preferred date and time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800">Request Appointment</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold text-slate-500">Full Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-slate-200"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-semibold text-slate-500">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold text-slate-500">Email Address</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border-slate-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-xs font-semibold text-slate-500">Treatment Interest</Label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="invisalign">Invisalign</option>
                    <option value="implants">Dental Implants</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="veneers">Veneers</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-xs font-semibold text-slate-500">Preferred Date</Label>
                  <Input
                    id="date"
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-white border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-semibold text-slate-500">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your dental goals or concerns..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-slate-200 min-h-[80px]"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-cyan-600/20 text-sm mt-4"
              >
                Schedule Appointment
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

// --- FAQ Section ---
export function FAQ() {
  const faqs = [
    {
      q: "How often should I visit a dentist?",
      a: "For optimal health, we recommend coming in for a clean and examination every six months. Regular visits allow us to detect plaque and early signs of decay before they become painful issues."
    },
    {
      q: "Do dental implants look natural?",
      a: "Yes! Modern dental implants use customized zirconia or porcelain crowns matched to your adjacent teeth. Once anchored, they are virtually indistinguishable from natural teeth in both appearance and chew capability."
    },
    {
      q: "Is teeth whitening safe?",
      a: "Absolutely. Professional teeth whitening under clinical supervision is completely safe. We use protective barriers for your gums and special formulations to minimize transient tooth sensitivity."
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes. We offer standard interest-free EMI plans up to 24 months, as well as partnership options with dental financing agencies. Treatment estimates are fully customized to your budget."
    },
    {
      q: "How long does Invisalign treatment take?",
      a: "Depending on your starting alignment, Invisalign treatment typically takes between 6 to 12 months. Most patients start noticing visual improvements within the first 6-8 weeks."
    },
    {
      q: "Can I book emergency appointments?",
      a: "Yes! We keep emergency slots open daily. If you experience severe toothache, broken restorations, or dental injury, call our emergency line immediately for same-day relief."
    }
  ];

  return (
    <section id="faqs" className="py-20 sm:py-32 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 font-light">
            Find answers to common clinical, pricing, and scheduling questions.
          </p>
        </div>

        {/* Accordions */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white border border-slate-100 rounded-2xl px-6 shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="text-[17px] font-bold text-slate-800 hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 border-t border-slate-50 pt-3">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}

// --- Final CTA Section ---
export function FinalCTA() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-32 text-center text-white">
      <Particles className="absolute inset-0 z-0" quantity={150} color="#06b6d4" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-8 space-y-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Ready For Your <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent animate-pulse">Best Smile?</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Schedule your consultation today and take the first step toward a healthier, more confident smile with advanced digital treatment.
        </p>
        <div className="flex justify-center pt-4">
          <a href="#book" onClick={(e) => handleScroll(e, "#book")}>
            <ShimmerButton className="h-14 px-10 font-bold text-base shadow-xl rounded-xl">
              Book Free Consultation
            </ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 md:px-8 grid md:grid-cols-[1.5fr_1fr_1.5fr] gap-12 border-b border-slate-800 pb-12 mb-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <Smile className="h-8 w-8 text-cyan-500" />
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">SmileFlow</span>
          </a>
          <p className="text-sm font-light leading-relaxed max-w-xs text-slate-400">
            Premium restorative and cosmetic dental treatments performed by qualified specialists using advanced technology.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Explore</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-white transition-colors">Services</a>
              <a href="#transformations" onClick={(e) => handleScroll(e, "#transformations")} className="hover:text-white transition-colors">Before/After</a>
              <a href="#why-choose-us" onClick={(e) => handleScroll(e, "#why-choose-us")} className="hover:text-white transition-colors">Features</a>
              <a href="#doctor" onClick={(e) => handleScroll(e, "#doctor")} className="hover:text-white transition-colors">Specialist</a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Resources</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#calculator" onClick={(e) => handleScroll(e, "#calculator")} className="hover:text-white transition-colors">Cost Calculator</a>
              <a href="#faqs" onClick={(e) => handleScroll(e, "#faqs")} className="hover:text-white transition-colors">FAQs</a>
              <a href="#book" onClick={(e) => handleScroll(e, "#book")} className="hover:text-white transition-colors">Book Appt</a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact & Socials</h4>
          <div className="space-y-2.5 text-sm">
            <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-cyan-400" /> +1 (555) 123-4567</p>
            <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-cyan-400" /> hello@smileflow.com</p>
            <p className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-cyan-400" /> 123 Main Street, City, State</p>
          </div>
          <div className="flex gap-4 pt-4">
            {["Instagram", "Facebook", "YouTube", "LinkedIn"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-xs bg-slate-800 hover:bg-slate-700 hover:text-white transition-all px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-600"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} SmileFlow Dental Practice. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
