"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
// Using the requested relative path
import { LOGISTICS_HERO_TMS_DATA } from "../data/LOGISTICS_HERO_TMS_DATA";

export default function LogisticsHeroTms() {
  const { hero, overview, tms } = LOGISTICS_HERO_TMS_DATA;

  return (
    <section className="font-sora bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#76ea27] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
                Supply Chain Optimization
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              {hero.h1}
            </h1>

            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-4xl">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2776ea] text-white font-bold shadow-xl shadow-blue-900/10 hover:bg-[#1a65d8] hover:-translate-y-1 transition-all">
                Optimize Logistics
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-[#76ea27] hover:text-[#2776ea] hover:-translate-y-1 transition-all">
                View Solutions <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {hero.stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-[#2776ea]/20 transition-all duration-300 group text-center ${index === 4 ? "col-span-2 lg:col-span-1" : "col-span-1"}`}
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-[#2776ea]/5 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                  <stat.icon size={24} />
                </div>
                <p className="text-2xl font-black text-slate-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
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
              </p>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {overview.challenges.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {overview.challenges.items.map((item, index) => (
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
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-black mb-6">
                  {overview.expertise.title}
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  {overview.expertise.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full font-bold text-sm">
                  {overview.expertise.resultsTitle}
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="space-y-4">
                  {overview.expertise.results.map((res, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">
                      <div className="p-2 rounded-full bg-white text-[#2776ea] shadow-sm shrink-0">
                        <res.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-white">
                        {res.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TMS CORE SOLUTIONS --- */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              Core Logistics Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {tms.title}
            </h2>
          </div>

          <div className="space-y-20">
            
            {/* 1. Freight Management */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                  <tms.freightManagement.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {tms.freightManagement.title}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tms.freightManagement.sections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                    <h4 className="font-bold text-slate-900 mb-1">{sec.title}</h4>
                    {sec.subTitle && <p className="text-xs text-[#2776ea] font-bold mb-3 uppercase tracking-wider">{sec.subTitle}</p>}
                    {!sec.subTitle && <div className="mb-3" />}
                    <ul className="space-y-2">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Order Management */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
                  <tms.orderManagement.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {tms.orderManagement.title}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {tms.orderManagement.sections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#76ea27]/30 transition-colors">
                    <h4 className="font-bold text-slate-900 mb-4">{sec.title}</h4>
                    <ul className="space-y-2">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 size={12} className="text-[#76ea27] mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tracking & Visibility */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-slate-900 text-white">
                  <tms.tracking.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {tms.tracking.title}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {tms.tracking.sections.map((sec, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-[#2776ea] transition-colors shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">{sec.title}</h4>
                    <ul className="space-y-2">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Analytics */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                  <tms.analytics.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {tms.analytics.title}
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {tms.analytics.sections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                    <h4 className="font-bold text-slate-900 mb-4">{sec.title}</h4>
                    <ul className="space-y-2">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 size={12} className="text-[#2776ea] mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <tms.platforms.icon className="text-[#76ea27]" />
                <h3 className="text-xl font-bold">{tms.platforms.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {tms.platforms.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors">
                    {item}
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