"use client";

import ChamundeshwariHero from "./ChamundeshwariHero";
import ChamundeshwariOverview from "./ChamundeshwariOverview";
import ChamundeshwariFacilities from "./ChamundeshwariFacilities";
import ChamundeshwariLandmarks from "./ChamundeshwariLandmarks";
import ChamundeshwariPricing from "./ChamundeshwariPricing";
import ChamundeshwariGallery from "./ChamundeshwariGallery";

export default function ChamundeshwariProjectPage() {
  return (
    <div className="relative bg-[#F7F8F5] text-[#0B0D0C] selection:bg-[#19B83A] selection:text-white">
      {/* 1. Immersive Image-Led Hero with Layered Editorial Composition */}
      <ChamundeshwariHero />

      {/* 2. Editorial Project Overview: "Space to Shape Your Own Luxury Villa" */}
      <ChamundeshwariOverview />

      {/* 3. Designed Visual Facilities Feature with Associated Site Evidence */}
      <ChamundeshwariFacilities />

      {/* 4. "Connected to the Places That Matter" - Hub & Spoke Connectivity Diagram */}
      <ChamundeshwariLandmarks />

      {/* 5. Verified Specifications & Highlights: "Verified Property Parameters." */}
      <ChamundeshwariPricing />

      {/* 6. Magazine-Style Authentic Photographic Archive & Lightbox */}
      <ChamundeshwariGallery />
    </div>
  );
}
