"use client";

import { CheckCircle2, TrendingUp, BarChart, Utensils, Wifi, Calendar } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { HOSPITALITY_CONTACTLESS_RMS_DATA } from "../data/HOSPITALITY_CONTACTLESS_RMS_DATA";

export default function HospitalityContactlessRms() {
  const { contactless, rms, restaurant, travel } = HOSPITALITY_CONTACTLESS_RMS_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: CONTACTLESS (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader title={contactless.title} centered={true} className="mb-16" />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactless.app.phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="bg-[#2776ea]/5 p-6 border-b border-slate-100 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea]">
                    <phase.icon size={24} />
                  </div>
                  <h3 className="font-bold text-h3 text-slate-900">{phase.title}</h3>
                </div>
                <div className="p-6">
                  {phase.subSections ? (
                    <div className="space-y-6">
                      {phase.subSections.map((sub, i) => (
                        <div key={i}>
                          <h4 className="font-bold text-caption text-[#2776ea] uppercase tracking-wider mb-2">{sub.label}</h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, j) => (
                              <li key={j} className="text-submenu text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-submenu text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#2776ea] rounded-[2rem] p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-h2 font-black mb-8 text-center">{contactless.benefits.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactless.benefits.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="text-[#76ea27] shrink-0 mt-0.5" />
                  <span className="text-submenu font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: RMS (Primary Blue) --- */}
      <div className="bg-[#2776ea] py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-black mb-4">{rms.title}</h2>
            <p className="text-white/80 font-bold text-h3">{rms.pricing.title}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Forecasting */}
            <div className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <BarChart className="text-[#76ea27]" size={32} />
                <h3 className="text-h2 font-bold">{rms.pricing.forecasting.title}</h3>
              </div>
              <p className="text-body text-blue-50 mb-6">{rms.pricing.forecasting.description}</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-white mb-3 text-caption uppercase">{rms.pricing.forecasting.inputs.title}</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {rms.pricing.forecasting.inputs.items.map((item, i) => (
                    <li key={i} className="text-caption text-blue-100 border-l border-white/30 pl-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white text-[#2776ea] p-4 rounded-xl font-bold text-center shadow-lg text-body">
                {rms.pricing.forecasting.accuracy}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white/10 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="text-[#76ea27]" size={32} />
                <h3 className="text-h2 font-bold">{rms.pricing.recommendations.title}</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-white mb-2 text-h3">{rms.pricing.recommendations.dynamic.title}</h4>
                  <ul className="space-y-1">
                    {rms.pricing.recommendations.dynamic.items.map((item, i) => (
                      <li key={i} className="text-submenu text-blue-50">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-2 text-caption uppercase">{rms.pricing.recommendations.strategies.title}</h4>
                    <ul className="space-y-1">
                      {rms.pricing.recommendations.strategies.items.map((item, i) => (
                        <li key={i} className="text-caption text-blue-100">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-caption uppercase">{rms.pricing.recommendations.channels.title}</h4>
                    <ul className="space-y-1">
                      {rms.pricing.recommendations.channels.items.map((item, i) => (
                        <li key={i} className="text-caption text-blue-100">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 text-slate-900 shadow-xl">
              <h3 className="text-h3 font-bold mb-6">{rms.results.title}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {rms.results.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#2776ea] shrink-0" />
                    <span className="font-medium text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#76ea27] rounded-[2rem] p-8 text-slate-900 shadow-xl">
              <h3 className="text-h3 font-bold mb-4">RMS Platforms</h3>
              <ul className="space-y-2">
                {rms.platforms.map((plat, i) => (
                  <li key={i} className="text-submenu font-bold border-b border-slate-900/10 last:border-0 pb-2 last:pb-0">
                    {plat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 3: RESTAURANT & F&B --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeader title={restaurant.title} centered={true} className="mb-16" />
          <div className="grid lg:grid-cols-3 gap-8">
            {/* POS */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="text-[#2776ea]" size={28} />
                <h3 className="text-h2 font-bold text-slate-900">{restaurant.pos.title}</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-700 mb-2 border-b border-slate-200 pb-1 text-h3">{restaurant.pos.orderMgmt.title}</h4>
                  <ul className="space-y-1">
                    {restaurant.pos.orderMgmt.items.map((item, i) => <li key={i} className="text-submenu text-slate-600">• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-2 border-b border-slate-200 pb-1 text-h3">{restaurant.pos.payment.title}</h4>
                  <ul className="space-y-1">
                    {restaurant.pos.payment.items.map((item, i) => <li key={i} className="text-submenu text-slate-600">• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Online Ordering */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl transition-all shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="text-[#76ea27]" size={28} />
                <h3 className="text-h2 font-bold text-slate-900">{restaurant.onlineOrdering.title}</h3>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-3 text-h3">{restaurant.onlineOrdering.features.title}</h4>
                <ul className="space-y-2">
                  {restaurant.onlineOrdering.features.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-submenu text-slate-600">
                      <CheckCircle2 size={14} className="text-[#76ea27] mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reservations */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-[#2776ea]" size={28} />
                <h3 className="text-h2 font-bold text-slate-900">{restaurant.reservation.title}</h3>
              </div>
              <div className="mb-8">
                <h4 className="font-bold text-slate-700 mb-3 text-h3">{restaurant.reservation.table.title}</h4>
                <ul className="space-y-2">
                  {restaurant.reservation.table.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-submenu text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 4: TRAVEL PLATFORMS --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-black text-slate-900 mb-6">{travel.title}</h2>
            <p className="text-h3 text-[#2776ea] font-bold">{travel.ota.title}</p>
          </div>
          <div className="grid md:grid-cols-2  gap-8">
            {travel.ota.categories.map((cat, index) => (
              <div key={index} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 hover:border-[#2776ea] transition-colors group">
                <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea] w-fit mb-4 group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="font-bold text-h3 text-slate-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-submenu text-slate-600 leading-snug">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}