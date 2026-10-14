/**
 * Chamundeshwari Residency - Verified Project Data Architecture
 * Source of truth strictly adheres to supplied client specifications.
 * No fabricated statistics, areas, pricing, or unverified legal claims.
 */

export const chamundeshwariData = {
  name: "Chamundeshwari Residency",
  company: "DS Marcom Properties & Promoters",
  location: "Nelamangala, near Kunigal Toll, Bengaluru, Karnataka",
  shortLocation: "Nelamangala · Near Kunigal Toll · Bengaluru",
  plotDimensions: "30 × 40 ft, 30 × 50 ft & other dimensions",
  plotSizeRange: "1,200 – 1,500+ sq ft (30×40 & 30×50 ft)",
  status: "Ongoing",
  registration: "Immediate registration available",
  registrationNote: "Subject to current confirmation",
  intendedUse: "Residential plots suitable for luxury villas",
  tagline: "Planned residential villa plots in Nelamangala near Kunigal Toll, featuring complete on-ground infrastructure and immediate registration.",

  // Contact & Office details (Kept strictly separate from project site)
  contact: {
    phone: "9606342643",
    phoneDisplay: "+91 96063 42643",
    email: "info@dsmarcom.com",
    officeAddress: "#209, 1st Floor, Sri Varaha Complex, Kommaghatta Main Road, Kengeri Satellite Town, Bengaluru – 560060",
    projectSiteAddress: "Nelamangala, near Kunigal Toll, Bengaluru, Karnataka",
  },

  // Supplied Facilities with matching Lucide icons
  facilities: [
    {
      id: "roads",
      title: "Wide Cement Concrete Roads",
      icon: "Route",
      description: "Broad paved cement concrete avenues constructed throughout the layout for all-weather durability.",
      highlight: "Wide concrete avenues installed",
      image: "/images/projects/chamundeshwari-residency/hero-avenue.jpg",
    },
    {
      id: "drainage",
      title: "Underground Drainage System",
      icon: "Waves",
      description: "Engineered underground storm water and subterranean drainage channels ensuring clean, flood-resilient streets.",
      highlight: "Subterranean drainage completed",
      image: "/images/projects/chamundeshwari-residency/layout-infrastructure.jpg",
    },
    {
      id: "water",
      title: "Water Connection",
      icon: "Droplets",
      description: "Dedicated water supply pipeline distribution network terminating at individual plot boundaries.",
      highlight: "Direct water pipeline connection",
      image: "/images/projects/chamundeshwari-residency/layout-infrastructure.jpg",
    },
    {
      id: "sanitary",
      title: "Sanitary Connection",
      icon: "ShieldCheck",
      description: "Integrated sanitary infrastructure planned and executed according to layout development standards.",
      highlight: "Sanitary connections installed",
      image: "/images/projects/chamundeshwari-residency/layout-infrastructure.jpg",
    },
    {
      id: "streetlights",
      title: "Street Lights",
      icon: "Lightbulb",
      description: "Modern architectural street lighting fixtures mounted along all internal road corridors for evening illumination.",
      highlight: "Overhead street illumination active",
      image: "/images/projects/chamundeshwari-residency/sunset-avenue-lights.jpg",
    },
    {
      id: "underground-electrical",
      title: "Underground Electrical Connection",
      icon: "Zap",
      description: "Subsurface electrical cabling infrastructure designed for clean, uncluttered visual avenues and safe power delivery.",
      highlight: "Underground electrical grid",
      image: "/images/projects/chamundeshwari-residency/hero-avenue.jpg",
    },
    {
      id: "gated",
      title: "Gated Community",
      icon: "Shield",
      description: "Perimeter boundary walling, secure demarcation, and controlled access ensuring private neighborhood living.",
      highlight: "Perimeter security & gated entry",
      image: "/images/projects/chamundeshwari-residency/entrance-avenue.jpg",
    },
    {
      id: "gardens",
      title: "Recreational Gardens",
      icon: "Trees",
      description: "Dedicated green open spaces and avenue tree plantations bordering internal road corridors.",
      highlight: "Avenue trees & landscaped zones",
      image: "/images/projects/chamundeshwari-residency/vertical-paved-road.jpg",
    },
  ],

  // Supplied Nearby Landmarks and Distances
  landmarks: [
    {
      id: "toll",
      name: "Nelamangala / Kunigal Toll",
      distance: "1.5 km",
      number: "01",
      category: "Highway Toll Node",
      time: "3 mins",
      x: 320,
      y: 335,
      badgeX: 235,
      badgeY: 300,
      badgeW: 170,
      path: "M 360 320 Q 340 328 320 335",
    },
    {
      id: "nelamangala",
      name: "Nelamangala Town",
      distance: "5 km",
      number: "02",
      category: "Commercial & Civic Hub",
      time: "8 mins",
      x: 645,
      y: 165,
      badgeX: 565,
      badgeY: 130,
      badgeW: 160,
      path: "M 360 320 Q 500 240 645 165",
    },
    {
      id: "tavarekere",
      name: "Tavarekere",
      distance: "12 km",
      number: "03",
      category: "Regional Corridor",
      time: "18 mins",
      x: 725,
      y: 415,
      badgeX: 635,
      badgeY: 380,
      badgeW: 155,
      path: "M 360 320 Q 540 370 725 415",
    },
  ],

  // Real Photographic Archive
  images: {
    heroBanner: {
      url: "/images/projects/chamundeshwari-residency/hero-avenue.jpg",
      alt: "Chamundeshwari Residency wide concrete avenue and street lighting in Nelamangala near Kunigal Toll",
      caption: "Actual on-ground concrete internal avenue and avenue tree plantation",
    },
    sunsetAvenue: {
      url: "/images/projects/chamundeshwari-residency/sunset-avenue-lights.jpg",
      alt: "Chamundeshwari Residency illuminated concrete avenue during evening with street lights",
      caption: "Evening illumination along paved concrete avenue with blue-and-white curb demarcations",
    },
    entranceAvenue: {
      url: "/images/projects/chamundeshwari-residency/entrance-avenue.jpg",
      alt: "Chamundeshwari Residency wide paved road leading towards layout entrance archway",
      caption: "Wide paved access avenue leading towards the layout boundary",
    },
    verticalRoad: {
      url: "/images/projects/chamundeshwari-residency/vertical-paved-road.jpg",
      alt: "Chamundeshwari Residency paved concrete avenue with street lights and fencing",
      caption: "High-angle view of paved concrete avenue with streetlight poles",
    },
    layoutInfrastructure: {
      url: "/images/projects/chamundeshwari-residency/layout-infrastructure.jpg",
      alt: "Chamundeshwari Residency utility infrastructure, electric box, and demarcated curbs",
      caption: "On-ground infrastructure with utilities, tree saplings, and demarcated curb stones",
    },
  },

  // Gallery items for uniform photographic showcase
  gallery: [
    {
      id: "gallery-1",
      url: "/images/projects/chamundeshwari-residency/hero-avenue.jpg",
      title: "Paved Cement Concrete Internal Avenue",
      caption: "Wide cement concrete roads flanked by perimeter compound wall and avenue trees.",
    },
    {
      id: "gallery-2",
      url: "/images/projects/chamundeshwari-residency/sunset-avenue-lights.jpg",
      title: "Evening Illumination & Active Street Lighting",
      caption: "Operable street lighting fixtures lining the paved avenues with blue-and-white curb styling.",
    },
    {
      id: "gallery-3",
      url: "/images/projects/chamundeshwari-residency/entrance-avenue.jpg",
      title: "Wide Internal Access & Perimeter Setting",
      caption: "Expansive access road connecting all individual plots within the gated enclave.",
    },
    {
      id: "gallery-4",
      url: "/images/projects/chamundeshwari-residency/vertical-paved-road.jpg",
      title: "Constructed Road Network & Plot Demarcation",
      caption: "All-weather concrete roadway running through the residential layout.",
    },
    {
      id: "gallery-5",
      url: "/images/projects/chamundeshwari-residency/layout-infrastructure.jpg",
      title: "On-Ground Utilities & Plantation Rings",
      caption: "Physical infrastructure installation including utility connection points and individual tree pits.",
    },
  ],
};
