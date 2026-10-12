"use client";

import { motion } from "framer-motion";
import {
  Ruler,
  CheckCircle2,
  FileText,
  Route,
  Zap,
  ShieldCheck,
  ArrowRight,
  Phone,
  Info,
} from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmPricing() {
  const scrollToEnquiry = () => {
    const el = document.getElementById("enquire");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const specifications = [
    {
      id: "plot-size",
      icon: Ruler,
      title: "Plot Dimensions",
      value: nagarajuFarmData.plotSizeRange,
      description:
        "Generous parcel layouts crafted for private weekend villas, farm retreats, and bespoke country homes.",
      highlight: "Demarcated 5,000–6,000 sq ft plots",
    },
    {
      id: "status",
      icon: CheckCircle2,
      title: "Development Readiness",
      value: "Ready for Construction",
      description:
        "Physically paved internal roads, utility power line connections, and perimeter demarcations completed.",
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
      value: "Concrete Internal Roads",
      description:
        "Durable, wide concrete roads running across the property for all-weather vehicular convenience.",
      highlight: "Paved internal access avenues",
    },
    {
      id: "power",
      icon: Zap,
      title: "Utility Infrastructure",
      value: "Electrical Connection",
      description:
        "Dedicated overhead utility power lines and electric poles installed across internal avenues.",
      highlight: "Dedicated electric line poles",
    },
    {
      id: "security",
      icon: ShieldCheck,
      title: "Security & Setting",
      value: "Gated Community Enclave",
      description:
        "Grand architectural entrance archway with integrated security sliding gate and boundary walling.",
      highlight: "Entrance arch & gated perimeter",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white text-[#0B0D0C] border-t border-stone-200/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
              PROJECT SPECIFICATIONS &amp; HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D0C] tracking-tight">
              Verified Property Parameters.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md leading-relaxed">
            Every specification below reflects verified on-ground disclosures from physical site documentation at Nagaraju Farm Land.
          </p>
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

        {/* Refined Bottom Advisory Action Card */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-[#063B20] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
              PHYSICAL SITE INSPECTION
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Request Master Layout Demarcations or Schedule a Site Visit
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Connect with our advisory desk to review on-ground plot boundaries, access routes, and verify documentation directly.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              type="button"
              onClick={scrollToEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#19B83A]/25 cursor-pointer"
            >
              <span>Enquire About Plots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`tel:${nagarajuFarmData.contact.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#19B83A]" />
              <span>Call 9606342643</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
