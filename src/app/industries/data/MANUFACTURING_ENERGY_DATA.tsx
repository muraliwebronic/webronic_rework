import { 
  Zap, 
  Layers, 
  Database, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  CalendarClock, 
  Settings, 
  Wind, 
  Thermometer, 
  Lightbulb, 
  Activity,
  DollarSign,
  Leaf,
  Award,
  BookOpen,
  CheckCircle2,
  Globe
} from "lucide-react";

export const MANUFACTURING_ENERGY_DATA = {
  header: {
    section: "5. Energy Management",
    title: "Real-Time Energy Monitoring",
    subTitle: "Facility Energy Tracking",
    description: "Monitor energy consumption in real-time at facility, production line, and equipment levels to identify waste and optimization opportunities"
  },
  architecture: {
    title: "Monitoring Architecture",
    columns: [
      {
        title: "Metering Hierarchy",
        icon: Layers,
        items: [
          "Facility Level: Main utility meter (total consumption, demand charges)",
          "Production Area Level: Submeters for manufacturing zones",
          "Production Line Level: Line-specific meters",
          "Equipment Level: Individual machine meters (largest consumers)"
        ]
      },
      {
        title: "Monitored Utilities",
        icon: Zap,
        items: [
          "Electricity (kWh, kW demand, power factor)",
          "Natural gas (therms, cubic feet)",
          "Compressed air (CFM, pressure)",
          "Steam (pounds, BTU)",
          "Water (gallons, flow rate)",
          "Cooling water (flow, temperature)"
        ]
      },
      {
        title: "Data Collection",
        icon: Database,
        items: [
          "Smart meters with pulse output or Modbus communication",
          "Current transformers (CTs) on electrical panels",
          "Flow meters on compressed air, water, steam",
          "SCADA integration for process utilities",
          "Cloud-based energy management systems (EMS)"
        ]
      }
    ]
  },
  analytics: {
    title: "Energy Analytics",
    subTitle: "Energy Metrics",
    metrics: [
      {
        title: "Absolute Consumption",
        icon: BarChart3,
        items: [
          "Total kWh per day/week/month",
          "Peak demand (kW) - drives demand charges",
          "Off-peak vs. on-peak consumption",
          "Cost tracking (including time-of-use rates, demand charges)"
        ]
      },
      {
        title: "Normalized Consumption",
        icon: TrendingUp,
        items: [
          "Energy per Unit Produced: kWh per part, per ton, per batch",
          "Benchmarking across shifts, lines, plants",
          "Identify process inefficiencies",
          "OEE correlation (energy waste during downtime and changeovers)"
        ]
      },
      {
        title: "Cost Breakdown",
        icon: PieChart,
        items: [
          "Energy cost per product line",
          "Allocation to cost centers",
          "Budget vs. actual tracking",
          "Variance analysis"
        ]
      }
    ]
  },
  optimization: {
    title: "Energy Optimization Strategies",
    strategies: [
      {
        title: "Production Scheduling",
        icon: CalendarClock,
        color: "blue",
        details: [
          "Shift energy-intensive processes to off-peak hours (lower electricity rates)",
          "Balance load across time (avoid peak demand charges)",
          "Coordinate large equipment startup (prevent demand spikes)"
        ]
      },
      {
        title: "Equipment Efficiency",
        icon: Settings,
        color: "green",
        details: [
          "Identify inefficient equipment (higher energy per unit output)",
          "Maintenance optimization (degraded equipment uses more energy)",
          "Right-size equipment (oversized motors waste energy)",
          "Variable Frequency Drives (VFDs) on motors (30-50% energy savings)"
        ]
      },
      {
        title: "Compressed Air Optimization",
        icon: Wind,
        color: "blue",
        details: [
          "Leak detection and repair (typical plant wastes 20-30%)",
          "Pressure optimization (reduce setpoint without affecting production)",
          "Storage buffers (reduce compressor cycling)",
          "Demand-side improvements (use less air)",
          "Savings: 15-35% of compressed air costs"
        ]
      },
      {
        title: "HVAC Optimization",
        icon: Thermometer,
        color: "green",
        details: [
          "Occupancy-based control (reduce conditioning in unoccupied areas)",
          "Temperature setback during non-production hours",
          "Free cooling when ambient conditions allow",
          "Maintenance (dirty filters, refrigerant charge, economizer operation)",
          "Savings: 20-40% of HVAC costs"
        ]
      },
      {
        title: "Lighting",
        icon: Lightbulb,
        color: "blue",
        details: [
          "LED retrofits (50-80% energy reduction vs. fluorescent/HID)",
          "Occupancy sensors (automatic on/off)",
          "Daylight harvesting (dim when natural light available)",
          "Scheduling (off during unoccupied hours)"
        ]
      },
      {
        title: "Power Factor Correction",
        icon: Activity,
        color: "green",
        details: [
          "Install capacitor banks to improve power factor (>0.95 target)",
          "Avoid utility penalties for poor power factor",
          "Reduce electrical losses in distribution system"
        ]
      }
    ]
  },
  results: {
    title: "Energy Management Results",
    savings: {
      title: "Typical Savings",
      icon: DollarSign,
      items: [
        "15-25% energy cost reduction through monitoring and optimization",
        "$200,000 - $2M annual savings (medium to large facility)",
        "Payback on energy management system: 1-3 years",
        "Compressed air leak repairs alone: $50,000 - $500,000 annual savings"
      ]
    },
    benefits: {
      title: "Additional Benefits",
      icon: Leaf,
      items: [
        "Reduced carbon footprint (sustainability goals)",
        "Utility incentives and rebates (many utilities offer programs)",
        "Improved equipment reliability (well-maintained equipment runs cooler, uses less energy)",
        "Regulatory compliance (energy efficiency mandates)"
      ]
    }
  },
  iso50001: {
    title: "ISO 50001 Energy Management System",
    subTitle: "International Standard for Energy Management",
    framework: {
      title: "Framework",
      icon: Globe,
      items: [
        "Energy policy and objectives",
        "Energy planning (baseline, indicators, targets)",
        "Energy review (identify significant uses)",
        "Implementation and operation",
        "Monitoring and measurement",
        "Management review and continual improvement"
      ]
    },
    benefits: {
      title: "Benefits of Certification",
      icon: Award,
      items: [
        "Structured approach to energy management",
        "Demonstrated commitment to sustainability",
        "Competitive advantage in bids (some tenders require ISO 50001)",
        "Employee engagement in energy conservation",
        "Integration with other management systems (ISO 9001, ISO 14001)"
      ]
    }
  }
};