"use client";

import { Calculator, CheckCircle2, Sigma } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_PROCESS_QMS_DATA } from "../data/MANUFACTURING_PROCESS_QMS_DATA";

export default function ManufacturingProcessQms() {
  const { capability, qms } = MANUFACTURING_PROCESS_QMS_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: PROCESS CAPABILITY (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={capability.title} centered={true} className="mb-20" />

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {capability.indices.map((index, i) => (
              <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white text-[#2776ea]">
                    <Calculator size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{index.title}</h3>
                </div>
                <div className="bg-white/20 p-4 rounded-xl border border-white/10 mb-6 font-mono text-white text-center font-bold">
                  {index.formula}
                </div>
                <ul className="space-y-3">
                  {index.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-blue-50 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] text-slate-900 shadow-xl">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-[#2776ea]" /> {capability.interpretation.title}
              </h3>
              <div className="space-y-4">
                {capability.interpretation.levels.map((level, i) => {
                  let badgeColor = "bg-slate-100 text-slate-600";
                  if (level.color === "green") badgeColor = "bg-[#76ea27]/20 text-green-800";
                  return (
                    <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0">
                      <span className="font-mono font-bold text-sm">{level.range}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${badgeColor}`}>
                        {level.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black mb-2 flex items-center gap-2">
                <Sigma className="text-[#76ea27]" /> {capability.sixSigma.title}
              </h3>
              <p className="font-mono text-xs text-blue-200 mb-6">{capability.sixSigma.formula}</p>
              <div className="space-y-4">
                {capability.sixSigma.levels.map((level, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="font-black text-lg text-white">{level.level}</span>
                    <span className="text-sm font-medium text-[#76ea27]">{level.dpmo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: QMS INTEGRATION --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader badge="Quality Management" title={qms.title} highlight={qms.subTitle} description={qms.description} centered={true} className="mb-20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {qms.functions.map((func, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <func.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{func.title}</h4>
                </div>
                <ul className="space-y-3">
                  {func.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
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