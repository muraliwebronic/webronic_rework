"use client";

import { Quote, Heart, User } from "lucide-react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function LifeAtWebronic() {
  const { lifeAtWebronic } = CAREERS_DATA;

  return (
    <div className="font-sora overflow-hidden">
      
      {/* --- STORIES SECTION (Light) --- */}
      <section className="bg-slate-50 py-24 relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <SectionHeader 
             badge={lifeAtWebronic.header.badge}
             title={lifeAtWebronic.header.title}
             description={lifeAtWebronic.header.description}
             centered={true}
             className="max-w-3xl mx-auto mb-20"
          />

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {lifeAtWebronic.stories.map((story, index) => {
              const isBlue = story.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

              return (
                <div 
                  key={index}
                  className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group"
                >
                  {/* Top Bar / Avatar Area */}
                  <div className="p-8 pb-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center ${accentColor} transition-transform group-hover:scale-110`}>
                        <story.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-slate-900 leading-none mb-1">{story.name}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{story.role}</p>
                        <p className="text-[10px] font-medium text-slate-400 mt-1">{story.tenure}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 flex-grow">
                    <div className="relative">
                      <Quote className="absolute -top-3 -left-2 text-slate-100 w-10 h-10 -z-10" fill="currentColor" />
                      <p className="text-sm text-slate-600 leading-relaxed italic mb-8 relative z-10">
                        "{story.content}"
                      </p>
                    </div>
                  </div>

                  {/* Footer (What I Love) */}
                  <div className="mt-auto bg-slate-50/50 p-8 border-t border-slate-100/50">
                    <div className="flex items-start gap-3">
                      <Heart className={`shrink-0 w-5 h-5 ${accentColor} mt-0.5 fill-current opacity-80`} />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">What I Love</p>
                        <p className="text-xs font-bold text-slate-700 leading-relaxed">
                          {story.love}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS STRIP (Primary Blue Mode) --- */}
      <section className="bg-[#2776ea] py-24 text-white relative overflow-hidden">
        
        {/* Background Decor (Subtle White/Green Blobs) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {lifeAtWebronic.testimonials.map((item, index) => (
              <div key={index} className="px-6 py-8 md:py-0 text-center md:text-left">
                
                {/* Icon Circle */}
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 border border-white/20 text-white shadow-sm">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                
                {/* Quote text - Using blue-50 for high legibility */}
                <p className="text-lg font-medium leading-relaxed mb-8 text-blue-50">
                  "{item.text}"
                </p>
                
                {/* Author Block */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/10">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.author}</p>
                    <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}