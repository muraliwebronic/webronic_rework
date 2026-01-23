import { 
  ClipboardList, 
  Users, 
  ShieldCheck, 
  Wrench, 
  BarChart2, 
  Database, 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  Package, 
  DollarSign, 
  ArrowUp, 
  ArrowDown, 
  ArrowRightLeft, 
  AlertTriangle, 
  CalendarClock, 
  Activity 
} from "lucide-react";

export const MANUFACTURING_MES_MAINTENANCE_DATA = {
  mes: {
    title: "Manufacturing Execution System (MES)",
    subTitle: "Bridging ERP and Shop Floor",
    description: "MES fills the critical gap between enterprise resource planning (ERP) systems handling business functions and shop floor control systems (SCADA, PLCs) managing equipment, providing real-time manufacturing intelligence and execution control.",
    functions: [
      {
        title: "1. Production Scheduling & Dispatching",
        icon: ClipboardList,
        items: [
          "Receive production orders from ERP",
          "Finite capacity scheduling considering machine availability, tooling, material, labor",
          "Dispatching work orders to specific machines/lines",
          "Sequencing optimization (minimize changeovers, meet due dates)",
          "Real-time schedule adjustments based on actual performance",
          "Visual schedule boards for operators and supervisors"
        ]
      },
      {
        title: "2. Resource Allocation & Tracking",
        icon: Users,
        items: [
          "Personnel assignment (who works which machine/shift)",
          "Tool management (tool life tracking, crib management, automatic tool change scheduling)",
          "Material allocation (kitting, delivery to line, consumption tracking)",
          "Equipment assignment (which machines capable of which operations)",
          "Capacity management (available hours vs. required hours)"
        ]
      },
      {
        title: "3. Quality Management",
        icon: ShieldCheck,
        items: [
          "In-process inspection recording",
          "Statistical Process Control (SPC) chart generation and monitoring",
          "Non-conformance documentation (defect descriptions, photos, root cause)",
          "Corrective action tracking (CAPA workflows)",
          "Quality hold management (quarantine, disposition)",
          "Certificate of Analysis (CoA) generation"
        ]
      },
      {
        title: "4. Maintenance Management",
        icon: Wrench,
        items: [
          "Work order generation (preventive, predictive, corrective)",
          "Maintenance scheduling integrated with production",
          "Spare parts inventory management",
          "Equipment history documentation (repairs, parts replaced, downtime)",
          "CMMS (Computerized Maintenance Management System) integration",
          "Maintenance KPIs (MTBF, MTTR, maintenance costs)"
        ]
      },
      {
        title: "5. Performance Analysis",
        icon: BarChart2,
        items: [
          "OEE calculation and trending",
          "Downtime Pareto analysis (top loss causes)",
          "Production variance reporting (planned vs. actual)",
          "Labor efficiency tracking",
          "Machine utilization rates",
          "Bottleneck identification"
        ]
      },
      {
        title: "6. Data Collection & Genealogy",
        icon: Database,
        items: [
          "Automated data capture from PLCs, sensors, machines",
          "Operator data entry (quality checks, downtime reasons)",
          "Barcode/RFID scanning (material tracking, work-in-process)",
          "Complete traceability (which materials, operators, equipment used for each serial number)",
          "Genealogy tracking (parent-child relationships in assemblies)",
          "Regulatory compliance documentation (21 CFR Part 11 for pharma/medical)"
        ]
      },
      {
        title: "7. Document Control",
        icon: FileText,
        items: [
          "Work instructions display at workstations (paperless operations)",
          "Engineering drawings and specifications",
          "Standard operating procedures (SOPs)",
          "Version control (ensure latest documents used)",
          "Change management (track document revisions)",
          "Electronic signatures and approvals"
        ]
      }
    ],
    benefits: {
      title: "MES Benefits",
      categories: [
        {
          title: "Operational",
          icon: TrendingUp,
          items: [
            "20-30% reduction in paperwork and administrative tasks",
            "15-25% improvement in labor productivity (less searching, clearer instructions)",
            "30-50% reduction in data entry errors (automated capture)",
            "Real-time visibility (vs. end-of-shift or daily reports)",
            "Faster problem resolution (immediate awareness vs. delayed discovery)"
          ]
        },
        {
          title: "Quality",
          icon: CheckCircle2,
          items: [
            "40-60% reduction in quality escapes (in-process monitoring, immediate corrective action)",
            "Complete traceability for recalls (identify affected batches in minutes vs. days)",
            "Consistent process execution (electronic work instructions vs. tribal knowledge)",
            "Regulatory compliance (audit trails, electronic records)"
          ]
        },
        {
          title: "Inventory",
          icon: Package,
          items: [
            "25-35% reduction in work-in-process (WIP) inventory",
            "Improved material tracking (real-time location visibility)",
            "Reduced obsolescence (better demand visibility)"
          ]
        },
        {
          title: "Financial",
          icon: DollarSign,
          items: [
            "Accurate production costing (actual material, labor, overhead allocation)",
            "Improved on-time delivery (real-time schedule awareness, proactive issue resolution)",
            "Better customer communication (real-time order status)"
          ]
        }
      ]
    },
    integration: {
      title: "MES Integration",
      streams: [
        {
          direction: "Upstream Integration (ERP)",
          icon: ArrowUp,
          details: [
            "Receive production orders, BOMs, routings from SAP, Oracle, Microsoft Dynamics",
            "Send production confirmations, material consumption, labor hours back to ERP",
            "Inventory transactions (receipts, issues, adjustments)",
            "Quality notifications and holds"
          ]
        },
        {
          direction: "Downstream Integration (Shop Floor)",
          icon: ArrowDown,
          details: [
            "PLC data collection (cycle counts, alarms, process parameters)",
            "SCADA integration (process control, historical data)",
            "Machine vision systems (quality inspection results)",
            "Coordinate measuring machines (CMM) for dimensional data",
            "Barcode scanners and RFID readers"
          ]
        },
        {
          direction: "Horizontal Integration",
          icon: ArrowRightLeft,
          details: [
            "Quality Management System (QMS) for non-conformances, audits",
            "Maintenance Management (CMMS) for work orders, asset management",
            "Laboratory Information Management System (LIMS) for test results",
            "Warehouse Management System (WMS) for material movements"
          ]
        }
      ]
    }
  },
  maintenance: {
    title: "2. Predictive Maintenance",
    subTitle: "From Reactive to Predictive Operations",
    approaches: [
      {
        type: "Reactive (Run-to-Failure)",
        icon: AlertTriangle,
        theme: "red",
        concept: "Fix equipment only when it breaks",
        details: [
          "Consequences: Unplanned downtime (production stops unexpectedly), emergency repair costs (overtime labor, expedited parts shipping), secondary damage (bearing failure destroys shaft), safety risks, lost production",
          "When Appropriate: Non-critical equipment where downtime acceptable, low-cost assets where monitoring cost > replacement cost"
        ]
      },
      {
        type: "Preventive (Time-Based)",
        icon: CalendarClock,
        theme: "yellow",
        concept: "Maintain on fixed schedule regardless of condition (e.g., change oil every 6 months)",
        details: [
          "Benefits: Reduced unexpected failures vs. reactive",
          "Drawbacks: Unnecessary maintenance (replacing good parts), doesn’t prevent failures between intervals, resource waste",
          "Cost: 20-40% of maintenance budget spent on unnecessary work"
        ]
      },
      {
        type: "Predictive (Condition-Based)",
        icon: Activity,
        theme: "green",
        concept: "Monitor equipment health continuously, maintain only when needed based on actual condition",
        details: [
          "Benefits: Maintain exactly when needed (not too early/late), maximize equipment life, minimize downtime, optimize maintenance resources",
          "Results: 30-50% reduction in unplanned downtime, 20-30% decrease in maintenance costs, 70% reduction in emergency repairs, 25-30% increase in equipment lifespan"
        ]
      }
    ]
  }
};