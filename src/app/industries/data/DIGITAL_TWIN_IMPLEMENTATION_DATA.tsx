import { 
  Box, 
  Cable, 
  Atom, 
  Settings2, 
  TrendingUp, 
  Rocket,
  GitMerge,
  Zap,
  PackagePlus,
  BarChart4,
  DollarSign
} from "lucide-react";

export const DIGITAL_TWIN_IMPLEMENTATION_DATA = {
  sectionTitle: "Digital Twin Implementation",
  phases: [
    {
      phase: "Phase 1",
      title: "Model Creation",
      icon: Box,
      items: [
        "Develop 3D CAD model of equipment and facility layout",
        "Define physical properties (dimensions, materials, thermal characteristics)",
        "Model mechanical systems (kinematics, dynamics)",
        "Create control logic representation (PLC ladder logic, HMI screens)"
      ]
    },
    {
      phase: "Phase 2",
      title: "Sensor Integration",
      icon: Cable,
      items: [
        "Connect real-time sensor data streams",
        "Establish bidirectional data flow (physical → virtual, virtual → physical)",
        "Configure data sampling rates (balance accuracy with bandwidth)",
        "Implement data validation and filtering"
      ]
    },
    {
      phase: "Phase 3",
      title: "Physics-Based Simulation",
      icon: Atom,
      items: [
        "Build mathematical models of physical processes",
        "Finite element analysis (FEA) for structural behavior",
        "Computational fluid dynamics (CFD) for flow processes",
        "Thermodynamic modeling for heat transfer",
        "Kinematic and dynamic simulation for mechanical motion"
      ]
    },
    {
      phase: "Phase 4",
      title: "Calibration",
      icon: Settings2,
      items: [
        "Compare simulation results with actual equipment behavior",
        "Tune model parameters for accuracy",
        "Validate under various operating conditions",
        "Iterate until model closely matches reality (±5% tolerance typical goal)"
      ]
    },
    {
      phase: "Phase 5",
      title: "Optimization",
      icon: TrendingUp,
      items: [
        "Run optimization algorithms (genetic algorithms, gradient descent, etc.)",
        "Identify optimal operating parameters (speeds, temperatures, pressures, etc.)",
        "Generate recommendations for implementation",
        "Calculate expected improvements"
      ]
    },
    {
      phase: "Phase 6",
      title: "Deployment",
      icon: Rocket,
      items: [
        "Implement learned optimizations on physical equipment",
        "Monitor actual results vs. predicted",
        "Continuous model refinement based on outcomes",
        "Expand digital twin coverage to additional equipment"
      ]
    }
  ],
  useCases: {
    title: "Digital Twin Use Cases",
    cases: [
      {
        title: "Production Line Balancing",
        icon: GitMerge,
        items: [
          "Simulate different station configurations",
          "Identify bottlenecks and resolve virtually",
          "Optimize work distribution across stations",
          "Reduce cycle time variability",
          "Minimize work-in-process inventory"
        ]
      },
      {
        title: "Energy Optimization",
        icon: Zap,
        items: [
          "Model energy consumption under different operating scenarios",
          "Identify energy waste opportunities",
          "Test energy-saving strategies virtually",
          "Optimize HVAC and compressed air systems",
          "Achieve 15-25% energy reduction typical"
        ]
      },
      {
        title: "New Product Introduction (NPI)",
        icon: PackagePlus,
        items: [
          "Validate manufacturability before tooling investment",
          "Optimize process parameters for new products",
          "Identify potential quality issues early",
          "Reduce physical prototyping iterations",
          "Accelerate time-to-market by 30-50%"
        ]
      },
      {
        title: "Capacity Planning",
        icon: BarChart4,
        items: [
          "Model facility capacity under various demand scenarios",
          "Identify when expansion is needed",
          "Evaluate different expansion options",
          "Optimize capital investment timing",
          "Support business case development"
        ]
      }
    ]
  },
  roi: {
    title: "ROI Example",
    subtitle: "Automotive parts supplier created digital twin of paint booth:",
    icon: DollarSign,
    stats: [
      { label: "Investment", value: "$120,000", sub: "(modeling, integration, calibration)" },
      { label: "Optimization Results", value: "18% / 25%", sub: "energy reduction / throughput increase" },
      { label: "Annual Savings", value: "$1.2M", sub: "(energy + increased capacity)" },
      { label: "Payback", value: "1.2 months", sub: "Return on Investment Period" },
      { label: "Additional Benefit", value: "40%", sub: "Virtual testing reduced paint waste" }
    ]
  }
};