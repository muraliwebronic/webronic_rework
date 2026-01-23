"use client";

import { CheckCircle2, AlertTriangle, TrendingUp, DollarSign, Clock } from "lucide-react";
// Using the requested relative path
import { REAL_ESTATE_SMART_CRM_DATA } from "../data/REAL_ESTATE_SMART_CRM_DATA";

export default function RealEstateSmartCrm() {
  const { smartBuilding, crm, stack, caseStudies, pricing } = REAL_ESTATE_SMART_CRM_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: SMART BUILDING AUTOMATION (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Decor */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {smartBuilding.title} [Image of smart building automation dashboard]
            </h2>
          </div>

          {/* BMS Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-[#2776ea] border-b border-white/10 pb-4">
              {smartBuilding.bms.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartBuilding.bms.categories.map((cat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea] w-fit mb-4">
                    <cat.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-4">{cat.title}</h4>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* IoT & Tenant Experience */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* IoT Sensors */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
              <h3 className="text-xl font-bold mb-6">{smartBuilding.iot.title}</h3>
              <div className="space-y-6">
                {smartBuilding.iot.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-[#76ea27] text-sm mb-2">{item.title}</h4>
                    <ul className="space-y-1">
                      {item.details.map((det, j) => (
                        <li key={j} className="text-sm text-slate-300">• {det}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant Experience */}
            <div className="bg-[#2776ea] rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">{smartBuilding.tenantExp.title}</h3>
                
                <div className="bg-white/10 p-6 rounded-2xl mb-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <smartBuilding.tenantExp.app.icon />
                    <h4 className="font-bold">{smartBuilding.tenantExp.app.title}</h4>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {smartBuilding.tenantExp.app.items.map((item, i) => (
                      <li key={i} className="text-xs text-blue-100 flex items-start gap-2">
                        <CheckCircle2 size={12} className="shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-3">{smartBuilding.tenantExp.benefits.title}</h4>
                  <ul className="space-y-2">
                    {smartBuilding.tenantExp.benefits.items.map((item, i) => (
                      <li key={i} className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76ea27]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- PART 2: CRM & TECH STACK (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* CRM Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
              {crm.title}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {crm.stages.map((stage, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#76ea27]/10 text-[#76ea27]">
                      <stage.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{stage.title}</h3>
                  </div>

                  {stage.subSections ? (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {stage.subSections.map((sub, i) => (
                        <div key={i}>
                          <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">{sub.label}</h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, j) => (
                              <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="text-[#76ea27]">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {stage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mb-4">Platforms</span>
              <div className="flex flex-wrap justify-center gap-3">
                {crm.platforms.map((plat, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 shadow-sm">
                    {plat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
              {stack.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stack.categories.map((cat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon className="text-[#2776ea]" size={24} />
                    <h4 className="font-bold text-slate-900">{cat.title}</h4>
                  </div>
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-snug">
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

      {/* --- PART 3: CASE STUDIES & PRICING (White Theme) --- */}
      <div className="bg-white py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Case Studies */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 text-center">
              {caseStudies.title}
            </h2>
            <div className="space-y-16">
              {caseStudies.cases.map((study, index) => (
                <div key={index} className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-slate-900 p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">{study.title}</h3>
                      <p className="text-blue-200 text-sm font-mono mt-2">{study.client}</p>
                    </div>
                    {index === 0 && <span className="text-xs text-slate-400">[Image of smart office energy dashboard]</span>}
                    {index === 1 && <span className="text-xs text-slate-400">[Image of BIM construction coordination model]</span>}
                  </div>
                  
                  <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-black text-red-500 mb-4 uppercase tracking-wider">
                          <AlertTriangle size={20} /> Challenge
                        </h4>
                        <ul className="space-y-2">
                          {study.challenge.items.map((item, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="text-red-400 mt-1">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-lg font-black text-[#2776ea] mb-4 uppercase tracking-wider">
                          <TrendingUp size={20} /> Solution
                        </h4>
                        <ul className="space-y-2">
                          {study.solution.items.map((item, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-[#2776ea] mt-0.5 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-100">
                      <h4 className="flex items-center gap-2 text-lg font-black text-[#76ea27] mb-6 uppercase tracking-wider">
                        <DollarSign size={20} /> Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.items.map((item, i) => (
                          <li key={i} className="text-sm font-bold text-slate-700 border-b border-slate-50 last:border-0 pb-2 last:pb-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                {pricing.title}
              </h2>
              <div className="h-1.5 w-24 bg-[#2776ea] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.categories.map((cat, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-[#2776ea] transition-colors shadow-sm hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="p-2 rounded-lg bg-slate-50 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                      <cat.icon size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900 leading-tight">{cat.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="font-black text-[#2776ea]">{item.price}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}