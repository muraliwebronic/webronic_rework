"use client";

import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";

export default function CultureValues() {
  const { culture } = CAREERS_DATA;

  return (
    <div className="font-sora">
      
      {/* --- CORE VALUES (Light Section) --- */}
      <section className="bg-slate-50 py-24 relative border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeader 
             badge={culture.header.badge}
             title={culture.header.title}
             highlight={culture.header.highlight}
             description={culture.header.description}
             centered={true}
             className="max-w-3xl mx-auto mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culture.coreValues.map((value, idx) => {
               const isBlue = value.color === "blue";
               const accentColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
               const iconBg = isBlue ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";

               return (
                 <div 
                    key={idx} 
                    className={`group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col ${value.fullWidth ? "lg:col-span-3 lg:flex-row lg:items-center lg:gap-8" : ""}`}
                 >
                    {/* Floating Icon */}
                    <div className={`h-14 w-14 shrink-0 rounded-2xl ${iconBg} flex items-center justify-center ${accentColor} mb-6 lg:mb-0 group-hover:scale-110 transition-transform duration-300`}>
                       <value.icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <div className={value.fullWidth ? "lg:flex-1" : ""}>
                      <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                 </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* --- WORK ENVIRONMENT (Primary Blue Section) --- */}
      <section className="py-24 bg-[#2776ea] relative overflow-hidden text-white">
         
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
         
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
                 {culture.environment.title}
               </h2>
               <div className="h-1.5 w-20 bg-white/30 mx-auto rounded-full" />
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {culture.environment.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-white/10 border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
                  >
                     <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                           <item.icon size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                     </div>
                     <p className="text-sm text-blue-50 font-medium leading-relaxed pl-14 opacity-90">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}