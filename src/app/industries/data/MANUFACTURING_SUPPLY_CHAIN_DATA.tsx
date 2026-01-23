import { 
  TrendingUp, 
  BrainCircuit, 
  Layers, 
  History, 
  Globe2, 
  Megaphone, 
  PackageSearch, 
  CalendarClock, 
  Target 
} from "lucide-react";

export const MANUFACTURING_SUPPLY_CHAIN_DATA = {
  header: {
    section: "4. Supply Chain Optimization",
    title: "Demand Forecasting with AI",
    subTitle: "Predictive Demand Planning",
    description: "Leverage machine learning to predict product demand with 85-90% accuracy, enabling optimal inventory levels, production planning, and customer service."
  },
  methodologies: {
    title: "Forecasting Methodologies",
    methods: [
      {
        title: "Time Series Analysis",
        icon: TrendingUp,
        color: "blue",
        items: [
          { name: "ARIMA (AutoRegressive Integrated Moving Average)", desc: "Classic statistical method, good for stable demand with trends/seasonality" },
          { name: "Prophet (Facebook)", desc: "Handles seasonality, holidays, missing data, outliers gracefully" },
          { name: "Exponential Smoothing", desc: "Simple, good for short-term forecasts" }
        ]
      },
      {
        title: "Machine Learning",
        icon: BrainCircuit,
        color: "green",
        items: [
          { name: "Random Forest", desc: "Handles non-linear relationships, feature interactions" },
          { name: "XGBoost, LightGBM", desc: "Gradient boosting, high accuracy, fast training" },
          { name: "Neural Networks", desc: "Deep learning for complex patterns" }
        ]
      },
      {
        title: "Ensemble Methods",
        icon: Layers,
        color: "blue",
        items: [
          { name: "Combine multiple models", desc: "(ARIMA + XGBoost + Prophet)" },
          { name: "Weighted average or stacking", desc: "" },
          { name: "Improves accuracy and robustness", desc: "" }
        ]
      }
    ]
  },
  inputs: {
    title: "Forecasting Inputs",
    categories: [
      {
        title: "Historical Data",
        icon: History,
        items: [
          "Sales history (daily/weekly/monthly for 2-3 years minimum)",
          "Seasonality patterns (holidays, quarters, weather-dependent)",
          "Promotional history (discounts, campaigns)",
          "Product lifecycle stage (introduction, growth, maturity, decline)"
        ]
      },
      {
        title: "External Factors",
        icon: Globe2,
        items: [
          "Economic indicators (GDP, unemployment, consumer confidence)",
          "Weather data (temperature, precipitation for relevant products)",
          "Social media sentiment and trends",
          "Competitor activity",
          "Industry events (trade shows, conferences)"
        ]
      },
      {
        title: "Causal Factors",
        icon: Megaphone,
        items: [
          "Pricing changes",
          "New product introductions",
          "Marketing campaigns",
          "Distribution expansion",
          "Cannibalization from other products"
        ]
      }
    ]
  },
  outputs: {
    title: "Forecast Outputs",
    categories: [
      {
        title: "Forecasts Generated",
        icon: PackageSearch,
        items: [
          "SKU-level demand forecasts (individual products)",
          "Product family aggregation",
          "Customer-level forecasts (for B2B)",
          "Geographic region forecasts",
          "Channel forecasts (wholesale, retail, online)"
        ]
      },
      {
        title: "Forecast Horizons",
        icon: CalendarClock,
        items: [
          "Short-term: Daily/weekly (1-4 weeks) - for production scheduling",
          "Medium-term: Weekly/monthly (1-3 months) - for procurement, capacity planning",
          "Long-term: Monthly/quarterly (3-18 months) - for strategic planning, capital investments"
        ]
      },
      {
        title: "Forecast Accuracy",
        icon: Target,
        items: [
          "MAPE (Mean Absolute Percentage Error): 10-20% typical for short-term",
          "Bias (Over-forecast vs. Under-forecast)",
          "Forecast Value Added (FVA) - improvement over naïve forecast"
        ]
      }
    ]
  }
};