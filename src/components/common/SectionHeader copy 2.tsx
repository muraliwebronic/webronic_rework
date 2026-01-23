"use client";

import React from "react";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`relative z-10 mb-16 lg:mb-24 ${centered ? "text-center mx-auto" : "text-left"} ${className}`}>
      
      {/* Section Name / Badge */}
      {badge && (
        <div className={`flex items-center gap-3 mb-4 uppercase tracking-[0.2em] text-xs lg:text-sm font-bold font-sora ${centered ? "justify-center" : "justify-start"}`}>
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#2776ea] to-transparent rounded-full" />
          <span className="text-[#2776ea]">{badge}</span>
          {centered && <span className="w-8 h-[2px] bg-gradient-to-l from-[#2776ea] to-transparent rounded-full" />}
        </div>
      )}

      {/* Main Heading */}
      <h2 className="text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-6 font-sora">
        {title} <br className="" />
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776ea] to-cyan-500">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className={`text-slate-500 text-base lg:text-lg font-medium max-w-2xl ${centered ? "mx-auto" : ""}`}>
           {description.replace(/\s*\.$/, "")}
        </p>
      )}
    </div>
  );
}