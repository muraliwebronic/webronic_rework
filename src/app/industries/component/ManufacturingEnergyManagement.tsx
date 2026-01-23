"use client";

import { CheckCircle2, Zap } from "lucide-react";
// Using the requested relative path
import { MANUFACTURING_ENERGY_DATA } from "../data/MANUFACTURING_ENERGY_DATA";

export default function ManufacturingEnergyManagement() {
  const { header, architecture, analytics, optimization, results, iso50001 } = MANUFACTURING_ENERGY_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: HEADER & ARCHITECTURE (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              {header.section}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {header.title}
            </h2>
            <h3 className="text-xl font-bold text-slate-700 mb-4">
              {header.subTitle}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {header.description}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {architecture.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {architecture.columns.map((col, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                      <col.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">
                      {col.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: ANALYTICS (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
    
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              {analytics.title} 

[Image of energy consumption dashboard]

            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm">
              {analytics.subTitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {analytics.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#76ea27]/10 text-[#76ea27]">
                    <metric.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold">{metric.title}</h3>
                </div>
                <ul className="space-y-4">
                  {metric.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- PART 3: OPTIMIZATION (Clean Grid) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">
            {optimization.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimization.strategies.map((strategy, index) => {
              const isBlue = strategy.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const borderColor = isBlue ? "hover:border-[#2776ea]" : "hover:border-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/5" : "bg-[#76ea27]/5";

              return (
                <div 
                  key={index}
                  className={`p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 ${borderColor} hover:shadow-lg`}
                >
                  <div className={`flex items-center gap-4 mb-6 p-4 rounded-2xl ${iconBg}`}>
                    <strategy.icon size={28} className={accentColor} />
                    <h4 className={`text-lg font-bold ${accentColor} leading-tight`}>
                      {strategy.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {strategy.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-relaxed font-medium">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- PART 4: RESULTS & ISO 50001 (New Sections) --- */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Results Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              {results.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Savings */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-[#76ea27]/20 shadow-xl shadow-[#76ea27]/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-[#76ea27]/10 text-[#76ea27]">
                    <results.savings.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{results.savings.title}</h3>
                </div>
                <ul className="space-y-4">
                  {results.savings.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                      <span className="h-6 w-6 rounded-full bg-[#76ea27]/20 text-[#76ea27] flex items-center justify-center shrink-0 text-xs">
                        $
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-[#2776ea]/20 shadow-xl shadow-[#2776ea]/5">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <results.benefits.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{results.benefits.title}</h3>
                </div>
                <ul className="space-y-4">
                  {results.benefits.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                      <CheckCircle2 size={20} className="text-[#2776ea] shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ISO 50001 Section (Dark Card) */}
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            {/* Background Decor */}
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4">{iso50001.title}</h2>
                <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm">
                  {iso50001.subTitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Framework */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <iso50001.framework.icon className="text-[#76ea27]" />
                    <h3 className="text-xl font-bold">{iso50001.framework.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {iso50001.framework.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <span className="text-[#76ea27] font-bold text-xs">0{i + 1}</span>
                        <span className="text-sm font-medium text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <iso50001.benefits.icon className="text-[#2776ea]" />
                    <h3 className="text-xl font-bold">{iso50001.benefits.title}</h3>
                  </div>
                  <ul className="space-y-4 pl-4 border-l-2 border-[#2776ea]/30">
                    {iso50001.benefits.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}