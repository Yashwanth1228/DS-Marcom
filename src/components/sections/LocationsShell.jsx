"use client";

import { motion } from "framer-motion";
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
      description: "Favored for spacious villa plots, peaceful getaways, and tranquil residential living outside the city density.",
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
    <section className="py-20 sm:py-28 bg-white border-b border-[#E5E8E5] overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Strategic Geography"
          title="Bangalore's High-Growth Corridors"
          description="DS Marcom actively identifies property opportunities positioned across prominent growth vectors, transit nodes, and scenic peripheral landscapes in Bengaluru."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: "#0F7824" }}
              className="bg-[#FAFAF8] p-6 sm:p-7 border border-[#E5E8E5] rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F7824] px-2 py-0.5 rounded bg-[#EDF9EF]">
                    {loc.tag}
                  </span>
                  <MapPin className="w-4 h-4 text-[#19B83A] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B0D0C] mb-2 group-hover:text-[#0F7824] transition-colors tracking-tight">
                  {loc.name}
                </h3>
                <p className="text-xs font-semibold text-[#0B0D0C] mb-3 pb-3 border-b border-[#E5E8E5]">
                  {loc.highlight}
                </p>
                <p className="text-xs text-[#4F5B52] leading-relaxed">
                  {loc.description}
                </p>
              </div>

              <div className="pt-6 mt-4 flex items-center text-xs font-medium text-[#66706A]">
                <Navigation className="w-3.5 h-3.5 mr-1 text-[#0F7824]" />
                <span>Bengaluru Region</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

