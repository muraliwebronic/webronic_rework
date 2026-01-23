"use client";

import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import IndustryCard from "@/components/home/IndustryCard"; 
import { INDUSTRIES } from "@/AllData/Home/IndustryData";


export default function IndustryFocus() {
  return (
    <section className="relative py-24 bg-slate-50/50 overflow-hidden font-sora">
      
 

      <div className="container relative z-10 mx-auto px-6">
        
        {/* REUSABLE HEADER */}
        <div className="mb-20">
            <SectionHeader 
            badge="Industry Focus"
            title="Specialized Solutions for"
            highlight="Diverse Sectors"
            description="Webronic Industries serves organizations across diverse sectors, delivering specialized solutions that address industry-specific challenges."
            centered={true}
            className="max-w-3xl mx-auto"
            />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 items-stretch">
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard 
              key={index}
              {...industry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}