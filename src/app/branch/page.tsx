"use client";

import {
  Phone,
  Navigation,
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function Branches() {
  const branches = [
    {
      city: "Salem",
      type: "Headquarters",
      address:
        "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK), Jalakandapuram, Salem - 636501",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?q=Surappalli+Salem",
    },
    {
      city: "Madurai",
      type: "Regional Branch",
      address:
        "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi, Madurai, Tamil Nadu 625018",
      contact: "+91 63833 26928",
      mapUrl: "https://maps.google.com/?q=Sikkandar+Savadi+Madurai",
    },
    {
      city: "Chennai",
      type: "Digital Hub",
      address:
        "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Rathna Nagar, Teynampet, Chennai, Tamil Nadu 600004",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?q=Teynampet+Chennai",
    },
  ];

  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-slate-50 py-24 font-sora"
    >
      <div className="relative mx-auto container px-6 md:px-12 lg:px-24">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
            <SectionHeader 
                badge="Network Coverage"
                title="Strategic Digital"
                highlight="Operations Hubs"
                description="Visit our physical locations to experience how we merge industrial logic with creative engineering across Tamil Nadu"
                centered={false}
                className="max-w-3xl"
            />
        </div>
        
        {/* --- CLEAN CARD GRID --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200 p-8 hover:border-[#2776ea]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1"
            >
              
              <div>
                  {/* Type Label (Clean Text, No Badge) */}
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#2776ea] mb-3">
                    {branch.type}
                  </span>

                  {/* City Name */}
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                    {branch.city}
                  </h3>

                  {/* Address */}
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {branch.address}
                  </p>
              </div>

              {/* Card Footer: Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                 
                 {/* Call Button */}
                 <a
                   href={`tel:${branch.contact.replace(/\s/g, "")}`}
                   className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 text-xs font-bold text-slate-700 hover:bg-[#2776ea] hover:text-white transition-all active:scale-95"
                 >
                   <Phone size={14} />
                   <span>Call Now</span>
                 </a>

                 {/* Map Icon Button */}
                 <a
                   href={branch.mapUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#2776ea] hover:text-[#2776ea] transition-all active:scale-95 group/icon"
                   aria-label="Get Directions"
                 >
                   <Navigation size={16} className="group-hover/icon:rotate-45 transition-transform" />
                 </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}