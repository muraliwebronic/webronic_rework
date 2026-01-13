"use client";

import Link from "next/link";
import { ArrowRight, Zap, Heart, Coffee, Globe, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const PERKS = [
  {
    icon: Globe,
    title: "Remote-First DNA",
    desc: "Work from anywhere. We value output and impact over hours and location.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Stack",
    desc: "Access to the latest hardware and software tools to fuel your creativity.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    desc: "Comprehensive health coverage and mental wellness support for you and your family.",
  },
  {
    icon: Coffee,
    title: "Zero-Ego Culture",
    desc: "A collaborative environment where the best ideas win, regardless of title.",
  },
];

export default function CareerSection() {
  return (
    <section
      id="career"
      className="relative py-20  lg:px-20 bg-white font-sora overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT: CONTENT & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <SectionHeader
              title="Join the Team"
              highlight="Build the Future"
              description="We solve complex problems at scale. We are looking for visionaries, engineers, and creators to help us architect high-performance digital solutions"
              centered={false} // Aligned left
              className="mb-10"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/career"
                className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#2776ea] transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                View Open Roles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:border-[#2776ea] hover:text-[#2776ea] transition-all"
              >
                Our Culture
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT: PERKS GRID */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {PERKS.map((perk, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:border-[#76ea27] hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1"
                >
                  {/* Icon Box */}
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-6 transition-all duration-300 group-hover:bg-[#76ea27] group-hover:border-[#76ea27] group-hover:text-white group-hover:scale-110">
                    <perk.icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#76ea27] transition-colors">
                    {perk.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}