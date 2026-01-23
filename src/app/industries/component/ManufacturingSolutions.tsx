"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { MANUFACTURING_SOLUTIONS_DATA } from "../data/MANUFACTURING_SOLUTIONS_DATA";
import SectionHeader from "@/components/common/SectionHeader";

export default function ManufacturingSolutions() {
  const { mainTitle, section1 } = MANUFACTURING_SOLUTIONS_DATA;

  // 1. Assign the icon to a Capitalized variable to satisfy React/JSX rules
  const DecoIcon = section1.sensorDeployment.categories[0].icon;

  return (
    <section className=" py-24 lg:py-32 font-sora" id="solutions">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Main Section Header --- */}
        <SectionHeader 
          title={mainTitle}
          centered={true}
          className="mb-24"
        />

        {/* --- Section 1: Industry 4.0 --- */}
        <div className="space-y-16">
          
          {/* Intro Block (Clean Pedestal) */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
             <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 text-[#2776ea] font-black uppercase tracking-widest text-xs mb-4">
                  <span className="h-px w-8 bg-[#2776ea]" />
                  Section 01
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                  {section1.title}
                </h3>
             </div>
             <div className="lg:col-span-8">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
                  
                  {/* --- CORRECTED LINE BELOW --- */}
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <DecoIcon size={120} strokeWidth={1} />
                  </div>
                  {/* ----------------------------- */}

                  <h4 className="text-xl font-bold text-[#2776ea] mb-4">
                    {section1.intro.title}
                  </h4>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed relative z-10">
                    {section1.intro.description}
                  </p>
                </div>
             </div>
          </div>

          {/* Sensor Deployment Grid */}
          <div className="pt-12">
            <div className="flex flex-col items-center mb-16">
               <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                 Technical Architecture
               </h4>
               <h2 className="text-2xl md:text-3xl font-black text-slate-900">
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

                // Assigning local cat icon to a capitalized variable for mapping
                const CatIcon = cat.icon;

                return (
                  <div 
                    key={index}
                    className={`group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${borderHover} flex flex-col h-full hover:-translate-y-2`}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className={`h-14 w-14 rounded-2xl ${accentBg} flex items-center justify-center ${accentColor} shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                        <CatIcon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-[#2776ea] transition-colors">
                        <ArrowRight size={16} className="-rotate-45" />
                      </div>
                    </div>

                    <h5 className="text-xl font-black text-slate-900 mb-6">
                      {cat.title}
                    </h5>

                    <ul className="space-y-4 flex-grow">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full ${bulletColor} shrink-0 shadow-[0_0_8px_rgba(39,118,234,0.3)]`} />
                          <span className="text-sm font-semibold text-slate-600 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}