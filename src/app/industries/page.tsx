"use client";

import React, { useState } from 'react';
import { 
  Factory, 
  Clapperboard, 
  Truck, 
  Building2, 
  Utensils 
} from "lucide-react";
import { motion } from "framer-motion";

// --- Manufacturing Components ---
import ManufacturingHero from './component/ManufacturingHero';
import ManufacturingOverview from './component/ManufacturingOverview';
import ManufacturingSolutions from './component/ManufacturingSolutions';
import ManufacturingDataCollection from './component/ManufacturingDataCollection';
import ManufacturingFPDigitalTwin from './component/ManufacturingFPDigitalTwin';
import DigitalTwinImplementation from './component/DigitalTwinImplementation';
import ManufacturingMesMaintenance from './component/ManufacturingMesMaintenance';
import ManufacturingMonitoring from './component/ManufacturingMonitoring';
import ManufacturingCsaMl from './component/ManufacturingCsaMl';
import ManufacturingMlRoi from './component/ManufacturingMlRoi';
import ManufacturingQuality from './component/ManufacturingQuality';
import ManufacturingCvImplementation from './component/ManufacturingCvImplementation';
import ManufacturingSpc from './component/ManufacturingSpc';
import ManufacturingProcessQms from './component/ManufacturingProcessQms';
import ManufacturingSupplyChain from './component/ManufacturingSupplyChain';
import ManufacturingDemandInventory from './component/ManufacturingDemandInventory';
import ManufacturingEnergyManagement from './component/ManufacturingEnergyManagement';
import ManufacturingStackCases from './component/ManufacturingStackCases';
import ManufacturingPricing from './component/ManufacturingPricing';

// --- Media Components ---
import MediaHeroOverview from './component/MediaHeroOverview';
import MediaStreaming from './component/MediaStreaming';
import MediaContentProduction from './component/MediaContentProduction';
import MediaCmsStreaming from './component/MediaCmsStreaming';
import MediaCasesPricing from './component/MediaCasesPricing';

// --- Logistics Components ---
import LogisticsHeroTms from './component/LogisticsHeroTms';
import LogisticsStackCasesPricing from './component/LogisticsStackCasesPricing';

// --- Real Estate Components ---
import RealEstateSolutions from './component/RealEstateSolutions';
import RealEstateSmartCrm from './component/RealEstateSmartCrm';

// --- Hospitality Components ---
import HospitalityHeroPms from './component/HospitalityHeroPms';
import HospitalityContactlessRms from './component/HospitalityContactlessRms';
import HospitalityStackCasesPricing from './component/HospitalityStackCasesPricing';

// Industry Definitions
const INDUSTRIES = [
  { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
  { id: 'media', label: 'Media & Ent', icon: Clapperboard },
  { id: 'logistics', label: 'Logistics', icon: Truck },
  { id: 'realestate', label: 'Real Estate', icon: Building2 },
  { id: 'hospitality', label: 'Hospitality', icon: Utensils },
];

export default function Page() {
  const [activeIndustry, setActiveIndustry] = useState('manufacturing');

  return (
    // Added pt-24 to push everything below your fixed Navbar
    <main className="min-h-screen bg-[#2776ea] font-sora selection:bg-[#2776ea] selection:text-white pt-24 ">
      
      {/* --- INDUSTRY SWITCHER (In-Flow) --- */}
      {/* This container matches the width/padding of your Hero sections so it aligns perfectly */}
      <div className="container mx-auto px-6 max-w-7xl relative z-40 mb-8">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 p-1.5 bg-white border border-slate-200 rounded-full shadow-xl shadow-blue-900/5">
            {INDUSTRIES.map((industry) => {
              const isActive = activeIndustry === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => {
                    // Optional: Scroll to top of content when switching
                    // window.scrollTo({ top: 0, behavior: 'smooth' }); 
                    setActiveIndustry(industry.id);
                  }}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#2776ea] rounded-full shadow-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <industry.icon size={14} strokeWidth={2.5} />
                    <span className="hidden sm:inline">{industry.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- DYNAMIC CONTENT AREA --- */}
      <div className="relative"> 
        
        {/* Render Manufacturing Stack */}
        {activeIndustry === 'manufacturing' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ManufacturingHero />
            <ManufacturingOverview />
            <ManufacturingSolutions />
            <ManufacturingDataCollection />
            {/* <ManufacturingFPDigitalTwin /> */}
            <DigitalTwinImplementation />
            <ManufacturingMesMaintenance />
            <ManufacturingMonitoring />
            <ManufacturingCsaMl />
            <ManufacturingMlRoi />
            <ManufacturingQuality />
            <ManufacturingCvImplementation />
            <ManufacturingSpc />
            <ManufacturingProcessQms />
            <ManufacturingSupplyChain />
            <ManufacturingDemandInventory />
            <ManufacturingEnergyManagement />
            <ManufacturingStackCases />
            <ManufacturingPricing />
          </div>
        )}

        {/* Render Media Stack */}
        {activeIndustry === 'media' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <MediaHeroOverview />
            <MediaStreaming />
            <MediaContentProduction />
            <MediaCmsStreaming />
            <MediaCasesPricing />
          </div>
        )}

        {/* Render Logistics Stack */}
        {activeIndustry === 'logistics' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <LogisticsHeroTms />
            <LogisticsStackCasesPricing />
          </div>
        )}

        {/* Render Real Estate Stack */}
        {activeIndustry === 'realestate' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RealEstateSolutions />
            <RealEstateSmartCrm />
          </div>
        )}

        {/* Render Hospitality Stack */}
        {activeIndustry === 'hospitality' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <HospitalityHeroPms />
            <HospitalityContactlessRms />
            <HospitalityStackCasesPricing />
          </div>
        )}
      </div>

    </main>
  );
}