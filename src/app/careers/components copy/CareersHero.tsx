"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles,
  Search
} from "lucide-react";
import { CAREERS_HERO_DATA } from "../data/CAREERS_HERO_DATA";
// Adjust the import path based on where you saved the data file
CAREERS_HERO_DATA
export default function CareersHero() {
  const { header, ctas, stats } = CAREERS_HERO_DATA;

  return (
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32 font-sora overflow-hidden">
      
      {/* --- Background Ambient Effects --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Blue Orb */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2776ea]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        {/* Green Orb */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#76ea27]/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Main Content Grid --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-lg shadow-slate-200/50 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={16} className="text-[#76ea27]" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-500">
              {header.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            Shape the Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2776ea] to-[#76ea27]">
              Technology
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            {header.subHeadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link 
              href={ctas.primary.href}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#2776ea] text-white font-bold shadow-xl shadow-blue-900/10 hover:bg-[#1f65c9] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Search size={18} />
              {ctas.primary.label}
            </Link>
            
            <Link 
              href={ctas.secondary.href}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:border-[#76ea27] hover:text-[#2776ea] transition-all duration-300"
            >
              {ctas.secondary.label}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* --- Stats Bar (Glassmorphic Card) --- */}
        <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-100/0 md:divide-x md:divide-slate-200">
              
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="mb-4 p-3 rounded-2xl bg-[#2776ea]/5 text-[#2776ea] group-hover:bg-[#76ea27]/10 group-hover:text-[#76ea27] transition-colors duration-300">
                    <stat.icon size={24} />
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
          
          {/* Decorative Elements behind stats */}
          <div className="absolute -z-10 top-1/2 left-10 w-24 h-24 bg-[#76ea27]/20 rounded-full blur-2xl" />
          <div className="absolute -z-10 top-1/2 right-10 w-32 h-32 bg-[#2776ea]/20 rounded-full blur-2xl" />
        </div>

      </div>
    </section>
  );
}