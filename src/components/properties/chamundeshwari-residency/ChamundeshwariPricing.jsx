"use client";

import { motion } from "framer-motion";
import {
  Ruler,
  CheckCircle2,
  FileText,
  Route,
  Zap,
  Waves,
} from "lucide-react";
import { chamundeshwariData } from "@/data/chamundeshwariData";

export default function ChamundeshwariPricing() {
  const specifications = [
    {
      id: "plot-dimensions",
      icon: Ruler,
      title: "Plot Dimensions",
      value: chamundeshwariData.plotDimensions,
      description:
        "Demarcated residential parcel layouts suited for custom luxury villas and multi-level private homes.",
      highlight: "30×40, 30×50 & custom parcels",
    },
    {
      id: "status",
      icon: CheckCircle2,
      title: "Development Readiness",
      value: "Ready for Construction",
      description:
        "Physically paved cement concrete avenues, perimeter fencing, and internal utility cabling installed.",
      highlight: "On-ground construction ready",
    },
    {
      id: "registration",
      icon: FileText,
      title: "Registration Availability",
      value: "Immediate Registration",
      description:
        "Immediate registration available based on supplied project records. Subject to current confirmation.",
      highlight: "Prompt registry procedures",
    },
    {
      id: "roads",
      icon: Route,
      title: "Internal Road Network",
      value: "Wide Cement Concrete Roads",
      description:
        "Durable, wide cement concrete roadways running across the layout for all-weather vehicular transit.",
      highlight: "Paved cement access avenues",
    },
    {
      id: "power",
      icon: Zap,
      title: "Electrical Infrastructure",
      value: "Underground Power & Street Lights",
      description:
        "Dedicated underground electrical cabling paired with modern street lighting poles for clear sightlines.",
      highlight: "Subterranean electrical grid",
    },
    {
      id: "drainage",
      icon: Waves,
      title: "Drainage & Water Network",
      value: "Underground Drainage & Water",
      description:
        "Integrated subterranean storm-water drainage channels along with direct water connection provisions.",
      highlight: "Engineered underground drainage",
    },
  ];

  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-14 pb-14 sm:pb-16 lg:pb-20 bg-white text-[#0B0D0C] border-t border-stone-200/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
            PROJECT SPECIFICATIONS &amp; HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D0C] tracking-tight">
            Verified Property Parameters.
          </h2>
        </div>

        {/* Proportionate 3x2 Grid of Verified Specification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#F7F8F5] p-6 sm:p-7 rounded-3xl border border-stone-200/80 hover:border-[#19B83A]/50 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-white text-[#063B20] border border-stone-200 flex items-center justify-center shadow-xs group-hover:bg-[#063B20] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                      SPEC 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                      {spec.title}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0B0D0C] tracking-tight leading-snug">
                      {spec.value}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#19B83A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B83A]" />
                  <span>{spec.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
