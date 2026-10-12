"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowDown, ChevronRight, CheckCircle2, ShieldCheck, Ruler, Route } from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmHero() {
  const scrollToEnquiry = () => {
    const el = document.getElementById("enquire");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOverview = () => {
    const el = document.getElementById("overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-end overflow-hidden bg-[#063B20] text-white">
      {/* Background Image: User-supplied primary site photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src={nagarajuFarmData.images.heroBanner.url}
          alt={nagarajuFarmData.images.heroBanner.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-subtleZoom"
        />

        {/* Sophisticated Layered Scrim for High Contrast and Editorial Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#063B20] via-[#063B20]/65 to-black/35" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/25 to-black/60 pointer-events-none" />
      </div>

      {/* Top Floating Breadcrumb Bar */}
      <div className="absolute top-24 sm:top-28 left-0 right-0 z-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
            <Link href="/" className="hover:text-white transition-colors">
              DS Marcom
            </Link>
            <ChevronRight className="w-3 h-3 text-[#19B83A]" />
            <Link href="/properties" className="hover:text-white transition-colors">
              Properties
            </Link>
            <ChevronRight className="w-3 h-3 text-[#19B83A]" />
            <span className="text-white font-semibold">Nagaraju Farm Land</span>
          </nav>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19B83A]/20 backdrop-blur-md text-[#19B83A] text-xs font-bold uppercase tracking-wider border border-[#19B83A]/30">
            <span className="w-2 h-2 rounded-full bg-[#19B83A] animate-pulse" />
            <span>Ready for Construction</span>
          </div>
        </div>
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 pb-10 sm:pb-14 pt-36">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetrical Editorial Composition with Balanced Scale */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Project Identity & Storytelling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-8 space-y-4 sm:space-y-5"
            >
              {/* Location Line */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-emerald-300">
                <MapPin className="w-4 h-4 text-[#19B83A] shrink-0" />
                <span>{nagarajuFarmData.shortLocation}</span>
              </div>

              {/* Balanced, Art-Directed Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl drop-shadow-md">
                Nagaraju Farm Land
              </h1>

              {/* Supporting Creative Copy */}
              <p className="text-sm sm:text-base text-stone-200/90 max-w-xl font-normal leading-relaxed">
                {nagarajuFarmData.tagline}
              </p>

              {/* Intended Use Pill Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {nagarajuFarmData.intendedUse.map((use, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm font-medium px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-stone-200 border border-white/15"
                  >
                    {use}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Refined Verified Information Panel & Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 xl:col-span-4 flex flex-col gap-5 bg-black/50 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/15 shadow-2xl"
            >
              {/* Card Header & Status */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  PROPERTY SNAPSHOT
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                  <span>Verified Site</span>
                </span>
              </div>

              {/* Verified Non-Price Parameters Grid */}
              <div className="grid grid-cols-2 gap-4 pb-3.5 border-b border-white/15">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">
                    Plot Dimensions
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {nagarajuFarmData.plotSizeRange}
                  </div>
                  <span className="text-[11px] text-stone-300 block">
                    Villa &amp; farm parcels
                  </span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">
                    On-Site Status
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Ready to Build
                  </div>
                  <span className="text-[11px] text-emerald-300 block">
                    Roads &amp; power installed
                  </span>
                </div>
              </div>

              {/* Verified Facilities Summary & Registration Notice */}
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2 text-stone-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                  <span>Gated community with entrance arch &amp; concrete roads</span>
                </div>

                <div className="pt-1 text-[11px] text-stone-400 leading-snug">
                  <span className="text-emerald-300 font-semibold">Immediate registration available</span>
                  <span className="block text-[10px] text-stone-400">*Subject to current confirmation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#19B83A]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Enquire About This Project</span>
                </button>

                <a
                  href={`tel:${nagarajuFarmData.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                  aria-label="Call project advisor"
                >
                  <Phone className="w-4 h-4 text-[#19B83A]" />
                  <span className="sm:hidden">Call Now</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Scroll Cue */}
          <div className="mt-8 sm:mt-10 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
            <span className="text-[11px] tracking-wide">
              DS Marcom Properties &amp; Promoters · Verified Project Showcase
            </span>

            <button
              type="button"
              onClick={scrollToOverview}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Explore Overview</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#19B83A] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
