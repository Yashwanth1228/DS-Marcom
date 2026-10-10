import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Compass,
  FileText,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Search,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
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
      <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden bg-slate-900 flex items-center justify-center">
        {/* Background Photo: Professional Corporate Office Meeting Reviewing Architectural Plans */}
        <div className="absolute inset-0">
          <Image
            src={aboutHeroImg}
            alt="DS MARCOM Real Estate Corporate Advisory Leadership"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Light translucent overlay (only 30% darkness) so the executive team and blueprints are 100% clearly visible */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        </div>

        {/* Hero Centered Content: Clean and Bold matching reference image */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            About us
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. CORE POSITIONING & 3 ADVISORY FOCUS PANELS
          ========================================================================= */}
      <section className="relative z-20 -mt-16 sm:-mt-20 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-10 lg:p-12">
            {/* Top Row: Eyebrow + Exact Headline & Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-8 border-b border-slate-100">
              <div className="lg:col-span-6 space-y-2">
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
              </div>
              <div className="lg:col-span-6 text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pt-1">
                <p>
                  DS Marcom helps prospective buyers explore property opportunities across Bangalore. From residential plots to selected property developments, our focus is on presenting available options clearly so buyers can understand the location, project details, and relevant information before making a decision.
                </p>
                <p className="text-xs sm:text-sm text-slate-500">
                  Navigating the Bangalore real estate market requires clarity on location viability, developer disclosures, and physical connectivity. We present verified project information clearly, helping buyers evaluate residential opportunities that fit their requirements.
                </p>
              </div>
            </div>

            {/* 3 Core Property Services Focus Panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {/* Panel 1 */}
              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/70 hover:border-[#19B83A]/40 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-[#19B83A] text-white flex items-center justify-center shrink-0 mb-4 shadow-md shadow-[#19B83A]/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Residential Property Options
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Discovering plotted communities, residential layouts, and emerging developments planned for sustainable living and home construction.
                </p>
              </div>

              {/* Panel 2 */}
              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/70 hover:border-[#19B83A]/40 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-[#063B20] text-white flex items-center justify-center shrink-0 mb-4 shadow-md shadow-[#063B20]/20 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Bangalore Location Insights
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluating growth corridors along key arterial highways, upcoming transit lines, and peripheral hubs to assess location suitability.
                </p>
              </div>

              {/* Panel 3 */}
              <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-slate-200/70 hover:border-[#19B83A]/40 transition-all duration-300 hover:shadow-md group">
                <div className="w-12 h-12 rounded-full bg-[#19B83A] text-white flex items-center justify-center shrink-0 mb-4 shadow-md shadow-[#19B83A]/20 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Clear Project Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Organizing and presenting project disclosures, layout details, and developer-provided documentation for thorough buyer review.
                </p>
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
          4. PANORAMIC MID BANNER: PROPERTY PERSPECTIVE
          ========================================================================= */}
      <section className="relative w-full py-20 sm:py-24 overflow-hidden bg-[#063B20]">
        <div className="absolute inset-0">
          <Image
            src={aboutHeroImg}
            alt="Bangalore Real Estate Skyline Horizon"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#063B20] via-[#063B20]/90 to-[#063B20]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Property Discovery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Connecting Buyers with Bangalore&apos;s Growth Vectors
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            From established suburban neighborhoods to emerging transit corridors, our objective is to ensure buyers have the context and verified project details needed to make confident real estate decisions.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-semibold text-sm shadow-lg shadow-[#19B83A]/30 transition-all"
            >
              <Search className="w-4 h-4" />
              <span>Browse Developments</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-[#19B83A]" />
              <span>Consult With Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHAT WE HELP YOU EXPLORE: BROADER REAL ESTATE PORTFOLIO
          ========================================================================= */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-serif italic text-[#19B83A] text-base sm:text-lg font-normal tracking-wide block">
              Property Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Diverse Real Estate Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Explore residential plots, plotted communities, and selected property developments positioned across key Bangalore corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Residential Plotted Layouts */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#19B83A]/10 text-[#19B83A] flex items-center justify-center mb-5 group-hover:bg-[#19B83A] group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#19B83A]">
                  Plotted Communities
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Residential Plots
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Strategically planned residential layouts offering road connectivity, demarcated boundaries, and utility access, suitable for immediate or phased villa construction.
                </p>
                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Layout documentation and site plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Clear access roads & infrastructure provisions</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/properties/crs-enclave"
                  className="text-xs font-bold text-[#19B83A] hover:text-[#159A30] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>View Plotted Layouts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2: Residential Property Developments */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#063B20]/10 text-[#063B20] flex items-center justify-center mb-5 group-hover:bg-[#063B20] group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#063B20]">
                  Gated Enclaves
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Property Developments
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Curated gated communities and residential enclaves positioned within accessible commuting range of Bangalore&apos;s commercial hubs and educational centers.
                </p>
                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Established and ongoing residential communities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Verified project disclosures and specifications</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/properties/royal-homes"
                  className="text-xs font-bold text-[#063B20] hover:text-[#19B83A] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>View Developments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3: Emerging Corridors & Land Opportunities */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#19B83A]/10 text-[#19B83A] flex items-center justify-center mb-5 group-hover:bg-[#19B83A] group-hover:text-white transition-colors">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#19B83A]">
                  Strategic Growth Belts
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                  Corridor Opportunities
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Emerging locations along Bangalore North (Dasanapura / Nelamangala) and Mysore Road offering long-term property suitability and highway access.
                </p>
                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Regional infrastructure connectivity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Individual project information for buyer review</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/properties/dasanapura-nelamangala-development"
                  className="text-xs font-bold text-[#19B83A] hover:text-[#159A30] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Corridor Land</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
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
          7. BOTTOM CTA SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="bg-[#063B20] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#19B83A]">
                Begin Your Property Search
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Ready to Explore Real Estate in Bangalore?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Connect with the DS Marcom team to review current property listings, examine layout documentation, or arrange an on-ground site visit.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-sm shadow-lg shadow-[#19B83A]/30 transition-all uppercase tracking-wider"
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#19B83A]" />
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
