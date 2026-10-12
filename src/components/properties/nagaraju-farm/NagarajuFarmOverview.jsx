"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Ruler, Tag, ShieldCheck, Clock } from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmOverview() {
  return (
    <section id="overview" className="relative py-20 sm:py-28 lg:py-32 bg-[#F7F8F5] text-[#0B0D0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block mb-2">
            PROJECT OVERVIEW
          </span>
          <div className="w-12 h-0.5 bg-[#19B83A]" />
        </div>

        {/* Editorial Two-Part Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Side: Real Project Photograph with Architectural Crop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-stone-200">
              <Image
                src={nagarajuFarmData.images.roadAndCompound.url}
                alt={nagarajuFarmData.images.roadAndCompound.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* On-image Authentic Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-stone-200 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B83A]" />
                  Actual on-ground concrete road &amp; compound wall, Thippuru
                </span>
              </div>
            </div>

            {/* Subtle Accent Layer */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-3xl border-2 border-[#19B83A]/20 pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Right Side: Oversized Heading & Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B0D0C] tracking-tight leading-[1.1] mb-5">
                Space to Shape Your Own Escape.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Nagaraju Farm Land presents an exclusive enclave of expansive 5,000 to 6,000 sq ft farm plots, positioned in Thippuru near Kumbalagudu. Designed specifically for weekend villas, private farm estates, and bespoke luxury retreats, this gated setting combines the tranquility of green countryside living with rapid arterial transit to Bengaluru&apos;s prominent growth nodes.
              </p>
            </div>

            {/* Compact Set of Factual Details (Source of Truth) */}
            <div className="pt-2 border-t border-stone-200 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                  Location
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                  <span>Thippuru, near Kumbalagudu</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                  Plot Sizes
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  {nagarajuFarmData.plotSizeRange}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                  Current Status
                </span>
                <p className="text-xs sm:text-sm font-bold text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                  <span>Ready for construction</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                  Intended Use
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  Weekend Villa &amp; Farm Plots
                </p>
              </div>
            </div>

            {/* Registration Confirmation Notice */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-stone-700 leading-relaxed">
              <strong className="text-emerald-950 block mb-0.5 font-bold">
                Immediate Registration Available
              </strong>
              <span>
                Based on supplied project parameters. All registration timelines and title document verifications remain subject to current client confirmation.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
