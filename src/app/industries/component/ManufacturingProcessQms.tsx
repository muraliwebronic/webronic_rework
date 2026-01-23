"use client";

import { Calculator, CheckCircle2, Sigma } from "lucide-react";
// Using the requested relative path
import { MANUFACTURING_PROCESS_QMS_DATA } from "../data/MANUFACTURING_PROCESS_QMS_DATA";

export default function ManufacturingProcessQms() {
  const { capability, qms } = MANUFACTURING_PROCESS_QMS_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: PROCESS CAPABILITY (Dark/Tech Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Grid */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {capability.title} 
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {capability.indices.map((index, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                    <Calculator size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{index.title}</h3>
                </div>
                
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 mb-6 font-mono text-[#76ea27] text-center font-bold">
                  {index.formula}
                </div>

                <ul className="space-y-3">
                  {index.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Interpretation */}
            <div className="bg-white p-8 rounded-[2rem] text-slate-900 shadow-xl">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-[#2776ea]" /> {capability.interpretation.title}
              </h3>
              <div className="space-y-4">
                {capability.interpretation.levels.map((level, i) => {
                  let badgeColor = "bg-slate-100 text-slate-600";
                  if (level.color === "red") badgeColor = "bg-red-100 text-red-700";
                  if (level.color === "yellow") badgeColor = "bg-yellow-100 text-yellow-700";
                  if (level.color === "blue") badgeColor = "bg-blue-100 text-blue-700";
                  if (level.color === "green") badgeColor = "bg-[#76ea27]/20 text-green-800";

                  return (
                    <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                      <span className="font-mono font-bold text-sm">{level.range}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${badgeColor}`}>
                        {level.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Six Sigma Metrics */}
            <div className="bg-[#2776ea]/10 border border-[#2776ea]/20 p-8 rounded-[2rem] text-white">
              <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                <Sigma className="text-[#76ea27]" /> {capability.sixSigma.title}
              </h3>
              <p className="font-mono text-xs text-blue-200 mb-6 break-all">
                {capability.sixSigma.formula}
              </p>
              <div className="space-y-4">
                {capability.sixSigma.levels.map((level, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-[#2776ea]/20 p-4 rounded-xl border border-[#2776ea]/30">
                    <span className="font-black text-lg text-white mb-1 sm:mb-0">{level.level}</span>
                    <span className="text-sm font-medium text-[#76ea27]">{level.dpmo}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* --- PART 2: QMS INTEGRATION (Clean Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {qms.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-6">
              {qms.subTitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {qms.description}
            </p>
          </div>

          {/* Core Functions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {qms.functions.map((func, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#76ea27]/10 text-green-700">
                    <func.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">
                    {func.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {func.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Platforms & Compliance */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem]">
              <div className="flex items-center gap-3 mb-6">
                <qms.platforms.commercial.icon className="text-[#2776ea]" size={24} />
                <h3 className="text-xl font-black text-slate-900">{qms.platforms.commercial.title}</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {qms.platforms.commercial.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-[#2776ea] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-[2rem]">
              <div className="flex items-center gap-3 mb-6">
                <qms.platforms.compliance.icon className="text-[#76ea27]" size={24} />
                <h3 className="text-xl font-black text-white">{qms.platforms.compliance.title}</h3>
              </div>
              <ul className="space-y-3">
                {qms.platforms.compliance.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}