"use client";

import { Factory, ArrowRight } from "lucide-react";
import { MANUFACTURING_OVERVIEW_DATA } from "../data/MANUFACTURING_OVERVIEW_DATA";
import SectionHeader from "@/components/common/SectionHeader";

export default function ManufacturingOverview() {
  const { overview, challenges, expertise } = MANUFACTURING_OVERVIEW_DATA;

  return (
    <section className="bg-white font-sora overflow-hidden">
      
      {/* --- Part 1: Industry Overview (Clean Split) --- */}
      <div className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <SectionHeader 
                badge="Industry Context"
                title={overview.title.split(" & ")[0]}
                highlight={overview.title.split(" & ")[1] || "Manufacturing"}
                centered={false}
              />
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              {overview.paragraphs.map((para, index) => (
                <p key={index} className="text-lg text-slate-500 font-medium leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- Part 2: Critical Challenges (Pedestal Grid) --- */}
      <div className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader 
            title={challenges.title}
            description="Navigating the complexities of modern industrial environments."
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {challenges.items.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden flex flex-col hover:-translate-y-2"
              >
                {/* Top Reveal Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#2776ea] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-6 h-14 w-14 rounded-2xl bg-slate-50 text-[#2776ea] flex items-center justify-center group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-500 shadow-sm">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Part 3: Expertise & Stats (Modern Bento) --- */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-[#2776ea] rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
            
            {/* Ambient Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#76ea27]/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <SectionHeader 
                  badge="Proven Results"
                  title={expertise.title}
                  description={expertise.description}
                  centered={false}
                  isWhite={true}
                />
                <div className="h-px w-24 bg-gradient-to-r from-[#76ea27] to-transparent my-10" />
                <p className="font-black text-xl tracking-tight">
                  {expertise.resultsTitle}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {expertise.results.map((res, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all group">
                    <div className="shrink-0 h-14 w-14 rounded-2xl bg-white text-[#2776ea] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <res.icon size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white leading-tight mb-1">
                        {res.value}
                      </p>
                      <p className="text-xs text-blue-100 font-bold uppercase tracking-widest opacity-80">
                        {res.text}
                      </p>
                    </div>
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