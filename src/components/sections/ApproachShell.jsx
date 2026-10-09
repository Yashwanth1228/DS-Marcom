import { ArrowRight, CheckCircle, FileText, Compass, KeyRound } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ApproachShell() {
  const steps = [
    {
      number: "01",
      icon: Compass,
      stage: "Requirement Discovery",
      title: "Consultation & Location Matching",
      description:
        "We discuss your specific real estate goals — whether you are acquiring farmland for organic cultivation, a weekend villa retreat near Kumbalgodu, or a residential plotted development.",
    },
    {
      number: "02",
      icon: ArrowRight,
      stage: "On-Site Evaluation",
      title: "Coordinated Site Inspection",
      description:
        "Walk the land firsthand. We arrange transparent on-ground site visits across Bangalore's growth corridors, reviewing road access, topography, boundary markers, and immediate surroundings.",
    },
    {
      number: "03",
      icon: FileText,
      stage: "Document Review",
      title: "Paperwork & Due Diligence",
      description:
        "Complete visibility before commitment. Prospective buyers review available project records, including individual Pahani and RTC papers, BMRDA layout approvals, and title histories.",
    },
    {
      number: "04",
      icon: KeyRound,
      stage: "Conveyance & Handover",
      title: "Clear Allotment & Registration",
      description:
        "Transparent allotment terms followed by structured facilitation through the formal sale deed registration at the local sub-registrar office, ensuring smooth transfer.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#E7E5E0]">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="A Structured, Transparent Buyer Journey"
          description="Navigating land and plotted property in Bangalore requires method and clarity. Our four-stage advisory process ensures rigorous diligence at each milestone."
          className="mb-14 sm:mb-18"
        />

        {/* 4-Step Linear Advisory Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 border border-[#E7E5E0] hover:border-[#17191C]/30 transition-all flex flex-col justify-between relative"
              >
                <div>
                  {/* Step Number & Category */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E7E5E0]">
                    <span className="text-2xl font-bold font-mono tracking-tight text-[#17191C]">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B58A4A]">
                      {step.stage}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#17191C] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E5E0] flex items-center text-xs text-[#17191C] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B58A4A] mr-2 shrink-0" />
                  <span>Phase {step.number} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Due Diligence Transparency Assurance Box */}
        <div className="mt-10 p-6 bg-white border border-[#E7E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-[#B58A4A] mt-2 shrink-0" />
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              <strong className="text-[#17191C] font-semibold">Buyer Advisory Notice:</strong> We encourage all clients and investors to engage independent legal counsel to review project title deeds, Pahani/RTC records, and layout sanction orders prior to transaction finalization.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
