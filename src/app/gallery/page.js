import Image from "next/image";
import Link from "next/link";
import { FileText, Phone, ArrowRight, Sparkles, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import GalleryCoverFlow from "@/components/gallery/GalleryCoverFlow";
import galleryHeroImg from "@/../public/images/gallery/gallery-hero.jpg";

export const metadata = {
  title: "Property & Project Gallery | DS MARCOM Real Estate Bangalore",
  description:
    "Explore Bangalore's premier residential villa plots, gated layouts, and growth corridor developments through our visual archive.",
};

export default function GalleryPage() {
  return (
    <div className="relative bg-[#FAF9F5] min-h-screen">
      {/* =========================================================================
          1. TOP HERO BANNER: Matching About Page Structure Exactly
          ========================================================================= */}
      <section className="relative w-full h-[260px] sm:h-[310px] lg:h-[360px] overflow-hidden bg-slate-900 flex items-center justify-center">
        {/* Background Photo: Master-Planned Luxury Residential Community */}
        <div className="absolute inset-0">
          <Image
            src={galleryHeroImg}
            alt="DS MARCOM Real Estate Visual Gallery & Plotted Enclaves"
            fill
            sizes="100vw"
            priority
            loading="eager"
            className="object-cover"
            style={{ objectPosition: "50% 32%" }}
          />
          {/* Subtle translucent scrim (30% darkness) */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        </div>

        {/* Hero Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Gallery
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. COVER FLOW GALLERY CARD: Overlapping Banner with Signature Card Look
          Matching User's Reference Layout
          ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <Container>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-10 lg:p-12 overflow-hidden">
            <GalleryCoverFlow />
          </div>
        </Container>
      </section>
    </div>
  );
}

