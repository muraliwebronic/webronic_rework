"use client";

import { CheckCircle2 } from "lucide-react";
import { BENEFITS_PERKS_DATA } from "../data/BENEFITS_PERKS_DATA";

export default function BenefitsPerks() {
  const { header, categories } = BENEFITS_PERKS_DATA;

  return (
    <section className="bg-slate-50 py-24 md:py-32 font-sora relative overflow-hidden">
      
      {/* --- Background Ambient Effects --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2776ea]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#76ea27]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76ea27] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76ea27]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              {header.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            {header.title} <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {header.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* --- Masonry-style Grid --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, index) => {
            const isBlue = cat.color === "blue";
            const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
            const borderHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";

            return (
              <div 
                key={index}
                className={`group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${borderHover}`}
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-14 w-14 rounded-2xl ${bgIcon} flex items-center justify-center ${accentColor} group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {cat.title}
                  </h3>
                </div>

                {/* Subsections */}
                <div className="space-y-8">
                  {cat.subsections.map((sub, idx) => (
                    <div key={idx}>
                      <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isBlue ? "text-slate-400" : "text-slate-400"}`}>
                        {sub.title}
                      </h4>
                      <ul className="space-y-3">
                        {sub.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                            <CheckCircle2 
                              size={16} 
                              className={`shrink-0 mt-0.5 ${accentColor}`} 
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}