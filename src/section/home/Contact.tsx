"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  X,
  Send,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CONTACT DATA ---
  const contactDetails = [
    {
      label: "Phone Support",
      value: "+91 72000 88500",
      icon: Phone,
      href: "tel:+917200088500",
    },
    {
      label: "Email Enquiries",
      value: "contact@webronic.com",
      icon: Mail,
      href: "mailto:contact@webronic.com",
    },
    {
      label: "Registered Office",
      value: "Mylapore, Chennai, TN 600004.",
      icon: MapPin,
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsModalOpen(false);
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 font-sora"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* --- LEFT COLUMN: CONTACT CARDS --- */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid gap-5">
              {contactDetails.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-between p-6 md:p-8 rounded-2xl bg-white border border-slate-200 transition-all duration-300 hover:border-[#2776ea] hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                >
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                  <div className="relative z-10 flex items-center gap-6">
                    {/* Tech Squircle Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-[#2776ea] group-hover:border-[#2776ea] group-hover:text-white group-hover:scale-105">
                      <item.icon size={26} strokeWidth={1.5} />
                    </div>
                    
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg md:text-xl font-bold text-slate-900 hover:text-[#2776ea] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Copy Action */}
                  <div className="relative z-10 hidden sm:block">
                      <button
                        onClick={() => handleCopy(item.value, item.label)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 hover:bg-slate-100 hover:text-[#2776ea] transition-all"
                        title="Copy"
                      >
                        {copied === item.label ? (
                          <Check size={20} className="text-[#76ea27]" />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: HEADER & CTA --- */}
          <div className="lg:col-span-5 flex flex-col items-start text-left order-1 lg:order-2">
            <SectionHeader
              title="Get in Touch"
              highlight="Let's Collaborate"
              description="Ready to transform your business? Our solution architects are here to design custom digital infrastructure tailored to your goals."
              centered={false}
              className="mb-10"
            />

            <div className="flex flex-col gap-8 w-full">
                {/* Main CTA Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-3 bg-[#2776ea] text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#76ea27] transition-all shadow-xl shadow-blue-500/20 active:scale-95 w-full sm:w-fit"
                >
                    Schedule Consultation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Partner Logo Box */}
                <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Global Technology Partner
                    </p>
                    <a
                        href="https://www.thingsatweb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 pr-8 transition-all hover:border-[#2776ea] hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="relative h-8 w-32 grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                            <Image
                                src="/assets/images/thingsatweb.png"
                                alt="ThingsAtWeb"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="h-8 w-px bg-slate-100" />
                        <ArrowUpRight size={18} className="text-slate-300 group-hover:text-[#2776ea]" />
                    </a>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 font-sora">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl transition-all animate-in zoom-in-95 border border-slate-100">
            {/* Modal Header */}
            <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-6 top-6 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                >
                    <X size={20} />
                </button>
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#2776ea] text-white shadow-lg shadow-blue-500/30">
                        <MessageSquare size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black tracking-tight leading-none">
                        Start Project
                        </h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                            We respond within 24h
                        </p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:border-transparent outline-none transition font-medium text-slate-700 placeholder:text-slate-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:border-transparent outline-none transition font-medium text-slate-700 placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Topic
                </label>
                <div className="relative">
                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] outline-none transition font-medium text-slate-700 appearance-none cursor-pointer">
                        <option>New Project Consultation</option>
                        <option>Technical Support</option>
                        <option>Partnership Inquiry</option>
                        <option>Other</option>
                    </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] outline-none transition resize-none font-medium text-slate-700 placeholder:text-slate-400"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2776ea] text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl hover:bg-[#76ea27] transition-all shadow-xl shadow-blue-500/10 flex items-center justify-center gap-3 disabled:opacity-70 active:scale-95"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Request <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}