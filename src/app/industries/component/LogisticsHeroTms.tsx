"use client";

import { ArrowRight, Truck, MapPin, Package, Navigation, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { LOGISTICS_HERO_TMS_DATA } from "../data/LOGISTICS_HERO_TMS_DATA";
import Link from "next/link";

export default function LogisticsHeroTms() {
  const { hero, overview, tms } = LOGISTICS_HERO_TMS_DATA;

  return (
    <section className="font-sora bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* --- LEFT: TEXT --- */}
            <div className="max-w-2xl">
              <SectionHeader 
                badge="Supply Chain Optimization"
                title="Logistics &"
                highlight="Smart TMS"
                description={hero.description}
                centered={false}
                size="default"
                className="mb-8"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="#solutions" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2776ea] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  Optimize Now
                </Link>
                <Link href="#case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95">
                  View Solutions <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* --- RIGHT: LOGISTICS UI CARD --- */}
            <div className="relative hidden lg:flex justify-end items-center">
              
              <div className="relative z-10 w-full max-w-[340px] bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgb(0,0,0,0.08)] overflow-hidden">
                {/* Map Header */}
                <div className="h-32 bg-slate-100 relative overflow-hidden">
                   {/* Abstract Map Pattern */}
                   <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle, #cbd5e1 1px, transparent 1px)] [background-size:10px_10px]"></div>
                   
                   {/* Route Line Simulation */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path d="M 40 80 Q 150 20 280 60" fill="none" stroke="#2776ea" strokeWidth="3" strokeDasharray="6 4" className="opacity-80" />
                   </svg>
                   
                   {/* Map Markers */}
                   <div className="absolute left-8 top-16 h-3 w-3 bg-slate-400 rounded-full ring-4 ring-white shadow-sm" />
                   <div className="absolute right-12 top-12 h-4 w-4 bg-[#2776ea] rounded-full ring-4 ring-white shadow-lg animate-pulse" />
                </div>

                {/* Tracking Details */}
                <div className="p-6">
                   <div className="flex items-start gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                         <Truck size={24} />
                      </div>
                      <div>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Shipment ID</span>
                         <p className="text-lg font-black text-slate-900 leading-none">#TRK-89204</p>
                      </div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                         <div className="flex items-center gap-3">
                            <Package size={16} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">Status</span>
                         </div>
                         <span className="text-xs font-bold text-[#76ea27] bg-[#76ea27]/10 px-2 py-1 rounded-md">In Transit</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                         <div className="flex items-center gap-3">
                            <Navigation size={16} className="text-slate-400" />
                            <span className="text-xs font-bold text-slate-700">ETA</span>
                         </div>
                         <span className="text-xs font-bold text-slate-900">2h 15m</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite]">
                <div className="bg-[#76ea27]/10 p-2.5 rounded-xl text-[#6cd623]">
                  <MapPin size={20} fill="currentColor" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Coverage</span>
                  <span className="block text-sm font-black text-slate-900">Global</span>
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
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">{overview.challenges.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {overview.challenges.items.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-black mb-6">{overview.expertise.title}</h3>
                <p className="text-lg text-blue-50 leading-relaxed mb-8">{overview.expertise.description}</p>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#2776ea] rounded-full font-bold text-sm shadow-lg">
                  {overview.expertise.resultsTitle}
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="space-y-4">
                  {overview.expertise.results.map((res, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                      <div className="p-2 rounded-full bg-white text-[#2776ea] shadow-sm shrink-0">
                        <res.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-white">{res.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TMS SOLUTIONS --- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader badge="Core Logistics" title={tms.title} centered={true} className="mb-20" />
          <div className="space-y-20">
            {/* Freight */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]"><tms.freightManagement.icon size={32} /></div>
                <h3 className="text-2xl font-black text-slate-900">{tms.freightManagement.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tms.freightManagement.sections.map((sec, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-[#2776ea]/30 transition-colors shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-1">{sec.title}</h4>
                    {sec.subTitle && <p className="text-xs text-[#2776ea] font-bold mb-3 uppercase tracking-wider">{sec.subTitle}</p>}
                    <ul className="space-y-2 mt-4">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Analytics */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]"><tms.analytics.icon size={32} /></div>
                <h3 className="text-2xl font-black text-slate-900">{tms.analytics.title}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {tms.analytics.sections.map((sec, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-[#2776ea]/30 transition-colors shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
}