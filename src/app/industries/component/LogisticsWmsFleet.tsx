"use client";

import { CheckCircle2, Box, ArrowRight } from "lucide-react";
// Using the requested relative path
import { LOGISTICS_WMS_FLEET_DATA } from "../data/LOGISTICS_WMS_FLEET_DATA";

export default function LogisticsWmsFleet() {
  const { wms, lastMile, visibility, fleet } = LOGISTICS_WMS_FLEET_DATA;

  return (
    <section className="font-sora">
      
      {/* --- SECTION 2: WMS (Warehouse) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {wms.title}
            </h2>
            <p className="text-[#2776ea] font-bold uppercase tracking-widest text-lg">
              {wms.subTitle}
            </p>
          </div>

          {/* Operations Flow Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Inbound */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-[#2776ea]/10 text-[#2776ea]">
                  <wms.inbound.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{wms.inbound.title}</h3>
              </div>
              <div className="space-y-8">
                {wms.inbound.sections.map((sec, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-lg mb-3">{sec.title}</h4>
                    <ul className="space-y-2">
                      {sec.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Outbound */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 rounded-xl bg-[#76ea27]/10 text-[#76ea27]">
                  <wms.outbound.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{wms.outbound.title}</h3>
              </div>
              
              {/* Picking */}
              <div className="mb-8">
                <h4 className="font-bold text-lg mb-3 text-[#2776ea]">{wms.outbound.picking.title}</h4>
                <div className="bg-slate-50 p-4 rounded-xl mb-4">
                  <h5 className="font-bold text-sm text-slate-900 mb-2">Strategies:</h5>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {wms.outbound.picking.strategies.map((strat, i) => (
                      <li key={i} className="text-xs">
                        <span className="font-bold block">{strat.name}</span>
                        <span className="text-slate-500">{strat.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="font-bold text-sm text-slate-900 mb-2">Technologies & Optimization:</h5>
                  <ul className="space-y-1">
                    {[...wms.outbound.picking.technologies, ...wms.outbound.picking.optimization].map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-[#76ea27]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  {wms.outbound.picking.gains.map((gain, i) => (
                    <span key={i} className="text-[10px] font-bold bg-[#76ea27]/10 text-[#76ea27] px-2 py-1 rounded">
                      {gain}
                    </span>
                  ))}
                </div>
              </div>

              {/* Packing */}
              <div>
                <h4 className="font-bold text-lg mb-3 text-[#2776ea]">{wms.outbound.packing.title}</h4>
                <ul className="space-y-2">
                  {[...wms.outbound.packing.stations, ...wms.outbound.packing.sortation].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Box size={14} className="mt-1 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Inventory & Automation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Inventory */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <wms.inventory.icon className="text-slate-400" />
                <h3 className="font-bold text-xl">{wms.inventory.title}</h3>
              </div>
              {wms.inventory.sections.map((sec, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-2">{sec.title}</h4>
                  <ul className="space-y-2">
                    {sec.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Automation */}
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] lg:col-span-2 relative overflow-hidden">
               {/* Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#2776ea]/10 rounded-full blur-[60px] pointer-events-none" />
               
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-8">
                   <wms.automation.icon className="text-[#76ea27]" />
                   <h3 className="font-bold text-xl">{wms.automation.title} [Image of warehouse automated storage and retrieval system]</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                   {wms.automation.systems.map((sys, i) => (
                     <div key={i}>
                       <h4 className="font-bold text-[#2776ea] mb-3">{sys.title}</h4>
                       <ul className="space-y-2">
                         {sys.items.map((item, j) => (
                           <li key={j} className="text-sm text-slate-300 flex items-start gap-2">
                             <span className="text-[#76ea27] mt-1">➜</span> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                   ))}
                 </div>
                 <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                   <span className="text-sm font-bold text-white">Benefits:</span>
                   {wms.automation.systems[2].items.map((item, i) => (
                     <span key={i} className="text-xs bg-white/10 px-3 py-1 rounded-full text-blue-100">
                       {item}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="text-center">
             <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">WMS Platforms</p>
             <div className="flex flex-wrap justify-center gap-3">
               {wms.platforms.map((plat, i) => (
                 <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium shadow-sm">
                   {plat}
                 </span>
               ))}
             </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 3: LAST-MILE (Dark Theme) --- */}
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-3xl font-black mb-16 text-center">{lastMile.title}</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Route Planning */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
              <div className="flex items-center gap-3 mb-6">
                <lastMile.routePlanning.icon className="text-[#2776ea]" size={24} />
                <h3 className="text-xl font-bold">{lastMile.routePlanning.title}</h3>
              </div>
              <div className="space-y-6">
                 <div>
                   <h4 className="font-bold text-[#76ea27] mb-2">{lastMile.routePlanning.dynamic.title}</h4>
                   <ul className="space-y-2 mb-4">
                     {lastMile.routePlanning.dynamic.realTime.map((item, i) => (
                       <li key={i} className="text-sm text-slate-300">• {item}</li>
                     ))}
                   </ul>
                 </div>
                 <div className="bg-black/20 p-4 rounded-xl">
                    <h5 className="text-xs font-bold uppercase text-slate-400 mb-2">Algorithms</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lastMile.routePlanning.dynamic.algorithms.join(", ")}
                    </p>
                 </div>
                 <div>
                   <h5 className="text-xs font-bold uppercase text-slate-400 mb-2">Results</h5>
                   {lastMile.routePlanning.dynamic.results.map((res, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm font-bold text-white">
                       <CheckCircle2 size={14} className="text-[#76ea27]" /> {res}
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            {/* Mobile App */}
            <div className="bg-[#2776ea] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <lastMile.app.icon className="text-white" size={24} />
                  <h3 className="text-xl font-bold text-white">{lastMile.app.title}</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Driver Features</span>
                    <ul className="space-y-2">
                      {lastMile.app.driver.slice(0, 5).map((item, i) => (
                        <li key={i} className="text-sm text-blue-50 leading-snug flex items-start gap-2">
                          <span className="mt-1">•</span> {item}
                        </li>
                      ))}
                      <li className="text-xs text-blue-200 italic pl-3">
                        + Proof of delivery, GPS, Timestamp, Notifications
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Dispatcher Features</span>
                    <ul className="space-y-2">
                      {lastMile.app.dispatcher.map((item, i) => (
                        <li key={i} className="text-sm text-blue-50 leading-snug flex items-start gap-2">
                          <span className="mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Experience */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
              <div className="flex items-center gap-3 mb-6">
                <lastMile.customer.icon className="text-[#76ea27]" size={24} />
                <h3 className="text-xl font-bold">{lastMile.customer.title}</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-white mb-2">Delivery Notifications</h4>
                  <div className="flex flex-col gap-2">
                    {lastMile.customer.notifications.map((item, i) => (
                      <div key={i} className="bg-white/5 px-3 py-2 rounded-lg text-sm text-slate-300 border-l-2 border-[#76ea27]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                   <h4 className="font-bold text-white mb-2">Results</h4>
                   <ul className="grid grid-cols-2 gap-2">
                     {lastMile.customer.results.map((res, i) => (
                       <li key={i} className="text-xs font-bold text-[#2776ea] bg-white/10 p-2 rounded text-center">
                         {res}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SECTION 4: VISIBILITY (Clean Layout) --- */}
      <div className="bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">{visibility.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Tracking Visual */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <visibility.tracking.icon className="text-[#2776ea]" size={28} />
                  <h3 className="text-2xl font-black text-slate-900">{visibility.tracking.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {visibility.tracking.multiModal.map((mode, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                      {mode}
                    </span>
                  ))}
                </div>

                <div className="space-y-4">
                  {visibility.tracking.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#76ea27] mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-[2rem]">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <visibility.portal.icon size={20} /> {visibility.portal.title}
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                   <div>
                     <span className="text-xs font-bold text-[#2776ea] uppercase mb-2 block">Supplier</span>
                     <ul className="space-y-1">
                       {visibility.portal.supplier.map((item, i) => (
                         <li key={i} className="text-xs text-slate-600">• {item}</li>
                       ))}
                     </ul>
                   </div>
                   <div>
                     <span className="text-xs font-bold text-[#76ea27] uppercase mb-2 block">Customer</span>
                     <ul className="space-y-1">
                       {visibility.portal.customer.map((item, i) => (
                         <li key={i} className="text-xs text-slate-600">• {item}</li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] h-full">
              <div className="flex items-center gap-3 mb-8">
                <visibility.analytics.icon className="text-[#76ea27]" size={28} />
                <h3 className="text-2xl font-black">{visibility.analytics.title}</h3>
              </div>
              
              <div className="space-y-8">
                {visibility.analytics.items.map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-[#2776ea]">
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- SECTION 5: FLEET MANAGEMENT (Dashboard Style) --- */}
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-black text-slate-900 mb-16 text-center">{fleet.title}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Vehicle Tracking */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-900 text-white rounded-xl">
                  <fleet.tracking.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-900">{fleet.tracking.title}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">GPS Tracking</h4>
                  <ul className="space-y-2">
                    {fleet.tracking.gps.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Telematics Data</h4>
                  <ul className="space-y-2">
                    {fleet.tracking.telematics.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#2776ea]/10 text-[#2776ea] rounded-xl">
                  <fleet.maintenance.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-900">{fleet.maintenance.title}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm">Preventive</h4>
                  <ul className="space-y-2">
                    {fleet.maintenance.preventive.slice(0, 4).map((item, i) => (
                      <li key={i} className="text-xs text-slate-600">• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#2776ea]/5 p-4 rounded-xl border border-[#2776ea]/10">
                  <h4 className="font-bold text-[#2776ea] mb-3 text-sm">Predictive</h4>
                  <ul className="space-y-2">
                    {fleet.maintenance.predictive.map((item, i) => (
                      <li key={i} className="text-xs text-slate-700 font-medium">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance & Safety */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                  <fleet.compliance.icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-slate-900">{fleet.compliance.title}</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                   <h4 className="font-bold text-slate-900 mb-3 text-sm border-b border-slate-100 pb-2">Hours of Service (HOS)</h4>
                   <ul className="space-y-2">
                     {fleet.compliance.hos.map((item, i) => (
                       <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                         <ArrowRight size={14} className="mt-1 text-red-400" /> {item}
                       </li>
                     ))}
                   </ul>
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-3 text-sm border-b border-slate-100 pb-2">Safety</h4>
                   <ul className="space-y-2">
                     {fleet.compliance.safety.map((item, i) => (
                       <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                         <ArrowRight size={14} className="mt-1 text-[#76ea27]" /> {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}