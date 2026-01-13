"use client";

import React from "react";

type SectionHeaderProps = {
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeader({
  title,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`relative z-10 mb-16 lg:mb-24 ${centered ? "text-center mx-auto" : "text-left"} ${className}`}>
      
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
          {description}
        </p>
      )}
    </div>
  );
}