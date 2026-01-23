"use client";

import { CheckCircle2 } from "lucide-react";
import { MANUFACTURING_SUPPLY_CHAIN_DATA } from "../data/MANUFACTURING_SUPPLY_CHAIN_DATA";

export default function ManufacturingSupplyChain() {
  const { header, methodologies, inputs, outputs } = MANUFACTURING_SUPPLY_CHAIN_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: INTRO & METHODOLOGIES (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              {header.section}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {header.title}
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              
              <h3 className="text-2xl font-black text-[#76ea27] mb-4 mt-6">
                {header.subTitle}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {header.description}
              </p>
            </div>
          </div>

          {/* Methodologies Grid */}
          <div className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {methodologies.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {methodologies.methods.map((method, index) => {
                const isBlue = method.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                const borderHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";

                return (
                  <div 
                    key={index}
                    className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${borderHover}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-12 w-12 rounded-xl ${bgIcon} flex items-center justify-center ${accentColor} shrink-0`}>
                        <method.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {method.title}
                      </h4>
                    </div>
                    <ul className="space-y-4">
                      {method.items.map((item, i) => (
                        <li key={i}>
                          <p className="text-sm font-bold text-slate-700 mb-1">
                            {item.name}
                          </p>
                          {item.desc && (
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inputs Grid */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {inputs.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {inputs.categories.map((cat, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] border-t-4 border-slate-200 hover:border-[#2776ea] transition-colors shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <cat.icon className="text-slate-400" size={24} />
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

      {/* --- PART 2: OUTPUTS (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
       
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {outputs.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outputs.categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#76ea27]/10 text-[#76ea27]">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
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

    </section>
  );
}