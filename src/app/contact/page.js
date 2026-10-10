import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact Us | DS MARCOM Real Estate Advisory Bengaluru",
  description:
    "Get in touch with DS MARCOM for verified residential plots and property opportunities in Bangalore. Visit our corporate office in Kengeri Satellite Town.",
};

export default function ContactPage() {
  return (
    <div className="relative bg-[#FAF9F5] min-h-screen">
      {/* =========================================================================
          HERO BANNER: Corporate Office & Support Background
          Lighter translucent overlay so background advisor photo is clearly visible
          ========================================================================= */}
      <section className="relative w-full pt-16 sm:pt-24 lg:pt-28 pb-36 sm:pb-44 lg:pb-48 overflow-hidden">
        {/* Background Photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact/contact-hero.jpg"
            alt="DS MARCOM Corporate Property Advisory Office"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Light translucent gradient so office advisor photo is clearly seen */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
        </div>

        {/* Hero Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Contact us
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/95 max-w-xl leading-relaxed drop-shadow-sm font-medium">
            DS MARCOM is ready to provide the right solution according to your property needs.
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT SECTION:
          - LEFT SIDE: Form (Input boxes matching 1st reference image)
          - RIGHT SIDE: Contact Details ("Get In Touch", Call Us, Email Us, Website, Registered Office, Follow Us On)
          ========================================================================= */}
      <section className="relative z-20 -mt-24 sm:-mt-32 lg:-mt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-[#F7F8F4] rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: The Form (6 cols) */}
            <div className="lg:col-span-6 lg:pr-4">
              <ContactForm />
            </div>

            {/* RIGHT COLUMN: Contact Details (6 cols matching 1st reference image) */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              <div>
                <span className="font-serif italic text-[#19B83A] text-base sm:text-lg font-normal tracking-wide block">
                  Contact Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mt-1">
                  Get In Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Direct conversations on residential plots, property developments, and legal documentation, or to schedule a private guided site visit across our Bengaluru properties.
                </p>
              </div>

              {/* 2x2 Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* 1. Call Us */}
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-full border border-[#19B83A]/30 bg-[#19B83A]/5 text-[#19B83A] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-5 h-5 text-[#19B83A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Call Us
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct • WhatsApp Available
                    </p>
                    <a
                      href="https://wa.me/919606342643"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#19B83A] hover:underline inline-flex items-center gap-1 mt-1.5"
                    >
                      Connect on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* 2. Email Us */}
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-full border border-[#19B83A]/30 bg-[#19B83A]/5 text-[#19B83A] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Mail className="w-5 h-5 text-[#19B83A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-slate-700 hover:text-[#19B83A] transition-colors mt-0.5 block break-all font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[11px] text-[#19B83A] font-medium tracking-wide mt-1 block">
                      Prompt Response
                    </span>
                  </div>
                </div>

                {/* 3. Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-full border border-[#19B83A]/30 bg-[#19B83A]/5 text-[#19B83A] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Globe className="w-5 h-5 text-[#19B83A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Website
                    </h3>
                    <a
                      href="https://www.dsmarcom.com"
                      className="text-xs text-slate-700 hover:text-[#19B83A] transition-colors mt-0.5 block font-medium"
                    >
                      www.dsmarcom.com
                    </a>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Corporate Portal
                    </span>
                  </div>
                </div>

                {/* 4. Registered Office */}
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-full border border-[#19B83A]/30 bg-[#19B83A]/5 text-[#19B83A] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#19B83A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Registered Office
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {siteConfig.contact.address.complex},
                      <br />
                      {siteConfig.contact.address.street},
                      <br />
                      {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Thin Divider Line */}
              <hr className="border-slate-200/80 my-7" />

              {/* Follow Us On */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3.5">
                  Follow Us On
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-[#19B83A] hover:bg-[#159A30] text-white transition-all duration-200 flex items-center justify-center shadow-xs"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#19B83A] hover:bg-[#159A30] text-white transition-all duration-200 flex items-center justify-center shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-[#19B83A] hover:bg-[#159A30] text-white transition-all duration-200 flex items-center justify-center shadow-xs"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                      <path d="m10 15 5-3-5-3z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-full bg-[#19B83A] hover:bg-[#159A30] text-white transition-all duration-200 flex items-center justify-center shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#19B83A] hover:bg-[#159A30] text-white transition-all duration-200 flex items-center justify-center shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GOOGLE MAP WITH PADDING (Matching 2nd Reference Image):
          - Contained with horizontal padding (not edge-to-edge full bleed)
          - Rounded corners & elevated shadow
          - Bottom info bar with office name & "OPEN IN GOOGLE MAPS" link
          ========================================================================= */}
      <section className="mt-14 sm:mt-18 lg:mt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Map Frame */}
          <div className="w-full h-[380px] sm:h-[440px] lg:h-[480px] relative bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7470444108603!2d77.47270859999999!3d12.923972899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0071e4e7b9%3A0x39770393a42e625!2sDs%20marcom%20properties%20%26%20promoters!5e0!3m2!1sen!2sin!4v1791624602182!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="DS MARCOM Properties & Promoters Office Location"
            />
          </div>

          {/* Bottom Info Bar matching 2nd reference image */}
          <div className="px-6 sm:px-8 py-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#19B83A]/10 text-[#19B83A] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#19B83A]" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  DS MARCOM Properties & Promoters
                </p>
                <p className="text-xs text-slate-500">
                  {siteConfig.contact.address.complex}, {siteConfig.contact.address.street}, {siteConfig.contact.address.city} - {siteConfig.contact.address.postalCode}
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Ds+marcom+properties+%26+promoters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#19B83A] hover:text-[#159A30] uppercase tracking-wider transition-colors shrink-0"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
