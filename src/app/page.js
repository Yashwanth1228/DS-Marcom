import HeroShell from "@/components/sections/HeroShell";
import StatsShell from "@/components/sections/StatsShell";
import FeaturedProjectsShell from "@/components/sections/FeaturedProjectsShell";
import WhyChooseUsShell from "@/components/sections/WhyChooseUsShell";
import LocationsShell from "@/components/sections/LocationsShell";
import TestimonialsShell from "@/components/sections/TestimonialsShell";
import CtaShell from "@/components/sections/CtaShell";

export const metadata = {
  title: "Real Estate Built Around Your Future | DS MARCOM",
  description:
    "Explore thoughtfully selected residential, commercial and plotted property opportunities across promising locations with DS MARCOM.",
};

export default function HomePage() {
  return (
    <>
      <HeroShell />
      <StatsShell />
      <FeaturedProjectsShell />
      <WhyChooseUsShell />
      <LocationsShell />
      <TestimonialsShell />
      <CtaShell />
    </>
  );
}
