"use client";

import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function WhyWebronic() {
  const { whyWebronic } = CAREERS_DATA;

  return (
    <section className="bg-slate-50 py-24 font-sora relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          badge={whyWebronic.header.badge}
          title={whyWebronic.header.title}
          highlight={whyWebronic.header.highlight}
          description={whyWebronic.header.description}
          centered={true}
          className="max-w-3xl mx-auto mb-20"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWebronic.features.map((feature, idx) => {
            const isBlue = feature.color === "blue";
            const accent = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            
            return (
              <div key={idx} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                
                {/* Floating Icon */}
                <div className={`h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center ${accent} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* Details */}
                <div className="pt-6 border-t border-slate-50 space-y-2">
                   {feature.details.slice(0, 3).map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-bold text-slate-600">
                         <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${accent}`} />
                         <span>{detail}</span>
                      </div>
                   ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}