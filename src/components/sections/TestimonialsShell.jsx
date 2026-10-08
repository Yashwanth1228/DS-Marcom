import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsShell() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E7E5E0]">
      <Container>
        <SectionHeading
          eyebrow="Client Experiences"
          title="Trust Earned Across Bangalore"
          description="Direct reflections from property owners and investors who partnered with DS Marcom for their land and villa purchases."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 bg-[#FAFAF8] border border-[#E7E5E0] relative flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#B58A4A]/30 mb-6 shrink-0" />
              
              <p className="text-base sm:text-lg text-[#17191C] font-normal leading-relaxed italic mb-8">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-[#E7E5E0] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#17191C]">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">{item.role}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#B58A4A] tracking-wider uppercase">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
