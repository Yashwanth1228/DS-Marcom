"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interestedProject: "Nagaraju Farm",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: Connect this form to a verified backend endpoint (e.g. Next.js Route Handler, Resend, or CRM API)
    // Example: await fetch('/api/enquiries', { method: 'POST', body: JSON.stringify(formData) });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 bg-white border border-[#E7E5E0] text-center flex flex-col items-center space-y-4">
        <div className="w-12 h-12 bg-[#FAF7F2] border border-[#E8DFD0] flex items-center justify-center text-[#B58A4A]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-[#17191C]">
          Enquiry Received
        </h3>
        <p className="text-sm text-[#64748B] max-w-md leading-relaxed">
          Thank you for reaching out to DS Marcom regarding{" "}
          <strong className="text-[#17191C]">{formData.interestedProject}</strong>. Our team will review your message and contact you promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              interestedProject: "Nagaraju Farm",
              message: "",
            });
          }}
          className="text-xs font-semibold text-[#B58A4A] underline underline-offset-4 hover:text-[#9E7438] mt-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 bg-white border border-[#E7E5E0] space-y-5"
    >
      <div>
        <h3 className="text-xl font-bold text-[#17191C]">
          Submit an Enquiry
        </h3>
        <p className="text-xs text-[#64748B] mt-1">
          Share your details below. We respect your privacy and will not send spam.
        </p>
      </div>

      <div className="space-y-4 pt-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17191C] mb-1.5"
          >
            Full Name <span className="text-[#B58A4A]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Kumar"
            className="w-full px-4 py-2.5 bg-[#FAFAF8] border border-[#E7E5E0] text-sm text-[#17191C] placeholder-[#94A3B8] focus:bg-white focus:border-[#17191C] focus:outline-none transition-colors"
          />
        </div>

        {/* Phone & Email Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17191C] mb-1.5"
            >
              Phone Number <span className="text-[#B58A4A]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 bg-[#FAFAF8] border border-[#E7E5E0] text-sm text-[#17191C] placeholder-[#94A3B8] focus:bg-white focus:border-[#17191C] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#17191C] mb-1.5"
            >
              Email Address <span className="text-[#B58A4A]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="rajesh@example.com"
              className="w-full px-4 py-2.5 bg-[#FAFAF8] border border-[#E7E5E0] text-sm text-[#17191C] placeholder-[#94A3B8] focus:bg-white focus:border-[#17191C] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Interested Project */}
        <div>
          <label
            htmlFor="interestedProject"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17191C] mb-1.5"
          >
            Interested Project
          </label>
          <select
            id="interestedProject"
            name="interestedProject"
            value={formData.interestedProject}
            onChange={handleChange}
            className="w-full px-4 py-2.5 bg-[#FAFAF8] border border-[#E7E5E0] text-sm text-[#17191C] focus:bg-white focus:border-[#17191C] focus:outline-none transition-colors"
          >
            <option value="Nagaraju Farm">Nagaraju Farm (Mysore Road / Kumbalgodu)</option>
            <option value="CRS Enclave">CRS Enclave (BMRDA Plotted Development)</option>
            <option value="Royal Homes">Royal Homes (Residential Development)</option>
            <option value="Other">Other / General Property Enquiry</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-[#17191C] mb-1.5"
          >
            Your Message or Inquiry Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your timeline, preference for plots or villas, or any specific documentation questions..."
            className="w-full px-4 py-2.5 bg-[#FAFAF8] border border-[#E7E5E0] text-sm text-[#17191C] placeholder-[#94A3B8] focus:bg-white focus:border-[#17191C] focus:outline-none transition-colors resize-y"
          />
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={submitting}
        >
          {submitting ? (
            <span>Transmitting...</span>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <Send className="w-4 h-4 ml-2 text-[#B58A4A]" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
