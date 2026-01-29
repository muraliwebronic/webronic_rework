"use client";

import Link from "next/link";
import { ArrowRight, Zap, Heart, Coffee, Globe, ArrowUpRight, LucideIcon } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

const PERKS = [
  {
    icon: Globe,
    title: "Remote-First DNA",
    desc: "Work from anywhere. We value output and impact over hours and location",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Stack",
    desc: "Access to the latest hardware and software tools to fuel your creativity",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    desc: "Comprehensive health coverage and mental wellness support for you and your family",
  },
  {
    icon: Coffee,
    title: "Zero-Ego Culture",
    desc: "A collaborative environment where the best ideas win, regardless of title",
  },
];

const PerkCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) => (
  <div className="group relative mx-auto max-w-7xl flex flex-col justify-end h-full font-sora pt-12">
    {/* 1. FLOATING ICON BOX */}
    <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
      <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] border border-slate-100 transition-transform duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-3">
        <Icon
          size={32}
          className="text-slate-400 group-hover:text-[#76ea27] transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>
    </div>

    {/* 2. PEDESTAL BASE */}
    <div className="relative h-full w-full bg-white rounded-[2.5rem] border border-slate-100 p-8 pt-16 flex flex-col items-center shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-green-900/5 group-hover:border-green-100 overflow-hidden">
      {/* Fake Floor Shadow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900/5 blur-lg rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-green-900/10 group-hover:blur-xl" />

      {/* Content Section */}
      <div className="relative z-10 text-center flex-1 flex flex-col">
        <h3 className="text-h3 font-bold text-slate-900 mb-3 group-hover:text-[#76ea27] transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-submenu text-slate-500 leading-relaxed line-clamp-3">
          {desc}
        </p>
      </div>

      {/* Subtle Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  </div>
);


export default function CareerSection() {
  return (
    <section
      id="career"
      className="relative py-24 bg-white font-sora overflow-hidden"
    >
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* --- CONTENT & CTA (ORDER 2 on Desktop/Right Side) --- */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:order-2">
            <SectionHeader
              badge="Career"
              title="Join the Team"
              highlight="Build the Future"
              description="We solve complex problems at scale. We are looking for visionaries, engineers, and creators to help us architect high-performance digital solutions"
              centered={false}
              className="mb-10"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/careers"
                className="group inline-flex items-center justify-center gap-3 bg-[#2776ea] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-[#76ea27] transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
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

          <div className="lg:col-span-7 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-12">
              {PERKS.map((perk, i) => (
                <PerkCard 
                    key={i}
                    icon={perk.icon}
                    title={perk.title}
                    desc={perk.desc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}