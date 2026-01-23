import { 
  ClipboardCheck, 
  PenTool, 
  Database, 
  Cpu, 
  Settings, 
  CheckCircle, 
  Target, 
  Zap, 
  FileText, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Clock
} from "lucide-react";

export const MANUFACTURING_CV_IMPLEMENTATION_DATA = {
  process: {
    title: "Implementation Process",
    timeline: "Total Implementation: 16-24 weeks typical",
    phases: [
      {
        phase: "Phase 1",
        title: "Application Study",
        duration: "2 weeks",
        icon: ClipboardCheck,
        items: [
          "Define acceptance criteria (what constitutes pass/fail)",
          "Analyze part variation (color, size, orientation)",
          "Lighting and fixturing feasibility",
          "Sample parts collection (good and defective examples)",
          "Proof-of-concept testing"
        ]
      },
      {
        phase: "Phase 2",
        title: "System Design",
        duration: "3 weeks",
        icon: PenTool,
        items: [
          "Camera selection and positioning",
          "Lighting design",
          "Part handling and presentation method",
          "Integration with production line",
          "Reject handling mechanism"
        ]
      },
      {
        phase: "Phase 3",
        title: "Training Data Collection",
        duration: "4-6 weeks",
        icon: Database,
        items: [
          "Collect 500-10,000 images per product/defect type",
          "Label images (bounding boxes for defects, classification labels)",
          "Data quality review (ensure representative samples)",
          "Data augmentation strategy"
        ]
      },
      {
        phase: "Phase 4",
        title: "Model Development",
        duration: "4-8 weeks",
        icon: Cpu,
        items: [
          "Algorithm selection (deep learning vs. classical)",
          "Model architecture design",
          "Training and optimization",
          "Validation testing (accuracy, speed)",
          "Iterative refinement (adjust parameters, retrain)"
        ]
      },
      {
        phase: "Phase 5",
        title: "System Integration",
        duration: "3-4 weeks",
        icon: Settings,
        items: [
          "Hardware installation on production line",
          "Software deployment",
          "PLC integration (triggers, results communication)",
          "Reject mechanism programming",
          "Operator interface development"
        ]
      },
      {
        phase: "Phase 6",
        title: "Validation & Production",
        duration: "2-3 weeks",
        icon: CheckCircle,
        items: [
          "Production trial with 100% verification (human + machine)",
          "Accuracy validation (>95% target)",
          "Optimize speed vs. accuracy tradeoff",
          "False positive/negative tuning",
          "Training and documentation"
        ]
      }
    ]
  },
  performance: {
    title: "Computer Vision Performance",
    metrics: [
      {
        category: "Accuracy",
        icon: Target,
        details: [
          "Defect detection: 99%+ typical (vs. 80-90% human inspection)",
          "False positive rate: <1% (defects flagged incorrectly as good)",
          "False negative rate: <1% (defects missed)",
          "Consistency: No variation due to fatigue, lighting conditions, operator experience"
        ]
      },
      {
        category: "Speed",
        icon: Zap,
        details: [
          "100-500 parts per minute depending on complexity",
          "Inspection time: 50-500 milliseconds per part",
          "Significantly faster than human inspection (2-10 seconds per part)"
        ]
      },
      {
        category: "Documentation",
        icon: FileText,
        details: [
          "Every part image archived with inspection results",
          "Defect images with bounding boxes/annotations",
          "Statistical analysis and trending",
          "Traceability (link inspection results to serial numbers)",
          "Regulatory compliance (FDA 21 CFR Part 11 for pharma/medical)"
        ]
      }
    ]
  },
  roi: {
    title: "ROI Analysis",
    caseStudy: {
      title: "Case Study: Electronics Manufacturer",
      challenge: {
        title: "Challenge",
        items: [
          "Manual visual inspection of PCBs (Printed Circuit Boards)",
          "200 human inspectors",
          "85% defect detection rate (15% escapes to customers)",
          "Inspection bottleneck limiting throughput",
          "High labor costs ($8M annually)"
        ]
      },
      solution: {
        title: "Solution",
        items: [
          "120 computer vision inspection stations across 6 production lines",
          "Custom CNN model trained on 500,000 images",
          "12 defect classes (solder defects, component issues, PCB damage)",
          "NVIDIA Jetson AGX edge inference",
          "Integration with MES for traceability"
        ]
      },
      investment: {
        title: "Investment",
        icon: DollarSign,
        items: [
          { label: "Hardware (cameras, lighting, PCs)", value: "$2.4M" },
          { label: "Software development (model training, integration)", value: "$1.8M" },
          { label: "Installation and commissioning", value: "$800,000" },
          { label: "Total", value: "$5M", highlight: true }
        ]
      },
      results: {
        title: "Results",
        icon: TrendingUp,
        items: [
          { label: "Accuracy", value: "99.2% defect detection (vs. 85% manual)" },
          { label: "Defect Escapes", value: "Reduced from 4.2% to 0.3% (93% reduction)" },
          { label: "Speed", value: "400% faster than manual inspection" },
          { label: "Labor Savings", value: "180 inspectors redeployed ($7.2M annual savings)" },
          { label: "Quality Improvement", value: "Customer returns reduced 75%" },
          { label: "ROI", value: "7-month payback period", highlight: true }
        ]
      },
      additionalBenefits: "Additional Benefits: Complete traceability, data for continuous improvement"
    }
  }
};