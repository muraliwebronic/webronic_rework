"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ArrowUpRight, X, Layers } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { type Service } from "@/app/service/components/data";

interface PageServiceCardProps {
  service: Service;
  index: number;
  onCtaClick: (service: Service) => void;
}

export const PageServiceCard = ({ service, index, onCtaClick }: PageServiceCardProps) => {
  const [showStack, setShowStack] = useState(false);

  return (
    <div
      style={{ animationDelay: `${index * 150}ms` }}
      className="group relative w-full rounded-[2.5rem] bg-white border border-slate-100 p-2 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:border-[var(--color-primary)]/20 font-sora animate-in slide-in-from-bottom-8 fade-in"
    >
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* --- LEFT: CONTENT SIDE --- */}
        <div className="flex-1 p-8 md:p-10 flex flex-col relative z-10">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-slate-50 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500">
              {service.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-100 px-3 py-1 rounded-full">
              {service.tagline}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
            {service.title}
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-lg line-clamp-3">
            {service.description}
          </p>

          {/* Checkpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
            {service.points.slice(0, 4).map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-[var(--color-secondary)]" strokeWidth={3} />
                </div>
                <span className="text-sm font-bold text-slate-700">
                    {point}
                </span>
              </div>
            ))}
          </div>

          {/* --- BOTTOM ACTION BAR --- */}
          <div className="mt-auto pt-6 border-t border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
             
             {/* 1. INTERACTIVE STACK TRIGGER */}
             <button 
                onClick={(e) => { e.stopPropagation(); setShowStack(!showStack); }}
                className="flex items-center gap-3 group/stack focus:outline-none"
             >
                <div className="flex -space-x-3 transition-all duration-300 group-hover/stack:space-x-1">
                    {service.technologies.slice(0, 3).map((t, i) => (
                        <div key={i} className="w-9 h-9 rounded-full bg-white border border-slate-100 p-1.5 shadow-sm relative z-0 transition-transform hover:scale-110 hover:z-10">
                             <img src={t.logo} alt={t.name} className="w-full h-full object-contain opacity-80" />
                        </div>
                    ))}
                    <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 z-10 group-hover/stack:bg-[var(--color-primary)] group-hover/stack:text-white transition-colors">
                        +{service.technologies.length > 3 ? service.technologies.length - 3 : ""}
                    </div>
                </div>
                
                <div className="flex flex-col items-start">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/stack:text-[var(--color-primary)] transition-colors">
                        {showStack ? "Hide Stack" : "View Stack"}
                    </span>
                    <span className="text-[9px] font-medium text-slate-300 group-hover/stack:text-[var(--color-primary)]/60">
                        Tap to toggle
                    </span>
                </div>
             </button>

             {/* 2. EXPLORE BUTTON */}
             <button 
               onClick={() => onCtaClick(service)}
               className="flex items-center gap-4 group/btn"
             >
               <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover/btn:text-slate-900 transition-colors">
                  Explore
               </span>
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all duration-500 group-hover/btn:bg-[var(--color-primary)] group-hover/btn:text-white group-hover/btn:rotate-45 shadow-sm">
                  <ArrowUpRight size={18} />
               </div>
             </button>
          </div>
        </div>

        {/* --- RIGHT: INTERACTIVE PEDESTAL --- */}
        <div className="lg:w-[45%] relative min-h-[360px] lg:min-h-auto bg-slate-50/50 rounded-[2rem] overflow-hidden flex items-center justify-center m-1 border border-slate-100/50 perspective-1000">
            
            {/* Background Effects */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-32 h-6 bg-blue-900/5 blur-xl rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-blue-900/10 group-hover:blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <AnimatePresence mode="wait">
                {showStack ? (
                    /* STATE B: TECH GRID (The Reveal) */
                    <motion.div 
                        key="stack"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-30 w-full h-full flex flex-col pt-6 px-6 pb-2"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4 px-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                                Powered By
                            </span>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setShowStack(false); }} 
                                className="p-2 bg-white rounded-full hover:bg-slate-100 border border-slate-100 text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                            >
                                <X size={14} />
                            </button>
                        </div>

                        {/* Scrollable Container with Gradient Masks */}
                        <div className="relative flex-1 overflow-hidden">
                            {/* Top Fade Mask */}
                            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-slate-50/90 to-transparent z-10 pointer-events-none" />
                            
                            {/* The List */}
                            <div className="h-full overflow-y-auto custom-scrollbar px-1 py-2">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pb-8">
                                    {service.technologies.map((t) => (
                                        <div key={t.name} className="flex items-center gap-3 p-2.5 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-[var(--color-primary)]/30 hover:shadow-md hover:-translate-y-0.5 transition-all group/card cursor-default">
                                            {/* Minimal Icon Box */}
                                            <div className="w-8 h-8 p-1.5 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 group-hover/card:bg-white group-hover/card:scale-110 transition-all">
                                                <img src={t.logo} alt={t.name} className="w-full h-full object-contain" />
                                            </div>
                                            {/* Text */}
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-slate-700 group-hover/card:text-[var(--color-primary)] transition-colors leading-tight">
                                                    {t.name}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Bottom Fade Mask (The "Swipe Hint") */}
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none flex items-end justify-center pb-2">
                                <div className="w-8 h-1 bg-slate-200 rounded-full opacity-50" />
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* STATE A: SERVICE IMAGE (Default) */
                    <motion.div
                        key="image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.4 }}
                        className="relative w-64 h-64 lg:w-72 lg:h-72 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-6 group-hover:scale-105 group-hover:rotate-2 z-20"
                    >
                         <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>


      </div>
    </div>
  );
};