"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_PRICING_DATA } from "../data/MANUFACTURING_PRICING_DATA";

export default function ManufacturingPricing() {
  const { pricing, gettingStarted } = MANUFACTURING_PRICING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: PRICING GRID --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader 
            badge="Investment"
            title={pricing.title}
            centered={true}
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="bg-slate-50 p-8 border-b border-slate-100 group-hover:bg-[#2776ea]/5 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea]">
                      <cat.icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="p-8">
                  <ul className="space-y-6">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                        <span className="text-sm font-bold text-slate-600">
                          {item.label}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-2xl font-black text-[#2776ea]">
                            {item.price}
                          </span>
                          {item.sub && (
                            <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded-md">
                              {item.sub}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- PART 2: GETTING STARTED (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader isWhite title={gettingStarted.title} centered={true} className="mb-20" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Free Assessment (White Card Highlight) */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-[#76ea27]/20 text-[#2776ea] text-xs font-black uppercase tracking-widest mb-6 border border-[#76ea27]/30">
                  Recommended First Step
                </span>
                <h3 className="text-3xl font-black mb-4">
                  {gettingStarted.assessment.title}
                </h3>
                <p className="text-slate-600 font-medium mb-8 text-lg leading-relaxed">
                  {gettingStarted.assessment.subtitle}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {gettingStarted.assessment.items.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-bold">
                      <CheckCircle2 className="text-[#2776ea] shrink-0 mt-1" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2776ea] text-white font-black px-8 py-4 rounded-xl hover:bg-[#1a5bbd] transition-colors shadow-lg hover:shadow-blue-500/30">
                  {gettingStarted.assessment.cta}
                </button>
              </div>
            </div>

            {/* Right: Resources */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] hover:bg-white/20 transition-colors backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4">
                  <gettingStarted.tour.icon className="text-[#76ea27]" />
                  <h3 className="font-bold text-xl">{gettingStarted.tour.title}</h3>
                </div>
                <p className="text-sm text-blue-100 mb-6 font-medium leading-relaxed">
                  {gettingStarted.tour.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {gettingStarted.tour.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-xs font-bold text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#76ea27] p-8 rounded-[2.5rem] text-slate-900 shadow-xl">
                <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                   <ArrowRight size={20} /> {gettingStarted.downloads.title}
                </h3>
                <ul className="space-y-3">
                  {gettingStarted.downloads.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold hover:text-white transition-colors cursor-pointer group">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#76ea27] transition-colors">
                         <item.icon size={14} />
                      </div>
                      <span className="border-b border-slate-900/10 group-hover:border-white">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}