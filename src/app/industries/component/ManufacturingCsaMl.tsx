"use client";

import { CheckCircle2, Ear } from "lucide-react";
import { MANUFACTURING_CSA_ML_DATA } from "../data/MANUFACTURING_CSA_ML_DATA";

export default function ManufacturingCsaMl() {
  const { mesa, ultrasonic, mlModels } = MANUFACTURING_CSA_ML_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: MESA (Current Signature Analysis) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {mesa.title} 
            </h2>
            <div className="h-1.5 w-24 bg-[#2776ea] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {mesa.sections.map((section, index) => {
              const isBlue = section.color === "blue";
              const isCenter = index === 1;
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const borderColor = isBlue ? "border-slate-200" : "border-[#76ea27]/30";
              const bgClass = isCenter ? "bg-[#2776ea] text-white" : "bg-white text-slate-900";
              const listTextColor = isCenter ? "text-blue-50" : "text-slate-600";
              const dotColor = isCenter ? "bg-[#76ea27]" : "bg-[#2776ea]";

              return (
                <div 
                  key={index}
                  className={`p-8 rounded-[2rem] border ${borderColor} shadow-lg transition-all duration-300 ${bgClass} ${isCenter ? "lg:-translate-y-4 shadow-blue-900/20" : "hover:shadow-xl"}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${isCenter ? "bg-white text-[#2776ea]" : "bg-[#2776ea]/10 text-[#2776ea]"}`}>
                      <section.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isCenter ? "text-white" : "text-slate-900"}`}>
                        {section.title}
                      </h3>
                      {section.subTitle && (
                        <p className="text-xs font-bold uppercase tracking-wider opacity-70 mt-1">
                          {section.subTitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm font-medium leading-relaxed ${listTextColor}`}>
                        <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${dotColor}`} />
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

      {/* --- PART 2: ULTRASONIC TESTING --- */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
            <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
              <Ear size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              {ultrasonic.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {ultrasonic.applications.map((app, index) => (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <app.icon size={24} className="text-[#2776ea] group-hover:text-[#76ea27] transition-colors" />
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2776ea] transition-colors">
                    {app.title}
                  </h3>
                </div>
                <div className="pl-10 border-l-2 border-slate-100 group-hover:border-[#2776ea]/20 transition-colors">
                  <ul className="space-y-3">
                    {app.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- PART 3: ML PREDICTIVE MODELS (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        
        {/* Background Decor */}
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {mlModels.title} 
            </h2>
            <p className="text-[#2776ea] font-bold text-lg uppercase tracking-widest mb-6">
              {mlModels.subTitle}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
              {mlModels.description}
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-16">
              {mlModels.steps.map((step, index) => (
                <div key={index} className="relative pl-24 md:pl-32">
                  
                  {/* Step Marker */}
                  <div className="absolute left-0 top-0 w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center bg-slate-900 border border-[#2776ea]/30 rounded-2xl z-10 shadow-lg shadow-black/50">
                    <step.icon size={24} className="text-[#76ea27] mb-1" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {step.title}
                    </h3>

                    {step.items && (
                      <ul className="space-y-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium leading-relaxed">
                            <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Handling Subsections for Step 3 */}
                    {step.subSections && (
                      <div className="grid md:grid-cols-2 gap-6 mt-4">
                        {step.subSections.map((sub, i) => (
                          <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold text-[#76ea27] text-sm mb-4 uppercase tracking-wider">
                              {sub.label}
                            </h4>
                            <ul className="space-y-2">
                              {sub.list.map((li, j) => (
                                <li key={j} className="text-sm text-slate-300 leading-relaxed border-l border-white/10 pl-3">
                                  {li}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}