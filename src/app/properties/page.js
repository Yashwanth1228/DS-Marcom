import Image from "next/image";
import Container from "@/components/ui/Container";
import PropertiesDirectory from "@/components/properties/PropertiesDirectory";
import propertiesHeroImg from "@/../public/images/about/about-development.jpg";

export const metadata = {
  title: "Properties & Projects in Bangalore | DS MARCOM Real Estate Advisory",
  description:
    "Explore Bangalore's verified residential villa plots, BMRDA approved layouts, and growth corridor developments guided by DS Marcom.",
};

export default function PropertiesPage() {
  return (
    <div className="relative bg-[#FAF9F5] min-h-screen">
      {/* =========================================================================
          1. TOP HERO BANNER: Matching About & Gallery Page Format
          Uses authentic real photography of master-planned Bangalore residential enclave
          ========================================================================= */}
      <section className="relative w-full h-[260px] sm:h-[310px] lg:h-[360px] overflow-hidden bg-slate-900 flex items-center justify-center">
        {/* Background Photo: Real Bangalore Plotted Community & Villas */}
        <div className="absolute inset-0">
          <Image
            src={propertiesHeroImg}
            alt="DS MARCOM Real Estate Properties & Plotted Layouts in Bangalore"
            fill
            sizes="100vw"
            priority
            loading="eager"
            className="object-cover"
            style={{ objectPosition: "50% 36%" }}
          />
          {/* Subtle translucent scrim (30% darkness) */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
        </div>

        {/* Hero Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Properties
          </h1>
        </div>
      </section>

      {/* =========================================================================
          2. OVERLAPPING CONTAINER CARD HOUSING THE DIRECTORY
          Signature card layout with negative top margin
          ========================================================================= */}
      <section className="relative z-20 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <Container>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-10 lg:p-12 overflow-hidden">
            <PropertiesDirectory />
          </div>
        </Container>
      </section>
    </div>
  );
}
