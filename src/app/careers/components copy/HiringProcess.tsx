"use client";

import { 
  Clock, 
  CheckCircle2, 
  ArrowDown,
  Eye
} from "lucide-react";
import { HIRING_PROCESS_DATA } from "../data/HIRING_PROCESS_DATA";

export default function HiringProcess() {
  const { header, steps, commitments, totalTimeline } = HIRING_PROCESS_DATA;

  return (
    <section className="bg-slate-50 py-24 md:py-32 font-sora relative overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2776ea] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              {header.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            {header.title}
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {header.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#2776ea]/10 text-[#2776ea] rounded-xl font-bold text-sm border border-[#2776ea]/20">
            <Clock size={18} />
            Total Timeline: {totalTimeline}
          </div>
        </div>

        {/* --- Timeline --- */}
        <div className="relative">
          {/* Vertical Line (Hidden on mobile, visible desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
          
          {/* Mobile Line (Left aligned) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-slate-100 shadow-md z-10 text-[#2776ea]">
                    <step.icon size={20} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2776ea]/20 transition-all duration-300 group">
                      
                      {/* Step Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-50">
                        <div>
                          <span className="text-xs font-black text-[#2776ea] uppercase tracking-widest mb-1 block">
                            {step.step}
                          </span>
                          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#2776ea] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <div className="px-3 py-1 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold border border-slate-100 flex items-center gap-2">
                          <Clock size={12} /> {step.duration}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm font-medium text-slate-500 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Standard Details */}
                      {step.details && (
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                              <CheckCircle2 size={16} className="shrink-0 text-[#76ea27] mt-0.5" />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Split Subsections (For Step 3) */}
                      {step.subSections && (
                        <div className="space-y-6 mt-4">
                          {step.subSections.map((sub, i) => (
                            <div key={i} className="bg-slate-50 p-5 rounded-2xl">
                              <h4 className="font-bold text-slate-900 text-sm mb-3">{sub.heading}</h4>
                              <ul className="space-y-2">
                                {sub.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Commitments Section --- */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-slate-900">Our Commitments</h3>
            <div className="h-1 w-16 bg-[#76ea27] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                <div className="h-12 w-12 mx-auto rounded-xl bg-[#2776ea]/10 text-[#2776ea] flex items-center justify-center mb-4">
                  <item.icon size={24} /> 
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}