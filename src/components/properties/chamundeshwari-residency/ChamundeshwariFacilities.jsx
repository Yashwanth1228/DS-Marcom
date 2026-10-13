"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Route,
  Waves,
  Droplets,
  ShieldCheck,
  Lightbulb,
  Zap,
  Shield,
  Trees,
  Check,
} from "lucide-react";
import { chamundeshwariData } from "@/data/chamundeshwariData";

const iconMap = {
  Route,
  Waves,
  Droplets,
  ShieldCheck,
  Lightbulb,
  Zap,
  Shield,
  Trees,
};

export default function ChamundeshwariFacilities() {
  const [activeFacility, setActiveFacility] = useState(chamundeshwariData.facilities[0]); // Default to Wide Cement Roads

  return (
    <section className="relative pt-10 sm:pt-14 pb-16 sm:pb-24 bg-white text-[#0B0D0C] border-y border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-2 mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
            INFRASTRUCTURE &amp; FACILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D0C] tracking-tight">
            Physically Built on Ground.
          </h2>
        </div>

        {/* Distinctive Horizontal Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Feature Column: 8 Distinct Feature Cards */}
          <div className="lg:col-span-5 space-y-2.5 order-2 lg:order-1 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
            {chamundeshwariData.facilities.map((facility, index) => {
              const IconComponent = iconMap[facility.icon] || ShieldCheck;
              const isActive = activeFacility.id === facility.id;

              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveFacility(facility)}
                  onClick={() => setActiveFacility(facility)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#063B20] text-white border-[#063B20] shadow-xl shadow-[#063B20]/10 scale-[1.01]"
                      : "bg-[#F7F8F5] text-stone-800 border-stone-200/80 hover:border-[#19B83A]/60 hover:bg-stone-50"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#19B83A] text-white"
                          : "bg-white text-[#063B20] border border-stone-200 shadow-sm"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 stroke-[2]" />
                    </div>

                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm sm:text-base font-bold tracking-tight ${isActive ? "text-white" : "text-stone-900"}`}>
                          {facility.title}
                        </h3>
                        {isActive && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#19B83A]/30 text-emerald-300">
                            Active View
                          </span>
                        )}
                      </div>

                      <p className={`text-xs leading-relaxed ${isActive ? "text-stone-200" : "text-stone-600"}`}>
                        {facility.description}
                      </p>

                      <div className="pt-0.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#19B83A]">
                        <Check className="w-3.5 h-3.5" />
                        <span>{facility.highlight}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Visual Feature: Dominant Real Project Photography */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-stone-200">
              <Image
                key={activeFacility.image}
                src={activeFacility.image}
                alt={`${activeFacility.title} at Chamundeshwari Residency`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              {/* Dynamic Overlay Caption for Associated Photograph */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1 max-w-md">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#19B83A] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    On-Ground Site Evidence
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white drop-shadow-md">
                    {activeFacility.title}
                  </h4>
                  <p className="text-xs text-stone-200 line-clamp-2">
                    {activeFacility.description}
                  </p>
                </div>

                <div className="text-[11px] text-stone-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shrink-0">
                  Nelamangala · Near Kunigal Toll
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
