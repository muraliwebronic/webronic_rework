import { 
  Server, 
  Smartphone, 
  TrendingUp, 
  CreditCard, 
  Network, 
  Hotel, 
  Utensils, 
  AlertTriangle, 
  CheckCircle2, 
  DollarSign 
} from "lucide-react";

export const HOSPITALITY_STACK_CASES_PRICING_DATA = {
  stack: {
    title: "Hospitality Technology Stack",
    categories: [
      {
        title: "PMS",
        icon: Server,
        items: [
          "Oracle Opera, Cloudbeds, Mews",
          "Custom development (.NET, Node.js, PHP)"
        ]
      },
      {
        title: "Mobile",
        icon: Smartphone,
        items: [
          "React Native, Flutter for guest apps",
          "OpenKey, Assa Abloy for mobile key"
        ]
      },
      {
        title: "Revenue Management",
        icon: TrendingUp,
        items: [
          "IDeaS, Duetto, Atomize",
          "Python (ML models)"
        ]
      },
      {
        title: "POS",
        icon: CreditCard,
        items: [
          "Toast, Square, Lightspeed",
          "Oracle Simphony (enterprise)"
        ]
      },
      {
        title: "Integrations",
        icon: Network,
        items: [
          "Channel managers (SiteMinder, RateGain)",
          "GDS (Amadeus, Sabre)",
          "Payment gateways (Stripe, Adyen)"
        ]
      }
    ]
  },
  caseStudies: {
    title: "Hospitality Case Studies",
    cases: [
      {
        title: "Case Study 1: Boutique Hotel Contactless Experience",
        icon: Hotel,
        client: "Client: Boutique hotel, 120 rooms, urban location",
        challenge: {
          items: [
            "Long check-in lines (10-15 min wait times)",
            "Front desk staffing costs (24/7 coverage = 5 FTE)",
            "Guest complaints (waiting, impersonal service)",
            "Low guest satisfaction scores (3.9/5)"
          ]
        },
        solution: {
          items: [
            "Mobile check-in and mobile key (OpenKey integration)",
            "Guest messaging (chat with staff)",
            "In-room iPad (services, ordering, controls)",
            "Self-service kiosks (backup for non-mobile guests)",
            "PMS upgrade (Mews cloud PMS)"
          ]
        },
        results: {
          items: [
            "Mobile adoption: 72% of guests",
            "Check-in time: 5 min → 30 seconds",
            "Front desk labor: 5 → 3 FTE (40% savings = $60K/year)",
            "Guest satisfaction: 3.9 → 4.7/5",
            "Upsell revenue: 22% increase (mobile offers)",
            "Investment: $180K, ROI: 36 months"
          ]
        }
      },
      {
        title: "Case Study 2: Restaurant Online Ordering",
        icon: Utensils,
        client: "Client: Hotel restaurant, casual dining, $2M annual revenue",
        challenge: {
          items: [
            "Lunch business slow (office workers went elsewhere)",
            "Dinner capacity limited (60 seats)",
            "No takeout/delivery infrastructure",
            "Missing online ordering trend"
          ]
        },
        solution: {
          items: [
            "Online ordering platform (website + mobile app)",
            "Kitchen display system",
            "Integration with delivery platforms (DoorDash, Uber Eats)",
            "POS integration (seamless order flow)",
            "Marketing (email, social media promotion)"
          ]
        },
        results: {
          items: [
            "New revenue channel: $800K annually (40% increase)",
            "Lunch business: 65% increase (office delivery orders)",
            "Dinner capacity: Optimized (takeout during peak fills kitchen)",
            "Marketing database: 5,000 customers collected",
            "Investment: $45K, ROI: 8 months"
          ]
        }
      }
    ]
  },
  pricing: {
    title: "Hospitality Solution Pricing",
    categories: [
      {
        title: "Property Management System",
        icon: Server,
        items: [
          { label: "Small hotel (10-50 rooms)", price: "$200 - $1,000/month" },
          { label: "Mid-size (50-200 rooms)", price: "$1,500 - $5,000/month" },
          { label: "Large (200+ rooms)", price: "$8,000 - $30,000/month" }
        ]
      },
      {
        title: "Mobile Guest App",
        icon: Smartphone,
        items: [
          { label: "White-label solution", price: "$10,000 - $50,000 setup + $500-$3,000/month" },
          { label: "Custom app", price: "$75,000 - $200,000" }
        ]
      },
      {
        title: "Revenue Management System",
        icon: TrendingUp,
        items: [
          { label: "Small property", price: "$300 - $1,000/month" },
          { label: "Large hotel", price: "$2,000 - $10,000/month" }
        ]
      },
      {
        title: "Restaurant POS",
        icon: CreditCard,
        items: [
          { label: "Small restaurant", price: "$1,000 - $5,000 setup + $100-$300/month" },
          { label: "Multi-location", price: "$50,000 - $200,000" }
        ]
      },
      {
        title: "Online Ordering",
        icon: Utensils,
        items: [
          { label: "Platform", price: "$200 - $1,000/month" },
          { label: "Custom solution", price: "$25,000 - $100,000" }
        ]
      }
    ]
  }
};