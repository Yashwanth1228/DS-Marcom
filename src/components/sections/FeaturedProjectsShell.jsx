import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjectsShell() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Portfolio Overview"
            title="Featured Real Estate Opportunities"
            description="Strategically positioned residential, commercial, and plotted developments across Bangalore's premier corridors."
          />
          <Button href="/properties" variant="outline" className="shrink-0 self-start md:self-auto">
            <span>View All Properties</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col bg-white border border-[#E7E5E0] overflow-hidden transition-all duration-300 hover:border-[#17191C]/30 hover:shadow-sm"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E7E5E0]">
                <Image
                  src={project.heroImage.url}
                  alt={project.heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "Completed" ? "default" : "bronze"}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 text-xs text-[#64748B] mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B58A4A] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17191C] group-hover:text-[#B58A4A] transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Footer with CTA */}
                <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#17191C] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <Link
                    href={`/properties/${project.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-[#17191C] group-hover:text-[#B58A4A] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
