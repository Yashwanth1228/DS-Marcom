import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F9FAF8] text-[#1E293B] mt-auto border-t border-[#E2EBE5] overflow-hidden">
      {/* Upper Content Section */}
      <div className="relative z-10 pt-10 sm:pt-12 pb-0">
        <Container>
          {/* Logo on top: emblem made bigger as requested */}
          <div className="pb-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <Image
                src="/images/brand/ds-marcom-emblem.png"
                alt="DS MARCOM Logo Emblem"
                width={498}
                height={566}
                unoptimized
                className="h-[72px] sm:h-[84px] lg:h-[92px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <Image
                src="/images/brand/ds-marcom-text.png"
                alt="DS MARCOM Properties & Promoters"
                width={1536}
                height={153}
                unoptimized
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Grid row: sentence below logo on left, followed by the other columns in the same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Column 1: Sentence below the logo + Business Hours + Social Media Icons (4 cols) */}
            <div className="lg:col-span-4 space-y-3.5">
              <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
                Where verified growth meets sustainable living. DS MARCOM curates legally vetted
                managed farmlands, BMRDA-approved plotted communities, and residential
                developments across Bangalore’s most promising growth corridors.
              </p>

              <div className="flex items-center space-x-2 text-xs text-[#64748B] pt-1">
                <Clock className="w-4 h-4 text-[#19B83A] shrink-0" />
                <span>
                  Business Hours:{" "}
                  <strong className="text-[#334155]">{siteConfig.contact.businessHours}</strong>
                </span>
              </div>

              {/* Social Media Symbols */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-[#19B83A]/10 border border-[#19B83A]/25 text-[#063B20] hover:bg-[#19B83A] hover:text-white transition-all flex items-center justify-center shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#19B83A]/10 border border-[#19B83A]/25 text-[#063B20] hover:bg-[#19B83A] hover:text-white transition-all flex items-center justify-center shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#19B83A]/10 border border-[#19B83A]/25 text-[#063B20] hover:bg-[#19B83A] hover:text-white transition-all flex items-center justify-center shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#19B83A]/10 border border-[#19B83A]/25 text-[#063B20] hover:bg-[#19B83A] hover:text-white transition-all flex items-center justify-center shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#063B20] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#475569] hover:text-[#063B20] hover:font-medium transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Featured Projects (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#063B20] mb-4">
                Featured Projects
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/properties/nagaraju-farm" className="group block">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1E293B] group-hover:text-[#063B20] group-hover:font-medium transition-colors">
                        Nagaraju Farm
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#19B83A]/10 text-[#063B20] border border-[#19B83A]/25">
                        Farmland
                      </span>
                    </div>
                    <span className="block text-xs text-[#64748B] mt-0.5">
                      Near Mysore Road / Kumbalgodu
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/properties/crs-enclave" className="group block">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1E293B] group-hover:text-[#063B20] group-hover:font-medium transition-colors">
                        CRS Enclave
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#19B83A]/10 text-[#063B20] border border-[#19B83A]/25">
                        BMRDA Plots
                      </span>
                    </div>
                    <span className="block text-xs text-[#64748B] mt-0.5">
                      Gated Plotted Layout
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/properties/royal-homes" className="group block">
                    <div className="flex items-center justify-between">
                      <span className="text-[#1E293B] group-hover:text-[#063B20] group-hover:font-medium transition-colors">
                        Royal Homes
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        Delivered
                      </span>
                    </div>
                    <span className="block text-xs text-[#64748B] mt-0.5">
                      Residential Community
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Corporate Office (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#063B20] mb-4">
                Corporate Office
              </h3>
              <ul className="space-y-3 text-sm text-[#475569]">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#19B83A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-xs">
                    {siteConfig.contact.address.floor},{" "}
                    {siteConfig.contact.address.complex}, {siteConfig.contact.address.street},{" "}
                    {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}
                  </span>
                </li>
                <li className="flex items-center space-x-2.5 text-xs">
                  <Phone className="w-4 h-4 text-[#19B83A] shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="hover:text-[#063B20] transition-colors font-medium text-[#1E293B]"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center space-x-2.5 text-xs">
                  <Mail className="w-4 h-4 text-[#19B83A] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-[#063B20] transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* =========================================================================
          GROUNDING BASE LAYER: Bangalore Landmarks & Nature Canopy Illustration
          Full headroom so top spires & catenary wires are completely uncut
          ========================================================================= */}
      <div className="relative w-full overflow-hidden -mt-6 sm:-mt-10 lg:-mt-14 pointer-events-none">
        <div className="relative w-full h-36 sm:h-48 md:h-56 lg:h-64">
          <Image
            src="/images/footer/bangalore-skyline-fullwidth.png"
            alt="Bangalore Landmarks & Green Canopy"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover object-bottom"
            priority={false}
          />
        </div>

        {/* Bottom Bar: Copyright & Corridor Statement */}
        <div className="bg-[#063B20] text-white/80 py-4 text-xs pointer-events-auto">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <p className="text-white/70">
                © {currentYear} {siteConfig.name}. All rights reserved.
              </p>
              <p className="text-[#9FE6AE] text-[11px]">
                Bangalore Real Estate • Farmlands, Plotted Living & Residential Communities
              </p>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
