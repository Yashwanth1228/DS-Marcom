"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Compass,
  Layers,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function AboutPortfoliosShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolios = [
    {
      id: "residential-plots",
      category: "Plotted Communities",
      title: "Residential Plots",
      badge: "Ready-to-Build Sites",
      location: "Kumbalgodu & Mysore Rd",
      featured: "Featured: CRS Enclave & Nagaraju Farm",
      image: "/images/approach/stage1-explore-plots.jpg",
      alt: "Master-planned residential plotted layout in Bangalore with demarcated plots",
      icon: Building2,
      accentColor: "#19B83A",
      description:
        "Strategically planned residential layouts offering wide road connectivity, demarcated boundaries, and utility access, suitable for immediate or phased villa construction.",
      specs: [
        "Demarcated 30×40 & 40×60 Plots",
        "Individual Pahani & RTC Papers",
        "Wide Asphalt Avenue Roads",
        "Immediate Construction Ready",
      ],
      href: "/properties",
      linkText: "Explore Plotted Layouts",
    },
    {
      id: "property-developments",
      category: "Gated Enclaves",
      title: "Property Developments",
      badge: "Contemporary Villas",
      location: "South-West Bangalore",
      featured: "Featured: Royal Homes & Enclaves",
      image: "/images/about/about-overview-exterior.jpg",
      alt: "Contemporary luxury residential villa architecture and gated community in Bangalore",
      icon: Layers,
      accentColor: "#063B20",
      description:
        "Curated gated communities and residential enclaves positioned within accessible commuting range of Bangalore's commercial corridors and educational centers.",
      specs: [
        "Planned Villa Communities",
        "Verified Project Disclosures",
        "Curated Architectural Specifications",
        "Direct Arterial Connectivity",
      ],
      href: "/properties",
      linkText: "Explore Developments",
    },
    {
      id: "corridor-opportunities",
      category: "Strategic Growth Belts",
      title: "Corridor Opportunities",
      badge: "Expressway & Transit",
      location: "North Blr & Mysore Highway",
      featured: "Featured: Dasanapura & Nelamangala",
      image: "/images/about/about-corridor-growth.jpg",
      alt: "Bangalore highway connectivity growth corridor and suburban infrastructure belt",
      icon: Compass,
      accentColor: "#19B83A",
      description:
        "Emerging locations along Bangalore North (Dasanapura / Nelamangala) and Mysore Road offering long-term property suitability and arterial highway access.",
      specs: [
        "Expressway & Highway Connectivity",
        "Upcoming Transit & Peripheral Rings",
        "Long-Term Plotted Land Viability",
        "Comprehensive Project Information",
      ],
      href: "/properties/dasanapura-nelamangala-development",
      linkText: "Explore Corridor Opportunities",
    },
  ];

  const filteredPortfolios =
    activeFilter === "all"
      ? portfolios
      : portfolios.filter((p) => p.id === activeFilter);

  return (
    <div className="space-y-10">
      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-[#19B83A] text-white shadow-md shadow-[#19B83A]/25 scale-105"
              : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
          }`}
        >
          All Portfolios ({portfolios.length})
        </button>

        {portfolios.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveFilter(item.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeFilter === item.id
                ? "bg-[#19B83A] text-white shadow-md shadow-[#19B83A]/25 scale-105"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Portfolio Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolios.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-md shadow-slate-900/5 hover:border-[#19B83A]/50 hover:shadow-2xl hover:shadow-[#19B83A]/10 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#19B83A] via-emerald-400 to-[#063B20] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              <div>
                {/* Visual Header with Image, Category Pill & Location Chip */}
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/30" />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold tracking-tight shadow-md">
                      <Icon className="w-3.5 h-3.5 text-[#19B83A]" />
                      <span>{item.category}</span>
                    </span>
                  </div>

                  {/* Top-Right Location Chip */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-slate-200 text-[11px] font-semibold border border-white/10 shadow-xs">
                      <MapPin className="w-3 h-3 text-[#19B83A]" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 drop-shadow-sm">
                      {item.badge}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {item.featured}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#19B83A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Verified Specification Badges */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Verified Highlights
                    </span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {item.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                          <span className="line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Direct CTA Button */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                <Link
                  href={item.href}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-slate-50 hover:bg-[#19B83A] text-slate-800 hover:text-white font-semibold text-xs sm:text-sm border border-slate-200/80 hover:border-[#19B83A] transition-all duration-300 group/btn shadow-xs hover:shadow-md hover:shadow-[#19B83A]/25"
                >
                  <span>{item.linkText}</span>
                  <div className="w-6 h-6 rounded-full bg-white text-slate-700 group-hover/btn:bg-white/20 group-hover/btn:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
