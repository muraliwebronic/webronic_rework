"use client";

import React from "react";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  size?: "sm" | "default" | "hero";
  isWhite?: boolean; // New Prop
};

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
  className = "",
  size = "default",
  isWhite = false, // Default to false
}: SectionHeaderProps) {
  
 // Size Configuration (Using Global Typography Utilities)
const styles = {
  sm: {
    badge: "text-caption tracking-[0.15em] mb-3",
    title: "text-h3 mb-4",
    desc: "text-submenu max-w-xl",
    line: "h-[1.5px] w-6",
  },

  default: {
    badge: "text-submenu tracking-[0.2em] mb-4",
    title: "text-h2 mb-6",
    desc: "text-body max-w-2xl",
    line: "h-[2px] w-8",
  },

  hero: {
    badge: "text-menu tracking-[0.25em] mb-6",
    title: "text-h1 mb-8",
    desc: "text-body max-w-3xl",
    line: "h-[3px] w-12",
  },
};


  const currentStyle = styles[size];

  // Dynamic Colors based on isWhite
  const titleColor = isWhite ? "text-white" : "text-slate-900";
  const descColor = isWhite ? "text-blue-50" : "text-slate-500";
  const badgeColor = isWhite ? "text-white" : "text-[#2776ea]";
  const lineColor = isWhite ? "from-white" : "from-[#2776ea]";
  const highlightGradient = isWhite 
    ? "from-[#76ea27] to-emerald-300" // Secondary Green gradient for Dark Backgrounds
    : "from-[#2776ea] to-cyan-500";   // Primary Blue gradient for Light Backgrounds

  return (
    <div 
      className={`relative z-10 ${centered ? "text-center mx-auto" : "text-left"} ${className}`}
    >
      
      {/* --- BADGE / TAG --- */}
      {badge && (
        <div className={`flex items-center gap-3 font-bold font-sora uppercase ${badgeColor} ${currentStyle.badge} ${centered ? "justify-center" : "justify-start"}`}>
          {/* Left Gradient Line */}
          <span className={`${currentStyle.line} bg-gradient-to-r ${lineColor} to-transparent rounded-full`} />
          
          <span className="whitespace-nowrap">
            {badge}
          </span>
          
          {/* Right Gradient Line (Only if centered) */}
          {centered && (
            <span className={`${currentStyle.line} bg-gradient-to-l ${lineColor} to-transparent rounded-full`} />
          )}
        </div>
      )}

      {/* --- MAIN TITLE --- */}
      <h2 className={`font-black leading-[1.1] font-sora ${titleColor} ${currentStyle.title}`}>
        {title} <br />
        {highlight && (
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${highlightGradient}`}>
           {highlight}
          </span>
        )}
      </h2>

      {/* --- DESCRIPTION --- */}
      {description && (
        <p className={`font-medium leading-relaxed ${descColor} ${currentStyle.desc} ${centered ? "mx-auto" : ""}`}>
            {description.replace(/\s*\.$/, "")}
        </p>
      )}
    </div>
  );
}