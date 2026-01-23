import { 
  Truck, 
  MapPin, 
  Package, 
  BarChart3, 
  Clock, 
  TrendingDown, 
  AlertTriangle, 
  Eye, 
  DollarSign, 
  Users, 
  Warehouse, 
  FileCheck, 
  Globe, 
  Navigation,
  Layers,
  Smartphone,
  PieChart,
  Monitor
} from "lucide-react";

export const LOGISTICS_HERO_TMS_DATA = {
  hero: {
    h1: "Logistics & Supply Chain Technology Solutions",
    description: "Transform logistics operations with AI-powered route optimization, real-time tracking, warehouse automation, and predictive analytics delivering 30% cost reduction and 99% on-time delivery.",
    stats: [
      { value: "75+", label: "Logistics implementations", icon: Truck },
      { value: "30%", label: "Average transportation cost reduction", icon: TrendingDown },
      { value: "99%", label: "On-time delivery achievement", icon: Clock },
      { value: "40%", label: "Warehouse productivity improvement", icon: Warehouse },
      { value: "25%", label: "Inventory carrying cost reduction", icon: Package }
    ]
  },
  overview: {
    title: "Industry Overview",
    content: "Logistics and supply chain management faces unprecedented complexity. E-commerce drives demand for same-day delivery, customers expect real-time visibility, fuel costs fluctuate, driver shortages persist, and global supply chains grow increasingly vulnerable to disruption.",
    challenges: {
      title: "Critical Logistics Challenges:",
      items: [
        {
          title: "Last-Mile Delivery",
          description: "Most expensive segment (28% of total shipping cost), urban congestion, failed deliveries, customer expectations for free/fast delivery.",
          icon: MapPin
        },
        {
          title: "Visibility Gaps",
          description: "Lack of real-time tracking across multi-modal shipments (ocean, air, rail, truck), delays in information flow, inability to proactively address issues.",
          icon: Eye
        },
        {
          title: "Cost Pressure",
          description: "Rising fuel costs, driver wage increases, tolls, insurance, equipment maintenance, competitive pricing pressure.",
          icon: DollarSign
        },
        {
          title: "Driver Shortage",
          description: "Aging workforce, high turnover (90% annual in US), recruiting challenges, retention issues, compensation expectations.",
          icon: Users
        },
        {
          title: "Capacity Constraints",
          description: "Peak season demand (holidays, promotions), equipment availability, warehouse space limitations, port congestion.",
          icon: Warehouse
        },
        {
          title: "Regulatory Compliance",
          description: "Hours of Service (HOS) regulations, customs documentation, hazmat handling, cross-border compliance, environmental regulations.",
          icon: FileCheck
        }
      ]
    },
    expertise: {
      title: "Our Logistics Expertise:",
      description: "We’ve implemented 75+ logistics solutions for freight forwarders, 3PLs, last-mile delivery companies, warehouse operators, and supply chain consultants.",
      resultsTitle: "Our solutions deliver:",
      results: [
        { text: "30% transportation cost reduction through route optimization", icon: TrendingDown },
        { text: "99% on-time delivery rates", icon: Clock },
        { text: "40% warehouse picking productivity improvement", icon: Warehouse },
        { text: "25% inventory carrying cost reduction", icon: Package },
        { text: "Real-time visibility across entire supply chain", icon: Eye }
      ]
    }
  },
  tms: {
    title: "1. Transportation Management System (TMS)",
    freightManagement: {
      title: "Comprehensive Freight Management",
      icon: Truck,
      sections: [
        {
          title: "Load Planning & Optimization",
          subTitle: "Shipment Consolidation",
          items: [
            "Combine multiple orders into full truckloads (FTL)",
            "Less-than-truckload (LTL) optimization",
            "Mixed product consolidation",
            "Multi-stop route planning",
            "Weight and cube utilization (maximize trailer capacity)"
          ]
        },
        {
          title: "Carrier Selection",
          items: [
            "Multi-carrier rate comparison (spot rates, contract rates)",
            "Service level matching (next-day, 2-day, ground)",
            "Performance-based selection (on-time %, damage rates)",
            "Cost optimization algorithms",
            "Automated carrier assignment"
          ]
        },
        {
          title: "Route Optimization",
          items: [
            "AI-powered routing algorithms",
            "Multi-stop optimization (delivery sequence)",
            "Time window constraints (appointment scheduling)",
            "Driver hours of service (HOS) compliance",
            "Real-time traffic integration (avoid delays)",
            "Geographic constraints (truck restrictions, hazmat routes)"
          ]
        },
        {
          title: "Cost Savings",
          items: [
            "20-30% freight cost reduction typical",
            "Improved truck utilization (90%+ fill rate vs 70% manual)",
            "Reduced empty miles (backhaul optimization)"
          ]
        }
      ]
    },
    orderManagement: {
      title: "Order Management",
      icon: Layers,
      sections: [
        {
          title: "Order Consolidation",
          items: [
            "Group orders by destination, delivery window",
            "Split large orders across shipments",
            "Drop-ship vs warehouse fulfillment routing"
          ]
        },
        {
          title: "Shipping Label Generation",
          items: [
            "Automated BOL (Bill of Lading) creation",
            "Shipping labels with barcodes",
            "Packing slips",
            "Customs documentation (commercial invoice, packing list)",
            "Hazmat documentation"
          ]
        },
        {
          title: "Carrier Integration",
          items: [
            "API integration with carriers (UPS, FedEx, DHL, regional carriers)",
            "Real-time rate quotes",
            "Label generation via carrier API",
            "Tracking number retrieval",
            "Proof of delivery (POD) collection"
          ]
        }
      ]
    },
    tracking: {
      title: "Real-Time Tracking & Visibility",
      icon: MapPin,
      sections: [
        {
          title: "Shipment Tracking",
          items: [
            "GPS tracking devices on vehicles",
            "Cellular triangulation",
            "Check-in points (geo-fencing)",
            "ELD (Electronic Logging Device) integration",
            "Real-time map view (all shipments)"
          ]
        },
        {
          title: "Customer Notifications",
          items: [
            "Shipment confirmation (order placed)",
            "In-transit updates (every checkpoint)",
            "Out-for-delivery alerts",
            "Delivered notifications with POD photo",
            "Exception alerts (delays, failed delivery)",
            "SMS, email, push notifications"
          ]
        },
        {
          title: "Visibility Portal",
          items: [
            "Customer self-service tracking",
            "Estimated delivery time (dynamic, updates with traffic)",
            "Delivery exception management",
            "Reroute/reschedule requests",
            "Signature capture and photo proof"
          ]
        }
      ]
    },
    analytics: {
      title: "Analytics & Reporting",
      icon: PieChart,
      sections: [
        {
          title: "Freight Spend Analysis",
          items: [
            "Total freight costs by period",
            "Cost per shipment, per pound, per mile",
            "Carrier spend breakdown",
            "Lane analysis (origin-destination pairs)",
            "Accessorial charge analysis (unexpected fees)"
          ]
        },
        {
          title: "Performance Metrics",
          items: [
            "On-time delivery % (by carrier, by lane)",
            "Damage and loss rates",
            "Average transit time",
            "Cost per mile",
            "Truck utilization rate"
          ]
        },
        {
          title: "Carrier Scorecards",
          items: [
            "On-time performance",
            "Claim ratio (damage/loss)",
            "Responsiveness",
            "Rate competitiveness",
            "Capacity availability"
          ]
        }
      ]
    },
    platforms: {
      title: "TMS Platforms",
      icon: Monitor,
      items: [
        "Oracle Transportation Management",
        "SAP Transportation Management",
        "Manhattan Associates TMS",
        "Blue Yonder (JDA) TMS",
        "MercuryGate",
        "Custom TMS development"
      ]
    }
  }
};