import { 
  Smartphone, 
  Key, 
  MessageSquare, 
  LogOut, 
  TrendingUp, 
  BarChart, 
  Target, 
  Globe, 
  Utensils, 
  Wifi, 
  Calendar, 
  Plane, 
  Map, 
  Package, 
  CreditCard,
  CheckCircle2,
  Bell,
  Cpu,
  Server
} from "lucide-react";

export const HOSPITALITY_CONTACTLESS_RMS_DATA = {
  contactless: {
    title: "2. Contactless Guest Experience",
    app: {
      title: "Mobile Guest App",
      phases: [
        {
          title: "Pre-Arrival",
          icon: Smartphone,
          items: [
            "Mobile check-in (24-48 hours before arrival)",
            "Room selection (choose specific room)",
            "Upsells (room upgrades, early check-in, late checkout)",
            "Special requests (extra pillows, high floor, etc.)",
            "Digital registration (upload ID, sign forms)"
          ]
        },
        {
          title: "During Stay",
          icon: Key,
          subSections: [
            {
              label: "Mobile Key",
              items: ["Unlock room with smartphone (Bluetooth or NFC)", "Elevator access", "Amenity access (gym, pool, parking gate)", "Enhanced security (unique, temporary digital keys)"]
            },
            {
              label: "In-Room Services",
              items: ["Room service ordering (browse menu, order, pay)", "Housekeeping requests (extra towels, turn-down service)", "Maintenance requests (AC not working, report issue)", "Concierge services (restaurant reservations, directions, recommendations)", "Smart room controls (temperature, lighting, curtains, TV)"]
            },
            {
              label: "Guest Messaging",
              items: ["Chat with hotel staff (concierge, front desk, housekeeping)", "Real-time responses", "Automated responses for common questions", "Proactive messages (welcome, check-out reminder)"]
            }
          ]
        },
        {
          title: "Check-Out",
          icon: LogOut,
          items: [
            "Express mobile check-out (review charges, check out instantly)",
            "Digital receipt",
            "Feedback survey",
            "Loyalty points statement"
          ]
        }
      ]
    },
    benefits: {
      title: "Contactless Benefits",
      items: [
        "Reduced front desk interactions (60-80% of guests use mobile)",
        "Labor cost savings (fewer front desk staff needed)",
        "Faster check-in (30 seconds vs 5 minutes)",
        "Guest preference (72% prefer contactless options)",
        "Upsell opportunities (digital offers accepted 35% more)"
      ]
    }
  },
  rms: {
    title: "3. Revenue Management System (RMS)",
    pricing: {
      title: "Dynamic Pricing Optimization",
      forecasting: {
        title: "Demand Forecasting",
        description: "Predict occupancy and demand to optimize pricing:",
        inputs: {
          title: "Forecasting Inputs",
          items: ["Historical occupancy (same period previous years)", "Booking pace (how fast rooms booking vs historical)", "Events calendar (conferences, concerts, sports, holidays)", "Competitor pricing (rate shopping)", "Market trends (economic conditions, travel patterns)", "Weather forecasts (for leisure destinations)"]
        },
        models: {
          title: "ML Models",
          items: ["Time series forecasting (ARIMA, Prophet)", "Machine learning (XGBoost, neural networks)", "Ensemble methods (combine multiple models)"]
        },
        accuracy: "Forecast Accuracy: 85-92% typical (30-90 day horizon)"
      },
      recommendations: {
        title: "Rate Recommendations",
        dynamic: {
          title: "Dynamic Pricing",
          items: ["Optimize rates based on forecasted demand", "Increase rates when high demand forecasted", "Discount during low demand to drive bookings", "Vary rates by room type (standard, deluxe, suite)", "Day-of-week patterns (higher weekends for leisure, weekdays for business)"]
        },
        strategies: {
          title: "Pricing Strategies",
          items: ["Competitive pricing (match or beat competitors)", "Penetration pricing (undercut to gain market share)", "Premium pricing (for unique properties or peak demand)", "Value-based pricing (price based on perceived value)"]
        },
        channels: {
          title: "Channel Optimization",
          items: ["Vary pricing by channel (direct, OTA, corporate)", "Promote direct bookings (lower rates or perks)", "Restrict availability on high-commission channels during high demand", "Optimize OTA mix (which OTAs get inventory)"]
        }
      }
    },
    platforms: ["IDeaS (industry leader, Oracle-owned)", "Duetto", "Atomize", "Pace Revenue", "Custom RMS"],
    results: {
      title: "RMS Results",
      items: [
        "10-35% revenue increase (vs static pricing)",
        "8-12% occupancy improvement (optimized pricing attracts guests)",
        "Higher ADR (Average Daily Rate) during peak periods",
        "Better distribution (channel mix optimization)"
      ]
    }
  },
  restaurant: {
    title: "4. Restaurant & F&B Management",
    pos: {
      title: "Restaurant POS",
      orderMgmt: {
        title: "Order Management",
        items: ["Tableside ordering (tablets for servers)", "Kitchen display system (KDS) - orders sent electronically to kitchen", "Order routing (appetizers to cold station, entrees to hot line)", "Course timing (fire course 2 when course 1 served)", "Modifiers and special requests"]
      },
      payment: {
        title: "Payment",
        items: ["Split checks (multiple payments)", "Pay at table (portable terminals)", "Mobile payment (QR code, NFC)", "Integrated with PMS (charge to room for hotel restaurants)"]
      },
      inventory: {
        title: "Inventory Management",
        items: ["Recipe management (ingredients, portions, costs)", "Real-time inventory depletion (as items sold)", "Purchase orders to suppliers", "Waste tracking", "Food cost percentage reporting"]
      }
    },
    onlineOrdering: {
      title: "Online Ordering & Delivery",
      features: {
        title: "Features",
        items: ["Online ordering website/app", "Menu management (items, pricing, photos)", "Customization (toppings, sides, special instructions)", "Delivery or pickup", "Delivery tracking (driver location)", "Integration with delivery platforms (DoorDash, Uber Eats, Grubhub)"]
      },
      benefits: {
        title: "Benefits",
        items: ["30-50% revenue increase (new channel)", "Lower labor (no phone orders)", "Accurate orders (customer enters directly)", "Customer data collection (build marketing database)"]
      }
    },
    reservation: {
      title: "Reservation Management",
      table: {
        title: "Table Reservations",
        items: ["Online booking widget (website integration)", "Availability management (table inventory by time slot)", "Seating optimization (maximize table utilization)", "Waitlist management (walk-in queue)", "Guest profiles (preferences, VIP status, visit history)", "Automated reminders (email/SMS day before)"]
      },
      platforms: ["OpenTable (largest network)", "Resy", "SevenRooms", "Custom reservation systems"]
    }
  },
  travel: {
    title: "5. Travel Booking Platforms",
    ota: {
      title: "Online Travel Agency (OTA) Platform",
      categories: [
        {
          title: "Flight Booking",
          icon: Plane,
          items: ["GDS integration (Amadeus, Sabre, Travelport)", "Multi-city search", "Flexible dates (price calendar)", "Fare comparison", "Seat selection", "Ancillaries (baggage, meals, upgrades)"]
        },
        {
          title: "Hotel Booking",
          icon: Server,
          items: ["Global inventory (API aggregators - Expedia, Booking.com)", "Filter and sort (price, rating, amenities)", "Map view", "Photos and reviews", "Instant confirmation"]
        },
        {
          title: "Package Deals",
          icon: Package,
          items: ["Flight + hotel bundles (discounted)", "Dynamic packaging (combine flight, hotel, car, activities)", "Group bookings (cruises, tours)"]
        },
        {
          title: "Payment",
          icon: CreditCard,
          items: ["Multi-currency support", "Payment gateway integration", "Split payment (deposit + balance)", "Installment plans"]
        }
      ]
    }
  }
};