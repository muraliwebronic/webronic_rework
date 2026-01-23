"use client";

import Link from "next/link";
import {
  Activity,
  Zap,
  BarChart3,
  Timer,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";


type StatCardProps = {
    icon: LucideIcon;
    value: string;
    label: string;
    color: string; 
};

const StatCard = ({ icon: Icon, value, label, color }: StatCardProps) => (
    <div className="group relative flex flex-col justify-end h-full font-sora pt-12 md:pt-16">
        
        {/* 1. FLOATING ICON BOX (Clean White Design) */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3">
                <Icon size={40} className={`transition-colors duration-300 ${color}`} strokeWidth={1.5} />
            </div>
        </div>

        {/* 2. PEDESTAL BASE */}
        <div className="relative w-full bg-white rounded-[2.5rem] border border-slate-100 p-6 pt-16 md:pt-20 pb-8 flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200/50 group-hover:border-slate-200 overflow-hidden">
            
            {/* Neutral Floor Shadow (Gray/Black only - No Color) */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-12 group-hover:blur-xl" />

            {/* Content */}
            <div className="relative z-10 text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2 group-hover:scale-105 transition-transform duration-500">
                    {value}
                </div>
                <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 ${color} transition-colors`}>
                    {label}
                </div>
            </div>

            {/* Very Subtle Hover Tint (Optional - keeps it looking interactive without glowing) */}
            <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    </div>
);


export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-slate-50/50 overflow-hidden font-sora"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        {/* --- 1. SECTION HEADER --- */}
        <div className="mb-20">
          <SectionHeader 
            title="WHEN YOU GROW"
            highlight="WITH OUR TECHNICAL EXPERTISE, WE GROW"
            description="We are the One Stop Solution for all your high-performance infrastructure requirements"
            centered={true}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* --- 2. STATS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
            
            <StatCard 
                icon={Zap} 
                value="99.9%" 
                label="Uptime" 
                color="text-[#2776ea] group-hover:text-[#2776ea]" 
            />
            
            <StatCard 
                icon={BarChart3} 
                value="50M+" 
                label="Requests" 
                color="text-cyan-500 group-hover:text-cyan-600" 
            />
            
            <StatCard 
                icon={Timer} 
                value="<24ms" 
                label="Latency" 
                color="text-purple-500 group-hover:text-purple-600" 
            />
            
            <StatCard 
                icon={Activity} 
                value="100%" 
                label="Health" 
                color="text-[#76ea27] group-hover:text-[#76ea27]" 
            />

        </div>

        {/* --- 3. ACTIONS --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/service" 
              className="inline-flex justify-center items-center bg-[#2776ea] text-white text-sm font-bold px-8 py-3.5 rounded-xl hover:bg-[#2776ea]/95 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
            >
                Our Solutions
            </Link>
            <Link 
              href="/contact" 
              className="group inline-flex justify-center items-center bg-white text-slate-600 border border-slate-200 text-sm font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 hover:text-[#2776ea] hover:border-[#2776ea]/30 transition-all"
            >
                Talk to an Expert
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

      </div>
    </section>
  );
}