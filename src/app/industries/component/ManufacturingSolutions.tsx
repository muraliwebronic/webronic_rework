"use client";

import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { MANUFACTURING_SOLUTIONS_DATA } from "../data/MANUFACTURING_SOLUTIONS_DATA";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

export default function ManufacturingSolutions() {
  const { mainTitle, section1 } = MANUFACTURING_SOLUTIONS_DATA;

  // Assign the icon for the intro decoration
  const DecoIcon = section1.sensorDeployment.categories[0].icon;

  return (
    <section className="py-20 lg:py-28 font-sora bg-white relative overflow-hidden" id="solutions">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- Main Section Header --- */}
        <div className="mb-16 lg:mb-20">
          <SectionHeader 
            title={mainTitle}
            centered={true}
          />
        </div>

        {/* --- Section 1: Industry 4.0 --- */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* 1. Intro Block (Two-Column Pedestal) */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
             <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-[#2776ea] font-bold uppercase tracking-[0.2em] text-[9px] mb-4">
                  <span className="h-[1.5px] w-8 bg-[#2776ea]" />
                  Section 01
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                  {section1.title}
                </h3>
             </div>

             <div className="lg:col-span-7">
                <div className="group relative bg-slate-50/50 rounded-[2rem] p-8 lg:p-10 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5">
                  {/* Watermark Icon */}
                  <div className="absolute top-4 right-4 text-[#2776ea] opacity-[0.04] group-hover:opacity-[0.06] transition-opacity duration-500">
                    <DecoIcon size={100} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-[#2776ea] mb-3 flex items-center gap-2">
                      <MoveRight size={18} />
                      {section1.intro.title}
                    </h4>
                    <p className="text-base text-slate-500 font-medium leading-relaxed">
                      {section1.intro.description}
                    </p>
                  </div>
                </div>
             </div>
          </div>

          {/* 2. Technical Architecture Grid */}
          <div className="relative">
            <div className="flex flex-col items-center text-center mb-12">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">
                 Technical Architecture
               </span>
               <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                 {section1.sensorDeployment.title}
               </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {section1.sensorDeployment.categories.map((cat, index) => {
                const isBlue = cat.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const accentBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                const borderHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";
                const bulletColor = isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]";
                
                const CatIcon = cat.icon;

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm transition-all duration-500 ${borderHover} flex flex-col h-full hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-200/50`}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className={`h-12 w-12 rounded-xl ${accentBg} flex items-center justify-center ${accentColor} shrink-0 shadow-sm group-hover:scale-110 transition-all duration-500`}>
                        <CatIcon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#2776ea] transition-all">
                        <ArrowRight size={14} className="-rotate-45" />
                      </div>
                    </div>

                    <h5 className="text-lg font-bold text-slate-900 mb-6 tracking-tight">
                      {cat.title}
                    </h5>

                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full ${bulletColor} shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity`} />
                          <span className="text-xs font-bold text-slate-600 leading-relaxed group-hover/item:text-slate-900 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Subtle bottom accent line */}
                    <div className={`absolute bottom-0 left-8 right-8 h-[2px] rounded-t-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${bulletColor}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}