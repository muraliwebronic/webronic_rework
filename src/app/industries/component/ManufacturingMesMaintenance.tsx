"use client";

import { CheckCircle2 } from "lucide-react";
import { MANUFACTURING_MES_MAINTENANCE_DATA } from "../data/MANUFACTURING_MES_MAINTENANCE_DATA";

export default function ManufacturingMesMaintenance() {
  const { mes, maintenance } = MANUFACTURING_MES_MAINTENANCE_DATA;

  return (
    <section className="font-sora">
      
      {/* --- SECTION 1: MES --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {mes.title}
            </h2>
            <h3 className="text-xl font-bold text-[#2776ea] mb-6">
              {mes.subTitle}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {mes.description}
            </p>
          </div>

          {/* Core Functions Grid */}
          <div className="mb-24">
            <h4 className="text-2xl font-black text-slate-900 mb-10 border-l-8 border-[#2776ea] pl-6">
              Core MES Functions
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mes.functions.map((func, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${index === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea] shrink-0">
                      <func.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900 leading-tight">
                      {func.title}
                    </h5>
                  </div>
                  <ul className="space-y-3">
                    {func.items.map((item, i) => (
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

        {/* Benefits Strip (Dark) */}
        <div className="bg-slate-900 py-20 text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h3 className="text-3xl font-black mb-12 text-center">{mes.benefits.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mes.benefits.categories.map((cat, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <cat.icon className="text-[#76ea27]" size={24} />
                    <h4 className="font-bold text-lg">{cat.title}</h4>
                  </div>
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 leading-relaxed border-l border-[#2776ea] pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Flow */}
        <div className="bg-white py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <h3 className="text-2xl font-black text-slate-900 mb-12 text-center">
              {mes.integration.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {mes.integration.streams.map((stream, index) => {
                const isCenter = index === 1;
                return (
                  <div key={index} className={`p-8 rounded-[2rem] border ${isCenter ? "bg-[#2776ea] text-white border-[#2776ea]" : "bg-white border-slate-200"}`}>
                    <div className="flex justify-center mb-6">
                      <div className={`h-14 w-14 rounded-full flex items-center justify-center ${isCenter ? "bg-white text-[#2776ea]" : "bg-[#2776ea]/10 text-[#2776ea]"}`}>
                        <stream.icon size={28} />
                      </div>
                    </div>
                    <h4 className={`text-xl font-bold mb-6 text-center ${isCenter ? "text-white" : "text-slate-900"}`}>
                      {stream.direction}
                    </h4>
                    <ul className="space-y-3">
                      {stream.details.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium">
                          <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${isCenter ? "text-[#76ea27]" : "text-[#2776ea]"}`} />
                          <span className={`${isCenter ? "text-blue-50" : "text-slate-600"}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: PREDICTIVE MAINTENANCE --- */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {maintenance.title}
            </h2>
            <p className="text-xl text-[#76ea27] font-bold uppercase tracking-widest">
              {maintenance.subTitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {maintenance.approaches.map((approach, index) => {
              // Styling logic based on type
              const isReactive = approach.theme === "red";
              const isPreventive = approach.theme === "yellow";
              const isPredictive = approach.theme === "green";

              let borderColor = "border-slate-200";
              let iconColor = "text-slate-400";
              let badgeColor = "bg-slate-100 text-slate-500";

              if (isReactive) {
                borderColor = "border-red-200 hover:border-red-400";
                iconColor = "text-red-500";
                badgeColor = "bg-red-50 text-red-600";
              } else if (isPreventive) {
                borderColor = "border-amber-200 hover:border-amber-400";
                iconColor = "text-amber-500";
                badgeColor = "bg-amber-50 text-amber-600";
              } else if (isPredictive) {
                borderColor = "border-[#76ea27] shadow-xl shadow-[#76ea27]/10 transform md:-translate-y-4";
                iconColor = "text-[#76ea27]";
                badgeColor = "bg-[#76ea27]/10 text-[#2776ea]";
              }

              return (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-[2rem] border-2 transition-all duration-300 ${borderColor}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${badgeColor} inline-block`}>
                      <approach.icon size={28} strokeWidth={2} />
                    </div>
                    {isPredictive && (
                      <span className="px-3 py-1 bg-[#2776ea] text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {approach.type}
                  </h3>
                  
                  <p className="text-sm font-bold text-slate-700 mb-6 border-b border-slate-100 pb-6 italic">
                    "{approach.concept}"
                  </p>

                  <ul className="space-y-4">
                    {approach.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-relaxed">
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

    </section>
  );
}