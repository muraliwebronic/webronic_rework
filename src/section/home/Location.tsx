"use client";

import { useState } from "react";
import { Globe2, MapPin, Navigation, Building2, LucideIcon, Briefcase } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

// --- CHILD COMPONENT: 3D LOCATION CARD (REDESIGNED) ---
const LocationCard = ({ 
    title, 
    addr, 
    icon: Icon, 
    accentColor = "#2776ea", // Default Blue
    tag
}: { 
    title: string, 
    addr: string, 
    icon: LucideIcon, 
    accentColor?: string,
    tag?: string
}) => (
    // CLEAN, COMPACT & UNIFORM DESIGN
    <div className="group h-full bg-white rounded-2xl border border-slate-200 p-6 flex flex-col hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
      
      <div className="flex items-start justify-between mb-4">
        {/* Icon Box */}
        <div 
            className="h-10 w-10 rounded-lg flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${accentColor}15`, color: accentColor }} // 15 = 10% opacity hex
        >
            <Icon size={20} strokeWidth={1.5} />
        </div>

        {/* Tag */}
        {tag && (
            <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                {tag}
            </span>
        )}
      </div>

      <div className="mt-auto">
        <h3 className="text-sm font-black text-slate-900 mb-2 leading-tight group-hover:text-[#2776ea] transition-colors">
            {title}
        </h3>
        <p className="text-xs font-medium text-slate-500 leading-relaxed">
            {addr}
        </p>
      </div>
    </div>
);


export default function Branches() {
  const branches = [
    {
      id: "all",
      city: "Global HQ",
      mapEmbed: "https://www.google.com/maps/d/embed?mid=1_YV73DNApxBopTdb3rgM35fFRAg6c4g&ehbc=2E312F&noprof=1", 
    },
  ];

  const [currentMap, setCurrentMap] = useState(branches[0]);

  return (
    <section
      id="location"
      className="relative bg-white py-24 font-sora overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <SectionHeader 
            title="Global Presence"
            highlight="Our Network"
            description="Strategically located across key technology hubs to deliver seamless support and innovation worldwide"
            centered={true}
            className="max-w-3xl mx-auto mb-16"
        />

        {/* --- MAP CONTAINER --- */}
        <div className="group relative w-full h-[500px] rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-2xl shadow-slate-200/50 mb-24">
          <iframe
            title="Webronic Industries Locations"
            src={currentMap.mapEmbed}
            width="100%"
            className="h-[calc(100%+60px)] -mt-[60px] w-full border-0  opacity-80 transition-all duration-700  group-hover:opacity-100"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* --- LOCATIONS GRID --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8">
            
            {/* INDIA OPERATIONS (Left) */}
            <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-8 pl-1">
                    <div className="p-2 rounded-lg bg-blue-50 text-[#2776ea]">
                        <MapPin size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">India Operations</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {[
                        { title: "Madurai R&D", addr: "JS Tower, Sikkandar Savadi - 625018", icon: Building2, tag: "HQ" },
                        { title: "Chennai Admin", addr: "Sakthi Apts, Cenotoph Rd, Teynampet", icon: Briefcase, tag: "Admin" },
                        { title: "Salem Hub", addr: "Sannasi Muniyappan Kovil, Surappalli", icon: Navigation, tag: "Dev" }
                    ].map((loc, idx) => (
                        <LocationCard 
                            key={idx}
                            title={loc.title}
                            addr={loc.addr}
                            icon={loc.icon}
                            accentColor="#2776ea"
                            tag={loc.tag}
                        />
                    ))}
                </div>
            </div>

            {/* INTERNATIONAL (Right) */}
            <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-8 pl-1">
                     <div className="p-2 rounded-lg bg-green-50 text-[#76ea27]">
                        <Globe2 size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">International</h3>
                </div>

                <div className="h-full max-h-[160px]">
                    <LocationCard 
                        title="Thingsatweb Sweden AB"
                        addr="Stockholm Region - Collaborating to bring Scandinavian innovation standards globally"
                        icon={Globe2}
                        accentColor="#76ea27"
                        tag="Partner"
                    />
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}