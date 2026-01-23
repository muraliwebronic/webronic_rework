"use client";

import {
  MapPin,
  Award,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Heart,
  Globe2,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Building2,
  Activity,
  Layers,
} from "lucide-react";
import { ABOUT_PAGE_DATA } from "@/AllData/About/ABOUT_PAGE_DATA";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion"; 
import TeamComponent from "./TeamCompont";

export default function AboutPageContent() {
  const {
    hero,
    overview,
    story,
    leadership,
    presence,
    metrics,
    certifications,
    csr,
    culture,
    careers,
    contact,
  } = ABOUT_PAGE_DATA;

  return (
    <div className="font-sora bg-slate-50 overflow-x-hidden selection:bg-[#2776ea] selection:text-white">
      {/* --- HERO SECTION (Using UniversalHero Layout) --- */}
      <section className="relative w-full bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 font-sora overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* --- LEFT: COMPACT TEXT --- */}
            <div className="max-w-2xl">
              <SectionHeader
                badge="Est. 2010"
                title="Architecting Digital"
                highlight="Excellence"
                description={hero.subHeadline.split("|")[0]}
                centered={false}
                size="default"
                className="mb-6"
              />

              {/* Small CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#values"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2776ea] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a5bbd] transition-all shadow-md active:scale-95"
                >
                  Our Values
                </Link>
                <Link
                  href="#leadership"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-white hover:border-[#2776ea]/30 hover:text-[#2776ea] transition-all active:scale-95"
                >
                  Meet the Team
                </Link>
              </div>
            </div>

            {/* --- RIGHT: RE-DESIGNED COMPACT VISUAL --- */}
            <div className="relative hidden lg:flex justify-end items-center">
              {/* 1. Engineering Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 opacity-50" />

              {/* 2. Main Module Card */}
              <div className="relative z-10 w-full max-w-[320px] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                {/* Top Status Bar */}
                <div className="bg-slate-50/50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      Operational
                    </span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6">
                  {/* Icon & Identity */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      <Building2 size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        Organization
                      </span>
                      <span className="text-sm font-bold text-slate-900 leading-tight block">
                        Webronic Ind.
                      </span>
                    </div>
                  </div>

                  {/* Capabilities Stack (Pills) */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">
                      Core Pillars
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                        Innovation
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                        Integrity
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                        Scale
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Line */}
                <div className="h-1 w-full bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
              </div>

              {/* Floating Badge (Accent) */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl border border-slate-100 shadow-xl z-20 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                <div className="bg-[#76ea27]/10 p-1.5 rounded-lg text-[#6cd623]">
                  <Activity size={16} />
                </div>
                <div>
                  <span className="block text-[9px] font-bold text-slate-400 uppercase">
                    Growth
                  </span>
                  <span className="block text-xs font-bold text-slate-900">
                    15+ Years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPANY OVERVIEW --- */}
      <section
        id="values"
        className="py-24 lg:py-32 relative overflow-hidden bg-white font-sora"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          {/* 1. Header Area */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <SectionHeader
              badge="Who We Are"
              title={overview.title}
              description={overview.content[0]}
              centered={true}
            />
          </div>

          {/* 2. Differentiators (Clean Glass Cards) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
            {overview.differentiators.items.map((item, i) => (
              <div
                key={i}
                className="group relative p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#2776ea]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Icon Container */}
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2776ea] group-hover:scale-110 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-500">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed font-medium text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Core Values (Modern Blue Bento) */}
          <div className="relative rounded-[3.5rem] bg-[#2776ea] p-10 md:p-20 overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Decorative Internal Glows */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#76ea27]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-16">
                <SectionHeader
                  badge="Our Core"
                  title={overview.values.title}
                  description="The principles that guide every decision we make."
                  centered={true}
                  isWhite={true}
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {overview.values.items.map((val, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    {/* Value Icon */}
                    <div className="mb-6 h-14 w-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#76ea27] group-hover:text-slate-900 group-hover:border-[#76ea27] transition-all duration-500 shadow-lg">
                      <val.icon size={24} strokeWidth={1.5} />
                    </div>

                    {/* Value Text */}
                    <h4 className="font-bold text-xl text-white mb-3 tracking-tight">
                      {val.title}
                    </h4>
                    <p className="text-blue-50/80 leading-relaxed text-sm font-medium">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR STORY (Animated Clean Version) --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden font-sora">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <SectionHeader
            badge="Our Journey"
            title={story.title}
            description={story.subtitle}
            centered={true}
            className="mb-24"
          />

          <div className="relative">
            {/* Central Timeline Track */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {story.timeline.map((event, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative flex flex-col md:flex-row items-center justify-between ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* 1. The Content Card */}
                    <div className="w-full md:w-[45%] pl-12 md:pl-0">
                      <div
                        className={`group relative p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 hover:border-[#2776ea]/20 transition-all duration-500 ${
                          isEven ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {/* Mobile Year Tag */}
                        <div className="md:hidden inline-block px-3 py-1 rounded-full bg-[#2776ea]/10 text-[#2776ea] text-[10px] font-bold uppercase tracking-widest mb-4">
                          {event.year}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed font-medium text-sm">
                          {event.desc}
                        </p>
                      </div>
                    </div>

                    {/* 2. The Center Year Pedestal (Desktop) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                      {/* Outer Ring */}
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-[#2776ea] z-20 shadow-[0_0_0_4px_white]" />

                      {/* Year Badge (Floating) */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 font-bold text-xs tracking-wider transition-all duration-500 group-hover:scale-105 group-hover:text-[#2776ea] ${
                          isEven ? "right-10" : "left-10"
                        }`}
                      >
                        {event.year}
                      </div>
                    </div>

                    {/* 3. Empty Spacer for Desktop Symmetry */}
                    <div className="hidden md:block md:w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TeamComponent />

      {/* --- METRICS (Blue Strip) --- */}
      <section className="py-20 bg-[#2776ea] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center divide-x divide-white/20">
            {metrics.stats.slice(0, 4).map((stat, i) => (
              <div key={i} className="group px-4">
                <p className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP TEAM (Floating Pedestal) --- */}
      {/* --- LEADERSHIP TEAM (Redesigned with Universal Cards) --- */}
      <section id="leadership" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader
            badge="Team"
            title={leadership.title}
            description="The visionaries guiding our path."
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {leadership.members.map((leader, i) => {
              // Alternate styling for visual interest
              const isEven = i % 2 === 0;
              const accentColor = isEven ? "text-[#2776ea]" : "text-[#76ea27]";
              const accentBg = isEven ? "bg-[#2776ea]/10" : "bg-[#76ea27]/10";
              const borderColor = isEven ? "bg-[#2776ea]" : "bg-[#76ea27]";

              return (
                <div
                  key={i}
                  className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative overflow-hidden flex flex-col h-full hover:-translate-y-2"
                >
                  {/* Subtle Top Line Reveal */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${borderColor}`}
                  />

                  {/* Header: Avatar & Action */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center ${accentBg} ${accentColor} group-hover:scale-105 transition-transform duration-300 shadow-sm`}
                    >
                      <Users size={24} strokeWidth={1.5} />
                    </div>
                    {/* Interactive Arrow Hint */}
                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-slate-400">
                      <ArrowRight size={16} className="-rotate-45" />
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${accentColor}`}
                  >
                    {leader.role}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                    {leader.name}
                  </h3>

                  {/* Bio Description */}
                  <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8 flex-grow border-b border-slate-50 pb-8">
                    {leader.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mt-auto">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Core Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {/* Assuming expertise might be a comma-separated string, or just one string. 
                          Splitting it makes it look like tags if it contains commas. */}
                      {leader.expertise.split(",").map((tag, t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wide group-hover:border-[#2776ea]/20 group-hover:text-[#2776ea] transition-colors"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE (Blue Map) --- */}
      <section className="py-24 bg-[#2776ea] text-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Offices */}
            <div>
              <SectionHeader
                badge="Global Operations"
                title={presence.title}
                description="Connecting dots across continents to serve you better."
                centered={false}
                isWhite={true}
                className="mb-12"
              />

              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-white/30">
                  <h3 className="text-white font-black uppercase tracking-widest text-sm mb-6">
                    India Operations
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-10">
                    {presence.india.map((loc, i) => (
                      <div key={i} className="group">
                        <div className="flex items-center gap-2 mb-2 text-white font-bold">
                          <MapPin size={16} />
                          {loc.city.split("(")[0]}
                        </div>
                        <p className="text-xs text-blue-50 leading-relaxed font-medium mb-1 opacity-80">
                          {loc.address}
                        </p>
                        {loc.phone && (
                          <p className="text-xs text-white font-bold opacity-70">
                            {loc.phone}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-[#76ea27]">
                  <h3 className="text-[#76ea27] font-black uppercase tracking-widest text-sm mb-4">
                    European Operations
                  </h3>
                  <p className="font-bold text-lg mb-2">
                    {presence.europe.partner}
                  </p>
                  <p className="text-sm text-blue-50 leading-relaxed max-w-md opacity-90">
                    {presence.europe.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Reach List & Extra Metrics */}
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 shadow-2xl">
              <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#76ea27] animate-pulse" />
                Global Reach
              </h3>
              <ul className="space-y-6">
                {presence.regions.map((region, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm text-blue-50 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <span className="font-bold text-white whitespace-nowrap w-24">
                      {region.split(":")[0]}
                    </span>
                    <span className="opacity-80">{region.split(":")[1]}</span>
                  </li>
                ))}
              </ul>

              {/* Extra Metrics in Box */}
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-black text-white">
                    {metrics.stats[6].value}
                  </p>
                  <p className="text-[10px] text-blue-100 uppercase tracking-widest mt-1">
                    Transactions
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">
                    {metrics.stats[7].value}
                  </p>
                  <p className="text-[10px] text-blue-100 uppercase tracking-widest mt-1">
                    Cloud Managed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS & AWARDS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <SectionHeader
              badge="Recognition"
              title={certifications.title}
              centered={true}
            />
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {certifications.quality.map((cert, i) => (
                <span
                  key={i}
                  className="px-5 py-2 rounded-xl bg-slate-50 text-slate-700 text-xs font-bold border border-slate-200 uppercase tracking-wider"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-20">
            {/* Partnerships (White Cards) */}
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-lg font-black text-[#2776ea] mb-8 flex items-center gap-2">
                <CheckCircle2 size={20} /> Cloud Partnerships
              </h3>
              <ul className="space-y-6">
                {certifications.cloud.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#2776ea] mt-2 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">{p.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-lg font-black text-[#76ea27] mb-8 flex items-center gap-2">
                <CheckCircle2 size={20} /> Tech Partnerships
              </h3>
              <ul className="space-y-6">
                {certifications.tech.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">{p.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Awards Strip */}
          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Award className="text-yellow-500" />
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-sm">
                Industry Recognition
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {metrics.awards.map((award, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    "{award}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CSR & CULTURE --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader
            badge="Impact"
            title={culture.title}
            description={culture.desc}
            centered={true}
            className="max-w-3xl mx-auto mb-16"
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {/* Left: Environment */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-8">Values in Action</h3>
              <div className="space-y-4">
                {culture.points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2776ea]/30 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Perks (Blue Card) */}
            <div className="bg-[#2776ea] p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-lg shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <h3 className="font-bold text-xl mb-8 flex items-center gap-2 relative z-10">
                <Award size={20} /> Perks & Benefits
              </h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {culture.perks.map((perk, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/20 text-xs font-bold border border-white/10 backdrop-blur-md hover:bg-white/30 transition-colors cursor-default"
                  >
                    {perk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CSR Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                color: "text-blue-500",
                bg: "bg-blue-50",
                data: csr.education,
              },
              {
                icon: Leaf,
                color: "text-green-500",
                bg: "bg-green-50",
                data: csr.environment,
              },
              {
                icon: Heart,
                color: "text-red-500",
                bg: "bg-red-50",
                data: csr.community,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6`}
                >
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-4 text-slate-900">
                  {item.data.title}
                </h3>
                <ul className="space-y-3">
                  {item.data.items.map((txt, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-500 flex items-start gap-2 leading-relaxed"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full ${item.bg.replace(
                          "50",
                          "400"
                        )} shrink-0`}
                      />
                      {txt.replace("• ", "")}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAREERS CTA (Blue Card) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-[#2776ea] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#76ea27]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#76ea27] font-bold uppercase tracking-widest text-xs mb-4 block">
                  We're Hiring
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  {careers.title}
                </h2>
                <p className="text-blue-50 text-lg mb-8 leading-relaxed font-medium opacity-90">
                  {careers.desc}
                </p>
                <a
                  href={careers.ctaLink}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2776ea] font-bold hover:bg-slate-50 transition-colors shadow-lg group"
                >
                  View Openings{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div className="flex flex-wrap gap-3 content-start">
                {careers.positions.map((pos, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 rounded-full bg-white/10 text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors cursor-default backdrop-blur-sm"
                  >
                    {pos}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT FOOTER --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Contact Main */}
            <div>
              <div className="flex items-center gap-3 font-black text-xl text-slate-900 mb-8">
                <div className="h-10 w-10 rounded-xl bg-[#2776ea] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Phone size={20} />
                </div>
                Contact Us
              </div>
              <div className="space-y-5 text-sm font-medium text-slate-500">
                <a
                  href={`mailto:${contact.general.email}`}
                  className="flex items-center gap-3 hover:text-[#2776ea] transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#2776ea] transition-colors">
                    <Mail size={16} />
                  </div>
                  {contact.general.email}
                </a>
                <a
                  href={`tel:${contact.general.phone}`}
                  className="flex items-center gap-3 hover:text-[#2776ea] transition-colors group"
                >
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#2776ea] transition-colors">
                    <Phone size={16} />
                  </div>
                  {contact.general.phone}
                </a>
                <div className="flex items-center gap-3 group">
                  <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <Clock size={16} />
                  </div>
                  {contact.general.hours}
                </div>
              </div>
            </div>

            {/* Departments */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-8">
                Departments
              </h3>
              <div className="space-y-4 text-sm font-medium text-slate-500">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 mb-1">Sales</span>
                  <a
                    href={`mailto:${contact.sales}`}
                    className="hover:text-[#2776ea] transition-colors"
                  >
                    {contact.sales}
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 mb-1">Careers</span>
                  <a
                    href={`mailto:${contact.careers}`}
                    className="hover:text-[#2776ea] transition-colors"
                  >
                    {contact.careers}
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-8">
                Stay Connected
              </h3>
              <div className="flex gap-4 mb-8">
                {contact.social.map((soc, i) => (
                  <a
                    key={i}
                    href={`https://${soc.link}`}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#2776ea] hover:text-white hover:border-[#2776ea] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <soc.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-slate-500 max-w-md leading-relaxed">
                Subscribe to our newsletter for monthly insights on technology
                trends, digital transformation, and company updates.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © Webronic Industries Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}