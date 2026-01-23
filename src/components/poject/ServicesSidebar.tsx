"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ExternalLink, ChevronRight, LayoutGrid, ArrowUpRight } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServiceCardData } from "../services/PageServiceCard";

interface ServicesSidebarProps {
  services: ServiceCardData[];
}

export default function ServicesSidebar({ services }: ServicesSidebarProps) {
  // Default to the first service
  const [activeTab, setActiveTab] = useState<string>(services[0]?.id || "");
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeContent = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 font-sora border-b border-slate-200">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="relative z-10 mb-16 lg:mb-24 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Core <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776ea] to-cyan-500">
              Technical Domains
            </span>
          </h2>
          <p className="text-slate-500 text-base lg:text-lg font-medium max-w-2xl leading-relaxed">
            Our primary areas of expertise, engineered to drive tangible business growth and digital transformation.
          </p>
        </div>

        {/* --- SIDEBAR SPLIT LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: SIDEBAR NAVIGATION */}
          <div className="lg:w-1/4 flex-shrink-0">
             <div className="lg:sticky lg:top-32">
                
                {/* Desktop Title */}
                <div className="hidden lg:flex items-center gap-2 mb-6 text-slate-400">
                    <LayoutGrid size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Select Domain</span>
                </div>

                {/* TAB CONTAINER */}
                <div
                  ref={scrollRef}
                  className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1"
                >
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      className={`group relative flex items-center justify-between transition-all duration-300
                        /* Mobile Styles (Pills) */
                        px-5 py-2.5 rounded-full min-w-max border
                        /* Desktop Styles (List Items) */
                        lg:w-full lg:px-5 lg:py-4 lg:rounded-xl lg:border-0
                        ${
                          activeTab === service.id
                            ? "bg-[#2776ea] text-white border-[#2776ea] shadow-md shadow-blue-500/20 lg:bg-white lg:text-[#2776ea] lg:shadow-xl lg:shadow-slate-200/50"
                            : "bg-white text-slate-500 border-slate-200 lg:bg-transparent lg:border-transparent hover:lg:bg-white hover:lg:shadow-sm"
                        }
                      `}
                    >
                      {/* Active Indicator Bar (Desktop Only) */}
                      {activeTab === service.id && (
                        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#2776ea] rounded-r-full" />
                      )}

                      <div className="flex items-center gap-3">
                          <div className={`transition-colors ${activeTab === service.id ? "text-white lg:text-[#2776ea]" : "text-slate-400 group-hover:text-slate-600"}`}>
                             <DynamicIcon name={service.icon} size={18} />
                          </div>
                        <span className="text-sm font-bold tracking-wide">
                          {service.title}
                        </span>
                      </div>
                      
                      {/* Count Badge (Tech Stack Count) */}
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md transition-colors ${
                          activeTab === service.id
                            ? "bg-white/20 text-white lg:bg-[#2776ea]/10 lg:text-[#2776ea]"
                            : "hidden lg:block bg-slate-100 text-slate-400"
                      }`}>
                          {service.technologies.length}
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

          {/* RIGHT: CONTENT AREA */}
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
                  
                  {/* EXPLORE LINK */}
                  <Link 
                    href={`/services?category=${activeContent.id}`}
                    className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2776ea]/10 border border-[#2776ea]/20 text-[#2776ea] text-[10px] font-black uppercase tracking-widest whitespace-nowrap hover:bg-[#2776ea] hover:text-white transition-all"
                  >
                        Explore Service <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* CARDS GRID (Displaying Technologies) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {activeContent?.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="group relative flex aspect-square flex-col items-center justify-center bg-white rounded-2xl border border-slate-100 hover:border-[#2776ea]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#2776ea]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                      
                      {/* Tech Logo */}
                      <div className="relative z-10 w-1/2 h-1/2 transition-transform duration-500 group-hover:scale-110 mb-2">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-wide">
                        {tech.name}
                      </span>
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