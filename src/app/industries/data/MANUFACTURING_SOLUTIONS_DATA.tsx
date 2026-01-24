import { 
  Activity, 
  Thermometer, 
  Zap, 
  Gauge, 
  Eye, 
  Cpu 
} from "lucide-react";

export const MANUFACTURING_SOLUTIONS_DATA = {
  mainTitle: "Core Manufacturing Solutions",
  section1: {
    title: "1. Industry 4.0 / Smart Factory Implementation",
    intro: {
      title: "Connected Equipment & IoT Infrastructure",
      description: "Transform traditional manufacturing facilities into intelligent, interconnected ecosystems where machines communicate status, production equipment self-optimizes, and operators receive real-time insights enabling data-driven decision-making"
    },
    sensorDeployment: {
      title: "Comprehensive IoT Sensor Deployment",
      categories: [
        {
          title: "Rotating Equipment Monitoring",
          icon: Activity,
          color: "blue",
          items: [
            "Vibration sensors on motors, pumps, gearboxes, fans, and compressors detecting bearing failures weeks before catastrophic breakdown",
            "Accelerometers measuring vibration frequency spectrum identifying specific failure modes (imbalance, misalignment, bearing defects, gear wear)",
            "Wireless sensors enabling non-intrusive installation on legacy equipment",
            "Permanently mounted sensors providing continuous monitoring for critical assets"
          ]
        },
        {
          title: "Thermal Monitoring",
          icon: Thermometer,
          color: "green",
          items: [
            "Infrared temperature sensors on bearings, motors, electrical panels detecting overheating conditions",
            "Thermocouples and RTDs monitoring process temperatures in ovens, furnaces, heat exchangers",
            "Thermal imaging cameras for periodic comprehensive facility surveys",
            "Automated alerts when temperatures exceed safe operating thresholds"
          ]
        },
        {
          title: "Electrical Monitoring",
          icon: Zap,
          color: "blue",
          items: [
            "Current sensors measuring electrical load on motors and drives",
            "Power meters tracking energy consumption at machine and facility levels",
            "Current signature analysis detecting rotor bar failures, winding issues, load abnormalities",
            "Power quality monitoring (voltage sags, harmonics, power factor)"
          ]
        },
        {
          title: "Process Monitoring",
          icon: Gauge,
          color: "green",
          items: [
            "Pressure transducers in hydraulic and pneumatic systems",
            "Flow meters measuring fluid and gas flow rates",
            "Level sensors for tanks, hoppers, silos",
            "Gas sensors detecting leaks (natural gas, refrigerants, compressed air)",
            "Particulate sensors monitoring air quality in sensitive processes"
          ]
        },
        {
          title: "Quality Monitoring",
          icon: Eye,
          color: "blue",
          items: [
            "Vision cameras for automated visual inspection",
            "Dimensional gauges measuring part dimensions in-process",
            "Weight scales verifying product weight compliance",
            "Torque sensors confirming proper assembly",
            "Leak testers ensuring seal integrity"
          ]
        }
      ]
    }
  }
};