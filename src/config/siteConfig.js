/**
 * Centralized Single Source of Truth for Sparsh Spa (https://www.sparshspa.in/)
 * Keeps Business Name, Address, Phone (NAP), Services, Offers, and Legal copy consistent.
 */

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  OFFERS: "/offers",
  CONTACT: "/contact",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-and-conditions",
};

export const SITE_CONFIG = {
  SITE_URL: "https://www.sparshspa.in",
  BUSINESS_NAME: "Sparsh Spa",
  FULL_BRAND_NAME: "Sparsh Spa – Jalgaon",
  BUSINESS_TAGLINE: "Restorative Body Therapies & Wellness Sanctuary in Jalgaon",
  BUSINESS_DESCRIPTION:
    "A serene day spa in Navi Peth, Jalgaon offering Ayurvedic, Swedish, Deep Tissue, Aromatherapy, facials, and hydrotherapy in private sanitized suites.",

  // Consistent Business NAP
  PHONE_NUMBER: "+919152291135",
  PHONE_DISPLAY: "+91 91522 91135",
  WHATSAPP_NUMBER: "919152291135",
  WHATSAPP_DISPLAY: "+91 91522 91135",
  EMAIL: "sparshspa.jalgaon@gmail.com",
  ADDRESS:
    "Shop No. 10, 2nd Floor, Santbaba Hardasram Market, Station Road, Near Khandesh Central Mall (Nehru Chowk), Navi Peth, Jalgaon, Maharashtra 425001",
  SHORT_ADDRESS: "Navi Peth, Near Khandesh Central Mall, Jalgaon",
  LOCATION: "Navi Peth, Jalgaon",

  BUSINESS_HOURS: {
    WEEKDAYS: "10:00 AM – 11:00 PM",
    WEEKENDS: "10:00 AM – 11:00 PM",
    DISPLAY: "10:00 AM – 11:00 PM (Daily)",
  },

  // Google Maps Embed (Standard embed URL for Santbaba Hardasram Market, Navi Peth, Jalgaon)
  GOOGLE_MAPS_EMBED_URL:
    "https://www.google.com/maps?q=Khandesh+Central+Mall,+Navi+Peth,+Jalgaon,+Maharashtra+425001&output=embed",
  GOOGLE_MAPS_DIRECTIONS_URL:
    "https://www.google.com/maps/search/?api=1&query=Santbaba+Hardasram+Market+Near+Khandesh+Central+Mall+Navi+Peth+Jalgaon+425001",

  // Official direct links only (no shorteners)
  SOCIAL_MEDIA: {
    WHATSAPP: "https://wa.me/919152291135",
    INSTAGRAM: import.meta.env.VITE_INSTAGRAM_URL || "",
    FACEBOOK: import.meta.env.VITE_FACEBOOK_URL || "",
  },

  DEFAULT_WHATSAPP_MESSAGE:
    "Hello Sparsh Spa, I would like to inquire about booking a wellness session.",
};

