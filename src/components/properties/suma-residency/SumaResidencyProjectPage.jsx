"use client";

import SumaResidencyHero from "./SumaResidencyHero";
import SumaResidencyOverview from "./SumaResidencyOverview";
import SumaResidencyFacilities from "./SumaResidencyFacilities";
import SumaResidencyLandmarks from "./SumaResidencyLandmarks";
import SumaResidencyPricing from "./SumaResidencyPricing";
import SumaResidencyGallery from "./SumaResidencyGallery";

export default function SumaResidencyProjectPage() {
  return (
    <div className="relative bg-[#F7F8F5] text-[#0B0D0C] selection:bg-[#19B83A] selection:text-white">
      {/* 1. Immersive Image-Led Hero with Layered Editorial Composition */}
      <SumaResidencyHero />

      {/* 2. Editorial Project Overview: "Space to Build Your Future Villa Estate" */}
      <SumaResidencyOverview />

      {/* 3. Designed Visual Facilities Feature with Associated Site Evidence */}
      <SumaResidencyFacilities />

      {/* 4. "Connected to the Places That Matter" - Hub & Spoke Connectivity Diagram */}
      <SumaResidencyLandmarks />

      {/* 5. Verified Specifications & Highlights: "Verified Property Parameters." */}
      <SumaResidencyPricing />

      {/* 6. Magazine-Style Authentic Photographic Archive & Lightbox */}
      <SumaResidencyGallery />
    </div>
  );
}
