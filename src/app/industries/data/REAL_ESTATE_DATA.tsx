import { 
  Building2, 
  HardHat, 
  TrendingDown, 
  Zap, 
  Clock, 
  Users, 
  Leaf, 
  LayoutDashboard, 
  Wallet, 
  Wrench, 
  MessageSquare, 
  Layers, 
  AlertTriangle, 
  Calendar, 
  DollarSign, 
  ClipboardCheck,
  Smartphone
} from "lucide-react";

export const REAL_ESTATE_DATA = {
  hero: {
    h1: "Real Estate & Construction Technology Solutions",
    description: "Digital transformation for property management, construction project management, BIM (Building Information Modeling), and smart building automation",
    stats: [
      { value: "60+", label: "Real estate technology implementations", icon: Building2 },
      { value: "35%", label: "Project cost reduction through BIM", icon: TrendingDown },
      { value: "40%", label: "Facility management efficiency improvement", icon: HardHat },
      { value: "25%", label: "Energy cost reduction in smart buildings", icon: Zap }
    ]
  },
  overview: {
    title: "Industry Overview",
    content: "Real estate and construction industries undergo digital transformation driven by smart buildings, BIM, IoT sensors, AI analytics, and property management automation",
    challenges: [
      {
        title: "Project Delays",
        desc: "Construction projects average 20% over budget, 40% delayed (poor planning, communication gaps, resource constraints)",
        icon: Clock
      },
      {
        title: "Operational Costs",
        desc: "Building operations (HVAC, lighting, maintenance) represent 60-80% of total lifecycle costs",
        icon: DollarSign
      },
      {
        title: "Tenant Experience",
        desc: "Modern tenants expect smart amenities (mobile access, online services, smart controls)",
        icon: Users
      },
      {
        title: "Sustainability",
        desc: "Green building certifications (LEED, WELL), energy efficiency mandates, carbon reduction goals",
        icon: Leaf
      },
      {
        title: "Property Management Complexity",
        desc: "Managing hundreds of units, maintenance requests, tenant communications, rent collection",
        icon: LayoutDashboard
      }
    ],
    expertise: {
      title: "Our Real Estate Expertise",
      stats: [
        "35% project cost reduction through BIM and coordination",
        "40% facility management efficiency improvement",
        "25% energy cost reduction through smart building automation",
        "95% tenant satisfaction scores"
      ]
    }
  },
  propertyMgmt: {
    title: "1. Property Management Software",
    subTitle: "Comprehensive Property Operations",
    modules: [
      {
        title: "Tenant Management",
        icon: Users,
        items: [
          "Lease management (terms, renewals, escalations)",
          "Tenant portal (pay rent, submit maintenance, documents)",
          "Application screening (credit checks, background)",
          "Automated lease renewals",
          "Notice management (move-in, move-out)"
        ]
      },
      {
        title: "Financial Management",
        icon: Wallet,
        items: [
          "Rent collection (ACH, credit card, online payment)",
          "Late fee automation",
          "Accounts payable (vendor bills, utilities)",
          "General ledger and accounting",
          "Financial reporting (income statement, balance sheet, cash flow)",
          "Budget vs actual tracking",
          "Owner distributions"
        ]
      },
      {
        title: "Maintenance",
        icon: Wrench,
        items: [
          "Work order system (tenant requests, preventive maintenance)",
          "Vendor management (contractors, service providers)",
          "Asset tracking (HVAC units, appliances, fixtures)",
          "Preventive maintenance scheduling",
          "Mobile app for maintenance staff"
        ]
      },
      {
        title: "Communication",
        icon: MessageSquare,
        items: [
          "Tenant messaging (announcements, alerts)",
          "Document sharing (lease, notices, forms)",
          "Email/SMS notifications",
          "Community portal"
        ]
      }
    ],
    platforms: ["Yardi Voyager (enterprise)", "AppFolio (mid-market)", "Buildium (small-mid landlords)", "Rent Manager", "Custom development"]
  },
  bim: {
    title: "2. BIM & Construction Project Management",
    bimSection: {
      title: "Building Information Modeling (BIM)",
      description: "Create intelligent 3D models containing all building information:",
      components: [
        { name: "Architectural model", detail: "(walls, floors, roofs, spaces)" },
        { name: "Structural model", detail: "(beams, columns, foundations)" },
        { name: "MEP model", detail: "(mechanical, electrical, plumbing systems)" },
        { name: "Site model", detail: "(grading, landscaping, utilities)" }
      ],
      software: ["Autodesk Revit", "ArchiCAD", "Tekla", "Navisworks"],
      levels: ["Level 1: 2D CAD", "Level 2: 3D modeling with data", "Level 3: Fully collaborative model"]
    },
    clashDetection: {
      title: "Clash Detection",
      subTitle: "Identify Conflicts Before Construction",
      description: "Find where systems interfere (HVAC duct hits structural beam):",
      methods: [
        "Automated clash detection (Navisworks, Solibri)",
        "Weekly coordination meetings (review clashes)",
        "Resolve conflicts in model (avoid field changes)"
      ],
      benefits: [
        "50-80% reduction in RFIs (Requests for Information)",
        "30-50% reduction in change orders",
        "Eliminate costly field rework ($10K-$100K per conflict)"
      ]
    },
    dimensions: [
      {
        title: "4D BIM (Time)",
        desc: "Add construction schedule to 3D model:",
        items: [
          "Visualize construction sequence",
          "Identify schedule conflicts (resource clashes, sequencing issues)",
          "Communicate plan to stakeholders",
          "Monitor actual vs planned progress"
        ]
      },
      {
        title: "5D BIM (Cost)",
        desc: "Link cost data to model elements:",
        items: [
          "Accurate quantity takeoffs (automated from model)",
          "Real-time cost estimates",
          "Value engineering (compare design alternatives)",
          "Track actual costs vs budget"
        ]
      }
    ],
    results: [
      "35% reduction in project costs (better planning, fewer changes)",
      "20% faster project delivery (less rework, better coordination)"
    ],
    projectMgmt: {
      title: "Construction Project Management",
      categories: [
        {
          title: "Project Planning",
          icon: Calendar,
          items: ["Gantt charts (Microsoft Project, Primavera P6)", "Resource allocation (labor, equipment, materials)", "Critical path analysis", "Look-ahead planning (2-week, 6-week)"]
        },
        {
          title: "Document Management",
          icon: Layers,
          items: ["Drawings and specifications", "Submittals and RFIs", "Change orders", "Daily reports", "Punch lists", "As-built documentation"]
        },
        {
          title: "Field Management",
          icon: Smartphone,
          items: ["Mobile apps for superintendents", "Daily reports (work completed, labor, issues)", "Photo documentation", "Safety inspections", "Quality checklists"]
        }
      ],
      platforms: ["Procore (leading platform)", "PlanGrid (field collaboration)", "Autodesk Construction Cloud", "Buildertrend", "Custom solutions"]
    }
  }
};