"use client";

import { CheckCircle2, PlayCircle, ArrowRight } from "lucide-react";
import { MEDIA_STREAMING_DATA } from "../data/MEDIA_STREAMING_DATA";

export default function MediaStreaming() {
  const { header, infrastructure, features, monetization, recommendation, analytics, techStack } = MEDIA_STREAMING_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: HEADER & INFRASTRUCTURE (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-[#2776ea] font-bold uppercase tracking-widest text-sm mb-4 block">
              {header.section}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {header.title}
            </h2>
            <h3 className="text-xl font-bold text-slate-700 mb-4">
              {header.subTitle}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* Infrastructure Grid */}
          <div className="mb-24">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {infrastructure.title} 
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {infrastructure.steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                      <step.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 leading-tight">
                      {step.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Features */}
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-black text-slate-900 mb-10 text-center">
              {features.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              {features.categories.map((cat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-2xl bg-[#76ea27]/10 text-[#76ea27]">
                      <cat.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      {cat.title}
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <PlayCircle size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-700 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: MONETIZATION & AI (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="mb-24">
            <h2 className="text-3xl font-black mb-16 text-center">
              {monetization.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {monetization.models.map((model, index) => {
                const isBlue = model.color === "blue";
                const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
                const bgIcon = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
                
                return (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                    <div className={`p-3 rounded-xl ${bgIcon} w-fit mb-6 ${accentColor}`}>
                      <model.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-4 leading-tight min-h-[56px]">
                      {model.type}
                    </h3>
                    <ul className="space-y-3">
                      {model.details.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-300 leading-relaxed border-l-2 border-white/10 pl-3">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendation Engine */}
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black mb-4">{recommendation.title}</h2>
                <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">
                  {recommendation.subTitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {recommendation.methods.map((method, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-white mb-4 border-b border-white/20 pb-2">
                      {method.title}
                    </h4>
                    <ul className="space-y-2">
                      {method.items.map((item, i) => (
                        <li key={i} className="text-sm text-blue-50 leading-snug">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <ArrowRight size={20} /> Impact Metrics
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {recommendation.impact.map((imp, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#76ea27] shrink-0" />
                      <span className="text-sm font-bold text-white">{imp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 3: ANALYTICS & TECH STACK (Clean Grid) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Analytics */}
          <div className="mb-24">
            <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">
              {analytics.title} 
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {analytics.categories.map((cat, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-[#2776ea] transition-colors group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea] group-hover:text-[#76ea27] transition-colors">
                      <cat.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{cat.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 group-hover:bg-[#2776ea]" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">
              {techStack.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.layers.map((layer, index) => (
                <div key={index} className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4 text-[#2776ea]">
                    <layer.icon size={24} />
                    <h3 className="font-bold text-lg text-slate-900">{layer.layer}</h3>
                  </div>
                  <ul className="space-y-2">
                    {layer.tools.map((tool, i) => (
                      <li key={i} className="text-sm text-slate-600 leading-snug">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}