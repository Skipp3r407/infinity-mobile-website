"use client";

import { cn } from "@/lib/cn";
import {
  companyNavItems,
  getServicesByCategory,
  navServiceGroups,
} from "@/lib/navigation";
import { NavChevron } from "@/components/navigation/NavChevron";
import Link from "next/link";
import { useState } from "react";

type MobileNavAccordionProps = {
  onNavigate: () => void;
};

export function MobileNavAccordion({ onNavigate }: MobileNavAccordionProps) {
  const [openSection, setOpenSection] = useState<null | "services" | "company">(null);

  const toggle = (section: "services" | "company") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="space-y-1">
      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition hover:bg-orange/10 hover:text-white"
        aria-expanded={openSection === "services"}
        onClick={() => toggle("services")}
      >
        Services
        <NavChevron open={openSection === "services"} />
      </button>
      {openSection === "services" ? (
        <div className="mb-2 space-y-4 border-l border-orange/20 pl-4">
          {navServiceGroups.map((group) => {
            const items = getServicesByCategory(group.id);
            return (
              <div key={group.id}>
                <p className="text-[10px] font-bold uppercase tracking-wider text-orange">
                  {group.label}
                </p>
                <ul className="mt-2 space-y-0.5">
                  {items.map((service) => (
                    <li key={service.id}>
                      <Link
                        href="/#services"
                        onClick={onNavigate}
                        className="focus-ring block rounded-md px-2 py-1.5 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <Link
            href="/#services"
            onClick={onNavigate}
            className="inline-block text-xs font-bold uppercase tracking-wider text-purple hover:text-orange"
          >
            View all services →
          </Link>
        </div>
      ) : null}

      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition hover:bg-orange/10 hover:text-white"
        aria-expanded={openSection === "company"}
        onClick={() => toggle("company")}
      >
        Company
        <NavChevron open={openSection === "company"} />
      </button>
      {openSection === "company" ? (
        <ul className="mb-2 space-y-0.5 border-l border-purple/20 pl-4">
          {companyNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="focus-ring block rounded-md px-2 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <Link
        href="/#quote"
        onClick={onNavigate}
        className={cn(
          "focus-ring block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-300 transition hover:bg-orange/10 hover:text-white",
        )}
      >
        Get a Quote
      </Link>
    </div>
  );
}
