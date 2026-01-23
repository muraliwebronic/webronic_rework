"use client";

import { CheckCircle2, Clock } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_CV_IMPLEMENTATION_DATA } from "../data/MANUFACTURING_CV_IMPLEMENTATION_DATA";

export default function ManufacturingCvImplementation() {
  const { process, performance, roi } = MANUFACTURING_CV_IMPLEMENTATION_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: PROCESS TIMELINE --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeader 
            badge="Deployment"
            title={process.title}
            centered={true}
            className="mb-12"
          />
          <div className="flex justify-center mb-20">
             <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#2776ea]/10 text-[#2776ea] rounded-full font-bold text-sm">
                <Clock size={16} /> {process.timeline} 
             </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-16">
              {process.phases.map((phase, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
                    
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 text-[#2776ea] shadow-sm">
                      <phase.icon size={20} />
                    </div>

                    <div className="hidden md:block w-1/2" />

                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                      <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-xs font-bold text-[#2776ea] uppercase tracking-wider block mb-1">
                              {phase.phase}
                            </span>
                            <h3 className="text-xl font-black text-slate-900">
                              {phase.title}
                            </h3>
                          </div>
                          <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-500">
                            {phase.duration}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                              <span className="leading-snug">{item}</span>
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

      {/* --- PART 2: METRICS (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={performance.title} centered={true} className="mb-20" />

          <div className="grid md:grid-cols-3 gap-8">
            {performance.metrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                    <metric.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{metric.category}</h3>
                </div>
                <ul className="space-y-4">
                  {metric.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PART 3: CASE STUDY --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-20 border border-slate-100">
            <div className="text-center mb-12">
              <span className="bg-[#2776ea] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Success Story</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">{roi.caseStudy.title}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Challenge</h3>
                  <ul className="space-y-2">
                    {roi.caseStudy.challenge.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm font-medium flex items-start gap-2">
                        <span className="text-red-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-bold text-[#2776ea] mb-4 uppercase tracking-wider text-sm">Solution</h3>
                  <ul className="space-y-2">
                    {roi.caseStudy.solution.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm font-medium flex items-start gap-2">
                        <span className="text-[#2776ea]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#2776ea] text-white p-10 rounded-[2.5rem] shadow-xl">
                 <h3 className="text-2xl font-black mb-8 text-white border-b border-white/20 pb-4">Results</h3>
                 <div className="grid sm:grid-cols-2 gap-8">
                    {roi.caseStudy.results.items.map((item, i) => (
                      <div key={i} className="bg-white/10 p-4 rounded-2xl text-center">
                        <p className="text-xs font-bold text-blue-100 uppercase mb-2">{item.label}</p>
                        <p className="font-black text-white">{item.value}</p>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}