"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { chamundeshwariData } from "@/data/chamundeshwariData";

export default function ChamundeshwariOverview() {
  return (
    <section id="overview" className="relative pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-[#F7F8F5] text-[#0B0D0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block mb-2">
            PROJECT OVERVIEW
          </span>
          <div className="w-12 h-0.5 bg-[#19B83A]" />
        </div>

        {/* Editorial Two-Part Composition (Balanced Heights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left Side: Real Project Photograph with Architectural Crop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col h-full"
          >
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-full rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-stone-200 flex-1">
              <Image
                src={chamundeshwariData.images.entranceAvenue.url}
                alt={chamundeshwariData.images.entranceAvenue.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* On-image Authentic Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-stone-200 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19B83A]" />
                  Actual on-ground concrete avenue &amp; demarcated layout, Nelamangala
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
            className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8 h-full"
          >
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B0D0C] tracking-tight leading-[1.1] mb-5">
                Space to Shape Your Own Luxury Villa.
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                Chamundeshwari Residency presents an exclusive enclave of planned residential plots located in Nelamangala near Kunigal Toll. Suited for bespoke luxury villas, private residences, and secure long-term value, this gated community combines peaceful residential surroundings with rapid transit access to Bengaluru&apos;s vital industrial and transit corridors.
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
                  <span>Nelamangala, near Kunigal Toll</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                  Plot Dimensions
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  {chamundeshwariData.plotDimensions}
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
                  {chamundeshwariData.intendedUse}
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
