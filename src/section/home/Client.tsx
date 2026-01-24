"use client";

import { useState, useEffect, useRef } from "react";
import {BarChart3, Users } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { INDUSTRIES, LOGOS, TESTIMONIALS } from "@/AllData/Home/ClientsData";

// --- DATA ---



// --- TESTIMONIAL CARD ---
const TestimonialCard = ({ item }: { item: typeof TESTIMONIALS[0] }) => (
  <div className="group relative flex flex-col justify-end w-full h-full font-sora select-none">
    
    {/* Floating Avatar Box */}
    <div className="absolute -top-10 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2">
            <div className="text-lg md:text-xl font-black text-[#2776ea] bg-slate-50 w-full h-full rounded-2xl md:rounded-3xl flex items-center justify-center">
                {item.author.charAt(0)}
            </div>
        </div>
    </div>

    {/* Pedestal Base */}
    <div className="relative h-full bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 p-6 pt-12 md:p-8 md:pt-16 flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-900/5 group-hover:border-blue-100 overflow-hidden text-center">
        
        {/* Fake Floor Shadow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-blue-900/10 group-hover:blur-xl" />

        {/* Content */}
        <div className="relative z-10 mb-6 flex-1 flex items-center mt-4">
            <p className="text-xs md:text-sm font-medium text-slate-600 leading-relaxed italic line-clamp-4">
                "{item.text}"
            </p>
        </div>

        {/* Author */}
        <div className="relative z-10 mt-auto border-t border-slate-50 pt-4 w-full">
            <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#2776ea] transition-colors">
                {item.author}
            </h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                {item.role}
            </p>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </div>
);

// --- CAROUSEL CONTAINER ---
function TestimonialCarousel() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    useEffect(() => {
        let controls: any;
        const startAutoScroll = () => {
            if (isDragging || width === 0) return;
            controls = animate(x, -width, {
                duration: 25, // Slowed down slightly for better readability on mobile
                ease: "linear",
                repeat: Infinity,
                repeatType: "mirror", 
            });
        };
        startAutoScroll();
        return () => controls?.stop();
    }, [isDragging, width, x]);

    return (
        <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div 
                ref={carouselRef}
                // Reduced padding on mobile (py-12) vs desktop (py-24) to reduce whitespace
                className="flex gap-4 md:gap-8 py-12 md:py-24 pl-4 md:pl-0" 
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                style={{ x }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                whileTap={{ scale: 0.98 }}
            >
                {TESTIMONIALS.map((t, i) => (
                    <motion.div 
                        key={i} 
                        // Mobile: 85vw width for peek effect. Desktop: Fixed 340px
                        className="min-w-[85vw] md:min-w-[340px] h-[360px] md:h-[420px]" 
                    >
                        <TestimonialCard item={t} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Clients() {
  const half = Math.ceil(LOGOS.length / 2);
  const firstRow = LOGOS.slice(0, half);
  const secondRow = LOGOS.slice(half);

  return (
    <section id="client" className="relative overflow-hidden bg-white py-12 md:py-24 font-sora">
      <div className="absolute inset-0 pointer-events-none bg-slate-50/30" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 z-10">
        
        <SectionHeader 
         badge="clients"
          title="Trusted by"
          highlight="Industry Leaders"
          description="Empowering organizations worldwide with scalable, mission-critical digital infrastructure"
          centered={true}
          className="max-w-3xl mx-auto mb-12 md:mb-20"
        />

        {/* LOGO MARQUEE */}
        <div className="relative space-y-8 md:space-y-12 mb-16 md:mb-32">
          {/* Gradients to fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* Row 1 */}
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex w-max items-center gap-8 md:gap-16"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...firstRow, ...firstRow].map((src, i) => (
                <LogoCard key={`r1-${i}`} src={src} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden">
             <motion.div 
              className="flex w-max items-center gap-8 md:gap-16"
              animate={{ x: [-1000, 0] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            >
              {[...secondRow, ...secondRow].map((src, i) => (
                <LogoCard key={`r2-${i}`} src={src} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS & TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* LEFT: DEPLOYMENT STATS */}
          <div className="lg:col-span-5 relative pt-10 md:pt-16">
             <div className="group relative flex flex-col">
                <div className="absolute -top-10 left-0 right-0 z-20 flex justify-center pointer-events-none">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-2">
                        <BarChart3 size={28} className="text-[#2776ea] md:w-8 md:h-8" strokeWidth={1.5} />
                    </div>
                </div>

                <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 p-6 pt-16 md:p-8 md:pt-20 shadow-xl shadow-slate-200/40 overflow-hidden">
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900/5 blur-xl rounded-full" />

                    <div className="text-center mb-6 md:mb-8 relative z-10">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Deployment by Sector</h3>
                        <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Active Solutions</p>
                    </div>

                    <div className="space-y-5 md:space-y-6 relative z-10">
                        {INDUSTRIES.map((ind, i) => (
                            <div key={i} className="group/item">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <ind.icon size={16} className="text-slate-400 group-hover/item:text-[#2776ea] transition-colors" />
                                        <span className="text-[10px] md:text-xs font-bold text-slate-600 group-hover/item:text-slate-900 transition-colors uppercase tracking-wider">
                                            {ind.name}
                                        </span>
                                    </div>
                                    <span className="text-xs md:text-sm font-mono font-bold text-slate-900">
                                        {ind.percent}%
                                    </span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100/50">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${ind.percent}%` }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        className="h-full rounded-full bg-[#2776ea]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>

       {/* RIGHT: TESTIMONIALS CAROUSEL */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-8 mt-8 lg:mt-0">
             
             {/* FIX: Added 'relative z-30' to ensure this sits ABOVE the carousel gradients */}
             <div className="relative z-30 flex items-center justify-between mb-2 px-2">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[#2776ea]">
                       <Users size={20} />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">Executive Feedback</h3>
                </div>
                
             
             </div>

             {/* Carousel Wrapper */}
             <div className="w-full relative -mt-4 lg:-mt-16">
                 {/* LEFT FADE GRADIENT */}
                 <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-white to-transparent" />
                 
                 {/* RIGHT FADE GRADIENT */}
                 <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-white to-transparent" />
                 
                 <TestimonialCarousel />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function LogoCard({ src }: { src: string }) {
    return (
        <div className="relative h-8 w-24 md:h-10 md:w-28 transition-all duration-300 hover:scale-110 cursor-pointer">
            <Image src={src} alt="Client Logo" fill className="object-contain" />
        </div>
    );
}