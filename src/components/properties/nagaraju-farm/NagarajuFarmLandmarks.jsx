"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Compass,
  Building2,
  GraduationCap,
  Car,
  Route,
  Layers,
  Search,
  Plus,
  Minus,
} from "lucide-react";

export default function NagarajuFarmLandmarks() {
  const [activeId, setActiveId] = useState("bisleri"); // Default to closest landmark (Bisleri 1.5 km)
  const [mapType, setMapType] = useState("map");

  const landmarks = [
    {
      id: "bisleri",
      name: "Bisleri Factory",
      distance: "1.5 km",
      number: "01",
      category: "Industrial Landmark",
      time: "4 mins",
      x: 510,
      y: 200,
      badgeX: 425,
      badgeY: 165,
      badgeW: 165,
      path: "M 360 240 Q 435 220 510 200",
    },
    {
      id: "bgs",
      name: "BGS College",
      distance: "4 km",
      number: "02",
      category: "Education Node",
      time: "8 mins",
      x: 690,
      y: 80,
      badgeX: 615,
      badgeY: 45,
      badgeW: 155,
      path: "M 360 240 Q 525 160 690 80",
    },
    {
      id: "toyota",
      name: "Bidadi Toyota",
      distance: "5 km",
      number: "03",
      category: "Automotive Hub",
      time: "10 mins",
      x: 320,
      y: 405,
      badgeX: 235,
      badgeY: 370,
      badgeW: 165,
      path: "M 360 240 Q 340 320 320 405",
    },
    {
      id: "highway",
      name: "Bengaluru–Mysuru Hwy",
      distance: "6 km",
      number: "04",
      category: "Arterial Expressway (NH 275)",
      time: "12 mins",
      x: 555,
      y: 260,
      badgeX: 470,
      badgeY: 225,
      badgeW: 195,
      path: "M 360 240 Q 460 250 555 260",
    },
    {
      id: "kanakapura",
      name: "Kanakapura Road",
      distance: "7 km",
      number: "05",
      category: "Connecting Corridor",
      time: "15 mins",
      x: 810,
      y: 310,
      badgeX: 720,
      badgeY: 275,
      badgeW: 180,
      path: "M 360 240 Q 585 275 810 310",
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 lg:py-10 bg-[#F7F8F5] text-[#0B0D0C] border-t border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header — Clean & Screen-Fit */}
        <div className="space-y-0.5 mb-4 sm:mb-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#063B20] block">
            REGIONAL ACCESSIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B0D0C] tracking-tight">
            Connected to the Places That Matter.
          </h2>
        </div>

        {/* Integrated Side-by-Side Google Maps Dashboard */}
        <div className="rounded-3xl bg-white border border-stone-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column (5 cols): Interactive Destinations List */}
          <div className="lg:col-span-5 p-4 sm:p-5 lg:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/80 bg-white">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#19B83A]" />
                  <span>Key Regional Destinations</span>
                </span>
                <span className="text-[10px] font-bold text-[#19B83A] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  5 Verified Nodes
                </span>
              </div>

              {/* 5 Destination Cards */}
              <div className="space-y-1.5">
                {landmarks.map((lm) => {
                  const isActive = activeId === lm.id;
                  return (
                    <div
                      key={lm.id}
                      onMouseEnter={() => setActiveId(lm.id)}
                      onClick={() => setActiveId(lm.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                        isActive
                          ? "bg-[#063B20] text-white border-[#063B20] shadow-md translate-x-1"
                          : "bg-stone-50/70 hover:bg-stone-100 border-stone-200/70 text-stone-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isActive
                              ? "bg-[#19B83A] text-white"
                              : "bg-white text-stone-600 border border-stone-200"
                          }`}
                        >
                          {lm.number}
                        </span>
                        <div className="min-w-0">
                          <h4 className={`text-xs font-bold truncate ${isActive ? "text-white" : "text-stone-900"}`}>
                            {lm.name}
                          </h4>
                          <span className={`text-[10px] block truncate ${isActive ? "text-stone-300" : "text-stone-500"}`}>
                            {lm.category} · {lm.time}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span
                          className={`text-xs font-extrabold px-2.5 py-1 rounded-full inline-block ${
                            isActive
                              ? "bg-white/15 text-emerald-300 border border-white/20"
                              : "bg-emerald-50 text-[#063B20] border border-emerald-200"
                          }`}
                        >
                          {lm.distance}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Origin Info */}
            <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#EA4335]" />
                <span>Origin: Nagaraju Farm Land, Thippuru</span>
              </span>
              <span className="text-stone-400 text-[10px]">Google Map View</span>
            </div>
          </div>

          {/* Right Column (7 cols): Authentic Google Maps Cartography Canvas */}
          <div className="lg:col-span-7 relative bg-[#F2EFE9] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden select-none">
            {/* 1. Authentic Google Map Background Image */}
            <Image
              src="/images/projects/nagaraju-farm/google-map-background.jpg"
              alt="Google Maps View of Thippuru, Kumbalagudu, Bengaluru"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />

            {/* 2. Google Maps Interactive Overlay Canvas */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 1000 560"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Google Maps Drop Shadows */}
                  <filter id="gmapShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.25" />
                  </filter>
                  <filter id="pinShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.35" />
                  </filter>
                  <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" />
                  </filter>
                </defs>

                {/* Navigation Connecting Routes (Google Maps Blue Navigation Line) */}
                {landmarks.map((lm) => {
                  const isActive = activeId === lm.id;
                  return (
                    <g key={`route-${lm.id}`}>
                      {/* Active Blue Route Glow */}
                      {isActive && (
                        <path
                          d={lm.path}
                          fill="none"
                          stroke="#4285F4"
                          strokeWidth="10"
                          strokeOpacity="0.4"
                          strokeLinecap="round"
                          filter="url(#routeGlow)"
                        />
                      )}

                      {/* Main Route Line */}
                      <path
                        d={lm.path}
                        fill="none"
                        stroke={isActive ? "#1A73E8" : "#4285F4"}
                        strokeWidth={isActive ? "4.5" : "2"}
                        strokeDasharray={isActive ? "none" : "4 4"}
                        strokeOpacity={isActive ? "1" : "0.5"}
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}

                {/* 5 Destination Landmark Google Maps Pins */}
                {landmarks.map((lm) => {
                  const isActive = activeId === lm.id;
                  return (
                    <g
                      key={`gpin-${lm.id}`}
                      onMouseEnter={() => setActiveId(lm.id)}
                      onClick={() => setActiveId(lm.id)}
                      className="cursor-pointer"
                    >
                      {/* Destination Pin Base Shadow */}
                      <ellipse cx={lm.x} cy={lm.y + 2} rx="6" ry="2.5" fill="rgba(0,0,0,0.3)" />

                      {/* Destination Pin (Google Maps Blue/Dark Marker) */}
                      <g filter="url(#pinShadow)">
                        <circle
                          cx={lm.x}
                          cy={lm.y - 10}
                          r={isActive ? "11" : "9"}
                          fill={isActive ? "#1A73E8" : "#FFFFFF"}
                          stroke={isActive ? "#FFFFFF" : "#1A73E8"}
                          strokeWidth="2.5"
                          className="transition-all duration-200"
                        />
                        <circle
                          cx={lm.x}
                          cy={lm.y - 10}
                          r="4"
                          fill={isActive ? "#FFFFFF" : "#1A73E8"}
                        />
                      </g>

                      {/* Google Maps Clean Callout Pill Badge */}
                      <g filter="url(#gmapShadow)">
                        <rect
                          x={lm.badgeX}
                          y={lm.badgeY}
                          width={lm.badgeW}
                          height="24"
                          rx="12"
                          fill={isActive ? "#1A73E8" : "#FFFFFF"}
                          stroke={isActive ? "#1557B0" : "#DADCE0"}
                          strokeWidth={isActive ? "1.5" : "1"}
                          className="transition-colors duration-200"
                        />

                        {/* Number Badge */}
                        <circle
                          cx={lm.badgeX + 12}
                          cy={lm.badgeY + 12}
                          r="7"
                          fill={isActive ? "#FFFFFF" : "#E8F0FE"}
                        />
                        <text
                          x={lm.badgeX + 12}
                          y={lm.badgeY + 14.5}
                          textAnchor="middle"
                          fill={isActive ? "#1A73E8" : "#1A73E8"}
                          fontSize="7.5"
                          fontWeight="bold"
                          fontFamily="Roboto, sans-serif"
                        >
                          {lm.number}
                        </text>

                        {/* Text Label & Distance */}
                        <text
                          x={lm.badgeX + 24}
                          y={lm.badgeY + 15}
                          fill={isActive ? "#FFFFFF" : "#202124"}
                          fontSize="8.5"
                          fontWeight="bold"
                          fontFamily="Roboto, sans-serif"
                        >
                          {lm.name} ·{" "}
                          <tspan fill={isActive ? "#E8F0FE" : "#188038"} fontWeight="bold">
                            {lm.distance}
                          </tspan>
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Central Site Origin Marker (Nagaraju Farm Land, Thippuru) */}
                <g id="origin-pin">
                  {/* Radar Ripple */}
                  <circle cx="360" cy="240" r="24" fill="#EA4335" fillOpacity="0.12" />
                  <circle cx="360" cy="240" r="14" fill="#EA4335" fillOpacity="0.25" />

                  {/* Teardrop Ground Shadow */}
                  <ellipse cx="360" cy="243" rx="8" ry="3" fill="rgba(0,0,0,0.35)" />

                  {/* Iconic Google Maps Red Teardrop Marker */}
                  <g filter="url(#pinShadow)">
                    <path
                      d="M 360 240 C 350 228, 342 214, 342 201 C 342 191 350 183 360 183 C 370 183 378 191 378 201 C 378 214, 370 228, 360 240 Z"
                      fill="#EA4335"
                    />
                    <circle cx="360" cy="201" r="5" fill="#FFFFFF" />
                  </g>

                  {/* Google Maps Authentic Info Card */}
                  <g filter="url(#gmapShadow)">
                    {/* Small Pointer Triangle */}
                    <path d="M 360 180 L 354 172 L 366 172 Z" fill="#FFFFFF" />

                    {/* Card Body */}
                    <rect
                      x="255"
                      y="128"
                      width="210"
                      height="44"
                      rx="8"
                      fill="#FFFFFF"
                      stroke="#E8EAED"
                      strokeWidth="1"
                    />

                    {/* Green Star Icon / Category Pill */}
                    <circle cx="272" cy="144" r="8" fill="#E6F4EA" />
                    <circle cx="272" cy="144" r="3.5" fill="#188038" />

                    {/* Title */}
                    <text
                      x="286"
                      y="144"
                      fill="#202124"
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="Roboto, sans-serif"
                    >
                      Nagaraju Farm Land
                    </text>

                    {/* Subtitle / Details */}
                    <text
                      x="286"
                      y="159"
                      fill="#5F6368"
                      fontSize="8.5"
                      fontFamily="Roboto, sans-serif"
                    >
                      Site Origin · Thippuru, near Kumbalagudu
                    </text>
                  </g>
                </g>
              </svg>
            </div>

            {/* 3. Authentic Google Maps UI Controls */}
            {/* Top-Left Search Pill */}
            <div className="absolute top-3 left-3 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white shadow-md border border-stone-200/80 text-xs text-stone-700">
              <Search className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-medium text-[11px]">Thippuru, Kumbalagudu, Bengaluru</span>
            </div>

            {/* Top-Right Map / Satellite Controls */}
            <div className="absolute top-3 right-3 z-10 flex items-center rounded-lg bg-white shadow-md border border-stone-200/80 overflow-hidden text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setMapType("map")}
                className={`px-2.5 py-1 transition-colors ${
                  mapType === "map" ? "bg-stone-100 text-stone-900 font-bold" : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                Map
              </button>
              <button
                type="button"
                onClick={() => setMapType("satellite")}
                className={`px-2.5 py-1 transition-colors border-l border-stone-200 ${
                  mapType === "satellite" ? "bg-stone-100 text-stone-900 font-bold" : "text-stone-600 hover:bg-stone-50"
                }`}
              >
                Satellite
              </button>
            </div>

            {/* Bottom-Right Zoom Controls */}
            <div className="absolute bottom-6 right-3 z-10 flex flex-col rounded-lg bg-white shadow-md border border-stone-200/80 overflow-hidden text-stone-700">
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center hover:bg-stone-50 border-b border-stone-200 transition-colors"
                aria-label="Zoom in"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="w-7 h-7 flex items-center justify-center hover:bg-stone-50 transition-colors"
                aria-label="Zoom out"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom-Left Google Watermark & Scale */}
            <div className="absolute bottom-2 left-3 z-10 flex items-center gap-3 text-[10px] text-stone-600/90 pointer-events-none select-none">
              <span className="font-bold tracking-tight text-stone-800 text-xs">
                Google
              </span>
              <span className="hidden sm:inline text-stone-500">
                Map data ©2026 Google
              </span>
              <span className="hidden sm:inline border-b border-stone-500 px-2 font-mono text-[9px]">
                2 km
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
