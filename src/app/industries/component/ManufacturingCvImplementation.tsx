"use client";

import { CheckCircle2, Clock } from "lucide-react";
import { MANUFACTURING_CV_IMPLEMENTATION_DATA } from "../data/MANUFACTURING_CV_IMPLEMENTATION_DATA";

export default function ManufacturingCvImplementation() {
  const { process, performance, roi } = MANUFACTURING_CV_IMPLEMENTATION_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: IMPLEMENTATION PROCESS (Vertical Timeline) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {process.title}
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2776ea]/10 text-[#2776ea] rounded-full font-bold text-sm">
              <Clock size={16} />
              {process.timeline} 
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12">
              {process.phases.map((phase, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
                    
                    {/* Center Icon */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center z-10 text-[#2776ea] shadow-sm">
                      <phase.icon size={20} />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-xs font-bold text-[#2776ea] uppercase tracking-wider block mb-1">
                              {phase.phase}
                            </span>
                            <h3 className="text-xl font-black text-slate-900">
                              {phase.title}
                            </h3>
                          </div>
                          <span className="px-3 py-1 bg-slate-50 rounded-lg text-xs font-bold text-slate-500 whitespace-nowrap">
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

      {/* --- PART 2: PERFORMANCE METRICS (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <h2 className="text-3xl font-black mb-16 text-center">
            {performance.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {performance.metrics.map((metric, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                    <metric.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{metric.category}</h3>
                </div>
                <ul className="space-y-4">
                  {metric.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
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

      {/* --- PART 3: ROI CASE STUDY (Highlight) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-br from-[#2776ea]/5 to-[#2776ea]/10 rounded-[3rem] p-8 md:p-16 border border-[#2776ea]/20">
            
            <div className="text-center mb-12">
              <span className="bg-[#2776ea] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                Success Story
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                {roi.caseStudy.title}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Challenge & Solution */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-red-500 mb-4 uppercase tracking-wider text-sm">
                    {roi.caseStudy.challenge.title}
                  </h3>
                  <ul className="space-y-2">
                    {roi.caseStudy.challenge.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm font-medium flex items-start gap-2">
                        <span className="text-red-400">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#2776ea] mb-4 uppercase tracking-wider text-sm">
                    {roi.caseStudy.solution.title}
                  </h3>
                  <ul className="space-y-2">
                    {roi.caseStudy.solution.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm font-medium flex items-start gap-2">
                        <span className="text-[#2776ea]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Financials */}
              <div className="space-y-8">
                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <roi.caseStudy.investment.icon className="text-[#76ea27]" />
                    <h3 className="text-xl font-bold uppercase tracking-wider text-sm">
                      {roi.caseStudy.investment.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {roi.caseStudy.investment.items.map((item, i) => (
                      <div key={i} className={`flex justify-between items-center ${item.highlight ? "pt-4 border-t border-white/20" : ""}`}>
                        <span className={`text-sm ${item.highlight ? "font-bold text-white" : "text-slate-400"}`}>
                          {item.label}
                        </span>
                        <span className={`font-mono ${item.highlight ? "text-xl font-black text-[#76ea27]" : "text-slate-300"}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#76ea27]/30">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                    <roi.caseStudy.results.icon className="text-[#2776ea]" />
                    <h3 className="text-xl font-bold uppercase tracking-wider text-sm text-slate-900">
                      {roi.caseStudy.results.title}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {roi.caseStudy.results.items.map((item, i) => (
                      <div key={i} className={item.highlight ? "col-span-full bg-[#76ea27]/10 p-4 rounded-xl mt-2 text-center" : ""}>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className={`font-black ${item.highlight ? "text-2xl text-[#2776ea]" : "text-lg text-slate-900"}`}>
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-500 font-bold italic">
              {roi.caseStudy.additionalBenefits}
            </p>

          </div>
        </div>
      </div>

    </section>
  );
}