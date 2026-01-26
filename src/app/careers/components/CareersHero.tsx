"use client";

import Link from "next/link";
import { ArrowRight, Search, Users, Activity } from "lucide-react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function CareersHero() {
  const { hero } = CAREERS_DATA;

  return (
    <section className="relative w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">
      
      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="max-w-2xl">
            
            {/* Header */}
            <SectionHeader 
                badge={hero.badge}
                title={hero.titleLines[0]}
                highlight={hero.titleLines[1]}
                description={hero.subHeadline}
                centered={false}
                size="default"
                className="mb-8"
            />

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {hero.ctas.map((cta, i) => (
                <Link 
                  key={i}
                  href={cta.href}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${
                    cta.primary 
                      ? "bg-[#2776ea] text-white hover:bg-[#1a5bbd] shadow-md" 
                      : "bg-slate-50 border border-slate-100 text-slate-600 hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea]"
                  }`}
                >
                  {cta.primary && <Search size={14} className="mr-2" />}
                  {cta.label}
                  {!cta.primary && <ArrowRight size={14} className="ml-2" />}
                </Link>
              ))}
            </div>

            {/* Stats Row (Compact) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-50">
               {hero.stats.map((stat, i) => (
                  <div key={i}>
                     <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                     <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">{stat.label}</p>
                  </div>
               ))}
            </div>
          </div>

          {/* --- RIGHT: VISUAL MODULE CARD --- */}
          <div className="relative hidden lg:flex justify-end items-center">
            
             {/* 1. Subtle Grid Background */}
             <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

             {/* 2. Main Card */}
             <div className="relative z-10 w-full max-w-[340px] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                
                {/* Top Status Bar */}
                <div className="bg-slate-50/50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                   <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                   </div>
                   <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Hiring Active</span>
                   </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6">
                   
                   {/* Icon & Identity */}
                   <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                         <Users size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Department</span>
                         <span className="text-sm font-bold text-slate-900 leading-tight block">Engineering & Product</span>
                      </div>
                   </div>

                   {/* Active Roles Stack (Hardcoded logic based on careers context) */}
                   <div className="space-y-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                        Priority Roles
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Full Stack Dev", "ML Engineer", "DevOps Lead", "Product Designer"].map((role, i) => (
                           <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                              {role}
                           </span>
                        ))}
                      </div>
                   </div>

                </div>

                {/* Bottom Highlight Line */}
                <div className="h-1 w-full bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
             </div>

             {/* Floating Badge (Accent) */}
             <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                <div className="bg-[#76ea27]/10 p-1.5 rounded-lg text-[#6cd623]">
                   <Activity size={16} />
                </div>
                <div>
                   <span className="block text-[9px] font-bold text-slate-400 uppercase">Growth</span>
                   <span className="block text-xs font-bold text-slate-900">200+ Innovators</span>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
}