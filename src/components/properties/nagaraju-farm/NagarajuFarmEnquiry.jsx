"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  Clock,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { nagarajuFarmData } from "@/data/nagarajuFarmData";

export default function NagarajuFarmEnquiry() {
  return (
    <section
      id="enquire"
      className="relative py-16 sm:py-24 bg-[#F7F8F5] text-[#0B0D0C] overflow-hidden border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#063B20] block">
            DIRECT ADVISORY &amp; SITE INSPECTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D0C] tracking-tight">
            Connect with DS Marcom.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
            Speak directly with our property advisors to arrange an on-ground site walkthrough, inspect plot demarcations, and verify documentation for Nagaraju Farm Land.
          </p>
        </div>

        {/* 3 Direct Communication Channels (Form-Free) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Channel 1: Direct Telephone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#063B20] text-emerald-400 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#19B83A]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Direct Telephone Line
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                Call Our Advisory Desk
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Connect with our team for immediate plot availability updates, physical site directions, and instant answers.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <a
                href={`tel:${nagarajuFarmData.contact.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#19B83A] hover:bg-[#159A30] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#19B83A]/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {nagarajuFarmData.contact.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>

          {/* Channel 2: WhatsApp & Email */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#063B20] text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#19B83A]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Instant Messaging &amp; Email
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                Digital Communication
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Request layout drawings, survey sketches, and route plans directly to your phone or inbox.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`https://wa.me/91${nagarajuFarmData.contact.phone}?text=Hi%20DS%20Marcom%2C%20I%20am%20interested%20in%20Nagaraju%20Farm%20Land.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#19B83A]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${nagarajuFarmData.contact.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs tracking-wide transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-600" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>

          {/* Channel 3: Official Contact Page */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#063B20] text-emerald-400 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#19B83A]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                Central Inquiry Desk
              </span>
              <h3 className="text-lg font-bold text-stone-900">
                Official Contact Page
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Prefer to submit a consultation request through our main inquiry desk? Access our central contact form.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#063B20] hover:bg-[#084d2a] text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Go to Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Location & Office Details Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#19B83A] block">
              Project Site Location
            </span>
            <p className="font-semibold text-stone-900 flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-[#19B83A] shrink-0 mt-0.5" />
              <span>{nagarajuFarmData.contact.projectSiteAddress}</span>
            </p>
            <p className="text-[11px] text-stone-500">
              Direct access via Thippuru road network near Kumbalagudu.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
              Registered Corporate Office
            </span>
            <p className="font-semibold text-stone-900 flex items-start gap-1.5">
              <Building2 className="w-4 h-4 text-[#063B20] shrink-0 mt-0.5" />
              <span>{nagarajuFarmData.contact.officeAddress}</span>
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
              Advisory Office Hours
            </span>
            <p className="font-semibold text-stone-900 flex items-start gap-1.5">
              <Clock className="w-4 h-4 text-[#063B20] shrink-0 mt-0.5" />
              <span>Monday – Saturday: 9:30 AM – 6:30 PM</span>
            </p>
            <p className="text-[11px] text-stone-500">
              Sunday site visits arranged by prior appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
