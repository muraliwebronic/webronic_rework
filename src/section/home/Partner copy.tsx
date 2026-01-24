"use client";

import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type IntegrationItem = {
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
};

const ITEMS: IntegrationItem[] = [
  { 
    name: "24SJU", 
    description: "Healthcare simplified. Digital solutions for modern patient care", 
    image: "/assets/24sju-se.png", 
    link: "https://24-sju.se/",
    color: "#2776ea" 
  },
  { 
    name: "ValueFlow", 
    description: "AI-powered cross-platform diagramming and workflow visualization", 
    image: "/assets/images/valuechart.png", 
    link: "https://www.valueflowsoft.com/",
    color: "#76ea27" 
  },
  { 
    name: "Tanlux", 
    description: "Comprehensive ERP enabling 24/7 unmanned tanning studio operations", 
    image: "/assets/images/tanluxlogo.png", 
    link: "https://tanlux.se/",
    color: "#2776ea" 
  },
  { 
    name: "FP Analyzer", 
    description: "Real-time IoT monitoring tracking OEE and optimizing production", 
    image: "/assets/images/fpanalyzer.png", 
    link: "https://www.fpanalyzer.se/",
    color: "#76ea27"
  },
  { 
    name: "StoreTech", 
    description: "Cloud-native solution powering 150+ unmanned stores with AI checkout", 
    image: "/assets/images/storetech-logo1.png", 
    link: "https://store-tech.se/",
    color: "#2776ea"
  },
  { 
    name: "ThingsAtWeb", 
    description: "The Internet of Things, realized. Connecting devices smarter", 
    image: "/assets/images/thingsatweb.png", 
    link: "https://www.thingsatweb.com/",
    color: "#76ea27"
  },
];

export default function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section  className="bg-primary py-24 lg:py-32 font-sora" id="Partners"> 
      <div className="mx-auto max-w-7xl px-6">
        
        <div ref={containerRef} className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN: STICKY HEADER --- */}
          {/* This stays pinned while the right side scrolls */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
             <SectionHeader
              isWhite
              badge="Partners"
              title="Strategic Partners"
              highlight="Our Ecosystem"
              description="A curated network of industry leaders powering our solutions. We integrate seamlessly with top-tier platforms to deliver holistic results"
              centered={false}
              className="mb-8"
            />
            
            {/* Optional decorative element or extra CTA could go here */}
          </div>

          {/* --- RIGHT COLUMN: SCROLLING CARDS --- */}
          <div className="lg:col-span-7 relative">
            {ITEMS.map((item, i) => {
              const rangeStart = i * (1 / ITEMS.length);
              const rangeEnd = 1;
              const targetScale = 1 - (ITEMS.length - i) * 0.05;
              
              return (
                <Card 
                  key={i} 
                  i={i} 
                  item={item} 
                  progress={scrollYProgress} 
                  range={[rangeStart, rangeEnd]} 
                  targetScale={targetScale}
                />
              );
            })}
            
            {/* Spacer to allow full scroll at the end */}
            {/* Reduced spacer height slightly since layout is more compact */}
            <div className="h-[25vh] w-full" /> 
          </div>

        </div>
      </div>
    </section>
  );
}

function Card({
  i,
  item,
  progress,
  range,
  targetScale
}: {
  i: number;
  item: IntegrationItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      // Adjusted height for the sticky container to ensure smooth stacking
      className="sticky top-[100px] flex h-[600px] items-start justify-center pt-4"
    >
      <motion.div
        style={{ 
          scale, 
          // Stacking logic: Cards slide up slightly to stack like a deck
          top: `calc(-5% + ${i * 30}px)` 
        }}
        // THE CARD: Vertical Portrait Mode (Consistent with Service/Industry)
        className="group relative flex flex-col justify-end w-full max-w-[420px] h-[500px]"
      >
        
        {/* --- 1. FLOATING IMAGE BOX (Top Center) --- */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
            <div className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3">
                
                {/* Image */}
                <div className="relative w-20 h-20">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain drop-shadow-sm"
                    />
                </div>
                
           
            </div>
        </div>

        {/* --- 2. PEDESTAL BASE (Bottom) --- */}
        <div className="mt-16 relative flex-1 w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 pt-20 flex flex-col items-center shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:border-blue-100 overflow-hidden">
            
            {/* Fake Floor Shadow */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-4 bg-blue-900/5 blur-xl rounded-full transition-all duration-500 group-hover:w-20 group-hover:bg-blue-900/10 group-hover:blur-2xl" />

            {/* Content Section */}
            <div className="relative z-10 text-center flex-1 flex flex-col items-center w-full">
                
                <span className="font-mono text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-3">
                    Integration 0{i + 1}
                </span>

                <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#2776ea] transition-colors">
                    {item.name}
                </h2>
                
                <p className="text-sm font-medium text-slate-500 leading-relaxed line-clamp-3">
                    {item.description}
                </p>

                {/* Bottom Action Bar */}
                <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full pt-6 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors flex items-center justify-between"
                >
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 leading-none group-hover:text-slate-900 transition-colors">
                        Visit Website
                    </span>
                    
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:bg-[#2776ea] group-hover:text-white group-hover:rotate-45 shadow-sm">
                        <ArrowUpRight size={18} />
                    </div>
                </a>
            </div>

            {/* Subtle Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

      </motion.div>
    </div>
  );
}