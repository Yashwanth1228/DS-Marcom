import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle2, HelpCircle, ArrowLeft, ArrowUpRight, Phone, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | DS MARCOM",
    };
  }

  return {
    title: `${project.name} | DS MARCOM`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} - Real Estate in Bangalore | DS MARCOM`,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage.url,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-10 sm:py-14 lg:py-20">
      {/* Breadcrumb / Back Navigation */}
      <div className="pb-8 border-b border-[#E7E5E0]">
        <Container>
          <div className="flex items-center space-x-2 text-xs text-[#64748B]">
            <Link
              href="/properties"
              className="inline-flex items-center hover:text-[#17191C] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              All Properties
            </Link>
            <span>/</span>
            <span className="text-[#17191C] font-medium">{project.name}</span>
          </div>
        </Container>
      </div>

      {/* Project Hero Header */}
      <header className="py-10 sm:py-14 bg-white border-b border-[#E7E5E0]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <Badge variant={project.status === "Completed" ? "default" : "bronze"}>
                  {project.status}
                </Badge>
                <span className="text-xs font-medium text-[#64748B] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C]">
                {project.name}
              </h1>
              <p className="text-sm sm:text-base text-[#64748B] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#B58A4A] shrink-0" />
                <span>{project.location}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="md">
                Enquire for Details
              </Button>
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2.5 border border-[#E7E5E0] hover:border-[#17191C] text-[#17191C] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#B58A4A]" />
                Direct Call
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Visual */}
      <section className="py-10 bg-[#FAFAF8]">
        <Container>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E7E5E0] border border-[#E7E5E0]">
            <Image
              src={project.heroImage.url}
              alt={project.heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {project.heroImage.isPlaceholder && (
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[10px] text-white/90 px-2 py-1">
                Visual Concept / Representative Placeholder
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Project Overview & Highlights */}
      <section className="py-14 sm:py-20 border-b border-[#E7E5E0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Overview text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-[#17191C]">
                Property Overview
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                {project.description}
              </p>

              {/* Tagline callout */}
              <div className="p-6 bg-[#FAFAF8] border-l-2 border-[#B58A4A] text-sm text-[#17191C] italic">
                &ldquo;{project.tagline}&rdquo;
              </div>

              {/* Verified Highlights */}
              <div className="pt-6">
                <h3 className="text-lg font-bold text-[#17191C] mb-4">
                  Key Verified Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-[#E7E5E0]"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B58A4A] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-[#17191C] uppercase tracking-wide">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Information Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 border border-[#E7E5E0] sticky top-24 space-y-6">
                <h3 className="text-base font-bold text-[#17191C] pb-3 border-b border-[#E7E5E0]">
                  Project Quick Facts
                </h3>

                <dl className="space-y-4 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#F0EFEA]">
                    <dt className="text-[#64748B]">Project Name</dt>
                    <dd className="font-semibold text-[#17191C]">{project.name}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EFEA]">
                    <dt className="text-[#64748B]">Development Type</dt>
                    <dd className="font-semibold text-[#17191C]">{project.category}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EFEA]">
                    <dt className="text-[#64748B]">Current Status</dt>
                    <dd className="font-semibold text-[#B58A4A]">{project.status}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F0EFEA]">
                    <dt className="text-[#64748B]">Location</dt>
                    <dd className="font-semibold text-[#17191C] text-right max-w-[60%]">
                      {project.location}
                    </dd>
                  </div>
                </dl>

                <div className="pt-2">
                  <Button href="/contact" variant="primary" className="w-full">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#FAFAF8] border-b border-[#E7E5E0]">
          <Container>
            <SectionHeading
              eyebrow="Visual Context"
              title="Project Visuals & Concepts"
              description="Representative perspectives illustrating plotted layout and regional ambiance."
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] bg-[#E7E5E0] overflow-hidden border border-[#E7E5E0]"
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  {img.isPlaceholder && (
                    <div className="absolute bottom-2 right-2 bg-black/60 text-[9px] text-white px-1.5 py-0.5">
                      Representative Placeholder
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Verified FAQ Section */}
      {project.faq && project.faq.length > 0 && (
        <section className="py-14 sm:py-20 bg-white">
          <Container size="narrow">
            <SectionHeading
              eyebrow="Official Inquiries"
              title="Frequently Asked Questions"
              description="Clear answers based directly on verified company documentation."
              className="mb-10 text-center items-center"
              align="center"
            />

            <div className="space-y-4">
              {project.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#FAFAF8] border border-[#E7E5E0]"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#B58A4A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#17191C]">
                        {item.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Closing CTA */}
      <section className="pt-6">
        <Container>
          <div className="bg-[#17191C] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Interested in {project.name}?
              </h2>
              <p className="text-sm text-[#94A3B8] mt-1">
                Reach out to DS Marcom to verify plot availability, scheduling, or documentation.
              </p>
            </div>
            <Button href="/contact" variant="bronze" size="md">
              <span>Submit Enquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </Container>
      </section>
    </article>
  );
}
