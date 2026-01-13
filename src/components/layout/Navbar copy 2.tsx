"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Sparkles, X, Menu, ArrowRight, Globe, Layers } from "lucide-react";

const primaryItems = [
  { name: "Home", type: "section", id: "hero" },
  { name: "Services", type: "page", href: "/service" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Products", type: "page", href: "/products" },
  { name: "Branches", type: "page", href: "/branch" },
];

const secondaryItems = [
  { name: "About", type: "section", id: "about" },
  { name: "Partners", type: "section", id: "partner" },
  { name: "Clients", type: "section", id: "client" },
  { name: "Career", type: "section", id: "career" },
  { name: "Location", type: "section", id: "location" },
  { name: "Team", type: "page", href: "/team" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobileCompanyOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (!path || path !== "/") {
      setActive(null);
      return;
    }
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [path]);

  const handleNavClick = (item: any) => {
    setOpen(false);
    if (item.type === "page") {
      setActive(item.href);
      router.push(item.href);
      return;
    }
    const el = document.getElementById(item.id);
    if (el && path === "/") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${item.id}`);
      setActive(item.id);
    } else {
      router.push(`/#${item.id}`);
    }
  };

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 font-sora ${
          scrolled ? "py-2 lg:py-3" : "py-4 lg:py-6"
        }`}
      >
        <nav className={`mx-auto flex max-w-[95%] lg:max-w-6xl items-center justify-between px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl transition-all duration-500 border ${
          scrolled 
          ? "bg-[#2776ea]/10 backdrop-blur-xl border-[#2776ea]/20 shadow-lg shadow-blue-500/5" // BLUE GLASS EFFECT
          : "bg-transparent border-transparent" // BLEND EFFECT
        }`}>
          <Link
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ type: "section", id: "hero" });
            }}
            className="flex items-center shrink-0 transition-transform active:scale-95"
          >
            {/* Ensure your logo works on white background or switch to a dark version here */}
            <Image
              src="./assets/webonic2.png"
              alt="Logo"
              width={120}
              height={28}
              priority
              className="object-contain lg:w-32.5 lg:h-8"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {primaryItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                active={active}  
                path={path}
                onClick={handleNavClick}
                scrolled={scrolled}
              />
            ))}

            <li className="relative group ml-2">
              <button className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold transition-colors cursor-pointer uppercase tracking-widest ${
                  scrolled ? "text-slate-600 hover:text-[#2776ea]" : "text-slate-600 hover:text-[#2776ea]"
              }`}>
                Company
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                  style={{ color: '#2776ea' }}
                />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-56 pt-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="rounded-2xl bg-white/80 border border-slate-100 p-2 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5">
                  {secondaryItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-[10px] cursor-pointer font-black uppercase tracking-widest text-slate-500 hover:bg-[#2776ea]/5 hover:text-[#2776ea] transition group/item"
                    >
                      {item.name}
                      <Sparkles size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" style={{ color: '#2776ea' }} />
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-2 lg:gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#2776ea] px-5 lg:px-6 py-2 lg:py-2.5 text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 active:scale-95 hover:bg-[#1e64c8]"
            >
              Contact us
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2.5 cursor-pointer text-slate-600 bg-white/50 border border-slate-200/50 rounded-xl active:scale-90 transition-all hover:text-[#2776ea]"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* --- MOBILE MENU (Light Theme Update) --- */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-90 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 pt-10 pb-6">
            <div className="flex flex-col">
              {/* Ensure logo is visible on white */}
              <Image src="./assets/webronic.png" alt="Logo" width={110} height={26} className="object-contain" />
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="h-10 w-10 flex items-center justify-center bg-slate-100 rounded-full text-slate-500 active:bg-[#2776ea] active:text-white transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-4 mb-4">
                <Globe size={12} className="text-[#2776ea]" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Navigation</p>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {primaryItems.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    active={active}
                    path={path}
                    onClick={handleNavClick}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 px-4 mb-2">
                <Layers size={12} className="text-[#76ea27]" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Resources</p>
              </div>
              
              <div className="bg-slate-50 rounded-3xl p-2 border border-slate-100">
                <button 
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="flex items-center justify-between w-full px-6 py-5 rounded-2xl transition-all"
                >
                  <span className="text-[13px] font-bold text-slate-700">Company Hub</span>
                  <ChevronDown size={18} className={`text-[#2776ea] transition-transform duration-500 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${mobileCompanyOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="grid grid-cols-2 gap-2 p-2 pt-0">
                    {secondaryItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:border-[#2776ea] transition-all"
                      >
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 mt-auto border-t border-slate-100 bg-slate-50/50">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between w-full rounded-2xl p-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-200 active:scale-[0.98] transition-all overflow-hidden relative group"
              style={{ backgroundColor: '#2776ea' }}
            >
              <span className="relative z-10">Contact our experts</span>
              <ArrowRight size={16} className="relative z-10 transition-transform group-active:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ item, active, path, onClick, scrolled }: any) {
  const isActive = item.type === "section" 
    ? (active === item.id && path === "/") 
    : path === item.href;

  return (
    <li>
      <button
        onClick={() => onClick(item)}
        className={`group relative px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
          isActive 
            ? "bg-gradient-to-r from-[#2776ea] to-[#2776ea] bg-clip-text text-transparent" // GRADIENT TEXT FOR ACTIVE
            : "text-slate-600 hover:text-[#2776ea]"
        }`}
      >
        <span className="relative z-10">{item.name}</span>
        {isActive && (
            <span 
              className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2776ea] shadow-[0_0_8px_#2776ea]" 
            />
        )}
      </button>
    </li>
  );
}

function MobileNavItem({ item, active, path, onClick }: any) {
  const isActive = item.type === "section" 
    ? (active === item.id && path === "/") 
    : path === item.href;

  return (
    <button
      onClick={() => onClick(item)}
      className={`group flex items-center justify-between w-full text-left rounded-2xl px-6 py-5 transition-all duration-300 ${
        isActive 
          ? "bg-[#2776ea]/5 border border-[#2776ea]/20" 
          : "hover:bg-slate-50 border border-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#2776ea] shadow-[0_0_10px_#2776ea]" />}
        <span className={`text-[13px] font-bold transition-colors ${
            isActive ? "text-[#2776ea] tracking-widest" : "text-slate-500 group-active:text-[#2776ea]"
        }`}>
            {item.name}
        </span>
      </div>
      
      {isActive ? (
        <Sparkles size={14} className="text-[#2776ea] animate-pulse" />
      ) : (
        <ArrowRight size={12} className="text-slate-400 opacity-0 group-active:opacity-100 group-active:translate-x-1 transition-all" />
      )}
    </button>
  );
}