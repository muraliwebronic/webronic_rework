import { 
  Factory, 
  Activity, 
  ScanEye, 
  ClipboardList, 
  Truck, 
  Zap, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  FileText, 
  Table 
} from "lucide-react";

export const MANUFACTURING_PRICING_DATA = {
  pricing: {
    title: "Manufacturing Solutions Pricing",
    categories: [
      {
        title: "Industry 4.0 / Smart Factory Transformation",
        icon: Factory,
        items: [
          { label: "Assessment & roadmap development", price: "$25,000 - $75,000" },
          { label: "Pilot implementation (10-20 machines)", price: "$100,000 - $250,000" },
          { label: "Full-scale deployment (100+ machines)", price: "$500,000 - $2M+" },
          { label: "Annual platform subscription", price: "$50,000 - $200,000", sub: "(cloud platform, support)" }
        ]
      },
      {
        title: "Predictive Maintenance Program",
        icon: Activity,
        items: [
          { label: "Pilot program (20 critical assets)", price: "$75,000 - $150,000" },
          { label: "Production deployment (100 assets)", price: "$300,000 - $750,000" },
          { label: "Annual managed service", price: "$50,000 - $200,000", sub: "(monitoring, alerts, analysis)" }
        ]
      },
      {
        title: "Computer Vision Quality Inspection",
        icon: ScanEye,
        items: [
          { label: "Single inspection station", price: "$50,000 - $100,000", sub: "(camera, lighting, PC, software)" },
          { label: "Model development (custom defect detection)", price: "$25,000 - $100,000" },
          { label: "Multi-line deployment (10+ stations)", price: "$500,000 - $1.5M" },
          { label: "Annual support & model retraining", price: "$25,000 - $100,000" }
        ]
      },
      {
        title: "MES Implementation",
        icon: ClipboardList,
        items: [
          { label: "Small facility (1-2 lines)", price: "$200,000 - $500,000" },
          { label: "Medium facility (5-10 lines)", price: "$750,000 - $1.5M" },
          { label: "Large facility (20+ lines)", price: "$2M - $5M+" },
          { label: "Annual subscription (cloud-based MES)", price: "$50,000 - $300,000" }
        ]
      },
      {
        title: "Supply Chain Optimization",
        icon: Truck,
        items: [
          { label: "Demand forecasting system", price: "$100,000 - $300,000" },
          { label: "Inventory optimization", price: "$75,000 - $250,000" },
          { label: "Supplier collaboration portal", price: "$150,000 - $500,000" },
          { label: "Full supply chain platform", price: "$500,000 - $2M+" }
        ]
      },
      {
        title: "Energy Management System",
        icon: Zap,
        items: [
          { label: "Energy monitoring system (single facility)", price: "$50,000 - $150,000" },
          { label: "Multi-site energy management", price: "$200,000 - $750,000" },
          { label: "ISO 50001 certification consulting", price: "$50,000 - $150,000" }
        ]
      }
    ]
  },
  gettingStarted: {
    title: "Getting Started",
    assessment: {
      title: "Free Manufacturing Assessment",
      subtitle: "Complimentary operations audit including:",
      items: [
        "Current state maturity evaluation (Industry 3.0 vs. 4.0 readiness)",
        "Technology gap analysis",
        "ROI estimation for priority initiatives",
        "Roadmap development (phased implementation plan)",
        "No obligation quote"
      ],
      cta: "Request Manufacturing Assessment →"
    },
    tour: {
      title: "Schedule Facility Tour",
      description: "Visit one of our reference customers to see Industry 4.0 in action:",
      items: [
        "Live predictive maintenance system",
        "Computer vision quality inspection",
        "Real-time OEE dashboards",
        "MES operations"
      ],
      icon: MapPin
    },
    contact: {
      title: "Contact Manufacturing Team",
      details: [
        { label: "Email", value: "manufacturing@webronic.com", icon: Mail },
        { label: "Phone", value: "+91 72000 88500", icon: Phone },
        { label: "Hours", value: "Monday-Friday, 9 AM - 6 PM IST", icon: Clock }
      ]
    },
    downloads: {
      title: "Download Resources",
      items: [
        { name: "Industry 4.0 whitepaper (PDF)", icon: FileText },
        { name: "Predictive maintenance guide", icon: FileText },
        { name: "ROI calculator (Excel)", icon: Table },
        { name: "Case study library", icon: Download }
      ]
    }
  }
};