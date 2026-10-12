"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Building2, Send, CheckCircle2, Clock } from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmEnquiry() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    plotPreference: "5,000 sq ft",
    message: "I am interested in Nagaraju Farm Land. Please share current plot availability, site layout details, and arrangement for a site visit.",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift client verification submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="enquire" className="relative py-20 sm:py-28 lg:py-32 bg-[#F7F8F5] text-[#0B0D0C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Asymmetrical Editorial Composition */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Authentic Project Photograph & Site Details */}
          <div className="lg:col-span-5 relative bg-slate-900 text-white min-h-[380px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10">
            <Image
              src={nagarajuFarmData.images.heroBanner.url}
              alt={nagarajuFarmData.images.heroBanner.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#063B20] via-[#063B20]/80 to-black/60 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#19B83A]/25 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-wider border border-[#19B83A]/30">
                <Building2 className="w-3.5 h-3.5 text-[#19B83A]" />
                DS Marcom Properties &amp; Promoters
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Plan a Private On-Ground Site Walkthrough.
              </h3>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Experience the concrete internal roads, demarcated plot lines, and natural tranquility in person at Thippuru.
              </p>
            </div>

            {/* Separated Project Location vs Corporate Office Address */}
            <div className="relative z-10 pt-8 border-t border-white/15 space-y-4 text-xs text-stone-300">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Project Site Location
                </span>
                <p className="flex items-start gap-1.5 text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#19B83A] shrink-0 mt-0.5" />
                  <span>{nagarajuFarmData.contact.projectSiteAddress}</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                  Company Registered Office
                </span>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  {nagarajuFarmData.contact.officeAddress}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${nagarajuFarmData.contact.phone}`}
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#19B83A]" />
                  <span>{nagarajuFarmData.contact.phoneDisplay}</span>
                </a>

                <span className="hidden sm:inline text-stone-500">•</span>

                <a
                  href={`mailto:${nagarajuFarmData.contact.email}`}
                  className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#19B83A]" />
                  <span>{nagarajuFarmData.contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <div className="mb-6 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
                DIRECT INQUIRY DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B0D0C] tracking-tight">
                Explore Nagaraju Farm Land
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                Submit your details to request the latest site demarcations, availability status, or schedule an on-ground visit.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#19B83A] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  Enquiry Received for Nagaraju Farm Land
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formState.name}</strong>. A DS Marcom property advisor will reach out to you at <strong>{formState.phone}</strong> with the current plot availability sheet and directions.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${nagarajuFarmData.contact.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Call Directly: {nagarajuFarmData.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#19B83A] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#19B83A] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#19B83A] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block">
                      Plot Size Preference
                    </label>
                    <select
                      value={formState.plotPreference}
                      onChange={(e) => setFormState({ ...formState, plotPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#19B83A] focus:bg-white transition-all"
                    >
                      <option value="5,000 sq ft">5,000 sq ft (Farm Plot)</option>
                      <option value="6,000 sq ft">6,000 sq ft (Villa Plot)</option>
                      <option value="Flexible / Multiple">Flexible / Multiple Plots</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block">
                    Message / Inquiry Scope
                  </label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F8F5] border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-[#19B83A] focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#19B83A]/25 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "Submitting..." : "Submit Project Inquiry"}</span>
                  </button>

                  <a
                    href={`tel:${nagarajuFarmData.contact.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#19B83A]" />
                    <span>Call 9606342643</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
