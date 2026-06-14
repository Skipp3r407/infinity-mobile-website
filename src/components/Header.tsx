"use client";

import { Button } from "@/components/ui/Button";
import {
  CompanyDropdown,
  MobileNavAccordion,
  NavChevron,
  ServicesMegaMenu,
} from "@/components/navigation";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type OpenMenu = null | "services" | "company";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const closeMenus = () => setOpenMenu(null);

  const linkClass =
    "focus-ring rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 transition hover:text-white";

  const triggerClass = (active: boolean) =>
    cn(
      linkClass,
      "inline-flex items-center gap-1",
      active && "bg-white/10 text-white",
    );

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled || openMenu
            ? "border-white/10 bg-bg-elevated/95 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div
          className="h-0.5 w-full bg-gradient-to-r from-transparent via-orange to-purple opacity-80"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="focus-ring group shrink-0"
            onClick={() => {
              closeMenus();
              setMobileOpen(false);
            }}
          >
            <Image
              src="/logo.png"
              alt="Infinity Mobile — Mobile Auto Repair & Handyman Services"
              width={280}
              height={84}
              className="h-[84px] w-auto object-contain"
              sizes="(max-width: 1024px) 84px, 84px"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            <Link href="/" className={linkClass} onClick={closeMenus}>
              Home
            </Link>

            <div className="relative">
              <button
                type="button"
                className={triggerClass(openMenu === "services")}
                aria-expanded={openMenu === "services"}
                aria-haspopup="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu((m) => (m === "services" ? null : "services"));
                }}
              >
                Services
                <NavChevron open={openMenu === "services"} />
              </button>
            </div>

            <div className="relative">
              <button
                type="button"
                className={triggerClass(openMenu === "company")}
                aria-expanded={openMenu === "company"}
                aria-haspopup="true"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu((m) => (m === "company" ? null : "company"));
                }}
              >
                Company
                <NavChevron open={openMenu === "company"} />
              </button>
              <AnimatePresence>
                {openMenu === "company" ? <CompanyDropdown onClose={closeMenus} /> : null}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={`tel:${site.phoneTel}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-bold text-white transition hover:border-orange/40 hover:bg-orange/5"
            >
              <Phone className="h-4 w-4 text-orange" aria-hidden />
              {site.phone}
            </a>
            <Link href="/#quote" onClick={closeMenus}>
              <Button size="sm" className="gap-1.5">
                <FileText className="h-4 w-4" aria-hidden />
                Get a Quote
              </Button>
            </Link>
          </div>

          <button
            type="button"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => {
              closeMenus();
              setMobileOpen((v) => !v);
            }}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={cn(
                  "block h-0.5 w-6 bg-fg transition-transform",
                  mobileOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn("block h-0.5 w-6 bg-fg transition-opacity", mobileOpen && "opacity-0")}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-fg transition-transform",
                  mobileOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {openMenu === "services" ? (
            <ServicesMegaMenu onClose={closeMenus} />
          ) : null}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-bg/85 backdrop-blur-md lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,380px)] flex-col overflow-y-auto border-l border-white/10 bg-bg-elevated p-6 shadow-[-20px_0_60px_rgba(0,0,0,0.65)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange via-purple to-orange opacity-80"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06),transparent_50%)]"
                aria-hidden
              />
              <div className="relative mt-12 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Infinity Mobile"
                  width={200}
                  height={120}
                  className="h-auto w-40 object-contain"
                />
              </div>

              <nav className="relative mt-8" aria-label="Mobile">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring mb-1 block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition hover:bg-orange/10 hover:text-white"
                >
                  Home
                </Link>
                <MobileNavAccordion onNavigate={() => setMobileOpen(false)} />
              </nav>

              <div className="relative mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="focus-ring btn-primary flex items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-bold text-white"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <Link href="/#quote" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
