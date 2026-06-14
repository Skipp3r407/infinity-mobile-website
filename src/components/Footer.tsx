import { FooterCredits } from "@/components/FooterCredits";
import { services } from "@/lib/services";
import { navLinks, site } from "@/lib/site";
import { MapPin, Phone, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Infinity Mobile"
              width={200}
              height={130}
              className="h-auto w-44 object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{site.tagline}</p>
            <p className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange">
              <Shield className="h-4 w-4" aria-hidden />
              {site.status}
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#services"
                    className="text-sm text-zinc-400 transition hover:text-orange"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-orange"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple" aria-hidden />
                {site.location}
              </li>
              <li className="text-sm text-zinc-500">
                Owner: {site.owner}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
      <FooterCredits />
    </footer>
  );
}
