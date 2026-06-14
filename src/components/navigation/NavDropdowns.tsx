"use client";

import { cn } from "@/lib/cn";
import {
  companyNavItems,
  getServicesByCategory,
  navServiceGroups,
} from "@/lib/navigation";
import { site } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

type ServicesMegaMenuProps = {
  onClose: () => void;
};

export function ServicesMegaMenu({ onClose }: ServicesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border-t border-white/10 bg-bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-10">
        <div className="relative border-white/10 lg:col-span-4 lg:border-r lg:pr-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange">Mobile Service</p>
          <p className="font-display mt-3 text-2xl font-bold uppercase tracking-tight text-white">
            We Come <span className="text-gradient-accent">To You</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Auto repair, handyman work, and exterior cleaning across {site.location}. One insured
            provider for your vehicle and your property.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-white">
            <Phone className="h-4 w-4 text-orange" aria-hidden />
            {site.phone}
          </p>
          <Link
            href="/#services"
            onClick={onClose}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg border border-orange/40 bg-orange/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-orange transition hover:bg-orange/20"
          >
            View all services
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          {navServiceGroups.map((group) => {
            const items = getServicesByCategory(group.id);
            return (
              <div key={group.id}>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple">
                  {group.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{group.description}</p>
                <ul className="mt-4 space-y-1">
                  {items.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.id}>
                        <Link
                          href="/#services"
                          onClick={onClose}
                          className="focus-ring group flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-orange/10 hover:text-white"
                        >
                          <Icon
                            className="h-4 w-4 shrink-0 text-orange transition group-hover:text-purple"
                            aria-hidden
                          />
                          {service.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

type CompanyDropdownProps = {
  onClose: () => void;
  className?: string;
};

export function CompanyDropdown({ onClose, className }: CompanyDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute left-0 top-[calc(100%+0.5rem)] z-50 w-72 overflow-hidden rounded-xl border border-white/10 bg-bg-elevated p-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-orange via-purple to-orange opacity-80" />
      <ul className="relative space-y-1 pt-1">
        {companyNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="focus-ring group flex items-start gap-3 rounded-lg px-3 py-3 transition hover:bg-orange/10"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange/15 to-purple/15 transition group-hover:from-orange/25 group-hover:to-purple/25">
                  <Icon className="h-4 w-4 text-orange" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{item.label}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-zinc-500">
                    {item.description}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
