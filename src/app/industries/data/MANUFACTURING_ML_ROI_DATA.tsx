import { 
  Target, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Wrench,
  BarChart3
} from "lucide-react";

export const MANUFACTURING_ML_ROI_DATA = {
  mlPerformance: {
    title: "ML Model Performance",
    accuracy: {
      title: "Typical Prediction Accuracy",
      icon: Target,
      items: [
        { label: "85-90% for common failure modes", sub: "(bearings, motor failures)" },
        { label: "75-85% for complex failure modes", sub: "(gear failures, pump cavitation)" },
        { label: "Prediction window: 1-4 weeks advance warning", sub: "(sufficient for planned maintenance)" },
        { label: "False positive rate target: <10%", sub: "(minimize unnecessary inspections)" },
        { label: "False negative rate target: <5%", sub: "(don’t miss actual failures)" }
      ]
    },
    outputs: {
      title: "Model Outputs",
      icon: Terminal,
      items: [
        "Failure probability (0-100%)",
        "Time to failure estimate (days, weeks)",
        "Predicted failure mode (bearing, seal, alignment, etc.)",
        "Confidence level in prediction",
        "Recommended action (inspect, replace, adjust, monitor)",
        "Historical similar failures for context"
      ]
    }
  },
  roi: {
    title: "Predictive Maintenance ROI",
    subTitle: "Cost-Benefit Analysis",
    costs: {
      title: "Costs",
      icon: DollarSign,
      items: [
        { item: "Sensor installation", cost: "$500 - $5,000 per asset", sub: "(depending on complexity)" },
        { item: "Data infrastructure", cost: "$50,000 - $200,000", sub: "(edge gateways, network, servers)" },
        { item: "Software platform", cost: "$20,000 - $100,000", sub: "annual subscription" },
        { item: "Data science/ML development", cost: "$100,000 - $500,000", sub: "(custom models)" },
        { item: "Training and change management", cost: "$25,000 - $100,000", sub: "" }
      ]
    },
    benefits: {
      categories: [
        {
          title: "Downtime Reduction",
          icon: Activity,
          color: "blue",
          items: [
            "Unplanned downtime reduced 30-50%",
            "Each hour of downtime costs: $50,000 - $1M (industry/asset dependent)",
            "Annual downtime savings: $500,000 - $5M typical"
          ]
        },
        {
          title: "Maintenance Cost Reduction",
          icon: Wrench,
          color: "green",
          items: [
            "20-30% lower overall maintenance costs",
            "Fewer emergency repairs (3x cost of planned repairs)",
            "Optimized parts inventory (order parts before failure, avoid expediting)",
            "Labor efficiency (schedule work during planned outages)"
          ]
        },
        {
          title: "Extended Asset Life",
          icon: TrendingUp,
          color: "blue",
          items: [
            "25-30% increase in equipment lifespan",
            "Defer capital expenditures on new equipment",
            "Asset depreciation optimization"
          ]
        },
        {
          title: "Safety Improvements",
          icon: Shield,
          color: "green",
          items: [
            "Reduced catastrophic failures (explosions, fires, toxic releases)",
            "Fewer injuries from unexpected equipment failures",
            "Improved regulatory compliance"
          ]
        }
      ]
    },
    payback: {
      title: "Typical Payback",
      icon: Clock,
      scenarios: [
        { type: "Small implementation", size: "(20 assets)", duration: "18-24 months" },
        { type: "Medium implementation", size: "(100 assets)", duration: "12-18 months" },
        { type: "Large implementation", size: "(500+ assets)", duration: "8-14 months" }
      ]
    }
  }
};