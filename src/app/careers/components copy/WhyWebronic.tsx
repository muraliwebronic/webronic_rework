"use client";

import { CheckCircle2 } from "lucide-react";
import { WHY_WEBRONIC_DATA } from "../data/WHY_WEBRONIC_DATA";


export default function WhyWebronic() {
  const { header, features } = WHY_WEBRONIC_DATA;

  return (
    <section className="bg-slate-50 py-24 md:py-32 font-sora relative overflow-hidden">
      
      {/* --- Background Patterns --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2776ea]/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#76ea27]/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2776ea] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              {header.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            {header.title} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {header.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isBlue = feature.color === "blue";
            const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const bgHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";
            const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

            return (
              <div 
                key={index}
                className={`group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${bgHover}`}
              >
                {/* Icon */}
                <div className={`h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center ${accentColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-slate-800">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Details List */}
                <ul className="space-y-3 pt-6 border-t border-slate-50">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-bold text-slate-600">
                      <CheckCircle2 
                        size={14} 
                        className={`shrink-0 mt-0.5 ${accentColor}`} 
                      />
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}