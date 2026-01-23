"use client";

import { Factory } from "lucide-react";
import { MANUFACTURING_OVERVIEW_DATA } from "../data/MANUFACTURING_OVERVIEW_DATA";

export default function ManufacturingOverview() {
  const { overview, challenges, expertise } = MANUFACTURING_OVERVIEW_DATA;

  return (
    <section className="bg-white font-sora overflow-hidden">
      
      {/* --- Part 1: Industry Overview --- */}
      <div className="py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2776ea]/10 border border-[#2776ea]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2776ea] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2776ea]">
                  Context
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                {overview.title}
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mt-6 rounded-full" />
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              {overview.paragraphs.map((para, index) => (
                <p key={index} className="text-lg text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Part 2: Critical Challenges --- */}
      <div className="py-24 bg-slate-50 border-y border-slate-100 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6">
              {challenges.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.items.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-50 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors duration-300">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Part 3: Our Expertise & Stats --- */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            
            {/* Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#76ea27]/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                  <Factory size={14} className="text-[#76ea27]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Proven Track Record
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  {expertise.title}
                </h2>
                <p className="text-blue-50 text-lg leading-relaxed mb-8 opacity-90">
                  {expertise.description}
                </p>
                <div className="h-px w-full bg-white/20 mb-8" />
                <p className="font-bold text-lg mb-4">
                  {expertise.resultsTitle}
                </p>
              </div>

              {/* Right Stats Grid */}
              <div className="grid gap-4">
                {expertise.results.map((res, index) => (
                  <div key={index} className="flex items-center gap-5 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-white text-[#2776ea] flex items-center justify-center font-black">
                      <res.icon size={20} />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-white leading-none mb-1">
                        {res.value}
                      </p>
                      <p className="text-xs text-blue-100 font-medium leading-snug">
                        {res.text}
                      </p>
                    </div>
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