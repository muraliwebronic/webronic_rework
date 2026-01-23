"use client";

import { CheckCircle2 } from "lucide-react";

import { MANUFACTURING_SOLUTIONS_DATA } from "../data//MANUFACTURING_SOLUTIONS_DATA";

export default function ManufacturingSolutions() {
  const { mainTitle, section1 } = MANUFACTURING_SOLUTIONS_DATA;

  return (
    <section className="bg-slate-50 py-24 font-sora" id="solutions">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Main Section Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            {mainTitle}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#2776ea] to-[#76ea27] mx-auto mt-6 rounded-full" />
        </div>

        {/* --- Section 1: Industry 4.0 --- */}
        <div className="mb-24">
          
          {/* Sub-Header */}
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 border-l-8 border-[#2776ea] pl-6">
            {section1.title}
          </h3>

          {/* Intro Block */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
            <h4 className="text-xl font-bold text-[#2776ea] mb-4">
              {section1.intro.title}
            </h4>
            <p className="text-lg text-slate-600 leading-relaxed">
              {section1.intro.description}
            </p>
          </div>

          {/* Sensor Deployment Grid */}
          <div>
            <h4 className="text-xl font-black text-slate-900 mb-8 text-center uppercase tracking-widest">
              {section1.sensorDeployment.title}
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              {section1.sensorDeployment.categories.map((cat, index) => {
                const isBlue = cat.color === "blue";
                const iconColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                const borderHover = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";

                return (
                  <div 
                    key={index}
                    className={`group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${borderHover} ${index === 4 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-12 w-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor} shrink-0`}>
                        <cat.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h5 className="text-lg font-bold text-slate-900">
                        {cat.title}
                      </h5>
                    </div>

                    <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 size={16} className={`shrink-0 mt-1 ${iconColor}`} />
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

        {/* Note: Additional sections will be appended here based on future prompts */}

      </div>
    </section>
  );
}