"use client";

import {
  MapPin,
  Phone,
  ArrowUpRight,
  Building2,
  Globe2,
  Navigation,
} from "lucide-react";

export default function Branches() {
  const branches = [
    {
      city: "Salem",
      type: "Headquarters",
      address:
        "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK), Jalakandapuram, Salem - 636501.",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?q=Surappalli+Salem",
    },
    {
      city: "Madurai",
      type: "Regional Branch",
      address:
        "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi, Madurai, Tamil Nadu 625018.",
      contact: "+91 63833 26928",
      mapUrl: "https://maps.google.com/?q=Sikkandar+Savadi+Madurai",
    },
    {
      city: "Chennai",
      type: "Digital Hub",
      address:
        "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Rathna Nagar, Teynampet, Chennai, Tamil Nadu 600004.",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?q=Teynampet+Chennai",
    },
  ];

  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 font-sora"
    >
      <div className="relative mx-auto container px-6 md:px-12 lg:px-24">
        
        {/* --- HEADER --- */}
        <div className="relative z-10 mb-20 lg:mb-24 text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
             <Globe2 size={16} className="text-[#2776ea]" />
             <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
                Network Coverage
             </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
            Strategic Digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776ea] to-cyan-500">
              Operations Hubs
            </span>
          </h2>
          <p className="text-slate-500 text-base lg:text-lg font-medium max-w-2xl leading-relaxed">
            Visit our physical locations to experience how we merge industrial
            logic with creative engineering across Tamil Nadu
          </p>
        </div>

        {/* --- BRANCH CARDS --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-3xl bg-white p-2 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              {/* Inner Card Content */}
              <div className="relative z-10 flex flex-col h-full rounded-[1.25rem] border border-slate-100 bg-white p-6 lg:p-8 overflow-hidden group-hover:border-[#2776ea]/20 transition-colors">
                
                {/* Decoration: Subtle Map Pattern */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Building2 size={120} className="text-slate-900 -mr-8 -mt-8" />
                </div>

                {/* Top Section */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon Box */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#2776ea] shadow-sm ring-1 ring-slate-100 transition-all duration-500 group-hover:bg-[#2776ea] group-hover:text-white group-hover:scale-110">
                      <MapPin size={20} strokeWidth={2} />
                    </div>
                    
                    {/* Status Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-green-600 border border-green-100">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      Open
                    </span>
                  </div>

                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                    {branch.type}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#2776ea] transition-colors">
                    {branch.city}
                  </h3>
                </div>

                {/* Address Section */}
                <div className="flex-grow space-y-6">
                  <p className="text-sm leading-loose text-slate-500 font-medium">
                    {branch.address}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-100 my-6 group-hover:bg-slate-200 transition-colors" />

                {/* Bottom Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${branch.contact.replace(/\s/g, "")}`}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-xs font-bold text-slate-700 transition-all hover:bg-[#2776ea] hover:text-white hover:shadow-lg active:scale-95"
                  >
                    <Phone size={14} />
                    <span>Call Now</span>
                  </a>
                  
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all hover:border-[#2776ea] hover:text-[#2776ea] hover:shadow-md active:scale-95"
                    aria-label="Get Directions"
                  >
                    <Navigation size={16} />
                  </a>
                </div>
              </div>

              {/* Bottom Gradient Line (Reveals on Hover) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-[#2776ea] to-cyan-400 rounded-full transition-all duration-500 group-hover:w-1/3 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}