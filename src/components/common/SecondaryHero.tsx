"use client";

import React from "react";
import { motion } from "framer-motion";

interface SecondaryHeroProps {
  title: string;
  highlight: string;
  description: string;
  tag?: string;
  className?: string;
  centered?: boolean;
}

export default function SecondaryHero({ 
  title, 
  highlight, 
  description, 
  tag = "Our Expertise",
  className,
  centered = true // Default to centered since visual is removed
}: SecondaryHeroProps) {
  
  return (
    <section 
      className={`relative w-full flex items-center justify-center overflow-hidden font-sora pt-32 pb-12 lg:pt-40 lg:pb-20 ${className || "min-h-[40vh]"}`}
    >
      {/* --- BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
         {/* Base Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-white" />
         
         {/* Angular Accents */}
         <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-gradient-to-b from-[#2776ea]/5 to-transparent blur-3xl opacity-60" />
         <div className="absolute bottom-0 left-0 w-[50%] h-[80%] bg-gradient-to-t from-[#76ea27]/5 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* --- NEW BADGE (From your snippet) --- */}
          {tag && (
            <motion.div 
               initial={{ opacity: 0, y: 10 }} 
               animate={{ opacity: 1, y: 0 }} 
               className={`flex items-center gap-3 mb-6 uppercase tracking-[0.2em] text-xs lg:text-sm font-bold font-sora ${centered ? "justify-center" : "justify-start"}`}
            >
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#2776ea] to-transparent rounded-full" />
              <span className="text-[#2776ea]">{tag}</span>
              {centered && <span className="w-8 h-[2px] bg-gradient-to-l from-[#2776ea] to-transparent rounded-full" />}
            </motion.div>
          )}

          {/* --- TITLE --- */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl/tight font-black text-slate-900 tracking-tighter mb-6"
          >
            {title} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#2776ea] to-cyan-500 bg-clip-text text-transparent">
              {highlight}
            </span>
          </motion.h1>

          {/* --- DESCRIPTION --- */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
        </div>
      </div>
    </section>
  );
}