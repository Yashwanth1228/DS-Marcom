import { Compass, CheckCircle2, Building, ShieldCheck, MapPinned } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUsShell() {
  const values = [
    {
      icon: MapPinned,
      title: "Bangalore Market Focus",
      description:
        "Specialized insight into Bengaluru's expanding transport corridors, peripheral growth nodes, and emerging infrastructure hubs.",
    },
    {
      icon: Compass,
      title: "Affordable Opportunities",
      description:
        "Strategically located property options designed to offer accessible entry points and long-term appreciation potential.",
    },
    {
      icon: ShieldCheck,
      title: "6+ Years Local Experience",
      description:
        "A proven operating history backed by 9 completed real estate projects delivered across Bangalore.",
    },
    {
      icon: Building,
      title: "Residential & Commercial Options",
      description:
        "Comprehensive portfolio spanning plotted developments, farm plots, weekend villas, and commercial land opportunities.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E7E5E0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Positioning (5 cols) */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The DS Marcom Advantage"
              title="Built on Local Insight, Verified Growth, and Long-Term Credibility."
              description="Navigating Bangalore's dynamic real estate landscape requires authentic local presence, transparent documentation, and a clear understanding of growth corridors."
            />
            
            <div className="mt-8 p-6 bg-[#FAFAF8] border border-[#E7E5E0]">
              <h4 className="text-sm font-bold text-[#17191C] uppercase tracking-wider mb-2">
                Our Core Philosophy
              </h4>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We believe enduring real estate investments begin with clarity. From individual Pahani & RTC documentation to BMRDA-approved layouts, we guide buyers through every phase.
              </p>
            </div>
          </div>

          {/* Right Column: Values Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-[#FAFAF8] border border-[#E7E5E0] hover:border-[#B58A4A]/40 transition-colors"
                >
                  <div className="w-10 h-10 bg-white border border-[#E7E5E0] flex items-center justify-center mb-5 text-[#B58A4A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#17191C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
