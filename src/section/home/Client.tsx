"use client";

import { useState } from "react";
import { Quote, Factory, ShoppingBag, Landmark, HeartPulse, Layers, ChevronDown, BarChart3, Users } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const logos: string[] = [
  "/assets/images/fpanalyzer.png",
  "/assets/images/ekoion.png",
  "/assets/images/bovalls.png",
  "/assets/images/bluewaters.png",
  "/assets/images/snus24.png",
  "/assets/images/iit.png",
  "/assets/images/akashavani.png",
  "/assets/images/annauniv.png",
  "/assets/images/locumap.png",
  "/assets/images/rorstrand.png",
  "/assets/images/hindustan.png",
  "/assets/images/sciotech.png",
  "/assets/images/tamilnadu.png",
  "/assets/images/smartstoring.png",
  "/assets/images/bharathwaj.png",
  "/assets/images/valueflow.png",
  "/assets/images/bluewaters.png",
  "/assets/images/tsf.png",
  "/assets/images/elshaddai.png",
  "/assets/images/24sju.png",
  "/assets/images/sahaya.png",
  "/assets/images/sribalaji.png",
  "/assets/images/atthi.png",
  "/assets/images/cumi.png",
];

// Removed background colors, keeping hex only for subtle text/icon tints
const INDUSTRIES = [
  { name: "Manufacturing", percent: 35, icon: Factory, color: "#2776ea" },
  { name: "Retail & E-comm", percent: 25, icon: ShoppingBag, color: "#76ea27" },
  { name: "Finance", percent: 20, icon: Landmark, color: "#2776ea" },
  { name: "Healthcare", percent: 10, icon: HeartPulse, color: "#76ea27" },
  { name: "Others", percent: 10, icon: Layers, color: "#94a3b8" },
];

const TESTIMONIALS = [
  {
    text: "Webronic transformed our retail operations with StoreTech. The autonomous checkout system has reduced operational costs by 60% while improving customer satisfaction.",
    author: "Jocke Assarsson",
    role: "CEO, 24-Sju Snabbköp Sverige AB",
  },
  {
    text: "Their AI-powered predictive maintenance solution has prevented over $2M in potential equipment failures and reduced downtime by 75%.",
    author: "Carl Magnus Tang",
    role: "FP Analyzer",
  },
  {
    text: "The Tanlux platform enabled us to operate 24/7 unmanned studios, expanding our business model and increasing revenue by 200%.",
    author: "Markus Front",
    role: "Founder, Tanlux AB",
  },
];

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0); 
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <section id="client" className="relative overflow-hidden bg-white py-20 lg:py-28 font-sora px-5 lg:px-10">
      
      {/* Background Decor (Very Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        
        {/* HEADER */}
        <SectionHeader 
          title="Trusted by"
          highlight="Industry Leaders"
          description="Empowering organizations worldwide with scalable, mission-critical digital infrastructure."
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        {/* --- 1. MINIMALIST LOGO MARQUEE --- */}
        <div className="relative mt-12 space-y-6 mb-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/90 to-transparent" />

          {/* Forward Row */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-10 py-2">
              {[...firstRow, ...firstRow].map((src, i) => (
                <LogoCard key={`row1-${i}`} src={src} />
              ))}
            </div>
          </div>

          {/* Reverse Row */}
          <div className="flex overflow-hidden">
            <div className="animate-scroll-review-xrev flex w-max items-center gap-10 py-2">
              {[...secondRow, ...secondRow].map((src, i) => (
                <LogoCard key={`row2-${i}`} src={src} />
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. PROFESSIONAL GRID (METRICS & STORIES) --- */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mt-20 border-t border-slate-100 pt-20">
          
          {/* LEFT: SECTOR DISTRIBUTION (Minimal / Professional) */}
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                    <BarChart3 size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    Deployment by Sector
                </h3>
            </div>

            <div className="space-y-7 pr-4">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-2.5">
                    <div className="flex items-center gap-3">
                      {/* Icon is Slate by default, colored only on hover */}
                      <ind.icon 
                        size={16} 
                        className="text-slate-400 transition-colors duration-300 group-hover:text-slate-900" 
                      />
                      <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                        {ind.name}
                      </span>
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-900">
                        {ind.percent}%
                    </span>
                  </div>
                  
                  {/* Progress Bar: Dark Slate Fill (Professional look) */}
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-800 rounded-full relative transition-all duration-500 group-hover:bg-[#2776ea]" // Turns blue only on hover
                      style={{ width: `${ind.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SUCCESS STORIES (Enterprise Accordion) */}
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                    <Users size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    Executive Feedback
                </h3>
            </div>

            <div className="space-y-3">
              {TESTIMONIALS.map((t, i) => (
                <div 
                  key={i} 
                  className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                    activeTestimonial === i 
                      ? "bg-white border-slate-200 shadow-xl shadow-slate-200/40" // Active: Clean White with shadow
                      : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-100" // Inactive: Transparent/Flat
                  }`}
                >
                  {/* Header */}
                  <button 
                    onClick={() => setActiveTestimonial(activeTestimonial === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left relative"
                  >
                    {/* Active Indicator Line (Left Side) - The only strong color accent */}
                    {activeTestimonial === i && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2776ea]" />
                    )}

                    <div className="flex items-center gap-4 pl-2">
                      {/* Avatar: Slate/Grey by default */}
                      <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors duration-300 ${
                        activeTestimonial === i 
                            ? "bg-slate-900 text-white" 
                            : "bg-slate-100 text-slate-500 group-hover:text-slate-700"
                      }`}>
                        {t.author.charAt(0)}
                      </div>

                      <div>
                        <p className={`text-sm font-bold transition-colors ${activeTestimonial === i ? "text-slate-900" : "text-slate-600"}`}>
                            {t.author}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                            {t.role}
                        </p>
                      </div>
                    </div>

                    <div className={`transition-transform duration-300 ${activeTestimonial === i ? "rotate-180 text-slate-900" : "text-slate-300"}`}>
                        <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out px-5 ${
                      activeTestimonial === i ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="pl-[3.5rem] pr-4">
                      {/* Quote Icon: Subtle color accent */}
                      <Quote size={16} className="text-[#2776ea] mb-3 opacity-80" />
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Minimalist Logo Card
function LogoCard({ src }: { src: string }) {
    return (
        <div className="flex h-16 w-36 items-center justify-center opacity-70  transition-all duration-500 hover:opacity-100 hover:grayscale-0">
            <img 
                src={src} 
                alt="Client" 
                className="h-8 w-full object-contain" 
                loading="lazy" 
            />
        </div>
    );
}