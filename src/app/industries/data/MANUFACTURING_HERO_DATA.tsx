import { 
  Factory, 
  TrendingDown, 
  CheckCircle2, 
  DollarSign, 
  Gauge 
} from "lucide-react";

export const MANUFACTURING_HERO_DATA = {
  h1: "Manufacturing & Industrial IT Solutions",
  description: "Transform your manufacturing operations with Industry 4.0 technologies. Smart factories, predictive maintenance, quality automation, and supply chain optimization delivering 68% downtime reduction and 99.2% inspection accuracy.",
  stats: [
    {
      value: "100+",
      label: "Manufacturing Implementations",
      icon: Factory
    },
    {
      value: "68%",
      label: "Average Downtime Reduction",
      icon: TrendingDown
    },
    {
      value: "99.2%",
      label: "Automated Quality Inspection Accuracy",
      icon: CheckCircle2
    },
    {
      value: "$8.5M",
      label: "Average Annual Savings Per Implementation",
      icon: DollarSign
    },
    {
      value: "30%",
      label: "OEE Improvement Across Deployments",
      icon: Gauge
    }
  ]
};