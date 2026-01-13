"use client";

import { useState } from "react";
import { Globe2, MapPin, Navigation, Building2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function Branches() {
  const branches = [
    {
      id: "all",
      city: "Global HQ",
      // Ensure your embed URL is correct here
      mapEmbed: "https://www.google.com/maps/d/embed?mid=1_YV73DNApxBopTdb3rgM35fFRAg6c4g&ehbc=2E312F&noprof=1", 
    },
  ];

  const [currentMap, setCurrentMap] = useState(branches[0]);

  return (
    <section
      id="location"
      className="relative bg-white py-24 font-sora overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <SectionHeader 
            title="Global Presence"
            highlight="Our Network"
            description="Strategically located across key technology hubs to deliver seamless support and innovation worldwide."
            centered={true}
            className="max-w-3xl mx-auto mb-16"
        />

        {/* --- MAP CONTAINER --- */}
        {/* 'overflow-hidden' clips the top part of the iframe we are pulling up */}
        <div className="group relative w-full h-[500px] rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-slate-200/50 mb-20">
          
          <iframe
            title="Webronic Industries Locations"
            src={currentMap.mapEmbed}
            width="100%"
            // CSS TRICK: Taller height + Negative Top Margin = Cropped Header
            className="h-[calc(100%+60px)] -mt-[60px] w-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Map Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 pointer-events-none">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-xl flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Navigation size={18} />
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Viewing
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                        {currentMap.city}
                    </p>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-[#76ea27] animate-pulse" />
            </div>
          </div>
        </div>

     {/* --- LOCATIONS GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* India Operations List */}
          <div>
            <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2776ea]">
                    <MapPin size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">
                    India Operations
                </h3>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Madurai R&D Hub", addr: "JS Tower, Alanganallur Main Road, Sikkandar Savadi - 625018" },
                { title: "Chennai Admin Hub", addr: "A1-20, Sakthi Apartments, Cenotoph Road, Teynampet - 600004" },
                { title: "Salem Digital Hub", addr: "1-718, Sannasi Muniyappan Kovil, Surappalli - 636501" }
              ].map((loc, idx) => (
                <div 
                    key={idx} 
                    className="group relative flex items-start gap-6 p-6 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:border-[#2776ea] hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                >
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                  {/* Tech Squircle Icon */}
                  <div className="relative z-10 shrink-0 h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 transition-all duration-300 group-hover:bg-[#2776ea] group-hover:border-[#2776ea] group-hover:text-white group-hover:scale-105">
                    <Building2 size={24} strokeWidth={1.5} />
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className="text-sm font-black text-slate-900 mb-1.5 group-hover:text-[#2776ea] transition-colors">
                        {loc.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed max-w-xs">
                      {loc.addr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International & Global Reach */}
          <div className="flex flex-col gap-6">
            
            {/* European Operations (Bright Version) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#76ea27]">
                    <Globe2 size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">
                    International
                </h3>
              </div>

              <div className="group relative p-8 rounded-[2rem] bg-white border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50 transition-all duration-300 hover:border-[#76ea27] hover:-translate-y-1">
                {/* Bright Abstract Bg */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#76ea27]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#76ea27]/10 text-[#76ea27] text-[10px] font-black uppercase tracking-widest mb-4 border border-[#76ea27]/20">
                    Strategic Partner
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Thingsatweb Sweden AB</h4>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm mb-6">
                    Collaborating to bring Scandinavian innovation standards to global digital solutions.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#76ea27] animate-pulse" />
                    Stockholm Region
                  </div>
                </div>
              </div>
            </div>

            {/* Global Reach Stat */}
            <div className="flex-1 rounded-[2rem] p-8 border border-slate-200 bg-slate-50/50 flex flex-col justify-center transition-all hover:bg-white hover:border-[#2776ea] hover:shadow-lg">
               <div className="flex items-center gap-3 mb-3">
                 <Globe2 size={20} className="text-[#2776ea]" />
                 <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">
                    Global Reach
                 </h4>
               </div>
               <p className="text-sm font-medium text-slate-600 leading-relaxed">
                 Serving clients across <span className="text-slate-900 font-bold">North America, Europe, Asia-Pacific</span>, and the <span className="text-slate-900 font-bold">Middle East</span>.
               </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}