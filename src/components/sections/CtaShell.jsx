"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CtaShell() {
  return (
    <section className="relative bg-[#F8F9FA] py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Subtle organic background wave contours matching reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-24 -left-20 w-[550px] h-[550px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -top-24 -right-20 w-[550px] h-[550px] rounded-full bg-slate-200/40 blur-3xl" />
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-20 text-[#F9FAF8] fill-current opacity-70"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path d="M0,24L80,32C160,40,320,56,480,60C640,64,800,56,960,44C1120,32,1280,16,1360,8L1440,0L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Centered CTA Card - wider lateral space, compact viewport height */}
        <div
          className="relative mx-auto w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200/70 group"
        >
          {/* Background Handshake / Partnership Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cta/handshake-partnership.jpg"
              alt="DS MARCOM Real Estate Partnership Handshake"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              priority={false}
            />
            {/* Lighter, subtle cinematic tint matching user reference image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/40 backdrop-blur-[0.5px]" />
          </div>

          {/* Card Content: Compact, clean, centered matching reference image */}
          <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 md:py-16 text-center flex flex-col items-center">
            {/* Bold Headline matching user reference */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight max-w-3xl text-balance">
              Push your property journey to next level.
            </h2>

            {/* Concise Supporting Description */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-xl leading-relaxed">
              End-to-end title vetting, plotted layout curation, and on-ground property advisory
              in a single trusted solution. Meet the right partner to help realize your vision.
            </p>

            {/* Single Centered Pill Button matching reference image */}
            <div className="mt-6 sm:mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#FF6543] hover:bg-[#F05533] active:scale-95 shadow-lg shadow-[#FF6543]/35 hover:shadow-[#FF6543]/50 transition-all duration-200"
              >
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

