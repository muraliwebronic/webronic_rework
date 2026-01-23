"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { 
  ChevronDown, X, Menu, ArrowRight, MapPin, 
  Globe, Briefcase, Users, Handshake, Info 
} from "lucide-react";

const primaryItems = [
  { name: "Home", type: "section", id: "hero" },
  { name: "Services", type: "page", href: "/service" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Products", type: "page", href: "/products" },
  { name: "Branches", type: "page", href: "/branch" },
];

const secondaryItems = [
  { name: "About Us", type: "section", id: "about", icon: Info },
  { name: "Our Partners", type: "section", id: "partner", icon: Handshake },
  { name: "Global Clients", type: "section", id: "client", icon: Globe },
  { name: "Careers", type: "section", id: "career", icon: Briefcase },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const path = usePathname();
  
  // Track scroll for background effects
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pro-level Intersection Observer for section activation
  useEffect(() => {
    if (path !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the upper part of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["hero", "about", "partner", "client", "career"];
    
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [path]);

  const handleNavClick = (item: any) => {
    setOpen(false);
    if (item.type === "page") {
      router.push(item.href);
      return;
    }
    
    if (path === "/") {
      const el = document.getElementById(item.id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 90, // Adjusted for navbar height
          behavior: "smooth"
        });
      }
    } else {
      router.push(`/#${item.id}`);
    }
  };

  // Helper to determine if a link is active
  const isLinkActive = (item: any) => {
    if (item.type === 'page') return path === item.href;
    if (item.type === 'section' && path === '/') return activeSection === item.id;
    return false;
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
        <nav className={`mx-auto flex max-w-[95%] lg:max-w-6xl items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-500 ${
          scrolled 
          ? "bg-white/75 backdrop-blur-xl border border-slate-200/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]" 
          : "bg-transparent border-transparent"
        }`}>
          
          <Link href="/#hero" className="relative z-[101] flex items-center">
            <Image src="./assets/webonic2.png" alt="Logo" width={130} height={30} priority className="w-28 lg:w-32" />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-1 mr-4">
              {primaryItems.map((item) => {
                const active = isLinkActive(item);
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 ${
                        active 
                        ? "text-[#2776ea] bg-[#2776ea]/8" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50" 
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
              
              <li className="relative group">
                <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-4 py-2 text-slate-600 group-hover:text-slate-900 transition-all">
                  Company <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                <div className="absolute top-full right-0 mt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                    {secondaryItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-left transition-all group/item ${
                          activeSection === item.id && path === '/' ? "bg-slate-50" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${
                          activeSection === item.id && path === '/' ? "bg-[#2776ea] text-white" : "bg-slate-50 text-slate-500 group-hover/item:text-[#2776ea] group-hover/item:bg-[#2776ea]/10"
                        }`}>
                          <item.icon size={16} />
                        </div>
                        <span className={`text-[11px] font-bold uppercase ${activeSection === item.id && path === '/' ? "text-[#2776ea]" : "text-slate-700"}`}>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <Link
              href="/contact"
              className="bg-[#2776ea] text-white px-7 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#1e5ebf] hover:scale-[1.02] transition-all shadow-md shadow-blue-500/10 active:scale-95"
            >
              Start Project
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-slate-900 relative z-[101]">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu with improved UX */}
      <div className={`fixed inset-0 z-[99] lg:hidden bg-white/98 backdrop-blur-2xl transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Navigation</p>
          <div className="space-y-2">
            {primaryItems.map((item) => (
              <button key={item.name} onClick={() => handleNavClick(item)} className="flex items-center justify-between w-full py-4 text-left border-b border-slate-50">
                <span className={`text-2xl font-black tracking-tight ${isLinkActive(item) ? "text-[#2776ea]" : "text-slate-900"}`}>{item.name}</span>
                <ArrowRight size={20} className={isLinkActive(item) ? "text-[#2776ea]" : "text-slate-300"} />
              </button>
            ))}
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-3">
            {secondaryItems.map((item) => (
              <button key={item.name} onClick={() => handleNavClick(item)} className="p-4 bg-slate-50 rounded-2xl flex flex-col gap-3 border border-slate-100/50">
                <item.icon size={22} className="text-[#2776ea]" />
                <span className="text-[10px] font-bold uppercase text-slate-700 tracking-wider">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}