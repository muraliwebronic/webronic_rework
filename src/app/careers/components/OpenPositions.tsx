"use client";

import { useState } from "react";
import { CAREERS_DATA } from "@/AllData/career/CAREER";
import SectionHeader from "@/components/common/SectionHeader";
import { ChevronDown, MapPin, Briefcase, ArrowRight } from "lucide-react";

export default function OpenPositions() {
  const { openPositions } = CAREERS_DATA;
  const [activeCat, setActiveCat] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = activeCat === "All" ? openPositions.jobs : openPositions.jobs.filter(j => j.category === activeCat);

  return (
    <section id="open-positions" className="bg-slate-50 py-24 font-sora">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <SectionHeader 
           badge={openPositions.header.badge}
           title={openPositions.header.title}
           description={openPositions.header.description}
           centered={true}
           className="mb-12"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
           {openPositions.categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeCat === cat ? "bg-[#2776ea] text-white shadow-lg shadow-blue-900/20" : "bg-white text-slate-600 border border-slate-200 hover:border-[#2776ea]"}`}
              >
                {cat}
              </button>
           ))}
        </div>

        {/* Job List */}
        <div className="space-y-4">
           {filtered.map(job => (
              <div key={job.id} className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${expanded === job.id ? "border-[#2776ea] shadow-xl shadow-blue-900/10" : "border-slate-100 hover:border-[#2776ea]/30"}`}>
                 <button 
                    onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                    className="w-full p-6 text-left flex items-center justify-between"
                 >
                    <div>
                       <span className="text-[10px] font-bold uppercase text-[#2776ea] tracking-wider mb-1 block">{job.category}</span>
                       <h3 className="text-lg font-black text-slate-900 mb-2">{job.title}</h3>
                       <div className="flex gap-4 text-xs font-bold text-slate-400">
                          <span className="flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                          <span className="flex items-center gap-1"><Briefcase size={12}/> {job.experience}</span>
                       </div>
                    </div>
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${expanded === job.id ? "bg-[#2776ea] text-white rotate-180" : "bg-slate-50 text-slate-400"}`}>
                       <ChevronDown size={20} />
                    </div>
                 </button>

                 {/* Expanded Details */}
                 {expanded === job.id && (
                    <div className="px-6 pb-8 border-t border-slate-50 bg-slate-50/50 pt-6">
                       <p className="text-sm text-slate-600 mb-6">{job.description}</p>
                       <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                             <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase">Responsibilities</h4>
                             <ul className="space-y-2">
                                {job.details.whatYouWillDo.map((item, i) => (
                                   <li key={i} className="text-xs text-slate-600 flex gap-2"><span className="text-[#2776ea]">•</span> {item}</li>
                                ))}
                             </ul>
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase">Skills</h4>
                             <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, i) => (
                                   <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-bold text-slate-600">{skill}</span>
                                ))}
                             </div>
                          </div>
                       </div>
                       <button className="w-full md:w-auto px-8 py-3 bg-[#2776ea] text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-blue-900/20 transition-all flex items-center justify-center gap-2">
                          Apply Now <ArrowRight size={16} />
                       </button>
                    </div>
                 )}
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}