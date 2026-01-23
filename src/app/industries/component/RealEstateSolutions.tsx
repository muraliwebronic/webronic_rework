"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
// Using the requested relative path
import { REAL_ESTATE_DATA } from "../data/REAL_ESTATE_DATA";

export default function RealEstateSolutions() {
  const { hero, overview, propertyMgmt, bim } = REAL_ESTATE_DATA;

  return (
    <section className="font-sora">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 overflow-hidden">
       
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              {hero.h1}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
              {hero.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hero.stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-2xl font-black text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- INDUSTRY OVERVIEW --- */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-black text-slate-900 mb-6">{overview.title}</h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] rounded-full mb-8" />
              <p className="text-lg text-slate-600 leading-relaxed">
                {overview.content} 
              </p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
              {overview.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                  <div className="shrink-0 p-3 bg-white rounded-xl shadow-sm text-[#76ea27] h-fit">
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

          <div className="mt-20 bg-[#2776ea] rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 text-center">{overview.expertise.title}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overview.expertise.stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-xl border border-white/10">
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
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              {propertyMgmt.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm">
              {propertyMgmt.subTitle}
            </p>
          </div>

          <div className="mb-12 text-center">
            

[Image of property management software dashboard]

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {propertyMgmt.modules.map((mod, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <mod.icon size={28} />
                  </div>
                  <h4 className="font-bold text-slate-900">{mod.title}</h4>
                </div>
                <ul className="space-y-3">
                  {mod.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 text-center">
            <h4 className="font-bold text-slate-900 mb-6">Supported Platforms</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {propertyMgmt.platforms.map((plat, i) => (
                <span key={i} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-bold text-slate-600 border border-slate-100">
                  {plat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- BIM & CONSTRUCTION (Dark Mode) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {bim.title}
            </h2>
          </div>

          {/* BIM Core */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">{bim.bimSection.title}</h3>
              <p className="text-slate-400 mb-8">{bim.bimSection.description}</p>
              
              <div className="mb-8">
                <h4 className="text-[#76ea27] font-bold text-sm uppercase tracking-wider mb-4">
                  BIM Components 
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {bim.bimSection.components.map((comp, i) => (
                    <li key={i} className="flex flex-col bg-white/5 p-4 rounded-xl">
                      <span className="font-bold text-white">{comp.name}</span>
                      <span className="text-xs text-slate-400">{comp.detail}</span>
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
                    <span key={i} className="px-3 py-1 bg-[#2776ea]/20 text-[#2776ea] rounded text-xs font-bold border border-[#2776ea]/30">
                      {sw}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {bim.bimSection.levels.map((lvl, i) => (
                    <li key={i} className="text-sm text-slate-300">• {lvl}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Clash Detection */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
                <h3 className="text-xl font-bold mb-2">{bim.clashDetection.title}</h3>
                <p className="text-[#76ea27] text-sm font-bold uppercase tracking-wider mb-4">{bim.clashDetection.subTitle}</p>
                <p className="text-slate-400 text-sm mb-6">
                  {bim.clashDetection.description} 
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Methods</h5>
                    <ul className="space-y-2">
                      {bim.clashDetection.methods.map((m, i) => (
                        <li key={i} className="text-xs text-slate-400 border-l border-slate-700 pl-3">{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Benefits</h5>
                    <ul className="space-y-2">
                      {bim.clashDetection.benefits.map((b, i) => (
                        <li key={i} className="text-xs text-slate-400 border-l border-[#76ea27] pl-3">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4D/5D */}
              <div className="grid sm:grid-cols-2 gap-6">
                {bim.dimensions.map((dim, i) => (
                  <div key={i} className="bg-[#2776ea]/10 border border-[#2776ea]/20 p-6 rounded-2xl">
                    <h4 className="font-bold text-white mb-2">{dim.title}</h4>
                    {i === 0 && <span className="text-xs text-slate-400 block mb-2"></span>}
                    <p className="text-xs text-blue-200 mb-4">{dim.desc}</p>
                    <ul className="space-y-2">
                      {dim.items.map((item, j) => (
                        <li key={j} className="text-xs text-slate-300">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Construction Project Management */}
          <div className="bg-white text-slate-900 rounded-[3rem] p-10 md:p-16">
            <h3 className="text-2xl font-black mb-10 text-center">{bim.projectMgmt.title}</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {bim.projectMgmt.categories.map((cat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-[#2776ea]/10 text-[#2776ea]">
                      <cat.icon size={24} />
                    </div>
                    <h4 className="font-bold text-lg">{cat.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
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
                  <span key={i} className="px-4 py-2 bg-slate-50 rounded-full text-sm font-bold text-slate-700 hover:bg-[#76ea27]/20 transition-colors">
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