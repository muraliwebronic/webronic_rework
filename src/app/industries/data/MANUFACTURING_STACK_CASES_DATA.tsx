import { 
  Cpu, 
  Cloud, 
  AppWindow, 
  Eye, 
  Wrench, 
  Smartphone, 
  Activity, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Database, 
  Server, 
  Network
} from "lucide-react";

export const MANUFACTURING_STACK_CASES_DATA = {
  stack: {
    title: "Manufacturing Technology Stack",
    categories: [
      {
        title: "IoT & Edge Computing",
        icon: Cpu,
        items: [
          "Industrial PLCs (Siemens S7, Allen-Bradley ControlLogix, Mitsubishi, Schneider Electric)",
          "Edge gateways (Dell Edge Gateway 3000/5000, Advantech UNO, Cisco IR829)",
          "Industrial protocols (OPC-UA, Modbus TCP/RTU, PROFINET, EtherNet/IP, DeviceNet)",
          "MQTT brokers (Mosquitto, HiveMQ, AWS IoT Core)",
          "Edge analytics (Apache Spark, Node-RED, AWS Greengrass)",
          "Industrial sensors (Pepperl+Fuchs, ifm, Omron, Banner Engineering)"
        ]
      },
      {
        title: "Cloud & Data Platforms",
        icon: Cloud,
        items: [
          "Cloud: AWS IoT, Azure IoT Hub, Google Cloud IoT",
          "Time-series databases: InfluxDB, TimescaleDB, Amazon Timestream",
          "Data warehouses: Snowflake, Amazon Redshift, Google BigQuery",
          "Analytics: Tableau, Power BI, Grafana",
          "ML platforms: AWS SageMaker, Azure ML, Google AI Platform"
        ]
      },
      {
        title: "Manufacturing Software",
        icon: AppWindow,
        items: [
          "MES: Siemens Opcenter, Rockwell FactoryTalk, Dassault DELMIA, Parsec",
          "SCADA: Wonderware, Ignition, GE iFIX",
          "CMMS: IBM Maximo, SAP PM, Fiix",
          "QMS: MasterControl, TrackWise, ETQ Reliance",
          "ERP integration: SAP, Oracle, Microsoft Dynamics"
        ]
      },
      {
        title: "Computer Vision",
        icon: Eye,
        items: [
          "Cameras: Basler, Cognex, Keyence, FLIR",
          "Vision software: Cognex VisionPro, Halcon, OpenCV, TensorFlow",
          "Deep learning: PyTorch, TensorFlow, ONNX Runtime",
          "Edge inference: NVIDIA Jetson AGX/Xavier/Nano"
        ]
      }
    ]
  },
  caseStudies: {
    title: "Manufacturing Case Studies",
    cases: [
      {
        title: "Case Study 1: Automotive Tier 1 Supplier - Predictive Maintenance",
        icon: Wrench,
        client: "Client: Global automotive parts supplier, 200 CNC machines across 3 plants, $500M annual revenue",
        challenge: {
          items: [
            "Unplanned downtime averaging 5 hours per machine per week",
            "Annual production loss: $8M",
            "Reactive maintenance only (fix when broken)",
            "No machine health visibility",
            "Emergency repair costs 3× planned maintenance",
            "Customer penalties for late deliveries"
          ]
        },
        solution: {
          sections: [
            {
              title: "IoT Infrastructure",
              items: [
                "600 sensors deployed (vibration, temperature, current on 200 machines)",
                "Industrial Ethernet network (PROFINET)",
                "Edge gateways for data aggregation (Dell Edge Gateway 5000)",
                "Cellular backup connectivity (4G LTE)",
                "MQTT messaging to AWS IoT Core"
              ]
            },
            {
              title: "Analytics Platform",
              items: [
                "AWS IoT Core for device management",
                "Time-series database (TimescaleDB on RDS)",
                "Machine learning models: Random Forest for bearing failure prediction, LSTM neural network for tool wear prediction, Isolation Forest for anomaly detection",
                "Real-time dashboards (Grafana)",
                "Mobile app for maintenance technicians (Flutter)"
              ]
            },
            {
              title: "Integration",
              items: [
                "SAP PM (Plant Maintenance) integration for automatic work order generation",
                "Notification system (email, SMS, push notifications)",
                "Parts inventory system integration (automatic parts ordering)"
              ]
            },
            {
              title: "Implementation Timeline",
              items: [
                "12 weeks",
                "Weeks 1-2: Assessment, sensor selection, network design",
                "Weeks 3-4: Pilot installation (20 machines)",
                "Weeks 5-8: Full deployment (remaining 180 machines)",
                "Weeks 9-12: Model training, validation, optimization"
              ]
            }
          ]
        },
        results: {
          sections: [
            {
              title: "Downtime Reduction",
              items: [
                "Unplanned downtime: 68% reduction (5 hours/week → 1.6 hours/week)",
                "Mean Time Between Failures (MTBF): 120% improvement",
                "Mean Time To Repair (MTTR): 40% reduction (faster diagnosis)"
              ]
            },
            {
              title: "Financial Impact",
              items: [
                "Annual savings: $5.4M",
                "Avoided downtime: $4.2M",
                "Reduced emergency repairs: $800K",
                "Optimized parts inventory: $400K",
                "Investment: $950K (hardware, software, implementation)",
                "ROI: 8-month payback, 568% first-year ROI"
              ]
            },
            {
              title: "Operational Improvements",
              items: [
                "Predictive accuracy: 87% (2-week advance warning)",
                "Emergency repairs reduced: 75%",
                "Spare parts inventory optimized: 30% reduction (ordered proactively vs. stocked)",
                "Maintenance productivity: 35% improvement (planned work vs. firefighting)",
                "OEE improvement: 12% (less downtime, better availability)"
              ]
            },
            {
              title: "Prevented Catastrophic Failures",
              items: [
                "Spindle failure predicted and prevented ($200K replacement cost avoided)",
                "Gearbox failure detected early ($150K repair avoided)",
                "Motor failure prevented ($80K avoided)"
              ]
            }
          ]
        }
      },
      {
        title: "Case Study 2: Electronics Manufacturer - AI-Powered Quality Inspection",
        icon: Smartphone,
        client: "Client: Consumer electronics manufacturer producing smartphones, tablets, laptops. 5 million units annually, $2B revenue",
        challenge: {
          items: [
            "Manual visual inspection by 200 human inspectors",
            "Inspection accuracy: 85% (15% defects escape to customers)",
            "Inspection bottleneck limiting production throughput",
            "Inconsistent quality due to operator fatigue, training variations",
            "Customer return rate: 4.2% (industry average: 2%)",
            "Annual cost of poor quality: $18M (returns, warranty, reputation damage)"
          ]
        },
        solution: {
          sections: [
            {
              title: "Computer Vision System",
              items: [
                "120 inspection stations across 6 production lines",
                "High-resolution cameras (20 megapixel, color)",
                "Structured LED lighting (custom designed per product)",
                "Edge inference on NVIDIA Jetson AGX Xavier",
                "Custom deep learning model (ResNet-50 architecture, modified)"
              ]
            },
            {
              title: "Defect Categories Detected (12 types)",
              items: [
                "Solder defects (insufficient, excessive, bridging, voids)",
                "Component placement (missing, offset, rotated, wrong component)",
                "PCB defects (scratches, contamination, discoloration)",
                "Screen defects (dead pixels, cracks, dirt)",
                "Cosmetic defects (dents, scratches on housing)",
                "Label defects (missing, misaligned, incorrect)"
              ]
            },
            {
              title: "Model Training",
              items: [
                "Training dataset: 500,000 labeled images",
                "400,000 good units (various lighting, angles, product variants)",
                "100,000 defective units (all defect types)",
                "Data augmentation: rotation, brightness, contrast (expanded dataset to 2M images)",
                "Training infrastructure: AWS SageMaker with 8× NVIDIA V100 GPUs",
                "Training time: 72 hours",
                "Model optimization: TensorRT for 10× faster inference"
              ]
            },
            {
              title: "Integration",
              items: [
                "MES integration (receive serial numbers, report inspection results)",
                "Automatic reject sorting (pneumatic pusher diverts defects)",
                "Database: PostgreSQL (store images, results, traceability)",
                "Image archive: AWS S3 (all images retained 2 years for analysis)"
              ]
            },
            {
              title: "Implementation Timeline",
              items: [
                "16 weeks",
                "Weeks 1-4: Application study, proof-of-concept, training data collection",
                "Weeks 5-8: Model development and training",
                "Weeks 9-12: Pilot installation (2 lines, 20 stations)",
                "Weeks 13-16: Full deployment (4 additional lines, 100 stations)"
              ]
            }
          ]
        },
        results: {
          sections: [
            {
              title: "Quality Improvements",
              items: [
                "Defect detection accuracy: 99.2% (vs. 85% manual)",
                "False positive rate: 0.8% (flagged as defect incorrectly)",
                "False negative rate: 0.8% (defects missed)",
                "Customer defect escapes: 4.2% → 0.3% (93% reduction)",
                "Customer return rate: Reduced to 0.9% (industry-leading)"
              ]
            },
            {
              title: "Operational Improvements",
              items: [
                "Inspection speed: 400% faster (100 ms/unit vs. 8 seconds manual)",
                "Throughput increase: 35% (removed bottleneck)",
                "24/7 operation (no shift changes, fatigue, or breaks)"
              ]
            },
            {
              title: "Financial Impact",
              items: [
                "Labor redeployed: 180 inspectors (90%) redeployed to value-add roles",
                "Annual labor savings: $7.2M",
                "Quality cost reduction: $13.5M (fewer returns, warranty claims, repairs)",
                "Total annual savings: $20.7M",
                "Investment: $5M (hardware, software, implementation)",
                "ROI: 7-month payback, 414% first-year ROI"
              ]
            },
            {
              title: "Additional Benefits",
              items: [
                "Complete traceability (every unit image archived with pass/fail)",
                "Data-driven improvements (defect trend analysis identified supplier issues)",
                "Customer confidence (demonstrated quality commitment)",
                "Reduced insurance premiums (lower claims history)"
              ]
            }
          ]
        }
      },
      {
        title: "Case Study 3: Food & Beverage - OEE Improvement & Production Optimization",
        icon: Activity,
        client: "Client: Beverage manufacturer producing soft drinks, juices, energy drinks. 12 high-speed production lines, 300M liters annually, $300M revenue",
        challenge: {
          items: [
            "Overall Equipment Effectiveness (OEE) averaging 62% (industry target: 85%)",
            "No real-time production visibility (management sees data next day)",
            "Manual downtime tracking (incomplete, inaccurate, delayed)",
            "Unclear root causes of production losses",
            "Reactive problem-solving (after losses already occurred)",
            "Difficulty prioritizing improvement initiatives"
          ]
        },
        solution: {
          sections: [
            {
              title: "FP Analyzer Platform",
              items: [
                "PLC integration on all 12 production lines (direct data collection)",
                "Automated OEE calculation (availability, performance, quality)",
                "Real-time dashboards (line, plant, corporate levels)",
                "Downtime categorization (structured taxonomy: mechanical, electrical, quality, material, planned)",
                "Quality integration (reject counting from inspection systems)",
                "Mobile app for operators and managers (Flutter iOS/Android)"
              ]
            },
            {
              title: "Data Collection",
              items: [
                "Production counts (from PLCs every second)",
                "Downtime events (auto-detected: production stopped >1 minute)",
                "Changeover tracking (product, bottle size changes)",
                "Quality rejects (vision inspection system integration)",
                "Speed reduction (actual vs. ideal line speed)",
                "Operator input (downtime reason confirmation via touchscreen)"
              ]
            },
            {
              title: "Dashboards & Analytics",
              items: [
                "Real-time line status (running/down/changeover color-coded)",
                "OEE trending (hourly, shift, daily, weekly)",
                "Downtime Pareto charts (top losses highlighted)",
                "Production vs. target (shift goals, daily targets)",
                "Speed losses (running slower than design speed)",
                "Quality trend analysis (reject rates by product, line)",
                "Benchmark comparisons (line-to-line, shift-to-shift)"
              ]
            },
            {
              title: "Implementation Timeline",
              items: [
                "10 weeks",
                "Weeks 1-2: Kickoff, PLC documentation review, dashboard design",
                "Weeks 3-5: PLC programming, integration development",
                "Weeks 6-7: Dashboard development, testing",
                "Weeks 8-9: User training, soft launch (limited users)",
                "Week 10: Full rollout, go-live celebration"
              ]
            }
          ]
        },
        results: {
          sections: [
            {
              title: "OEE Improvement",
              items: [
                "Baseline OEE: 62% average",
                "After 12 months: 78% average (26% relative improvement)",
                "Best-in-class lines achieving: 85% (world-class target)"
              ]
            },
            {
              title: "OEE Component Improvements",
              items: [
                "Availability: 85% → 92% (downtime reduction)",
                "Performance: 82% → 89% (speed optimization, reduced micro-stops)",
                "Quality: 89% → 95% (fewer rejects, better process control)"
              ]
            },
            {
              title: "Downtime Reduction",
              items: [
                "Total downtime reduced: 45%",
                "Top 3 downtime causes identified and addressed: Mechanical failures → predictive maintenance implemented, Quality holds → process improvements, SPC implementation, Material delays → supplier collaboration, buffer inventory"
              ]
            },
            {
              title: "Production Increase",
              items: [
                "15% more output (same assets, labor, shifts)",
                "Equivalent to adding 2 production lines (avoided $15M capital investment)",
                "Annual production: 300M → 345M liters"
              ]
            },
            {
              title: "Financial Impact",
              items: [
                "Increased production value: $4.2M annually (at current pricing)",
                "Reduced waste: $800K (better quality, fewer rejects)",
                "Total benefit: $5M annually",
                "Investment: $450K (software, implementation, training)",
                "ROI: 11-month payback, 1,111% lifetime ROI (10-year platform life)"
              ]
            },
            {
              title: "Cultural Transformation",
              items: [
                "Data-driven decision making (vs. gut feel, opinions)",
                "Accountability and ownership (performance visible to all)",
                "Continuous improvement culture (daily improvement huddles)",
                "Cross-shift learning (best practices shared)",
                "Operator empowerment (real-time feedback, immediate impact)"
              ]
            }
          ]
        }
      }
    ]
  }
};