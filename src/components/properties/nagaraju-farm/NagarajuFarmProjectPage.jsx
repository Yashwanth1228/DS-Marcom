"use client";

import NagarajuFarmHero from "./NagarajuFarmHero";
import NagarajuFarmOverview from "./NagarajuFarmOverview";
import NagarajuFarmFacilities from "./NagarajuFarmFacilities";
import NagarajuFarmLandmarks from "./NagarajuFarmLandmarks";
import NagarajuFarmGallery from "./NagarajuFarmGallery";
import NagarajuFarmPricing from "./NagarajuFarmPricing";
import NagarajuFarmEnquiry from "./NagarajuFarmEnquiry";

export default function NagarajuFarmProjectPage() {
  return (
    <div className="relative bg-[#F7F8F5] text-[#0B0D0C] selection:bg-[#19B83A] selection:text-white">
      {/* 1. Immersive Image-Led Hero with Layered Editorial Composition */}
      <NagarajuFarmHero />

      {/* 2. Editorial Project Overview: "Space to Shape Your Own Escape" */}
      <NagarajuFarmOverview />

      {/* 3. Designed Visual Facilities Feature with Associated Site Evidence */}
      <NagarajuFarmFacilities />

      {/* 4. "Connected to the Places That Matter" - Hub & Spoke Connectivity Diagram */}
      <NagarajuFarmLandmarks />

      {/* 5. Magazine-Style Authentic Photographic Archive & Lightbox */}
      <NagarajuFarmGallery />

      {/* 6. Verified Specifications & Highlights (Non-Price) */}
      <NagarajuFarmPricing />

      {/* 7. Asymmetric Project-Specific Enquiry Section */}
      <NagarajuFarmEnquiry />
    </div>
  );
}
