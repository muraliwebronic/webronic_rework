import { 
  AlertTriangle, 
  ShieldAlert, 
  Truck, 
  Users, 
  TrendingDown, 
  FileCheck, 
  Factory,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Clock
} from "lucide-react";

export const MANUFACTURING_OVERVIEW_DATA = {
  overview: {
    title: "Industry Overview",
    paragraphs: [
      "Manufacturing faces unprecedented challenges in the era of Industry 4.0. Global competition intensifies daily, supply chains grow increasingly complex and vulnerable to disruption, skilled labor becomes scarcer as experienced workers retire, and customers demand mass customization at commodity prices. Meanwhile, margin pressures persist as raw material costs fluctuate and operational expenses rise.",
      "Digital transformation—Industry 4.0—is no longer a competitive advantage but a survival requirement. Manufacturers leveraging IoT sensors, AI/ML analytics, robotics, digital twins, and cloud computing create “smart factories” that are more efficient, flexible, resilient, and responsive to market changes."
    ]
  },
  challenges: {
    title: "Critical Manufacturing Challenges",
    items: [
      {
        title: "Unplanned Downtime",
        description: "Equipment failures costing $50,000-$1M per hour in lost production, emergency repairs, scrapped materials, and missed delivery commitments.",
        icon: AlertTriangle,
        color: "red" // Internal use for styling cues if needed, using standard blue/green in UI
      },
      {
        title: "Quality Issues",
        description: "Defects causing rework expenses, material waste, customer dissatisfaction, warranty claims, and potential product recalls damaging brand reputation.",
        icon: ShieldAlert,
        color: "blue"
      },
      {
        title: "Supply Chain Volatility",
        description: "Material shortages, logistics disruptions, supplier reliability issues, inventory imbalances, and bullwhip effects cascading through the supply network.",
        icon: Truck,
        color: "green"
      },
      {
        title: "Skilled Labor Shortage",
        description: "Aging workforce retiring with tribal knowledge, difficulty hiring qualified technicians and engineers, training costs for new employees, and safety concerns with inexperienced workers.",
        icon: Users,
        color: "blue"
      },
      {
        title: "Margin Pressure",
        description: "Rising costs (materials, energy, labor), global competition, customer price sensitivity, and commoditization of products requiring differentiation through quality and service.",
        icon: TrendingDown,
        color: "green"
      },
      {
        title: "Regulatory Compliance",
        description: "Environmental regulations (emissions, waste disposal), safety standards (OSHA, ISO), quality certifications (ISO 9001, IATF 16949), product traceability requirements, and audit preparation burdens.",
        icon: FileCheck,
        color: "blue"
      }
    ]
  },
  expertise: {
    title: "Our Manufacturing Expertise",
    description: "We’ve implemented 100+ manufacturing solutions across diverse sectors including automotive parts, electronics assembly, food & beverage production, pharmaceutical manufacturing, chemical processing, and industrial equipment fabrication.",
    resultsTitle: "Our Industry 4.0 solutions have delivered quantifiable results:",
    results: [
      {
        value: "68%",
        text: "reduction in unplanned downtime through predictive maintenance programs",
        icon: TrendingUp
      },
      {
        value: "99.2%",
        text: "automated visual inspection accuracy (compared to 85% human inspection)",
        icon: CheckCircle2
      },
      {
        value: "30%",
        text: "improvement in Overall Equipment Effectiveness (OEE)",
        icon: Factory
      },
      {
        value: "$8.5M",
        text: "average annual savings per implementation",
        icon: DollarSign
      },
      {
        value: "8-18 Months",
        text: "ROI achieved across implementations",
        icon: Clock
      }
    ]
  }
};