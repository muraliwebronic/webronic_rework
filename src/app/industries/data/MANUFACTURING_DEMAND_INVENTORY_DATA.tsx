import { 
  TrendingDown, 
  Smile, 
  Settings, 
  Package, 
  Calculator, 
  BarChart, 
  RefreshCcw, 
  Clock, 
  Percent, 
  DollarSign, 
  Globe, 
  FileText, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  Binary
} from "lucide-react";

export const MANUFACTURING_DEMAND_INVENTORY_DATA = {
  benefits: {
    title: "Demand Forecasting Benefits",
    categories: [
      {
        title: "Inventory Reduction",
        icon: TrendingDown,
        color: "blue",
        items: [
          "20-40% reduction in inventory carrying costs",
          "Maintain or improve service levels (95-99% fill rate)",
          "Reduced obsolescence (slow-moving, expired goods)"
        ]
      },
      {
        title: "Improved Customer Service",
        icon: Smile,
        color: "green",
        items: [
          "30-50% reduction in stockouts",
          "Faster delivery (inventory pre-positioned)",
          "Accurate promise dates"
        ]
      },
      {
        title: "Operational Efficiency",
        icon: Settings,
        color: "blue",
        items: [
          "Better production planning (level loading vs. reactive scheduling)",
          "Optimized purchasing (volume discounts, lead time management)",
          "Reduced expediting costs (rush orders, air freight)"
        ]
      }
    ]
  },
  optimization: {
    title: "Inventory Optimization",
    subTitle: "Right Stock at Right Place at Right Time",
    description: "Balance conflicting objectives: high customer service levels vs. low inventory investment.",
    techniques: [
      {
        title: "ABC Analysis",
        icon: BarChart,
        details: [
          "A Items (20% of SKUs, 80% of revenue): Tight control, frequent review, high service levels",
          "B Items (30% of SKUs, 15% of revenue): Moderate control",
          "C Items (50% of SKUs, 5% of revenue): Simple controls, periodic review"
        ]
      },
      {
        title: "Safety Stock Calculation",
        icon: Calculator,
        formula: "Safety Stock = Z × σ_LT × √LT",
        details: [
          "Z = service level factor (1.65 for 95%, 2.33 for 99%)",
          "σ_LT = standard deviation of demand during lead time",
          "LT = lead time",
          "Accounts for demand variability and lead time uncertainty",
          "Higher safety stock for critical items, longer lead times, higher variability"
        ]
      },
      {
        title: "Reorder Point (ROP)",
        icon: Package,
        formula: "ROP = (Average Daily Demand × Lead Time) + Safety Stock",
        details: [
          "When inventory drops to ROP, trigger replenishment order",
          "Continuous review vs. periodic review policies"
        ]
      },
      {
        title: "Economic Order Quantity (EOQ)",
        icon: DollarSign,
        formula: "EOQ = √[(2 × D × S) / H]",
        details: [
          "D = annual demand",
          "S = ordering cost per order",
          "H = holding cost per unit per year",
          "Balances ordering costs vs. carrying costs",
          "Optimal order size minimizing total cost"
        ]
      },
      {
        title: "Multi-Echelon Inventory Optimization",
        icon: Globe,
        details: [
          "Optimize inventory across supply chain (factory, distribution centers, retail)",
          "Allocate safety stock where most effective",
          "Minimize total system inventory while meeting service targets",
          "Software tools: o9 Solutions, Blue Yonder, Kinaxis"
        ]
      }
    ]
  },
  metrics: {
    title: "Inventory Metrics",
    kpis: [
      {
        title: "Turnover",
        icon: RefreshCcw,
        formula: "Inventory Turnover = Cost of Goods Sold / Average Inventory",
        items: [
          "Higher turnover = efficient inventory use",
          "Industry varies: grocery 12-15×, automotive parts 4-6×"
        ]
      },
      {
        title: "Days of Inventory",
        icon: Clock,
        formula: "Days Inventory Outstanding (DIO) = 365 / Inventory Turnover",
        items: [
          "Lower is better (less cash tied up)"
        ]
      },
      {
        title: "Service Level",
        icon: Percent,
        items: [
          "Fill Rate: % of demand met from stock",
          "Stockout Rate: % of time out of stock",
          "Target: 95-99% fill rate depending on criticality"
        ]
      },
      {
        title: "Carrying Costs",
        icon: DollarSign,
        items: [
          "20-30% of inventory value annually",
          "Storage, obsolescence, damage, insurance, opportunity cost"
        ]
      }
    ],
    results: {
      title: "Results",
      stats: [
        "25-35% inventory reduction (typical)",
        "Maintained/improved service levels (95-99% fill rate)",
        "Reduced obsolescence and write-offs (40-60%)",
        "Better cash flow (working capital reduction)"
      ]
    }
  },
  collaboration: {
    title: "Supplier Collaboration Platforms",
    subTitle: "Connected Supply Chain",
    description: "Enable real-time collaboration with suppliers through integrated portals and API connections.",
    features: [
      {
        title: "Order Management",
        icon: Package,
        items: [
          "Purchase orders transmitted electronically (vs. email/fax)",
          "Order acknowledgment and confirmation",
          "Advance shipping notifications (ASN)",
          "Delivery schedule visibility",
          "Change order management"
        ]
      },
      {
        title: "Forecasting & Planning",
        icon: TrendingDown,
        items: [
          "Share demand forecasts with suppliers (6-12 month horizon)",
          "Capacity planning visibility",
          "Collaborative planning for new products",
          "Inventory consignment agreements"
        ]
      },
      {
        title: "Quality Management",
        icon: ShieldCheck,
        items: [
          "Supplier quality scorecards (real-time)",
          "Non-conformance reporting and resolution",
          "Certificate of Analysis (CoA) submission",
          "First Article Inspection reports",
          "PPAP (Production Part Approval Process) documentation"
        ]
      },
      {
        title: "Performance Dashboards",
        icon: BarChart,
        items: [
          "On-time delivery rate (target: 95%+)",
          "Quality acceptance rate (target: 98%+)",
          "Lead time performance",
          "Pricing compliance",
          "Responsiveness metrics"
        ]
      },
      {
        title: "Invoicing & Payments",
        icon: CreditCard,
        items: [
          "Electronic invoicing (EDI, XML, API)",
          "Invoice matching to PO and receipt",
          "Payment status visibility",
          "Automated 3-way matching (PO, receipt, invoice)"
        ]
      }
    ],
    edi: {
      title: "EDI (Electronic Data Interchange) Integration",
      subTitle: "Automated Document Exchange",
      documents: [
        "EDI 850: Purchase Order",
        "EDI 855: Purchase Order Acknowledgment",
        "EDI 856: Advance Ship Notice",
        "EDI 810: Invoice",
        "EDI 997: Functional Acknowledgment"
      ],
      details: [
        "VAN (Value-Added Network) or direct AS2 connection",
        "Eliminates manual data entry, reduces errors"
      ],
      benefits: {
        supplier: [
          "Improved forecast visibility (better planning)",
          "Faster payment (automated invoice processing)",
          "Reduced errors (automated data exchange)",
          "Stronger partnership",
          "Performance transparency (scorecards)"
        ],
        manufacturer: [
          "Reduced stockouts (better supplier responsiveness)",
          "Improved quality (collaborative quality management)",
          "Lower costs (efficiency, less expediting)",
          "Supply chain resilience (visibility, collaboration)"
        ]
      }
    }
  }
};