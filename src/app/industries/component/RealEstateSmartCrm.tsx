"use client";

import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { REAL_ESTATE_SMART_CRM_DATA } from "../data/REAL_ESTATE_SMART_CRM_DATA";

export default function RealEstateSmartCrm() {
  const { smartBuilding, crm, stack, caseStudies, pricing } = REAL_ESTATE_SMART_CRM_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: SMART BUILDING AUTOMATION (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader isWhite title={smartBuilding.title} centered={true} className="mb-16" />

          {/* BMS Grid */}
          <div className="mb-20">
            <h3 className="text-h2 font-bold mb-8 text-white border-b border-white/20 pb-4">
              {smartBuilding.bms.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {smartBuilding.bms.categories.map((cat, index) => (
                <div key={index} className="bg-white/10 border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-colors backdrop-blur-md">
                  <div className="p-3 rounded-xl bg-white text-[#2776ea] w-fit mb-4">
                    <cat.icon size={24} />
                  </div>
                  <h4 className="font-bold text-h3 mb-4">{cat.title}</h4>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-caption text-blue-50 leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* IoT & Tenant Experience */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* IoT Sensors (White Card) */}
            <div className="bg-white p-8 rounded-[2.5rem] text-slate-900 shadow-2xl">
              <h3 className="text-h3 font-bold mb-6 text-slate-900">{smartBuilding.iot.title}</h3>
              <div className="space-y-6">
                {smartBuilding.iot.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-[#2776ea] text-submenu mb-2">{item.title}</h4>
                    <ul className="space-y-1">
                      {item.details.map((det, j) => (
                        <li key={j} className="text-submenu text-slate-600">• {det}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tenant Experience (Glass Card) */}
            <div className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-h3 font-bold mb-6">{smartBuilding.tenantExp.title}</h3>
              
              <div className="bg-white/10 p-6 rounded-3xl mb-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <smartBuilding.tenantExp.app.icon />
                  <h4 className="font-bold text-submenu">{smartBuilding.tenantExp.app.title}</h4>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {smartBuilding.tenantExp.app.items.map((item, i) => (
                    <li key={i} className="text-caption text-blue-100 flex items-start gap-2">
                      <CheckCircle2 size={12} className="shrink-0 mt-0.5 text-[#76ea27]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-blue-100 text-submenu">{smartBuilding.tenantExp.benefits.title}</h4>
                <ul className="space-y-2">
                  {smartBuilding.tenantExp.benefits.items.map((item, i) => (
                    <li key={i} className="text-submenu font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#76ea27]" /> {item}
                    </li>
                  ))}
                </ul>
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
            <SectionHeader title={crm.title} centered={true} className="mb-12" />
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {crm.stages.map((stage, index) => (
                <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                      <stage.icon size={28} />
                    </div>
                    <h3 className="text-h3 font-bold text-slate-900">{stage.title}</h3>
                  </div>

                  {stage.subSections ? (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {stage.subSections.map((sub, i) => (
                        <div key={i}>
                          <h4 className="font-bold text-slate-700 mb-3 text-caption uppercase tracking-wider">{sub.label}</h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, j) => (
                              <li key={j} className="text-submenu text-slate-600 flex items-start gap-2">
                                <span className="text-[#2776ea]">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {stage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-submenu text-slate-600 font-medium">
                          <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <SectionHeader title={stack.title} centered={true} className="mb-12" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stack.categories.map((cat, index) => (
                <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-[#2776ea] transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <cat.icon className="text-[#2776ea]" size={24} />
                    <h4 className="font-bold text-slate-900 text-h3">{cat.title}</h4>
                  </div>
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-submenu text-slate-600 leading-snug">
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
          
          <div className="mb-24">
            <SectionHeader title={caseStudies.title} centered={true} className="mb-16" />
            <div className="space-y-16">
              {caseStudies.cases.map((study, index) => (
                <div key={index} className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  
                  {/* Header (Clean White) */}
                  <div className="bg-white p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                    
                       <div>
                          <h3 className="text-h2 font-black text-slate-900">{study.title}</h3>
                          <p className="text-slate-500 text-submenu font-medium mt-1">{study.client}</p>
                       </div>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-h3 font-black text-red-500 mb-4 uppercase tracking-wider">
                          Challenge
                        </h4>
                        <ul className="space-y-2">
                          {study.challenge.items.map((item, i) => (
                            <li key={i} className="text-submenu text-slate-600 flex items-start gap-2">
                              <span className="text-red-400 mt-1">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-h3 font-black text-[#2776ea] mb-4 uppercase tracking-wider">
                          Solution
                        </h4>
                        <ul className="space-y-2">
                          {study.solution.items.map((item, i) => (
                            <li key={i} className="text-submenu text-slate-600 flex items-start gap-2">
                              <CheckCircle2 size={16} className="text-[#2776ea] mt-0.5 shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                      <h4 className="flex items-center gap-2 text-h3 font-black text-[#76ea27] mb-6 uppercase tracking-wider">
                        Results
                      </h4>
                      <ul className="space-y-3">
                        {study.results.items.map((item, i) => (
                          <li key={i} className="text-submenu font-bold text-slate-700 border-b border-slate-50 last:border-0 pb-2 last:pb-0">
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

          <div>
            <SectionHeader title={pricing.title} centered={true} className="mb-16" />
            <div className="grid md:grid-cols-2  gap-6">
              {pricing.categories.map((cat, index) => (
                <div key={index} className="bg-white rounded-[2rem] border border-slate-200 p-6 hover:border-[#2776ea] transition-colors shadow-sm hover:shadow-lg group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="p-2 rounded-lg bg-slate-50 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                      <cat.icon size={20} />
                    </div>
                    <h3 className="font-bold text-slate-900 leading-tight text-h3">{cat.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <p className="text-caption text-slate-500 uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="font-black text-[#2776ea] ">{item.price}</p>
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