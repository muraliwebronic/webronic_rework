"use client";

import { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

type IntegrationItem = {
  image: string;
  rotation: string;
  rotation2?: string;
  link: string;
};

export default function Integrations() {
  const [eleProgress, setEleProgress] = useState(0);
  const eleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      setEleProgress(progress);
    },
  });

  const items: IntegrationItem[] = [
    {
      image: "/assets/24sju-se.png",
      rotation: "rotate-[30deg]",
      rotation2: "-rotate-[30deg]",
      link: "https://24-sju.se/",
    },
    {
      image: "/assets/images/valuechart.png",
      rotation: "rotate-[54deg]",
      rotation2: "-rotate-[54deg]",
      link: "https://www.valueflowsoft.com/",
    },
    {
      image: "/assets/images/tanluxlogo.png",
      rotation: "rotate-[78deg]",
      rotation2: "-rotate-[78deg]",
      link: "https://tanlux.se/",
    },
    {
      image: "/assets/images/fpanalyzer.png",
      rotation: "rotate-[102deg]",
      rotation2: "-rotate-[102deg]",
      link: "https://www.fpanalyzer.se/",
    },
    {
      image: "/assets/images/storetech-logo1.png",
      rotation: "rotate-[126deg]",
      rotation2: "-rotate-[126deg]",
      link: "https://store-tech.se/",
    },
    {
      image: "/assets/images/thingsatweb.png",
      rotation: "rotate-[150deg]",
      rotation2: "-rotate-[150deg]",
      link: "https://www.thingsatweb.com/",
    },
  ];

  // --- SCROLL LOGIC ---
  useEffect(() => {
    const value = eleProgress * 100;
    const translateX = value * -6; 

    eleRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform =
        value <= 25 
            ? `translateX(${translateX}px)` 
            : `translateX(-150px)`;
    });
  }, [eleProgress]);

  return (
    <section
      id="partner"
      className="relative overflow-hidden bg-white py-16 lg:py-24 font-sora"
    >
      {/* Texture Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* HEADER */}
          <SectionHeader 
            title="Partnering with"
            highlight="Innovative Brands"
            description="Delivering scalable solutions through shared technical excellence."
            centered={true}
            className="max-w-3xl mx-auto mb-0"
          />

          {/* DESKTOP SEMI-CIRCLE */}
          <div className="hidden lg:block">
            {/* Container Height: h-[500px] -> Keeps the section height balanced.
            */}
            <div className="relative flex h-[500px] w-full justify-center overflow-hidden pt-4">
              
              <div
                ref={ref}
                /* mt-64: Pushes the circle WAY down so only the top half shows at the bottom.
                   w-[1000px]: Larger width makes the arc flatter/wider.
                */
                className="relative mt-64 h-[1000px] w-[1000px] rounded-full border border-slate-200 bg-white shadow-[inset_0_0_60px_rgba(39,118,234,0.03)]"
              >
                {/* Decorative inner track */}
                <div className="absolute inset-[10%] rounded-full border border-dashed border-slate-200/60 pointer-events-none" />

                {/* Central "Hub" Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

                {items.map((item, i) => (
                  <div
                    key={i}
                    // Adjusted -translate-y to align items perfectly on the top rim
                    className={`absolute top-1/2 w-full -translate-y-[85%] ${item.rotation}`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-fit"
                    >
                      {/* Wrapper for Scroll Movement */}
                      <div
                        ref={(el) => {
                          eleRefs.current[i] = el;
                        }}
                        style={{ willChange: "transform" }}
                      >
                         {/* Card */}
                         <div className="flex h-20 w-20 translate-x-14 items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2776ea] group-hover:shadow-lg group-hover:shadow-blue-900/10">
                            <Image
                              src={item.image}
                              alt={`partner-${i + 1}`}
                              width={48}
                              height={48}
                              className={`h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 ${item.rotation2}`}
                            />
                         </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE GRID VIEW */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 w-full items-center justify-center rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#2776ea] hover:shadow-md group"
                >
                  <Image
                    src={item.image}
                    alt={`partner-${i + 1}`}
                    width={80}
                    height={80}
                    className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}