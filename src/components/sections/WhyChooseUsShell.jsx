"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Award, Building2, FileCheck, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

export default function WhyChooseUsShell() {
  const pillars = [
    {
      icon: MapPin,
      title: "Corridor Specialization",
      description: "On-ground presence across Kumbalgodu, Mysore Road & Bangalore North.",
    },
    {
      icon: FileCheck,
      title: "Verified Documentation",
      description: "Rigorous title vetting: verified RTC, Pahani, BMRDA approvals & A Khata.",
    },
    {
      icon: Award,
      title: "6+ Years Proven Track Record",
      description: "9 successfully delivered plotted communities & residential developments.",
    },
    {
      icon: Building2,
      title: "Residential & Plotted Diversity",
      description: "Curated residential plots, luxury villa enclaves, and high-growth gated layouts.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E8E5] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ========================================================= */}
          {/* LEFT: Dual Overlapping Architectural Imagery with Motion   */}
          {/* Sized to mirror the exact vertical height of the right col  */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[320px] sm:w-[380px] lg:w-[410px] h-[430px] sm:h-[465px] lg:h-[485px]"
            >
              {/* Soft pastel-blue background card with interactive hover reaction */}
              <motion.div
                whileHover={{ scale: 1.02, x: -4, y: -4 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-[270px] sm:w-[315px] lg:w-[335px] h-[360px] sm:h-[395px] lg:h-[415px] rounded-[34px] sm:rounded-[42px] bg-[#D8E8FA] pointer-events-none shadow-sm"
                aria-hidden="true"
              />

              {/* Back Image: Planned Plotted & Residential Community */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="absolute top-4 left-4 w-[260px] sm:w-[305px] lg:w-[325px] h-[340px] sm:h-[375px] lg:h-[395px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-md border-2 border-white/90 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Planned residential plotted layout in Bangalore"
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 305px, 325px"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Micro corner tag */}
                <div className="absolute top-3.5 left-3.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-white/95 flex items-center space-x-1.5 border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B83A] animate-pulse" />
                  <span>Kumbalgodu Corridor</span>
                </div>
              </motion.div>

              {/* Front Overlapping Image with Continuous Floating Motion + Hover Elevation */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                animate={{ y: [0, -7, 0] }}
                whileHover={{ y: -14, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(15, 120, 36, 0.22)" }}
                className="absolute bottom-1 sm:bottom-2 right-0 w-[185px] sm:w-[215px] lg:w-[230px] h-[255px] sm:h-[290px] lg:h-[310px] rounded-[26px] sm:rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10 cursor-pointer transition-shadow"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern villa architecture by DS Marcom"
                  fill
                  sizes="(max-width: 640px) 185px, (max-width: 1024px) 215px, 230px"
                  className="object-cover object-center hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063B20]/60 via-transparent to-transparent opacity-70" />
                
                {/* Floating Bottom Tag */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-[#19B83A]">
                    Signature Design
                  </p>
                  <p className="text-xs font-semibold drop-shadow-sm truncate">
                    Ready-to-Build Villas
                  </p>
                </div>
              </motion.div>

              {/* Floating Verified Trust Badge with Live Radar Pulse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                animate={{ y: [0, -5, 0] }}
                className="absolute -bottom-3 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-[#E5E8E5] flex items-center space-x-2.5 z-20"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19B83A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#19B83A]" />
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#0B0D0C] tracking-tight">
                  6+ Years <span className="text-[#66706A]">&bull;</span> 9 Delivered Projects
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: Corporate Editorial Content & Capabilities         */}
          {/* Distinctive luxury typography & animated interactive grid */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Header: Refined Eyebrow, Title & Lead Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0F7824] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#19B83A] animate-pulse" />
                <span>Company Introduction</span>
              </div>

              {/* Distinctive, Attractive Editorial Font Style */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-0.015em] text-[#0B0D0C] leading-[1.15]">
                Ground Truth in{" "}
                <span className="font-editorial italic font-semibold text-[#0F7824] tracking-normal inline-block relative">
                  Bangalore
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#19B83A] to-[#0F7824] rounded-full"
                  />
                </span>{" "}
                Real Estate
              </h2>

              <p className="mt-3.5 text-sm sm:text-[15px] text-[#4F5B52] leading-relaxed max-w-xl">
                A premier Bengaluru real estate advisory firm connecting investors and homebuyers with high-growth land and plotted communities through verified legal documentation and absolute transparency.
              </p>
            </motion.div>

            {/* The 4 Highlights: Interactive micro-cards with animated hover reactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 5, backgroundColor: "#F7FAF8", borderColor: "#A3E6B4" }}
                    className="group p-3.5 rounded-xl border border-[#E5E8E5] bg-white transition-all duration-300 cursor-default shadow-xs"
                  >
                    <h3 className="text-sm font-bold text-[#0B0D0C] group-hover:text-[#0F7824] transition-colors flex items-center space-x-2.5">
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        className="w-7 h-7 rounded-lg bg-[#EDF9EF] text-[#0F7824] group-hover:bg-[#19B83A] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0 shadow-xs"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </motion.span>
                      <span className="tracking-tight text-[13px] sm:text-sm">{item.title}</span>
                    </h3>
                    <p className="mt-1.5 text-xs text-[#66706A] leading-relaxed pl-9.5 group-hover:text-[#4F5B52] transition-colors">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Advisory Principles: Sleek corporate callout with gradient accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              whileHover={{ y: -2 }}
              className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#F7FAF8] to-white border border-[#E5E8E5] transition-all duration-300"
            >
              <div className="border-l-3 border-[#19B83A] pl-3.5">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#063B20]">
                    Our Advisory Principles
                  </h4>
                </div>
                <p className="text-xs sm:text-[13px] text-[#4F5B52] leading-relaxed">
                  Bridging buyers and verified land assets through rigorous title vetting, transparent sub-registrar registration, and long-term asset security.
                </p>
                <div className="mt-2 flex items-center space-x-2 text-[11px] text-[#66706A]">
                  <span className="font-semibold text-[#0F7824]">Local Advisory Desk</span>
                  <span>&bull;</span>
                  <span>Kengeri Satellite Town, Bengaluru</span>
                </div>
              </div>
            </motion.div>

            {/* Corporate CTA Link with Animated Magnetic Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-5"
            >
              <Link
                href="/about"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0B0D0C] hover:text-[#0F7824] transition-colors group"
              >
                <span className="border-b border-transparent group-hover:border-[#0F7824] pb-0.5 transition-colors">
                  Read more about our company, vision & team
                </span>
                <span className="ml-2 w-6 h-6 rounded-full bg-[#EDF9EF] group-hover:bg-[#19B83A] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0F7824] group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

