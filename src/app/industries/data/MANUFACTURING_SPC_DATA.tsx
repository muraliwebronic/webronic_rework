import {
  Activity,
  BarChart2,
  AlertTriangle,
  Settings,
  Database,
  Monitor,
  Bell,
  Cpu,
  TrendingUp,
  GitCommit,
  Hash,
  Sigma
} from "lucide-react";

export const MANUFACTURING_SPC_DATA = {
  header: {
    title: "Statistical Process Control (SPC)",
    subTitle: "Real-Time Quality Monitoring",
    description: "Monitor manufacturing processes in real-time using control charts to detect variations, identify trends, and enable proactive intervention before defects are produced."
  },
  fundamentals: {
    title: "Control Chart Fundamentals",
    purpose: [
      "Distinguish common cause variation (inherent to process) from special cause variation (assignable, correctable)",
      "Monitor process stability over time",
      "Identify when process is drifting out of control",
      "Enable data-driven process improvements"
    ]
  },
  charts: {
    title: "Common Control Charts",
    categories: [
      {
        title: "Variable Data (Measurements)",
        icon: Activity,
        items: [
          { name: "X-bar and R Chart", desc: "Monitor average (X-bar) and range (R) of subgroups" },
          { name: "X-bar and S Chart", desc: "Monitor average and standard deviation (for larger subgroups n>10)" },
          { name: "Individuals and Moving Range (I-MR)", desc: "Single measurements (n=1)" }
        ]
      },
      {
        title: "Attribute Data (Count/Proportion)",
        icon: Hash,
        items: [
          { name: "p-Chart", desc: "Proportion defective (fraction non-conforming)" },
          { name: "np-Chart", desc: "Number defective (count of non-conforming items)" },
          { name: "c-Chart", desc: "Count of defects per unit" },
          { name: "u-Chart", desc: "Defects per unit (when sample size varies)" }
        ]
      },
      {
        title: "Advanced Charts",
        icon: TrendingUp,
        items: [
          { name: "CUSUM (Cumulative Sum)", desc: "Detect small shifts quickly" },
          { name: "EWMA (Exponentially Weighted Moving Average)", desc: "Give more weight to recent data" }
        ]
      }
    ]
  },
  interpretation: {
    title: "Control Chart Interpretation",
    limits: [
      { label: "Upper Control Limit (UCL)", value: "Mean + 3σ", color: "red" },
      { label: "Center Line (CL)", value: "Process mean", color: "green" },
      { label: "Lower Control Limit (LCL)", value: "Mean - 3σ", color: "red" }
    ],
    signals: {
      title: "Out-of-Control Signals",
      items: [
        "Any point beyond control limits (special cause variation)",
        "7+ consecutive points on one side of center line (process shift)",
        "7+ consecutive increasing or decreasing points (trend)",
        "2 of 3 consecutive points beyond 2σ (early warning)",
        "4 of 5 consecutive points beyond 1σ",
        "14+ points alternating up and down (over-adjustment)",
        "15+ points within 1σ of center (stratification, reduced variation)"
      ]
    },
    actions: {
      title: "Actions When Out-of-Control",
      steps: [
        "Stop production (if critical)",
        "Investigate root cause (5 Whys, fishbone diagram)",
        "Correct assignable cause",
        "Document findings and actions",
        "Resume production",
        "Continue monitoring"
      ]
    }
  },
  automation: {
    title: "Automated SPC Implementation",
    sections: [
      {
        title: "Data Collection",
        icon: Database,
        items: [
          "Automated from sensors, inspection systems, CMMs (Coordinate Measuring Machines)",
          "Manual entry from operators (dimensional checks, visual inspections)",
          "Barcode/RFID linking measurements to parts",
          "Real-time transmission to SPC software"
        ]
      },
      {
        title: "Real-Time Charts",
        icon: Monitor,
        items: [
          "Control charts update automatically with each new measurement",
          "Display on operator workstations, floor screens",
          "Color-coded indicators (green = in control, yellow = warning, red = out of control)",
          "Trend arrows showing direction"
        ]
      },
      {
        title: "Automated Alerting",
        icon: Bell,
        items: [
          "Immediate alerts when control rules violated",
          "Email, SMS, dashboard notifications",
          "Escalation if not acknowledged",
          "Integration with work instructions (display troubleshooting guides)"
        ]
      },
      {
        title: "SPC Software",
        icon: Cpu,
        items: [
          "Minitab (statistical analysis leader)",
          "InfinityQS (real-time SPC)",
          "QI Macros (Excel add-in, lower cost)",
          "Custom SPC in MES platforms"
        ]
      }
    ]
  }
};