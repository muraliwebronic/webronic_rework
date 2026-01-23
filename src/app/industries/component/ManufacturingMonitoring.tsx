"use client";

import { CheckCircle2, AlertTriangle, Info, Settings, Clock, Activity } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MANUFACTURING_MONITORING_DATA } from "../data/MANUFACTURING_MONITORING_DATA";

export default function ManufacturingMonitoring() {
  const { sectionTitle, vibration, temperature, oil } = MANUFACTURING_MONITORING_DATA;

  return (
    <section className="font-sora overflow-hidden">
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader 
            badge="Asset Health"
            title={sectionTitle}
            centered={true}
            className="mb-24"
          />

          {/* --- 1. Vibration Analysis (Grid) --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                <vibration.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black text-slate-900">
                {vibration.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {vibration.columns.map((col, index) => (
                <div 
                  key={index}
                  className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-[#2776ea]/20 transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-[#2776ea] mb-6 border-b border-slate-200 pb-4">
                    {col.header}
                  </h4>
                  <ul className="space-y-4">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed font-medium">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* --- 2. Temperature Monitoring (Feature Card) --- */}
          <div className="mb-24 bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2776ea]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
                  <temperature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-black text-slate-900">
                  {temperature.title}
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 mb-16">
                {temperature.sections.map((sec, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-lg mb-6 text-slate-900 uppercase tracking-widest text-sm border-l-4 border-[#2776ea] pl-4">
                      {sec.title}
                    </h4>
                    <ul className="space-y-3">
                      {sec.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Thresholds Bar */}
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <AlertTriangle size={20} className="text-[#2776ea]" />
                  Operating Thresholds
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {temperature.thresholds.map((t, i) => {
                    let accentColor = "border-slate-300";
                    if (t.color === "yellow") accentColor = "border-l-4 border-yellow-400 bg-yellow-50";
                    if (t.color === "orange") accentColor = "border-l-4 border-orange-400 bg-orange-50";
                    if (t.color === "red") accentColor = "border-l-4 border-red-500 bg-red-50";

                    return (
                      <div key={i} className={`p-5 rounded-r-2xl ${accentColor}`}>
                        <p className="text-sm font-black text-slate-800 mb-1">{t.condition}</p>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-70">{t.action}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- 3. Oil Analysis (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 opacity-[0.08] text-white animate-spin-slow">
           <Settings size={400} />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16 text-white">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md">
              <oil.icon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black">
                {oil.title}
              </h3>
              <p className="text-blue-100 font-bold text-sm uppercase tracking-widest mt-1 opacity-80">
                {oil.subTitle}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Column 1: Wear Metals */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Settings size={18} className="text-[#76ea27]" /> Wear Metals
              </h4>
              <div className="space-y-4">
                {oil.wearMetals.map((item, i) => (
                  item.metal ? (
                    <div key={i} className="flex flex-col border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                      <span className="font-black text-[#2776ea] text-lg">{item.metal}</span>
                      <span className="text-xs text-slate-500 font-medium">{item.desc}</span>
                    </div>
                  ) : (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl mt-2">
                      <p className="text-xs font-bold text-[#2776ea] flex items-center gap-2">
                        <Info size={14} /> {item.note}
                      </p>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Column 2: Analysis Categories */}
            <div className="space-y-6">
              {oil.analysisCategories.map((cat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 text-white hover:bg-white/20 transition-colors">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-3">
                    <cat.icon size={20} className="text-[#76ea27]" /> {cat.title}
                  </h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm font-medium text-blue-50 flex items-start gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 3: Frequency */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
              <h4 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Clock size={18} className="text-[#2776ea]" /> {oil.frequency.title}
              </h4>
              <div className="space-y-8">
                {oil.frequency.items.map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-100">
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#76ea27] ring-4 ring-white" />
                    <p className="text-sm font-bold text-[#2776ea] mb-1">{item.type}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.timing}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}