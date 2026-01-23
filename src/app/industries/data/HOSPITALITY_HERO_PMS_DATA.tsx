import { 
  Hotel, 
  TrendingUp, 
  Settings, 
  Smile, 
  Users, 
  Smartphone, 
  BarChart3, 
  Globe, 
  CreditCard,
  BedDouble,
  Briefcase,
  MonitorCheck,
  ClipboardList,
  Utensils,
  FileText
} from "lucide-react";

export const HOSPITALITY_HERO_PMS_DATA = {
  hero: {
    h1: "Hospitality & Travel Technology Solutions",
    description: "Guest experience platforms, contactless services, revenue management, online booking systems, and hotel operations automation.",
    stats: [
      { value: "80+", label: "Hospitality implementations", icon: Hotel },
      { value: "35%", label: "Revenue increase through dynamic pricing", icon: TrendingUp },
      { value: "40%", label: "Operational cost reduction", icon: Settings },
      { value: "4.8/5", label: "Average guest satisfaction", icon: Smile }
    ]
  },
  overview: {
    title: "Industry Overview",
    content: "Hospitality and travel industries embrace digital transformation driven by changing guest expectations, contactless service demand, personalization requirements, and operational efficiency needs.",
    challenges: [
      {
        title: "Labor Shortage",
        desc: "Difficulty hiring and retaining staff, high turnover (73% annual in hospitality), wage pressure, service quality impact.",
        icon: Users
      },
      {
        title: "Guest Expectations",
        desc: "Seamless digital experience expected (mobile check-in, keyless entry, in-room tech, personalized service).",
        icon: Smartphone
      },
      {
        title: "Revenue Management",
        desc: "Optimizing room rates across seasons, events, demand patterns, channel mix (direct, OTA, corporate).",
        icon: BarChart3
      },
      {
        title: "Operational Efficiency",
        desc: "Manual processes (check-in, housekeeping coordination, maintenance), communication gaps, inefficient workflows.",
        icon: Settings
      },
      {
        title: "Distribution Costs",
        desc: "OTA commissions (15-25%), difficulty driving direct bookings, channel management complexity.",
        icon: Globe
      }
    ],
    expertise: {
      title: "Our Hospitality Expertise",
      description: "80+ implementations for hotels, resorts, restaurants, travel agencies delivering:",
      stats: [
        "35% revenue increase through dynamic pricing and distribution optimization",
        "40% operational cost reduction through automation",
        "65% contactless adoption reducing front desk workload",
        "4.8/5 guest satisfaction scores"
      ]
    }
  },
  pms: {
    title: "1. Property Management System (PMS)",
    subTitle: "Hotel Operations Platform",
    frontOffice: {
      title: "Front Office",
      icon: MonitorCheck,
      columns: [
        {
          title: "Reservations",
          items: [
            "Online booking engine (direct website bookings)",
            "Channel manager integration (sync Booking.com, Expedia, Airbnb)",
            "Group bookings (conferences, weddings)",
            "Rate plans (BAR, corporate, government, promotional)",
            "Availability management",
            "Reservation modifications and cancellations"
          ]
        },
        {
          title: "Check-In / Check-Out",
          items: [
            "Traditional front desk check-in",
            "Mobile check-in (guest checks in via app before arrival)",
            "Self-service kiosks",
            "Express check-out",
            "Digital registration cards (paperless)",
            "ID verification and storage",
            "Payment processing (credit card authorization, settlement)"
          ]
        },
        {
          title: "Guest Profile",
          items: [
            "Contact information",
            "Preferences (pillow type, floor level, room type)",
            "VIP status and loyalty tier",
            "Stay history",
            "Special requests and notes"
          ]
        }
      ]
    },
    housekeeping: {
      title: "Housekeeping",
      icon: BedDouble,
      statusMgmt: {
        title: "Room Status Management",
        items: [
          "Real-time room status (occupied, vacant, dirty, clean, inspected, out of order)",
          "Housekeeping assignment (which rooms to clean)",
          "Task prioritization (VIP rooms, early arrivals, checkouts)",
          "Room inspections and quality checks"
        ]
      },
      mobileApp: {
        title: "Mobile App for Housekeepers",
        items: [
          "Task list (rooms to clean)",
          "Update room status instantly",
          "Report maintenance issues (photos, descriptions)",
          "Track time per room (productivity measurement)"
        ]
      },
      efficiency: {
        title: "Efficiency Gains",
        items: [
          "30% faster room turnover (real-time status updates)",
          "Better communication (no walkie-talkies or phones)",
          "Proactive maintenance (issues reported immediately)"
        ]
      }
    },
    pos: {
      title: "Point of Sale (POS)",
      icon: CreditCard,
      sections: [
        {
          title: "Integrated POS for hotel outlets",
          icon: Utensils,
          items: [
            "Restaurant POS (table service, takeout)",
            "Bar POS",
            "Spa bookings and checkout",
            "Gift shop sales",
            "Room service orders"
          ]
        },
        {
          title: "Guest Charging",
          icon: FileText,
          items: [
            "Charge to room (post charges to folio)",
            "Settlement at checkout",
            "Split billing (corporate/personal)"
          ]
        }
      ]
    },
    backOffice: {
      title: "Back Office",
      icon: Briefcase,
      sections: [
        {
          title: "Accounting",
          items: [
            "Daily audit (night audit process)",
            "Accounts receivable (corporate accounts, group billing)",
            "General ledger",
            "Financial reporting (revenue, occupancy, ADR, RevPAR)"
          ]
        },
        {
          title: "Rate Management",
          items: [
            "Rate plans and seasons",
            "Dynamic pricing recommendations",
            "Yield management",
            "Package management (room + breakfast, etc.)"
          ]
        }
      ]
    },
    platforms: ["Oracle Opera (enterprise hotels)", "Cloudbeds (cloud-based, all sizes)", "Mews (modern, cloud-native)", "Hotelogix", "Custom PMS development"]
  }
};