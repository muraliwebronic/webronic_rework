"use client";

import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
// Using the requested relative path
import { HOSPITALITY_STACK_CASES_PRICING_DATA } from "../data/HOSPITALITY_STACK_CASES_PRICING_DATA";

export default function HospitalityStackCasesPricing() {
  const { stack, caseStudies, pricing } = HOSPITALITY_STACK_CASES_PRICING_DATA;

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stack.categories.map((cat, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                
                <ul className="space-y-3">
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

          <div className="space-y-20">
            {caseStudies.cases.map((study, index) => (
              <div key={index} className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden">
                
                {/* Header */}
                <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#2776ea]/10 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-[#76ea27]/20 text-[#76ea27]">
                        <study.icon size={32} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black">{study.title}</h3>
                    </div>
                    {index === 0 && <span className="text-xs text-slate-400 mb-4 block"></span>}
                    {index === 1 && <span className="text-xs text-slate-400 mb-4 block"></span>}
                    <p className="text-blue-200 font-mono text-sm border-l-4 border-[#2776ea] pl-4">
                      {study.client}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12 grid gap-12">
                  
                  {/* Grid Layout for Details */}
                  <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Challenge */}
                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-black text-red-600 mb-6 uppercase tracking-wider">
                        <AlertTriangle size={20} /> Challenge
                      </h4>
                      <ul className="space-y-3">
                        {study.challenge.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                            <span className="text-red-400 mt-0.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                      <h4 className="flex items-center gap-3 text-lg font-black text-[#2776ea] mb-6 uppercase tracking-wider">
                        <TrendingUp size={20} /> Solution
                      </h4>
                      <ul className="space-y-3">
                        {study.solution.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                            <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Results Row */}
                  <div className="border-t border-slate-100 pt-12">
                    <div className="border-l-2 border-[#76ea27]/30 pl-6">
                      <h4 className="flex items-center gap-3 text-lg font-black text-[#76ea27] mb-6 uppercase tracking-wider">
                        <TrendingUp size={20} /> Results
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {study.results.items.map((res, i) => (
                          <div key={i} className="text-sm text-slate-700 font-bold flex items-start gap-2">
                            <span className="text-[#76ea27] mt-1">•</span>
                            <span className="leading-relaxed">{res}</span>
                          </div>
                        ))}
                      </div>
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
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {pricing.title}
            </h2>
            <div className="h-1.5 w-24 bg-[#2776ea] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="bg-slate-50 p-8 border-b border-slate-100 group-hover:bg-[#2776ea]/5 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea]">
                      <cat.icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Pricing Items */}
                <div className="p-8">
                  <ul className="space-y-6">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                        <span className="text-sm font-medium text-slate-600">
                          {item.label}
                        </span>
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-lg font-black text-[#2776ea]">
                            {item.price}
                          </span>
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