"use client";

import { 
  ArrowRight, 
  Factory, 
  Zap, 
  Settings, 
  Cpu, 
  Activity 
} from "lucide-react";
import { MANUFACTURING_HERO_DATA } from "../data/MANUFACTURING_HERO_DATA";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";

export default function ManufacturingHero() {
  const { h1, description } = MANUFACTURING_HERO_DATA;

  return (
    <section className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28 font-sora overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="max-w-2xl">
            <SectionHeader
              badge="Industry 4.0"
              title="Manufacturing &"
              highlight="Industrial IT"
              description={description}
              centered={false}
              size="default"
              className="mb-8"
            />

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2776ea] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-lg shadow-blue-500/20 active:scale-95"
              >
                Explore Solutions
              </Link>
              <Link
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95"
              >
                Case Studies <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* --- RIGHT: MANUFACTURING UI CARD --- */}
          <div className="relative hidden lg:flex justify-end items-center">
            
            {/* 1. Technical Grid Background */}

            {/* 2. Main Module Card */}
            <div className="relative z-10 w-full max-w-[340px] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              
              {/* Top Status Bar */}
              <div className="bg-slate-50/80 backdrop-blur-sm px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                    Production Live
                  </span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-7">
                {/* Icon & Identity */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                    <Factory size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      System Module
                    </span>
                    <span className="text-lg font-black text-slate-900 leading-none block">
                      Smart Plant 4.0
                    </span>
                  </div>
                </div>

                {/* Live Metrics Simulation */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>OEE Efficiency</span>
                    <span className="text-slate-900">98.5%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#2776ea] to-[#76ea27] w-[98.5%] rounded-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <Cpu size={16} className="text-slate-400 mb-2" />
                      <div className="text-[10px] font-bold text-slate-400 uppercase">IoT Nodes</div>
                      <div className="font-bold text-slate-700">Active</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <Settings size={16} className="text-slate-400 mb-2" />
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Maintenance</div>
                      <div className="font-bold text-emerald-600">Optimal</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decoration */}
            </div>

            {/* Floating Badge (Animation) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite]">
              <div className="bg-[#76ea27]/10 p-2.5 rounded-xl text-[#6cd623]">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Energy Saved
                </span>
                <span className="block text-sm font-black text-slate-900">
                  +45% / Year
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}