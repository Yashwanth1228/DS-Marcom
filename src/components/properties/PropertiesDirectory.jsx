"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Images,
  Compass,
} from "lucide-react";
import { projects } from "@/data/projects";

const filterTabs = [
  { id: "all", label: "All Properties" },
  { id: "plots", label: "Residential Villa Plots" },
  { id: "bmrda", label: "BMRDA Approved" },
  { id: "completed", label: "Completed Projects" },
];

export default function PropertiesDirectory() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "plots") {
      return (
        project.category.toLowerCase().includes("plot") ||
        project.category.toLowerCase().includes("villa")
      );
    }
    if (activeFilter === "bmrda") {
      return (
        project.name.toLowerCase().includes("crs") ||
        project.highlights.some((h) => h.title.toLowerCase().includes("bmrda"))
      );
    }
    if (activeFilter === "completed") {
      return project.status.toLowerCase() === "completed";
    }
    return true;
  });

  return (
    <div className="w-full">
      {/* Directory Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#19B83A] block">
          PORTFOLIO DIRECTORY
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Bangalore Property Developments
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
          Verified residential villa plots, master-planned layouts, and growth corridors across South-West and North Bangalore.
        </p>
      </div>

      {/* Filter Tabs matching site aesthetic */}
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-10 sm:mb-12">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveFilter(tab.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeFilter === tab.id
                ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-400"
            }`}
          >
            {tab.label}
          </button>
        ))}

        <Link
          href="/gallery"
          className="px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide border border-slate-200 bg-white text-slate-700 hover:border-[#19B83A] hover:text-[#19B83A] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
        >
          <Images className="w-3.5 h-3.5 text-[#19B83A]" />
          <span>Open Visual Gallery</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Top: Real Photography */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
              <Image
                src={project.heroImage.url}
                alt={project.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

              {/* Status and Verification Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/10 shadow-sm">
                  <Building2 className="w-3 h-3 text-[#19B83A]" />
                  {project.status}
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>

              {/* Bottom Image Overlay Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#19B83A] block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                  <span>{project.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Verified Property Highlights */}
                <div className="pt-1 flex flex-wrap gap-2">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium border border-slate-200/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#19B83A]" />
                      {h.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/properties/${project.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#19B83A] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-95"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Images className="w-3.5 h-3.5 text-[#19B83A]" />
                  <span>View Photos</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
