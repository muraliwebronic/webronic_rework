"use client";

import { CheckCircle2 } from "lucide-react";
import { MANUFACTURING_DATA_COLLECTION_DATA } from "../data/MANUFACTURING_DATA_COLLECTION_DATA";


export default function ManufacturingDataCollection() {
  const { infrastructure, dashboard } = MANUFACTURING_DATA_COLLECTION_DATA;

  return (
    <section className="bg-white py-24 font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Part 1: Infrastructure Grid --- */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              {infrastructure.title} 
            </h2>
            <div className="h-1 w-20 bg-[#2776ea] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructure.methods.map((method, index) => {
              const isBlue = method.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const bgClass = isBlue ? "bg-[#2776ea]/5 border-[#2776ea]/10" : "bg-[#76ea27]/5 border-[#76ea27]/10";

              return (
                <div 
                  key={index}
                  className={`p-8 rounded-[2rem] border ${bgClass} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${accentColor}`}>
                      <method.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {method.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${accentColor}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Part 2: Dashboard Metrics (Dark Mode Visual) --- */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
          
         
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                {dashboard.title} 
              </h2>
              <p className="text-slate-400"> comprehensive real-time visibility into your operations.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboard.metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 ${
                    index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/10 text-[#76ea27]">
                      <metric.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{metric.title}</h3>
                      {metric.subTitle && (
                        <p className="text-xs text-[#2776ea] font-bold uppercase tracking-wider mt-1">
                          {metric.subTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {metric.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
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
    </section>
  );
}