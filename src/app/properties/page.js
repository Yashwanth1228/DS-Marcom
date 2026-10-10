import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Properties & Projects in Bangalore | DS MARCOM",
  description:
    "Explore residential, commercial, BMRDA plotted layouts, and luxury villa opportunities across Bangalore managed by DS Marcom.",
};

export default function PropertiesPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="pb-12 sm:pb-16 border-b border-[#E7E5E0]">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="bronze" className="mb-4">
              Bangalore Property Portfolio
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C]">
              Curated Developments & Strategic Locations.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Discover verified residential, plotted, and villa opportunities located along Bengaluru&apos;s most promising growth corridors.
            </p>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col bg-white border border-[#E7E5E0] overflow-hidden transition-all duration-300 hover:border-[#17191C]/30 hover:shadow-sm"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E7E5E0]">
                  <Image
                    src={project.heroImage.url}
                    alt={project.heroImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        project.status === "Completed" ? "default" : "bronze"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1.5 text-xs text-[#64748B] mb-2.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B58A4A] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <h2 className="text-xl font-bold text-[#17191C] group-hover:text-[#B58A4A] transition-colors">
                      {project.name}
                    </h2>

                    <p className="mt-3 text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#17191C] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <Link
                      href={`/properties/${project.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-[#17191C] group-hover:text-[#B58A4A] transition-colors"
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="pt-8 pb-16">
        <Container>
          <div className="bg-[#FAFAF8] border border-[#E7E5E0] p-8 sm:p-12 text-center flex flex-col items-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#17191C]">
              Looking for a Specific Bangalore Region?
            </h3>
            <p className="text-sm text-[#64748B] max-w-xl">
              We also track emerging land parcels and commercial sites across Kumbalgodu, Bidadi, and Bangalore North.
            </p>
            <Button href="/contact" variant="primary" size="md" className="mt-2">
              Speak to an Advisor
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
