import { Mail, Phone, MapPin, Clock, Building } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact DS MARCOM | Bangalore Real Estate Inquiries",
  description:
    "Contact DS Marcom regarding Bangalore residential and plotted property opportunities. Office located in Kengeri Satellite Town, Bengaluru.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <section className="pb-12 sm:pb-16 border-b border-[#E7E5E0]">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="bronze" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C]">
              Direct Dialogue With Bangalore Property Specialists.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Whether you are evaluating farm plots, BMRDA layouts, or residential sites, our local team is here to provide factual, transparent details.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#17191C]">
                  Corporate Office
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  Located in South-West Bengaluru near Mysore Road transit hub.
                </p>
              </div>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="p-6 bg-white border border-[#E7E5E0] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#FAF7F2] border border-[#E8DFD0] flex items-center justify-center text-[#B58A4A] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#17191C]">
                      Office Address
                    </h3>
                    <p className="text-sm text-[#64748B] mt-1 leading-relaxed">
                      {siteConfig.contact.address.floor},{" "}
                      {siteConfig.contact.address.complex},
                      <br />
                      {siteConfig.contact.address.street},
                      <br />
                      {siteConfig.contact.address.city},{" "}
                      {siteConfig.contact.address.state} -{" "}
                      {siteConfig.contact.address.postalCode}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-6 bg-white border border-[#E7E5E0] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#FAF7F2] border border-[#E8DFD0] flex items-center justify-center text-[#B58A4A] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#17191C]">
                      Telephone
                    </h3>
                    <p className="text-sm text-[#17191C] font-semibold mt-1">
                      <a
                        href={`tel:${siteConfig.contact.phoneTel}`}
                        className="hover:text-[#B58A4A] transition-colors"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </p>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Direct voice & WhatsApp inquiries
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6 bg-white border border-[#E7E5E0] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#FAF7F2] border border-[#E8DFD0] flex items-center justify-center text-[#B58A4A] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#17191C]">
                      Email Inquiries
                    </h3>
                    <p className="text-sm text-[#17191C] font-semibold mt-1">
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="hover:text-[#B58A4A] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Official correspondence
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-6 bg-white border border-[#E7E5E0] flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#FAF7F2] border border-[#E8DFD0] flex items-center justify-center text-[#B58A4A] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#17191C]">
                      Operating Hours
                    </h3>
                    <p className="text-sm text-[#17191C] font-semibold mt-1">
                      {siteConfig.contact.businessHours}
                    </p>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      Monday through Sunday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
