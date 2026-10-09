"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, MapPin, Award, Building, FileCheck } from "lucide-react";
import Container from "@/components/ui/Container";

export default function WhyChooseUsShell() {
  const pillars = [
    {
      icon: MapPin,
      title: "Corridor Specialization",
      description: "On-ground presence across Kumbalgodu, Mysore Road, and Bangalore North.",
    },
    {
      icon: FileCheck,
      title: "Verified Documentation",
      description: "Grounded in verified Pahani & RTC records, BMRDA, and A Khata papers.",
    },
    {
      icon: Award,
      title: "6+ Years Proven Delivery",
      description: "9 completed residential and plotted developments delivered across Bengaluru.",
    },
    {
      icon: Building,
      title: "Plotted & Farm Diversity",
      description: "Curated farm plots, weekend villa retreats, and approved plotted layouts.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white border-b border-[#E5E8E5] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ========================================================= */}
          {/* LEFT: Dual Overlapping Architectural Imagery with Motion   */}
          {/* Sized to match the exact vertical height of the right col  */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] sm:w-[370px] lg:w-[390px] h-[410px] sm:h-[450px] lg:h-[465px]"
            >
              {/* Soft pastel-blue background card (Mirrors reference) */}
              <div
                className="absolute top-0 left-0 w-[260px] sm:w-[300px] lg:w-[315px] h-[350px] sm:h-[390px] lg:h-[405px] rounded-[34px] sm:rounded-[40px] bg-[#D6E6FA] pointer-events-none transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Back Image: Planned Plotted & Residential Community */}
              <div className="absolute top-4 left-4 w-[250px] sm:w-[290px] lg:w-[305px] h-[330px] sm:h-[370px] lg:h-[385px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-md border-2 border-white/80 group">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Planned residential plotted layout in Bangalore"
                  fill
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 290px, 305px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Front Overlapping Image with Motion lift on hover */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="absolute bottom-2 sm:bottom-3 right-0 w-[170px] sm:w-[200px] lg:w-[215px] h-[240px] sm:h-[280px] lg:h-[295px] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl border-4 border-white z-10 cursor-pointer"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern villa architecture by DS Marcom"
                  fill
                  sizes="(max-width: 640px) 170px, (max-width: 1024px) 200px, 215px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Verified Trust Badge overlay with gentle floating animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-5 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-[#E5E8E5] flex items-center space-x-2 z-20"
              >
                <ShieldCheck className="w-4 h-4 text-[#19B83A] shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#0B0D0C] tracking-tight">
                  6+ Years &bull; 9 Delivered Projects
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: Corporate Editorial Content & Capabilities         */}
          {/* Premium font styling & smooth interactive entrance        */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Header: Refined Eyebrow, Title & Lead Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center space-x-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F7824] mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19B83A] animate-pulse" />
                <span>Company Introduction</span>
              </div>

              {/* Distinctive, Attractive Editorial Font Style */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.01em] text-[#0B0D0C] leading-[1.16]">
                Ground Truth in{" "}
                <span className="italic font-normal text-[#0F7824]">Bangalore</span>{" "}
                Real Estate
              </h2>

              <p className="mt-3 text-sm sm:text-[15px] text-[#4F5B52] leading-relaxed max-w-xl">
                A premier Bengaluru advisory firm connecting buyers with high-growth land and plotted developments through verified documentation and end-to-end transparency.
              </p>
            </motion.div>

            {/* The 4 Highlights: Clean, interactive 2-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-4.5 mt-6">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                    whileHover={{ x: 3 }}
                    className="group cursor-default"
                  >
                    <h3 className="text-sm font-bold text-[#0B0D0C] group-hover:text-[#0F7824] transition-colors flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-md bg-[#EDF9EF] text-[#0F7824] group-hover:bg-[#19B83A] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span className="tracking-tight">{item.title}</span>
                    </h3>
                    <p className="mt-1 text-xs text-[#66706A] leading-relaxed pl-8 group-hover:text-[#4F5B52] transition-colors">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Advisory Principles: Sleek, compact callout with hover interaction */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 pt-4.5 border-t border-[#E5E8E5]"
            >
              <div className="border-l-2.5 border-[#19B83A] pl-3.5 sm:pl-4 hover:border-l-[#0F7824] transition-colors">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#063B20] mb-1">
                  Our Advisory Principles
                </h4>
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

            {/* Corporate CTA Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-5"
            >
              <Link
                href="/about"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0B0D0C] hover:text-[#0F7824] transition-colors group"
              >
                <span>Read more about our company & team</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#0F7824] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
