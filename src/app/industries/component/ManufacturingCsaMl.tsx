"use client";

import { CheckCircle2, Ear, Zap, Activity } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_CSA_ML_DATA } from "../data/MANUFACTURING_CSA_ML_DATA";

export default function ManufacturingCsaMl() {
  const { mesa, ultrasonic, mlModels } = MANUFACTURING_CSA_ML_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: MESA (Current Signature) --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            badge="Electrical Analysis"
            title={mesa.title}
            centered={true}
            className="mb-20"
          />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {mesa.sections.map((section, index) => {
              const isBlue = section.color === "blue";
              const isCenter = index === 1;
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const bgClass = isCenter ? "bg-[#2776ea] text-white shadow-2xl shadow-blue-900/20 scale-105" : "bg-white text-slate-900 border border-slate-100 shadow-lg";
              const listTextColor = isCenter ? "text-blue-50" : "text-slate-600";
              const dotColor = isCenter ? "bg-[#76ea27]" : "bg-[#2776ea]";

              return (
                <div key={index} className={`p-8 rounded-[2.5rem] transition-all duration-300 ${bgClass}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${isCenter ? "bg-white text-[#2776ea]" : "bg-[#2776ea]/10 text-[#2776ea]"}`}>
                      <section.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isCenter ? "text-white" : "text-slate-900"}`}>
                        {section.title}
                      </h3>
                      {section.subTitle && (
                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-70 mt-1">
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

      {/* --- PART 2: ULTRASONIC --- */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
              <Ear size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              {ultrasonic.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {ultrasonic.applications.map((app, index) => (
              <div key={index} className="group p-6 rounded-[2rem] hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <app.icon size={24} className="text-[#2776ea] group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900">
                    {app.title}
                  </h3>
                </div>
                <div className="pl-10 border-l-2 border-slate-200">
                  <ul className="space-y-3">
                    {app.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-relaxed font-medium">
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

      {/* --- PART 3: ML PREDICTIVE MODELS (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <SectionHeader 
            isWhite
            badge="Advanced Intelligence"
            title={mlModels.title}
            description={mlModels.description}
            centered={true}
            className="mb-20"
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-white/20" />

            <div className="space-y-16">
              {mlModels.steps.map((step, index) => (
                <div key={index} className="relative pl-24 md:pl-32">
                  {/* Step Marker */}
                  <div className="absolute left-0 top-0 w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-3xl z-10 shadow-xl">
                    <step.icon size={24} className="text-[#2776ea] mb-1" />
                    <span className="text-[10px] font-black text-slate-400 uppercase">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white mb-6">
                      {step.title}
                    </h3>

                    {step.items && (
                      <ul className="space-y-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-blue-50 font-medium leading-relaxed">
                            <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.subSections && (
                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        {step.subSections.map((sub, i) => (
                          <div key={i} className="bg-white/10 p-6 rounded-[2rem] border border-white/20 backdrop-blur-md">
                            <h4 className="font-bold text-[#76ea27] text-sm mb-4 uppercase tracking-wider">
                              {sub.label}
                            </h4>
                            <ul className="space-y-2">
                              {sub.list.map((li, j) => (
                                <li key={j} className="text-sm text-white font-medium leading-relaxed border-l-2 border-white/20 pl-3">
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