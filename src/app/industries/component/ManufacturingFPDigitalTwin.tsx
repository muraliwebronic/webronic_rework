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

      {/* --- PART 2: DIGITAL TWIN (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        
        {/* Background Decor */}
       
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="text-[#76ea27]" size={24} />
              <h2 className="text-3xl md:text-5xl font-black">
                {digitalTwin.title}
              </h2>
            </div>
            <h3 className="text-2xl text-[#2776ea] font-bold mb-6">
              {digitalTwin.subTitle}
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-12">
              {digitalTwin.description}
            </p>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm max-w-3xl">
              <h4 className="text-xl font-bold mb-3 text-white">
                {digitalTwin.definition.title}
              </h4>
              <p className="text-slate-400 font-medium">
                {digitalTwin.definition.content}
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {digitalTwin.capabilities.map((cap, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <div className="h-10 w-10 rounded-full bg-[#2776ea]/20 flex items-center justify-center text-[#2776ea] group-hover:bg-[#76ea27]/20 group-hover:text-[#76ea27] transition-colors">
                    <cap.icon size={20} />
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-[#76ea27] transition-colors">
                    {cap.title}
                  </h4>
                </div>
                
                <ul className="space-y-4">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-2 shrink-0 group-hover:bg-[#76ea27] transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}