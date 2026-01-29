"use client";

import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { HOSPITALITY_STACK_CASES_PRICING_DATA } from "../data/HOSPITALITY_STACK_CASES_PRICING_DATA";

export default function HospitalityStackCasesPricing() {
  const { stack, caseStudies, pricing } = HOSPITALITY_STACK_CASES_PRICING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: TECHNOLOGY STACK (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader isWhite title={stack.title} centered={true} className="mb-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stack.categories.map((cat, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-h3 font-bold text-slate-900">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-submenu text-slate-600 font-medium">
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
          <SectionHeader title={caseStudies.title} centered={true} className="mb-24" />

          <div className="space-y-20">
            {caseStudies.cases.map((study, index) => (
              <div key={index} className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden hover:border-[#2776ea]/30 transition-colors">
                
                {/* Header (Clean Slate-50) */}
                <div className="bg-slate-100 p-8 md:p-12 border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-[#2776ea] text-white shadow-lg">
                        <study.icon size={32} />
                      </div>
                      <div>
                         <h3 className="text-h2 font-black text-slate-900">{study.title}</h3>
                         <p className="text-submenu font-bold text-slate-500 mt-1">Client: {study.client}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 grid gap-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Challenge */}
                    <div>
                      <h4 className="flex items-center gap-3 text-h3 font-black text-red-500 mb-6 uppercase tracking-wider">
                        <AlertTriangle size={20} /> Challenge
                      </h4>
                      <ul className="space-y-3">
                        {study.challenge.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-submenu font-medium">
                            <span className="text-red-400 mt-0.5">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="bg-[#2776ea]/5 p-8 rounded-[2rem] border border-[#2776ea]/10">
                      <h4 className="flex items-center gap-3 text-h3 font-black text-[#2776ea] mb-6 uppercase tracking-wider">
                        <TrendingUp size={20} /> Solution
                      </h4>
                      <ul className="space-y-3">
                        {/*@ts-ignore*/}
                        {(study.solution.items || []).map((item, j) => (
                           <li key={j} className="flex items-start gap-2 text-submenu text-slate-700 font-medium">
                             <CheckCircle2 size={14} className="text-[#2776ea] shrink-0 mt-0.5" />
                             <span className="leading-snug">{typeof item === 'string' ? item : ""}</span>
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-slate-100 pt-10">
                    <h4 className="flex items-center gap-3 text-h3 font-black text-[#76ea27] mb-8 uppercase tracking-wider">
                      <TrendingUp size={20} /> Impact
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {/*@ts-ignore*/}
                      {(study.results.items || []).map((item, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <p className="text-submenu text-slate-600 font-medium">
                             {typeof item === 'string' ? item : ""}
                          </p>
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

      {/* --- PART 3: PRICING (Clean Grid) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader title={pricing.title} centered={true} className="mb-20" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-slate-50 p-8 border-b border-slate-100 group-hover:bg-[#2776ea]/5 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea]">
                      <cat.icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-h3 font-black text-slate-900 leading-tight">{cat.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-6">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                        <span className="text-submenu font-medium text-slate-600">{item.label}</span>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-h3 font-black text-[#2776ea]">{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}