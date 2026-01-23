"use client";

import { ArrowRight, Bell, CalendarCheck, Utensils, Star, Smartphone, TrendingUp, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { HOSPITALITY_HERO_PMS_DATA } from "../data/HOSPITALITY_HERO_PMS_DATA";
import Link from "next/link";

export default function HospitalityHeroPms() {
  const { hero, overview, pms } = HOSPITALITY_HERO_PMS_DATA;

  return (
    <section className="font-sora bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* --- LEFT: TEXT --- */}
            <div className="max-w-2xl">
              <SectionHeader
                badge="Smart Hospitality"
                title="Hotel &"
                highlight="Guest Experience"
                description={hero.description}
                centered={false}
                size="default"
                className="mb-8"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="#solutions" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2776ea] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  Elevate Service
                </Link>
                <Link href="#case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95">
                  Case Studies <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* --- RIGHT: HOSPITALITY UI CARD --- */}
            <div className="relative hidden lg:flex justify-end items-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
              
              <div className="relative z-10 w-full max-w-[340px] bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgb(0,0,0,0.06)] overflow-hidden">
                {/* Guest App Header */}
                <div className="bg-[#2776ea] p-6 text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                   <div className="flex justify-between items-start relative z-10">
                      <div>
                         <p className="text-xs font-bold text-blue-100 uppercase tracking-wide mb-1">Welcome Back</p>
                         <h3 className="text-xl font-black">Alex Morgan</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                         <Bell size={18} />
                      </div>
                   </div>
                </div>

                {/* Quick Actions */}
                <div className="p-6">
                   <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                         <CalendarCheck size={20} className="text-[#2776ea]" />
                         <span className="text-xs font-bold text-slate-600">Check-In</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                         <Utensils size={20} className="text-[#2776ea]" />
                         <span className="text-xs font-bold text-slate-600">Dining</span>
                      </div>
                   </div>

                   <div className="bg-slate-900 rounded-2xl p-4 flex items-center justify-between text-white">
                      <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Room Key</p>
                         <p className="text-sm font-bold">Room 402</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#76ea27] flex items-center justify-center text-slate-900">
                         <ArrowRight size={14} className="-rotate-45" />
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                <div className="bg-[#76ea27]/10 p-2.5 rounded-xl text-[#6cd623]">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rating</span>
                  <span className="block text-sm font-black text-slate-900">4.9/5.0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- OVERVIEW --- */}
      <div className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <div className="lg:w-1/3">
              <SectionHeader title={overview.title} centered={false} />
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {overview.content} 
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">Critical Hospitality Challenges</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {overview.challenges.map((item, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h3 className="text-3xl font-black mb-6">{overview.expertise.title}</h3>
                <p className="text-lg text-blue-50 leading-relaxed">{overview.expertise.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {overview.expertise.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-md">
                    <div className="p-2 rounded-full bg-white text-[#2776ea] shadow-sm shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-sm font-bold text-white">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PMS CORE SOLUTIONS --- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader badge="Core Hospitality Solutions" title={pms.title} highlight={pms.subTitle} centered={true} className="mb-20" />

          <div className="space-y-24">
            
            {/* 1. FRONT OFFICE */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-200">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                  <pms.frontOffice.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{pms.frontOffice.title}</h3>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {pms.frontOffice.columns.map((col, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-[#2776ea]/30 transition-colors shadow-sm">
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

            {/* 2. HOUSEKEEPING (Primary Blue) */}
            <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 rounded-2xl bg-white text-[#2776ea]">
                    <pms.housekeeping.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black">{pms.housekeeping.title}</h3>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                  <div>
                    <h4 className="font-bold text-[#76ea27] mb-6 uppercase tracking-wider text-sm">{pms.housekeeping.statusMgmt.title}</h4>
                    <ul className="space-y-3">
                      {pms.housekeeping.statusMgmt.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-blue-50 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{pms.housekeeping.mobileApp.title}</h4>
                    <ul className="space-y-3">
                      {pms.housekeeping.mobileApp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-blue-50 font-medium">
                          <Smartphone size={16} className="text-white shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md">
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

            {/* 3. POS & BACK OFFICE */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]"><pms.pos.icon size={28} /></div>
                  <h3 className="text-2xl font-black text-slate-900">{pms.pos.title}</h3>
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

              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]"><pms.backOffice.icon size={28} /></div>
                  <h3 className="text-2xl font-black text-slate-900">{pms.backOffice.title}</h3>
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