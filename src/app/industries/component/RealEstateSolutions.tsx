"use client";

import { ArrowRight, Building2, Home, Wifi, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { REAL_ESTATE_DATA } from "../data/REAL_ESTATE_DATA";
import Link from "next/link";

export default function RealEstateSolutions() {
  const { hero, overview, propertyMgmt, bim } = REAL_ESTATE_DATA;

  return (
    <section className="font-sora">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* --- LEFT: TEXT --- */}
            <div className="max-w-2xl">
              <SectionHeader
                badge="PropTech Solutions"
                title="Real Estate &"
                highlight="Smart Buildings"
                description={hero.description}
                centered={false}
                size="default"
                className="mb-8"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="#solutions" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2776ea] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  View Properties
                </Link>
                <Link href="#case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* --- RIGHT: PROPTECH UI CARD --- */}
            <div className="relative hidden lg:flex justify-end items-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
              
              <div className="relative z-10 w-full max-w-[340px] bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgb(0,0,0,0.06)] overflow-hidden">
                {/* Image Header */}
                <div className="h-40 bg-slate-200 relative">
                   {/* Placeholder for building image - using a gradient for now */}
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" />
                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Occupancy: 92%</span>
                   </div>
                </div>

                <div className="p-6">
                   <div className="flex justify-between items-start mb-6">
                      <div>
                         <h3 className="text-lg font-black text-slate-900">Skyline Tower A</h3>
                         <p className="text-xs text-slate-500 font-medium">Downtown Business District</p>
                      </div>
                      <div className="h-10 w-10 rounded-xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                         <Building2 size={20} />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                         <Wifi size={16} className="text-[#2776ea] mb-1" />
                         <span className="text-[10px] font-bold text-slate-600">Smart Grid</span>
                         <span className="text-[10px] text-[#76ea27] font-bold">Active</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                         <ShieldCheck size={16} className="text-[#2776ea] mb-1" />
                         <span className="text-[10px] font-bold text-slate-600">Security</span>
                         <span className="text-[10px] text-[#76ea27] font-bold">Monitored</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 animate-[float_6s_ease-in-out_infinite]">
                <div className="bg-[#2776ea]/10 p-2.5 rounded-xl text-[#2776ea]">
                  <Home size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Listings</span>
                  <span className="block text-sm font-black text-slate-900">500+ Units</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- INDUSTRY OVERVIEW --- */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-black text-slate-900 mb-6">{overview.title}</h2>
              <div className="h-1.5 w-20 bg-[#2776ea] rounded-full mb-8" />
              <p className="text-lg text-slate-600 leading-relaxed">
                {overview.content}
              </p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
              {overview.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-[#2776ea] transition-colors shadow-sm">
                  <div className="shrink-0 p-3 bg-[#2776ea]/5 rounded-xl text-[#2776ea] h-fit">
                    <challenge.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{challenge.title}</h3>
                    <p className="text-sm text-slate-600">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-[#2776ea] rounded-[3rem] p-10 md:p-12 text-white shadow-xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 text-center">{overview.expertise.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overview.expertise.stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                    <CheckCircle2 className="shrink-0 text-[#76ea27] mt-1" />
                    <span className="text-sm font-bold leading-relaxed">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PROPERTY MANAGEMENT --- */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            title={propertyMgmt.title}
            highlight={propertyMgmt.subTitle}
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {propertyMgmt.modules.map((mod, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <mod.icon size={28} />
                  </div>
                  <h4 className="font-bold text-slate-900">{mod.title}</h4>
                </div>
                <ul className="space-y-3">
                  {mod.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 text-center">
            <h4 className="font-bold text-slate-900 mb-6">Supported Platforms</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {propertyMgmt.platforms.map((plat, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-slate-600 border border-slate-200 shadow-sm">
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- BIM & CONSTRUCTION (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={bim.title} centered={true} className="mb-20" />

          {/* BIM Core */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-10 rounded-[3rem] text-slate-900 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">{bim.bimSection.title}</h3>
              <p className="text-slate-500 mb-8">{bim.bimSection.description}</p>
              
              <div className="mb-8">
                <h4 className="text-[#2776ea] font-bold text-sm uppercase tracking-wider mb-4">
                  BIM Components 
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {bim.bimSection.components.map((comp, i) => (
                    <li key={i} className="flex flex-col bg-slate-50 p-4 rounded-2xl">
                      <span className="font-bold text-slate-900">{comp.name}</span>
                      <span className="text-xs text-slate-500">{comp.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#2776ea] font-bold text-sm uppercase tracking-wider mb-4">
                  Software & Levels
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {bim.bimSection.software.map((sw, i) => (
                    <span key={i} className="px-3 py-1 bg-[#2776ea]/10 text-[#2776ea] rounded-lg text-xs font-bold">
                      {sw}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {bim.bimSection.levels.map((lvl, i) => (
                    <li key={i} className="text-sm text-slate-500">• {lvl}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Clash Detection */}
              <div className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-md">
                <h3 className="text-xl font-bold mb-2">{bim.clashDetection.title}</h3>
                <p className="text-[#76ea27] text-sm font-bold uppercase tracking-wider mb-4">{bim.clashDetection.subTitle}</p>
                <p className="text-blue-50 text-sm mb-6">
                  {bim.clashDetection.description} 
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Methods</h5>
                    <ul className="space-y-2">
                      {bim.clashDetection.methods.map((m, i) => (
                        <li key={i} className="text-xs text-blue-100 border-l border-white/30 pl-3">{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Benefits</h5>
                    <ul className="space-y-2">
                      {bim.clashDetection.benefits.map((b, i) => (
                        <li key={i} className="text-xs text-blue-100 border-l border-[#76ea27] pl-3">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4D/5D */}
              <div className="grid sm:grid-cols-2 gap-6">
                {bim.dimensions.map((dim, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 p-6 rounded-3xl">
                    <h4 className="font-bold text-white mb-2">{dim.title}</h4>
                    <p className="text-xs text-blue-200 mb-4">{dim.desc}</p>
                    <ul className="space-y-2">
                      {dim.items.map((item, j) => (
                        <li key={j} className="text-xs text-blue-50">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Construction Project Management */}
          <div className="bg-white text-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl">
            <h3 className="text-2xl font-black mb-10 text-center">{bim.projectMgmt.title}</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {bim.projectMgmt.categories.map((cat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                      <cat.icon size={24} />
                    </div>
                    <h4 className="font-bold text-lg">{cat.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center border-t border-slate-100 pt-8">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mb-4">Platforms</span>
              <div className="flex flex-wrap justify-center gap-3">
                {bim.projectMgmt.platforms.map((plat, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-700 hover:bg-[#2776ea] hover:text-white transition-colors">
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