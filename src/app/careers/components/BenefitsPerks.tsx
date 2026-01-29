"use client";

import { CheckCircle2 } from "lucide-react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function BenefitsPerks() {
  const { benefits } = CAREERS_DATA;

  return (
    <section className="bg-slate-50 py-24 font-sora relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#76ea27]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
            badge={benefits.header.badge}
            title={benefits.header.title}
            highlight={benefits.header.highlight}
            description={benefits.header.description}
            centered={true}
            className="max-w-3xl mx-auto mb-20"
        />

        {/* --- BENEFITS GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.categories.map((cat, index) => {
            const isBlue = cat.color === "blue";
            const accentText = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const accentBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
            const hoverBorder = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";

            return (
              <div 
                key={index}
                className={`group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col ${hoverBorder}`}
              >
                {/* Floating Icon */}
                <div className={`h-14 w-14 rounded-2xl ${accentBg} flex items-center justify-center ${accentText} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-h3 font-black text-slate-900 mb-6">
                  {cat.title}
                </h3>

                {/* Subsections List */}
                <div className="space-y-6 flex-grow">
                  {cat.subsections.map((sub, idx) => (
                    <div key={idx}>
                      <h4 className="text-caption font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-50 pb-1">
                        {sub.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {sub.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-submenu font-bold text-slate-600">
                            <CheckCircle2 
                              size={14} 
                              className={`shrink-0 mt-0.5 ${accentText}`} 
                            />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
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