import { 
  Database, 
  Map, 
  Smartphone, 
  Radio, 
  Network, 
  Truck, 
  Package, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign,
  BoxSelect,
  Globe,
  Activity
} from "lucide-react";

export const LOGISTICS_STACK_CASES_PRICING_DATA = {
  stack: {
    title: "Logistics Technology Stack",
    categories: [
      {
        title: "TMS & WMS",
        icon: Database,
        items: [
          "Oracle, SAP, Manhattan, Blue Yonder",
          "Custom platforms (Node.js, Python, .NET)"
        ]
      },
      {
        title: "Route Optimization",
        icon: Map,
        items: [
          "Google Maps API, HERE Maps, Mapbox",
          "OptaPlanner, OSRM, Vroom",
          "Machine learning (Python, TensorFlow)"
        ]
      },
      {
        title: "Mobile Apps",
        icon: Smartphone,
        items: [
          "React Native, Flutter for driver apps",
          "Barcode scanning (Zebra, Honeywell devices)",
          "Signature capture, photo upload"
        ]
      },
      {
        title: "Tracking & IoT",
        icon: Radio,
        items: [
          "GPS devices (Geotab, Verizon Connect, Samsara)",
          "RFID (passive, active tags)",
          "BLE beacons",
          "Temperature sensors (cold chain)"
        ]
      },
      {
        title: "Integration",
        icon: Network,
        items: [
          "EDI (X12, EDIFACT standards)",
          "APIs (REST, GraphQL)",
          "File transfer (SFTP, AS2)"
        ]
      }
    ]
  },
  caseStudies: {
    title: "Logistics Case Studies",
    cases: [
      {
        title: "Case Study 1: E-Commerce Last-Mile Delivery",
        icon: Truck,
        client: "Client: E-commerce company, 50,000 deliveries/day",
        challenge: {
          items: [
            "Manual route planning taking 3 hours/day",
            "Drivers making 60-80 stops/day (capable of 100+)",
            "12% late deliveries",
            "High fuel costs",
            "Customer complaints about delivery windows"
          ]
        },
        solution: {
          items: [
            "AI-powered route optimization platform",
            "Mobile driver app (turn-by-turn, POD capture)",
            "Real-time customer notifications",
            "Dynamic routing (adjust for traffic, new orders)",
            "Dispatcher dashboard (monitor all drivers)"
          ]
        },
        results: {
          items: [
            "Route planning time: 3 hours → 15 minutes (automated)",
            "Deliveries per driver: 80 → 120 stops/day (50% increase)",
            "On-time delivery: 88% → 99%",
            "Fuel costs: 25% reduction (optimized routes)",
            "Customer satisfaction: 4.2 → 4.8/5",
            "ROI: 6 months"
          ]
        }
      },
      {
        title: "Case Study 2: Warehouse Automation",
        icon: BoxSelect,
        client: "Client: 3PL warehouse, 500,000 sq ft, 100 employees",
        challenge: {
          items: [
            "Picking accuracy: 96% (4% errors causing returns)",
            "Picking rate: 80 units/hour (slow)",
            "Peak season capacity constraints",
            "High labor costs",
            "Inventory accuracy issues"
          ]
        },
        solution: {
          items: [
            "WMS implementation (Manhattan Associates)",
            "Voice-directed picking (Vocollect)",
            "Automated sortation conveyor",
            "Cycle counting program",
            "RF barcode scanning throughout"
          ]
        },
        results: {
          items: [
            "Picking accuracy: 99.7% (67% error reduction)",
            "Picking rate: 140 units/hour (75% increase)",
            "Labor productivity: 40% improvement",
            "Inventory accuracy: 98.5% → 99.8%",
            "Peak capacity: Handled 50% more volume with same staff",
            "Annual savings: $1.2M (labor, errors, efficiency)",
            "Investment: $2.8M, ROI: 28 months"
          ]
        }
      }
    ]
  },
  pricing: {
    title: "Logistics Solution Pricing",
    categories: [
      {
        title: "Transportation Management System",
        icon: Truck,
        items: [
          { label: "Small fleet (10-50 trucks)", price: "$50,000 - $150,000" },
          { label: "Mid-size (50-200 trucks)", price: "$200,000 - $500,000" },
          { label: "Enterprise (200+ trucks)", price: "$750,000 - $2M+" },
          { label: "SaaS TMS", price: "$200 - $1,000/month per user" }
        ]
      },
      {
        title: "Warehouse Management System",
        icon: BoxSelect,
        items: [
          { label: "Small warehouse", price: "$100,000 - $300,000" },
          { label: "Medium warehouse", price: "$400,000 - $1M" },
          { label: "Large facility", price: "$1.5M - $5M+" },
          { label: "Cloud WMS", price: "$5,000 - $50,000/month" }
        ]
      },
      {
        title: "Route Optimization",
        icon: Map,
        items: [
          { label: "Small business (5-20 routes)", price: "$10,000 - $50,000" },
          { label: "Enterprise", price: "$100,000 - $500,000" },
          { label: "SaaS", price: "$100 - $500/month per vehicle" }
        ]
      },
      {
        title: "Fleet Management",
        icon: Activity,
        items: [
          { label: "GPS tracking", price: "$25 - $50/vehicle/month" },
          { label: "Full telematics", price: "$50 - $150/vehicle/month" },
          { label: "Platform implementation", price: "$50,000 - $250,000" }
        ]
      },
      {
        title: "Supply Chain Visibility",
        icon: Globe,
        items: [
          { label: "Mid-market", price: "$150,000 - $500,000" },
          { label: "Enterprise", price: "$750,000 - $2M+" }
        ]
      }
    ]
  }
};