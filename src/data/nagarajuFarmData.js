/**
 * Nagaraju Farm Land - Verified Project Data Architecture
 * Source of truth strictly adheres to supplied client specifications.
 * No fabricated statistics, areas, or unverified claims.
 */

export const nagarajuFarmData = {
  name: "Nagaraju Farm Land",
  company: "DS Marcom Properties & Promoters",
  location: "Thippuru, near Kumbalagudu, Bengaluru, Karnataka",
  shortLocation: "Thippuru · Near Kumbalagudu · Bengaluru",
  plotSizeRange: "5,000 – 6,000 sq ft",
  status: "Ready for construction",
  registration: "Immediate registration available",
  registrationNote: "Subject to current confirmation",
  intendedUse: [
    "Weekend villa plots",
    "Farm plots",
    "Luxury villas"
  ],
  tagline: "Expansive farm plots crafted for private weekend villas and serene country living near Kumbalagudu.",

  // Contact & Office details (Kept strictly separate from project site)
  contact: {
    phone: "9606342643",
    phoneDisplay: "+91 96063 42643",
    email: "info@dsmarcom.com",
    officeAddress: "#209, 1st Floor, Sri Varaha Complex, Kommaghatta Main Road, Kengeri Satellite Town, Bengaluru – 560060",
    projectSiteAddress: "Thippuru, near Kumbalagudu, Bengaluru, Karnataka",
  },

  // Supplied Facilities with matching Lucide icons
  facilities: [
    {
      id: "roads",
      title: "Concrete Internal Roads",
      icon: "Route",
      description: "Wide paved concrete roads running through the layout for smooth all-weather vehicular access.",
      highlight: "On-ground concrete roads installed",
      image: "/images/projects/nagaraju-farm/hero-road.jpg",
    },
    {
      id: "electrical",
      title: "Electrical Connection",
      icon: "Zap",
      description: "Dedicated electric line infrastructure with overhead power poles running through the property avenues.",
      highlight: "Electric poles & power lines installed",
      image: "/images/projects/nagaraju-farm/internal-road-compound.png",
    },
    {
      id: "entrance",
      title: "Entrance Arch",
      icon: "Landmark",
      description: "Grand modern architectural entrance archway with integrated security sliding gate.",
      highlight: "Constructed entrance archway",
      image: "/images/projects/nagaraju-farm/entrance-arch.jpg",
    },
    {
      id: "gated",
      title: "Gated Community",
      icon: "ShieldCheck",
      description: "Secure perimeter with precast compound wall boundaries and single-entry controlled gate.",
      highlight: "Compound wall & gated security",
      image: "/images/projects/nagaraju-farm/entrance-arch.jpg",
    },
  ],

  // Supplied Nearby Landmarks and Distances
  landmarks: [
    {
      id: "bisleri",
      name: "Bisleri Factory",
      distance: "1.5 km",
      number: "01",
      category: "Industrial Landmark",
    },
    {
      id: "bgs",
      name: "BGS College",
      distance: "4 km",
      number: "02",
      category: "Education Node",
    },
    {
      id: "toyota",
      name: "Bidadi Toyota",
      distance: "5 km",
      number: "03",
      category: "Automotive Hub",
    },
    {
      id: "highway",
      name: "Bengaluru–Mysuru Highway",
      distance: "6 km",
      number: "04",
      category: "Arterial Expressway",
    },
    {
      id: "kanakapura",
      name: "Kanakapura Road",
      distance: "7 km",
      number: "05",
      category: "Connecting Corridor",
    },
  ],

  // Real Photographic Archive
  // User instruction: first image as banner, next given images for gallery showcase
  images: {
    heroBanner: {
      url: "/images/projects/nagaraju-farm/hero-road.jpg",
      alt: "Nagaraju Farm Land concrete internal road and electrical poles in Thippuru near Kumbalagudu",
      caption: "Actual on-ground concrete internal avenue and electrical infrastructure",
    },
    roadAndCompound: {
      url: "/images/projects/nagaraju-farm/internal-road-compound.png",
      alt: "Nagaraju Farm Land concrete internal road and precast compound wall",
      caption: "Wide concrete internal road flanked by precast compound wall and electric line poles",
    },
    entranceArch: {
      url: "/images/projects/nagaraju-farm/entrance-arch.jpg",
      alt: "Nagaraju Farm Land grand modern entrance arch with security gate and visitors",
      caption: "Constructed architectural entrance arch with sliding gate and boundary wall",
    },
  },

  // Gallery items for the magazine-style layout
  gallery: [
    {
      id: "gallery-1",
      url: "/images/projects/nagaraju-farm/hero-road.jpg",
      title: "Concrete Internal Road & Overhead Utilities",
      caption: "Spacious concrete roads running the length of the property with dedicated electric poles.",
      aspect: "landscape",
      span: "col-span-12 lg:col-span-7",
      isPrimary: true,
    },
    {
      id: "gallery-2",
      url: "/images/projects/nagaraju-farm/entrance-arch.jpg",
      title: "Grand Entrance Arch & Secured Gated Access",
      caption: "Architectural white entrance arch with wide sliding iron gate and boundary compound.",
      aspect: "portrait",
      span: "col-span-12 lg:col-span-5",
    },
    {
      id: "gallery-3",
      url: "/images/projects/nagaraju-farm/internal-road-compound.png",
      title: "Precast Compound Boundary & Internal Avenue",
      caption: "Full compound walling delineating the layout boundaries and internal road network.",
      aspect: "landscape",
      span: "col-span-12",
    },
  ],
};
