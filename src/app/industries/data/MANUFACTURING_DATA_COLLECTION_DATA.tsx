import { 
  Network, 
  Server, 
  Router, 
  Cloud, 
  Activity, 
  BarChart3, 
  Zap, 
  PieChart, 
  CheckSquare 
} from "lucide-react";

export const MANUFACTURING_DATA_COLLECTION_DATA = {
  infrastructure: {
    title: "Industrial Data Collection Infrastructure",
    methods: [
      {
        title: "Industrial Ethernet",
        icon: Network,
        color: "blue",
        details: [
          "PROFINET (Siemens ecosystem)",
          "EtherNet/IP (Rockwell/Allen-Bradley ecosystem)",
          "Modbus TCP (universal industrial protocol)",
          "High-speed, deterministic communication",
          "Integration with existing PLC networks"
        ]
      },
      {
        title: "OPC-UA Servers",
        icon: Server,
        color: "green",
        details: [
          "Standardized data access across equipment vendors",
          "Unified namespace for all machine data",
          "Security features (authentication, encryption)",
          "Platform-independent interoperability",
          "Vendor-neutral data model"
        ]
      },
      {
        title: "Edge Gateways",
        icon: Router,
        color: "blue",
        details: [
          "Protocol conversion (legacy protocols to modern standards)",
          "Local data processing and filtering",
          "Store-and-forward capability during connectivity loss",
          "Edge analytics reducing cloud bandwidth requirements",
          "Multiple protocol support (Modbus, Profibus, DeviceNet, etc.)"
        ]
      },
      {
        title: "Cloud Connectivity",
        icon: Cloud,
        color: "green",
        details: [
          "MQTT lightweight messaging protocol for IoT devices",
          "Cellular (4G/5G) connectivity for mobile equipment",
          "Satellite connectivity for remote locations",
          "Redundant internet connections (fiber + cellular backup)",
          "VPN tunnels for secure data transmission"
        ]
      }
    ]
  },
  dashboard: {
    title: "Real-Time Production Monitoring Dashboard",
    metrics: [
      {
        title: "Live Manufacturing Metrics",
        subTitle: "Machine Status Indicators",
        icon: Activity,
        items: [
          "Running (producing good parts)",
          "Idle (no production scheduled or waiting for material/operator)",
          "Down (breakdown, maintenance)",
          "Setup (changeover, tool change, first article inspection)",
          "Color-coded visual status (green/yellow/red) for instant comprehension",
          "Duration in current state",
          "Historical state timeline (visual Gantt chart)"
        ]
      },
      {
        title: "Production Counters",
        icon: BarChart3,
        items: [
          "Real-time production count vs. target",
          "Cycle time measurement (actual vs. ideal)",
          "Reject count and reasons",
          "Rework quantity",
          "Scrap quantity and cost",
          "Efficiency percentage",
          "Progress toward shift/daily goals"
        ]
      },
      {
        title: "Quality Metrics Dashboard",
        icon: CheckSquare,
        items: [
          "First pass yield (FPY)",
          "Defect rate by type",
          "Pareto charts highlighting top defect contributors",
          "Control charts (X-bar, R-chart, p-chart) showing process stability",
          "Process capability indices (Cp, Cpk)",
          "Quality trend analysis"
        ]
      },
      {
        title: "Energy Consumption",
        icon: Zap,
        items: [
          "Real-time power draw per machine",
          "kWh consumption tracking",
          "Cost calculation (based on utility rates including demand charges)",
          "Energy per unit produced",
          "Identification of energy-intensive operations",
          "Peak demand alerts (to avoid utility penalties)"
        ]
      },
      {
        title: "Overall Equipment Effectiveness (OEE)",
        icon: PieChart,
        items: [
          "Availability (uptime / planned production time)",
          "Performance (actual production rate / ideal rate)",
          "Quality (good parts / total parts)",
          "OEE calculation (Availability × Performance × Quality)",
          "World-class OEE target: 85%+ (many start at 40-60%)",
          "Trend analysis identifying improvement opportunities"
        ]
      }
    ]
  }
};