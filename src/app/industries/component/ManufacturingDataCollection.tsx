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

// Data Imports
import { MANUFACTURING_DATA_COLLECTION_DATA } from "../data/MANUFACTURING_DATA_COLLECTION_DATA";
import { MANUFACTURING_FP_DIGITAL_TWIN_DATA } from "../data/MANUFACTURING_FP_DIGITAL_TWIN_DATA";

// ============================================================================
// SUB-COMPONENT 1: INFRASTRUCTURE (Static Grid)
// ============================================================================
const InfrastructureSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-white py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          badge="Foundation"
          title={data.title}
          description="Engineering the connectivity layer for seamless industrial data flow."
          centered={true}
          className="mb-20"
        />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {data.methods.map((method: any, index: number) => {
            const MethodIcon = method.icon;
            const isBlue = method.color === "blue";
            const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const accentBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

            return (
              <div key={index} className="group relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#2776ea]/20 hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-8">
                  <div className={`h-16 w-16 rounded-2xl ${accentBg} ${accentColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <MethodIcon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">{method.title}</h3>
                </div>
                <ul className="space-y-4 flex-grow">
                  {method.details.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={`shrink-0 mt-1 ${accentColor}`} />
                      <span className="text-base font-semibold text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENT 2: DASHBOARD (Static Grid - Primary Blue)
// ============================================================================
const DashboardSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute -top-20 -right-20 opacity-[0.08] text-white animate-[spin_60s_linear_infinite]">
          <Settings size={600} strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader 
          isWhite 
          badge="Live Telemetry" 
          title={data.title} 
          description="Comprehensive real-time visibility into your global operations through high-fidelity visual data." 
          centered={true} 
          className="mb-20"
        />

        {/* Standard Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.metrics.map((metric: any, index: number) => {
            const MetricIcon = metric.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-[3rem] bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-all duration-500 shadow-xl flex flex-col hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-white text-[#2776ea] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MetricIcon size={28} />
                  </div>
               
                </div>

                <h3 className="font-black text-2xl mb-2">{metric.title}</h3>
                {metric.subTitle && (
                  <p className="text-[10px] text-blue-100 font-black uppercase tracking-[0.2em] mb-6 opacity-70">
                    {metric.subTitle}
                  </p>
                )}

                <ul className="space-y-4 pt-6 border-t border-white/10 mt-auto">
                  {metric.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-blue-50 text-sm font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENT 3: FP ANALYZER (Static Grid)
// ============================================================================
const FPAnalyzerSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          badge="Proprietary Engine"
          title={data.title}
          description={data.description}
          centered={true}
          className="mb-20"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature: any, index: number) => {
            const FeatureIcon = feature.icon;
            const isBlue = feature.color === "blue";
            const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
            const accentBg = isBlue ? "bg-[#2776ea]/5" : "bg-[#76ea27]/5";

            return (
              <div key={index} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-5 mb-8">
                  <div className={`h-14 w-14 rounded-2xl ${accentBg} ${accentColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <FeatureIcon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">{feature.title}</h3>
                </div>
                <ul className="space-y-4">
                  {feature.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                      <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${accentColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SUB-COMPONENT 4: DIGITAL TWIN (Static Split Layout)
// ============================================================================
const DigitalTwinSection = ({ data }: { data: any }) => {
  return (
    <section className="bg-[#2776ea] py-24 lg:py-32 text-white relative overflow-hidden">
      <div className="absolute -bottom-32 -right-32 opacity-[0.05] text-white animate-[spin_60s_linear_infinite] pointer-events-none">
        <Settings size={800} strokeWidth={0.5} />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky-ish Text */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-[#76ea27]">
                  <Layers size={24} />
               </div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                 Digital <span className="text-[#76ea27]">Twin</span>
               </h2>
            </div>
            <h3 className="text-2xl text-blue-100 font-bold mb-8 opacity-80">{data.subTitle}</h3>
            <p className="text-lg text-blue-50 font-medium leading-relaxed mb-12">{data.description}</p>
            <div className="bg-white/10 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md">
              <h4 className="text-xl font-black mb-4 text-[#76ea27] flex items-center gap-2">
                <ArrowRight size={20} /> Enterprise Definition
              </h4>
              <p className="text-white/80 font-medium leading-loose">{data.definition.content}</p>
            </div>
          </div>

          {/* Right Column: Vertical Stack of Cards */}
          <div className="space-y-6">
            {data.capabilities.map((cap: any, index: number) => {
              const CapIcon = cap.icon;
              return (
                <div key={index} className="group p-8 rounded-[2.5rem] bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-x-2">
                  <div className="flex items-center gap-6 mb-6 border-b border-white/10 pb-6">
                    <div className="h-12 w-12 rounded-full bg-white text-[#2776ea] flex items-center justify-center group-hover:bg-[#76ea27] group-hover:text-slate-900 transition-colors">
                      <CapIcon size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-white group-hover:text-[#76ea27] transition-colors">{cap.title}</h4>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {cap.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-blue-50/80 text-sm font-semibold group-hover:text-white transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            
            {/* CTA Card */}
            <div className="p-10 rounded-[2.5rem] bg-[#76ea27] text-slate-900 flex flex-col justify-center items-center text-center mt-8">
                <div className="h-16 w-16 rounded-full bg-slate-900 text-[#76ea27] flex items-center justify-center mb-6">
                  <Activity size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4">Ready to Simulate?</h4>
                <p className="text-sm font-bold mb-8 opacity-80">Start building your digital enterprise today.</p>
                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                  Get Started
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN COMPONENT EXPORT
// ============================================================================
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