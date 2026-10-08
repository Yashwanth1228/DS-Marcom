import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Property & Location Gallery | DS MARCOM",
  description:
    "Editorial visual gallery of Bangalore plotted developments, weekend villa environments, and regional landscapes.",
};

const galleryItems = [
  {
    title: "Nagaraju Farm - Landscape & Plots",
    location: "Near Kumbalgodu, Mysore Road",
    category: "Farm Plots",
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop",
    aspect: "col-span-12 md:col-span-8 aspect-[16/10]",
    isPlaceholder: true,
  },
  {
    title: "Weekend Retreat Architecture",
    location: "Mysore Road Outskirts",
    category: "Villa Concept",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-12 md:col-span-4 aspect-[4/5]",
    isPlaceholder: true,
  },
  {
    title: "CRS Enclave - Layout & Access",
    location: "Bengaluru",
    category: "BMRDA Development",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    aspect: "col-span-12 md:col-span-4 aspect-[4/5]",
    isPlaceholder: true,
  },
  {
    title: "Organic Farm Living Concept",
    location: "South-West Bengaluru",
    category: "Agrarian Plots",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
    aspect: "col-span-12 md:col-span-8 aspect-[16/10]",
    isPlaceholder: true,
  },
  {
    title: "Royal Homes - Delivered Living",
    location: "Bengaluru",
    category: "Completed Project",
    url: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop",
    aspect: "col-span-12 md:col-span-6 aspect-[16/11]",
    isPlaceholder: true,
  },
  {
    title: "Bangalore North Growth Belt",
    location: "Dasanapura / Nelamangala",
    category: "Strategic Opportunity",
    url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop",
    aspect: "col-span-12 md:col-span-6 aspect-[16/11]",
    isPlaceholder: true,
  },
];

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <section className="pb-12 sm:pb-16 border-b border-[#E7E5E0]">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="bronze" className="mb-4">
              Visual Archive
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C]">
              Editorial Perspectives & Landscapes.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Visual impressions and contextual imagery spanning DS Marcom&apos;s plotted layouts, farm plots, and Bangalore suburban environments.
            </p>
          </div>
        </Container>
      </section>

      {/* Editorial Masonry Grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-[#E7E5E0] border border-[#E7E5E0] ${item.aspect}`}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle scrim gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17191C]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Information Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B58A4A]">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold mt-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    {item.location}
                  </p>
                </div>

                {item.isPlaceholder && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-[9px] text-white/90 px-2 py-0.5">
                    Representative Imagery
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Inquiry Box */}
      <section className="pt-4 pb-16">
        <Container size="narrow">
          <div className="bg-[#172033] text-white p-8 sm:p-10 text-center flex flex-col items-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Require High-Resolution Master Layouts?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-md">
              Contact our office for official site layouts, survey sketches, and location map documents.
            </p>
            <Button href="/contact" variant="bronze" size="md">
              Request Documentation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
