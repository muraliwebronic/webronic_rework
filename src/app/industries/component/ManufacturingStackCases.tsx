"use client";

import { CheckCircle2, AlertTriangle, TrendingUp, DollarSign } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_STACK_CASES_DATA } from "../data/MANUFACTURING_STACK_CASES_DATA";

export default function ManufacturingStackCases() {
  const { stack, caseStudies } = MANUFACTURING_STACK_CASES_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: TECHNOLOGY STACK (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader isWhite title={stack.title} centered={true} className="mb-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stack.categories.map((cat, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[2.5rem] shadow-xl text-slate-900 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black">{cat.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
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

      {/* --- PART 2: CASE STUDIES (Clean Light) --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader title={caseStudies.title} centered={true} className="mb-24" />

          <div className="space-y-24">
            {caseStudies.cases.map((study, index) => (
              <div key={index} className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden group hover:border-[#2776ea]/30 transition-colors">
                
                {/* Header */}
                <div className="bg-slate-50 p-8 md:p-12 border-b border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                        <study.icon size={32} />
                      </div>
                      <div>
                         <h3 className="text-2xl md:text-3xl font-black text-slate-900">{study.title}</h3>
                         <p className="text-sm font-bold text-slate-500 mt-1">Client: {study.client}</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-[#76ea27]/10 text-[#76ea27] text-xs font-black uppercase tracking-widest rounded-full self-start">
                      Success Story
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-12 grid gap-12">
                  
                  {/* Challenge & Solution Grid */}
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Challenge */}
                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-black text-red-500 mb-6 uppercase tracking-wider">
                        <AlertTriangle size={20} /> Challenge
                      </h4>
                      <ul className="space-y-3">
                        {study.challenge.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                            <span className="text-red-400 mt-0.5 font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="bg-[#2776ea]/5 p-8 rounded-[2rem] border border-[#2776ea]/10">
                      <div className="flex items-center justify-between mb-6">
                         <h4 className="flex items-center gap-3 text-lg font-black text-[#2776ea] uppercase tracking-wider">
                           <TrendingUp size={20} /> Solution
                         </h4>
                      </div>
                      
                      <div className="grid gap-6">
                        {study.solution.sections.map((section, i) => (
                          <div key={i}>
                            <h5 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide opacity-80">
                              {section.title}
                            </h5>
                            <ul className="space-y-2">
                              {section.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-slate-700 font-bold">
                                  <CheckCircle2 size={14} className="text-[#2776ea] shrink-0 mt-0.5" />
                                  <span className="leading-snug">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results Bar */}
                  <div className="border-t border-slate-100 pt-10">
                    <h4 className="flex items-center gap-3 text-lg font-black text-[#76ea27] mb-8 uppercase tracking-wider">
                      <DollarSign size={20} /> Impact & Results
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {study.results.sections.map((section, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <h5 className="font-bold text-slate-900 mb-3 text-lg leading-tight">
                            {section.title}
                          </h5>
                          <ul className="space-y-2">
                            {section.items.map((item, j) => (
                              <li key={j} className="text-sm text-slate-500 font-medium">
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