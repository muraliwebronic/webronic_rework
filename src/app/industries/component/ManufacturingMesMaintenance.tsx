"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { MANUFACTURING_MES_MAINTENANCE_DATA } from "../data/MANUFACTURING_MES_MAINTENANCE_DATA";
import SectionHeader from "@/components/common/SectionHeader";

export default function ManufacturingMesMaintenance() {
  const { mes, maintenance } = MANUFACTURING_MES_MAINTENANCE_DATA;

  return (
    <section className="font-sora overflow-hidden">
      
      {/* --- SECTION 1: MES (Clean Grid) --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader
            badge="Operational Core"
            title={mes.title}
            highlight={mes.subTitle}
            description={mes.description}
            centered={true}
            className="mb-24"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {mes.functions.map((func, index) => {
              const FuncIcon = func.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#2776ea]/50 hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2776ea]">
                      <FuncIcon size={24} strokeWidth={1.5} />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900 leading-tight">
                      {func.title}
                    </h5>
                  </div>
                  <ul className="space-y-3">
                    {func.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Integration Flow (Primary Blue) */}
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 text-white relative">
             <div className="relative z-10">
                <h3 className="text-2xl font-black text-center mb-16">{mes.integration.title}</h3>
                
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {mes.integration.streams.map((stream, index) => {
                    const StreamIcon = stream.icon;
                    // Center card is highlighted with White, others are transparent white
                    const isCenter = index === 1; 
                    
                    return (
                      <div 
                        key={index} 
                        className={`relative p-8 rounded-[2.5rem] ${isCenter ? "bg-white text-slate-900 shadow-xl" : "bg-white/10 border border-white/20 text-white"}`}
                      >
                        {/* Connecting Lines (Desktop Only) */}
                        {index < 2 && (
                          <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-white/40 z-0" />
                        )}

                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 ${isCenter ? "bg-[#2776ea] text-white" : "bg-white text-[#2776ea]"}`}>
                            <StreamIcon size={32} />
                          </div>
                          <h4 className="text-xl font-bold mb-6">{stream.direction}</h4>
                          <ul className="space-y-3 text-left w-full">
                            {stream.details.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm font-bold">
                                <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isCenter ? "text-[#76ea27]" : "text-white"}`} />
                                <span className={isCenter ? "text-slate-600" : "text-blue-50"}>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 2: PREDICTIVE MAINTENANCE --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader
            badge="Asset Health"
            title={maintenance.title}
            highlight={maintenance.subTitle}
            description="Transitioning from reactive fixes to intelligent foresight"
            centered={true}
            className="mb-20"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {maintenance.approaches.map((approach, index) => {
              const ApproachIcon = approach.icon;
              const isPredictive = approach.theme === "green";

              // Clean styling logic: No glowing shadows
              let borderColor = "border-slate-200";
              let badgeColor = "bg-slate-100 text-slate-500";
              let cardBg = "bg-white";
              
              if (isPredictive) {
                borderColor = "border-[#2776ea]";
                badgeColor = "bg-[#2776ea] text-white";
                cardBg = "bg-white relative z-10 shadow-xl shadow-blue-900/5"; // Subtle elevation
              }

              return (
                <div 
                  key={index}
                  className={`p-10 rounded-[3rem] border-2 transition-transform duration-300 ${borderColor} ${cardBg} ${isPredictive ? "md:-translate-y-4" : ""}`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-2xl ${badgeColor}`}>
                      <ApproachIcon size={32} strokeWidth={1.5} />
                    </div>
                    {isPredictive && (
                      <span className="px-4 py-1.5 bg-[#76ea27] text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                        Best Value
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {approach.type}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mb-8 italic">
                    "{approach.concept}"
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-100">
                    <ul className="space-y-4">
                      {approach.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-semibold leading-relaxed">
                          <div className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${isPredictive ? "bg-[#2776ea]" : "bg-slate-300"}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}