import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Compass,
  FileText,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AboutOverviewShowcase from "@/components/about/AboutOverviewShowcase";
import AboutPortfoliosShowcase from "@/components/about/AboutPortfoliosShowcase";
import aboutHeroImg from "@/../public/images/about/about-hero.jpg";

export const metadata = {
  title: "About Us | DS MARCOM Real Estate Advisory Bangalore",
  description:
    "Learn about DS Marcom's structured approach to helping prospective buyers explore residential plots and property developments across Bangalore with clear, verified project details.",
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#FAF9F5] min-h-screen">
      {/* =========================================================================
          1. TOP HERO BANNER: Corporate Boardroom Meeting (about-hero.jpg)
          Matching Reference Image Exactly
          ========================================================================= */}
      <section className="relative w-full h-[260px] sm:h-[310px] lg:h-[360px] overflow-hidden bg-slate-900 flex items-center justify-center">
        {/* Background Photo: Professional Corporate Office Meeting Reviewing Architectural Plans */}
        <div className="absolute inset-0">
          <Image
            src={aboutHeroImg}
            alt="DS MARCOM Real Estate Corporate Advisory Leadership"
            fill
            sizes="100vw"
            priority
            loading="eager"
            className="object-cover"
            style={{ objectPosition: "50% 28%" }}
          />
          {/* Light translucent overlay (only 30% darkness) so the executive team and blueprints are 100% clearly visible */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        </div>

        {/* Hero Centered Content: Clean and Bold matching reference image */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            About us
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. CORE POSITIONING & 3 ADVISORY FOCUS PANELS
          ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-10 lg:p-12 overflow-hidden">
            {/* Top Row: Narrative on Left & Creative Asymmetric Showcase on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-14 border-b border-slate-100">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19B83A]/10 text-[#063B20] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#19B83A]" />
                  Company Overview
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Real Estate Opportunities.{" "}
                  <span className="text-[#19B83A] block">
                    Informed Property Decisions.
                  </span>
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3">
                  <p>
                    DS Marcom helps prospective buyers explore property opportunities across Bangalore. From residential plots to selected property developments, our focus is on presenting available options clearly so buyers can understand the location, project details, and relevant information before making a decision.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Navigating the Bangalore real estate market requires clarity on location viability, developer disclosures, and physical connectivity. We present verified project information clearly, helping buyers evaluate residential opportunities that fit their requirements.
                  </p>
                </div>

                {/* Key Real Estate Value Markers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 group/badge hover:bg-emerald-50/50 hover:border-emerald-200 transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-[#19B83A]/10 text-[#19B83A] flex items-center justify-center shrink-0 group-hover/badge:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Demarcated Villa Plots</p>
                      <p className="text-[11px] text-slate-500">Ready for construction</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 group/badge hover:bg-emerald-50/50 hover:border-emerald-200 transition-all duration-300">
                    <div className="w-7 h-7 rounded-lg bg-[#063B20]/10 text-[#063B20] flex items-center justify-center shrink-0 group-hover/badge:scale-110 transition-transform">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Bangalore Growth Belts</p>
                      <p className="text-[11px] text-slate-500">Mysore Rd & North Hubs</p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <Link
                    href="/properties"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-semibold text-sm shadow-md shadow-[#19B83A]/25 hover:shadow-lg hover:shadow-[#19B83A]/35 transition-all duration-300 group"
                  >
                    <span>Explore Available Properties</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Creative Asymmetric Visual Showcase */}
              <div className="lg:col-span-6 pt-4 lg:pt-0">
                <AboutOverviewShowcase />
              </div>
            </div>

            {/* 3 Core Property Services Focus Panels with Refined Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 sm:pt-12">
              {/* Panel 1 */}
              <div className="group bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/70 hover:border-[#19B83A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-[#19B83A] text-white flex items-center justify-center shrink-0 mb-4 shadow-md shadow-[#19B83A]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#19B83A] transition-colors">
                  Residential Property Options
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discovering plotted communities, residential layouts, and emerging developments planned for sustainable living and home construction.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#19B83A] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Panel 2 */}
              <div className="group bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/70 hover:border-[#19B83A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-[#063B20] text-white flex items-center justify-center shrink-0 mb-4 shadow-md shadow-[#063B20]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Compass className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#19B83A] transition-colors">
                  Bangalore Location Insights
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluating growth corridors along key arterial highways, upcoming transit lines, and peripheral hubs to assess location suitability.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#19B83A] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Panel 3 */}
              <div className="group bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/70 hover:border-[#19B83A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-[#19B83A] text-white flex items-center justify-center shrink-0 mb-4 shadow-md shadow-[#19B83A]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#19B83A] transition-colors">
                  Clear Project Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Organizing and presenting project disclosures, layout details, and developer-provided documentation for thorough buyer review.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#19B83A] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. OUR STRUCTURED APPROACH TO PROPERTY DISCOVERY (Restored Clean Layout)
          ========================================================================= */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Planned Residential Plotted Layout Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] w-full bg-slate-100">
                <Image
                  src="/images/about/about-development.jpg"
                  alt="Planned Residential Plotted Development in Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Informative Floating Card */}
              <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200/80 max-w-[280px]">
                <p className="text-xs font-bold text-slate-900">
                  On-Ground Verification
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Walk the layout and inspect physical surroundings before making your decision.
                </p>
              </div>
            </div>

            {/* Right Column: Narrative & Company Information Panels */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-serif italic text-[#19B83A] text-base sm:text-lg font-normal tracking-wide block">
                  Our Approach
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mt-1 leading-tight">
                  A Structured Approach to Property Discovery
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  Choosing the right real estate opportunity requires accurate context. DS Marcom assists prospective buyers through structured property evaluations, providing layout details, developer disclosures, and regional connectivity analysis.
                </p>
              </div>

              {/* 4 Company Information Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Building2 className="w-4 h-4 text-[#19B83A]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Residential Portfolios
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Access to curated residential plots and plotted layouts designed for villa construction.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Compass className="w-4 h-4 text-[#063B20]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Corridor Analysis
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Insight into Mysore Road, Kumbalgodu, and Bangalore North growth vectors.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FileText className="w-4 h-4 text-[#19B83A]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      Project Information
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reviewing developer-provided documentation and layout specifications with transparency.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#063B20]" />
                    <h3 className="text-sm font-bold text-slate-900">
                      On-Ground Visits
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Facilitating site walkthroughs to inspect physical surroundings, road access, and plot boundaries.
                  </p>
                </div>
              </div>

              {/* Clear Checklist of Services */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#19B83A]/15 text-[#19B83A] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Transparent presentation of developer-provided site specifications
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#19B83A]/15 text-[#19B83A] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Clarity on layout approvals and relevant municipal references
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#19B83A]/15 text-[#19B83A] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    Coordinated site inspections and physical boundary walkthroughs
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-semibold text-sm shadow-md shadow-[#19B83A]/25 transition-all"
                >
                  <span>Explore Available Properties</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. DIVERSE REAL ESTATE PORTFOLIOS (Interactive Showcase)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#FAF9F5]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="font-serif italic text-[#19B83A] text-base sm:text-lg font-normal tracking-wide block">
              Property Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Diverse Real Estate Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              Explore residential plots, plotted communities, and selected property developments positioned across key Bangalore growth corridors.
            </p>
          </div>

          <AboutPortfoliosShowcase />
        </Container>
      </section>

      {/* =========================================================================
          6. OUR CORE VALUES: TRANSPARENCY & LOCATION FOCUS
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Values Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-serif italic text-[#19B83A] text-base sm:text-lg font-normal tracking-wide block">
                  Why DS MARCOM
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mt-1 leading-tight">
                  Guided by Clarity, Grounded in Local Knowledge
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  We believe property decisions should be straightforward. Our advisory approach centers on transparent information and dependable local context.
                </p>
              </div>

              {/* 3 Value Pillars with Icons */}
              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#19B83A]/10 text-[#19B83A] border border-[#19B83A]/25 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Objective Information First
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      We present project details, layout specifications, and developer disclosures as verified, giving buyers an unvarnished foundation for evaluation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#19B83A]/10 text-[#19B83A] border border-[#19B83A]/25 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Location-Centric Evaluation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      We analyze connectivity, infrastructure tailwinds, and neighborhood amenities to assess real location viability for buyers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#19B83A]/10 text-[#19B83A] border border-[#19B83A]/25 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Coordinated Site Walkthroughs
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      We coordinate on-ground site visits, enabling prospective buyers to walk the layout, review boundary markers, and experience the setting firsthand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] w-full">
                <Image
                  src="/images/approach/stage2-site-visit.jpg"
                  alt="On-ground property site visit and boundary inspection in Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Informative Floating Card */}
              <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200/80 max-w-[280px]">
                <p className="text-xs font-bold text-slate-900">
                  On-Ground Verification
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Walk the layout and inspect physical surroundings before making your decision.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. BOTTOM PANORAMIC BANNER: READY TO EXPLORE REAL ESTATE
          Authentic Bangalore Sunset Skyline, Balanced Gradient & Visible CTA Buttons
          ========================================================================= */}
      <section className="relative w-full py-14 sm:py-16 lg:py-20 overflow-hidden bg-slate-900 text-white">
        {/* Background Authentic Real Sunset Photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/about-cta-sunset.jpg"
            alt="Bangalore Skyline and Arterial Highway Corridor at Sunset"
            fill
            sizes="100vw"
            priority
            className="object-cover object-right md:object-center"
          />
          {/* Lighter translucent scrim: Left side is NOT too dark, city details remain clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-5">
            {/* Top Brand Header matching Reference Image */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-md">
                <Image
                  src="/images/brand/ds-marcom-emblem.png"
                  alt="DS Marcom"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-7 sm:h-8 w-[1.5px] bg-white/40" />
              <div>
                <span className="text-sm sm:text-base font-bold tracking-[0.25em] text-white uppercase block leading-none drop-shadow-sm">
                  DS MARCOM
                </span>
                <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.3em] text-slate-200 uppercase block mt-1 drop-shadow-sm">
                  PROPERTIES &nbsp;/&nbsp; ADVISORY &nbsp;/&nbsp; GROWTH
                </span>
              </div>
            </div>

            {/* Main 2-Line Headline matching Reference Image */}
            <div className="space-y-0.5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                GROW FASTER.
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white uppercase tracking-tight leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                WORK SMARTER.
              </p>
            </div>

            {/* Bottom Slashed Sub-Tags matching Reference Image */}
            <div className="pt-0.5">
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.32em] text-slate-200 uppercase drop-shadow-sm">
                STRATEGY &nbsp;/&nbsp; PROPERTIES &nbsp;/&nbsp; ADVISORY &nbsp;/&nbsp; GROWTH
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#19B83A]/30 hover:shadow-xl hover:shadow-[#19B83A]/40 transition-all duration-300 group/btn"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/30 backdrop-blur-md transition-all duration-300"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
