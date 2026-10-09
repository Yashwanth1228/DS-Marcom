"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export default function FaqShell() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of property opportunities does DS Marcom market in Bangalore?",
      answer:
        "DS Marcom focuses on curated plotted developments, ready-to-build farm plots and weekend villas (such as Nagaraju Farm near Kumbalgodu), and BMRDA-approved residential layouts (such as CRS Enclave) positioned along Bangalore's high-growth corridors.",
    },
    {
      question: "What documentation is provided for farmland and villa plots?",
      answer:
        "For farmland opportunities such as Nagaraju Farm, existing project records reference individual Pahani and RTC documentation. All title and land papers are made available to prospective buyers for independent legal verification prior to purchase.",
    },
    {
      question: "What regulatory approvals apply to plotted developments like CRS Enclave?",
      answer:
        "CRS Enclave is documented as a BMRDA-approved development featuring A Khata references, with immediate registration and construction readiness indicated in project records.",
    },
    {
      question: "Can I schedule an accompanied on-site visit to inspect the land?",
      answer:
        "Yes. DS Marcom coordinates guided on-site visits across our Mysore Road, Kumbalgodu, and Bangalore North project locations. You can schedule an inspection by contacting our advisory desk directly at +91 9606 342643 or via our contact page.",
    },
    {
      question: "Where is DS Marcom's office located, and what are the business hours?",
      answer:
        "Our office is situated at Ground Floor, Varaha Complex, #209, Kommaghatta Main Road, Kengeri Satellite Town, Bengaluru, Karnataka 560060. Our advisory desk operates Monday through Saturday from 9:00 AM to 6:00 PM.",
    },
    {
      question: "How does the allotment and registration process proceed?",
      answer:
        "Once a property has been selected and due diligence is reviewed, the allotment terms are confirmed. The conveyance proceeds to formal sale deed execution and registration at the jurisdiction's local sub-registrar office.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF8] border-b border-[#E7E5E0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Quick Contact (5 cols) */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clear Answers, Transparent Guidance."
              description="Direct, factual information regarding our property opportunities, documentation verification, site visits, and purchase processes."
            />

            <div className="mt-8 p-6 sm:p-7 bg-white border border-[#E7E5E0]">
              <h4 className="text-sm font-bold text-[#17191C] uppercase tracking-wider mb-2">
                Have Project-Specific Inquiries?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                Our Bengaluru team can provide available layout plans, RTC copies, and arrange private site tours.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E7E5E0]">
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="flex items-center text-sm font-semibold text-[#17191C] hover:text-[#B58A4A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B58A4A] mr-2 shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
                <p className="text-xs text-[#64748B]">
                  Operating Hours: {siteConfig.contact.businessHours} (Mon – Sat)
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E5E0]">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#17191C] hover:text-[#B58A4A] transition-colors"
                >
                  <span>Submit Inquiry Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#E7E5E0] border-y border-[#E7E5E0] bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAFAF8] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#17191C]">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 flex items-center justify-center border border-[#E7E5E0] text-[#17191C] transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#FAFAF8] text-[#B58A4A]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E7E5E0]/60 bg-[#FAFAF8]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
