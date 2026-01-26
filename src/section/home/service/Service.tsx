"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Settings, Layers } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/services/ServiceCard";
import { servicesRegistry } from "@/app/service/data/servicesRegistry";

export default function ServiceHorizontal() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [xRange, setXRange] = useState(0);
  const [scrollSpeedRatio, setScrollSpeedRatio] = useState(4);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const MAIN_SERVICE_IDS = [
    "web-development",
    "ai-machine-learning",
    "cloud-services",
    "digital-transformation",
    "devops",
    "iot-solutions",
    "data-analytics",
  ];
  const serviceList = Object.entries(servicesRegistry)
    .map(([slug, data]) => {
      if (!data || !data.preview) return null;
      return {
        id: slug,
        path: `/services/?category=${slug}`,
        title: data.preview.title,
        description: data.preview.description,
        image: data.preview.image,
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  // --- Scroll Logic ---
  useEffect(() => {
    const calculateScroll = () => {
      if (contentRef.current && targetRef.current) {
        const totalContentWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const horizontalScrollDistance =
          totalContentWidth -
          viewportWidth +
          (window.innerWidth > 768 ? 20 : 0);
        setXRange(-horizontalScrollDistance);

        const totalSectionHeight = targetRef.current.offsetHeight;
        const verticalScrollableDistance = totalSectionHeight - viewportHeight;

        if (horizontalScrollDistance > 0) {
          const ratio = verticalScrollableDistance / horizontalScrollDistance;
          setScrollSpeedRatio(ratio * 5);
        }
      }
    };

    calculateScroll();
    const resizeObserver = new ResizeObserver(calculateScroll);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    window.addEventListener("resize", calculateScroll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateScroll);
    };
  }, []);

  useEffect(() => {
    const handleHorizontalScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        if (rect.top <= 1 && rect.bottom >= window.innerHeight - 1) {
          e.preventDefault();
          window.scrollBy({
            top: e.deltaX * scrollSpeedRatio,
            behavior: "auto",
          });
        }
      }
    };
    window.addEventListener("wheel", handleHorizontalScroll, {
      passive: false,
    });
    return () => window.removeEventListener("wheel", handleHorizontalScroll);
  }, [scrollSpeedRatio]);

  const x = useTransform(scrollYProgress, [0, 1], [0, xRange]);
  const rotateCW = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateCCW = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={targetRef}
      id="services"
      className="relative h-[300vh] font-sora bg-[#2776ea]" // Updated to Primary Blue
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* --- BACKGROUND (Primary Blue Mode) --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
          {/* 1. NEW: White/Green Blobs (From your snippet) */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

          {/* 2. Parallax Icons (Updated to White/Transparent for contrast) */}
          <motion.div
            style={{ y: bgParallax }}
            className="absolute -top-[10%] -right-[5%] opacity-[0.1] text-white flex items-center justify-center"
          >
            <motion.div style={{ rotate: rotateCW }} className="relative z-10">
              <Settings
                strokeWidth={0.8}
                className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]"
              />
            </motion.div>
            <motion.div
              style={{ rotate: rotateCCW }}
              className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 z-0"
            >
              <Settings
                strokeWidth={0.8}
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* --- HORIZONTAL SCROLL CONTENT --- */}
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="relative z-10 flex gap-6 pl-6 pr-6 lg:gap-16 lg:pl-20 lg:pr-20 items-center"
        >
          {/* SECTION HEADER (White Text Mode) */}
          <div className="w-[85vw] md:w-[500px] shrink-0 pr-4 md:pr-8 text-white">
            {/* Wrapped in div with text-white and specific overrides for the component if needed */}
            <SectionHeader
              isWhite
              badge="Services"
              title="Our Capabilities"
              highlight="Built for Scale"
              description="We engineer scalable digital ecosystems. Explore our suite of services designed for high-growth enterprises"
              centered={false}
            />

            <div className="mt-12 hidden md:flex items-center gap-4 text-blue-200">
              <span className="text-xs font-bold uppercase tracking-widest">
                Swipe up to explore
              </span>
              <ArrowRight size={16} className="animate-pulse text-white" />
            </div>
          </div>

          {/* SERVICE CARDS (These remain white cards, which pop nicely on blue) */}
          {serviceList
            .filter((service) => MAIN_SERVICE_IDS.includes(service.id))
            .map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                path={service.path}
                className="w-[85vw] md:w-[360px] h-[420px] shrink-0"
              />
            ))}

          {/* VIEW ALL CARD */}
          <Link
            href="/service"
            className="group relative flex flex-col justify-end h-[420px] w-[85vw] md:w-[320px] shrink-0 font-sora"
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
              <div className="relative w-[180px] h-[180px] flex items-center justify-center transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-6 group-hover:scale-110 group-hover:rotate-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2776ea] to-[#4a90f5] rounded-full shadow-2xl shadow-blue-500/30" />
                <div className="relative z-10 text-white">
                  <Layers size={64} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-[-10px] border border-[#2776ea]/30 rounded-full scale-90 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>

            <div className="relative h-[80%] w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:border-blue-100 overflow-hidden">
              <div className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-4 bg-blue-900/5 blur-xl rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-blue-900/10 group-hover:blur-2xl" />
              <div className="pt-24 relative z-10 text-center flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#2776ea] transition-colors">
                  View All
                  <span className="block text-[#2776ea]">Solutions</span>
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-2">
                  Explore our full range of engineering capabilities.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors flex justify-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:bg-[#2776ea] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <span>Get Started</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
