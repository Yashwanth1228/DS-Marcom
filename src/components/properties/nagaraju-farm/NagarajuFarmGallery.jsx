"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Camera } from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmGallery() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const images = nagarajuFarmData.gallery;

  const handleNext = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  return (
    <section className="relative pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-24 bg-white text-[#0B0D0C] border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Gallery Header */}
        <div className="space-y-2 mb-8 sm:mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
            SITE DOCUMENTATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D0C] tracking-tight">
            On-Ground Project Archive.
          </h2>
        </div>

        {/* Uniform Sized Photographic Grid (All images displayed in the exact same size) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {images.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-200 border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[16/11] w-full"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Zoom Action Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-white/10">
                  <Camera className="w-3 h-3 text-[#19B83A]" />
                  <span>On-Ground Site View</span>
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-200 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL WITH FULL KEYBOARD & ACCESSIBLE CONTROLS
          ========================================================================= */}
      {activeLightboxIndex !== null && (
        <div
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* FLOATING FIXED HIGH-CONTRAST CLOSE BUTTON */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex(null);
            }}
            className="fixed top-5 right-5 z-[100] flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-stone-100 border border-stone-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Close image viewer"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
            <span>Close</span>
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          >
            {/* Modal Image Area */}
            <div className="relative w-full h-[380px] sm:h-[540px] bg-black">
              <Image
                src={images[activeLightboxIndex].url}
                alt={images[activeLightboxIndex].title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Caption Bar */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-[#19B83A] uppercase tracking-wider block">
                  Nagaraju Farm Land · Photo {activeLightboxIndex + 1} of {images.length}
                </span>
                <h4 className="text-base sm:text-lg font-bold">
                  {images[activeLightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-400">
                  {images[activeLightboxIndex].caption}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-400 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#19B83A]" />
                <span>Thippuru, near Kumbalagudu</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
