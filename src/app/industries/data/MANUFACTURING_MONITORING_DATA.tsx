import { 
  Activity, 
  Thermometer, 
  Droplet, 
  Search, 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  Settings, 
  Clock, 
  Microscope,
  Cpu
} from "lucide-react";

export const MANUFACTURING_MONITORING_DATA = {
  sectionTitle: "Condition Monitoring Technologies",
  vibration: {
    title: "Vibration Analysis",
    icon: Activity,
    columns: [
      {
        header: "What It Detects",
        items: [
          "Bearing failures (weeks to months advance warning)",
          "Misalignment (coupling, belt, shaft misalignment)",
          "Imbalance (rotating component weight distribution issues)",
          "Looseness (mechanical looseness, structural weakness)",
          "Gear wear (tooth damage, lubrication issues)",
          "Motor electrical issues (rotor bar cracks, stator problems)"
        ]
      },
      {
        header: "How It Works",
        items: [
          "Accelerometers measure vibration magnitude and frequency",
          "FFT (Fast Fourier Transform) analysis converts time-domain signal to frequency domain",
          "Specific failure modes have characteristic frequency signatures",
          "Compare vibration spectrum to baseline and severity standards (ISO 10816)",
          "Trending over time shows deterioration"
        ]
      },
      {
        header: "Monitoring Methods",
        items: [
          "Route-based: Portable analyzer, technician visits equipment monthly/quarterly",
          "Continuous: Permanently mounted sensors with automatic alarming",
          "Best for: Rotating equipment (motors, pumps, fans, gearboxes, compressors, turbines)"
        ]
      }
    ]
  },
  temperature: {
    title: "Temperature Monitoring",
    icon: Thermometer,
    sections: [
      {
        title: "Applications",
        items: [
          "Bearing temperature (overheating indicates lubrication failure, misalignment, overload)",
          "Motor winding temperature (overload, cooling issues, electrical problems)",
          "Process temperature (deviations from setpoint)",
          "Transformer temperature (oil temperature, hotspot monitoring)",
          "Electrical panel temperature (loose connections, overloaded circuits)"
        ]
      },
      {
        title: "Technologies",
        items: [
          "Fixed sensors (thermocouples, RTDs, thermistors)",
          "Infrared cameras (thermal imaging surveys, identify hot spots)",
          "Fiber optic temperature sensing (high-voltage environments, long distances)"
        ]
      }
    ],
    thresholds: [
      { condition: "Bearing temperature >20°C above ambient", action: "investigate", color: "yellow" },
      { condition: "Bearing temperature >60°C above ambient", action: "immediate action required", color: "red" },
      { condition: "Electrical connection >15°C hotter than adjacent connections", action: "repair needed", color: "orange" }
    ]
  },
  oil: {
    title: "Oil Analysis (Tribology)",
    subTitle: "What It Reveals",
    icon: Droplet,
    wearMetals: [
      { metal: "Iron", desc: "(general wear, rust)" },
      { metal: "Copper", desc: "(bearing wear, brass bushing wear)" },
      { metal: "Aluminum", desc: "(piston wear, bearing wear)" },
      { metal: "Chromium", desc: "(piston ring wear, cylinder liner wear)" },
      { metal: "Lead", desc: "(bearing wear)" },
      { metal: "Tin", desc: "(bearing wear)" },
      { note: "Elevated levels indicate accelerating wear" }
    ],
    analysisCategories: [
      {
        title: "Contamination",
        icon: Search,
        items: [
          "Silicon (dirt ingress, coolant leak)",
          "Sodium/Potassium (coolant contamination)",
          "Water content (seal failure, condensation)",
          "Fuel dilution (injector leaks, combustion issues)"
        ]
      },
      {
        title: "Oil Condition",
        icon: Zap,
        items: [
          "Viscosity (degradation from heat, shear, oxidation)",
          "Total Acid Number (TAN) - oil oxidation",
          "Total Base Number (TBN) - remaining additive reserve",
          "Oxidation, nitration levels"
        ]
      },
      {
        title: "Particle Count",
        icon: Microscope,
        items: [
          "Microscopic particle counting per ISO 4406",
          "Indicates filtration effectiveness",
          "Sudden increase suggests component failure"
        ]
      }
    ],
    frequency: {
      title: "Testing Frequency",
      items: [
        { type: "Critical equipment", timing: "Every 500-1000 hours or 3-6 months" },
        { type: "Gearboxes", timing: "Every 3-6 months" },
        { type: "Hydraulics", timing: "Every 3 months" },
        { type: "Compressors", timing: "Every 3-6 months" },
        { type: "Trend analysis", timing: "more important than single sample" }
      ]
    }
  }
};