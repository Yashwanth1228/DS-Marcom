"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "General Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

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
      <div className="py-12 px-6 bg-white rounded-2xl border border-slate-200/90 text-center flex flex-col items-center justify-center space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-full bg-[#19B83A]/10 border border-[#19B83A]/30 flex items-center justify-center text-[#19B83A] shadow-xs">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-serif text-slate-900 font-medium">
          Enquiry Received
        </h3>
        <p className="text-sm text-slate-600 max-w-md leading-relaxed">
          Thank you for reaching out to DS MARCOM regarding{" "}
          <strong className="text-slate-900">{formData.interest}</strong>. Our Bengaluru advisory team will connect with you promptly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              interest: "General Enquiry",
              message: "",
            });
          }}
          className="text-xs font-semibold text-[#19B83A] underline underline-offset-4 hover:text-[#159A30] mt-3 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 1. Your Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-5 py-3.5 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-[#19B83A] focus:ring-2 focus:ring-[#19B83A]/15 focus:outline-none transition-all"
        />
      </div>

      {/* 2. Your Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-5 py-3.5 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-[#19B83A] focus:ring-2 focus:ring-[#19B83A]/15 focus:outline-none transition-all"
        />
      </div>

      {/* 3. Phone Number & Area of Interest Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full px-5 py-3.5 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-[#19B83A] focus:ring-2 focus:ring-[#19B83A]/15 focus:outline-none transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="interest"
            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
          >
            Area of Interest
          </label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full appearance-none px-5 py-3.5 pr-10 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl text-sm text-slate-900 shadow-xs focus:border-[#19B83A] focus:ring-2 focus:ring-[#19B83A]/15 focus:outline-none transition-all cursor-pointer"
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Residential Villa Plots">Residential Villa Plots</option>
              <option value="Residential Plotted Developments">Residential Plotted Developments</option>
              <option value="Nagaraju Estates (Kumbalgodu)">Nagaraju Estates (Kumbalgodu)</option>
              <option value="CRS Enclave (BMRDA Approved)">CRS Enclave (BMRDA Approved)</option>
              <option value="Royal Homes">Royal Homes</option>
              <option value="Commercial & Mixed Development">Commercial & Mixed Development</option>
              <option value="Title Record & Legal Vetting">Title Record & Legal Vetting</option>
              <option value="Schedule a Free Site Visit">Schedule a Free Site Visit</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 4. Your Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full px-5 py-3.5 bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-[#19B83A] focus:ring-2 focus:ring-[#19B83A]/15 focus:outline-none transition-all resize-y"
        />
      </div>

      {/* 5. Submit Button matching 1st image pill design */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#19B83A] hover:bg-[#159A30] active:scale-[0.99] text-white font-bold tracking-wider text-xs sm:text-sm uppercase shadow-lg shadow-[#19B83A]/25 hover:shadow-[#19B83A]/40 transition-all duration-200 cursor-pointer disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SENDING...</span>
            </>
          ) : (
            <>
              <span>SEND MESSAGE</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
