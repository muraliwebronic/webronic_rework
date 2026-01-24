"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  X,
  Menu,
  ArrowRight,
  Globe,
  Briefcase,
  Handshake,
  Info,
  Code2,
  Bot,
  Cloud,
  Zap,
  Terminal,
  Wifi,
  BarChart3,
  Store,
  LayoutGrid,
} from "lucide-react";

// --- DATA CONFIGURATION ---

// 1. Standalone Links (Home, Projects, etc.)
// Removed "Products" from here as it is now a dropdown
const navLinks = [
  { name: "Home", type: "page", id: "/" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Branches", type: "page", href: "/branch" },
];

// 2. Services Group (Removed StoreTech from here)
const serviceItems = [
  { name: "All Services", href: "/service", icon: LayoutGrid },
  {
    name: "Web Development",
    href: "/services?category=web-development",
    icon: Code2,
  },
  {
    name: "AI & ML",
    href: "/services?category=ai-machine-learning",
    icon: Bot,
  },
  {
    name: "Cloud Services",
    href: "/services?category=cloud-services",
    icon: Cloud,
  },
  {
    name: "Digital Trans",
    href: "/services?category=digital-transformation",
    icon: Zap,
  },
  { name: "DevOps", href: "/services?category=devops", icon: Terminal },
  {
    name: "IoT Solutions",
    href: "/services?category=iot-solutions",
    icon: Wifi,
  },
  {
    name: "Data Analytics",
    href: "/services?category=data-analytics",
    icon: BarChart3,
  },
];

// 3. Products Group (NEW - Includes StoreTech)
const productItems = [
  { name: "All Products", href: "/products", icon: LayoutGrid },
  { name: "StoreTech", href: "/product?category=storetech", icon: Store },
];

// 4. Company Group (Existing Dropdown Data)
const companyItems = [
  { name: "About Us", type: "page", id: "/about", icon: Info },
  { name: "Industries", type: "page", id: "/industries", icon: Info },
  { name: "Our Partners", type: "section", id: "Partners", icon: Handshake },
  { name: "Global Clients", type: "section", id: "client", icon: Globe },
  { name: "Careers", type: "page", id: "/career", icon: Briefcase },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    if (path === "/industries") {
      setScrolled(true);
    } else {
      onScroll();
      window.addEventListener("scroll", onScroll);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  // Intersection Observer for section activation
  useEffect(() => {
    if (path !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    const sections = ["hero", "about", "partner", "client", "career"];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [path]);

  const handleNavClick = (item: any) => {
    setOpen(false);

    // Handle Direct Links (Pages)
    if (item.type === "page" || item.href) {
      router.push(item.href || item.id); // Fallback to id if href missing
      return;
    }

    // Handle Section Scroll (Home Page)
    if (path === "/") {
      const el = document.getElementById(item.id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 90,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/#${item.id}`);
    }
  };

  const isLinkActive = (item: any) => {
    if (item.href) return path === item.href;
    if (item.type === "section" && path === "/")
      return activeSection === item.id;
    return false;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
      >
        <nav
          className={`mx-auto flex max-w-[95%] lg:max-w-7xl items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white/75 backdrop-blur-xl border border-slate-200/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
              : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/#hero" className="relative z-[101] flex items-center">
            <Image
              src="./assets/webonic2.png"
              alt="Logo"
              width={130}
              height={30}
              priority
              className="w-28 lg:w-32"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-1 mr-4">
              {/* 1. HOME (First Item) */}
              <li>
                <button
                  onClick={() => handleNavClick(navLinks[0])}
                  className={`text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 ${
                    isLinkActive(navLinks[0])
                      ? "text-[#2776ea] bg-[#2776ea]/8"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {navLinks[0].name}
                </button>
              </li>

              {/* 2. SERVICES DROPDOWN (Group) */}
              <li className="relative group">
                <button
                  className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-4 py-2 transition-all ${
                    path.includes("/services") || path.includes("/service")
                      ? "text-[#2776ea]"
                      : "text-slate-600 group-hover:text-slate-900"
                  }`}
                >
                  Services{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>

                {/* Services Dropdown Panel */}
                <div className="absolute top-full left-0 mt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
                    {serviceItems.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-left transition-all hover:bg-slate-50 group/item ${
                          // Special styling for the first "All Services" item
                          index === 0
                            ? "bg-slate-50/80 border-b border-slate-100 mb-1"
                            : ""
                        }`}
                      >
                        <div
                          className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${
                            index === 0
                              ? "bg-[#2776ea] text-white"
                              : "bg-slate-50 text-slate-500 group-hover/item:text-[#2776ea] group-hover/item:bg-[#2776ea]/10"
                          }`}
                        >
                          <item.icon size={16} />
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase ${index === 0 ? "text-[#2776ea]" : "text-slate-700"}`}
                        >
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </li>

              {/* 3. PRODUCTS DROPDOWN (NEW) */}
              <li className="relative group">
                <button
                  className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-4 py-2 transition-all ${
                    path.includes("/product")
                      ? "text-[#2776ea]"
                      : "text-slate-600 group-hover:text-slate-900"
                  }`}
                >
                  Products{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>

                {/* Products Dropdown Panel */}
                <div className="absolute top-full left-0 mt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col gap-1">
                    {productItems.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-left transition-all hover:bg-slate-50 group/item ${
                          index === 0
                            ? "bg-slate-50/80 border-b border-slate-100 mb-1"
                            : ""
                        }`}
                      >
                        <div
                          className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${
                            index === 0
                              ? "bg-[#2776ea] text-white"
                              : "bg-slate-50 text-slate-500 group-hover/item:text-[#2776ea] group-hover/item:bg-[#2776ea]/10"
                          }`}
                        >
                          <item.icon size={16} />
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase ${index === 0 ? "text-[#2776ea]" : "text-slate-700"}`}
                        >
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </li>

              {/* 4. REST OF NAV LINKS (Projects, Branches) */}
              {navLinks.slice(1).map((item) => {
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

              {/* 5. COMPANY DROPDOWN (Existing Group) */}
              <li className="relative group">
                <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-4 py-2 text-slate-600 group-hover:text-slate-900 transition-all">
                  Company{" "}
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>

                <div className="absolute top-full right-0 mt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                    {companyItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item)}
                        className={`flex items-center gap-3 w-full p-2.5 rounded-xl text-left transition-all group/item ${
                          activeSection === item.id && path === "/"
                            ? "bg-slate-50"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <div
                          className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${
                            activeSection === item.id && path === "/"
                              ? "bg-[#2776ea] text-white"
                              : "bg-slate-50 text-slate-500 group-hover/item:text-[#2776ea] group-hover/item:bg-[#2776ea]/10"
                          }`}
                        >
                          <item.icon size={16} />
                        </div>
                        <span
                          className={`text-[11px] font-bold uppercase ${activeSection === item.id && path === "/" ? "text-[#2776ea]" : "text-slate-700"}`}
                        >
                          {item.name}
                        </span>
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

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-900 relative z-[101]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* --- MOBILE MENU --- */}
      <div
        className={`fixed inset-0 z-[99] lg:hidden bg-white/98 backdrop-blur-2xl transition-all duration-500 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col h-full pt-28 px-8 overflow-y-auto pb-10">
          {/* Main Links */}
          <div className="space-y-1 mb-8">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="flex items-center justify-between w-full py-4 text-left border-b border-slate-50"
              >
                <span
                  className={`text-xl font-black tracking-tight ${isLinkActive(item) ? "text-[#2776ea]" : "text-slate-900"}`}
                >
                  {item.name}
                </span>
                <ArrowRight
                  size={20}
                  className={
                    isLinkActive(item) ? "text-[#2776ea]" : "text-slate-300"
                  }
                />
              </button>
            ))}
          </div>

          {/* Services Grid (Mobile) */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
            Services
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {serviceItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`p-3 bg-slate-50 rounded-xl flex flex-col gap-3 border border-slate-100/50 hover:bg-white hover:border-[#2776ea]/30 transition-all text-left ${index === 0 ? "col-span-2 bg-[#2776ea]/5 border-[#2776ea]/20" : ""}`}
              >
                <item.icon
                  size={20}
                  className={index === 0 ? "text-[#2776ea]" : "text-slate-500"}
                />
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider leading-tight ${index === 0 ? "text-[#2776ea]" : "text-slate-700"}`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Products Grid (Mobile - NEW) */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
            Products
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {productItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`p-3 bg-slate-50 rounded-xl flex flex-col gap-3 border border-slate-100/50 hover:bg-white hover:border-[#2776ea]/30 transition-all text-left ${index === 0 ? "col-span-2 bg-[#2776ea]/5 border-[#2776ea]/20" : ""}`}
              >
                <item.icon
                  size={20}
                  className={index === 0 ? "text-[#2776ea]" : "text-slate-500"}
                />
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider leading-tight ${index === 0 ? "text-[#2776ea]" : "text-slate-700"}`}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Company Grid (Mobile) */}
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
            Company
          </p>
          <div className="grid grid-cols-2 gap-3">
            {companyItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="p-3 bg-slate-50 rounded-xl flex flex-col gap-3 border border-slate-100/50 hover:bg-white hover:border-[#2776ea]/30 transition-all text-left"
              >
                <item.icon size={20} className="text-[#2776ea]" />
                <span className="text-[9px] font-bold uppercase text-slate-700 tracking-wider">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}