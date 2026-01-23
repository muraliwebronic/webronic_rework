"use client";

import { 
  Quote, 
  Heart,
  User
} from "lucide-react";
import { LIFE_AT_WEBRONIC_DATA } from "../data/LIFE_AT_WEBRONIC_DATA";

export default function LifeAtWebronic() {
  const { header, stories, testimonials } = LIFE_AT_WEBRONIC_DATA;

  return (
    <div className="font-sora overflow-hidden">
      
      {/* --- STORIES SECTION --- */}
      <section className="bg-slate-50 py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#76ea27] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                {header.badge}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
              {header.title}
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              {header.description}
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {stories.map((story, index) => {
              const isBlue = story.color === "blue";
              const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
              const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
              const borderColor = isBlue ? "border-[#2776ea]" : "border-[#76ea27]";

              return (
                <div 
                  key={index}
                  className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
                >
                  {/* Top Bar / Avatar Area */}
                  <div className="p-8 pb-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`h-14 w-14 rounded-2xl ${iconBg} flex items-center justify-center ${accentColor}`}>
                        <story.icon size={28} />
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-slate-900">{story.name}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{story.role}</p>
                        <p className="text-[10px] font-medium text-slate-400 mt-1">{story.tenure}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-8 flex-grow">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-slate-100 w-8 h-8 -z-10" fill="currentColor" />
                      <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                        "{story.content}"
                      </p>
                    </div>
                  </div>

                  {/* Footer (What I Love) */}
                  <div className="mt-auto bg-slate-50 p-8 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <Heart className={`shrink-0 w-5 h-5 ${accentColor} mt-0.5 fill-current`} />
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">What I Love</p>
                        <p className="text-sm font-bold text-slate-700 leading-relaxed">
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

      {/* --- TESTIMONIALS STRIP (Dark Mode) --- */}
      <section className="bg-[#2776ea] py-20 text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 py-8 md:py-0 text-center md:text-left">
                <div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-[#76ea27]">
                  <item.icon size={20} />
                </div>
                <p className="text-lg font-medium leading-relaxed mb-6 text-slate-300">
                  "{item.text}"
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                    <User size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.author}</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{item.role}</p>
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