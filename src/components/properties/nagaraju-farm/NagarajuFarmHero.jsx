"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, MapPin } from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmHero() {
  const scrollToOverview = () => {
    const el = document.getElementById("overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#F7F8F5] text-[#0B0D0C] pt-2 sm:pt-4 pb-8 sm:pb-12 border-b border-[#E0DFD8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* =========================================================================
            HERO COMPOSITION (Balanced Headline + Matching Photo Height)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 pt-2 sm:pt-4 items-stretch">
          {/* Left Column: Display Title, Sub-labels & Primary CTA */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5"
            >
              {/* Category Eyebrow */}
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs tracking-[0.18em] uppercase font-bold text-[#063B20]">
                <MapPin className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                <span>Thippuru · Near Kumbalagudu · Bengaluru</span>
              </div>

              {/* High-Contrast Editorial Title */}
              <h1 className="font-display uppercase text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] leading-[1.0] tracking-tight text-[#0B0D0C]">
                Nagaraju<br />Farm Land.
              </h1>

              {/* Factual Scope Summary */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md">
                Expansive 5,000 to 6,000 sq ft weekend villa and farm plots. Ready for immediate construction with on-ground concrete roads and utilities in a serene countryside setting.
              </p>

              {/* Quick Fact Micro-Badges */}
              <div className="pt-1 flex items-center gap-2 flex-wrap text-[11px] font-semibold text-stone-700">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">5,000–6,000 Sq Ft</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">Immediate Registration</span>
                <span className="px-2.5 py-1 rounded-md bg-stone-100 border border-stone-200">Concrete Roads</span>
              </div>
            </motion.div>

            {/* Prominent Integrated CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#19B83A] hover:bg-[#159E32] text-white font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-md shadow-[#19B83A]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Enquire About This Project</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              <button
                type="button"
                onClick={scrollToOverview}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#063B20] transition-colors px-3 py-2 cursor-pointer group"
              >
                <span>Details</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#19B83A] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Dominant Real Project Photograph (hero-road.jpg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 relative flex"
          >
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full lg:min-h-[380px] rounded-2xl overflow-hidden bg-stone-200 border border-[#E0DFD8] shadow-lg group">
              <Image
                src={nagarajuFarmData.images.heroBanner.url}
                alt={nagarajuFarmData.images.heroBanner.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Reference-style Vertical Edge Tag (Top Right) */}
              <div className="hidden sm:block absolute top-4 right-4 z-10 text-right">
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 block">
                  NATURAL LIVING
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 mt-1 block">
                  GREEN EXPANSE
                </span>
              </div>

              {/* Bottom Right Minimal Caption */}
              <div className="absolute bottom-4 right-4 z-10 text-right">
                <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  CONCRETE INTERNAL ROADS · OVERHEAD UTILITIES
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            3. LOWER HERO COMPOSITION (Contrasting Images + Typographic Facts)
            Direct reinterpretation of the reference lower tri-part row:
            [Landscape Photo] + [24 | 09 Stat Block] + [Portrait Photo + Column Meta]
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#E0DFD8]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Block 1: Bottom-Left Supporting Photograph (internal-road-compound.png) */}
            <div className="md:col-span-5 lg:col-span-5">
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden bg-stone-200 border border-[#E0DFD8] shadow-sm group">
                <Image
                  src={nagarajuFarmData.images.roadAndCompound.url}
                  alt={nagarajuFarmData.images.roadAndCompound.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Top-Left Editorial Micro-Label (matching reference "ELEVATED LIVING NATURALLY") */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="text-[9px] tracking-[0.25em] uppercase font-bold text-white bg-black/55 backdrop-blur-md px-2.5 py-1.5 rounded-sm border border-white/10 space-y-0.5">
                    <div>PRECAST COMPOUND</div>
                    <div className="text-emerald-300">DEMARCATED AVENUE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Center Typographic Facts with Fine Vertical Divider */}
            {/* Direct reinterpretation of reference "24 RESIDENCES | 09 DESIGN AWARDS" */}
            <div className="md:col-span-4 lg:col-span-4 flex items-center justify-around py-4 px-2 sm:px-6">
              {/* Metric A: 5,000–6,000 Plot Dimensions */}
              <div className="text-center space-y-1">
                <div className="font-display text-4xl sm:text-5xl lg:text-[46px] font-normal tracking-tight text-[#0B0D0C] leading-none">
                  5,000–6,000
                </div>
                <div className="text-[10px] tracking-[0.22em] uppercase font-bold text-stone-500">
                  SQ. FT. PLOTS
                </div>
              </div>

              {/* Fine Vertical Hairline Divider */}
              <div className="w-px h-16 bg-[#E0DFD8] mx-2" />

              {/* Metric B: Ready for Construction */}
              <div className="text-center space-y-1">
                <div className="font-display text-4xl sm:text-5xl lg:text-[46px] font-normal tracking-tight text-[#063B20] leading-none">
                  READY
                </div>
                <div className="text-[10px] tracking-[0.22em] uppercase font-bold text-stone-500">
                  FOR CONSTRUCTION
                </div>
              </div>
            </div>

            {/* Block 3: Bottom-Right Portrait Photograph & Facility Meta */}
            {/* Direct reinterpretation of reference tall portrait image + vertical text stack */}
            <div className="md:col-span-3 lg:col-span-3 flex items-center gap-4">
              {/* Portrait Aspect Photo (entrance-arch.jpg) */}
              <div className="relative w-[130px] sm:w-[150px] h-[190px] sm:h-[210px] rounded-xl overflow-hidden bg-stone-200 border border-[#E0DFD8] shadow-sm shrink-0 group">
                <Image
                  src={nagarajuFarmData.images.entranceArch.url}
                  alt={nagarajuFarmData.images.entranceArch.alt}
                  fill
                  sizes="200px"
                  className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Vertical Stacked Micro-Labels (matching reference "LIGHT SPACE PEOPLE PLACE...") */}
              <div className="space-y-1 text-[9px] tracking-[0.25em] uppercase font-bold text-stone-500 leading-tight">
                <div className="text-[#063B20]">GATED</div>
                <div>COMMUNITY</div>
                <div className="text-[#19B83A]">ENTRANCE</div>
                <div>ARCHWAY</div>
                <div className="w-6 h-px bg-[#E0DFD8] my-1" />
                <div className="text-stone-400">THIPPURU</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            4. BOTTOM FOOTER SUB-BAR
            Matching reference bottom bar: "FORMA · SPACES THAT MAKE A BRIGHTER TOMORROW"
            ========================================================================= */}
        <div className="mt-8 pt-6 border-t border-[#E0DFD8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-3 tracking-[0.2em] text-[10px] uppercase font-semibold">
            <span className="text-[#0B0D0C]">DS MARCOM</span>
            <span>/</span>
            <span>VERIFIED SITE SHOWCASE</span>
          </div>

          <div className="text-[11px] text-stone-500 text-center">
            *Immediate registration available, subject to current confirmation
          </div>

          <button
            type="button"
            onClick={scrollToOverview}
            className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase font-bold text-stone-700 hover:text-[#063B20] transition-colors cursor-pointer"
          >
            <span>SCROLL TO OVERVIEW</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#19B83A]" />
          </button>
        </div>
      </div>
    </section>
  );
}
