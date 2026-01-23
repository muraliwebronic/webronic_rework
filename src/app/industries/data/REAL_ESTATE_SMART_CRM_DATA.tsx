import { 
  Cpu, 
  Wind, 
  Lightbulb, 
  Lock, 
  Zap, 
  Smartphone, 
  Smile, 
  TrendingUp, 
  Users, 
  Mail, 
  BarChart, 
  Layers, 
  Building2, 
  Briefcase, 
  PenTool, 
  Clipboard, 
  Layout, 
  Wifi, 
  CheckCircle2, 
  AlertTriangle,
  DollarSign,
  Clock
} from "lucide-react";

export const REAL_ESTATE_SMART_CRM_DATA = {
  smartBuilding: {
    title: "3. Smart Building Automation",
    bms: {
      title: "Building Management System (BMS)",
      categories: [
        {
          title: "HVAC Control",
          icon: Wind,
          items: [
            "Centralized control of heating, cooling, ventilation",
            "Occupancy-based control (unoccupied spaces reduce HVAC)",
            "Temperature scheduling (setback at night/weekends)",
            "Zone control (different areas different temps)",
            "Demand-controlled ventilation (CO2 sensors adjust fresh air)"
          ]
        },
        {
          title: "Lighting Control",
          icon: Lightbulb,
          items: [
            "Occupancy sensors (auto off when empty)",
            "Daylight harvesting (dim when natural light available)",
            "Scheduling (off during unoccupied hours)",
            "Scene control (preset lighting levels)"
          ]
        },
        {
          title: "Access Control",
          icon: Lock,
          items: [
            "Electronic locks (keycard, mobile app, biometric)",
            "Visitor management",
            "Elevator access control (restrict floors)",
            "Parking gate integration"
          ]
        },
        {
          title: "Energy Management",
          icon: Zap,
          items: [
            "Real-time energy monitoring (electricity, gas, water)",
            "Demand response (reduce load during peak pricing)",
            "Power factor correction",
            "Tenant submetering and billing"
          ]
        }
      ]
    },
    iot: {
      title: "IoT Sensors",
      items: [
        {
          title: "Environmental Monitoring",
          details: ["Temperature, humidity sensors", "CO2 levels (air quality)", "Occupancy detection (motion, desk sensors)", "Water leak detection", "Smoke and fire detection"]
        },
        {
          title: "Predictive Maintenance",
          details: ["Equipment runtime hours", "Filter change indicators", "Bearing temperature (motor health)", "Vibration analysis"]
        }
      ]
    },
    tenantExp: {
      title: "Tenant Experience",
      app: {
        title: "Mobile App",
        icon: Smartphone,
        items: [
          "Access control (unlock doors with phone)",
          "Visitor pre-registration",
          "Conference room booking",
          "Amenity reservation (gym, lounge)",
          "Parking spot assignment",
          "Maintenance requests",
          "Package delivery notifications"
        ]
      },
      benefits: {
        title: "Benefits",
        items: [
          "25-35% energy cost reduction",
          "30% reduction in maintenance costs (proactive vs reactive)",
          "Improved tenant satisfaction",
          "Premium rent command (smart building amenities)"
        ]
      }
    }
  },
  crm: {
    title: "4. Real Estate CRM & Sales",
    stages: [
      {
        title: "Lead Management",
        icon: Users,
        subSections: [
          {
            label: "Lead Capture",
            items: ["Website inquiries", "Property listing portals (Zillow, Realtor.com)", "Social media ads", "Walk-ins and phone calls", "Open house sign-ins"]
          },
          {
            label: "Lead Nurturing",
            items: ["Automated email campaigns", "Property recommendations (based on preferences)", "Virtual tours and videos", "Market updates and newsletters"]
          }
        ]
      },
      {
        title: "Sales Pipeline",
        icon: TrendingUp,
        items: [
          "Lead → Prospect → Showing → Offer → Contract → Close",
          "Activity tracking (calls, emails, showings)",
          "Task reminders (follow-ups)",
          "Deal forecasting"
        ]
      }
    ],
    platforms: ["Salesforce (custom for real estate)", "HubSpot", "Follow Up Boss", "LionDesk", "Custom CRM"]
  },
  stack: {
    title: "Real Estate Technology Stack",
    categories: [
      {
        title: "BIM & Design",
        icon: PenTool,
        items: ["Autodesk Revit, ArchiCAD", "Navisworks, Solibri (clash detection)", "SketchUp, Rhino (conceptual design)"]
      },
      {
        title: "Project Management",
        icon: Clipboard,
        items: ["Procore, PlanGrid", "Autodesk Construction Cloud", "Microsoft Project, Primavera P6"]
      },
      {
        title: "Property Management",
        icon: Layout,
        items: ["Yardi, AppFolio, Buildium", "Custom platforms (Node.js, .NET)"]
      },
      {
        title: "BMS & IoT",
        icon: Wifi,
        items: ["Johnson Controls, Honeywell, Siemens", "MQTT for IoT communication", "Cloud platforms (AWS IoT, Azure IoT)"]
      }
    ]
  },
  caseStudies: {
    title: "Real Estate Case Studies",
    cases: [
      {
        title: "Case Study 1: Smart Office Building",
        client: "Client: Class A office tower, 500,000 sq ft, 40 tenants",
        challenge: {
          items: [
            "High energy costs ($1.2M annually)",
            "Tenant complaints (temperature inconsistency)",
            "Maintenance reactive (equipment failures)",
            "No tenant amenities"
          ]
        },
        solution: {
          items: [
            "Building Management System upgrade (Johnson Controls)",
            "500 IoT sensors (temperature, occupancy, CO2)",
            "Mobile tenant app (access, amenities, requests)",
            "Predictive maintenance analytics"
          ]
        },
        results: {
          items: [
            "Energy costs: 28% reduction ($336K annual savings)",
            "Tenant satisfaction: 3.8 → 4.6/5",
            "Maintenance costs: 35% reduction (proactive)",
            "Rent premium: 12% (smart building amenities)",
            "Investment: $850K, ROI: 30 months"
          ]
        }
      },
      {
        title: "Case Study 2: Construction Project Collaboration",
        client: "Client: Mixed-use development, $120M project",
        challenge: {
          items: [
            "Coordination issues (architectural, structural, MEP conflicts)",
            "RFIs averaging 800 per project (delays)",
            "Change orders: 15% of project cost",
            "Schedule delays"
          ]
        },
        solution: {
          items: [
            "Full BIM implementation (Revit for all disciplines)",
            "Weekly clash detection (Navisworks)",
            "Procore for project management",
            "Mobile field apps for superintendents"
          ]
        },
        results: {
          items: [
            "RFIs: 800 → 320 (60% reduction)",
            "Change orders: 15% → 6% ($10.8M savings)",
            "On-time completion (vs typical 40% delay rate)",
            "Quality scores improved 25%"
          ]
        }
      }
    ]
  },
  pricing: {
    title: "Real Estate Solution Pricing",
    categories: [
      {
        title: "Property Management Software",
        icon: Layout,
        items: [
          { label: "Small (10-50 units)", price: "$100 - $500/month" },
          { label: "Mid (50-500 units)", price: "$500 - $3,000/month" },
          { label: "Large (500+ units)", price: "$5,000 - $25,000/month" }
        ]
      },
      {
        title: "BIM Implementation",
        icon: PenTool,
        items: [
          { label: "BIM training and setup", price: "$50,000 - $200,000" },
          { label: "Modeling services", price: "$10,000 - $100,000 per project" },
          { label: "Clash detection", price: "$5,000 - $25,000 per project" }
        ]
      },
      {
        title: "Construction Project Management",
        icon: Clipboard,
        items: [
          { label: "Procore implementation", price: "$50,000 - $200,000" },
          { label: "Subscription", price: "$500 - $5,000/month" }
        ]
      },
      {
        title: "Smart Building Automation",
        icon: Cpu,
        items: [
          { label: "Small building", price: "$100,000 - $300,000" },
          { label: "Large tower", price: "$1M - $5M+" },
          { label: "Retrofit", price: "$10 - $30 per sq ft" }
        ]
      }
    ]
  }
};