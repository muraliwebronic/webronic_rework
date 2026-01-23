"use client";

import { ArrowRight } from "lucide-react";
// Using the requested relative path
import { MEDIA_HERO_OVERVIEW_DATA } from "../data/MEDIA_HERO_OVERVIEW_DATA";

export default function MediaHeroOverview() {
  const { hero, overview } = MEDIA_HERO_OVERVIEW_DATA;

  return (
    <section className="font-sora bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        
        {/* Ambient Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#76ea27] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
                Next-Gen Streaming
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              Media & Entertainment <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2776ea] via-[#4d9e5f] to-[#76ea27]">
                Technology Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-4xl">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2776ea] text-white font-bold shadow-xl shadow-blue-900/10 hover:bg-[#1a65d8] hover:-translate-y-1 transition-all">
                Transform Media
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:border-[#76ea27] hover:text-[#2776ea] hover:-translate-y-1 transition-all">
                Explore Solutions <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* --- INDUSTRY OVERVIEW SECTION --- */}
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

          {/* Challenges Grid */}
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

          {/* Expertise Section */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-black text-slate-900 mb-6">
                  {overview.expertise.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {overview.expertise.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2776ea]/10 text-[#2776ea] rounded-full font-bold text-sm">
                  {overview.expertise.resultsTitle}
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="space-y-4">
                  {overview.expertise.results.map((res, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                      <div className="p-2 rounded-full bg-white text-[#76ea27] shadow-sm shrink-0">
                        <res.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">
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
    </section>
  );
}