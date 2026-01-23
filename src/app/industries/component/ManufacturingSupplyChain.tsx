"use client";

import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_SUPPLY_CHAIN_DATA } from "../data/MANUFACTURING_SUPPLY_CHAIN_DATA";

export default function ManufacturingSupplyChain() {
  const { header, methodologies, inputs, outputs } = MANUFACTURING_SUPPLY_CHAIN_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: INTRO & METHODOLOGIES --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            badge={header.section}
            title={header.title}
            highlight={header.subTitle}
            description={header.description}
            centered={true}
            className="mb-24"
          />

          <div className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">{methodologies.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {methodologies.methods.map((method, index) => {
                const isBlue = method.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                
                return (
                  <div key={index} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-[#2776ea]/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-12 w-12 rounded-xl ${bgIcon} flex items-center justify-center ${accentColor} shrink-0`}>
                        <method.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{method.title}</h4>
                    </div>
                    <ul className="space-y-4">
                      {method.items.map((item, i) => (
                        <li key={i}>
                          <p className="text-sm font-bold text-slate-700 mb-1">{item.name}</p>
                          {item.desc && <p className="text-xs text-slate-500">{item.desc}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">{inputs.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {inputs.categories.map((cat, index) => (
                <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <cat.icon className="text-[#2776ea]" size={24} />
                    <h4 className="text-lg font-bold text-slate-900">{cat.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
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

      {/* --- PART 2: OUTPUTS (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={outputs.title} centered={true} className="mb-16" />

          <div className="grid md:grid-cols-3 gap-8">
            {outputs.categories.map((cat, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-xl text-slate-900">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
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

    </section>
  );
}