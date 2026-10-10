"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  eyebrowClassName = "",
  descriptionClassName = "",
}) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col space-y-3",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-[0.2em] text-[#0F7824]",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            "font-display text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-[-0.015em] text-[#0B0D0C] text-balance leading-tight",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg text-[#4F5B52] leading-relaxed max-w-2xl text-pretty",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

