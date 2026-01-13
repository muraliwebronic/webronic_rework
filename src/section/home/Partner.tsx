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
  color: string; // Now used to toggle between Blue/Green theme
};

const ITEMS: IntegrationItem[] = [
  { 
    name: "24SJU", 
    description: "Healthcare simplified. Digital solutions for modern patient care.", 
    image: "./assets/24sju-se.png", 
    link: "https://24-sju.se/",
    color: "#2776ea" // Primary Blue
  },
  { 
    name: "ValueFlow", 
    description: "Business intelligence that flows. Visualize your data potential.", 
    image: "./assets/images/valuechart.png", 
    link: "https://www.valueflowsoft.com/",
    color: "#76ea27" // Secondary Green
  },
  { 
    name: "Tanlux", 
    description: "Illuminating the future with smart lighting technologies.", 
    image: "./assets/images/tanluxlogo.png", 
    link: "https://tanlux.se/",
    color: "#2776ea" 
  },
  { 
    name: "FP Analyzer", 
    description: "Precision analytics for financial performance and growth.", 
    image: "./assets/images/fpanalyzer.png", 
    link: "https://www.fpanalyzer.se/",
    color: "#76ea27"
  },
  { 
    name: "StoreTech", 
    description: "Retail evolution. Connecting stores with digital efficiency.", 
    image: "./assets/images/storetech-logo1.png", 
    link: "https://store-tech.se/",
    color: "#2776ea"
  },
  { 
    name: "ThingsAtWeb", 
    description: "The Internet of Things, realized. Connecting devices smarter.", 
    image: "./assets/images/thingsatweb.png", 
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
    <section className="bg-slate-50 py-24 font-sora" id="integrations"> 
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Strategic Partners"
          highlight="Our Ecosystem"
          description="A curated network of industry leaders powering our solutions."
          centered
          className="max-w-3xl mx-auto mb-20"
        />

        <div 
          ref={containerRef} 
          className="relative mt-10"
        >
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
          
          {/* Spacer to allow full scroll */}
          <div className="h-[50vh] w-full" /> 
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
      className="sticky top-[15%] flex h-[500px] items-center justify-center py-4 lg:py-10"
    >
      <motion.div
        style={{ 
          scale, 
          top: `calc(-5% + ${i * 25}px)` 
        }}
        className="group relative flex h-[420px] w-full max-w-[1000px] flex-col-reverse md:flex-row items-stretch justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl transition-all hover:border-[#2776ea]"
      >
        
        {/* Top Accent Line (Alternating Brand Colors) */}
        <div 
            className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-current to-transparent opacity-70"
            style={{ color: item.color }}
        />

        {/* LEFT: CONTENT SIDE */}
        <div className="relative flex flex-col justify-between p-8 md:p-12 md:w-[55%] z-10">
            
            {/* Giant Outlined Index Number Background */}
            <span 
                className="absolute top-6 left-8 text-[8rem] font-black leading-none text-transparent opacity-[0.07] pointer-events-none select-none font-mono"
                style={{ WebkitTextStroke: '2px #64748b' }}
            >
                {i + 1}
            </span>

            <div className="relative">
                <span className="font-mono text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 block">
                    / 0{i + 1} — Integration
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                    {item.name}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed font-medium max-w-md">
                    {item.description}
                </p>
            </div>

            <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 text-sm font-bold text-slate-900 transition-colors hover:text-[#2776ea] mt-8 w-fit"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300 group-hover/btn:bg-[#2776ea] group-hover/btn:border-[#2776ea] group-hover/btn:text-white group-hover/btn:rotate-[-10deg]">
                    <ArrowUpRight size={20} />
                </div>
                <span className="uppercase tracking-wider text-xs font-extrabold">Explore Partner</span>
            </a>
        </div>

        {/* RIGHT: IMAGE SIDE (Creative "Portal") */}
        <div className="relative w-full md:w-[45%] h-48 md:h-full overflow-hidden bg-slate-100 flex items-center justify-center">
            
            {/* 1. Ambient Brand Color Gradient Background */}
            <div 
                className="absolute inset-0 opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                style={{ 
                    background: `radial-gradient(circle at center, ${item.color}, transparent 70%)`,
                    filter: 'blur(40px)'
                }}
            />
            
            {/* 2. Circuit/Tech Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
                style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm15.312 0L46.142 8.485 44.728 9.9l-7.9-7.9h.828zM32 0l-3.657 3.657-1.414-1.414L30.586 0H32zm5.657 0l-3.657 3.657-1.414-1.414L36.243 0h1.414zm-11.314 0l-3.657 3.657-1.414-1.414L24.93 0h1.414zM0 0h60v60H0V0z' fill='%2394a3b8' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} 
            />

            {/* 3. Floating Glassmorphism Logo Box */}
            <div className="relative z-10 h-32 w-32 md:h-40 md:w-40 rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="h-full w-full object-contain drop-shadow-sm"
                />
            </div>
        </div>

      </motion.div>
    </div>
  );
}