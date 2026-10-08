"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDocked, setIsDocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Travel distance: logo smoothly glides across the hero banner and docks
          // right as the user approaches the end of the hero section (~82% of viewport height)
          const heroHeight = Math.max(window.innerHeight, 620);
          const dockDistance = heroHeight * 0.82;
          const currentY = window.scrollY;
          const progress = Math.min(Math.max(currentY / dockDistance, 0), 1);
          setScrollProgress(progress);
          setIsDocked(progress >= 0.92);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // On subpages, logo is always docked on the left and navbar is solid
  const effectiveProgress = isHome ? scrollProgress : 1;
  const isNavbarSolid = !isHome || isDocked;

  // Responsive Hero Scale:
  // Desktop (>= 1440px): 2.25 - commanding centerpiece logo
  // Standard Laptop (>= 1024px): 2.15
  // Tablet (>= 640px): 1.75
  // Mobile (< 640px): 1.45 - fits comfortably within 375px+ screens
  const heroScale =
    windowWidth >= 1440
      ? 2.25
      : windowWidth >= 1024
      ? 2.15
      : windowWidth >= 640
      ? 1.75
      : 1.45;

  // Continuous interpolation math:
  // progress = 0 (Hero): left = 50%, translateX = -50%, scale = heroScale
  // progress = 1 (Docked): left = 0%, translateX = 0%, scale = 1.0
  const leftPercent = (1 - effectiveProgress) * 50;
  const translateXPercent = (1 - effectiveProgress) * -50;
  const scale = heroScale - effectiveProgress * (heroScale - 1);

  // Smooth crossfade between White text (Hero) and Brand Green text (Navbar):
  // Stays crisp white throughout the hero section, then smoothly crossfades into Brand Green
  // as the logo approaches and enters the docked white navbar (progress 0.65 -> 0.95)
  const colorProgress = Math.min(Math.max((effectiveProgress - 0.65) / 0.3, 0), 1);
  const whiteTextOpacity = 1 - colorProgress;
  const greenTextOpacity = colorProgress;

  // GPU compositing optimization:
  // When actively scrolling across hero, use hardware transform.
  // When docked or on subpages, eliminate scale and willChange to ensure 100% native pixel crispness with zero blur.
  const isActivelyGliding = isHome && effectiveProgress < 0.95;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isNavbarSolid
            ? "bg-[#FFFFFF]/98 backdrop-blur-md border-b border-[#E5E8E5] py-2 sm:py-2.5 shadow-[0_2px_12px_rgba(11,13,12,0.03)]"
            : "bg-transparent border-b border-transparent py-9 sm:py-12"
        }`}
      >
        <Container>
          <div className="relative flex items-center justify-between min-h-[52px] sm:min-h-[60px]">
            {/* 
              SCROLL-DRIVEN LOGO GLIDE & COLOR MORPH:
              - In Hero: Grand commanding emblem (~108px) with crisp WHITE "properties & promoters" font.
              - In Docked Navbar:
                * House/Leaves emblem is enlarged to 50-52px ("make the logo little for big").
                * "properties & promoters" wordmark is enlarged to 18-19px integer height with 3x resolution.
                * Images use unoptimized={true} to eliminate WebP compression blur.
                * Native pixel alignment when docked eliminates GPU layer blur.
            */}
            <div
              style={{
                left: isActivelyGliding ? `${leftPercent}%` : "0%",
                transform: isActivelyGliding
                  ? `translate(${translateXPercent}%, -50%) scale(${scale})`
                  : "translateY(-50%)",
                transformOrigin: "center center",
                willChange: isActivelyGliding ? "transform" : "auto",
              }}
              className="absolute top-1/2 z-10 pointer-events-auto"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 sm:gap-3 md:gap-3.5 focus-visible:outline-none select-none group"
                aria-label="DS MARCOM Properties & Promoters"
              >
                {/* DS MARCOM House & Leaves Emblem - crisp 2x resolution lossless asset */}
                <div className="relative shrink-0 flex items-center">
                  <Image
                    src="/images/brand/ds-marcom-emblem.png"
                    alt=""
                    width={498}
                    height={566}
                    unoptimized
                    priority
                    className="h-[42px] sm:h-[46px] md:h-[50px] lg:h-[52px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                {/* "properties & promoters" Wordmark: Ultra-sharp 3x resolution (1536x153) */}
                <div className="relative shrink-0 flex items-center">
                  {/* Hero State: Crisp White Typography */}
                  <Image
                    src="/images/brand/ds-marcom-text-white.png"
                    alt="properties & promoters"
                    width={1536}
                    height={153}
                    unoptimized
                    priority
                    style={{ opacity: whiteTextOpacity }}
                    className="h-4 sm:h-[17px] md:h-[18px] lg:h-[19px] w-auto object-contain transition-opacity duration-150"
                  />

                  {/* Navbar Docked State: Official Brand Green Typography */}
                  <Image
                    src="/images/brand/ds-marcom-text.png"
                    alt=""
                    aria-hidden="true"
                    width={1536}
                    height={153}
                    unoptimized
                    priority
                    style={{ opacity: greenTextOpacity }}
                    className="absolute inset-0 h-4 sm:h-[17px] md:h-[18px] lg:h-[19px] w-auto object-contain transition-opacity duration-150"
                  />
                </div>
              </Link>
            </div>

            {/* Spacer to keep right-side navigation items docked to the right */}
            <div className="w-1" />

            {/* Desktop Navigation Links — Gracefully glide in as the logo docks */}
            <nav
              className={`hidden md:flex items-center space-x-8 lg:space-x-10 transition-all duration-300 ease-out ${
                isNavbarSolid
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-6 pointer-events-none"
              }`}
              aria-label="Main Navigation"
            >
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none ${
                      isActive
                        ? "text-[#0B0D0C] font-semibold"
                        : "text-[#66706A] hover:text-[#0B0D0C]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#19B83A]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Toggle — Glides in as logo docks */}
            <div
              className={`flex items-center md:hidden transition-all duration-300 ease-out ${
                isNavbarSolid
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#0B0D0C] hover:text-[#19B83A] transition-colors focus-visible:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-[#0B0D0C]/60 backdrop-blur-xs md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.26, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 bg-[#FFFFFF] border-l border-[#E5E8E5] shadow-2xl md:hidden flex flex-col justify-between p-6"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E8E5]">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2"
                    aria-label="DS MARCOM Home"
                  >
                    <Image
                      src="/images/brand/ds-marcom-emblem.png"
                      alt=""
                      width={498}
                      height={566}
                      unoptimized
                      className="h-11 w-auto object-contain"
                    />
                    <Image
                      src="/images/brand/ds-marcom-text.png"
                      alt="DS MARCOM Properties & Promoters"
                      width={1536}
                      height={153}
                      unoptimized
                      className="h-4 w-auto object-contain"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#0B0D0C] hover:text-[#19B83A] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-1">
                  {siteConfig.navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-3.5 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-[#F7F8F5] text-[#0B0D0C] font-semibold border-l-2 border-[#19B83A]"
                            : "text-[#66706A] hover:text-[#0B0D0C] hover:bg-[#F7F8F5]/60"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#66706A]/50" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E5E8E5] text-xs text-[#66706A] space-y-1">
                <p className="font-semibold text-[#0B0D0C]">DS MARCOM</p>
                <p>Real Estate • Bengaluru, Karnataka</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
