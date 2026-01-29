"use client";
import { CheckCircle2, LucideIcon } from "lucide-react";

export type IndustryCardProps = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string;
};

export default function IndustryCard({
  title,
  description,
  features,
  icon: Icon,
  color,
}: IndustryCardProps) {
  return (
    <div className="group relative flex flex-col h-full font-sora">
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3">
          <Icon
            size={36}
            className="transition-colors duration-300"
            style={{ color: color }}
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="mt-12 flex-1 relative bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:border-blue-100 overflow-hidden">
        {/* Fake Floor Shadow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-3 bg-blue-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-blue-900/10 group-hover:blur-xl" />

        {/* Content Section */}
        {/* pt-16: Internal padding to clear the bottom half of the floating icon */}
        <div className="pt-16 relative z-10 flex-1 flex flex-col">
          {/* Title: No fixed height, allows natural wrapping */}
          <h3 className="text-h3 font-bold text-slate-900 mb-4 text-center group-hover:text-[#2776ea] transition-colors leading-tight">
            {title}
          </h3>

          {/* Description: Allowed to grow, but keeps good readability spacing */}
          <p className="text-submenu text-slate-500 leading-relaxed text-center mb-8">
            {description}
          </p>

          {/* Features List: Pushed to bottom with mt-auto */}
          <div className="mt-auto px-1 w-full">
            <div className="space-y-3 p-4 ">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  {/* Shrink-0 prevents the icon from squishing if text wraps */}
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle2 size={14} className="text-[#76ea27]" />
                  </div>
                  <span className="text-caption font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-700 transition-colors leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}
