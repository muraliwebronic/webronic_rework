"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { INSIGHTS } from "@/AllData/Home/BlogsData";

export default function LatestInsights() {
  const featuredPost = INSIGHTS.find((post) => post.featured) || INSIGHTS[0];
  const recentPosts = INSIGHTS.filter((post) => post.id !== featuredPost.id);

  return (
    <section className="relative py-20 lg:px-20 bg-white overflow-hidden font-sora">
      {/* Background Grid (Very subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* REUSABLE HEADER */}
        <SectionHeader
          badge="Blogs"
          title="Trends Shaping"
          highlight="The Future"
          description="Insights on AI driven manufacturing cloud transformation and IoT powered predictive maintenance"
          centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* --- LEFT COLUMN: FEATURED POST (7 Columns) --- */}
          <div className="lg:col-span-7">
            <Link
              href={featuredPost.link}
              className="group relative block h-full rounded-3xl overflow-hidden border border-slate-200 transition-all duration-500 hover:border-[#2776ea] hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* Image Area */}
              <div className="relative h-[400px] w-full overflow-hidden bg-slate-100">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Featured Tag */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-[#2776ea] shadow-sm">
                  Featured Insight
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 bg-white">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#2776ea]" />
                    {featuredPost.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[#2776ea] transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-xl">
                  {featuredPost.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#2776ea] transition-colors">
                  Read Full Story
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Link>
          </div>

          {/* --- RIGHT COLUMN: RECENT STREAM (5 Columns) --- */}
          <div className="lg:col-span-5 flex flex-col h-full justify-between gap-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2 border-b border-slate-100 pb-4">
              Recent Updates
            </h4>

            <div className="flex flex-col gap-4">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={post.link}
                  className="group flex gap-5 items-center p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300"
                >
                  {/* Small Thumbnail */}
                  <div className="relative shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-slate-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wide text-[#2776ea] mb-1">
                      {post.category}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#2776ea] transition-colors">
                      {post.title}
                    </h4>
                    <div className="text-xs font-medium text-slate-400">
                      {post.date}
                    </div>
                  </div>

                  {/* Hover Arrow (Only appears on hover) */}
                  <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ChevronRight size={20} className="text-[#76ea27]" />
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <Link
              href="/insights"
              className="mt-6 inline-flex items-center justify-center w-full py-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:border-[#2776ea] hover:text-[#2776ea] transition-all bg-white shadow-sm"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
