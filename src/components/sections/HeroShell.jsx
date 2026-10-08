"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function HeroShell() {
  const shouldReduceMotion = useReducedMotion();

  // Subtle entrance animation
  const fadeVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative -mt-[72px] sm:-mt-[80px] h-[100svh] min-h-[620px] max-h-[1100px] w-full overflow-hidden flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 bg-[#0B0D0C]">
      {/* Background Video — Native, Local, Continuous Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center scale-[1.01]"
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/yffbj6hj/video/upload/f_auto,q_auto/v1/ds-marcom/hero/ds-marcom-bangalore.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Cinematic Contrast Overlays */}
      {/* 1. Base light ambient tint */}
      <div
        className="absolute inset-0 bg-[#0B0D0C]/25 pointer-events-none"
        aria-hidden="true"
      />

      {/* 2. Directional gradient focused strictly behind the bottom-left text */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0B0D0C]/85 via-[#0B0D0C]/40 to-transparent pointer-events-none max-w-2xl"
        aria-hidden="true"
      />

      {/* 3. Top ambient vignette ensuring clarity for the centered logo */}
      <div
        className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0B0D0C]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Subtle bottom fade easing into the stats section */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F7F8F5] via-[#F7F8F5]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Content — Compact Bottom-Left Layout */}
      <div className="relative z-10 w-full">
        <Container>
          <div className="max-w-md lg:max-w-lg flex flex-col items-start text-left">
            {/* Headline — Compact, Focused Sizing matching previous Hero */}
            <motion.h1
              custom={0.15}
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              className="text-2xl sm:text-[28px] md:text-3xl lg:text-[34px] font-bold tracking-tight text-white leading-[1.16] sm:leading-[1.12] text-balance"
            >
              Real Estate Opportunities Built Around Your Future.
            </motion.h1>

            {/* Subtitle — Concise description */}
            <motion.p
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#F7F8F5]/85 max-w-sm leading-relaxed font-normal"
            >
              Explore thoughtfully selected residential, commercial and plotted property opportunities across promising locations.
            </motion.p>

            {/* Action Buttons — Compact Styling */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeVariants}
              className="mt-5 sm:mt-6 flex items-center gap-3 w-full sm:w-auto"
            >
              <Link
                href="/properties"
                className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 bg-[#19B83A] text-white hover:bg-[#159E32] active:bg-[#0F7824] rounded-full transition-all duration-200 shadow-sm group"
              >
                <span>Explore Properties</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 border border-white/70 hover:border-white text-white hover:bg-white/15 active:bg-white/25 rounded-full transition-all duration-200 backdrop-blur-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#19B83A]" />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50 font-medium">
          Scroll
        </span>
        <div className="w-px h-4 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
