"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ExternalLink, ChevronRight, LayoutGrid } from "lucide-react";
import { Category, projectData } from "./data";
import SectionHeader from "@/components/common/SectionHeader"; 

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("Dynamic");
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeContent = projectData.find((cat) => cat.id === activeTab);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 font-sora"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="mb-20 lg:mb-28">
            <SectionHeader 
                badge="Portfolio"
                title="Our Technical &"
                highlight="Creative Impact"
                description="From industrial automation to high-conversion retail, we build digital architectures that drive tangible business growth."
                centered={false}
                className="max-w-3xl"
            />
        </div>

        {/* --- PROFESSIONAL SPLIT LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: PROFESSIONAL SIDEBAR NAVIGATION (Redesigned) */}
          <div className="lg:w-1/4 flex-shrink-0">
             <div className="lg:sticky lg:top-32">
                
                {/* Desktop Title */}
                <div className="hidden lg:flex items-center gap-2 mb-6 pl-1 text-slate-400">
                    <LayoutGrid size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Filter By Sector</span>
                </div>

                {/* TAB CONTAINER */}
                <div
                  ref={scrollRef}
                  className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1"
                >
                  {projectData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`group relative flex items-center justify-between transition-all duration-300 ease-out
                        px-5 py-2.5 rounded-full min-w-max border                        lg:w-full lg:px-4 lg:py-3.5 lg:rounded-xl lg:border
                        ${
                          activeTab === category.id
                            ? "bg-[#2776ea] text-white border-[#2776ea] shadow-md shadow-blue-500/25 "
                            : "bg-white text-slate-500 border-slate-200 hover:border-[#2776ea]/30 hover:bg-white hover:text-slate-700 hover:shadow-sm"
                        }
                      `}
                    >
                      {/* Active Indicator (Desktop) */}
                      {activeTab === category.id && (
                        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-white/30 rounded-r-full" />
                      )}

                      <div className="flex items-center gap-3">
                          <category.icon 
                          size={18} 
                          className={`transition-colors ${
                             activeTab === category.id 
                                ? "text-white" 
                                : "text-slate-400 group-hover:text-[#2776ea]"
                          }`}
                        />
                        <span className="text-sm font-bold tracking-wide">
                          {category.title}
                        </span>
                      </div>
                      
                      {/* Count Badge */}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                          activeTab === category.id
                            ? "bg-white/20 text-white"
                            : "hidden lg:block bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                      }`}>
                          {category.logos.length}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Mobile Swipe Hint */}
                <div className="lg:hidden flex items-center gap-1 mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest animate-pulse pl-2">
                  Swipe <ChevronRight size={10} />
                </div>
             </div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="lg:w-3/4 min-h-[500px]">
             <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full" key={activeTab}>
                
                {/* Category Meta */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      {activeContent?.title}
                    </h4>
                    <p className="text-sm text-slate-500 max-w-md font-medium leading-relaxed">
                      {activeContent?.description}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                        <span className="relative flex h-2 w-2 mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Live Projects
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {activeContent?.logos.map((logo, i) => (
                    <Link
                      key={i}
                      href={logo.link}
                      target="_blank"
                      className="group relative flex aspect-square flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 hover:border-[#2776ea]/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#2776ea]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                      
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                          <ExternalLink size={14} className="text-[#2776ea]" />
                      </div>

                      <div className="relative z-10 w-1/2 h-1/2 transition-transform duration-500 group-hover:scale-110">
                        <img
                          src={logo.image}
                          alt={logo.name}
                          className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      <div className="absolute bottom-4 opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#2776ea]">
                          View Case
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}