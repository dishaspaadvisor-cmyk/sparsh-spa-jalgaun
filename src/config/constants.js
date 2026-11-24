// Centralized configuration for the Sparsh Spa - Jalgaon website
export const CONFIG = {
  // Business Information
  BUSINESS_NAME: "Sparsh Spa - Jalgaon",
  BUSINESS_TAGLINE: "Experience True Luxury & Wellness",
  BUSINESS_DESCRIPTION: "Premium Spa & Massage Therapy designed to relax your body, mind, and soul.",

  // Contact Information
  PHONE_NUMBER: "+919152291135",
  PHONE_DISPLAY: "+91 91522 91135",
  WHATSAPP_NUMBER: "919152291135",
  WHATSAPP_DISPLAY: "+91 91522 91135",
  EMAIL: "sparshspa.jalgaon@gmail.com",
  ADDRESS: "Shop No. 10, 2nd Floor, Santbaba Hardasram Market, Station Road, Near Khandesh Central Mall, (Nehru Chowk), Navi Peth, Jalgaon, Maharashtra 425001",
  LOCATION: "Jalgaon",

  // Default Messages
  DEFAULT_WHATSAPP_MESSAGE: "Hello, I want to book an appointment",

  // Business Hours
  BUSINESS_HOURS: {
    WEEKDAYS: "10:00 AM - 11:00 PM",
    WEEKENDS: "10:00 AM - 11:00 PM",
    DISPLAY: "10:00 AM - 11:00 PM"
  },

  // Social Media
  SOCIAL_MEDIA: {
    WHATSAPP: "https://wa.me/919152291135",
    INSTAGRAM: "",
    FACEBOOK: "",
    X: "",
    LINKEDIN: ""
  },

  // Services
  SERVICES: {
    DEEP_TISSUE: {
      name: "Deep Tissue Massage",
      duration: "60-90 mins",
      price: "Starting from ₹1,500"
    },
    HOT_STONE: {
      name: "Hot Stone Massage",
      duration: "75 mins",
      price: "Starting from ₹2,000"
    },
    FULL_BODY: {
      name: "Full Body Massage",
      duration: "60 mins",
      price: "Starting from ₹1,200"
    },
    HEAD_MASSAGE: {
      name: "Head Massage",
      duration: "30 mins",
      price: "Starting from ₹800"
    },
    FOOT_REFLEXOLOGY: {
      name: "Foot Reflexology",
      duration: "45 mins",
      price: "Starting from ₹1,000"
    },
    THAI_MASSAGE: {
      name: "Thai Massage",
      duration: "90 mins",
      price: "Starting from ₹1,800"
    }
  }
};

// Navigation routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
  OFFERS: "/offers",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-and-conditions"
};

// API endpoints (if needed in future)
export const API_ENDPOINTS = {
  CONTACT_FORM: "/api/contact",
  BOOKING: "/api/booking",
  SERVICES: "/api/services"
};
