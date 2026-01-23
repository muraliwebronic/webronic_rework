"use client";

import { ArrowRight, PlayCircle, Signal, Radio, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MEDIA_HERO_OVERVIEW_DATA } from "../data/MEDIA_HERO_OVERVIEW_DATA";
import Link from "next/link";

export default function MediaHeroOverview() {
  const { hero, overview } = MEDIA_HERO_OVERVIEW_DATA;

  return (
    <section className="font-sora bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* --- LEFT: TEXT CONTENT --- */}
            <div className="max-w-2xl">
              <SectionHeader 
                badge="Next-Gen Streaming"
                title="Media &"
                highlight="Entertainment"
                description={hero.description}
                centered={false}
                size="default"
                className="mb-8"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="#solutions" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2776ea] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  Transform Media
                </Link>
                <Link href="#case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95">
                  View Work <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* --- RIGHT: STREAMING UI CARD --- */}
            <div className="relative hidden lg:flex justify-end items-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
              
              <div className="relative z-10 w-full max-w-[340px] bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white">
                {/* Video Player Header */}
                <div className="bg-black/40 px-5 py-3 border-b border-white/10 flex justify-between items-center backdrop-blur-sm">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Live Stream</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Signal size={14} className="text-[#76ea27]" />
                     <span className="text-[10px] font-mono text-slate-400">4K HDR</span>
                  </div>
                </div>

                {/* Main Content (Waveform Visual) */}
                <div className="p-8 flex flex-col items-center justify-center relative min-h-[200px]">
                   <div className="absolute inset-0 bg-gradient-to-b from-[#2776ea]/10 to-transparent" />
                   {/* Animated Bars */}
                   <div className="h-20 w-full flex items-end justify-center gap-1 mb-6">
                      {[40, 70, 50, 90, 60, 80, 40, 60, 30].map((h, i) => (
                        <div key={i} className="w-2 bg-[#2776ea] rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                      ))}
                   </div>
                   <div className="h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md mb-2 cursor-pointer hover:bg-[#2776ea] hover:border-[#2776ea] transition-all">
                      <PlayCircle size={28} className="ml-1" />
                   </div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Processing Content</p>
                </div>

                {/* Stats Footer */}
                <div className="grid grid-cols-2 border-t border-white/10 bg-white/5">
                   <div className="p-4 border-r border-white/10 text-center">
                      <p className="text-xl font-black">99.9%</p>
                      <p className="text-[9px] text-slate-400 uppercase">Uptime</p>
                   </div>
                   <div className="p-4 text-center">
                      <p className="text-xl font-black text-[#76ea27]">&lt; 2s</p>
                      <p className="text-[9px] text-slate-400 uppercase">Latency</p>
                   </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                <div className="bg-[#2776ea]/10 p-2.5 rounded-xl text-[#2776ea]">
                  <Radio size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Audience</span>
                  <span className="block text-sm font-black text-slate-900">10M+ Users</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- INDUSTRY OVERVIEW --- */}
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
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {overview.challenges.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {overview.challenges.items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
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

          {/* Expertise (Primary Blue Card) */}
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-white">
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-black mb-6">
                  {overview.expertise.title}
                </h3>
                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                  {overview.expertise.description}
                </p>
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
    </section>
  );
}