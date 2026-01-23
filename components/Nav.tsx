"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, User, Folder, Briefcase, Mail, Menu, X, GraduationCap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function Nav() {
  const items: NavItem[] = useMemo(
    () => [
      { href: "#top", label: "Home", icon: <Home className="h-5 w-5" /> },
      { href: "#about", label: "About", icon: <User className="h-5 w-5" /> },
      { href: "#skills", label: "Skills", icon: <Folder className="h-5 w-5" /> },
      { href: "#experience", label: "Experience", icon: <Briefcase className="h-5 w-5" /> },
      { href: "#projects", label: "Projects", icon: <Folder className="h-5 w-5" /> },
      { href: "#education", label: "Education", icon: <GraduationCap className="h-5 w-5" /> },
      { href: "#certs", label: "Certifications", icon: <Award className="h-5 w-5" /> },
      { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px" }
    );

    items.forEach((item) => {
      const id = item.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* SIDEBAR */}
      <aside className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 md:block">
        <motion.div 
          className="relative rounded-3xl border border-neutral-200/60 bg-linear-to-b from-white/95 to-white/90 backdrop-blur-xl px-2.5 py-4 shadow-xl shadow-neutral-900/5"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* DECORATIVE */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <nav className="relative flex flex-col gap-1.5">
            {items.map((it) => {
              const isActive = activeSection === it.href;
              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-transparent text-neutral-500 transition-all duration-300 hover:scale-105 hover:text-neutral-950"
                >
                  {/* ACTIVE INDICATOR */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50 to-purple-50 border border-blue-100/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* HOVER BACKGROUND */}
                  <div className="absolute inset-0 rounded-2xl bg-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* ICON */}
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {it.icon}
                  </span>
                  
                  {/* TOOLTIP */}
                  <motion.span 
                    className="pointer-events-none absolute left-16 whitespace-nowrap rounded-xl border border-neutral-200/60 bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-medium text-neutral-700 opacity-0 shadow-lg shadow-neutral-900/10 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                    initial={{ x: -8 }}
                  >
                    {it.label}
                    {/* TOOLTIP ARROW */}
                    <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 h-2 w-2 rotate-45 border-l border-b border-neutral-200/60 bg-white" />
                  </motion.span>
                </Link>
              );
            })}
          </nav>
          
          {/* BOTTOM ACCENT LINE */}
          <div className="mt-3 pt-3 border-t border-neutral-200/60">
            <div className="h-1 w-full rounded-full bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          </div>
        </motion.div>
      </aside>

      {/* TOP BAR */}
      <div className="fixed inset-x-0 top-0 z-50 md:hidden">
        <motion.div
          className="mx-auto max-w-6xl px-4"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-neutral-200/60 bg-white/80 px-4 py-2.5 backdrop-blur-xl shadow-sm">
            <Link href="#top" className="flex items-center gap-2.5">
              {/* LOGO */}
              <div className="relative h-8 w-8 overflow-hidden rounded-xl border border-neutral-200/60 bg-white">
                {!logoError ? (
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    sizes="32px"
                    className="object-contain"
                    onError={() => setLogoError(true)}
                    priority
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center text-[11px] font-semibold text-neutral-800">
                    SA
                  </div>
                )}
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-neutral-900">Surya Adi</div>
                <div className="text-[11px] text-neutral-500">Full Stack Developer</div>
              </div>
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200/60 bg-white/60 backdrop-blur hover:bg-white transition"
              aria-label="Open menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="h-5 w-5 text-neutral-900" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="h-5 w-5 text-neutral-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed inset-x-0 top-18 z-50 md:hidden" 
              initial={{ y: -10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="mx-auto max-w-6xl px-4 pt-2">
                <div className="rounded-3xl border border-neutral-200/60 bg-white/90 backdrop-blur-xl shadow-xl">
                  <div className="px-3 py-3">
                    <div className="flex flex-col gap-1">
                      {items.map((it) => {
                        const isActive = activeSection === it.href;
                        return (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                              isActive
                                ? "bg-neutral-900 text-white"
                                : "text-neutral-800 hover:bg-neutral-100"
                            }`}
                          >
                            <span className={isActive ? "text-white" : "text-neutral-600"}>
                              {it.icon}
                            </span>
                            <span className="font-medium">{it.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}