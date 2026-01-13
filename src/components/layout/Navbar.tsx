"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Sparkles, X, Menu, ArrowRight, MapPin, Globe, Layers, Briefcase, Users, Handshake, Info } from "lucide-react";

const primaryItems = [
  { name: "Home", type: "section", id: "hero" },
  { name: "Services", type: "page", href: "/service" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Products", type: "page", href: "/products" },
  { name: "Branches", type: "page", href: "/branch" },
];

const secondaryItems = [
  { name: "About", type: "section", id: "about", icon: Info },
  { name: "Partners", type: "section", id: "partner", icon: Handshake },
  { name: "Clients", type: "section", id: "client", icon: Globe },
  { name: "Career", type: "section", id: "career", icon: Briefcase },
  { name: "Location", type: "section", id: "location", icon: MapPin },
  { name: "Team", type: "page", href: "/team", icon: Users },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Optional: close the company submenu when closing main menu
      setTimeout(() => setMobileCompanyOpen(false), 300); 
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
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[95%] lg:max-w-7xl items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500 border ${
            scrolled || open
              ? "bg-white/10 backdrop-blur-3xl border-white/20 shadow-xl shadow-blue-900/5"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ type: "section", id: "hero" });
            }}
            className="flex items-center shrink-0 transition-transform active:scale-95"
          >
            <Image
              src="./assets/webonic2.png"
              alt="Logo"
              width={130}
              height={30}
              priority
              className="object-contain w-28 lg:w-32"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 bg-primary-50/50 p-1.5 rounded-full border border-slate-100">
            {primaryItems.map((item) => (
              <DesktopNavItem
                key={item.name}
                item={item}
                active={active}
                path={path}
                onClick={handleNavClick}
              />
            ))}

            <li className="relative group ml-1">
              <button
                className={`flex items-center gap-1.5 px-5 py-2.5 text-[12px] font-bold transition-all cursor-pointer uppercase tracking-widest rounded-full hover:bg-white hover:shadow-sm text-slate-500 hover:text-[#2776ea]`}
              >
                More
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* Desktop Dropdown */}
              <div className="absolute right-0 top-[120%] hidden group-hover:block w-64 pt-2 animate-in fade-in zoom-in-95 duration-200">
                <div className="rounded-2xl bg-white p-2 shadow-2xl border border-slate-100 ring-1 ring-slate-200/50">
                  <div className="grid gap-1">
                    {secondaryItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-[11px] cursor-pointer font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 hover:text-[#2776ea] transition group/item text-left"
                      >
                         <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-[#2776ea]/10 group-hover/item:text-[#2776ea] transition-colors">
                            {item.icon && <item.icon size={14} />}
                         </div>
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#2776ea] px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] text-white font-bold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-blue-600/30 active:translate-y-0 active:scale-95"
            >
              Get Started
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2.5 cursor-pointer rounded-xl border transition-all active:scale-90 ${
                 open 
                 ? "bg-slate-100 text-slate-900 border-slate-200"
                 : "bg-white/60 text-slate-600 border-white/40 hover:text-[#2776ea]"
              }`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- FLOATING MOBILE MENU --- */}
      <div
        className={`fixed inset-0 z-[49] lg:hidden transition-all duration-500 ${
          open ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Floating Island Container */}
        <div
          className={`absolute top-24 left-4 right-4 max-h-[80vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
            open
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95"
          }`}
        >
          <div className="p-2 space-y-1">
            {/* Primary Navigation */}
            <div className="p-4 grid gap-2">
              <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-2">
                Menu
              </p>
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

            {/* Separator */}
            <div className="h-px bg-slate-100 mx-6" />

            {/* Secondary / Company Navigation */}
            <div className="p-4">
               <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl transition-all ${
                      mobileCompanyOpen ? "bg-slate-50" : "hover:bg-slate-50"
                  }`}
               >
                  <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                          <Layers size={14} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">Company Information</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform duration-300 ${
                      mobileCompanyOpen ? "rotate-180 text-[#2776ea]" : ""
                    }`}
                  />
               </button>

               {/* Accordion Content */}
               <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      mobileCompanyOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
               >
                  <div className="min-h-0 bg-slate-50 rounded-2xl border border-slate-100 p-2 grid grid-cols-2 gap-2">
                      {secondaryItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item)}
                          className="flex flex-col items-center justify-center p-3 rounded-xl bg-white shadow-sm border border-slate-100 active:scale-95 transition-transform"
                        >
                            {item.icon && <item.icon size={16} className="text-[#2776ea] mb-2" />}
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">{item.name}</span>
                        </button>
                      ))}
                  </div>
               </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-2 mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between w-full rounded-2xl p-5 bg-[#2776ea] text-white shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-all group"
              >
                <div className="flex flex-col">
                    <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest mb-1">Have a project?</span>
                    <span className="text-sm font-bold">Contact Us</span>
                </div>
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#2776ea] transition-colors">
                    <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// --- SUB-COMPONENTS ---

function DesktopNavItem({ item, active, path, onClick }: any) {
  const isActive =
    item.type === "section"
      ? active === item.id && path === "/"
      : path === item.href;

  return (
    <li>
      <button
        onClick={() => onClick(item)}
        className={`relative px-5 py-2.5 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full cursor-pointer ${
          isActive
            ? "bg-white text-[#2776ea] shadow-sm"
            : "text-slate-500 hover:text-[#2776ea] hover:bg-white/50"
        }`}
      >
        {item.name}
      </button>
    </li>
  );
}

function MobileNavItem({ item, active, path, onClick }: any) {
  const isActive =
    item.type === "section"
      ? active === item.id && path === "/"
      : path === item.href;

  return (
    <button
      onClick={() => onClick(item)}
      className={`group flex items-center justify-between w-full text-left rounded-2xl px-5 py-4 transition-all duration-300 ${
        isActive
          ? "bg-[#2776ea] text-white shadow-md shadow-blue-500/20" // NEW ACTIVE STYLE: SOLID BLUE PILL
          : "hover:bg-slate-50 text-slate-500"
      }`}
    >
      <span className={`text-[13px] font-bold uppercase tracking-widest ${isActive ? "text-white" : ""}`}>
        {item.name}
      </span>

      {isActive ? (
        <Sparkles size={16} className="text-white animate-pulse" />
      ) : (
        <ArrowRight
          size={14}
          className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
        />
      )}
    </button>
  );
}