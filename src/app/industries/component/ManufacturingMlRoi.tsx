"use client";

import { CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { MANUFACTURING_ML_ROI_DATA } from "../data/MANUFACTURING_ML_ROI_DATA";

export default function ManufacturingMlRoi() {
  const { mlPerformance, roi } = MANUFACTURING_ML_ROI_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: ML MODEL PERFORMANCE (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        
      
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {mlPerformance.title} 
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Accuracy Stats */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                  <mlPerformance.accuracy.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{mlPerformance.accuracy.title}</h3>
              </div>
              
              <div className="space-y-6">
                {mlPerformance.accuracy.items.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-[#2776ea]/30">
                    <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#2776ea]" />
                    <p className="text-lg font-bold text-white mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Model Outputs (Terminal Style) */}
            <div className="bg-black/40 backdrop-blur-md border border-slate-700 rounded-[2rem] p-8 md:p-10 font-mono">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700">
                <mlPerformance.outputs.icon className="text-[#76ea27]" size={28} />
                <h3 className="text-xl font-bold text-[#76ea27] tracking-wider">
                  &gt; {mlPerformance.outputs.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {mlPerformance.outputs.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <span className="text-[#76ea27] mt-1">➜</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* --- PART 2: ROI ANALYSIS (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {roi.title}
            </h2>
            <p className="text-xl font-bold text-[#2776ea] uppercase tracking-widest">
              {roi.subTitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            
            {/* Costs Column (4 cols) */}
            <div className="lg:col-span-4 bg-white p-8 rounded-[2rem] border border-red-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-red-50">
                <roi.costs.icon className="text-red-500" size={28} />
                <h3 className="text-2xl font-black text-slate-900">{roi.costs.title}</h3>
              </div>
              
              <div className="space-y-6">
                {roi.costs.items.map((c, index) => (
                  <div key={index}>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">
                      {c.item}
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      {c.cost}
                    </p>
                    {c.sub && <p className="text-xs text-slate-400 italic">{c.sub}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid (8 cols) */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {roi.benefits.categories.map((cat, index) => {
                const isBlue = cat.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                
                return (
                  <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${bgIcon} ${accentColor}`}>
                        <cat.icon size={24} />
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 leading-tight">
                        {cat.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                          <CheckCircle2 size={14} className={`shrink-0 mt-1 ${accentColor}`} />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payback Section */}
          <div className="bg-[#2776ea] rounded-[2.5rem] p-10 md:p-14 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <roi.payback.icon size={32} />
                </div>
                <h3 className="text-3xl font-black">{roi.payback.title}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {roi.payback.scenarios.map((scenario, index) => (
                  <div key={index} className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md text-center hover:bg-white/20 transition-colors">
                    <p className="font-bold text-lg mb-1">{scenario.type}</p>
                    <p className="text-xs text-blue-200 uppercase tracking-widest mb-4">{scenario.size}</p>
                    <div className="inline-block px-4 py-2 bg-white text-[#2776ea] font-black rounded-lg text-xl shadow-sm">
                      {scenario.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
               <Clock size={400} />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}