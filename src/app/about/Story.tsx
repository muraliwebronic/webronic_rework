"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, 
    },
  },
};


const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 1.5,
      ease: [0.4, 0.0, 0.2, 1] as const, 
    },
  },
};

export default function StoryTimeline({ story }: { story: any }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden font-sora">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="Our Journey"
            title={story.title}
            description={story.subtitle}
            centered={true}
            className="mb-24"
          />
        </motion.div>

        <div className="relative">
          {/* Central Timeline Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#2776ea] via-[#76ea27] to-[#2776ea]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={lineVariants}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {story.timeline.map((event: any, i: number) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div
                      className={`group p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 hover:border-[#2776ea]/30 transition-all duration-500 ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="md:hidden inline-block px-3 py-1 rounded-full bg-[#2776ea] text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                        {event.year}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                        {event.desc}
                      </p>
                    </div>
                  </motion.div>

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                      className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm z-30"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2776ea]" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className={`hidden md:block absolute top-0 whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm text-[#2776ea] font-black text-xs tracking-tighter ${
                        isEven ? "right-12" : "left-12"
                      }`}
                    >
                      {event.year}
                    </motion.div>
                  </div>

                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