// Policy-compliant, authentic spa treatments catalog
export const SERVICES_CATALOG = [
  {
    id: "swedish-massage",
    title: "Swedish Relaxation Massage",
    category: "massage",
    categoryLabel: "Body Massage",
    duration: "60 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/4.png",
    description:
      "Classic European full-body therapy using long, flowing effleurage strokes and gentle kneading to ease everyday muscle tension and encourage restful sleep.",
    highlights: [
      "Gentle rhythmic strokes",
      "Supports healthy circulation",
      "Private sanitized AC suite",
      "Warm herbal towel finish",
    ],
  },
  {
    id: "deep-tissue-massage",
    title: "Deep Tissue Bodywork",
    category: "massage",
    categoryLabel: "Body Massage",
    duration: "60 / 90 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/6.png",
    description:
      "Focused, firm pressure targeting deeper muscle layers and fascia to relieve stubborn knots, neck stiffness, and lower-back tightness from desk work or travel.",
    highlights: [
      "Targeted muscle release",
      "Customizable firm pressure",
      "Shoulder & lumbar focus",
      "Hot herbal compress",
    ],
  },
  {
    id: "thai-massage",
    title: "Traditional Thai Stretch Therapy",
    category: "massage",
    categoryLabel: "Body Massage",
    duration: "90 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/3.png",
    description:
      "Oil-free holistic session combining gentle rhythmic acupressure with assisted yoga-like stretching to restore joint mobility and calm physical fatigue.",
    highlights: [
      "Acupressure & assisted stretch",
      "Improves joint mobility",
      "Breath-paced relaxation",
      "Loose spa attire provided",
    ],
  },
  {
    id: "aromatherapy-massage",
    title: "Botanical Aromatherapy Massage",
    category: "massage",
    categoryLabel: "Body Massage",
    duration: "75 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/5.png",
    description:
      "Slow, soothing massage infused with cold-pressed lavender, lemongrass, and sweet almond essential oils to nourish dry skin and quiet a busy mind.",
    highlights: [
      "Pure cold-pressed essential oils",
      "Nourishing skin hydration",
      "Calming ambient acoustics",
      "Private steam & shower access",
    ],
  },
  {
    id: "ayurvedic-abhyanga",
    title: "Ayurvedic Warm Oil Abhyanga",
    category: "ayurveda",
    categoryLabel: "Ayurvedic Ritual",
    duration: "60 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/1.png",
    description:
      "Traditional warm herbal oil therapy following classical Ayurvedic strokes to replenish skin vitality, ease stiff joints, and promote grounded calm.",
    highlights: [
      "Warm herbal-infused oils",
      "Joint & spine comfort",
      "Traditional rhythmic strokes",
      "Post-session warm bath",
    ],
  },
  {
    id: "royal-jacuzzi-ritual",
    title: "Royal Jacuzzi & Body Ritual",
    category: "hydrotherapy",
    categoryLabel: "Hydrotherapy & Scrub",
    duration: "75 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/2.png",
    description:
      "Private temperature-controlled hydrotherapy bath with gentle mineral jets paired with an aromatic body massage for unhurried restoration.",
    highlights: [
      "Private sanitized Jacuzzi suite",
      "Mineral bath salts included",
      "Full-body massage pairing",
      "Fresh organic linens",
    ],
  },
  {
    id: "herbal-body-scrub",
    title: "Sandalwood & Saffron Body Polish",
    category: "facial",
    categoryLabel: "Facial & Body Care",
    duration: "60 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/bathtub.png",
    description:
      "Gentle full-body exfoliation using finely milled sandalwood, oatmeal, and botanical extracts followed by a hydrating body balm application.",
    highlights: [
      "Natural botanical exfoliant",
      "Smooth, refreshed skin texture",
      "Moisturizing shea balm wrap",
      "Private rinse shower",
    ],
  },
  {
    id: "foot-reflexology",
    title: "Restorative Foot Reflexology",
    category: "ayurveda",
    categoryLabel: "Ayurvedic Ritual",
    duration: "45 mins",
    priceLabel: "Price on Call",
    image: "/ServicesImg/welcome_img.png",
    description:
      "Focused thumb-and-finger pressure on key reflex zones of the feet and lower calves following a warm herbal soak to ease tired legs.",
    highlights: [
      "Warm herbal foot soak",
      "Calf & arch pressure relief",
      "Cooling mint balm finish",
      "Ideal express recharge",
    ],
  },
];

