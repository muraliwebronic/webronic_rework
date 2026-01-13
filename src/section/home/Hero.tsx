"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  CheckCircle2,
  Globe,
  Layers,
  Users,
  Zap,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// --- DATA ---
const CAROUSEL_DATA = [
  {
    id: "slide1",
    title: "StoreTech",
    headline: "Autonomous Retail Technology",
    description:
      "Cloud-native cross-platform solution powering 150+ unmanned stores with AI checkout, IoT inventory management, and integrated loyalty systems. Proven with 50M+ transactions and a 99.7% success rate",
    stats: ["60% Cost Reduction", "99.7% Success Rate", "50M+ Transactions"],
    cta: "Explore StoreTech",
    img: "/assets/images/storetech-logo-black.png",
    url: "https://vasanthwebronic-oss.github.io/storetech-portfolio/",
  },
  {
    id: "slide2",
    title: "Tanlux",
    headline: "Tanning Studio Automation",
    description:
      "Comprehensive ERP enabling 24/7 unmanned tanning studio operations with mobile booking, automated bed management, smart access control, and integrated retail",
    stats: [
      "70% Labor Cost Reduction",
      "24/7 Operations",
      "Multi-tenant Scalability",
    ],
    cta: "Explore Tanlux",
    img: "/assets/images/tanluxlogo.png",
    url: "https://tanlux.se/",
  },
  {
    id: "slide3",
    title: "Value Charts",
    headline: "Visual Collaboration Platform",
    description:
      "AI-powered cross-platform diagramming and workflow visualization solution that transforms complex business processes into intelligent, interactive diagrams with enterprise-grade collaboration capabilities",
    stats: [
      "Intelligent Mapping",
      "Real-time Collaboration",
      "Workflow Automation",
    ],
    cta: "Explore Value Charts",
    img: "/assets/images/valuechart.png",
    url: "https://www.valueflowsoft.com/",
  },
  {
    id: "slide4",
    title: "FP Analyzer",
    headline: "Manufacturing Intelligence",
    description:
      "Real-time cross-platform IoT monitoring solution that tracks OEE (Overall Equipment Effectiveness), eliminates downtime, and optimizes production workflows through predictive maintenance alerts",
    stats: [
      "Real-time OEE Tracking",
      "Predictive Maintenance",
      "Downtime Elimination",
    ],
    cta: "Explore FP Analyzer",
    img: "/assets/images/fpanalyzer.png",
    url: "https://www.fpanalyzer.se/",
  },
];

const TRUST_INDICATORS = [
  { target: 500, suffix: "+", label: "Global Clients", icon: Users },
  { target: 15, suffix: "+", label: "Years Exp", icon: Layers },
  { target: 50, suffix: "+", label: "Countries", icon: Globe },
  { target: 99.9, suffix: "%", label: "Satisfaction", icon: CheckCircle2 },
];

