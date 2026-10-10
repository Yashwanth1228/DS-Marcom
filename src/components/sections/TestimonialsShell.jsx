"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

// Official Google Multi-Color "G" Icon
function GoogleIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.35 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.25C.45 8.15 0 9.97 0 12s.45 3.85 1.25 5.43l4.03-3.14z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.57 1.25 6.57l4.03 3.14c.95-2.83 3.6-4.96 6.72-4.96z"
      />
    </svg>
  );
}

// Official Google Review 5-Pointed Star
function GoogleStar({ className = "w-4 h-4 text-[#FBBC04]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function TestimonialsShell() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F8F9FA] border-t border-[#E8EAED] overflow-hidden">
      <Container size="wide">
        {/* ========================================================= */}
        {/* GOOGLE REVIEWS SECTION HEADER & RATING BADGE              */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Google Reviews Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#E8EAED] shadow-2xs mb-3.5">
              <GoogleIcon className="w-4 h-4" />
              <span className="text-xs font-semibold text-[#3C4043]">
                Google Reviews &middot; Client Feedback
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#202124] leading-tight">
              What Our Clients Say on{" "}
              <span className="font-editorial italic font-semibold text-[#0F7824]">
                Google
              </span>
            </h2>

            <p className="mt-2.5 text-sm sm:text-base text-[#5F6368] max-w-xl leading-relaxed">
              Real buyer experiences and feedback from property investors, weekend villa owners, and plotted land buyers across Bangalore.
            </p>
          </motion.div>

          {/* Aggregate Rating Score Card (Google Style) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center space-x-4 bg-white px-5 py-3.5 rounded-2xl border border-[#E8EAED] shadow-2xs shrink-0 self-start md:self-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#202124] leading-none">4.9</div>
              <div className="flex items-center justify-center space-x-0.5 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <GoogleStar key={i} className="w-3.5 h-3.5 text-[#FBBC04]" />
                ))}
              </div>
            </div>

            <div className="h-9 w-px bg-[#E8EAED]" />

            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <GoogleIcon className="w-3.5 h-3.5" />
                <span className="text-xs font-bold text-[#202124]">5.0 Rating</span>
              </div>
              <p className="text-[11px] text-[#5F6368] mt-0.5">
                Based on verified client reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* GOOGLE REVIEWS CARDS GRID                                 */}
        {/* Clean, authentic Google Review UI cards                    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4, boxShadow: "0 14px 30px -8px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-2xl border border-[#E8EAED] p-6 sm:p-7 flex flex-col justify-between shadow-2xs transition-all duration-300 cursor-default"
            >
              <div>
                {/* Header: User Avatar + Name/Role + Google Multi-Color G */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0"
                      style={{ backgroundColor: review.avatarColor || "#1A73E8" }}
                    >
                      {review.initial}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#202124] leading-snug">
                        {review.author}
                      </h3>
                      <p className="text-xs text-[#5F6368] mt-0.5">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <GoogleIcon className="w-5 h-5 shrink-0" />
                </div>

                {/* Rating Stars + Timestamp */}
                <div className="flex items-center space-x-2 mb-3.5">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <GoogleStar key={i} className="w-4 h-4 text-[#FBBC04]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#70757A]">&bull;</span>
                  <span className="text-[11px] text-[#70757A]">{review.date}</span>
                </div>

                {/* Review Quote Body */}
                <p className="text-xs sm:text-[13.5px] text-[#3C4043] leading-relaxed font-normal">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Card Footer: Project Tag & Verified Buyer Stamp */}
              <div className="mt-6 pt-4 border-t border-[#F1F3F4] flex items-center justify-between text-[11px] text-[#5F6368]">
                <span className="font-medium text-[#0F7824] bg-[#EDF9EF] px-2 py-0.5 rounded truncate max-w-[200px]">
                  {review.projectFocus}
                </span>

                <span className="text-[#1E8E3E] font-medium flex items-center space-x-1 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================================================= */}
        {/* FOOTER GOOGLE BUSINESS PROFILE REFERENCE BAR              */}
        {/* ========================================================= */}
        <div className="mt-12 pt-8 border-t border-[#E8EAED] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6368]">
          <div className="flex items-center space-x-2">
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <span>
              Reviews published on Google Business Profile for DS Marcom, Bengaluru.
            </span>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center font-bold text-[#0F7824] hover:text-[#19B83A] transition-colors group"
          >
            <span>Connect With Our Team</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
