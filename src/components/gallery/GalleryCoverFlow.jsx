"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  MapPin,
  Building2,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Eye,
  Grid,
} from "lucide-react";

/**
 * Project-wise Gallery Data Architecture
 * Strictly verified projects and authentic photographs.
 */
export const projectGalleries = [
  {
    id: "nagaraju-farm",
    name: "Nagaraju Farm Land",
    slug: "nagaraju-farm",
    category: "Weekend Villa & Farm Plots",
    location: "Thippuru, near Kumbalagudu, Bengaluru",
    status: "Ready for construction",
    tagline:
      "Expansive 5,000–6,000 sq ft farm plots in Thippuru, near Kumbalagudu with concrete roads, electrical connection, and entrance arch.",
    coverImage: "/images/projects/nagaraju-farm/hero-road.jpg",
    images: [
      {
        id: "nf-1",
        title: "Concrete Internal Avenue & Electrical Utilities",
        caption: "Spacious paved concrete internal road with installed electrical line poles and overhead infrastructure.",
        specs: "Concrete Roads • Electrical Line Installed",
        url: "/images/projects/nagaraju-farm/hero-road.jpg",
        alt: "Nagaraju Farm Land concrete internal road and electrical line poles in Thippuru near Kumbalagudu",
      },
      {
        id: "nf-2",
        title: "Grand Entrance Arch & Sliding Security Gate",
        caption: "Constructed modern architectural white entrance arch with sliding gate and compound walling.",
        specs: "Entrance Arch • Gated Community Access",
        url: "/images/projects/nagaraju-farm/entrance-arch.jpg",
        alt: "Nagaraju Farm Land constructed entrance arch with gate and compound wall",
      },
      {
        id: "nf-3",
        title: "Precast Compound Wall & Internal Avenue",
        caption: "Durable precast compound wall perimeter along the concrete internal road network.",
        specs: "Compound Boundary • Concrete Road",
        url: "/images/projects/nagaraju-farm/internal-road-compound.png",
        alt: "Nagaraju Farm Land concrete internal road with compound wall and electric poles",
      },
    ],
  },
  {
    id: "crs-enclave",
    name: "CRS Enclave",
    slug: "crs-enclave",
    category: "BMRDA Plotted Development",
    location: "Bengaluru, Karnataka",
    status: "Active Opportunity",
    tagline:
      "BMRDA approved plotted development featuring immediate registration and construction with A Khata reference documentation.",
    coverImage: "/images/about/about-development.jpg",
    highlights: ["BMRDA approved layout", "A Khata property references", "Immediate registration & construction"],
    images: [
      {
        id: "crs-1",
        title: "BMRDA Approved Layout",
        caption: "Rigorously planned residential layout complying with statutory development standards.",
        specs: "BMRDA Approved • A Khata Reference",
        url: "/images/about/about-development.jpg",
        alt: "CRS Enclave BMRDA approved plotted layout Bangalore",
      },
      {
        id: "crs-2",
        title: "Ready-to-Build Infrastructure",
        caption: "Prepared site infrastructure with ready access to main Bangalore road networks.",
        specs: "Immediate Construction • Ready Registration",
        url: "/images/approach/stage1-explore-plots.jpg",
        alt: "CRS Enclave demarcated residential plots and avenue roads",
      },
      {
        id: "crs-3",
        title: "Title & Survey Verification",
        caption: "Streamlined registration procedures backed by transparent documentation.",
        specs: "Statutory Approvals • Transparent Records",
        url: "/images/approach/stage3-document-review.jpg",
        alt: "CRS Enclave legal and title documentation review",
      },
      {
        id: "crs-4",
        title: "Arterial Highway Corridor",
        caption: "Direct highway connectivity linking residents to primary employment centers.",
        specs: "South-West Growth Belt • High Appreciation",
        url: "/images/about/about-corridor-growth.jpg",
        alt: "CRS Enclave regional highway connectivity and transit corridor",
      },
    ],
  },
  {
    id: "royal-homes",
    name: "Royal Homes",
    slug: "royal-homes",
    category: "Completed Residential Development",
    location: "Bengaluru, Karnataka",
    status: "Completed",
    tagline:
      "A completed residential development reflecting DS Marcom's track record of delivery and enduring craftsmanship in Bangalore.",
    coverImage: "/images/about/about-overview-exterior.jpg",
    highlights: ["100% completed project", "Independent villa architecture", "Delivered by DS Marcom"],
    images: [
      {
        id: "rh-1",
        title: "Delivered Villa Architecture",
        caption: "Finished contemporary residential villa architecture delivered to proud homeowners.",
        specs: "Delivered Project • Independent Architecture",
        url: "/images/about/about-overview-exterior.jpg",
        alt: "Royal Homes completed residential villa exterior architecture in Bangalore",
      },
      {
        id: "rh-2",
        title: "Curated Living Interiors",
        caption: "High-ceiling open concept living spaces featuring modern architectural elements.",
        specs: "Open Concept • Designer Living",
        url: "/images/about/about-overview-interior.jpg",
        alt: "Royal Homes curated residential living room and interior design",
      },
      {
        id: "rh-3",
        title: "Delivered Community Living",
        caption: "Part of DS Marcom's proven track record of 9 successfully completed projects.",
        specs: "6+ Years Experience • 9 Completed Projects",
        url: "/images/about/about-team.jpg",
        alt: "Royal Homes client satisfaction and advisory delivery",
      },
      {
        id: "rh-4",
        title: "Residential Greenery & Enclave",
        caption: "Peaceful residential neighborhood with manicured landscaping and paved pathways.",
        specs: "Established Community • Enduring Value",
        url: "/images/about/about-development.jpg",
        alt: "Royal Homes completed residential community",
      },
    ],
  },
  {
    id: "dasanapura-nelamangala",
    name: "Dasanapura & Nelamangala",
    slug: "dasanapura-nelamangala-development",
    category: "Strategic Growth Corridor",
    location: "Bethanagere, Dasanapura Hobli, Nelamangala",
    status: "Strategic Belt",
    tagline:
      "Strategic property corridor positioned in Bangalore North Taluk, benefiting from expanding expressway access.",
    coverImage: "/images/about/about-corridor-growth.jpg",
    highlights: ["Expressway connectivity", "High-growth Bangalore North Taluk", "Prime capital appreciation potential"],
    images: [
      {
        id: "dn-1",
        title: "Expressway Highway Corridor",
        caption: "Strategic connectivity across key national expressways and northern growth nodes.",
        specs: "National Highway Belt • Strategic Location",
        url: "/images/about/about-corridor-growth.jpg",
        alt: "Dasanapura Nelamangala regional highway connectivity",
      },
      {
        id: "dn-2",
        title: "Bangalore Urban Expansion",
        caption: "High-momentum economic belt with expanding civic infrastructure and logistics nodes.",
        specs: "Capital Appreciation Vector • Bangalore North",
        url: "/images/about/about-cta-sunset.jpg",
        alt: "Bangalore North expansion corridor at golden hour",
      },
      {
        id: "dn-3",
        title: "Strategic Land Asset",
        caption: "Prime destination for long-term real estate value appreciation and generational planning.",
        specs: "Clear Title Assets • Strategic Positioning",
        url: "/images/approach/stage4-decision-possession.jpg",
        alt: "Strategic land acquisition and possession decision",
      },
    ],
  },
  {
    id: "villa-concepts",
    name: "Luxury Villa Concepts",
    slug: "properties",
    category: "Bespoke Architecture",
    location: "Bangalore Peripheral Belts",
    status: "Design Concepts",
    tagline:
      "Curated architectural concepts and interior inspirations for independent villa construction on DS Marcom plots.",
    coverImage: "/images/about/about-overview-interior.jpg",
    highlights: ["Contemporary elevation designs", "Spacious open concept layouts", "Wide paved avenue integration"],
    images: [
      {
        id: "vc-1",
        title: "Contemporary Villa Facades",
        caption: "Modern geometric facades blending stone, glass, and lush landscaping.",
        specs: "Independent Villa Architecture • Modern Design",
        url: "/images/about/about-overview-exterior.jpg",
        alt: "Contemporary luxury villa exterior architecture in Bangalore",
      },
      {
        id: "vc-2",
        title: "Open-Concept Living Spaces",
        caption: "Spacious interiors with curated natural lighting, marble flooring, and modern kitchens.",
        specs: "High-Ceiling Open Concept • Marble Kitchen",
        url: "/images/about/about-overview-interior.jpg",
        alt: "Luxury open concept living room and designer kitchen",
      },
      {
        id: "vc-3",
        title: "Enclave Streetscapes",
        caption: "Wide paved avenues bordered by lush canopy greenery and underground utilities.",
        specs: "Underground Cabling • Paved Avenues",
        url: "/images/gallery/gallery-hero.jpg",
        alt: "Upscale villa community streetscape with curved avenues",
      },
    ],
  },
];

