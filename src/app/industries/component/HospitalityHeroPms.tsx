"use client";

import { CheckCircle2, ArrowRight,Smartphone,TrendingUp } from "lucide-react";
import { HOSPITALITY_HERO_PMS_DATA } from "../data/HOSPITALITY_HERO_PMS_DATA";

export default function HospitalityHeroPms() {
  const { hero, overview, pms } = HOSPITALITY_HERO_PMS_DATA;

  return (
    <section className="font-sora bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32">
       
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#76ea27] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
                Smart Hotel Operations
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              {hero.h1}
            </h1>

            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-4xl">
              {hero.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
              {hero.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-[#2776ea]/20 transition-all duration-300 group text-center"
                >
                  <div className="mb-4 inline-flex p-3 rounded-2xl bg-[#2776ea]/5 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-3xl font-black text-slate-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- INDUSTRY OVERVIEW --- */}
      <div className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
                {overview.title}
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] rounded-full" />
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {overview.content} 

[Image of digital transformation in hospitality industry]

              </p>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              Critical Hospitality Challenges
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {overview.challenges.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#76ea27]/10 text-[#2776ea]">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl font-black text-slate-900 mb-6">
                  {overview.expertise.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {overview.expertise.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {overview.expertise.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="p-2 rounded-full bg-[#2776ea] text-white shadow-sm shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PMS CORE SOLUTIONS --- */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              Core Hospitality Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {pms.title}
            </h2>
            <p className="text-xl text-slate-600 font-bold">
              {pms.subTitle}
            </p>
          </div>

          <div className="space-y-24">
            
            {/* 1. FRONT OFFICE */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                  <pms.frontOffice.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {pms.frontOffice.title} 
                  </h3>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {pms.frontOffice.columns.map((col, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                    <h4 className="font-bold text-lg text-slate-900 mb-6">{col.title}</h4>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. HOUSEKEEPING */}
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#76ea27]/10 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-2xl bg-[#76ea27]/20 text-[#76ea27]">
                    <pms.housekeeping.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black">
                    {pms.housekeeping.title} 
                  </h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                  {/* Status Mgmt */}
                  <div>
                    <h4 className="font-bold text-[#76ea27] mb-6 uppercase tracking-wider text-sm">
                      {pms.housekeeping.statusMgmt.title}
                    </h4>
                    <ul className="space-y-3">
                      {pms.housekeeping.statusMgmt.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile App */}
                  <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                      {pms.housekeeping.mobileApp.title}
                    </h4>
                    <ul className="space-y-3">
                      {pms.housekeeping.mobileApp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                          <Smartphone size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Efficiency Gains (Highlighted) */}
                  <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                      <TrendingUp size={16} /> {pms.housekeeping.efficiency.title}
                    </h4>
                    <ul className="space-y-4">
                      {pms.housekeeping.efficiency.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white">
                          <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. POS & BACK OFFICE GRID */}
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* POS */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                    <pms.pos.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {pms.pos.title} 
                  </h3>
                </div>
                <div className="space-y-8">
                  {pms.pos.sections.map((sec, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-2 mb-4">
                        <sec.icon className="text-[#2776ea]" size={18} />
                        <h4 className="font-bold text-slate-900">{sec.title}</h4>
                      </div>
                      <ul className="space-y-2 pl-7 border-l-2 border-[#2776ea]/20">
                        {sec.items.map((item, i) => (
                          <li key={i} className="text-sm text-slate-600 font-medium">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back Office */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
                    <pms.backOffice.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {pms.backOffice.title} 
                  </h3>
                </div>
                <div className="space-y-8">
                  {pms.backOffice.sections.map((sec, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-slate-900 mb-4">{sec.title}</h4>
                      <ul className="space-y-2">
                        {sec.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Platforms */}
            <div className="text-center">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mb-4">PMS Platforms</span>
              <div className="flex flex-wrap justify-center gap-3">
                {pms.platforms.map((plat, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 shadow-sm hover:border-[#2776ea] transition-colors">
                    {plat}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}