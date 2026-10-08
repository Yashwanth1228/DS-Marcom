import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaShell() {
  return (
    <section className="py-20 sm:py-24 bg-[#172033] text-white relative overflow-hidden">
      {/* Restrained architectural grid overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      <Container size="narrow">
        <div className="relative text-center flex flex-col items-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B58A4A]">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Ready to Secure Your Strategic Property in Bangalore?
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
            Connect with DS Marcom to discuss upcoming farm plots, residential layouts, or BMRDA-approved development opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button href="/contact" size="lg" variant="bronze" className="w-full sm:w-auto">
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              href="/properties"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white/40"
            >
              View Properties
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
