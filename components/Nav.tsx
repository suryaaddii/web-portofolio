"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  User,
  Folder,
  Briefcase,
  Mail,
  Menu,
  X,
  GraduationCap,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function Nav() {
  const items: NavItem[] = useMemo(
    () => [
      { href: "#top", label: "Home", icon: <Home size={18} /> },
      { href: "#about", label: "About", icon: <User size={18} /> },
      { href: "#skills", label: "Skills", icon: <Folder size={18} /> },
      {
        href: "#experience",
        label: "Experience",
        icon: <Briefcase size={18} />,
      },
      { href: "#projects", label: "Projects", icon: <Folder size={18} /> },
      {
        href: "#education",
        label: "Education",
        icon: <GraduationCap size={18} />,
      },
      {
        href: "#certs",
        label: "Certifications",
        icon: <Award size={18} />,
      },
      { href: "#contact", label: "Contact", icon: <Mail size={18} /> },
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
      {
        threshold: 0.4,
        rootMargin: "-120px",
      }
    );

    items.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="card-soft rounded-[28px] p-3 shadow-xl shadow-black/4"
        >
          <nav className="flex flex-col gap-2">
            {items.map((item) => {
              const active = activeSection === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative"
                >
                  <div
                    className={`
                    relative flex h-12 w-12 items-center justify-center rounded-2xl
                    transition-all duration-300
                    ${
                      active
                        ? "bg-neutral-950 text-white shadow-lg"
                        : "text-neutral-500 hover:bg-white hover:text-neutral-950"
                    }
                  `}
                  >
                    {item.icon}
                  </div>

                  <div
                    className="
                    pointer-events-none
                    absolute left-16 top-1/2
                    -translate-y-1/2
                    whitespace-nowrap
                    rounded-xl
                    border
                    hairline
                    bg-white
                    px-3 py-2
                    text-sm
                    font-medium
                    text-neutral-700
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-200
                    group-hover:opacity-100
                  "
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </nav>
        </motion.div>
      </aside>

      {/* MOBILE TOPBAR */}
      <div className="fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex items-center justify-between rounded-2xl border hairline bg-white/85 px-4 py-3 backdrop-blur-xl shadow-lg shadow-black/4"
          >
            <Link href="#top" className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border hairline bg-white">
                {!logoError ? (
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="grid h-full place-items-center text-xs font-bold">
                    SA
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold">Surya Adi</p>
                <p className="text-[11px] text-neutral-500">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border hairline bg-white"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/25 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed inset-x-0 top-20 z-50 lg:hidden"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              <div className="mx-auto max-w-7xl px-4">
                <div className="rounded-3xl border hairline bg-white p-3 shadow-2xl shadow-black/6">
                  {items.map((item) => {
                    const active = activeSection === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition
                          ${
                            active
                              ? "bg-neutral-950 text-white"
                              : "hover:bg-neutral-100 text-neutral-700"
                          }
                        `}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}