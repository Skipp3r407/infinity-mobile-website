import { siteCredit } from "@/lib/site-credit";
import Image from "next/image";

export function FooterCredits() {
  return (
    <div className="footer-credits-wrap border-t border-white/5 bg-[#0a0a0a] py-8">
      <a
        href={siteCredit.url}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-credits focus-ring group mx-auto flex w-fit flex-col items-center gap-2 transition-opacity hover:opacity-90"
        aria-label={`${siteCredit.label} ${siteCredit.designer}`}
      >
        <span className="footer-credits-label text-[13px] font-bold leading-none tracking-[0.02em]">
          {siteCredit.label}
        </span>

        <span className="flex items-center gap-2">
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white">
            <Image
              src={siteCredit.logo}
              alt=""
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="footer-credits-brand text-[15px] font-bold leading-none tracking-[0.02em] sm:text-base">
            {siteCredit.designer}
          </span>
        </span>

        <span className="footer-credits-url text-[13px] font-bold leading-none tracking-[0.02em]">
          {siteCredit.displayUrl}
        </span>
      </a>
    </div>
  );
}