export default function GalleryCoverFlow() {
  // activeProjectId: null = Normal Project Listing; string = Opened Project Gallery in Cover Flow
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Active project data when one is selected
  const activeProject = useMemo(() => {
    if (!activeProjectId) return null;
    return projectGalleries.find((p) => p.id === activeProjectId) || projectGalleries[0];
  }, [activeProjectId]);

  // Images for the Cover Flow when a project gallery is open
  const projectImages = useMemo(() => {
    if (!activeProject) return [];
    return activeProject.images;
  }, [activeProject]);

  // Reset Cover Flow index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeProjectId]);

  const handleNext = useCallback(() => {
    if (projectImages.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const handlePrev = useCallback(() => {
    if (projectImages.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  }, [projectImages.length]);

  // Keyboard navigation & ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Handle opening a project's visual gallery
  const handleOpenProjectGallery = (projId) => {
    setActiveProjectId(projId);
    // Smooth scroll to top of gallery card
    window.scrollTo({ top: 260, behavior: "smooth" });
  };

  // Handle closing the project gallery back to normal listing
  const handleBackToListing = () => {
    setActiveProjectId(null);
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          VIEW 1: NORMAL PROJECT LISTING (When no project is open)
          Lists all projects in clean, authentic card format with cover image,
          details, and button to open that project's Cover Flow gallery!
          ========================================================================= */}
      {!activeProject ? (
        <div className="w-full">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#19B83A] block">
              PROJECT DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Visual Project Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Explore Bangalore&apos;s premier plotted layouts, gated communities, and growth corridors. Select any project to open its interactive visual diary.
            </p>
          </div>

          {/* Normal Project Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectGalleries.map((proj) => (
              <div
                key={proj.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Project Cover Image */}
                <div
                  onClick={() => handleOpenProjectGallery(proj.id)}
                  className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <Image
                    src={proj.coverImage}
                    alt={`${proj.name} showcase in Bangalore`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Status & Count Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10 shadow-sm">
                      <Building2 className="w-3 h-3 text-[#19B83A]" />
                      {proj.status}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-sm">
                      <Eye className="w-3 h-3 text-[#19B83A]" />
                      {proj.images.length} Photos
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#19B83A] block">
                      {proj.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
                      {proj.name}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#19B83A] shrink-0" />
                      <span className="line-clamp-1">{proj.location}</span>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenProjectGallery(proj.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#19B83A] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
                    >
                      <span>Open Visual Gallery</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {proj.slug !== "properties" && (
                      <Link
                        href={`/properties/${proj.slug}`}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* =========================================================================
            VIEW 2: OPENED PROJECT GALLERY WITH COVER FLOW DESIGN
            When the user opens a particular project, displays images in the exact
            Cover Flow design from the reference image, with easy "Back to Projects" button!
            ========================================================================= */
        <div className="w-full animate-fadeIn">
          {/* Top Bar: Back to Project Listing Button & Project Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <button
              type="button"
              onClick={handleBackToListing}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs tracking-wide transition-colors cursor-pointer self-start sm:self-auto"
            >
              <ArrowLeft className="w-4 h-4 text-slate-700" />
              <span>Back to All Projects</span>
            </button>

            {/* Switch between projects directly */}
            <div className="flex items-center gap-2 flex-wrap">
              {projectGalleries.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveProjectId(p.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                    activeProject.id === p.id
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Header matching Reference Image */}
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400 block">
              GALLERY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {activeProject.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              {activeProject.tagline}
            </p>
          </div>

          {/* Quick Filter Info Tag */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8 sm:mb-10">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm">
              {activeProject.category}
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#19B83A]" />
              {activeProject.location}
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              {activeProject.status}
            </span>
          </div>

          {/* =========================================================================
              COVER FLOW 3D CAROUSEL STAGE FOR THIS PROJECT
              Balanced aspect ratio matching reference image:
              Height: h-[270px] sm:h-[315px] md:h-[350px]
              Width: w-[235px] sm:w-[280px] md:w-[320px]
              ========================================================================= */}
          <div className="relative w-full h-[310px] sm:h-[360px] md:h-[400px] flex items-center justify-center overflow-hidden py-3 select-none">
            {projectImages.map((item, index) => {
              const total = projectImages.length;
              let diff = (index - currentIndex) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const isCenter = diff === 0;
              const isImmediate = Math.abs(diff) === 1;
              const isOuter = Math.abs(diff) === 2;
              const isHidden = Math.abs(diff) > 2;

              let transformStyle = "";
              let zIndex = 10;
              let opacity = 0;
              let cursor = "default";

              if (isCenter) {
                transformStyle = "translateX(0%) scale(1.05)";
                zIndex = 30;
                opacity = 1;
                cursor = "pointer";
              } else if (isImmediate) {
                const direction = diff > 0 ? 1 : -1;
                transformStyle = `translateX(${direction * 64}%) scale(0.88)`;
                zIndex = 20;
                opacity = 0.9;
                cursor = "pointer";
              } else if (isOuter) {
                const direction = diff > 0 ? 1 : -1;
                transformStyle = `translateX(${direction * 128}%) scale(0.74)`;
                zIndex = 10;
                opacity = 0.55;
                cursor = "pointer";
              } else {
                const direction = diff > 0 ? 1 : -1;
                transformStyle = `translateX(${direction * 180}%) scale(0.6)`;
                zIndex = 0;
                opacity = 0;
              }

              if (isHidden) return null;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isCenter) {
                      setLightboxItem({
                        ...item,
                        projectName: activeProject.name,
                        projectLocation: activeProject.location,
                      });
                    } else {
                      setCurrentIndex(index);
                    }
                  }}
                  style={{
                    transform: transformStyle,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  className={`absolute h-[270px] sm:h-[315px] md:h-[350px] w-[235px] sm:w-[280px] md:w-[320px] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group ${cursor}`}
                >
                  {/* Card Image */}
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 235px, (max-width: 768px) 280px, 320px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    priority={isCenter}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Top Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold tracking-tight shadow-sm border border-white/10">
                      {item.specs}
                    </span>
                  </div>

                  {/* Circular Zoom Button (bottom-right) */}
                  <div className="absolute bottom-3.5 right-3.5 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md text-slate-900 flex items-center justify-center shadow-lg group-hover:bg-[#19B83A] group-hover:text-white transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Card Bottom Details Overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-14 z-10 text-white space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight leading-snug drop-shadow-md line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              BOTTOM CONTROLS MATCHING REFERENCE IMAGE
              Two clean circular arrow buttons side-by-side
              ========================================================================= */}
          <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6 pb-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous gallery image"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-300 bg-white hover:border-slate-800 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next gallery image"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-300 bg-white hover:border-slate-800 hover:bg-slate-900 hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          LIGHTBOX MODAL WITH UNMISTAKABLE CANCEL / CLOSE BUTTON
          Fixed prominent '✕ Close' button at top-right of screen + backdrop click
          + card close button + 'Back to Gallery' button
          ========================================================================= */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
        >
          {/* 1. FLOATING ALWAYS-VISIBLE FIXED SCREEN CLOSE BUTTON */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxItem(null);
            }}
            className="fixed top-5 right-5 z-[100] flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-slate-100 border border-slate-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="w-4 h-4 text-slate-900 stroke-[2.5]" />
            <span>Close</span>
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* 2. IN-CARD CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-md"
              aria-label="Close"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-[320px] sm:h-[440px] md:h-[500px]">
              <Image
                src={lightboxItem.url}
                alt={lightboxItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-contain bg-black/50"
              />
            </div>

            {/* Modal Bottom Caption Bar */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#19B83A]">
                  {lightboxItem.projectName || activeProject?.name}
                </span>
                <h3 className="text-base sm:text-lg font-bold mt-0.5 text-white">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 flex-wrap">
                  <MapPin className="w-3.5 h-3.5 text-[#19B83A]" />
                  <span>{lightboxItem.projectLocation || activeProject?.location}</span>
                  <span className="mx-1">•</span>
                  <span>{lightboxItem.specs}</span>
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {/* 3. 'BACK TO GALLERY' BUTTON */}
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Gallery</span>
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#19B83A]/25"
                >
                  <span>Inquire Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
