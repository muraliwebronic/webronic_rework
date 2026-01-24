"use client";

import React from "react";
import { 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Settings, 
  Activity, 
  ArrowUpRight 
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { Variants, motion } from "framer-motion";
// Data Imports
import { MANUFACTURING_DATA_COLLECTION_DATA } from "../data/MANUFACTURING_DATA_COLLECTION_DATA";
import { MANUFACTURING_FP_DIGITAL_TWIN_DATA } from "../data/MANUFACTURING_FP_DIGITAL_TWIN_DATA";

// Animation Constants
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const // This specifically fixes the 'string' mismatch
    } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const lineVariants: Variants = {
  hidden: { height: 0 },
  visible: { 
    height: "100%", 
    transition: { duration: 1.5, ease: "easeInOut" } 
  }
};
// ============================================================================
// SUB-COMPONENT 1: INFRASTRUCTURE (Foundation Grid)
// ============================================================================
const InfrastructureSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-white py-20 lg:py-28 relative font-sora">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          badge="Foundation"
          title={data.title}
          description="Engineering the connectivity layer for industrial data flow"
          centered={true}
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {data.methods.map((method: any, index: number) => {
            const MethodIcon = method.icon;
            const isBlue = method.color === "blue";
            const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const accentBg = isBlue ? "bg-[#2776ea]/5" : "bg-[#76ea27]/5";

            return (
              <motion.div 
                key={index} 
                variants={fadeInScale} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#2776ea]/20 transition-all duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className={`h-12 w-12 rounded-xl ${accentBg} ${accentColor} flex items-center justify-center transition-all group-hover:scale-110`}>
                    <MethodIcon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{method.title}</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  {method.details.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className={`shrink-0 mt-1 ${accentColor}`} strokeWidth={3} />
                      <span className="text-sm font-semibold text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENT 2: DASHBOARD (Live Telemetry - Blue Section)
// ============================================================================


const DashboardSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-[#2776ea] py-20 lg:py-28 text-white relative overflow-hidden font-sora">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#76ea27]/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeader 
          isWhite 
          badge="Live Telemetry" 
          title={data.title} 
          centered={true} 
          className="mb-16"
          description="High-fidelity visual data for global operational visibility"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.metrics.map((metric: any, index: number) => {
            const MetricIcon = metric.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="group h-[380px] p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 flex flex-col hover:-translate-y-2 overflow-hidden"
              >
                {/* --- HEADER SECTION --- */}
                <div className="flex-shrink-0 mb-6">
                  <div className="flex  gap-4 items-center">
                    <div className="size-10 rounded-xl bg-white text-[#2776ea] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MetricIcon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold  leading-tight mb-1">{metric.title}</h3>
                      {metric.subTitle && (
                        <p className="text-[9px] text-blue-200 font-bold uppercase tracking-[0.2em]">
                          {metric.subTitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* --- SCROLLABLE LIST --- */}
                <div className="flex-grow overflow-y-auto pr-2 border-t border-white/10 pt-5
                  [&::-webkit-scrollbar]:w-1
                  [&::-webkit-scrollbar-track]:bg-white/5
                  [&::-webkit-scrollbar-thumb]:bg-white/20
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  hover:[&::-webkit-scrollbar-thumb]:bg-[#76ea27]/50">
                  <ul className="space-y-4">
                    {metric.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-blue-50 text-xs font-medium opacity-90">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0 shadow-[0_0_8px_#76ea27]" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* --- BOTTOM GRADIENT FADE --- */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent flex-shrink-0" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENT 3: FP ANALYZER (Engine Grid)
// ============================================================================
const FPAnalyzerSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 relative font-sora">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          badge="Proprietary Engine"
          title={data.title}
          description={data.description}
          centered={true}
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.features.map((feature: any, index: number) => {
            const FeatureIcon = feature.icon;
            const isBlue = feature.color === "blue";
            const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const accentBg = isBlue ? "bg-[#2776ea]/5" : "bg-[#76ea27]/5";

            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-11 w-11 rounded-xl ${accentBg} ${accentColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <FeatureIcon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{feature.title}</h3>
                </div>
                <ul className="space-y-3.5">
                  {feature.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-500">
                      <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${accentColor}`} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENT 4: DIGITAL TWIN (Split Layout)
// ============================================================================
const DigitalTwinSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-[#2776ea] py-20 lg:py-28 text-white relative overflow-hidden font-sora">
      <div className="absolute -bottom-32 -right-32 opacity-[0.03] text-white animate-[spin_60s_linear_infinite] pointer-events-none">
        <Settings size={600} strokeWidth={0.5} />
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[#76ea27]">
                  <Layers size={20} />
               </div>
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                 Digital <span className="text-[#76ea27]">Twin</span>
               </h2>
            </div>
            <h3 className="text-xl text-blue-100 font-bold mb-6 opacity-90">{data.subTitle}</h3>
            <p className="text-base text-blue-50 font-medium leading-relaxed mb-10 opacity-80">{data.description}</p>
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-[2.5rem] backdrop-blur-md">
              <h4 className="text-lg font-bold mb-3 text-[#76ea27] flex items-center gap-2">
                <ArrowUpRight size={18} /> Enterprise Definition
              </h4>
              <p className="text-sm text-white/70 font-medium leading-loose">{data.definition.content}</p>
            </div>
          </div>

          <div className="space-y-4">
            {data.capabilities.map((cap: any, index: number) => {
              const CapIcon = cap.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="group p-6 lg:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-center gap-5 mb-5 border-b border-white/5 pb-5">
                    <div className="h-10 w-10 rounded-full bg-white text-[#2776ea] flex items-center justify-center group-hover:bg-[#76ea27] group-hover:text-slate-900 transition-all">
                      <CapIcon size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#76ea27] transition-colors">{cap.title}</h4>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3.5">
                    {cap.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-blue-50/70 text-xs font-bold group-hover:text-white transition-colors">
                        <span className="h-1 w-1 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-[#76ea27] text-slate-900 flex flex-col items-center text-center mt-6"
            >
                <div className="h-14 w-14 rounded-full bg-slate-900 text-[#76ea27] flex items-center justify-center mb-5">
                  <Activity size={28} />
                </div>
                <h4 className="text-xl font-bold mb-2">Ready to Simulate?</h4>
                <p className="text-xs font-bold mb-8 opacity-70">Start building your digital enterprise today.</p>
                <button className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-transform">
                  Get Started
                </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ManufacturingIntelligenceSuite() {
  const { infrastructure, dashboard } = MANUFACTURING_DATA_COLLECTION_DATA;
  const { fpAnalyzer, digitalTwin } = MANUFACTURING_FP_DIGITAL_TWIN_DATA;

  return (
    <div className="font-sora overflow-hidden bg-white">
      <InfrastructureSection data={infrastructure} />
      <DashboardSection data={dashboard} />
      <FPAnalyzerSection data={fpAnalyzer} />
      <DigitalTwinSection data={digitalTwin} />
    </div>
  );
}