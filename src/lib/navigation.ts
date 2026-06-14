import type { LucideIcon } from "lucide-react";
import { Building2, Star, Users } from "lucide-react";
import { services, type ServiceCategory } from "@/lib/services";
import { site } from "@/lib/site";

export type NavServiceGroup = {
  id: ServiceCategory;
  label: string;
  description: string;
};

export const navServiceGroups: NavServiceGroup[] = [
  {
    id: "auto",
    label: "Auto Repair",
    description: "Diagnostics, brakes, A/C, engine work, swaps, and custom upgrades.",
  },
  {
    id: "handyman",
    label: "Handyman",
    description: "Repairs, VCT flooring, screens, and on-site home projects.",
  },
  {
    id: "exterior",
    label: "Exterior Services",
    description: "Professional pressure washing for driveways, siding, and more.",
  },
];

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}

export type CompanyNavItem = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const companyNavItems: CompanyNavItem[] = [
  {
    href: "/#about",
    label: "About",
    description: `Meet ${site.owner} — owner and mobile service pro.`,
    icon: Users,
  },
  {
    href: "/#why-us",
    label: "Why Us",
    description: "We come to you, honest diagnostics, LLC & insured.",
    icon: Building2,
  },
  {
    href: "/reviews",
    label: "Reviews",
    description: "See what Citrus County customers are saying.",
    icon: Star,
  },
];

export const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#quote", label: "Get a Quote" },
] as const;
