"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { MEDIA_CMS_STREAMING_DATA } from "../data/MEDIA_CMS_STREAMING_DATA";

export default function MediaCmsStreaming() {
  const { cms, live, music, stack } = MEDIA_CMS_STREAMING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: CONTENT MANAGEMENT SYSTEMS (CMS/DAM) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {cms.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-lg">
              {cms.subTitle}
            </p>
          </div>

          {/* DAM Features Grid */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-sm mb-12">
            <div className="mb-10 text-center">
              <h3 className="text-2xl font-black text-slate-900 mb-2">{cms.damFeatures.title}</h3>
              <p className="text-slate-600">{cms.damFeatures.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cms.damFeatures.sections.map((section, index) => {
                const isMetadata = section.title.includes("Metadata");
                
                return (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-[#2776ea]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-[#2776ea]/10 text-white">
                        <section.icon size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900">{section.title}</h4>
                    </div>
                    {/* Trigger Image for Metadata context */}
                    {isMetadata && (
                      <div className="mb-4 text-xs text-slate-400 italic">
                        
                      </div>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platforms & Integration */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
              <h4 className="font-bold text-lg text-slate-900 mb-6 border-b-2 border-[#2776ea] pb-2 inline-block">
                {cms.platforms.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {cms.platforms.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-bold text-slate-700 border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
              <h4 className="font-bold text-lg text-slate-900 mb-6 border-b-2 border-[#76ea27] pb-2 inline-block">
                {cms.integration.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {cms.integration.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-bold text-slate-700 border border-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: LIVE STREAMING (Split Layout) --- */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {live.title} 


            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Infrastructure */}
            <div>
              <h3 className="text-2xl font-black text-[#2776ea] mb-8">
                {live.infrastructure.title}
              </h3>
              <div className="space-y-8">
                {live.infrastructure.categories.map((cat, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <cat.icon className="text-white" size={24} />
                      <h4 className="font-bold text-lg text-slate-900">{cat.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Use Cases */}
            <div>
              <h3 className="text-2xl font-black text-[#76ea27] mb-8">
                {live.useCases.title}
              </h3>
              <div className="grid gap-6">
                {live.useCases.cases.map((useCase, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27] font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2">
                        {useCase.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {useCase.items.map((item, i) => (
                          <span key={i} className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
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

      {/* --- PART 3: MUSIC STREAMING (Dark Theme) --- */}
      <div className="bg-primary py-24 text-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {music.title}
            </h2>
          </div>

          {/* Platform Development */}
          <div className="mb-20">
            <h3 className="text-2xl font-black mb-10 text-center text-blue-200">
              {music.platform.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {music.platform.features.map((feat, index) => {
                 const isRecommendation = feat.title.includes("Recommendation");
                 return (
                  <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-[#2776ea]/20 text-white">
                        <feat.icon size={24} />
                      </div>
                      <h4 className="font-bold text-xl">{feat.title}</h4>
                    </div>
                    
                    {/* Trigger for Recommendation Algo Image */}
                    {isRecommendation && (
                      <div className="mb-4 text-xs text-blue-300 italic opacity-80">
                        
                      </div>
                    )}

                    <ul className="space-y-3">
                      {feat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                 );
              })}
            </div>
          </div>

          {/* Distribution */}
          <div className="bg-gradient-to-r from-[#2776ea]/20 to-[#76ea27]/20 p-10 md:p-16 rounded-[3rem] border border-white/10">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-black mb-4">{music.distribution.title}</h3>
                <p className="text-lg font-bold text-[#76ea27] mb-6">
                  {music.distribution.subTitle}
                </p>
                <div className="space-y-4">
                  {music.distribution.platforms.map((plat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-black/20 p-4 rounded-xl border border-white/5">
                      <ArrowRight className="text-[#2776ea] shrink-0" />
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
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-200">
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

      {/* --- PART 4: TECHNOLOGY STACK (Clean Grid) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {stack.title} 
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stack.categories.map((cat, index) => (
              <div key={index} className="p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 text-primary">
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