"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjectsShell() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTapIndex, setActiveTapIndex] = useState(null);

  // Strictly show the 3 signature project cards
  const featured = getFeaturedProjects().slice(0, 3);

  const handleCardTap = (index) => {
    setActiveTapIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-6 sm:py-10 bg-[#EFF2F6] border-b border-[#E2E8F0] overflow-hidden">
      <Container size="wide">
        {/* Outer wrapper has padding so cards never touch or exceed display visibility */}
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* ========================================================= */}
          {/* 1. RADIANT BLUE BACKGROUND PANEL                          */}
          {/* Compact vertical scale so entire section fits in 1 screen */}
          {/* Static blue canvas that NEVER resizes or shifts on hover  */}
          {/* ========================================================= */}
          <div className="relative w-full max-w-[800px] lg:max-w-[850px] mx-auto rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#4A96F8] to-[#3079E5] text-white shadow-[0_20px_50px_-15px_rgba(59,130,246,0.35)] pt-6 sm:pt-8 pb-7 sm:pb-8 px-4 sm:px-6 text-center">
            {/* Subtle soft radial lighting highlight on top */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,_rgba(255,255,255,0.22)_0%,_transparent_65%)] pointer-events-none rounded-[28px] sm:rounded-[36px]"
              aria-hidden="true"
            />

            {/* Frosted Glass Floating Circle (Matches Pinterest design above right card) */}
            <div
              className="hidden lg:flex absolute top-6 right-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/35 shadow-inner items-center justify-center pointer-events-none z-10"
              aria-hidden="true"
            >
              <div className="w-4 h-4 rounded-full bg-white/30" />
            </div>

            {/* Header Content: Compact title and subtitle matching reference */}
            <div className="relative z-10 max-w-md mx-auto mb-5 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-tight">
                Our Work
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-white/90 font-medium">
                A Selection of Signature Projects in Bangalore
              </p>
            </div>

            {/* ========================================================= */}
            {/* 2. THE 3 PROJECT CARDS ROW                                */}
            {/* Tuned moderate breakout (-mx-18 to -mx-28) to utilize      */}
            {/* slightly more width while keeping ample safe screen space. */}
            {/* Fixed grid height keeps blue background COMPLETELY STATIC!*/}
            {/* ========================================================= */}
            <div className="relative z-20 -mx-6 sm:-mx-12 md:-mx-18 lg:-mx-24 xl:-mx-28">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start h-auto md:h-[265px] lg:h-[275px]">
                {featured.map((project, idx) => {
                  const isHovered = hoveredIndex === idx;
                  const isTapped = activeTapIndex === idx;
                  const isRevealed = isHovered || isTapped;

                  return (
                    <article
                      key={project.slug}
                      data-project-card
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(idx)}
                      onBlur={() => setHoveredIndex(null)}
                      tabIndex={0}
                      role="region"
                      aria-label={`${project.name} property card`}
                      className={`relative select-none text-left focus:outline-none transition-all duration-300 ${
                        isRevealed ? "z-30" : "z-10"
                      }`}
                    >
                      {/* =================================================== */}
                      {/* BACK LAYER: The White Sheet                         */}
                      {/* Starts at mt-5 (20px below image top)               */}
                      {/* z-10 ensures it NEVER covers the image (z-20)       */}
                      {/* =================================================== */}
                      <div
                        className={`relative z-10 mt-5 bg-white rounded-xl sm:rounded-2xl border border-black/5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isRevealed
                            ? "shadow-2xl border-[#17191C]/20"
                            : "shadow-md"
                        }`}
                      >
                        {/* Spacer equal to image height inside white sheet (170px - 20px = 150px) */}
                        <div className="h-[145px] sm:h-[150px] pointer-events-none" aria-hidden="true" />

                        {/* ================================================= */}
                        {/* CONTENT ON THE WHITE SHEET                        */}
                        {/* Compact padding to keep card neat and proportioned*/}
                        {/* ================================================= */}
                        <div className="px-3.5 py-2.5 sm:py-3 bg-white rounded-b-xl sm:rounded-b-2xl border-t border-[#E7E5E0]/60">
                          {/* 1. PROJECT NAME & LOCATION: ANCHORED — NEVER MOVES ON HOVER */}
                          <div className="text-center">
                            <h3 className="text-sm sm:text-[15px] font-bold text-[#17191C] tracking-tight truncate">
                              {project.name}
                            </h3>

                            <div className="flex items-center justify-center space-x-1 text-[11px] text-[#64748B] mt-0.5 truncate">
                              <MapPin className="w-3 h-3 text-[#B58A4A] shrink-0" />
                              <span className="truncate">{project.location}</span>
                            </div>
                          </div>

                          {/* 2. REVEALED CONTENT ON HOVER: Unfolds BELOW project name */}
                          <div
                            className={`transition-all duration-300 ease-out overflow-hidden ${
                              isRevealed
                                ? "max-h-40 opacity-100 mt-2 pt-2 border-t border-[#E7E5E0]"
                                : "max-h-0 opacity-0 mt-0 pt-0 pointer-events-none"
                            }`}
                          >
                            {/* Category & Region */}
                            <div className="flex items-center justify-between text-[10px] mb-1.5">
                              <span className="font-semibold uppercase tracking-wider text-[#3B82F6]">
                                {project.category}
                              </span>
                              <span className="text-[#64748B] truncate max-w-[110px]">
                                {project.region}
                              </span>
                            </div>

                            {/* 1 Key Verified Highlight */}
                            {project.highlights && project.highlights.length > 0 && (
                              <div className="flex items-center space-x-1 text-[10px] text-[#17191C] mb-2 truncate">
                                <CheckCircle2 className="w-3 h-3 text-[#3B82F6] shrink-0" />
                                <span className="font-medium truncate">
                                  {project.highlights[0].title}: {project.highlights[0].description}
                                </span>
                              </div>
                            )}

                            {/* Direct Action Link */}
                            <Link
                              href={`/properties/${project.slug}`}
                              className="w-full py-1.5 px-2.5 bg-[#17191C] hover:bg-[#3B82F6] text-white text-[11px] font-semibold rounded-lg flex items-center justify-center space-x-1 transition-colors shadow-xs"
                            >
                              <span>View Property</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* =================================================== */}
                      {/* FRONT LAYER: Project Image Card                     */}
                      {/* - Starts at top-0 (20px ABOVE the white sheet)      */}
                      {/* - z-20 ensures it ALWAYS stays in front of sheet    */}
                      {/* - Idle: Inset width (leaving crisp white shoulders) */}
                      {/* - Hover: Expands to full width flush with sheet     */}
                      {/* =================================================== */}
                      <div
                        className={`absolute top-0 z-20 overflow-hidden bg-[#E7E5E0] border border-black/10 transition-all duration-300 ease-out ${
                          isRevealed
                            ? "inset-x-0 mx-0 h-[165px] sm:h-[170px] rounded-xl sm:rounded-2xl shadow-lg"
                            : "inset-x-2.5 sm:inset-x-3 mx-auto h-[165px] sm:h-[170px] rounded-lg sm:rounded-xl shadow-md"
                        }`}
                      >
                        <Image
                          src={project.heroImage.url}
                          alt={project.heroImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center"
                        />

                        {/* Status Badge */}
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <Badge
                            variant={project.status === "Completed" ? "default" : "bronze"}
                            className="shadow-xs text-[10px] font-semibold py-0.5 px-2"
                          >
                            {project.status}
                          </Badge>
                        </div>

                        {/* Mobile Touch Details Button */}
                        <button
                          type="button"
                          onClick={() => handleCardTap(idx)}
                          className="sm:hidden absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-semibold rounded z-10"
                          aria-label="Toggle property details"
                        >
                          {isTapped ? "Close" : "Details"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* ========================================================= */}
            {/* 3. BOTTOM BLUE PANEL SECTION: Centered 3 White Dashes      */}
            {/* Sits with clean spacing inside the static blue background  */}
            {/* ========================================================= */}
            <div
              className="relative z-10 flex items-center justify-center space-x-2 pt-14 sm:pt-16 md:pt-14 pb-1"
              aria-label="Slider indicators"
            >
              <button
                type="button"
                onClick={() => setHoveredIndex(0)}
                aria-label="View project 1"
                className={`h-1 rounded-full transition-all duration-300 ${
                  hoveredIndex === 0 || hoveredIndex === null
                    ? "w-8 bg-white"
                    : "w-8 bg-white/40 hover:bg-white/70"
                }`}
              />
              <button
                type="button"
                onClick={() => setHoveredIndex(1)}
                aria-label="View project 2"
                className={`h-1 rounded-full transition-all duration-300 ${
                  hoveredIndex === 1
                    ? "w-8 bg-white"
                    : "w-8 bg-white/40 hover:bg-white/70"
                }`}
              />
              <button
                type="button"
                onClick={() => setHoveredIndex(2)}
                aria-label="View project 3"
                className={`h-1 rounded-full transition-all duration-300 ${
                  hoveredIndex === 2
                    ? "w-8 bg-white"
                    : "w-8 bg-white/25 hover:bg-white/60"
                }`}
              />
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. SHOWCASE BOTTOM BAR (Below the Blue Panel)             */}
          {/* ========================================================= */}
          <div className="w-full max-w-4xl mx-auto px-4 mt-5 flex items-center justify-between">
            <Link
              href="/properties"
              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#17191C] hover:text-[#3B82F6] transition-colors group"
            >
              <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Explore all properties</span>
            </Link>

            <Link
              href="/properties"
              className="text-[11px] sm:text-xs text-[#64748B] hover:text-[#17191C] transition-colors"
            >
              <span>Bengaluru strategic growth corridors &rarr;</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
