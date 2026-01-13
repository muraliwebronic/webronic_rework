"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Layers,
  Store,
  ArrowRight,
  CheckCircle2,
  Globe,
  ChartLine,
  ExternalLink
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color1: string;
  color2: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: "value-chart",
    name: "Value Chart",
    tagline: "Intelligence Platform",
    description:
      "Enterprise-grade data visualization engine that transforms fragmented metrics into high-fidelity actionable insights for financial leadership.",
    features: ["Real-time Analytics", "Custom Reporting", "Forecasting"],
    icon: <BarChart3 size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "/assets/images/valuechart.png",
    link: "https://www.valueflowsoft.com/",
  },
  {
    id: "tanlux",
    name: "Tanlux",
    tagline: "Industrial ERP",
    description:
      "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules.",
    features: ["Supply Chain Sync", "IoT Integration", "Resource Tracking"],
    icon: <Layers size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "/assets/images/tanluxlogo.png",
    link: "https://tanlux.se/",
  },
  {
    id: "fpanalyxer",
    name: "Fp analyzer",
    tagline: "Financial Analytics",
    description:
      "Advanced financial planning and analysis tool designed to streamline budgeting, forecasting, and performance management.",
    features: ["Budget Automation", "Variance Analysis", "Scenario Planning"],
    icon: <ChartLine size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "/assets/images/fpanalyzer.png",
    link: "https://www.fpanalyzer.se/",
  },
  {
    id: "storetech",
    name: "StoreTech",
    tagline: "Automated Retail",
    description:
      "Cloud-native retail infrastructure providing automated checkout solutions and synchronized inventory management across global storefronts.",
    features: ["AI Checkout", "Inventory Cloud", "Loyalty Systems"],
    icon: <Store size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "/assets/images/storetech-logo1.png",
    link: "https://store-tech.se/",
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-24 lg:py-32 font-sora"
    >
      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* --- HEADER (Consistent Style) --- */}
        <div className="relative z-10 mb-20 lg:mb-32 text-left max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Transforming Industry with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776ea] to-cyan-500">
              Proprietary Products
            </span>
          </h2>
          <p className="text-slate-500 text-base lg:text-lg font-medium max-w-2xl leading-relaxed">
            Scalable software solutions meticulously engineered to bridge the
            gap between complex data and operational excellence.
          </p>
        </div>

        {/* --- PRODUCTS LIST --- */}
        <div className="space-y-24 lg:space-y-32">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative flex flex-col gap-12 lg:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center`}
            >
              
              {/* CONTENT SIDE */}
              <div className="flex-1 space-y-8">
                {/* Header */}
                <div className="flex flex-col items-start gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-blue-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: product.color1 }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 mb-2 block">
                      {product.tagline}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base lg:text-lg leading-relaxed text-slate-600 font-medium max-w-xl">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 border-l-2 border-slate-100 pl-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#76ea27]" />
                      <span className="text-sm font-bold text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={product.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#2776ea] hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
                  >
                    Explore Product
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* IMAGE SIDE (Browser Window Style) */}
              <div className="flex-1 w-full max-w-xl lg:max-w-none perspective-1000">
                <Link href={product.link} target="_blank" className="block relative group/image">
                  
                  {/* Glow Effect behind image */}
                  <div 
                    className="absolute -inset-4 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover/image:opacity-20"
                    style={{ backgroundColor: product.color1 }} 
                  />

                  {/* Browser Window Container */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 transition-all duration-500 group-hover/image:-translate-y-2 group-hover/image:shadow-3xl">
                    
                    {/* Browser Header Bar */}
                    <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3 backdrop-blur-sm">
                        <div className="flex gap-1.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                        </div>
                        <div className="ml-4 flex-1 rounded bg-white px-3 py-1 text-[10px] font-medium text-slate-400 shadow-sm border border-slate-100 flex items-center justify-between">
                            <span>{product.link.replace("https://", "")}</span>
                            <ExternalLink size={10} />
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative aspect-[16/10] bg-slate-50 flex items-center justify-center p-8 lg:p-12 overflow-hidden">
                       {/* Subtle Grid Pattern in background */}
                       <div className="absolute inset-0 opacity-[0.03]" 
                            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                       />
                       
                       <img
                        src={product.image}
                        alt={product.name}
                        className="relative z-10 h-full w-full object-contain drop-shadow-xl transition-transform duration-700 group-hover/image:scale-105"
                      />
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}