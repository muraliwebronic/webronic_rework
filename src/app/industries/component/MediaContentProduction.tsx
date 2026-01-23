"use client";

import { CheckCircle2, Video } from "lucide-react";
// Using the requested relative path
import { MEDIA_CONTENT_PRODUCTION_DATA } from "../data/MEDIA_CONTENT_PRODUCTION_DATA";

export default function MediaContentProduction() {
  const { header, videoEditing, virtualProduction, aiVoice } = MEDIA_CONTENT_PRODUCTION_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: AI VIDEO EDITING (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              {header.section}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {header.title}
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm inline-block">
              
              <h3 className="text-2xl font-black text-[#76ea27] mb-2 mt-6">
                {header.subTitle}
              </h3>
              <p className="text-lg text-slate-600 font-medium">
                {header.description}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoEditing.categories.map((cat, index) => {
              const isBlue = cat.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
              const hoverBorder = isBlue ? "hover:border-[#2776ea]/30" : "hover:border-[#76ea27]/30";

              return (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${hoverBorder} ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${iconBg} ${accentColor}`}>
                      <cat.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {cat.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]"}`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* --- PART 2: VIRTUAL PRODUCTION (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        {/* Background Decor */}
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {virtualProduction.title} 
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-lg">
              {virtualProduction.subTitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LED Volume Section */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                  <virtualProduction.ledVolume.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {virtualProduction.ledVolume.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {virtualProduction.ledVolume.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-slate-300">
                    <CheckCircle2 className="text-[#76ea27] shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div>
              <h3 className="text-2xl font-black text-white mb-8 pl-4 border-l-4 border-[#76ea27]">
                {virtualProduction.benefits.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {virtualProduction.benefits.items.map((benefit, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <benefit.icon className="text-[#76ea27] mb-4" size={24} />
                    <p className="font-bold text-slate-200 leading-snug">
                      {benefit.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 3: AI VOICE & DEEPFAKE (Clean Grid) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex items-center gap-4 mb-16 justify-center md:justify-start">
             <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              {aiVoice.title} 
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiVoice.columns.map((col, index) => {
              // Styling based on column type
              let bgClass = "bg-slate-50 border-slate-100";
              let iconColor = "text-[#2776ea]";
              
              if (index === 2) { // Regulatory Compliance
                bgClass = "bg-[#2776ea]/5 border-[#2776ea]/20";
                iconColor = "text-slate-900";
              }

              return (
                <div 
                  key={index} 
                  className={`p-8 rounded-[2rem] border ${bgClass} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-white shadow-sm ${iconColor}`}>
                      <col.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {col.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
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