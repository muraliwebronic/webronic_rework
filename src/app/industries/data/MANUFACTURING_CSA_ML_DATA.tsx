import { 
  Zap, 
  Activity, 
  Search, 
  Wind, 
  Droplet, 
  Gauge, 
  Database, 
  Binary, 
  BrainCircuit, 
  CheckCircle2, 
  Rocket,
  Ear
} from "lucide-react";

export const MANUFACTURING_CSA_ML_DATA = {
  mesa: {
    title: "Current Signature Analysis (Motor Circuit Analysis)",
    sections: [
      {
        title: "Electrical Testing",
        subTitle: "Motor electrical signature analysis (MESA)",
        icon: Zap,
        color: "blue",
        items: [
          "Detects rotor bar cracks/breaks",
          "Stator winding deterioration",
          "Air gap eccentricity",
          "Electrical unbalance",
          "Supply power quality issues"
        ]
      },
      {
        title: "How It Works",
        icon: Activity,
        color: "green",
        items: [
          "Measure motor current and voltage during operation",
          "FFT analysis reveals electrical anomalies",
          "Non-intrusive (clamp-on current sensor)",
          "Performed while motor running under load"
        ]
      },
      {
        title: "Detection Capabilities",
        icon: Search,
        color: "blue",
        items: [
          "Broken rotor bars (weeks to months before motor failure)",
          "Stator winding shorts/grounds (insulation deterioration)",
          "Bearing defects (current modulation from mechanical vibration)",
          "Load variations and coupling issues"
        ]
      }
    ]
  },
  ultrasonic: {
    title: "Ultrasonic Testing",
    applications: [
      {
        title: "Compressed Air Leak Detection",
        icon: Wind,
        details: [
          "Compressed air leaks are invisible but costly (typical plant wastes 20-30% of compressed air)",
          "Ultrasonic detector “hears” high-frequency leak sound",
          "Quantify leak size and cost",
          "Typical ROI: Repair identified leaks, save 15-25% energy costs",
          "Annual savings: $50,000 - $500,000 for medium-large facilities"
        ]
      },
      {
        title: "Bearing Lubrication",
        icon: Droplet,
        details: [
          "Ultrasonic measurement during greasing",
          "Optimal lubrication level detected (sound changes)",
          "Prevents over-greasing (causes heat, seal damage) and under-greasing (wear)"
        ]
      },
      {
        title: "Electrical Inspection",
        icon: Zap,
        details: [
          "Detect arcing, tracking, corona discharge",
          "Identify loose connections, failing insulators",
          "Switchgear inspection"
        ]
      },
      {
        title: "Valve Leakage",
        icon: Gauge,
        details: [
          "Internal valve leakage detection (bypass, seat leakage)",
          "Steam trap testing (functioning, failed open/closed)"
        ]
      }
    ]
  },
  mlModels: {
    title: "Machine Learning Predictive Models",
    subTitle: "Data-Driven Failure Prediction",
    description: "Move beyond simple threshold alarming to sophisticated machine learning models that learn normal equipment behavior patterns and detect subtle anomalies indicating impending failure",
    steps: [
      {
        step: "Step 1",
        title: "Data Collection (12-18 months)",
        icon: Database,
        items: [
          "Gather sensor data (vibration, temperature, current, pressure, etc.)",
          "Document all failures (date, type, root cause, repair actions, parts replaced)",
          "Collect maintenance history",
          "Record operating conditions (load, speed, temperature, production rate)",
          "Minimum dataset: 20-50 failure events for supervised learning"
        ]
      },
      {
        step: "Step 2",
        title: "Feature Engineering",
        icon: Binary,
        items: [
          "Extract meaningful features from raw sensor data",
          "Statistical features (mean, standard deviation, min, max, percentiles)",
          "Frequency domain features (FFT peak amplitudes, frequency components)",
          "Time-series features (trend, rate of change)",
          "Domain-specific features (bearing frequency components, harmonics)"
        ]
      },
      {
        step: "Step 3",
        title: "Model Selection & Training",
        icon: BrainCircuit,
        subSections: [
          {
            label: "Supervised Learning (when labeled failure data available):",
            list: [
              "Random Forest (ensemble of decision trees, handles non-linear relationships)",
              "Gradient Boosting (XGBoost, LightGBM - high accuracy)",
              "Support Vector Machines (SVM - good for binary classification)",
              "Deep Learning (LSTM, CNN - for complex temporal patterns)"
            ]
          },
          {
            label: "Unsupervised Learning (when limited failure data):",
            list: [
              "Isolation Forest (anomaly detection)",
              "Autoencoders (neural network detects deviations from normal)",
              "One-Class SVM",
              "DBSCAN clustering"
            ]
          }
        ]
      },
      {
        step: "Step 4",
        title: "Model Validation",
        icon: CheckCircle2,
        items: [
          "Split data (70% training, 15% validation, 15% test)",
          "Cross-validation to prevent overfitting",
          "Evaluate performance metrics:",
          "Precision (true positives / predicted positives) - minimize false alarms",
          "Recall/Sensitivity (true positives / actual positives) - catch all failures",
          "F1-Score (harmonic mean of precision and recall)",
          "ROC-AUC (Receiver Operating Characteristic - Area Under Curve)",
          "Prediction lead time (how far in advance failure predicted)"
        ]
      },
      {
        step: "Step 5",
        title: "Deployment",
        icon: Rocket,
        items: [
          "Real-time scoring infrastructure",
          "Integration with CMMS for automatic work order generation",
          "Alert notification system (email, SMS, dashboard)",
          "Feedback loop (validate predictions, retrain model with new data)"
        ]
      }
    ]
  }
};