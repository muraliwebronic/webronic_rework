"use client";

import { CheckCircle2, Layers } from "lucide-react";
// Using the requested relative path
import { MANUFACTURING_FP_DIGITAL_TWIN_DATA } from "../data/MANUFACTURING_FP_DIGITAL_TWIN_DATA";

export default function ManufacturingFPDigitalTwin() {
  const { fpAnalyzer, digitalTwin } = MANUFACTURING_FP_DIGITAL_TWIN_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: FP ANALYZER (Light Theme) --- */}
      <div className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              Proprietary Platform
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {fpAnalyzer.title}
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {fpAnalyzer.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fpAnalyzer.features.map((feature, index) => {
              const isBlue = feature.color === "blue";
              const iconColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
              
              return (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index === 3 || index === 4 ? "lg:col-span-1" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} shrink-0`}>
                      <feature.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${iconColor}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </div>


    </section>
  );
}