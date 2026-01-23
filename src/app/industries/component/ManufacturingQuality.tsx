"use client";

import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_QUALITY_DATA } from "../data/MANUFACTURING_QUALITY_DATA";

export default function ManufacturingQuality() {
  const { header, applications, techStack, software } = MANUFACTURING_QUALITY_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: INTRO & APPLICATIONS --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader 
            badge="Quality Assurance"
            title={header.title}
            highlight={header.subTitle}
            description={header.description}
            centered={true}
            className="mb-20"
          />

          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 mb-20">
             <h3 className="text-2xl font-black text-slate-900 mb-4 text-center">{header.introTitle}</h3>
             <p className="text-center text-slate-600 max-w-3xl mx-auto">{header.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.categories.map((cat, index) => {
              const isBlue = cat.color === "blue";
              const iconColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2776ea]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center ${iconColor} shrink-0`}>
                      <cat.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">
                      {cat.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                        <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- PART 2: TECH STACK (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            isWhite
            badge="Architecture"
            title={techStack.title}
            centered={true}
            className="mb-20"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.columns.map((col, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                    <col.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{col.title}</h3>
                </div>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
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

      {/* --- PART 3: SOFTWARE & ALGORITHMS (Clean Grid) --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader title={software.title} centered={true} className="mb-20" />

          <div className="grid md:grid-cols-2 gap-8">
            {software.sections.map((section, index) => {
              const isBlue = section.theme === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const bgHeader = isBlue ? "bg-[#2776ea]/5" : "bg-[#76ea27]/5";

              return (
                <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-200">
                  <div className={`flex items-center gap-4 mb-8 p-4 rounded-2xl ${bgHeader}`}>
                    <section.icon size={32} className={accentColor} />
                    <h3 className={`text-2xl font-black ${accentColor}`}>
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 pl-4 border-l-2 border-slate-100">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-slate-600 leading-relaxed font-bold text-sm">
                        {item}
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