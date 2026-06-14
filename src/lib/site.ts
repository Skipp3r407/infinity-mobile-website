export const site = {
  name: "Infinity Mobile",
  legalName: "Infinity Mobile LLC",
  owner: "Michael Caputo",
  tagline: "Mobile Auto Repair & Handyman Services",
  location: "Citrus County, FL",
  phone: "(352) 476-6586",
  phoneTel: "+13524766586",
  email: "info@infinitymobilefl.com",
  status: "LLC & Insured",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#quote", label: "Get a Quote" },
] as const;
