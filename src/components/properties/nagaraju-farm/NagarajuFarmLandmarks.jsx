"use client";

import { motion } from "framer-motion";
import { MapPin, Milestone, Info, Navigation, ArrowUpRight } from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmLandmarks() {
  const landmarks = nagarajuFarmData.landmarks;

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F7F8F5] text-[#0B0D0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
            LOCATION CONNECTIVITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] tracking-tight">
            Connected to the Places That Matter.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
            Situated in Thippuru near Kumbalagudu with immediate arterial access to key industrial, educational, and transit corridors.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 text-stone-600 text-[11px] font-medium mt-1">
            <Info className="w-3.5 h-3.5 text-[#063B20]" />
            <span>Nearby landmarks · Distances as provided · Illustrative connectivity graphic</span>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP / LAPTOP: REFINED CONNECTIVITY ROUTE DIAGRAM
            Neat lines, exact termination dots, uniform cards, balanced whitespace
            ========================================================================= */}
        <div className="hidden lg:block relative bg-white rounded-3xl p-8 lg:p-10 border border-stone-200/90 shadow-xl overflow-hidden mb-8">
          {/* Subtle Background Radial Aura */}
          <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

          {/* Diagram Canvas with Fixed Aspect Coordinate Space */}
          <div className="relative w-full h-[460px]">
            {/* SVG Vector Paths & Termination Nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 460"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#19B83A" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#063B20" stopOpacity="0.35" />
                </linearGradient>
              </defs>

              {/* Path 1 -> Bisleri Factory (Node 01: 1.5 km) Top Left */}
              <motion.path
                d="M 500 230 C 400 190, 320 140, 240 100"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              <circle cx="240" cy="100" r="4.5" fill="#19B83A" />
              <circle cx="240" cy="100" r="9" fill="#19B83A" fillOpacity="0.2" />

              {/* Path 2 -> BGS College (Node 02: 4 km) Top Right */}
              <motion.path
                d="M 500 230 C 600 190, 680 140, 760 100"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
              <circle cx="760" cy="100" r="4.5" fill="#19B83A" />
              <circle cx="760" cy="100" r="9" fill="#19B83A" fillOpacity="0.2" />

              {/* Path 3 -> Bidadi Toyota (Node 03: 5 km) Mid Left */}
              <motion.path
                d="M 500 230 C 390 240, 300 255, 230 265"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <circle cx="230" cy="265" r="4.5" fill="#19B83A" />
              <circle cx="230" cy="265" r="9" fill="#19B83A" fillOpacity="0.2" />

              {/* Path 4 -> Bengaluru-Mysuru Highway (Node 04: 6 km) Mid Right */}
              <motion.path
                d="M 500 230 C 610 240, 700 255, 770 265"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
              <circle cx="770" cy="265" r="5" fill="#063B20" />
              <circle cx="770" cy="265" r="10" fill="#19B83A" fillOpacity="0.25" />

              {/* Path 5 -> Kanakapura Road (Node 05: 7 km) Bottom Center */}
              <motion.path
                d="M 500 230 L 500 375"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <circle cx="500" cy="375" r="4.5" fill="#19B83A" />
              <circle cx="500" cy="375" r="9" fill="#19B83A" fillOpacity="0.2" />
            </svg>

            {/* =============================================================
                CENTRAL PROJECT ANCHOR NODE (Centered at 500px, 230px)
                ============================================================= */}
            <div className="absolute top-[230px] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-[230px] bg-[#063B20] text-white p-4 rounded-2xl shadow-xl border-2 border-[#19B83A]/40 text-center flex flex-col items-center"
              >
                <div className="w-9 h-9 rounded-xl bg-[#19B83A] text-white flex items-center justify-center shadow-md mb-2">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-300 block mb-0.5">
                  PROJECT LOCATION
                </span>
                <h3 className="text-sm font-extrabold text-white tracking-tight leading-snug">
                  Nagaraju Farm Land
                </h3>
                <p className="text-[10px] text-stone-300 mt-0.5">
                  Thippuru · Near Kumbalagudu
                </p>
              </motion.div>
            </div>

            {/* =============================================================
                5 DESTINATION NODES (Uniform Card Sizes & Alignment)
                ============================================================= */}

            {/* NODE 01: Bisleri Factory (1.5 km) - Top Left */}
            <div className="absolute top-[20px] left-[40px] z-10 w-[200px]">
              <div className="bg-[#F7F8F5] p-3.5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-stone-400">NODE 01</span>
                  <span className="text-[9px] font-medium text-stone-500">Industrial</span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 leading-snug truncate">
                  Bisleri Factory
                </h4>
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <Milestone className="w-3 h-3 text-[#19B83A]" />
                  <span>1.5 km</span>
                </div>
              </div>
            </div>

            {/* NODE 02: BGS College (4 km) - Top Right */}
            <div className="absolute top-[20px] right-[40px] z-10 w-[200px]">
              <div className="bg-[#F7F8F5] p-3.5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-stone-400">NODE 02</span>
                  <span className="text-[9px] font-medium text-stone-500">Education</span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 leading-snug truncate">
                  BGS College
                </h4>
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <Milestone className="w-3 h-3 text-[#19B83A]" />
                  <span>4 km</span>
                </div>
              </div>
            </div>

            {/* NODE 03: Bidadi Toyota (5 km) - Mid Left */}
            <div className="absolute top-[215px] left-[30px] z-10 w-[200px]">
              <div className="bg-[#F7F8F5] p-3.5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-stone-400">NODE 03</span>
                  <span className="text-[9px] font-medium text-stone-500">Automotive</span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 leading-snug truncate">
                  Bidadi Toyota
                </h4>
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <Milestone className="w-3 h-3 text-[#19B83A]" />
                  <span>5 km</span>
                </div>
              </div>
            </div>

            {/* NODE 04: Bengaluru-Mysuru Highway (6 km) - Mid Right */}
            <div className="absolute top-[215px] right-[30px] z-10 w-[210px]">
              <div className="bg-white p-3.5 rounded-2xl border-2 border-[#19B83A]/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-[#19B83A]">NODE 04 · ARTERY</span>
                  <span className="text-[9px] font-semibold text-[#063B20]">Expressway</span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 leading-snug truncate">
                  Bengaluru–Mysuru Hwy
                </h4>
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#063B20] text-white text-xs font-bold">
                  <Milestone className="w-3 h-3 text-[#19B83A]" />
                  <span>6 km</span>
                </div>
              </div>
            </div>

            {/* NODE 05: Kanakapura Road (7 km) - Bottom Center */}
            <div className="absolute bottom-[10px] left-[50%] -translate-x-1/2 z-10 w-[220px]">
              <div className="bg-[#F7F8F5] p-3.5 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all text-center">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-stone-400">NODE 05</span>
                  <span className="text-[9px] font-medium text-stone-500">Connecting Corridor</span>
                </div>
                <h4 className="text-xs font-bold text-stone-900 leading-snug">
                  Kanakapura Road
                </h4>
                <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <Milestone className="w-3 h-3 text-[#19B83A]" />
                  <span>7 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RESPONSIVE CONNECTIVITY GRID (Mobile & Tablet Reflow)
            Guaranteed zero clipping, zero overlaps, clean uniform cards
            ========================================================================= */}
        <div className="lg:hidden space-y-4">
          {/* Mobile Project Anchor Card */}
          <div className="bg-[#063B20] text-white p-5 rounded-2xl border-2 border-[#19B83A]/30 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-[#19B83A] text-white flex items-center justify-center shadow-md mb-2">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
              CENTRAL ANCHOR
            </span>
            <h3 className="text-base font-bold text-white mt-0.5">
              Nagaraju Farm Land
            </h3>
            <p className="text-xs text-stone-300 mt-0.5">
              Thippuru · Near Kumbalagudu, Bengaluru
            </p>
          </div>

          {/* 5 Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {landmarks.map((landmark) => (
              <div
                key={landmark.id}
                className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-stone-400 block">
                    {landmark.number} · {landmark.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                    {landmark.name}
                  </h4>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#063B20] text-white text-xs font-bold shrink-0">
                  <Milestone className="w-3 h-3 text-[#19B83A]" />
                  <span>{landmark.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