export const OFFERS_CATALOG = [
  {
    id: "couples-retreat",
    image: "/OffersImg/1.png",
    category: "Couples Wellness",
    title: "Couple Harmony Spa Package",
    duration: "90 mins",
    priceLabel: "Price on Call",
    description:
      "Side-by-side 60-minute Swedish or Aromatherapy massages in our private couple suite, followed by 30 minutes of steam and herbal tea refreshment.",
    inclusions: [
      "Private couple AC suite",
      "Choice of Swedish or Aroma Oil",
      "Warm herbal tea service",
      "Complimentary steam & shower",
    ],
  },
  {
    id: "signature-weekday",
    image: "/OffersImg/2.png",
    category: "Signature Therapies",
    title: "Weekday Rejuvenation Session",
    duration: "60 mins",
    priceLabel: "Price on Call",
    description:
      "Enjoy our signature 60-minute Swedish, Aromatherapy, or Deep Tissue session Monday through Thursday between 10:00 AM and 4:00 PM.",
    inclusions: [
      "60-minute full-body session",
      "Certified spa therapist",
      "Cold-pressed aromatic oils",
      "Fresh linens & hot shower",
    ],
  },
  {
    id: "wellness-membership",
    image: "/OffersImg/3.png",
    category: "Membership Plan",
    title: "5-Session Wellness Pass",
    duration: "5 × 60 mins",
    priceLabel: "Price on Call",
    description:
      "Designed for regular self-care in Jalgaon. Includes five 60-minute massage or body scrub sessions valid for 6 months with priority slot booking.",
    inclusions: [
      "5 sessions valid for 6 months",
      "Priority appointment scheduling",
      "Transferable to one family member",
      "Complimentary foot soak upgrade",
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Ravi Kulkarni",
    role: "Software Consultant · Jalgaon",
    service: "Deep Tissue Bodywork",
    date: "October 2026",
    rating: 5,
    feedback:
      "Clean treatment rooms, polite reception, and a very thorough deep tissue session. My upper back stiffness from long laptop hours felt noticeably lighter afterward.",
  },
  {
    id: 2,
    name: "Snehal Deshmukh",
    role: "Architect · Navi Peth",
    service: "Botanical Aromatherapy Massage",
    date: "October 2026",
    rating: 5,
    feedback:
      "Calm lighting, fresh towels, and zero rush. The therapist checked my pressure preference twice during the 75-minute session. Truly peaceful ambience right in the city center.",
  },
  {
    id: 3,
    name: "Vikas & Pooja Patil",
    role: "Business Owners · Jalgaon",
    service: "Couple Harmony Spa Package",
    date: "September 2026",
    rating: 5,
    feedback:
      "Booked the couple suite for our anniversary weekend. Everything from sanitization to the herbal tea afterward was thoughtful and well organized.",
  },
  {
    id: 4,
    name: "Suresh Chaudhari",
    role: "Bank Manager · Jalgaon",
    service: "Ayurvedic Warm Oil Abhyanga",
    date: "November 2026",
    rating: 5,
    feedback:
      "Authentic warm herbal oil therapy with great attention to hygiene. Easy to find near Khandesh Central Mall and convenient evening hours.",
  },
];

export const FAQ_DATA = [
  {
    q: "What are your operating hours and do you accept walk-ins?",
    a: "Sparsh Spa is open daily from 10:00 AM to 11:00 PM. Walk-in guests are welcome based on suite availability, though booking ahead by phone or WhatsApp ensures your preferred time slot.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can submit an appointment inquiry through our Contact page, use the on-page Concierge drawer, message us on WhatsApp, or call +91 91522 91135 directly.",
  },
  {
    q: "Which treatments are best for muscle tension vs. pure relaxation?",
    a: "For deep muscle knots and neck or back stiffness, we recommend Deep Tissue Bodywork or Traditional Thai Stretch Therapy. For gentle stress relief and better sleep, Swedish Relaxation Massage or Botanical Aromatherapy are ideal.",
  },
  {
    q: "Do you offer private couple suites?",
    a: "Yes. Our private couple suites allow two guests to enjoy simultaneous treatments in a tranquil, sanitized room. Please mention couple suite availability when scheduling.",
  },
  {
    q: "What hygiene and sanitization standards do you follow?",
    a: "Every suite is sanitized between appointments. Freshly laundered linens, disposable slippers, and sealed single-use consumables are prepared before each guest arrives.",
  },
  {
    q: "Where is Sparsh Spa located in Jalgaon?",
    a: "We are located at Shop No. 10, 2nd Floor, Santbaba Hardasram Market, Station Road, Near Khandesh Central Mall (Nehru Chowk), Navi Peth, Jalgaon, Maharashtra 425001.",
  },
];

// Backward-compatible alias for existing imports
export const CONFIG = SITE_CONFIG;
