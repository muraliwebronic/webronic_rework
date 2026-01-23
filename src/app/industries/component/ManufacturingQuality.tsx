"use client";

import { CheckCircle2 } from "lucide-react";
import { MANUFACTURING_QUALITY_DATA } from "../data/MANUFACTURING_QUALITY_DATA";

export default function ManufacturingQuality() {
  const { header, applications, techStack, software } = MANUFACTURING_QUALITY_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: INTRO & APPLICATIONS (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {header.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4">
              {header.subTitle}
            </p>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                {header.introTitle} 
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {header.description}
              </p>
            </div>
          </div>

          {/* Applications Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {applications.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {applications.categories.map((cat, index) => {
                const isBlue = cat.color === "blue";
                const iconColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                const borderHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";

                return (
                  <div 
                    key={index}
                    className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${borderHover}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} shrink-0`}>
                        <cat.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {cat.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]"}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: TECH STACK (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        
        {/* Background Grid */}

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {techStack.title} 
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.columns.map((col, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                    <col.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{col.title}</h3>
                </div>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PART 3: SOFTWARE & ALGORITHMS (Split Layout) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">
            {software.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {software.sections.map((section, index) => {
              const isBlue = section.theme === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const borderColor = isBlue ? "border-[#2776ea]" : "border-[#76ea27]";
              const bgHeader = isBlue ? "bg-[#2776ea]/5" : "bg-[#76ea27]/5";

              return (
                <div key={index}>
                  <div className={`flex items-center gap-4 mb-6 p-4 rounded-2xl ${bgHeader}`}>
                    <section.icon size={32} className={accentColor} />
                    <h3 className={`text-2xl font-black ${accentColor}`}>
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 pl-4 border-l-2 border-slate-100">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-slate-700 leading-relaxed font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}