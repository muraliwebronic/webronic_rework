import { 
  Database, 
  LayoutDashboard, 
  AlertTriangle, 
  FileText, 
  Bell, 
  Layers, 
  TestTube, 
  GitBranch, 
  TrendingUp, 
  GraduationCap 
} from "lucide-react";

export const MANUFACTURING_FP_DIGITAL_TWIN_DATA = {
  fpAnalyzer: {
    title: "FP Analyzer Platform Integration",
    description: "Our proprietary FP Analyzer manufacturing analytics platform currently monitors 500+ production machines globally:",
    features: [
      {
        title: "Automated Data Collection",
        icon: Database,
        color: "blue",
        items: [
          "Direct PLC integration eliminating manual data entry",
          "Continuous data streaming (second-by-second updates)",
          "No operator input required (reduces errors, eliminates gaming)",
          "Historical data storage (multi-year retention for trend analysis)"
        ]
      },
      {
        title: "Real-Time Dashboards",
        icon: LayoutDashboard,
        color: "green",
        items: [
          "Floor-level displays showing line status, production counts",
          "Supervisor dashboards aggregating multiple lines",
          "Plant manager view across entire facility",
          "Corporate rollup across multiple plants globally",
          "Mobile app for management visibility anywhere"
        ]
      },
      {
        title: "Downtime Tracking & Analysis",
        icon: AlertTriangle,
        color: "blue",
        items: [
          "Automated downtime detection (no production for >1 minute)",
          "Operator downtime reason selection via touchscreen",
          "Pareto analysis identifying top downtime causes",
          "Mean Time Between Failures (MTBF) calculation",
          "Mean Time To Repair (MTTR) tracking",
          "Downtime cost calculation (lost production value)"
        ]
      },
      {
        title: "Production Reports",
        icon: FileText,
        color: "green",
        items: [
          "Shift reports (automatically generated and emailed)",
          "Daily production summaries",
          "Weekly OEE trends",
          "Monthly performance scorecards",
          "Annual statistical analysis",
          "Custom reports (ad-hoc queries)"
        ]
      },
      {
        title: "Predictive Alerts",
        icon: Bell,
        color: "blue",
        items: [
          "Approaching maintenance intervals",
          "Abnormal cycle time patterns",
          "Quality drift detected (approaching control limits)",
          "Excessive downtime frequency",
          "Tool wear indicators",
          "Inventory depletion warnings"
        ]
      }
    ]
  },
  digitalTwin: {
    title: "Digital Twin Technology",
    subTitle: "Virtual Factory Replication",
    description: "Create software models mirroring physical manufacturing assets, continuously updated with real-time sensor data, enabling virtual testing, optimization, and predictive simulation without disrupting actual production",
    definition: {
      title: "What is a Digital Twin?",
      content: "A digital twin is a virtual representation of a physical object or system, synchronized with real-time data from IoT sensors, enabling:"
    },
    capabilities: [
      {
        title: "Virtual Testing",
        icon: TestTube,
        items: [
          "Test process parameter changes in simulation before implementing",
          "Evaluate new product introduction without physical trials",
          "Optimize production sequences virtually",
          "Assess impact of layout changes",
          "Validate new operating procedures without risk"
        ]
      },
      {
        title: "Scenario Analysis",
        icon: GitBranch,
        items: [
          "“What-if” simulations (What if we increase line speed 10%?)",
          "Capacity planning (Can we meet demand spike?)",
          "Bottleneck identification and resolution",
          "Energy consumption modeling",
          "Cost-benefit analysis of improvements"
        ]
      },
      {
        title: "Predictive Modeling",
        icon: TrendingUp,
        items: [
          "Equipment degradation prediction based on usage patterns",
          "Remaining useful life estimation",
          "Optimal maintenance scheduling",
          "Failure mode simulation",
          "Spare parts requirements forecasting"
        ]
      },
      {
        title: "Operator Training",
        icon: GraduationCap,
        items: [
          "Risk-free virtual environment for training new operators",
          "Emergency procedure practice (what to do during equipment failure)",
          "Process optimization training",
          "Troubleshooting skill development",
          "Performance comparison (trainee vs. expert)"
        ]
      }
    ]
  }
};