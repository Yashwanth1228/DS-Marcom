"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import FaqIllustration from "./FaqIllustration";
import { cn } from "@/lib/utils";

export default function FaqShell() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: "What types of property opportunities does DS Marcom offer, and how can I explore them?",
      answer:
        "DS Marcom presents curated property opportunities across Bangalore, including premium villa plots (such as Nagaraju Estates near Kumbalgodu), planned residential layouts (such as BMRDA-approved CRS Enclave), and completed developments (such as Royal Homes). You can explore current listings on our website, review project highlights, or request detailed layout plans directly through our advisory team.",
    },
    {
      question: "How do I schedule an accompanied on-site visit to inspect a property?",
      answer:
        "You can arrange an accompanied on-ground visit by calling our advisory desk at +91 9606 342643 or submitting an inquiry online. Our representative coordinates a convenient date and time, accompanies you to the property, walks you through the boundary markers and layout avenue roads, and reviews surrounding physical infrastructure.",
    },
    {
      question: "What plot dimensions and configurations are available?",
      answer:
        "Available plot dimensions vary depending on the specific property and approved layout plan. Plotted developments typically feature standard residential configurations such as 30x40 and 30x50 feet alongside custom corner and spacious villa parcels across our curated layouts. Specific dimensions, site facing, and current plot availability are provided upon inquiry for each layout.",
    },
    {
      question: "What property documentation is available for legal verification prior to purchase?",
      answer:
        "Available documentation depends on the property category. For residential plotted developments like CRS Enclave, project records reference BMRDA approvals and A Khata documentation. We provide copies of available sanction plans, title deeds, and land records to prospective buyers for independent legal scrutiny before any transaction.",
    },
    {
      question: "Where are DS Marcom's properties located across Bangalore?",
      answer:
        "Our active property corridors are strategically situated along high-growth infrastructure belts in Bengaluru. Current locations include South-West Bangalore along the Bengaluru-Mysore Highway and Kumbalgodu, as well as emerging growth corridors in Bangalore North Taluk, such as Dasanapura Hobli and Nelamangala.",
    },
    {
      question: "Are prices, payment schedules, and registration timelines standardized?",
      answer:
        "Pricing, payment milestones, and registration timelines depend on the individual property, its development stage, and plot dimensions. For example, project records for CRS Enclave specify immediate registration capabilities, while allotment terms and registry procedures at the local sub-registrar office are communicated with complete transparency and without unverified assurances.",
    },
    {
      question: "How can I contact DS Marcom or visit your Bengaluru office?",
      answer:
        "You can reach our advisory desk by phone at +91 9606 342643, email us at info@dsmarcom.com, or submit an inquiry through our website. Our office is located at Ground Floor, Varaha Complex, #209, Kommaghatta Main Road, Kengeri Satellite Town, Bengaluru, Karnataka 560060, open Monday through Saturday from 9:00 AM to 6:00 PM.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F4F7F4] border-b border-[#E2E8E4] overflow-hidden">
      <Container size="wide">
        {/* ========================================================= */}
        {/* MAIN EMBEDDED CANVAS CARD (Inspired by Reference Design)  */}
        {/* Clean white canvas with rounded corners and fine border   */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border-2 border-[#E5EBE5] shadow-[0_12px_45px_-10px_rgba(15,120,36,0.06)] p-6 sm:p-10 lg:p-14 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* ========================================================= */}
            {/* LEFT COLUMN: Title & Accordion Questions (7 cols)         */}
            {/* Direct, clean layout without search box or header clutter */}
            {/* ========================================================= */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Main Headline */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B0D0C] leading-[1.14] mb-8">
                Frequently Asked <br className="hidden sm:inline" />
                <span className="text-[#0F7824]">Questions</span>
              </h2>

              {/* Accordion Questions List with Fine Dividers and +/- Indicators */}
              <div className="divide-y divide-[#E5EBE5] border-t border-b border-[#E5EBE5]">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="w-full py-4 sm:py-5 text-left flex items-start justify-between gap-4 transition-colors cursor-pointer group"
                      >
                        <span
                          className={cn(
                            "text-sm sm:text-base font-bold leading-snug transition-colors pr-2",
                            isOpen
                              ? "text-[#0F7824]"
                              : "text-[#0B0D0C] group-hover:text-[#0F7824]"
                          )}
                        >
                          {faq.question}
                        </span>

                        {/* Minimalist +/- Toggle Sign from Reference Design */}
                        <span
                          className={cn(
                            "shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-lg font-light transition-all duration-200 mt-0.5",
                            isOpen
                              ? "text-[#0F7824] bg-[#EDF9EF] font-bold"
                              : "text-[#4F5B52] group-hover:text-[#0F7824]"
                          )}
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: shouldReduceMotion ? 0 : 0.25,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pr-6 text-xs sm:text-sm text-[#4F5B52] leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: Interactive Vector Animated FAQ Illustration*/}
            {/* 3D FAQ letters, character & floating oscillating ? marks  */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <FaqIllustration />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
