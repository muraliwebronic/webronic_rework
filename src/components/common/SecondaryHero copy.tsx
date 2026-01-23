"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Database,
  Layers
} from "lucide-react";

interface SecondaryHeroProps {
  title: string;
  highlight: string;
  description: string;
  tag?: string;
  className?: string; // Added for dynamic height control
}

export default function SecondaryHero({ 
  title, 
  highlight, 
  description, 
  tag = "Our Expertise",
  className
}: SecondaryHeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  // --- PHYSICS ENGINE (Matches Main Hero feel) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Stiffness 100 / Damping 25 gives a heavy, premium feel
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  // 3D Rotation limits
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  
  // Parallax Z-Depth simulation
  const zLayerBack = useTransform(mouseXSpring, [-0.5, 0.5], ["-25px", "25px"]);
  const zLayerMid = useTransform(mouseXSpring, [-0.5, 0.5], ["-12px", "12px"]);
  const zLayerFront = useTransform(mouseXSpring, [-0.5, 0.5], ["-6px", "6px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full flex items-center overflow-hidden font-sora perspective-[2000px] pt-32 pb-16 lg:pt-40 lg:pb-24 ${className || "min-h-[60vh]"}`}
    >
      {/* --- BACKGROUND SYSTEM (Synced with Main Hero) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
         {/* Base Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-white" />
         
         {/* Angular Accents (Subtler than Main Hero) */}
         <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-gradient-to-b from-[#2776ea]/5 to-transparent blur-3xl opacity-60" />
         <div className="absolute bottom-0 left-0 w-[50%] h-[80%] bg-gradient-to-t from-[#76ea27]/5 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* --- LEFT: CONTENT --- */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            
            {/* Tag Pill */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }} 
               animate={{ opacity: 1, y: 0 }} 
               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#2776ea]/20 shadow-sm mb-6"
            >
              <Layers size={12} className="text-[#2776ea]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {tag}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl/tight font-black text-slate-900 tracking-tighter mb-6"
            >
              {title} <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#2776ea] to-cyan-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-[#2776ea]/20 lg:pl-6"
            >
              {description}
            </motion.p>
          </div>

          {/* --- RIGHT: 3D SERVICE STACK --- */}
          <div className="flex-1 w-full max-w-[460px] h-[320px] relative perspective-[1000px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-[280px] h-[280px]"
            >
              
              {/* LAYER 1: BACK (Infrastructure) - Blue */}
              <motion.div 
                style={{ x: zLayerBack, z: -40 }}
                className="absolute top-0 right-4 w-[220px] h-[140px] bg-[#2776ea] rounded-2xl shadow-2xl flex items-center justify-center border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                <div className="flex items-center gap-2 text-white relative z-10">
                    <Database size={18} />
                    <span className="text-[11px] font-bold uppercase tracking-widest">Backend</span>
                </div>
              </motion.div>

              {/* LAYER 2: MIDDLE (Logic) - White Glass */}
              <motion.div 
                style={{ x: zLayerMid, z: 10 }}
                className="absolute top-[65px] left-[20px] w-[240px] h-[160px] bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-[0_20px_50px_-12px_rgba(39,118,234,0.15)] flex flex-col p-5"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-blue-50 rounded-lg text-[#2776ea]">
                            <Code2 size={16} />
                        </div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Logic</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    </div>
                </div>
                {/* Abstract Code Skeleton */}
                <div className="space-y-2.5 opacity-60">
                    <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                    <div className="h-1.5 w-1/2 bg-slate-200 rounded-full" />
                    <div className="h-1.5 w-5/6 bg-slate-200 rounded-full" />
                </div>
              </motion.div>

              {/* LAYER 3: FRONT (Mobile) - Dark & Lime Accent */}
              <motion.div 
                style={{ x: zLayerFront, z: 60 }}
                className="absolute bottom-[25px] right-[-10px] w-[170px] h-[90px] bg-slate-900 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-between px-5 border border-slate-700/50"
              >
                 <div className="flex flex-col">
                    <span className="text-[9px] text-slate-500 font-bold uppercase mb-1 tracking-wider">Status</span>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#76ea27] rounded-full animate-pulse" />
                        <span className="text-white text-[11px] font-bold tracking-wide">Online</span>
                    </div>
                 </div>
                 <div className="p-2 bg-white/5 rounded-xl text-[#76ea27] border border-white/5">
                    <Smartphone size={18} />
                 </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}