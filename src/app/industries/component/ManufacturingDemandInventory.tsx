"use client";

import { CheckCircle2, Binary, ArrowRightLeft } from "lucide-react";
import { MANUFACTURING_DEMAND_INVENTORY_DATA } from "../data/MANUFACTURING_DEMAND_INVENTORY_DATA";

export default function ManufacturingDemandInventory() {
  const { benefits, optimization, metrics, collaboration } = MANUFACTURING_DEMAND_INVENTORY_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: BENEFITS & OPTIMIZATION (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Benefits Grid */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center">
              {benefits.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.categories.map((cat, index) => {
                const isBlue = cat.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                
                return (
                  <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${bgIcon} ${accentColor}`}>
                        <cat.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
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

          {/* Optimization Techniques */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-2">{optimization.title}</h2>
              <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4">
                {optimization.subTitle}
              </p>
              <p className="text-slate-500 max-w-2xl mx-auto">{optimization.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {optimization.techniques.map((tech, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <tech.icon className="text-[#2776ea]" size={24} />
                    <h4 className="font-bold text-lg text-slate-900">{tech.title} 

[Image of economic order quantity formula graph]
</h4>
                  </div>
                  
                  {tech.formula && (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 font-mono text-xs text-[#2776ea] font-bold text-center break-words">
                      {tech.formula}
                    </div>
                  )}

                  <ul className="space-y-2">
                    {tech.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-relaxed border-l-2 border-[#76ea27] pl-3">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: METRICS (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Grid */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-3xl font-black mb-16 text-center">{metrics.title}</h2>

          <div className="grid lg:grid-cols-4 gap-6 mb-16">
            {metrics.kpis.map((kpi, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <kpi.icon className="text-[#76ea27]" size={20} />
                  <h4 className="font-bold text-lg">{kpi.title}</h4>
                </div>
                {kpi.formula && (
                  <p className="text-[10px] font-mono text-blue-200 mb-4 opacity-80 border-b border-white/10 pb-2">
                    {kpi.formula}
                  </p>
                )}
                <ul className="space-y-2">
                  {kpi.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 leading-snug">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#2776ea] rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-black mb-8 text-center">{metrics.results.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.results.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="h-2 w-12 bg-white/30 mx-auto rounded-full mb-4" />
                  <p className="font-bold text-white text-lg leading-tight">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 3: SUPPLIER COLLABORATION (Clean Theme) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              {collaboration.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4">
              {collaboration.subTitle}
            </p>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {collaboration.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {collaboration.features.map((feature, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-[#2776ea] transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea] group-hover:text-[#76ea27] transition-colors">
                    <feature.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">{feature.title}</h4>
                </div>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 group-hover:bg-[#2776ea]" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* EDI Section */}
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            {/* Background Decor */}

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-12">
                
                {/* Left: EDI Basics */}
                <div className="md:w-1/3">
                  <h3 className="text-3xl font-black mb-2">{collaboration.edi.title}</h3>
                  <p className="text-[#76ea27] font-bold uppercase text-sm tracking-widest mb-8">
                    {collaboration.edi.subTitle}
                  </p>
                  
                  <div className="bg-white/10 p-6 rounded-2xl mb-6 border border-white/10">
                    <h4 className="font-bold mb-4">Common Documents</h4>
                    <ul className="space-y-2 font-mono text-xs text-blue-200">
                      {collaboration.edi.documents.map((doc, i) => (
                        <li key={i}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {collaboration.edi.details.map((det, i) => (
                    <p key={i} className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#2776ea]" /> {det}
                    </p>
                  ))}
                </div>

                {/* Right: Benefits Comparison */}
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-8 rounded-3xl border-t-4 border-[#2776ea]">
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                      <ArrowRightLeft className="text-[#2776ea]" /> Supplier Benefits
                    </h4>
                    <ul className="space-y-3">
                      {collaboration.edi.benefits.supplier.map((item, i) => (
                        <li key={i} className="text-sm text-slate-300 leading-snug">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border-t-4 border-[#76ea27]">
                    <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                      <ArrowRightLeft className="text-[#76ea27]" /> Manufacturer Benefits
                    </h4>
                    <ul className="space-y-3">
                      {collaboration.edi.benefits.manufacturer.map((item, i) => (
                        <li key={i} className="text-sm text-slate-300 leading-snug">
                          • {item}
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