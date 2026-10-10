/**
 * DS MARCOM - Central Site Configuration & Verified Company Information
 * Strictly populated using verified company information.
 */

export const siteConfig = {
  name: "DS MARCOM",
  legalName: "DS Marcom",
  tagline: "Real Estate Opportunities, Built Around Bangalore.",
  shortDescription:
    "Affordable and strategically located residential, commercial, and plotted development opportunities across Bangalore with 6+ years of trusted local expertise.",
  fullDescription:
    "DS Marcom is a Bangalore-based real estate company dedicated to bringing strategic and affordable property opportunities to investors and homebuyers. Specializing in residential and commercial properties, BMRDA sites, and verified plot developments across high-growth corridors in Bengaluru.",
  url: "https://www.dsmarcom.com",

  // Verified Company Metrics (No invented figures)
  metrics: [
    {
      value: "6+",
      label: "Years of Experience",
      description: "Dedicated to Bangalore's evolving real estate landscape",
    },
    {
      value: "9",
      label: "Completed Projects",
      description: "Successfully delivered developments across strategic locales",
    },
    {
      value: "Bangalore",
      label: "Strategic Focus",
      description: "Curated plotted & villa developments in growth corridors",
    },
  ],

  // Verified Contact Details
  contact: {
    email: "info@dsmarcom.com",
    phone: "+91 9606 342643",
    phoneDisplay: "+91 9606 342643",
    phoneTel: "+919606342643",
    businessHours: "9 AM – 6 PM",
    address: {
      complex: "Varaha Complex, #209",
      floor: "Ground Floor",
      street: "Kommaghatta Main Rd, Kengeri Satellite Town",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560060",
      full: "Ground Floor, Varaha Complex, #209, Kommaghatta Main Rd, Kengeri Satellite Town, Bengaluru, Karnataka 560060",
    },
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  // Social Links: Empty until verified URLs are supplied (strict compliance: no invented URLs)
  socialLinks: [],

  // Key Bangalore Strategic Regions referenced
  strategicRegions: [
    {
      name: "Kumbalgodu & Mysore Road",
      description:
        "Rapidly appreciating corridor with seamless metro & highway connectivity.",
    },
    {
      name: "Nelamangala / Dasanapura",
      description:
        "High-potential Bangalore North corridor connecting key industrial & transport networks.",
    },
    {
      name: "Big Banyan Tree Area",
      description:
        "Serene green surroundings ideal for residential villa plots and peaceful retreats.",
    },
    {
      name: "Wonderla / Bidadi Belt",
      description:
        "Expanding entertainment and infrastructure hub along the Mysore expressway.",
    },
  ],
};
