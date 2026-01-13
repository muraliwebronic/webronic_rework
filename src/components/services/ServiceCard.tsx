"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ServiceCardProps = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  path: string;
  className?: string;
};

export default function ServiceCard({
  id,
  icon,
  title,
  description,
  image,
  path,
  className = "",
}: ServiceCardProps) {
  return (
    <Link 
      href={path}
      className={`group/card relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 transition-all duration-300 hover:border-[#2776ea] hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(39,118,234,0.1)] h-full w-full font-sora ${className}`}
    >
      
      {/* 1. Subtle Hover Background (Faint overlay for depth) */}
      <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Top Section: Header */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          {/* Icon Container - Tech Squircle Style */}
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-slate-50 text-slate-600 transition-all duration-300 group-hover/card:bg-[#2776ea] group-hover/card:border-[#2776ea] group-hover/card:text-white group-hover/card:-translate-y-1"
            style={{ borderColor: "#e2e8f0" }}
          >
            {/* Note: We clone the icon to ensure size consistency if needed, or rely on parent passing correct size */}
            <div className="scale-110">
                {icon}
            </div>
          </div>

          {/* Index Number */}
          <span className="text-[10px] font-mono font-bold text-slate-300 group-hover/card:text-[#2776ea]/60 transition-colors delay-75">
            /0{id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover/card:text-[#2776ea] transition-colors">
          {title}
        </h3>

        <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Middle: Image Area */}
      <div className="relative z-10 h-32 lg:h-40 w-full mb-8 flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden border border-slate-100 transition-colors duration-300 group-hover/card:bg-[#2776ea]/5 group-hover/card:border-blue-100">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain h-full w-auto p-4 transition-transform duration-500 group-hover/card:scale-110"
        />
      </div>

      {/* Bottom: Action Link */}
      <div className="relative z-10 mt-auto inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover/card:text-[#2776ea] transition-colors">
        <span>Learn More</span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent transition-all duration-300 group-hover/card:bg-[#2776ea] group-hover/card:text-white group-hover/card:translate-x-1">
            <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}