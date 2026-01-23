"use client";

import { CheckCircle2, ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_ML_ROI_DATA } from "../data/MANUFACTURING_ML_ROI_DATA";

export default function ManufacturingMlRoi() {
  const { mlPerformance, roi } = MANUFACTURING_ML_ROI_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: ML PERFORMANCE (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <SectionHeader 
            isWhite
            badge="Benchmarks"
            title={mlPerformance.title}
            centered={true}
            className="mb-20"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Accuracy Stats */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                  <mlPerformance.accuracy.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{mlPerformance.accuracy.title}</h3>
              </div>
              
              <div className="space-y-8">
                {mlPerformance.accuracy.items.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-4 border-[#2776ea]">
                    <p className="text-lg font-black text-slate-900 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-500 font-medium">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Model Outputs */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-10">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <mlPerformance.outputs.icon className="text-[#76ea27]" size={28} />
                <h3 className="text-xl font-bold text-white tracking-wider">
                  {mlPerformance.outputs.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {mlPerformance.outputs.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-blue-50">
                    <span className="text-[#76ea27] font-bold mt-1">➜</span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: ROI ANALYSIS (Clean Light) --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader 
            badge="Financial Impact"
            title={roi.title}
            highlight={roi.subTitle}
            centered={true}
            className="mb-20"
          />

          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            {/* Costs (4 cols) */}
            <div className="lg:col-span-4 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <roi.costs.icon className="text-slate-400" size={28} />
                <h3 className="text-2xl font-black text-slate-900">{roi.costs.title}</h3>
              </div>
              <div className="space-y-6">
                {roi.costs.items.map((c, index) => (
                  <div key={index}>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">
                      {c.item}
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      {c.cost}
                    </p>
                    {c.sub && <p className="text-xs text-slate-400 italic mt-1">{c.sub}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits (8 cols) */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {roi.benefits.categories.map((cat, index) => {
                const isBlue = cat.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                
                return (
                  <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-2xl ${bgIcon} ${accentColor}`}>
                        <cat.icon size={24} />
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 leading-tight">
                        {cat.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${accentColor}`} />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payback Scenarios (White/Blue mix) */}
          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-200 shadow-xl overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                <roi.payback.icon size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900">{roi.payback.title}</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {roi.payback.scenarios.map((scenario, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:bg-[#2776ea] hover:text-white group transition-colors duration-300">
                  <p className="font-bold text-lg mb-2 text-slate-900 group-hover:text-white">{scenario.type}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-6 group-hover:text-blue-200">{scenario.size}</p>
                  <div className="inline-block px-6 py-3 bg-white text-[#2776ea] font-black rounded-xl text-xl shadow-sm">
                    {scenario.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}