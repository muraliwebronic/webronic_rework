"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { DIGITAL_TWIN_IMPLEMENTATION_DATA } from "../data/DIGITAL_TWIN_IMPLEMENTATION_DATA";
import SectionHeader from "@/components/common/SectionHeader";

export default function DigitalTwinImplementation() {
  const { sectionTitle, phases, useCases, roi } = DIGITAL_TWIN_IMPLEMENTATION_DATA;

  return (
    <section className="font-sora overflow-hidden">
      
      {/* --- PART 1: IMPLEMENTATION PHASES (Vertical Timeline) --- */}
      <div className="bg-white py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <SectionHeader
            badge="Process Roadmap"
            title={sectionTitle}
            description="A structured approach to deploying your digital enterprise simulation"
            centered={true}
            className="mb-24"
          />

          <div className="relative">
            {/* Vertical Connector Line (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {phases.map((phase, index) => {
                const isEven = index % 2 === 0;
                const PhaseIcon = phase.icon;
                
                return (
                  <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""} relative`}>
                    
                    {/* Center Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#2776ea] z-10 hidden lg:block" />

                    {/* Spacer */}
                    <div className="hidden lg:block w-1/2" />

                    {/* Content Card */}
                    <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-20" : "lg:pl-20"}`}>
                      <div className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#2776ea] transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                           <div className="p-3 rounded-2xl bg-white text-[#2776ea] border border-slate-100 shadow-sm">
                              <PhaseIcon size={24} strokeWidth={1.5} />
                           </div>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                             {phase.phase}
                           </span>
                        </div>

                        <h4 className="text-xl font-bold text-slate-900 mb-4">
                          {phase.title}
                        </h4>

                        <ul className="space-y-3">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                              <div className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-2 shrink-0" />
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

      {/* --- PART 2: USE CASES (Primary Blue Background) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader
            badge="Applications"
            title={useCases.title}
            description="Real-world scenarios where digital twins drive value"
            centered={true}
            isWhite={true}
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.cases.map((useCase, index) => {
              const CaseIcon = useCase.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-900/10 flex flex-col"
                >
                  <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6">
                    <div className="h-14 w-14 rounded-2xl bg-[#2776ea]/10 text-[#2776ea] flex items-center justify-center shrink-0">
                      <CaseIcon size={28} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">{useCase.title}</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {useCase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 size={18} className="text-[#76ea27] shrink-0 mt-0.5" />
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

      {/* --- PART 3: ROI HIGHLIGHT --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#2776ea] font-bold uppercase tracking-widest text-xs mb-4 block">
                  Projected Impact
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {roi.title}
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  {roi.subtitle}
                </p>
              </div>

              <div className="grid gap-4">
                {roi.stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-100">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {stat.label}
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {stat.sub}
                      </p>
                    </div>
                    <div className="text-3xl font-black text-[#2776ea]">
                      {stat.value}
                    </div>
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