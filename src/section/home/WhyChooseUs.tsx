"use client";

import React from "react";
import { Brain, Globe, Trophy, Infinity } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const FEATURES = [
  {
    id: 1,
    title: "AI-First Innovation",
    description:
      "Unlike traditional IT companies, we embed artificial intelligence and machine learning across all our services, ensuring your solutions are future-ready and intelligent from day one.",
    icon: Brain,
    color: "#2776ea",
  },
  {
    id: 2,
    title: "Global-Local Advantage",
    description:
      "With operations in India and Europe (through Thingsatweb Sweden AB), we combine Indian innovation excellence with European quality standards, delivering world-class solutions.",
    icon: Globe,
    color: "#76ea27",
  },
  {
    id: 3,
    title: "Proven Track Record",
    description:
      "Over 15 years of delivering successful projects across 50+ countries, serving clients from startups to Fortune 500 enterprises with consistent 99.9% satisfaction ratings.",
    icon: Trophy,
    color: "#2776ea",
  },
  {
    id: 4,
    title: "End-to-End Solutions",
    description:
      "From initial strategy and consulting through development, deployment, and ongoing support, we provide comprehensive technology services that evolve with your business needs.",
    icon: Infinity,
    color: "#76ea27",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:px-20 bg-white overflow-hidden font-sora">
      
      {/* --- Background Ambient Light --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-slate-50/50 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* REUSABLE HEADER */}
        <SectionHeader 
            title="Why Partner With"
            highlight="Webronic Industries?"
            description="We bridge the gap between complex technology and tangible business results through a unique blend of global expertise and AI-driven innovation."
            centered={true}
            className="max-w-3xl mx-auto"
        />

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div
  key={feature.id}
  className="group relative flex flex-col md:flex-row items-start gap-6 p-8 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:border-[#2776ea] hover:shadow-lg hover:shadow-blue-900/5 overflow-hidden"
>
  {/* 1. Subtle Hover Background (Very faint tech feel) */}
  <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
  {/* 2. Icon Box: Switched to 'Squircle' for a modern tech look */}
  <div className="relative z-10 shrink-0">
    <div 
        className="h-16 w-16 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-600 transition-all duration-300 group-hover:bg-[#2776ea] group-hover:border-[#2776ea] group-hover:text-white group-hover:-translate-y-1"
    >
        <feature.icon size={26} strokeWidth={1.5} />
    </div>
    {/* Decorative vertical line below icon */}
    <div className="absolute left-1/2 -translate-x-1/2 top-full h-0 w-[1px] bg-[#2776ea]/30 transition-all duration-500 group-hover:h-8" />
  </div>

  {/* 3. Content Area */}
  <div className="relative z-10 flex-1">
    <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#2776ea] transition-colors">
          {feature.title}
        </h3>
        
        {/* Precision Index Number */}
        <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#2776ea]/60 transition-colors">
            0{feature.id}
        </span>
    </div>

    <p className="text-sm font-medium text-slate-500 leading-relaxed">
      {feature.description}
    </p>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}