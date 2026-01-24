import { 
  Calculator, 
  TrendingUp, 
  AlertOctagon, 
  CheckCircle2, 
  Sigma, 
  FileCheck, 
  AlertTriangle, 
  Truck, 
  ClipboardList, 
  FolderLock, 
  GraduationCap, 
  FileSignature, 
  Database, 
  ShieldCheck 
} from "lucide-react";

export const MANUFACTURING_PROCESS_QMS_DATA = {
  capability: {
    title: "Process Capability Analysis",
    indices: [
      {
        title: "Cp (Process Capability)",
        formula: "Cp = (USL - LSL) / 6σ",
        items: [
          "Measures potential capability (assumes process centered)",
          "Cp ≥ 1.33 typically required",
          "Cp < 1.0: Process incapable (produces defects even if centered)"
        ]
      },
      {
        title: "Cpk (Process Capability Index)",
        formula: "Cpk = min[(USL - μ) / 3σ, (μ - LSL) / 3σ]",
        items: [
          "Accounts for process centering",
          "Cpk ≥ 1.33 industry standard",
          "Cpk ≥ 1.67 for critical characteristics",
          "Cpk ≥ 2.0 for Six Sigma processes"
        ]
      }
    ],
    interpretation: {
      title: "Interpretation",
      levels: [
        { range: "Cpk < 1.0", desc: "Immediate action required", color: "red" },
        { range: "Cpk 1.0 - 1.33", desc: "Process improvement needed", color: "yellow" },
        { range: "Cpk 1.33 - 1.67", desc: "Adequate capability", color: "blue" },
        { range: "Cpk > 1.67", desc: "Excellent capability", color: "green" }
      ]
    },
    sixSigma: {
      title: "Six Sigma Metrics",
      formula: "Sigma level = (USL - LSL) / (2 * 3 * σ)",
      levels: [
        { level: "3 Sigma", dpmo: "2,700 DPMO (Defects Per Million Opportunities)" },
        { level: "4 Sigma", dpmo: "63 DPMO" },
        { level: "5 Sigma", dpmo: "0.57 DPMO" },
        { level: "6 Sigma", dpmo: "0.002 DPMO (3.4 DPMO with 1.5σ shift)" }
      ]
    }
  },
  qms: {
    title: "Quality Management System (QMS) Integration",
    subTitle: "End-to-End Quality",
    description: "Integrate inspection data, SPC, non-conformances, and corrective actions into comprehensive quality management system",
    functions: [
      {
        title: "Non-Conformance Management",
        icon: AlertTriangle,
        items: [
          "Document defects discovered (inspection, customer returns, internal audit)",
          "Root cause analysis (5 Whys, Fishbone, Fault Tree Analysis)",
          "Corrective action assignment (who, what, when)",
          "Verification of effectiveness",
          "Trend analysis (recurring issues)"
        ]
      },
      {
        title: "Corrective and Preventive Action (CAPA)",
        icon: FileCheck,
        items: [
          "CAPA workflow (initiate, investigate, action, verify, close)",
          "Risk assessment (severity, occurrence, detection - FMEA)",
          "Action effectiveness tracking",
          "Regulatory compliance (ISO 9001, IATF 16949, FDA)"
        ]
      },
      {
        title: "Supplier Quality Management",
        icon: Truck,
        items: [
          "Supplier performance scorecards (quality, delivery, cost)",
          "Supplier non-conformances and corrective actions",
          "Supplier audits and certifications",
          "Incoming inspection results",
          "Approved supplier lists"
        ]
      },
      {
        title: "Audit Management",
        icon: ClipboardList,
        items: [
          "Internal audit scheduling and planning",
          "Audit checklists and procedures",
          "Finding documentation",
          "Corrective action tracking",
          "Audit reports"
        ]
      },
      {
        title: "Document Control",
        icon: FolderLock,
        items: [
          "Controlled document repository (procedures, work instructions, specifications)",
          "Version control and revision history",
          "Approval workflows",
          "Distribution management",
          "Training record linking (employees trained on which documents)"
        ]
      },
      {
        title: "Training Management",
        icon: GraduationCap,
        items: [
          "Training curriculum and requirements by role",
          "Training record tracking",
          "Certification management",
          "Retraining schedules",
          "Competency assessment"
        ]
      },
      {
        title: "Certificate of Analysis (CoA)",
        icon: FileSignature,
        items: [
          "Automated CoA generation from inspection data",
          "Customer-specific format templates",
          "Batch/lot traceability",
          "Digital signatures",
          "Email delivery to customers"
        ]
      }
    ],
    platforms: {
      commercial: {
        title: "Commercial Solutions",
        icon: Database,
        items: [
          "MasterControl (life sciences focus)",
          "TrackWise (pharma/medical devices)",
          "Greenlight Guru (medical devices)",
          "ETQ Reliance",
          "SAP Quality Management",
          "Arena PLM + QMS"
        ]
      },
      compliance: {
        title: "Compliance",
        icon: ShieldCheck,
        items: [
          "ISO 9001:2015 (general quality management)",
          "ISO 13485 (medical devices)",
          "IATF 16949 (automotive)",
          "AS9100 (aerospace)",
          "FDA 21 CFR Part 11 (electronic records/signatures)",
          "FDA 21 CFR Part 820 (medical device QMS)"
        ]
      }
    }
  }
};