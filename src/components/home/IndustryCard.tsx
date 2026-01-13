"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, LucideIcon } from "lucide-react";

export type IndustryCardProps = {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string; // Hex color for the specific industry accent
  className?: string;
};

export default function IndustryCard({
  id,
  title,
  description,
  features,
  icon: Icon,
  color,
  className = "",
}: IndustryCardProps) {
  return (
    <div className={`group relative flex flex-col bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:border-[#2776ea] hover:shadow-lg hover:shadow-blue-900/5 overflow-hidden h-full ${className}`}>
      
      {/* 1. Subtle Hover Background (Faint overlay) */}
      <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header: Icon & Meta */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        {/* Tech Squircle Icon */}
        <div
          className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-600 transition-all duration-300 group-hover:bg-[#2776ea] group-hover:border-[#2776ea] group-hover:text-white group-hover:-translate-y-1"
        >
          <Icon size={24} strokeWidth={1.5} />
        </div>
        
        {/* Arrow + Precision Index */}
        <div className="flex flex-col items-end gap-2">
            <ArrowUpRight
            size={20}
            className="text-slate-300 transition-transform duration-300 group-hover:text-[#2776ea] group-hover:translate-x-1 group-hover:-translate-y-1"
            />
            <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#2776ea]/60 transition-colors">
            /0{id}
            </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#2776ea] transition-colors">
            {title}
        </h3>
        
        <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">
            {description}
        </p>
      </div>

      {/* Feature List (Clean Tech Style) */}
      <div className="relative z-10 mt-auto pt-6 border-t border-slate-100 group-hover:border-slate-200/60 transition-colors">
        <div className="space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2
                size={14}
                className="shrink-0"
                style={{ color: color }} // Uses specific industry color
              />
              <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}