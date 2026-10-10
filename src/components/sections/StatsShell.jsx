"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function StatsShell() {
  return (
    <section className="py-14 sm:py-16 border-y border-[#E5E8E5] bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E5E8E5]">
          {siteConfig.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className={`flex flex-col space-y-2 group transition-all ${
                idx > 0 ? "pt-6 md:pt-0 md:pl-10" : ""
              }`}
            >
              <div className="flex items-baseline space-x-2.5">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0B0D0C] group-hover:text-[#0F7824] transition-colors">
                  {metric.value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F7824] px-2 py-0.5 rounded-full bg-[#EDF9EF] border border-[#19B83A]/20">
                  Verified
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0B0D0C] tracking-tight">
                {metric.label}
              </h3>
              <p className="text-sm text-[#4F5B52] leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

