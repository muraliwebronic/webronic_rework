"use client";

import { CheckCircle2, ArrowRight, PlayCircle } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { MEDIA_CMS_STREAMING_DATA } from "../data/MEDIA_CMS_STREAMING_DATA";

export default function MediaCmsStreaming() {
  const { cms, live, music, stack } = MEDIA_CMS_STREAMING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: CMS (Light Theme) --- */}
      <div className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader 
            badge={cms.subTitle}
            title={cms.title}
            centered={true}
            className="mb-20"
          />

          {/* DAM Features */}
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-14 border border-slate-100 mb-16">
            <h3 className="text-2xl font-black text-slate-900 mb-4 text-center">{cms.damFeatures.title}</h3>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">{cms.damFeatures.description}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cms.damFeatures.sections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-[#2776ea] transition-colors shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[#2776ea]/10 text-[#2776ea]">
                      <section.icon size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900">{section.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-lg transition-all">
              <h4 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-[#2776ea]" /> {cms.platforms.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {cms.platforms.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-lg transition-all">
              <h4 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-[#76ea27]" /> {cms.integration.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {cms.integration.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-600 border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: LIVE STREAMING (Clean Split) --- */}
      <div className="bg-slate-50 py-24 lg:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader title={live.title} centered={true} className="mb-20" />

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-black text-[#2776ea] mb-8">{live.infrastructure.title}</h3>
              <div className="space-y-6">
                {live.infrastructure.categories.map((cat, index) => (
                  <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <cat.icon className="text-[#2776ea]" size={24} />
                      <h4 className="font-bold text-lg text-slate-900">{cat.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <div className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#76ea27] mb-8">{live.useCases.title}</h3>
              <div className="grid gap-6">
                {live.useCases.cases.map((useCase, index) => (
                  <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#76ea27] flex items-center justify-center text-white font-black">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{useCase.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.items.map((item, i) => (
                          <span key={i} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 3: MUSIC STREAMING (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 lg:py-32 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader isWhite title={music.title} centered={true} className="mb-20" />

          {/* Platform Development */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {music.platform.features.map((feat, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-xl text-slate-900">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                    <feat.icon size={24} />
                  </div>
                  <h4 className="font-bold text-xl">{feat.title}</h4>
                </div>
                <ul className="space-y-3">
                  {feat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Distribution */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-[3rem]">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-black mb-4">{music.distribution.title}</h3>
                <p className="text-lg font-bold text-[#76ea27] mb-6">{music.distribution.subTitle}</p>
                <div className="space-y-4">
                  {music.distribution.platforms.map((plat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                      <ArrowRight className="text-white shrink-0" />
                      <span className="font-medium">{plat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">
                  {music.distribution.services.title}
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {music.distribution.services.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-blue-50">
                      <CheckCircle2 size={16} className="text-[#76ea27] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 4: TECH STACK --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader title={stack.title} centered={true} className="mb-16" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stack.categories.map((cat, index) => (
              <div key={index} className="p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 text-[#2776ea]">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{cat.title}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.tools.map((tool, i) => (
                    <li key={i} className="text-sm text-slate-600 font-medium border-l-2 border-[#76ea27] pl-3 leading-snug">
                      {tool}
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