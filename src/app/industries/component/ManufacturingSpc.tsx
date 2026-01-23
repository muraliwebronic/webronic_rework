"use client";

import { CheckCircle2, AlertTriangle, Sigma } from "lucide-react";
import { MANUFACTURING_SPC_DATA } from "../data/MANUFACTURING_SPC_DATA";

export default function ManufacturingSpc() {
  const { header, fundamentals, charts, interpretation, automation } = MANUFACTURING_SPC_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: FUNDAMENTALS & CHARTS (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {header.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-6">
              {header.subTitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* Fundamentals Card */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mb-16">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <Sigma className="text-[#2776ea]" /> {fundamentals.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {fundamentals.purpose.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart Types Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {charts.categories.map((cat, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                    <cat.icon size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{cat.title}</h4>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- PART 2: INTERPRETATION (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Grid */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {interpretation.title} 

[Image of statistical control chart]

            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Limits (Left Col) */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-xl font-bold mb-6 text-white">Control Limits</h3>
              <div className="space-y-6">
                {interpretation.limits.map((limit, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-black/20">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${limit.color === "red" ? "text-red-400" : "text-[#76ea27]"}`}>
                      {limit.label}
                    </p>
                    <p className="text-xl font-mono font-bold text-white">
                      {limit.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Out-of-Control Signals (Center Col) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="text-red-500" />
                  <h3 className="text-xl font-bold text-white">{interpretation.signals.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {interpretation.signals.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="bg-[#2776ea]/10 border border-[#2776ea]/20 p-8 rounded-[2rem]">
                <h3 className="text-xl font-bold text-white mb-6">
                  {interpretation.actions.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interpretation.actions.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#2776ea]/20 px-4 py-2 rounded-lg border border-[#2776ea]/30">
                      <span className="text-xs font-bold text-[#2776ea] w-5 h-5 flex items-center justify-center bg-white rounded-full">
                        {i + 1}
                      </span>
                      <span className="text-sm font-bold text-blue-100">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- PART 3: AUTOMATION (Clean Light Theme) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">
            {automation.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automation.sections.map((sec, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors duration-300">
                    <sec.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {sec.title}
                  </h3>
                </div>
                <ul className="space-y-3 pl-4 border-l-2 border-slate-100 group-hover:border-[#2776ea]/30 transition-colors">
                  {sec.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-relaxed font-medium">
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