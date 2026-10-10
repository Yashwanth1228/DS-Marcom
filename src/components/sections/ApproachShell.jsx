"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, MapPin, FileCheck, CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ApproachShell() {
  const shouldReduceMotion = useReducedMotion();

  const stages = [
    {
      number: "01",
      stageTag: "Explore",
      projectTag: "Plotted Layouts",
      icon: Compass,
      title: "Explore Opportunities",
      image: "/images/approach/stage1-explore-plots.jpg",
      alt: "Planned residential plotted layout with paved avenues in Bangalore",
      description:
        "Explore curated plotted layouts, residential villa enclaves, and property opportunities across Bangalore's active growth belts.",
      keyAction: "Residential Plots & Corridors",
    },
    {
      number: "02",
      stageTag: "Site Visit",
      projectTag: "CRS Enclave",
      icon: MapPin,
      title: "Arrange a Site Visit",
      image: "/images/approach/stage2-site-visit.jpg",
      alt: "Accompanied on-site property inspection and layout avenue walk at CRS Enclave Bangalore",
      description:
        "Experience the land firsthand. Coordinate an accompanied on-ground visit to CRS Enclave or our active layouts to inspect boundary markers, asphalt roads, and regional connectivity.",
      keyAction: "CRS Enclave Layout Inspection",
    },
    {
      number: "03",
      stageTag: "Review",
      projectTag: "Legal Verification",
      icon: FileCheck,
      title: "Review the Details",
      image: "/images/approach/stage3-document-review.jpg",
      alt: "Verified property documentation, layout sanctions, Pahani and RTC review desk",
      description:
        "Examine site layout sanction plans, BMRDA approvals, and verified Pahani/RTC land records. We facilitate independent legal review so you have complete visibility before commitment.",
      keyAction: "Sanctions & Title Deed Review",
    },
    {
      number: "04",
      stageTag: "Decision",
      projectTag: "Royal Homes",
      icon: CheckCircle2,
      title: "Make an Informed Decision",
      image: "/images/approach/stage4-decision-possession.jpg",
      alt: "Completed residential villa possession and registered ownership at Royal Homes Bangalore",
      description:
        "Move forward with confidence. Conclude your acquisition with structured guidance on allotment terms, sub-registrar registration, and possession as demonstrated across 9 delivered projects.",
      keyAction: "Registered Deed & Possession",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#FAFAF8] border-b border-[#E5E8E5] overflow-hidden">
      <Container>
        {/* ========================================================= */}
        {/* SECTION HEADER: Natural, unstretched typography           */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#0F7824] mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#19B83A] animate-pulse" />
            <span>Consultation Process</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#0B0D0C] leading-[1.14]">
            From Discovery to{" "}
            <span className="font-editorial italic font-semibold text-[#0F7824]">
              Decision
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4F5B52] leading-relaxed max-w-2xl">
            A structured, transparent buyer journey designed to guide you from initial exploration through on-ground verification and informed property decisions.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* CONNECTED TIMELINE PROGRESS TRACK (Desktop)               */}
        {/* Segmented connectors: NO line cuts through any text       */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8 items-center mb-10">
          {stages.map((stage, idx) => (
            <div key={idx} className="flex items-center">
              {/* Milestone Indicator Node with solid background */}
              <div className="flex items-center space-x-2.5 shrink-0 bg-[#FAFAF8] pr-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#19B83A] bg-white flex items-center justify-center text-xs font-bold text-[#0F7824] shadow-xs">
                  <span>{stage.number}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#0F7824] uppercase tracking-wider">
                    Stage {stage.number}
                  </span>
                  <span className="text-xs font-medium text-[#4F5B52]">
                    {stage.stageTag}
                  </span>
                </div>
              </div>

              {/* Connecting line strictly between nodes - NEVER touching or scratching words */}
              {idx < stages.length - 1 && (
                <div className="flex-1 h-[2px] bg-[#E5E8E5] overflow-hidden rounded-full ml-1 mr-2">
                  <motion.div
                    initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full bg-gradient-to-r from-[#0F7824] to-[#19B83A] origin-left"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* THE 4 VISUAL STAGE CARDS                                  */}
        {/* Authentic DS Marcom project photography & clean type      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.article
                key={stage.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 35 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-[#E5E8E5] bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#19B83A]/50 transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Authentic Photography Frame */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#E5E8E5]">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    {/* Floating Stage Pill with clean typography */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium flex items-center space-x-1.5 border border-white/20 shadow-xs">
                      <span className="font-bold text-[#19B83A]">{stage.number}</span>
                      <span className="text-white/60">&bull;</span>
                      <span>{stage.stageTag}</span>
                    </div>

                    {/* Micro Project Reference Pill on bottom of image */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-md text-[11px] font-bold text-[#0F7824] shadow-xs border border-white/40">
                      {stage.projectTag}
                    </div>

                    {/* Micro Icon Badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#0F7824] flex items-center justify-center shadow-xs group-hover:bg-[#19B83A] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-5.5">
                    <span className="text-xs font-semibold text-[#0F7824] mb-1.5 block">
                      Stage {stage.number} &bull; {stage.projectTag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B0D0C] group-hover:text-[#0F7824] transition-colors leading-snug mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4F5B52] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Verified Milestone Pill */}
                <div className="px-5 pb-5 pt-3 border-t border-[#E5E8E5]/70 bg-[#FAFAF8]/50 flex items-center text-[11px] font-semibold text-[#0B0D0C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A] mr-1.5 shrink-0" />
                  <span className="truncate">{stage.keyAction}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* EDITORIAL ADVISORY TRUST BANNER                           */}
        {/* Professional callout with quick consultation action       */}
        {/* ========================================================= */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 p-5 sm:p-6 bg-white border border-[#E5E8E5] rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs"
        >
          <div className="flex items-start space-x-3.5 max-w-2xl">
            <ShieldCheck className="w-5 h-5 text-[#19B83A] mt-0.5 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-[#063B20] mb-1">
                Transparent & Independent Due Diligence
              </h4>
              <p className="text-xs sm:text-[13px] text-[#4F5B52] leading-relaxed">
                We encourage all clients and investors to review land records, layout sanctions, and title deeds with independent legal counsel before finalizing any transaction.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center self-start md:self-center px-4 py-2.5 rounded-xl bg-[#EDF9EF] hover:bg-[#19B83A] text-[#0F7824] hover:text-white text-xs font-bold transition-all duration-300 shadow-xs shrink-0 group"
          >
            <span>Consult Our Advisory Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}




