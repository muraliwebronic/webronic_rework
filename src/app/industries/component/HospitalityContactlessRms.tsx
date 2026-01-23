"use client";

import { CheckCircle2, TrendingUp, BarChart, Utensils,Wifi, Calendar } from "lucide-react";
// Using the requested relative path
import { HOSPITALITY_CONTACTLESS_RMS_DATA } from "../data/HOSPITALITY_CONTACTLESS_RMS_DATA";

export default function HospitalityContactlessRms() {
  const { contactless, rms, restaurant, travel } = HOSPITALITY_CONTACTLESS_RMS_DATA;

  return (
    <section className="font-sora">
      
      {/* --- PART 1: CONTACTLESS GUEST EXPERIENCE (Light Theme) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {contactless.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactless.app.phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="bg-[#2776ea]/5 p-6 border-b border-slate-100 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white shadow-sm text-[#2776ea]">
                    <phase.icon size={24} />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900">{phase.title}</h3>
                </div>
                <div className="p-6">
                  {/* Handle Subsections (During Stay) vs Flat Items */}
                  {phase.subSections ? (
                    <div className="space-y-6">
                      {index === 1 && <div className="text-xs text-slate-400 italic mb-2"></div>}
                      {phase.subSections.map((sub, i) => (
                        <div key={i}>
                          <h4 className="font-bold text-sm text-[#2776ea] uppercase tracking-wider mb-2">{sub.label}</h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, j) => (
                              <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
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
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
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

          {/* Benefits */}
          <div className="bg-[#2776ea] rounded-[2rem] p-8 md:p-12 text-white">
            <h3 className="text-2xl font-black mb-8 text-center">{contactless.benefits.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactless.benefits.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="text-[#76ea27] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 2: REVENUE MANAGEMENT SYSTEM (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
       
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {rms.title}
            </h2>
            <p className="text-[#2776ea] font-bold text-xl">{rms.pricing.title}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Forecasting */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-6">
                <BarChart className="text-[#76ea27]" size={32} />
                <h3 className="text-2xl font-bold">{rms.pricing.forecasting.title}</h3>
              </div>
              <p className="text-slate-400 mb-6">{rms.pricing.forecasting.description}</p>
              
              <div className="mb-6">
                <h4 className="font-bold text-white mb-3 text-sm uppercase">
                  {rms.pricing.forecasting.inputs.title} 
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {rms.pricing.forecasting.inputs.items.map((item, i) => (
                    <li key={i} className="text-xs text-slate-300 border-l border-[#2776ea] pl-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-white mb-3 text-sm uppercase">{rms.pricing.forecasting.models.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {rms.pricing.forecasting.models.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/10">{item}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#76ea27]/20 p-4 rounded-xl text-[#76ea27] font-bold text-center border border-[#76ea27]/30">
                {rms.pricing.forecasting.accuracy}
              </div>
            </div>

            {/* Rate Recommendations */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="text-[#2776ea]" size={32} />
                <h3 className="text-2xl font-bold">{rms.pricing.recommendations.title}</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#2776ea] mb-2">{rms.pricing.recommendations.dynamic.title}</h4>
                  <ul className="space-y-1">
                    {rms.pricing.recommendations.dynamic.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-2 text-sm uppercase">{rms.pricing.recommendations.strategies.title}</h4>
                    <ul className="space-y-1">
                      {rms.pricing.recommendations.strategies.items.map((item, i) => (
                        <li key={i} className="text-xs text-slate-400">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-sm uppercase">{rms.pricing.recommendations.channels.title}</h4>
                    <ul className="space-y-1">
                      {rms.pricing.recommendations.channels.items.map((item, i) => (
                        <li key={i} className="text-xs text-slate-400">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results & Platforms */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-2xl p-8 text-slate-900">
              <h3 className="text-xl font-bold mb-6">{rms.results.title}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {rms.results.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#2776ea] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#2776ea] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">RMS Platforms</h3>
              <ul className="space-y-2">
                {rms.platforms.map((plat, i) => (
                  <li key={i} className="text-sm font-medium border-b border-white/20 last:border-0 pb-2 last:pb-0">
                    {plat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* --- PART 3: RESTAURANT & F&B (Menu Style) --- */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {restaurant.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* POS */}
            <div className="border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Utensils className="text-[#2776ea]" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">{restaurant.pos.title}</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-700 mb-2 border-b border-slate-100 pb-1">{restaurant.pos.orderMgmt.title}</h4>
                  <div className="text-xs text-slate-400 mb-2 italic"></div>
                  <ul className="space-y-1">
                    {restaurant.pos.orderMgmt.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-2 border-b border-slate-100 pb-1">{restaurant.pos.payment.title}</h4>
                  <ul className="space-y-1">
                    {restaurant.pos.payment.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-2 border-b border-slate-100 pb-1">{restaurant.pos.inventory.title}</h4>
                  <ul className="space-y-1">
                    {restaurant.pos.inventory.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Online Ordering */}
            <div className="border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl transition-shadow bg-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="text-[#76ea27]" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">{restaurant.onlineOrdering.title}</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 mb-3">{restaurant.onlineOrdering.features.title}</h4>
                <ul className="space-y-2">
                  {restaurant.onlineOrdering.features.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={14} className="text-[#76ea27] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-[#2776ea] mb-3">{restaurant.onlineOrdering.benefits.title}</h4>
                <ul className="space-y-2">
                  {restaurant.onlineOrdering.benefits.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-700 font-bold">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reservations */}
            <div className="border border-slate-200 rounded-[2rem] p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-[#2776ea]" size={28} />
                <h3 className="text-2xl font-bold text-slate-900">{restaurant.reservation.title}</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-slate-700 mb-3">{restaurant.reservation.table.title}</h4>
                <ul className="space-y-2">
                  {restaurant.reservation.table.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {restaurant.reservation.platforms.map((plat, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* --- PART 4: TRAVEL PLATFORMS (Grid) --- */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              {travel.title} 
            </h2>
            <p className="text-xl text-[#2776ea] font-bold">{travel.ota.title}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travel.ota.categories.map((cat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-[#2776ea] transition-colors group">
                <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea] w-fit mb-4 group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 leading-snug">
                      • {item}
                    </li>
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