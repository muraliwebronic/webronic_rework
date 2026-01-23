"use client";

import Link from "next/link";
import {
  Activity,
  Code2,
  CheckCircle2,
  Zap,
  BarChart3,
  Timer
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 shadow-inner bg-white overflow-hidden font-sora"
    >
      {/* --- Background Ambient Light --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* 1. REUSABLE SECTION HEADER (Centered for balanced layout) */}
        <SectionHeader 
       
          title="Engineering the"
          highlight="Digital Backbone"
          description="We build scalable ecosystems. By bridging the gap between complex backend architecture and intuitive user experiences, we empower enterprises to handle millions of transactions with zero downtime"
          centered={true}
          className="max-w-4xl mx-auto"
        />

        {/* 2. EXPANDED STATS GRID (Replaces the visual elements) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            {/* Stat 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 transition-colors">
                <div className="p-3 bg-blue-100 rounded-xl text-[#2776ea] mb-4">
                    <Zap size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">99.9%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">System Uptime</div>
            </div>

            {/* Stat 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 transition-colors">
                <div className="p-3 bg-cyan-100 rounded-xl text-cyan-600 mb-4">
                    <BarChart3 size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">50M+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Daily Requests</div>
            </div>

            {/* Stat 3 (Converted from old 'Latency' floating card) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 transition-colors">
                <div className="p-3 bg-purple-100 rounded-xl text-purple-600 mb-4">
                    <Timer size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">&lt;24ms</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Global Latency</div>
            </div>

            {/* Stat 4 (Converted from old 'System Healthy' floating card) */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:border-blue-200 transition-colors">
                <div className="p-3 bg-green-100 rounded-xl text-[#76ea27] mb-4">
                    <Activity size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">System Health</div>
            </div>
        </div>

        {/* 3. CENTERED ACTIONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/service" className="inline-flex justify-center items-center bg-[#2776ea] text-white text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-[#2776ea]/95 transition-all shadow-lg shadow-blue-900/20">
                Our Solutions
            </Link>
            <Link href="/contact" className="inline-flex justify-center items-center bg-white text-slate-700 border border-slate-200 text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-all hover:border-slate-300">
                Talk to an Expert
            </Link>
        </div>

      </div>
    </section>
  );
}