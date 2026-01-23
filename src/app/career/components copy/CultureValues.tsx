"use client";

import { CheckCircle2 } from "lucide-react";
import { CULTURE_VALUES_DATA } from "../data/CULTURE_VALUES_DATA";

export default function CultureValues() {
  const { header, coreValues, environment } = CULTURE_VALUES_DATA;

  return (
    <div className="font-sora bg-white overflow-hidden">
      
      {/* --- SECTION 1: CORE VALUES --- */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
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

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const isBlue = value.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const bgHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${bgHover} ${value.fullWidth ? "md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto text-center" : ""}`}
                >
                  <div className={`h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center ${accentColor} mb-6 transition-transform duration-300 group-hover:scale-110 ${value.fullWidth ? "mx-auto" : ""}`}>
                    <value.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {value.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- SECTION 2: WORK ENVIRONMENT (Dark Mode) --- */}
      <section className="py-24 bg-slate-900 text-white relative">
        {/* Background Decor */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {environment.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environment.items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-[#76ea27]/20 flex items-center justify-center text-[#76ea27]">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-medium pl-14">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}