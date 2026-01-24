"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BarChart3, 
  Layers, 
  Store, 
  ChartLine, 
  Glasses, // For VR
  ArrowUpRight, 
  X, 
  CheckCircle2,
  ExternalLink,
  ListFilter
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader"; 

// --- TYPES ---
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[]; // These will be shown in the "View Specs" toggle
  icon: React.ReactNode;
  image: string;
  link: string;
}

// --- DATA (Strictly using provided data + New VirtualTour360) ---
const products: Product[] = [
  {
    id: "value-chart",
    name: "Value Chart",
    tagline: "Intelligence Platform",
    description: "Enterprise-grade data visualization engine that transforms fragmented metrics into high-fidelity actionable insights for financial leadership",
    features: ["Real-time Analytics", "Custom Reporting", "Forecasting"],
    icon: <BarChart3 size={24} />,
    image: "./assets/images/valuechart.png",
    link: "https://www.valueflowsoft.com/",
  },
  {
    id: "tanlux",
    name: "Tanlux",
    tagline: "Industrial ERP",
    description: "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules",
    features: ["Supply Chain Sync", "IoT Integration", "Resource Tracking"],
    icon: <Layers size={24} />,
    image: "./assets/images/tanluxlogo.png",
    link: "https://tanlux.se/",
  },
  {
    id: "fpanalyxer",
    name: "Fp analyzer",
    tagline: "Financial Analytics",
    description: "Advanced financial planning and analysis tool designed to streamline budgeting, forecasting, and performance management",
    features: ["Budget Automation", "Variance Analysis", "Scenario Planning"],
    icon: <ChartLine size={24} />,
    image: "./assets/images/fpanalyzer.png",
    link: "https://www.fpanalyzer.se/",
  },
  {
    id: "storetech",
    name: "StoreTech",
    tagline: "Automated Retail",
    description: "Cloud-native retail infrastructure providing automated checkout solutions and synchronized inventory management across global storefronts",
    features: ["AI Checkout", "Inventory Cloud", "Loyalty Systems"],
    icon: <Store size={24} />,
    image: "./assets/images/storetech-logo1.png",
    link: "https://store-tech.se/",
  },
  {
    id: "virtualtour360",
    name: "VirtualTour360",
    tagline: "Immersive VR Platform",
    description: "Create professional virtual tours in WordPress instantly. Build immersive 360 degree experiences with Apple Vision Pro and Meta Quest support without writing a single line of code",
    features: ["Apple Vision Pro Ready", "Meta Quest Support", "No-Code Builder", "WordPress Integration"],
    icon: <Glasses size={24} />, // VR Icon
    image: "./assets/images/virtualtour.png", // Ensure this image exists or use placeholder
    link: "https://virtualtour360.ai/",
  }
];

// --- INDIVIDUAL PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="group relative w-full py-16 lg:py-24 border-b border-slate-100 last:border-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className={`lg:col-span-6 flex flex-col order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          
          {/* Header Badge */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white border border-slate-100 text-[#2776ea] shadow-sm transition-transform duration-500 group-hover:scale-105">
              {product.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              {product.tagline}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 group-hover:text-[#2776ea] transition-colors tracking-tight">
            {product.name}
          </h3>
          <p className="text-slate-500 font-medium leading-loose mb-8 text-lg">
            {product.description}
          </p>

          {/* --- ACTION ROW --- */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* 1. Launch Project */}
            <Link 
              href={product.link}
              target="_blank"
              className="flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-[#2776ea] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1a5bbd] transition-colors shadow-md shadow-blue-200"
            >
              Visit Site
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <ExternalLink size={14} />
              </div>
            </Link>

            {/* 2. Toggle Specs (Features) */}
            <button 
               onClick={() => setShowSpecs(!showSpecs)}
               className={`flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full border cursor-pointer transition-all group/toggle ${showSpecs ? 'border-[#2776ea] bg-slate-50' : 'border-slate-200 bg-white hover:border-[#2776ea]'}`}
            >
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover/toggle:text-[#2776ea] transition-colors">
                   {showSpecs ? "Close Specs" : "View Specs"}
               </span>
               <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${showSpecs ? 'bg-[#2776ea] text-white' : 'bg-slate-50 text-slate-400 group-hover/toggle:text-[#2776ea]'}`}>
                  {showSpecs ? <X size={14} /> : <ListFilter size={14} />}
               </div>
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: PEDESTAL (Image/Specs) --- */}
        <div className={`lg:col-span-6 h-[400px] lg:h-[500px] perspective-1000 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative w-full h-full bg-slate-50/50 rounded-[2.5rem] border border-slate-100 overflow-hidden flex items-center justify-center transition-all duration-700 hover:shadow-xl hover:shadow-slate-200/50">
            
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
            
            <AnimatePresence mode="wait">
              {showSpecs ? (
                /* --- SPECS VIEW (Features Data) --- */
                <motion.div 
                    key="specs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-20 flex flex-col p-8 lg:p-12"
                >
                    <div className="text-center mb-8">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            Key Features
                        </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-3">
                         {product.features.map((feature, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                             >
                                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#76ea27]/10 flex items-center justify-center text-[#5eb820]">
                                    <CheckCircle2 size={16} />
                                 </div>
                                 <span className="text-sm font-bold text-slate-700">
                                     {feature}
                                 </span>
                             </motion.div>
                         ))}
                    </div>
                </motion.div>
              ) : (
                /* --- IMAGE VIEW (Full Image, No Crop) --- */
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-full p-8 lg:p-12 flex items-center justify-center"
                >
                    {/* Using object-contain to ensure the full image is visible.
                       Removed the "Browser Window" wrapper to prevent cutting off non-rectangular logos.
                    */}
                    <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-xl"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION COMPONENT ---
export default function ProductSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-24 lg:py-32 font-sora">
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="mb-20 lg:mb-24">
            <SectionHeader 
                badge="Our Ecosystem"
                title="Transforming Industry with"
                highlight="Proprietary Products"
                description="Scalable software solutions meticulously engineered to bridge the gap between complex data and operational excellence"
                centered={false}
                className="max-w-3xl"
            />
        </div>

        {/* Products Loop */}
        <div className="flex flex-col">
          {products.map((product, index) => (
             <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}