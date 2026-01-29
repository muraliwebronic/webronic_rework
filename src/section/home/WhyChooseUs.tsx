"use client";

import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { FEATURES, WhyChooseCardProps } from "@/AllData/Home/whyChooseUs";

const WhyChooseCard = ({
  title,
  description,
  icon: Icon,
  color,
}: WhyChooseCardProps) => (
  <div className="group relative flex flex-col h-full font-sora">
    {/* 1. THE FLOATING ICON BOX */}
    <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
      <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3">
        <Icon
          size={36}
          className="transition-colors duration-300"
          style={{ color: color }}
          strokeWidth={1.5}
        />
      </div>
    </div>

    {/* 2. THE PEDESTAL BASE */}
    <div className="mt-12 flex-1 relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:border-blue-100 overflow-hidden">
      {/* Fake Floor Shadow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-3 bg-blue-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-blue-900/10 group-hover:blur-xl" />

      {/* Content Section */}
      <div className="pt-16 relative z-10 flex-1 flex flex-col items-center text-center">
<h3 className="text-h3 font-bold text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors leading-tight">
          {title}
        </h3>

<p className="text-submenu text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </div>
);

// --- PARENT COMPONENT ---
export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-slate-50/50 overflow-hidden font-sora">
      <div className="container relative z-10 mx-auto px-6">
        {/* REUSABLE HEADER */}
        <div className="mb-20">
          <SectionHeader
            badge="Why Choose us"
            title="Why Partner With"
            highlight="Webronic Industries?"
            description="We deliver AI-first, end-to-end technology solutions backed by global expertise and a proven track record"
            centered={true}
            className="max-w-3xl mx-auto"
          />
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-12 items-stretch max-w-5xl mx-auto">
          {FEATURES.map((feature) => (
            <WhyChooseCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