// --- COUNT UP COMPONENT ---
function CountUp({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(progress === 1 ? target : Number((easeOut * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function HeroStacked() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe Logic
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, []);

  const startAutoAdvance = () => {
    stopAutoAdvance();
    autoAdvanceRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
  };

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length
    );
  }, []);

  // Manual Controls
  const handleManualNext = () => {
    stopAutoAdvance();
    nextSlide();
    startAutoAdvance();
  };

  const handleManualPrev = () => {
    stopAutoAdvance();
    prevSlide();
    startAutoAdvance();
  };

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoAdvance();
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
    startAutoAdvance();
  };

  if (!isMounted) return null;

  const activeSlide = CAROUSEL_DATA[activeIndex];

  return (
    <section
      id="hero"
      // UPDATED PADDING: pt-40 for mobile, lg:pt-28 ensures Navbar doesn't cover content
      className="bg-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full min-h-[100dvh] lg:h-screen  overflow-hidden flex flex-col justify-center mt-20 pb-12 lg:mt-10 lg:pb-0">
        {/* --- BACKGROUND DECOR --- */}
      
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl h-full flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-4 lg:mt-0">
            {/* Heading */}
            <h1 className="font-sora font-black text-3xl sm:text-4xl lg:text-5xl/tight text-slate-900 tracking-tighter mb-4 sm:mb-6">
              Transforming Business <br className="hidden lg:block" /> Through
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#2776ea] via-[#4a90f5] to-[#76ea27] bg-clip-text text-transparent">
                Intelligent Technology
              </span>
            </h1>

            {/* Content Switcher - STATS REMOVED FROM HERE */}
            <div className="w-full min-h-[100px] sm:min-h-[120px] mb-8 relative">
              <div key={activeIndex} className="animate-text-reveal">
                <h2 className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-bold text-slate-800 mb-2">
                  <Zap
                    size={18}
                    className="text-[#2776ea]"
                    fill="currentColor"
                    fillOpacity={0.2}
                  />
                  {activeSlide.headline}
                </h2>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                  {activeSlide.description}
                </p>
              </div>
            </div>

            {/* ENHANCED CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-md lg:max-w-none justify-center lg:justify-start">
              <div className="flex-1 sm:flex-none">
                <a
                  href={activeSlide.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn w-full block text-center shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25"
                >
                  {activeSlide.cta}
                </a>
              </div>
              <div className="flex-1 sm:flex-none">
                <Link
                  href="/contact"
                  className="secondary-btn w-full block text-center text-slate-600 font-bold border-slate-200 hover:border-[#2776ea] hover:bg-white"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="w-full pt-8 border-t border-slate-100 grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
              {TRUST_INDICATORS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-1">
                    <CountUp target={item.target} suffix={item.suffix} />
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <item.icon size={12} className="text-[#76ea27]" />{" "}
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

      
          <div className="w-full lg:w-1/2 h-[420px] sm:h-[480px] lg:h-[550px] flex items-center justify-center order-1 lg:order-2 perspective-1000">
            <div className="relative w-[300px] sm:w-[340px] lg:w-[400px] h-[380px] sm:h-[440px] lg:h-[500px]">
              {/* 1. Enhanced Ambient Background */}
              {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2776ea]/10 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]  from-white/40 to-transparent rounded-full blur-[40px] pointer-events-none" /> */}

              {CAROUSEL_DATA.map((item, index) => {
                let offset = index - activeIndex;
                if (offset < 0) offset += CAROUSEL_DATA.length;
                if (offset > 2 && offset !== CAROUSEL_DATA.length - 1)
                  return null;

                const isFront = offset === 0;

                let style = {};
                if (isFront) {
                  style = {
                    zIndex: 30,
                    opacity: 1,
                    transform: "translateX(0) translateY(0) scale(1)",
                  };
                } else if (offset === 1) {
                  style = {
                    zIndex: 20,
                    opacity: 0.7,
                    transform:
                      "translateX(24px) translateY(-24px) scale(0.95) rotate(3deg)",
                  };
                } else if (offset === 2) {
                  style = {
                    zIndex: 10,
                    opacity: 0.4,
                    transform:
                      "translateX(48px) translateY(-48px) scale(0.9) rotate(6deg)",
                  };
                } else {
                  style = {
                    zIndex: 0,
                    opacity: 0,
                    transform: "translateX(60px) translateY(-60px) scale(0.85)",
                  };
                }

                return (
                  <div
    key={item.id}
    className="absolute inset-0 transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) origin-bottom-left"
    style={style}
>
    <div className={`
        relative w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col
        border border-slate-100 ring-1 ring-slate-900/5
        ${isFront ? 'shadow-2xl shadow-blue-900/10' : 'shadow-lg shadow-slate-200/50'}
    `}>
        {/* Top Bar (Clean & Flat) */}
        <div className="h-14 border-b border-slate-100 flex items-center px-6 bg-slate-50/50 shrink-0">
             <div className="flex gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                 <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
             </div>
             <div className="ml-auto flex items-center gap-2 opacity-60">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {item.title}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#2776ea]" />
             </div>
        </div>

        {/* Main Card Content */}
        <div className="flex-1 flex flex-col items-center p-6 text-center relative group cursor-grab active:cursor-grabbing">
            
            {/* Image Showcase Stage (Flat Background) */}
            <div className="relative w-full flex-1 min-h-0 flex items-center justify-center mb-4 rounded-2xl bg-slate-50/40 border border-slate-100">
                {/* Subtle Grid Pattern (Structure only, no gradient colors) */}
                 <div className="absolute inset-0 opacity-[0.03]" 
                     style={{ backgroundImage: 'radial-gradient(#2776ea 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
                />
                
                <img 
                    src={item.img} 
                    alt={item.title}
                    className="relative z-10 w-auto h-auto max-w-[80%] max-h-[140px] sm:max-h-[160px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
            </div>

            {/* Stats Chips (Clean White) */}
            <div className="w-full flex flex-wrap justify-center content-center gap-2 mb-4 min-h-[60px]">
                {item.stats.map((stat, i) => (
                    <div 
                        key={i} 
                        className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm transition-transform hover:-translate-y-0.5"
                    >
                        <div className="p-1 rounded-full bg-blue-50 text-[#2776ea]">
                            <TrendingUp size={10} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">
                            {stat}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Bottom Indicator */}
            <div className="mt-auto pt-2">
                <div className="h-1 w-12 mx-auto rounded-full bg-slate-200 group-hover:bg-[#2776ea]/40 group-hover:w-16 transition-all duration-300" />
            </div>
        </div>
    </div>
</div>
                );
              })}

              {/* Navigation Arrows (Glass Floating Buttons) */}
              <button
                onClick={handleManualPrev}
                className="absolute top-1/2 -left-6 sm:-left-16 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-xl shadow-slate-200/50 border border-white text-slate-400 hover:text-[#2776ea] hover:scale-110 active:scale-95 transition-all z-40 hidden sm:flex group"
              >
                <ChevronLeft
                  size={22}
                  className="relative z-10 group-hover:-translate-x-0.5 transition-transform"
                />
              </button>
              <button
                onClick={handleManualNext}
                className="absolute top-1/2 -right-6 sm:-right-16 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-xl shadow-slate-200/50 border border-white text-slate-400 hover:text-[#2776ea] hover:scale-110 active:scale-95 transition-all z-40 hidden sm:flex group"
              >
                <ChevronRight
                  size={22}
                  className="relative z-10 group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
