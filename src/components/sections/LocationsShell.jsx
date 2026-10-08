import { MapPin, Navigation } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LocationsShell() {
  const locations = [
    {
      name: "Kumbalgodu & Mysore Road",
      tag: "South-West Corridor",
      highlight: "Direct connectivity to Bengaluru-Mysore Expressway and metro network.",
      description: "A fast-evolving residential and educational node offering rapid accessibility to key city zones.",
    },
    {
      name: "Big Banyan Tree Area",
      tag: "Tranquil Outskirts",
      highlight: "Pristine natural surroundings ideal for weekend retreats.",
      description: "Favored for farm plots, peaceful getaways, and nature-centric living outside the city density.",
    },
    {
      name: "Wonderla / Bidadi Belt",
      tag: "Expressway Node",
      highlight: "Strategic leisure and infrastructure expansion corridor.",
      description: "Direct expressway access driving sustained residential and commercial land appreciation.",
    },
    {
      name: "Nelamangala / Dasanapura Area",
      tag: "Bangalore North Taluk",
      highlight: "Bethanagere and major logistics & transit convergence.",
      description: "Key northern artery linking Pune-Bangalore highway and expanding industrial nodes.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] border-t border-[#E7E5E0]">
      <Container>
        <SectionHeading
          eyebrow="Strategic Geography"
          title="Bangalore's High-Growth Corridors"
          description="DS Marcom actively identifies property opportunities positioned across prominent growth vectors, transit nodes, and scenic peripheral landscapes in Bengaluru."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 border border-[#E7E5E0] hover:border-[#17191C]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B58A4A]">
                    {loc.tag}
                  </span>
                  <MapPin className="w-4 h-4 text-[#64748B]" />
                </div>
                <h3 className="text-lg font-bold text-[#17191C] mb-2">
                  {loc.name}
                </h3>
                <p className="text-xs font-semibold text-[#172033] mb-3 pb-3 border-b border-[#E7E5E0]">
                  {loc.highlight}
                </p>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {loc.description}
                </p>
              </div>

              <div className="pt-6 mt-4 flex items-center text-xs font-medium text-[#64748B]">
                <Navigation className="w-3.5 h-3.5 mr-1 text-[#B58A4A]" />
                <span>Bengaluru Region</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
