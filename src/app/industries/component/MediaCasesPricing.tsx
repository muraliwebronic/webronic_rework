"use client";

import { CheckCircle2, Clock, AlertTriangle, TrendingUp, Cpu } from "lucide-react";
// Using the requested relative path
import { MEDIA_CASES_PRICING_DATA } from "../data/MEDIA_CASES_PRICING_DATA";

export default function MediaCasesPricing() {
  const { caseStudies, pricing } = MEDIA_CASES_PRICING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: CASE STUDIES (Light Theme) --- */}
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
                    <p className="text-blue-200 font-mono text-sm border-l-4 border-[#2776ea] pl-4">
                      Client: {study.client}
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

                  {/* Technology & Results Row */}
                  <div className="grid md:grid-cols-2 gap-12 border-t border-slate-100 pt-12">
                    
                    <div>
                      <h4 className="flex items-center gap-3 text-lg font-black text-slate-900 mb-6 uppercase tracking-wider">
                        <Cpu size={20} /> Technology
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technology.items.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {study.timeline && (
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-slate-50 p-3 rounded-lg inline-block">
                          <Clock size={16} /> Timeline: {study.timeline}
                        </div>
                      )}
                    </div>

                    <div className="border-l-2 border-[#76ea27]/30 pl-6">
                      <h4 className="flex items-center gap-3 text-lg font-black text-[#76ea27] mb-6 uppercase tracking-wider">
                        <TrendingUp size={20} /> Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.items.map((res, i) => (
                          <li key={i} className="text-sm text-slate-700 font-bold flex items-start gap-2">
                            <span className="text-[#76ea27]">•</span> {res}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- PART 2: PRICING (Clean Grid) --- */}
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
                          {item.sub && (
                            <span className="text-xs text-slate-400 font-medium">
                              {item.sub}
                            </span>
                          )}
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