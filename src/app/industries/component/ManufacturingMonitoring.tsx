"use client";

import { CheckCircle2, AlertTriangle, Info, Settings,Clock } from "lucide-react";
import { MANUFACTURING_MONITORING_DATA } from "../data/MANUFACTURING_MONITORING_DATA";

export default function ManufacturingMonitoring() {
  const { sectionTitle, vibration, temperature, oil } = MANUFACTURING_MONITORING_DATA;

  return (
    <section className="bg-slate-50 py-24 font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Main Header --- */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            {sectionTitle}
          </h2>
          <div className="h-1.5 w-24 bg-[#2776ea] mx-auto rounded-full" />
        </div>

        {/* --- 1. Vibration Analysis --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
              <vibration.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              {vibration.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vibration.columns.map((col, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#2776ea]/20"
              >
                <h4 className="text-lg font-bold text-[#2776ea] mb-6 border-b border-slate-100 pb-4">
                  {col.header}
                </h4>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- 2. Temperature Monitoring --- */}
        <div className="mb-24 bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-lg shadow-slate-200/50">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
              <temperature.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              {temperature.title}
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {temperature.sections.map((sec, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg mb-6 text-slate-900 uppercase tracking-widest text-sm">
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
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle size={20} className="text-[#2776ea]" />
              Typical Thresholds
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {temperature.thresholds.map((t, i) => {
                let accentColor = "border-slate-300";
                if (t.color === "yellow") accentColor = "border-yellow-400 bg-yellow-50";
                if (t.color === "orange") accentColor = "border-orange-400 bg-orange-50";
                if (t.color === "red") accentColor = "border-red-500 bg-red-50";

                return (
                  <div key={i} className={`border-l-4 p-4 rounded-r-xl ${accentColor}`}>
                    <p className="text-sm font-bold text-slate-800 mb-1">{t.condition}</p>
                    <p className="text-xs font-bold uppercase tracking-wider opacity-70">{t.action}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- 3. Oil Analysis --- */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-slate-900 text-white">
              <oil.icon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                {oil.title}
              </h3>
              <p className="text-[#2776ea] font-bold text-sm uppercase tracking-widest mt-1">
                {oil.subTitle}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Column 1: Wear Metals (Chemical Style) */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Settings size={18} className="text-[#76ea27]" /> Wear Metals
              </h4>
              <div className="space-y-4">
                {oil.wearMetals.map((item, i) => (
                  item.metal ? (
                    <div key={i} className="flex flex-col border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                      <span className="font-black text-[#2776ea]">{item.metal}</span>
                      <span className="text-xs text-slate-500">{item.desc}</span>
                    </div>
                  ) : (
                    <div key={i} className="bg-[#2776ea]/5 p-3 rounded-lg mt-4">
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
                <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <cat.icon size={18} className="text-[#2776ea]" /> {cat.title}
                  </h4>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 3: Frequency & Timeline */}
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
              <h4 className="font-bold text-white mb-8 flex items-center gap-2">
                <Clock size={18} className="text-[#76ea27]" /> {oil.frequency.title}
              </h4>
              <div className="space-y-6">
                {oil.frequency.items.map((item, i) => (
                  <div key={i} className="relative pl-6 border-l border-white/20">
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#2776ea] border-2 border-slate-900" />
                    <p className="text-sm font-bold text-[#76ea27] mb-1">{item.type}</p>
                    <p className="text-xs text-slate-400">{item.timing}</p>
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