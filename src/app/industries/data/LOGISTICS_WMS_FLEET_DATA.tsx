import { 
  Warehouse, 
  ArrowDownToLine, 
  Box, 
  ArrowUpFromLine, 
  ClipboardCheck, 
  Cpu, 
  Map, 
  Smartphone, 
  UserCheck, 
  Globe, 
  BarChart, 
  Users, 
  Truck, 
  Wrench, 
  ShieldAlert,
  Layers,
  ScanBarcode,
  PackageCheck
} from "lucide-react";

export const LOGISTICS_WMS_FLEET_DATA = {
  wms: {
    title: "2. Warehouse Management System (WMS)",
    subTitle: "End-to-End Warehouse Operations",
    inbound: {
      title: "Inbound Operations",
      icon: ArrowDownToLine,
      sections: [
        {
          title: "Receiving",
          items: [
            "ASN (Advance Ship Notice) from suppliers",
            "Barcode/RFID scanning on receipt",
            "Quality inspection workflows",
            "Put-away suggestions (optimal storage location)",
            "Cross-docking (direct transfer from inbound to outbound)"
          ]
        },
        {
          title: "Inventory Storage",
          items: [
            "Bin location management (every item tracked to specific bin)",
            "Slotting optimization (fast-movers near packing, slow-movers farther)",
            "FIFO/FEFO enforcement (first-in-first-out, first-expired-first-out)",
            "Lot and serial number tracking",
            "ABC analysis (prioritize inventory control on high-value items)"
          ]
        }
      ]
    },
    outbound: {
      title: "Outbound Operations",
      icon: ArrowUpFromLine,
      picking: {
        title: "Order Picking",
        strategies: [
          { name: "Discrete Picking", desc: "One order at a time (simple, slow)" },
          { name: "Batch Picking", desc: "Pick multiple orders simultaneously (faster)" },
          { name: "Zone Picking", desc: "Pickers assigned to zones, orders pass through" },
          { name: "Wave Picking", desc: "Pick all orders for a shipping wave together" }
        ],
        technologies: [
          "Barcode scanning (verify correct item picked)",
          "Voice picking (hands-free, eyes-free)",
          "Pick-to-light (lights indicate bins to pick)",
          "RFID (automatic detection)",
          "Automated picking (robots, AS/RS)"
        ],
        optimization: [
          "Optimal pick path (minimize travel distance)",
          "Dynamic picking routes (adjust for congestion)",
          "Work balancing (distribute work among pickers)",
          "Performance tracking (picks per hour, accuracy)"
        ],
        gains: [
          "40-60% picking speed improvement",
          "99.5%+ picking accuracy (vs 95% manual)",
          "30% labor cost reduction"
        ]
      },
      packing: {
        title: "Packing & Shipping",
        stations: [
          "Scan picked items to verify order completeness",
          "Suggest optimal box size (minimize dimensional weight)",
          "Print packing slip and shipping label",
          "Integrated scales and dimensioners",
          "Automated tape and label application"
        ],
        sortation: [
          "Conveyor systems",
          "Automated sortation (slide shoes, pop-up wheels, tilt trays)",
          "Sort by carrier, route, delivery zone",
          "Scan and divert to correct chute"
        ]
      }
    },
    inventory: {
      title: "Inventory Management",
      icon: ClipboardCheck,
      sections: [
        {
          title: "Cycle Counting",
          items: [
            "Continuous counting (vs annual physical inventory)",
            "ABC-based frequency (high-value items counted weekly)",
            "Directed counting (system suggests what to count)",
            "Variance investigation and adjustment"
          ]
        },
        {
          title: "Inventory Accuracy",
          items: [
            "99%+ accuracy achievable (vs 85-90% manual)",
            "Real-time stock levels",
            "Prevent stockouts and overselling"
          ]
        }
      ]
    },
    automation: {
      title: "Automation & Robotics",
      icon: Cpu,
      systems: [
        {
          title: "Automated Storage & Retrieval (AS/RS)",
          items: [
            "Stacker cranes for pallet storage",
            "Miniload systems for totes/cartons",
            "Shuttle systems",
            "Vertical lift modules (VLMs)"
          ]
        },
        {
          title: "Autonomous Mobile Robots (AMR)",
          items: [
            "Goods-to-person picking (robots bring shelves to picker)",
            "Collaborative robots (cobots) assisting pickers",
            "Autonomous pallet movers",
            "Examples: Amazon Robotics, GreyOrange, Locus Robotics"
          ]
        },
        {
          title: "Benefits",
          items: [
            "2-3× productivity vs manual",
            "24/7 operation capability",
            "Reduced labor dependency",
            "Improved accuracy"
          ]
        }
      ]
    },
    platforms: [
      "Manhattan Associates WMS",
      "Blue Yonder WMS",
      "HighJump (Körber)",
      "SAP Extended Warehouse Management",
      "Fishbowl Inventory",
      "Custom WMS"
    ]
  },
  lastMile: {
    title: "3. Last-Mile Delivery Optimization",
    routePlanning: {
      title: "Route Planning & Optimization",
      icon: Map,
      dynamic: {
        title: "Dynamic Routing",
        realTime: [
          "Optimize routes throughout the day as new orders arrive",
          "Adjust for traffic conditions (Google Maps, HERE, TomTom APIs)",
          "Consider delivery time windows (customer availability)",
          "Driver hours of service",
          "Vehicle capacity constraints (weight, volume, stop count)"
        ],
        algorithms: [
          "Traveling Salesman Problem (TSP) solvers",
          "Vehicle Routing Problem (VRP) with time windows",
          "Genetic algorithms, simulated annealing",
          "Machine learning for pattern recognition"
        ],
        results: [
          "20-30% reduction in miles driven",
          "15-25% more deliveries per driver per day",
          "Improved on-time performance (95-99%)"
        ]
      }
    },
    app: {
      title: "Mobile Delivery App",
      icon: Smartphone,
      driver: [
        "Turn-by-turn navigation to each stop",
        "Optimized stop sequence",
        "Customer contact info (call/text)",
        "Delivery instructions (gate codes, special instructions)",
        "Proof of delivery capture: Signature on mobile device, Photo of package at door, GPS coordinates, Timestamp",
        "Failed delivery reasons (customer not home, access issue)",
        "Customer notifications (on my way, delivered)"
      ],
      dispatcher: [
        "Real-time driver location tracking",
        "Route progress monitoring",
        "Exception handling (delays, failed deliveries)",
        "Route reassignment (if driver falls behind)",
        "Customer communication (ETA updates)"
      ]
    },
    customer: {
      title: "Customer Experience",
      icon: UserCheck,
      notifications: [
        "Order confirmation",
        "Out-for-delivery (with ETA)",
        "30-minute delivery window",
        "“Driver is 5 stops away” updates",
        "Delivered confirmation with photo"
      ],
      preferences: [
        "Scheduled delivery windows",
        "Contactless delivery",
        "Delivery location preferences (front porch, side door, mailroom)",
        "Access instructions (gate codes, call box)"
      ],
      results: [
        "99% on-time delivery",
        "95% first-attempt delivery success",
        "Customer satisfaction: 4.7/5",
        "40% reduction in customer service calls"
      ]
    }
  },
  visibility: {
    title: "4. Supply Chain Visibility Platform",
    tracking: {
      title: "End-to-End Tracking",
      icon: Globe,
      multiModal: [
        "Ocean freight (container tracking)",
        "Air freight (AWB tracking)",
        "Rail (railcar tracking)",
        "Trucking (GPS tracking)",
        "Last mile (delivery tracking)"
      ],
      integration: [
        "Carrier EDI (Electronic Data Interchange)",
        "API integrations (carrier tracking APIs)",
        "IoT devices (GPS trackers, temperature sensors)",
        "Port and rail systems",
        "Customs and border systems"
      ],
      features: [
        "Real-time shipment location on map [Image of supply chain visibility map]",
        "Estimated arrival times (dynamic, updated with delays)",
        "Milestone tracking (picked up, at port, in customs, in transit, delivered)",
        "Exception alerts (delays, holds, damages)",
        "Document repository (BOL, invoices, customs forms, certificates)"
      ]
    },
    analytics: {
      title: "Predictive Analytics",
      icon: BarChart,
      items: [
        { title: "Delay Prediction", desc: "Machine learning models predict delays, Analyze historical patterns (seasonal, day-of-week, weather), Port congestion forecasts, Customs clearance time estimates, Proactive customer communication" },
        { title: "Demand Forecasting", desc: "Predict shipment volumes (weekly, monthly), Capacity planning (trucks, warehouse space), Labor scheduling (based on forecasted volume)" },
        { title: "Risk Assessment", desc: "Supplier risk scores (on-time %, quality), Route risk analysis (weather, geopolitical), Carrier reliability assessment" }
      ]
    },
    portal: {
      title: "Collaboration Portal",
      icon: Users,
      supplier: ["Share forecasts with suppliers", "Purchase order visibility", "ASN (Advance Ship Notice) submission", "Invoice submission and payment status"],
      customer: ["Order status visibility", "Shipment tracking", "Document access", "Service requests"]
    }
  },
  fleet: {
    title: "5. Fleet Management",
    tracking: {
      title: "Vehicle Tracking & Telematics",
      icon: Truck,
      gps: [
        "Real-time vehicle location",
        "Route history playback",
        "Geofencing (alerts when entering/exiting zones)",
        "Speeding alerts",
        "Idle time tracking",
        "Unauthorized usage detection (after-hours)"
      ],
      telematics: [
        "Engine diagnostics (fault codes)",
        "Fuel consumption",
        "Harsh braking, acceleration (driver behavior)",
        "Hours of operation",
        "Odometer readings",
        "Tire pressure monitoring"
      ]
    },
    maintenance: {
      title: "Maintenance Management",
      icon: Wrench,
      preventive: [
        "Maintenance schedules (based on miles, hours, time)",
        "Automated reminders (oil change due in 500 miles)",
        "Work order generation",
        "Vendor management (maintenance shops)",
        "Parts inventory tracking",
        "Maintenance cost tracking per vehicle"
      ],
      predictive: [
        "Analyze telematics data for failure prediction",
        "Battery health monitoring",
        "Brake wear estimation",
        "Tire replacement prediction"
      ]
    },
    compliance: {
      title: "Compliance & Safety",
      icon: ShieldAlert,
      hos: [
        "ELD (Electronic Logging Device) integration",
        "Automatic duty status recording",
        "HOS violation alerts",
        "DVIR (Driver Vehicle Inspection Report) digital forms",
        "IFTA (fuel tax) reporting"
      ],
      safety: [
        "Driver scorecard (speeding, harsh braking, seatbelt)",
        "Accident reporting",
        "Video dash cams (event recording)",
        "Driver training programs"
      ]
    }
  }
};