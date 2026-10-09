import Link from "next/link";
import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function CtaShell() {
  return (
    <section className="py-20 sm:py-24 bg-[#0B0D0C] text-white relative overflow-hidden">
      {/* Restrained architectural background grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <Container size="narrow">
        <div className="relative text-center flex flex-col items-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B58A4A]">
            Advisory Desk & Site Inquiries
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            Ready to Discuss Your Next Property Opportunity in Bangalore?
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
            Connect directly with DS Marcom to arrange private site visits, review available Pahani/RTC records, or discuss plotted layouts across Bangalore&apos;s growth corridors.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button href="/contact" size="lg" variant="bronze" className="w-full sm:w-auto">
              <span>Schedule a Site Visit</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              href="/properties"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white/40"
            >
              <span>Explore All Properties</span>
            </Button>
          </div>

          {/* Factual Office & Contact Trust Bar */}
          <div className="pt-10 mt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#94A3B8]">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="flex items-center justify-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B58A4A] shrink-0" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#B58A4A] shrink-0" />
              <span>Kengeri Satellite Town, Bengaluru</span>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#B58A4A] shrink-0" />
              <span>{siteConfig.contact.businessHours} (Mon – Sat)</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
