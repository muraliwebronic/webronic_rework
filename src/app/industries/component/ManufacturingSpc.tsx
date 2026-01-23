"use client";

import { CheckCircle2, AlertTriangle, Sigma } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_SPC_DATA } from "../data/MANUFACTURING_SPC_DATA";

export default function ManufacturingSpc() {
  const { header, fundamentals, charts, interpretation, automation } = MANUFACTURING_SPC_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: FUNDAMENTALS --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            badge="Methodology"
            title={header.title}
            highlight={header.subTitle}
            description={header.description}
            centered={true}
            className="mb-20"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {charts.categories.map((cat, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-[#2776ea]/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white text-[#2776ea] border border-slate-100">
                    <cat.icon size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{cat.title}</h4>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i}>
                      <p className="text-sm font-bold text-slate-900 mb-1">{item.name}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PART 2: INTERPRETATION (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={interpretation.title} centered={true} className="mb-20" />

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl text-slate-900">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Control Limits</h3>
              <div className="space-y-4">
                {interpretation.limits.map((limit, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${limit.color === "red" ? "text-red-500" : "text-[#76ea27]"}`}>
                      {limit.label}
                    </p>
                    <p className="text-xl font-mono font-black text-slate-900">{limit.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem]">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="text-[#76ea27]" />
                  <h3 className="text-xl font-bold text-white">{interpretation.signals.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {interpretation.signals.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-blue-50 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-white mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{interpretation.actions.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {interpretation.actions.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold text-white w-5 h-5 flex items-center justify-center bg-[#2776ea] rounded-full">{i + 1}</span>
                      <span className="text-sm font-bold text-slate-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 3: AUTOMATION --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">{automation.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automation.sections.map((sec, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <sec.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{sec.title}</h3>
                </div>
                <ul className="space-y-3">
                  {sec.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-relaxed font-medium">
                      • {item}
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