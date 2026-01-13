"use client";

import React from "react";
import {
  Factory,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Zap,
  Radio,
} from "lucide-react";
// Adjust imports based on your folder structure
import SectionHeader from "@/components/common/SectionHeader";
import IndustryCard, { IndustryCardProps } from "@/components/home/IndustryCard"; 

const INDUSTRIES: IndustryCardProps[] = [
   {
    id: 1,
    title: "Manufacturing & Industrial",
    description:
      "Driving efficiency through Industry 4.0 automation and IoT integration.",
    features: [
      "Industry 4.0 transformation",
      "Smart factory solutions",
      "Predictive maintenance",
    ],
    icon: Factory,
    color: "#2776ea", // Blue
  },
  {
    id: 2,
    title: "Retail & E-commerce",
    description:
      "Creating seamless shopping experiences bridging digital and physical realms.",
    features: [
      "Omnichannel platforms",
      "AI-powered checkout",
      "Customer analytics",
    ],
    icon: ShoppingBag,
    color: "#76ea27", // Green
  },
  {
    id: 3,
    title: "Banking & Finance Services",
    description:
      "Secure, scalable fintech architectures for the modern financial ecosystem.",
    features: [
      "Digital banking portals",
      "Fintech development",
      "AI-driven fraud detection",
    ],
    icon: Landmark,
    color: "#2776ea",
  },
  {
    id: 4,
    title: "Healthcare & Life Sciences",
    description:
      "Innovating patient care with advanced telemedicine and data solutions.",
    features: [
      "Telemedicine platforms",
      "Medical imaging AI",
      "Healthcare IT solutions",
    ],
    icon: HeartPulse,
    color: "#76ea27",
  },
  {
    id: 5,
    title: "Energy & Utilities",
    description:
      "Optimizing resource management with smart grid technology and analytics.",
    features: ["Smart grid solutions", "Asset management", "Energy analytics"],
    icon: Zap,
    color: "#2776ea",
  },
  {
    id: 6,
    title: "Telecommunications",
    description:
      "Empowering connectivity through next-gen network optimization tools.",
    features: [
      "Network optimization",
      "5G integration",
      "customer experience platforms",
    ],
    icon: Radio,
    color: "#76ea27",
  },
];

export default function IndustryFocus() {
  return (
    <section className="relative py-20 lg:px-20 bg-white overflow-hidden font-sora">
      
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-slate-50/50 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* FIXED PADDING: Standard container spacing */}
      <div className="container relative z-10 mx-auto px-6">
        
        {/* REUSABLE HEADER */}
        <SectionHeader 
          title="Specialized Solutions for"
          highlight="Diverse Sectors"
          description="Webronic Industries serves organizations across diverse sectors, delivering specialized solutions that address industry-specific challenges"
          centered={true}
          className="max-w-3xl mx-auto"
        />

        {/* REUSABLE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES.map((industry) => (
            <IndustryCard 
              key={industry.id}
              {...industry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}