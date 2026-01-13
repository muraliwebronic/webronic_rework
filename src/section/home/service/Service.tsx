"use client";

import React from "react";
// Import your new components (adjust path based on where you save them)
import SectionHeader from "@/components/common/SectionHeader"; 
import ServiceCard, { ServiceCardProps } from "@/components/services/ServiceCard";
import {
  Smartphone,
  Globe,
  Server,
  Megaphone,
  Search,
  Cpu,
} from "lucide-react";

export default function ServiceCarousel() {
  const cards: ServiceCardProps[] = [
      {
        id: 1,
        icon: <Smartphone size={24} />,
        title: "Custom Software Development",
        description:
          "Build enterprise-grade applications tailored to your unique requirements. Full-stack development expertise across web, mobile, and IoT platforms",
        image: "./assets/images/appdevelopment.png",
        path: "/service-section/custom-software", // Dummy path
      },
      {
        id: 2,
        icon: <Globe size={24} />,
        title: "AI & Machine Learning",
        description:
          "Transform your business with intelligent automation and predictive analytics. Our AI-first approach embeds machine learning across all solutions.",
        image: "./assets/images/webdevelopment.png",
        path: "/service-section/ai-machine-learning", // Dummy path
      },
      {
        id: 3,
        icon: <Server size={24} />,
        title: "Cloud & DevOps",
        description:
          "Accelerate digital transformation with cloud-native architectures. We design scalable, secure cloud solutions across AWS, Azure, and Google Cloud platforms",
        image: "./assets/images/domainhosting.png",
        path: "/service-section/cloud-devops", // Dummy path
      },
      {
        id: 4,
        icon: <Megaphone size={24} />,
        title: "Digital Transformation",
        description:
          "Reimagine your business processes with cutting-edge technology. From strategy to execution, we guide organizations through comprehensive digital evolution",
        image: "./assets/images/digitalmarketing.png",
        path: "/service-section/digital-transformation", // Dummy path
      },
      {
        id: 5,
        icon: <Search size={24} />,
        title: "Cybersecurity",
        description:
          "Protect your digital assets with enterprise-grade security solutions. From threat assessment to managed security operations, we safeguard your business",
        image: "./assets/images/seo.png",
        path: "/service-section/cybersecurity", // Dummy path
      },
      {
        id: 6,
        icon: <Cpu size={24} />,
        title: "IoT & Industry 4.0",
        description:
          "Connect your operations with intelligent IoT ecosystems. Real-time monitoring, predictive maintenance, and automated workflows for manufacturing excellence",
        image: "./assets/images/iot.png",
        path: "/service-section/iot-industry-4", // Dummy path
      },
    ];

  return (
    <section className="relative py-20 bg-white overflow-hidden font-sora">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto">
        
        {/* USING THE NEW HEADER COMPONENT */}
        <SectionHeader 
            title="Innovation Meets"
            highlight="Execution"
            description="We engineer scalable digital ecosystems. Explore our suite of services designed for high-growth enterprises"
        />

        {/* --- CAROUSEL TRACK --- */}
        <div className="relative flex w-full pause-animation group active:pause-animation">
          
          {/* Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="flex gap-6 lg:gap-8 animate-carousel-x min-w-max px-4">
            {[...cards, ...cards, ...cards].map((card, index) => (
              <div 
                key={`${card.id}-${index}`} 
                className="w-[85vw] md:w-[320px] lg:w-[380px] shrink-0 h-full"
              >
                {/* USING THE NEW CARD COMPONENT */}
                <ServiceCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}