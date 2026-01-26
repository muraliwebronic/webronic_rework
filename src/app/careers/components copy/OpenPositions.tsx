"use client";

import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Code2,
  Cpu,
  Cloud,
  Shield,
  Layout,
  Terminal,
  Send
} from "lucide-react";
import { OPEN_POSITIONS_DATA } from "../data/OPEN_POSITIONS_DATA";

export default function OpenPositions() {
  const { header, categories, jobs } = OPEN_POSITIONS_DATA;
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const filteredJobs = activeCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  // Helper to map category to icon
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Software Development": return Code2;
      case "AI & Machine Learning": return Cpu;
      case "Cloud & DevOps": return Cloud;
      case "Cybersecurity": return Shield;
      case "UI/UX Design": return Layout;
      case "Freshers & Interns": return Terminal;
      default: return Briefcase;
    }
  };

  return (
    <section className="py-24 bg-slate-50 font-sora" id="open-positions">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2776ea] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              {header.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            {header.title}
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* --- Category Filter --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#2776ea] text-white shadow-lg shadow-blue-900/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#2776ea] hover:text-[#2776ea]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Jobs List --- */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div 
              key={job.id}
              className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                expandedJob === job.id 
                  ? "border-[#2776ea] shadow-xl shadow-blue-900/10" 
                  : "border-slate-100 shadow-sm hover:shadow-md hover:border-[#2776ea]/30"
              }`}
            >
              {/* Job Header (Clickable) */}
              <div 
                onClick={() => toggleJob(job.id)}
                className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-lg bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-[#2776ea] border border-slate-100">
                      {job.category}
                    </span>
                    {job.salary && (
                      <span className="px-3 py-1 rounded-lg bg-[#76ea27]/10 text-[10px] font-bold uppercase tracking-widest text-[#5fb521] border border-[#76ea27]/20">
                        {job.salary}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-slate-400" />
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-slate-400" />
                      {job.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden md:flex flex-wrap gap-2 justify-end max-w-xs">
                    {job.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-50 rounded-md text-xs font-semibold text-slate-600 border border-slate-100">
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="px-2 py-1 bg-slate-50 rounded-md text-xs font-semibold text-slate-400 border border-slate-100">
                        +{job.skills.length - 3}
                      </span>
                    )}
                  </div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                    expandedJob === job.id ? "bg-[#2776ea] text-white" : "bg-slate-50 text-slate-400 group-hover:text-[#2776ea]"
                  }`}>
                    {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>

              {/* Job Details (Expandable) */}
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  expandedJob === job.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden bg-slate-50/50 border-t border-slate-100">
                  <div className="p-6 md:p-10 grid md:grid-cols-2 gap-10">
                    
                    {/* Left Col */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" />
                          What You'll Do
                        </h4>
                        <ul className="space-y-2">
                          {job.details.whatYouWillDo.map((item, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-3">
                              <span className="text-slate-300 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {job.details.conversion && (
                        <div className="bg-[#76ea27]/10 p-4 rounded-xl border border-[#76ea27]/20">
                          <p className="text-sm font-bold text-[#5fb521]">
                            Conversion: {job.details.conversion}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Col */}
                    <div className="space-y-8">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27]" />
                          Required Skills & Tech
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-600 border border-slate-200 shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {job.details.niceToHave && (
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide opacity-80">Nice To Have</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {job.details.niceToHave.join(", ")}
                          </p>
                        </div>
                      )}

                      {job.details.projects && (
                        <div>
                          <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide opacity-80">Sample Projects</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {job.details.projects}
                          </p>
                        </div>
                      )}

                      <a 
                        href={`/careers/apply/${job.id}`} 
                        className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-xl bg-[#2776ea] text-white font-bold hover:bg-[#1a5bb5] transition-colors shadow-lg shadow-blue-900/20"
                      >
                        Apply Now <ArrowRight size={18} />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer CTA --- */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-lg inline-block max-w-2xl">
            <h3 className="text-xl font-black text-slate-900 mb-2">Not Finding the Right Role?</h3>
            <p className="text-slate-500 font-medium mb-6">
              We’re always looking for talented individuals. Submit a general application and we’ll keep you in mind for future openings.
            </p>
            <a 
              href="/careers/general-application"
              className="inline-flex items-center gap-2 text-[#2776ea] font-bold hover:text-[#76ea27] transition-colors"
            >
              <Send size={18} />
              Submit General Application
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}