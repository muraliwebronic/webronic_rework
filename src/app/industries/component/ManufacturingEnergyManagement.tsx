"use client";

import { CheckCircle2, Zap } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_ENERGY_DATA } from "../data/MANUFACTURING_ENERGY_DATA";

export default function ManufacturingEnergyManagement() {
  const { header, architecture, analytics, optimization, results, iso50001 } = MANUFACTURING_ENERGY_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: ARCHITECTURE --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            badge={header.section}
            title={header.title}
            highlight={header.subTitle}
            description={header.description}
            centered={true}
            className="mb-20"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {architecture.columns.map((col, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white text-[#2776ea] shadow-sm">
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

      {/* --- PART 2: ANALYTICS (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={analytics.title} centered={true} className="mb-20" />

          <div className="grid md:grid-cols-3 gap-8">
            {analytics.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[2.5rem] shadow-xl text-slate-900"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <metric.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold">{metric.title}</h3>
                </div>
                <ul className="space-y-4">
                  {metric.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PART 3: OPTIMIZATION & ISO --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Optimization */}
          <SectionHeader title={optimization.title} centered={true} className="mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {optimization.strategies.map((strategy, index) => (
              <div key={index} className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-[#2776ea] transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <strategy.icon size={28} className="text-[#2776ea]" />
                  <h4 className="text-lg font-bold text-slate-900">{strategy.title}</h4>
                </div>
                <ul className="space-y-3">
                  {strategy.details.map((detail, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-relaxed font-medium">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Results & ISO (White Card) */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Results */}
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-8">{results.title}</h3>
                <div className="space-y-6">
                  <div className="bg-[#76ea27]/10 p-6 rounded-3xl border border-[#76ea27]/20">
                    <h4 className="font-bold text-[#76ea27] mb-4">{results.savings.title}</h4>
                    <ul className="space-y-2">
                      {results.savings.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm font-bold text-slate-700">
                          <span className="text-[#76ea27]">$</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4">{results.benefits.title}</h4>
                    <ul className="space-y-2">
                      {results.benefits.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600">
                          <CheckCircle2 size={16} className="text-slate-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* ISO 50001 */}
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{iso50001.title}</h3>
                <p className="text-[#2776ea] font-bold text-sm uppercase tracking-widest mb-8">{iso50001.subTitle}</p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">{iso50001.framework.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {iso50001.framework.items.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-4">{iso50001.benefits.title}</h4>
                    <ul className="space-y-2">
                      {iso50001.benefits.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-500 border-l-2 border-[#2776ea] pl-3">
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
      </div>

    </section>
  );
}