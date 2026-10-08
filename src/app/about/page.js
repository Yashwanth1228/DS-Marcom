import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Award, MapPin, Building2, CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "About DS MARCOM | Trusted Bangalore Real Estate Experience",
  description:
    "Learn about DS Marcom's 6+ years of expertise in Bangalore real estate, 9 completed projects, and commitment to accessible plotted and residential developments.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      {/* Page Hero */}
      <section className="pb-16 sm:pb-20 border-b border-[#E7E5E0]">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="bronze" className="mb-4">
              Company Overview
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C] leading-[1.15]">
              Decades of Combined Local Insight.{" "}
              <span className="text-[#172033] block">6+ Years of Proven Delivery.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#64748B] leading-relaxed">
              DS Marcom was founded with a singular purpose: connecting Bangalore property buyers with strategically located, legally clear, and genuinely affordable real estate opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* Verified Metrics Bar */}
      <section className="py-12 bg-white border-b border-[#E7E5E0]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E7E5E0]">
            {siteConfig.metrics.map((metric, idx) => (
              <div key={idx} className={idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}>
                <span className="text-3xl sm:text-4xl font-bold text-[#17191C]">
                  {metric.value}
                </span>
                <h3 className="text-sm font-semibold text-[#17191C] mt-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Corporate Story & Bangalore Focus */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Story & Philosophy"
                title="Rooted in Bangalore's Dynamic Growth Vectors."
              />
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Bengaluru is one of India&apos;s fastest-evolving urban landscapes. Rapidly expanding metro corridors, expressways, and suburban hubs present profound opportunities for both residential tranquility and land investment.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Over the past 6+ years, DS Marcom has guided clients toward strategically positioned locations—from the bustling Mysore Road expressway belt and Kumbalgodu to Bangalore North nodes like Nelamangala and Dasanapura.
              </p>
              <div className="pt-4 border-t border-[#E7E5E0] space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B58A4A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#17191C]">
                    Residential & commercial opportunities with verified documentation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B58A4A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#17191C]">
                    BMRDA layouts and A Khata / B Khata property guidance
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B58A4A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#17191C]">
                    9 successfully delivered real estate developments across Bengaluru
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 sm:p-10 border border-[#E7E5E0]">
              <h3 className="text-lg font-bold text-[#17191C] mb-4">
                Corporate Values
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#17191C]">Transparency First</h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    We emphasize authentic land titles, individual Pahani & RTC documentation, and clear statutory compliance.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E5E0]">
                  <h4 className="text-sm font-semibold text-[#17191C]">Strategic Location Selection</h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Focusing on emerging arterial highways, upcoming metro transit routes, and scenic green pockets.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E5E0]">
                  <h4 className="text-sm font-semibold text-[#17191C]">Enduring Client Guidance</h4>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Assisting clients through site selection, documentation verification, and registration formalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16">
        <Container>
          <div className="bg-[#172033] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Connect with DS Marcom</h2>
              <p className="text-sm text-[#94A3B8] mt-1">
                Speak directly with our team regarding property consultations in Bangalore.
              </p>
            </div>
            <Button href="/contact" variant="bronze" size="md">
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
