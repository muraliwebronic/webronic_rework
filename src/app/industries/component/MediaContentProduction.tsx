"use client";

import { CheckCircle2, Video } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MEDIA_CONTENT_PRODUCTION_DATA } from "../data/MEDIA_CONTENT_PRODUCTION_DATA";

export default function MediaContentProduction() {
  const { header, videoEditing, virtualProduction, aiVoice } = MEDIA_CONTENT_PRODUCTION_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: AI VIDEO EDITING (Light Theme) --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            badge={header.section}
            title={header.title}
            highlight={header.subTitle}
            description={header.description}
            centered={true}
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoEditing.categories.map((cat, index) => {
              const isBlue = cat.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

              return (
                <div 
                  key={index}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-[#2776ea]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${iconBg} ${accentColor}`}>
                      <cat.icon size={28} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">
                      {cat.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 ${isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]"}`} />
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

      {/* --- PART 2: VIRTUAL PRODUCTION (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <SectionHeader isWhite title={virtualProduction.title} centered={true} className="mb-16" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LED Volume Section (White Card) */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-slate-900">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-[#2776ea]/10 text-[#2776ea]">
                  <virtualProduction.ledVolume.icon size={32} />
                </div>
                <h3 className="text-2xl font-black leading-tight">
                  {virtualProduction.ledVolume.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {virtualProduction.ledVolume.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                    <CheckCircle2 className="text-[#2776ea] shrink-0" />
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
                  <div key={i} className="bg-white/10 p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md">
                    <benefit.icon className="text-[#76ea27] mb-4" size={28} />
                    <p className="font-bold text-white leading-snug text-lg">
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
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <SectionHeader title={aiVoice.title} centered={true} className="mb-20" />

          <div className="grid md:grid-cols-3 gap-8">
            {aiVoice.columns.map((col, index) => {
              const isCenter = index === 1;
              return (
                <div 
                  key={index} 
                  className={`p-8 rounded-[2.5rem] border transition-all duration-300 hover:shadow-xl ${isCenter ? "bg-white border-[#2776ea]/30 shadow-lg" : "bg-white border-slate-200"}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                      <col.icon size={28} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">
                      {col.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
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