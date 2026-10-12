"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye, ArrowUpRight, CheckCircle2, Home, Compass } from "lucide-react";

export default function AboutOverviewShowcase() {
  const [activeView, setActiveView] = useState("exterior"); // 'exterior' | 'interior'

  const perspectives = {
    exterior: {
      id: "exterior",
      title: "Plotted Villa Developments",
      subtitle: "Demarcated Layouts & Contemporary Architecture",
      tag: "Bangalore Growth Corridors",
      src: "/images/about/about-overview-exterior.jpg",
      alt: "Contemporary luxury residential villa architecture in Bangalore",
      badge: "Ready-to-Build Villa Enclaves",
    },
    interior: {
      id: "interior",
      title: "Curated Living Interiors",
      subtitle: "Open-Concept Spaces & Contemporary Finishes",
      tag: "Architectural Quality",
      src: "/images/about/about-overview-interior.jpg",
      alt: "Spacious modern luxury villa interior and designer kitchen",
      badge: "High-Ceiling Living Lounges",
    },
  };

  const primary = activeView === "exterior" ? perspectives.exterior : perspectives.interior;
  const secondary = activeView === "exterior" ? perspectives.interior : perspectives.exterior;

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow providing soft spatial depth */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#19B83A]/15 via-emerald-100/30 to-amber-200/20 rounded-3xl blur-2xl -z-10 pointer-events-none" />

      {/* Perspective Switcher Tabs */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="inline-flex p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 shadow-xs backdrop-blur-xs">
          <button
            type="button"
            onClick={() => setActiveView("exterior")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
              activeView === "exterior"
                ? "bg-white text-slate-900 shadow-sm shadow-slate-900/5 font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Home className={`w-3.5 h-3.5 ${activeView === "exterior" ? "text-[#19B83A]" : "text-slate-400"}`} />
            <span>Villa Enclaves</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView("interior")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
              activeView === "interior"
                ? "bg-white text-slate-900 shadow-sm shadow-slate-900/5 font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${activeView === "interior" ? "text-[#19B83A]" : "text-slate-400"}`} />
            <span>Living Interiors</span>
          </button>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
          <Eye className="w-3.5 h-3.5 text-[#19B83A]" />
          <span>Click to switch view</span>
        </span>
      </div>

      {/* Main Image Stage (Asymmetrical Composition) */}
      <div className="relative">
        {/* Floating Top-Left Trust Badge */}
        <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-slate-900/10 border border-slate-100 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19B83A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#19B83A]"></span>
          </span>
          <span className="text-xs font-bold text-slate-900 tracking-tight">
            Verified Bangalore Projects
          </span>
        </div>

        {/* 1. Primary Spotlight Frame */}
        <div
          onClick={() => setActiveView(activeView === "exterior" ? "interior" : "exterior")}
          className="group/main relative w-full h-[270px] sm:h-[320px] md:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 cursor-pointer bg-slate-950 transition-all duration-500 hover:shadow-2xl hover:shadow-[#19B83A]/10"
        >
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover/main:scale-108"
            priority
          />

          {/* Gradient Scrim for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover/main:opacity-90" />

          {/* Bottom Info Ribbon */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex items-end justify-between">
            <div className="space-y-1 max-w-[80%]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#19B83A] text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
                {primary.tag}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight drop-shadow-md">
                {primary.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-1 drop-shadow-sm font-medium">
                {primary.subtitle}
              </p>
            </div>

            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 group-hover/main:bg-white group-hover/main:text-slate-900 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/main:translate-x-0.5 group-hover/main:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* 2. Overlapping Staggered Accent Card (Secondary Perspective) */}
        <div
          onClick={() => setActiveView(secondary.id)}
          className="group/accent absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-4 z-20 w-[180px] sm:w-[230px] md:w-[250px] h-[135px] sm:h-[165px] md:h-[180px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-slate-900/30 cursor-pointer bg-slate-950 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-emerald-950/30"
        >
          <Image
            src={secondary.src}
            alt={secondary.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover/accent:scale-110"
          />

          {/* Soft Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

          {/* Floating Pill on Accent Card */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold shadow-xs">
              <Eye className="w-3 h-3 text-[#19B83A]" />
              <span>Click to view</span>
            </span>
          </div>

          {/* Accent Bottom Caption */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
            <p className="text-xs font-bold text-white line-clamp-1">
              {secondary.title}
            </p>
            <p className="text-[10px] text-slate-300 line-clamp-1 font-medium">
              {secondary.badge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
