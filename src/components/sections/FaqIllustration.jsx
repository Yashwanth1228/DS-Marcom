"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FaqIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] mx-auto select-none pointer-events-none">
      <svg
        viewBox="0 0 620 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Floor Contact Radial Shadow */}
          <radialGradient id="faqFloorShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B1E10" stopOpacity="0.14" />
            <stop offset="55%" stopColor="#0B1E10" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0B1E10" stopOpacity="0" />
          </radialGradient>

          {/* Letter Front Facet Soft Off-White Gradient */}
          <linearGradient id="faqLetterFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E9F0EA" />
          </linearGradient>

          {/* Letter 3D Depth Shading */}
          <linearGradient id="faqDepthBevel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4D6C7" />
            <stop offset="100%" stopColor="#A8BDAE" />
          </linearGradient>

          {/* Emerald Green Question Mark Gradient */}
          <linearGradient id="faqGreenMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#19B83A" />
            <stop offset="100%" stopColor="#0F7824" />
          </linearGradient>

          {/* Warm Amber Gold Question Mark Gradient */}
          <linearGradient id="faqGoldMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Soft Sage Question Mark Gradient */}
          <linearGradient id="faqSageMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9BD1A6" />
            <stop offset="100%" stopColor="#5FA870" />
          </linearGradient>

          {/* Character Shirt Gradient */}
          <linearGradient id="faqCharShirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#E89A08" />
          </linearGradient>
        </defs>

        {/* ========================================================= */}
        {/* FLOOR SHADOW                                              */}
        {/* ========================================================= */}
        <ellipse cx="310" cy="460" rx="270" ry="26" fill="url(#faqFloorShadow)" />

        {/* ========================================================= */}
        {/* LETTER 'F' (3D Block Sculpture)                           */}
        {/* ========================================================= */}
        <g id="letter-F">
          {/* Extrusion / 3D Bevel Side Left */}
          <path
            d="M 68 185 L 94 158 L 94 430 L 68 448 Z"
            fill="url(#faqDepthBevel)"
          />
          {/* Extrusion / 3D Bevel Top */}
          <path
            d="M 68 185 L 94 158 L 208 158 L 182 185 Z"
            fill="#D5E3D8"
          />
          {/* Extrusion / Under Top Bar */}
          <path
            d="M 182 232 L 208 205 L 140 205 L 114 232 Z"
            fill="#B6C9BA"
          />
          {/* Extrusion / Under Middle Bar */}
          <path
            d="M 162 330 L 188 303 L 140 303 L 114 330 Z"
            fill="#B6C9BA"
          />

          {/* Front Face: Main Vertical Stem */}
          <rect
            x="68"
            y="185"
            width="46"
            height="263"
            rx="5"
            fill="url(#faqLetterFront)"
            stroke="#19B83A"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          {/* Front Face: Top Horizontal Arm */}
          <rect
            x="68"
            y="185"
            width="114"
            height="47"
            rx="5"
            fill="url(#faqLetterFront)"
            stroke="#19B83A"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          {/* Front Face: Middle Horizontal Arm */}
          <rect
            x="68"
            y="283"
            width="94"
            height="47"
            rx="5"
            fill="url(#faqLetterFront)"
            stroke="#19B83A"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Screw / Rivet Accents from reference style */}
          <circle cx="91" cy="208" r="3" fill="#A8BDAE" />
          <circle cx="91" cy="425" r="3" fill="#A8BDAE" />
          <circle cx="158" cy="208" r="3" fill="#A8BDAE" />
        </g>

        {/* ========================================================= */}
        {/* LETTER 'A' (3D Block Sculpture)                           */}
        {/* ========================================================= */}
        <g id="letter-A">
          {/* 3D Depth Top & Side */}
          <path
            d="M 252 142 L 278 120 L 372 425 L 344 448 Z"
            fill="#C0D3C3"
          />
          <path
            d="M 252 142 L 278 120 L 298 120 L 272 142 Z"
            fill="#DDE7DF"
          />

          {/* Front Face of 'A' */}
          <path
            d="M 252 142 L 274 142 L 346 448 L 298 448 L 282 376 L 244 376 L 228 448 L 180 448 Z"
            fill="url(#faqLetterFront)"
            stroke="#19B83A"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Inner Cutout Triangle */}
          <polygon
            points="263,222 277,326 249,326"
            fill="#E2EBE3"
            stroke="#19B83A"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />

          {/* Screw / Rivet Accents */}
          <circle cx="263" cy="170" r="3" fill="#A8BDAE" />
          <circle cx="263" cy="355" r="3" fill="#A8BDAE" />
        </g>

        {/* ========================================================= */}
        {/* LETTER 'Q' (3D Block Sculpture)                           */}
        {/* ========================================================= */}
        <g id="letter-Q">
          {/* 3D Depth on Right Side of Q */}
          <ellipse
            cx="484"
            cy="288"
            rx="78"
            ry="98"
            fill="#BCCFC0"
          />
          {/* Q Tail 3D Depth */}
          <path
            d="M 480 375 L 560 452 L 536 458 L 460 385 Z"
            fill="#A8BDAE"
          />

          {/* Front Face Outer Ellipse */}
          <ellipse
            cx="468"
            cy="295"
            rx="76"
            ry="96"
            fill="url(#faqLetterFront)"
            stroke="#19B83A"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Front Face Inner Cutout */}
          <ellipse
            cx="468"
            cy="290"
            rx="36"
            ry="54"
            fill="#E9EFE9"
            stroke="#19B83A"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />

          {/* Front Face Q Diagonal Tail */}
          <path
            d="M 464 360 L 538 438 L 512 454 L 442 380 Z"
            fill="url(#faqLetterFront)"
            stroke="#19B83A"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Screw / Rivet Accents */}
          <circle cx="468" cy="222" r="3" fill="#A8BDAE" />
          <circle cx="516" cy="434" r="3" fill="#A8BDAE" />
        </g>

        {/* ========================================================= */}
        {/* THOUGHTFUL CHARACTER (Pondering Client / Advisor)         */}
        {/* With gentle breathing & idle floating animation           */}
        {/* ========================================================= */}
        <motion.g
          id="character"
          animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Character Drop Shadow on Floor */}
          <ellipse cx="365" cy="454" rx="34" ry="7" fill="rgba(11,30,16,0.18)" />

          {/* Legs & Navy Pants */}
          <path
            d="M 346 325 L 344 442 L 358 442 L 362 335 Z"
            fill="#1E293B"
          />
          <path
            d="M 368 335 L 372 442 L 386 442 L 382 325 Z"
            fill="#1E293B"
          />
          {/* Shoes */}
          <rect x="338" y="440" width="22" height="9" rx="4" fill="#0F7824" />
          <rect x="370" y="440" width="22" height="9" rx="4" fill="#0F7824" />

          {/* Torso & Warm Amber Tunic Shirt (Matching Reference) */}
          <path
            d="M 340 240 Q 365 235 390 240 L 386 330 Q 365 334 344 330 Z"
            fill="url(#faqCharShirt)"
          />
          {/* Shirt Collar / Neckline */}
          <path
            d="M 356 238 Q 365 246 374 238"
            stroke="#B45309"
            strokeWidth="2"
            fill="none"
          />

          {/* Left Arm folded across waist */}
          <path
            d="M 342 248 Q 330 280 348 290 L 375 288 Q 360 278 350 258 Z"
            fill="#E89A08"
          />

          {/* Right Arm raised to chin in thoughtful pose */}
          <path
            d="M 388 248 Q 396 280 376 288 L 368 280 Q 380 265 372 230 Z"
            fill="#FBBF24"
          />
          {/* Forearm & Hand touching chin */}
          <path
            d="M 374 286 L 368 232 Q 364 224 372 222 Q 378 226 378 238 Z"
            fill="#D4A373"
          />

          {/* Neck */}
          <rect x="360" y="222" width="12" height="18" fill="#D4A373" rx="4" />

          {/* Head & Face (Looking up thoughtfully) */}
          <ellipse cx="367" cy="206" rx="16" ry="19" fill="#D4A373" />
          {/* Thoughtful Eye looking up */}
          <ellipse cx="372" cy="202" rx="2.5" ry="2.5" fill="#1F2937" />
          {/* Eyebrow raised */}
          <path d="M 368 196 Q 373 194 378 197" stroke="#1F2937" strokeWidth="1.5" fill="none" />
          {/* Subtle contemplative mouth */}
          <path d="M 370 216 Q 374 216 376 215" stroke="#9A3412" strokeWidth="1.2" fill="none" />

          {/* Stylish Dark Hair flowing over shoulders */}
          <path
            d="M 353 205 Q 350 180 370 180 Q 386 182 384 205 Q 388 228 380 236 Q 374 218 368 220 Q 360 226 354 205 Z"
            fill="#111827"
          />
          {/* Front hair sweep */}
          <path
            d="M 354 195 Q 364 182 376 190 Q 368 198 358 200 Z"
            fill="#1F2937"
          />
        </motion.g>

        {/* ========================================================= */}
        {/* FLOATING ANIMATED QUESTION MARKS                          */}
        {/* Oscillating with smooth, staggered harmonic ease          */}
        {/* ========================================================= */}

        {/* 1. LARGE PRIMARY QUESTION MARK (Emerald Green) */}
        <motion.g
          id="q-mark-large"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -15, 0],
                  rotate: [-3, 5, -3],
                }
          }
          transition={{
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "420px 105px" }}
        >
          {/* Main Question Mark Hook */}
          <path
            d="M 405 92 Q 405 60 435 60 Q 462 60 460 88 Q 458 108 438 118 L 438 136"
            stroke="url(#faqGreenMark)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          {/* Question Mark Dot */}
          <circle cx="438" cy="160" r="9" fill="url(#faqGreenMark)" />
          {/* 3D Highlight on Hook */}
          <path
            d="M 414 85 Q 415 68 434 68 Q 450 68 451 84"
            stroke="#86EFAC"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </motion.g>

        {/* 2. MEDIUM QUESTION MARK (Warm Amber Gold) */}
        <motion.g
          id="q-mark-medium-gold"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -18, 0],
                  rotate: [5, -7, 5],
                }
          }
          transition={{
            duration: 4.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ transformOrigin: "325px 145px" }}
        >
          <path
            d="M 314 135 Q 314 112 334 112 Q 352 112 350 132 Q 348 148 334 156 L 334 168"
            stroke="url(#faqGoldMark)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="334" cy="186" r="6" fill="url(#faqGoldMark)" />
        </motion.g>

        {/* 3. SMALL QUESTION MARK (Forest Green) */}
        <motion.g
          id="q-mark-small-green"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -11, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ transformOrigin: "495px 150px" }}
        >
          <path
            d="M 488 144 Q 488 128 502 128 Q 515 128 514 142 Q 512 153 502 159 L 502 168"
            stroke="url(#faqSageMark)"
            strokeWidth="8.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="502" cy="180" r="4.5" fill="url(#faqSageMark)" />
        </motion.g>

        {/* 4. TINY QUESTION MARK (Soft Muted Sage) */}
        <motion.g
          id="q-mark-tiny"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -9, 0],
                  opacity: [0.55, 0.95, 0.55],
                }
          }
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.6,
          }}
          style={{ transformOrigin: "475px 85px" }}
        >
          <path
            d="M 470 82 Q 470 70 480 70 Q 490 70 489 80 Q 488 88 480 93 L 480 99"
            stroke="#94A3B8"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="480" cy="108" r="3.2" fill="#94A3B8" />
        </motion.g>

        {/* ========================================================= */}
        {/* FLOATING AMBIENT LEAF PARTICLES                           */}
        {/* ========================================================= */}
        {/* Leaf 1 (Top Left) */}
        <motion.path
          d="M 285 95 Q 295 85 292 102 Q 282 106 285 95 Z"
          fill="#19B83A"
          opacity="0.7"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                  rotate: [0, 15, 0],
                }
          }
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Leaf 2 (Right of Q) */}
        <motion.path
          d="M 545 220 Q 555 210 552 226 Q 542 230 545 220 Z"
          fill="#0F7824"
          opacity="0.6"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -8, 0],
                  x: [0, -4, 0],
                  rotate: [0, -18, 0],
                }
          }
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Leaf 3 (Bottom Left near F) */}
        <motion.path
          d="M 50 330 Q 60 320 57 336 Q 47 340 50 330 Z"
          fill="#19B83A"
          opacity="0.5"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -7, 0],
                  rotate: [-10, 10, -10],
                }
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
        />
      </svg>
    </div>
  );
}
