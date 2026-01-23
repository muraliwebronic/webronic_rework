"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
// Using the requested relative path
import { MANUFACTURING_PRICING_DATA } from "../data/MANUFACTURING_PRICING_DATA";

export default function ManufacturingPricing() {
  const { pricing, gettingStarted } = MANUFACTURING_PRICING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: PRICING GRID (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {pricing.title}
            </h2>
            <div className="h-1.5 w-24 bg-[#2776ea] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-[#2776ea]/5 p-8 border-b border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea]">
                      <cat.icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="p-8">
                  <ul className="space-y-6">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                        <span className="text-sm font-medium text-slate-600">
                          {item.label}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-lg font-black text-[#2776ea]">
                            {item.price}
                          </span>
                          {item.sub && (
                            <span className="text-xs text-slate-400 font-medium">
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

      {/* --- PART 2: GETTING STARTED (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Decor */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            {gettingStarted.title}
          </h2>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left: Free Assessment (Highlight) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#2776ea] to-[#1a65d8] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                  Recommended First Step
                </span>
                <h3 className="text-3xl font-black text-white mb-4">
                  {gettingStarted.assessment.title}
                </h3>
                <p className="text-blue-100 font-medium mb-8 text-lg">
                  {gettingStarted.assessment.subtitle}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {gettingStarted.assessment.items.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white font-medium">
                      <CheckCircle2 className="text-[#76ea27] shrink-0 mt-1" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2776ea] font-black px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                  {gettingStarted.assessment.cta}
                </button>
              </div>
              
              {/* Abstract Decor */}
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                <CheckCircle2 size={400} />
              </div>
            </div>

            {/* Right: Tour, Contact, Resources */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tour Card */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <gettingStarted.tour.icon className="text-[#76ea27]" />
                  <h3 className="font-bold text-xl">{gettingStarted.tour.title}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  {gettingStarted.tour.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {gettingStarted.tour.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-xl mb-6">{gettingStarted.contact.title}</h3>
                <ul className="space-y-4">
                  {gettingStarted.contact.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-[#2776ea]/20 text-[#2776ea]">
                        <detail.icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">{detail.label}</p>
                        <p className="font-bold text-white">{detail.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloads */}
              <div className="bg-[#76ea27]/10 border border-[#76ea27]/20 p-8 rounded-[2rem]">
                <h3 className="font-bold text-xl text-[#76ea27] mb-6">
                  {gettingStarted.downloads.title}
                </h3>
                <ul className="space-y-3">
                  {gettingStarted.downloads.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer group">
                      <item.icon size={16} className="text-[#76ea27] group-hover:scale-110 transition-transform" />
                      <span className="border-b border-transparent group-hover:border-white transition-colors">{item.name}</span>
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