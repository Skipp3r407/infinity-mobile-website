import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AirVent,
  Cog,
  Disc3,
  Droplets,
  Hammer,
  Layers,
  Monitor,
  Settings2,
  Sparkles,
  Wrench,
} from "lucide-react";

export type ServiceCategory = "auto" | "handyman" | "exterior";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  icon: LucideIcon;
  shortDescription: string;
  details: string[];
};

export const serviceCategories = [
  { id: "all" as const, label: "All" },
  { id: "auto" as const, label: "Auto Repair" },
  { id: "handyman" as const, label: "Handyman" },
  { id: "exterior" as const, label: "Exterior Services" },
];

export const services: Service[] = [
  {
    id: "diagnostics",
    title: "Diagnostics",
    category: "auto",
    icon: Activity,
    shortDescription: "Advanced computer diagnostics and honest assessments before any repair begins.",
    details: [
      "Check engine light and OBD-II scanning",
      "Electrical and sensor troubleshooting",
      "Clear explanations of findings and repair options",
      "No unnecessary upsells — straight answers you can trust",
    ],
  },
  {
    id: "brakes",
    title: "Brakes",
    category: "auto",
    icon: Disc3,
    shortDescription: "Pads, rotors, calipers, and brake fluid service for safe stopping power.",
    details: [
      "Brake pad and rotor replacement",
      "Caliper inspection and repair",
      "Brake fluid flush and bleed service",
      "On-site mobile brake service at your location",
    ],
  },
  {
    id: "tune-ups",
    title: "Tune-Ups",
    category: "auto",
    icon: Settings2,
    shortDescription: "Routine maintenance to keep your engine running smooth and efficient.",
    details: [
      "Spark plugs, filters, and fluid checks",
      "Ignition and fuel system inspection",
      "Preventive maintenance schedules",
      "Performance and efficiency optimization",
    ],
  },
  {
    id: "ac",
    title: "A/C",
    category: "auto",
    icon: AirVent,
    shortDescription: "Stay cool in Florida heat with full mobile A/C diagnosis and repair.",
    details: [
      "A/C recharge and leak detection",
      "Compressor and condenser service",
      "Blower motor and climate control repair",
      "Fast relief from Florida heat",
    ],
  },
  {
    id: "engine-transmission",
    title: "Engine / Transmission",
    category: "auto",
    icon: Cog,
    shortDescription: "Major drivetrain repairs handled with precision and professional care.",
    details: [
      "Engine diagnostics and repair",
      "Transmission service and troubleshooting",
      "Timing belts, gaskets, and seals",
      "Heavy-duty work done right at your location",
    ],
  },
  {
    id: "swaps",
    title: "Swaps",
    category: "auto",
    icon: Wrench,
    shortDescription: "Engine and drivetrain swaps for performance builds and restorations.",
    details: [
      "Engine swap planning and installation",
      "Transmission and drivetrain conversions",
      "Custom fabrication coordination",
      "Performance-oriented project support",
    ],
  },
  {
    id: "custom-aftermarket",
    title: "Custom Aftermarket",
    category: "auto",
    icon: Sparkles,
    shortDescription: "Aftermarket upgrades and custom installs for a personalized ride.",
    details: [
      "Suspension, exhaust, and intake upgrades",
      "Wheels, tires, and performance parts install",
      "Custom lighting and accessory mounting",
      "Built to your vision with quality workmanship",
    ],
  },
  {
    id: "handyman",
    title: "Handyman",
    category: "handyman",
    icon: Hammer,
    shortDescription: "Reliable handyman services for repairs, installs, and home projects.",
    details: [
      "General repairs and fixture installation",
      "Door, hardware, and trim work",
      "Small carpentry and assembly projects",
      "One call for auto and home convenience",
    ],
  },
  {
    id: "vct-flooring",
    title: "VCT Flooring",
    category: "handyman",
    icon: Layers,
    shortDescription: "Professional VCT tile flooring installation for commercial and residential spaces.",
    details: [
      "Surface prep and adhesive application",
      "Precision tile layout and cutting",
      "Seamless commercial-grade finishes",
      "Durable flooring built to last",
    ],
  },
  {
    id: "screens",
    title: "Screens",
    category: "handyman",
    icon: Monitor,
    shortDescription: "Screen repair and replacement for windows, doors, and enclosures.",
    details: [
      "Window and door screen repair",
      "Pool and patio enclosure screens",
      "Custom screen sizing and installation",
      "Keep bugs out and airflow in",
    ],
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    category: "exterior",
    icon: Droplets,
    shortDescription: "Restore driveways, siding, decks, and exterior surfaces to like-new condition.",
    details: [
      "Driveways, sidewalks, and patios",
      "Home siding and exterior walls",
      "Decks, fences, and outdoor structures",
      "Professional results without the hassle",
    ],
  },
];

export const whyChooseItems = [
  {
    title: "We Come to You",
    description:
      "Skip the tow truck and waiting room. Michael brings the shop to your driveway, job site, or workplace across Citrus County.",
  },
  {
    title: "Honest Diagnostics",
    description:
      "Clear explanations, fair pricing, and repairs you actually need. No scare tactics — just straight answers from a trusted pro.",
  },
  {
    title: "Auto + Handyman Convenience",
    description:
      "One insured provider for your vehicle and your property. Save time with a single call for multiple service needs.",
  },
  {
    title: "Local Citrus County Business",
    description:
      "Proudly serving neighbors in Citrus County, FL. Fast response times and personal service from a business that lives here too.",
  },
  {
    title: "Insured Service Provider",
    description:
      "Infinity Mobile is LLC registered and fully insured. Professional work with the protection and accountability you deserve.",
  },
] as const;

export const trustItems = [
  { label: "LLC & Insured" },
  { label: "Mobile Service" },
  { label: "Citrus County" },
  { label: "Fast Response" },
  { label: "Auto + Handyman Services" },
] as const;
