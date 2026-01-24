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
      className="sticky top-[150px] flex h-[500px] items-start justify-center pt-4"
    >
      <motion.div
        style={{ 
          scale, 
          top: `calc(-5% + ${i * 30}px)` 
        }}
        className="group relative w-full max-w-[400px] aspect-square bg-white rounded-[2rem] border border-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-blue-100 flex flex-col items-center justify-between p-10 overflow-hidden"
      >
        {/* --- IMAGE AREA --- */}
        <div className="relative w-32 h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>

        {/* --- NAME & LINK AREA --- */}
        <div className="flex flex-col items-center w-full gap-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-[#2776ea] transition-colors">
            {item.name}
          </h2>

          <a 
            href={item.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 text-slate-900 font-semibold text-sm transition-all duration-300 hover:bg-[#2776ea] hover:text-white"
          >
            Visit Website
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </div>
  );
}