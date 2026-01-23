"use client";

import { CheckCircle2, AlertTriangle, TrendingUp, DollarSign, Clock } from "lucide-react";
// Using the requested relative path
import { MANUFACTURING_STACK_CASES_DATA } from "../data/MANUFACTURING_STACK_CASES_DATA";

export default function ManufacturingStackCases() {
  const { stack, caseStudies } = MANUFACTURING_STACK_CASES_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: TECHNOLOGY STACK (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Decor */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {stack.title} 
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stack.categories.map((cat, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{cat.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PART 2: CASE STUDIES (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-20 text-center">
            {caseStudies.title}
          </h2>

          <div className="space-y-24">
            {caseStudies.cases.map((study, index) => (
              <div key={index} className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2776ea]/10 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-[#76ea27]/20 text-[#76ea27]">
                        <study.icon size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black">{study.title}</h3>
                    </div>
                    <p className="text-blue-200 font-mono text-sm border-l-4 border-[#2776ea] pl-4">
                      {study.client}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12 grid gap-12">
                  
                  {/* Challenge */}
                  <div>
                    <h4 className="flex items-center gap-3 text-xl font-black text-red-600 mb-6">
                      <AlertTriangle /> Challenge
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {study.challenge.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                          <span className="text-red-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="bg-blue-50/50 p-8 rounded-[2rem] border border-blue-100">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                      <h4 className="flex items-center gap-3 text-xl font-black text-[#2776ea]">
                        <TrendingUp /> Solution Implemented
                      </h4>
                      {index === 0 && <span className="text-xs font-bold text-slate-400"></span>}
                      {index === 1 && <span className="text-xs font-bold text-slate-400"></span>}
                      {index === 2 && <span className="text-xs font-bold text-slate-400"></span>}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {study.solution.sections.map((section, i) => (
                        <div key={i}>
                          <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">
                            {section.title}
                          </h5>
                          <ul className="space-y-2">
                            {section.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 size={14} className="text-[#2776ea] shrink-0 mt-0.5" />
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="flex items-center gap-3 text-xl font-black text-[#76ea27] mb-6">
                      <DollarSign /> Results
                    </h4>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                      {study.results.sections.map((section, i) => (
                        <div key={i} className="border-l-2 border-[#76ea27]/30 pl-6">
                          <h5 className="font-bold text-slate-900 mb-3 text-lg">
                            {section.title}
                          </h5>
                          <ul className="space-y-2">
                            {section.items.map((item, j) => (
                              <li key={j} className="text-sm text-slate-600 font-medium">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}