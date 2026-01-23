"use client";

import { CheckCircle2 } from "lucide-react";
// Using the requested relative path
import { DIGITAL_TWIN_IMPLEMENTATION_DATA } from "../data/DIGITAL_TWIN_IMPLEMENTATION_DATA";

export default function DigitalTwinImplementation() {
  const { sectionTitle, phases, useCases, roi } = DIGITAL_TWIN_IMPLEMENTATION_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: IMPLEMENTATION PHASES (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              Process Roadmap
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {sectionTitle}
            </h2>
            <div className="h-1.5 w-24 bg-[#2776ea] mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical Connector Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2776ea]/20 via-[#2776ea] to-[#76ea27]/20 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {phases.map((phase, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""} relative`}>
                    
                    {/* Central Icon Node */}
                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center z-10 hidden lg:flex">
                      <phase.icon className="text-[#2776ea]" size={28} strokeWidth={1.5} />
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block w-1/2" />

                    {/* Content Card */}
                    <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-20" : "lg:pl-20"}`}>
                      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2776ea]/20 transition-all duration-300 relative overflow-hidden group">
                        
                        {/* Mobile Icon (Visible only on mobile) */}
                        <div className="lg:hidden mb-6 inline-flex p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                          <phase.icon size={24} />
                        </div>

                        {/* Phase Number Watermark */}
                        <span className="absolute top-0 right-0 p-6 text-6xl font-black text-slate-100 opacity-50 select-none group-hover:text-[#2776ea]/10 transition-colors">
                          {index + 1}
                        </span>

                        <h3 className="text-sm font-bold text-[#2776ea] uppercase tracking-wider mb-2">
                          {phase.phase}
                        </h3>
                        <h4 className="text-2xl font-black text-slate-900 mb-6">
                          {phase.title}
                        </h4>

                        <ul className="space-y-3">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-2 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: USE CASES (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {useCases.title} 

[Image of digital twin simulation]

            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.cases.map((useCase, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/10 text-[#76ea27]">
                    <useCase.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {useCase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- PART 3: ROI EXAMPLE (Highlight) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-br from-[#76ea27]/10 to-[#76ea27]/5 rounded-[3rem] p-10 md:p-16 border border-[#76ea27]/20 relative overflow-hidden">
            
            {/* Background Icon */}
            <roi.icon className="absolute -right-10 -bottom-10 w-64 h-64 text-[#76ea27]/10 rotate-12 pointer-events-none" />

            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-black text-slate-900 mb-4">
                  {roi.title}
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                  {roi.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {roi.stats.map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-[#76ea27]/20">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-black text-slate-900 mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-slate-500 leading-snug">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}