"use client";

import { ArrowUpRight, Cpu, CheckCircle2, Quote } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/service/data/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalCaseStudies({ data }: { data: ServicePageData['caseStudies'] }) {
  if (!data) return null;

  return (
    <section className="bg-white py-20 md:py-32 font-sora relative overflow-hidden">
      {/* Container with responsive horizontal padding */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <SectionHeader 
          badge="Proven Impact"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-16 lg:mb-24"
        />

        {/* RESPONSIVE GRID: 1 Col (Mobile) -> 2 Cols (Tablet) -> 3 Cols (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((study, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:-translate-y-2 transition-transform duration-500 h-full"
            >
              
              {/* Top Content Section */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                
                {/* Header: Icon + Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-slate-50 ${study.color}`}>
                      <DynamicIcon name={study.icon} size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {study.category}
                    </span>
                  </div>
                  <div className="p-2 rounded-full hover:bg-slate-50 transition-colors">
                    <ArrowUpRight className="text-slate-300 group-hover:text-[#2776ea] transition-colors" size={20} />
                  </div>
                </div>

                {/* Client Info */}
                <div className="mb-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Client</p>
                    <p className="text-xs font-bold text-slate-700">{study.client}</p>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight min-h-[3.5rem]">
                  {study.title}
                </h3>

                {/* Implementation Badge Area */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mt-auto">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                    <Cpu size={12} /> Implementation
                  </p>
                  <ul className="grid gap-2.5">
                    {study.implementation.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] font-bold text-slate-600 leading-snug">
                        <CheckCircle2 size={12} className="text-[#76ea27] shrink-0 mt-0.5" /> 
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Results Section (Light Theme) */}
              <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-100 relative overflow-hidden">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6 border-b border-slate-200 pb-6">
                  {study.results.map((res, i) => (
                    <div key={i}>
                      <p className="text-lg md:text-xl font-black text-slate-900 mb-1">
                        {res.value}
                      </p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-tight">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative z-10">
                  <Quote size={16} className="text-slate-300 mb-2" />
                  <p className="text-xs font-medium text-slate-600 italic mb-4 leading-relaxed line-clamp-3">
                    "{study.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-4 bg-[#2776ea]" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">
                      {study.author}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}