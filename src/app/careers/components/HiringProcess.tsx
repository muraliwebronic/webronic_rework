"use client";

import { Clock, Check, ArrowDown, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function HiringProcess() {
  const { hiringProcess } = CAREERS_DATA;

  return (
    <section className="bg-white py-24 font-sora relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* --- HEADER --- */}
        <SectionHeader 
          badge={hiringProcess.header.badge}
          title={hiringProcess.header.title}
          description={hiringProcess.header.description}
          centered={true}
          className="max-w-3xl mx-auto mb-8"
        />

        {/* Timeline Badge (Content Preservation) */}
        <div className="flex justify-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2776ea]/5 border border-[#2776ea]/10 text-[#2776ea] text-xs font-bold uppercase tracking-wider">
                <Clock size={14} />
                <span>Total Time: {hiringProcess.totalTimeline}</span>
            </div>
        </div>

        {/* --- STACKING CONTAINER ( The Requested Design ) --- */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-24">
          
          {/* Vertical Guide Line (Visual Hint) */}
          <div className="absolute left-10 md:left-[88px] top-60 bottom-24 w-0.5 bg-slate-100 -z-10" />

          {hiringProcess.steps.map((step, index) => {
            // Dynamic Top Offset: Cards stick and stack with a small visible tab
            const stickyTop = `calc(120px + ${index * 15}px)`;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ top: stickyTop }}
                className="sticky group bg-white rounded-3xl border border-slate-200 p-1 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500"
              >
                
                <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-slate-50/50 rounded-[1.25rem] border border-slate-100/50 h-full">
                    
                    {/* --- LEFT: STEP INDICATOR --- */}
                    <div className="flex flex-row md:flex-col items-center gap-4 md:w-20 shrink-0">
                        {/* Number */}
                        <span className="text-4xl font-black text-slate-200 group-hover:text-[#2776ea]/20 transition-colors">
                            {step.step}
                        </span>
                        
                        {/* Icon Box */}
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-white shadow-sm transition-transform duration-500 group-hover:scale-110 bg-[#2776ea] text-white">
                            <step.icon size={24} strokeWidth={2} />
                        </div>
                    </div>

                    {/* --- RIGHT: CONTENT --- */}
                    <div className="flex-1 pt-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-black text-slate-900">{step.title}</h3>
                            
                            {/* Duration Badge */}
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-lg border border-slate-200 shadow-sm w-fit">
                                <Clock size={12} className="text-slate-400" />
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{step.duration}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm font-medium text-slate-500 mb-6 leading-relaxed">
                            {step.description}
                        </p>

                        {/* Details Grid */}
                        <ul className="grid sm:grid-cols-1 gap-3">
                            {/* Map standard details */}
                            {step.details?.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm group-hover:border-[#2776ea]/10 transition-colors">
                                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[#2776ea]/10 flex items-center justify-center shrink-0 text-[#2776ea]">
                                        <Check size={8} strokeWidth={4} />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}

                            {/* Map SubSections (Special case for Step 3) */}
                            {step.subSections?.map((sub, i) => (
                                <li key={`sub-${i}`} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                    <span className="block text-[10px] font-black uppercase text-slate-400 mb-2">{sub.heading}</span>
                                    <div className="space-y-2">
                                        {sub.items.map((item, j) => (
                                            <div key={j} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                                                <div className="w-1 h-1 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Arrow Hint (Hidden on last item) */}
                {index !== hiringProcess.steps.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-300 shadow-sm z-20">
                        <ArrowDown size={14} />
                    </div>
                )}

              </motion.div>
            );
          })}
        </div>

        {/* --- COMMITMENTS STRIP (Content Preservation) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-100">
            {hiringProcess.commitments.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4">
                    <div className="mb-4 p-3 rounded-2xl bg-[#76ea27]/10 text-[#6cd623]">
                        <item.icon size={20} strokeWidth={2} />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}