"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ExternalLink, ChevronRight, ArrowUpRight, LayoutGrid } from "lucide-react";
import { Category, projectData } from "./data";

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
        <div className="relative z-10 mb-16 lg:mb-24 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Our Technical & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776ea] to-cyan-500">
              Creative Impact
            </span>
          </h2>
          <p className="text-slate-500 text-base lg:text-lg font-medium max-w-2xl leading-relaxed">
            From industrial automation to high-conversion retail, we build
            digital architectures that drive tangible business growth.
          </p>
        </div>

        {/* --- PROFESSIONAL SPLIT LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: PROFESSIONAL SIDEBAR NAVIGATION */}
          <div className="lg:w-1/4 flex-shrink-0">
             <div className="lg:sticky lg:top-32">
                
                {/* Desktop Title */}
                <div className="hidden lg:flex items-center gap-2 mb-6 text-slate-400">
                    <LayoutGrid size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Filter By Sector</span>
                </div>

                {/* TAB CONTAINER */}
                <div
                  ref={scrollRef}
                  className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1"
                >
                  {projectData.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`group relative flex items-center justify-between transition-all duration-300
                        /* Mobile Styles (Pills) */
                        px-5 py-2.5 rounded-full min-w-max border
                        /* Desktop Styles (List Items) */
                        lg:w-full lg:px-5 lg:py-4 lg:rounded-xl lg:border-0
                        ${
                          activeTab === category.id
                            ? "bg-[#2776ea] text-white border-[#2776ea] shadow-md shadow-blue-500/20 lg:bg-white lg:text-[#2776ea] lg:shadow-xl lg:shadow-slate-200/50"
                            : "bg-white text-slate-500 border-slate-200 lg:bg-transparent lg:border-transparent hover:lg:bg-white hover:lg:shadow-sm"
                        }
                      `}
                    >
                      {/* Active Indicator Bar (Desktop Only) */}
                      {activeTab === category.id && (
                        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#2776ea] rounded-r-full" />
                      )}

                      <div className="flex items-center gap-3">
                         <category.icon 
                          size={18} 
                          className={`transition-colors ${
                             // Mobile: White when active. Desktop: Blue when active.
                             activeTab === category.id 
                                ? "text-white lg:text-[#2776ea]" 
                                : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        />
                        <span className="text-sm font-bold tracking-wide">
                          {category.title}
                        </span>
                      </div>
                      
                      {/* Count Badge */}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                          activeTab === category.id
                            ? "bg-white/20 text-white lg:bg-[#2776ea]/10 lg:text-[#2776ea]"
                            : "hidden lg:block bg-slate-100 text-slate-400"
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
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
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
                      className="group relative flex aspect-square flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 hover:border-[#2776ea]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden"
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