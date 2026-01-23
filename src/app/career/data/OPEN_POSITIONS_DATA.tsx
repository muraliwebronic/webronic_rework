export const OPEN_POSITIONS_DATA = {
  header: {
    badge: "Current Opportunities",
    title: "Join Our Growing Team",
    description: "We’re actively hiring across multiple roles and experience levels. All positions are based in Chennai, Madurai, or Salem with hybrid work options."
  },
  categories: [
    "All",
    "Software Development",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Project Management",
    "IoT & Hardware",
    "Quality Assurance",
    "UI/UX Design",
    "Freshers & Interns"
  ],
  jobs: [
    {
      id: "soft-1",
      category: "Software Development",
      title: "Full Stack Developer (Node.js + React)",
      location: "Chennai, Hybrid",
      experience: "2-5 years",
      skills: ["Node.js", "React", "MongoDB/PostgreSQL", "AWS/Azure"],
      description: "Build scalable web applications for enterprise clients. Collaborate with UX designers and product managers to deliver high-quality software.",
      details: {
        whatYouWillDo: [
          "Build scalable web applications for enterprise clients",
          "Design and implement RESTful APIs",
          "Collaborate with UX designers and product managers",
          "Participate in code reviews and architectural decisions",
          "Mentor junior developers"
        ],
        niceToHave: ["TypeScript", "GraphQL", "Docker", "Kubernetes", "CI/CD"],
        projects: "E-commerce platforms, SaaS applications, customer portals"
      }
    },
    {
      id: "soft-2",
      category: "Software Development",
      title: "Mobile Developer (Flutter / React Native)",
      location: "Chennai/Madurai, Hybrid",
      experience: "2-4 years",
      skills: ["Flutter/React Native", "Dart/JS", "REST APIs", "Firebase"],
      description: "Develop cross-platform mobile applications with offline capabilities and optimized performance.",
      details: {
        whatYouWillDo: [
          "Develop cross-platform mobile applications",
          "Integrate with backend APIs and cloud services",
          "Implement push notifications, offline capabilities",
          "Optimize app performance and user experience",
          "Publish apps to App Store and Play Store"
        ],
        niceToHave: ["Native iOS (Swift) or Android (Kotlin)", "CI/CD for mobile", "Store publishing"],
        projects: "StoreTech customer app, Tanlux booking app, enterprise mobile solutions"
      }
    },
    {
      id: "soft-3",
      category: "Software Development",
      title: "Backend Developer (Python / Django)",
      location: "Chennai, Hybrid",
      experience: "3-6 years",
      skills: ["Python", "Django/FastAPI", "PostgreSQL", "Redis", "Celery"],
      description: "Design and develop high-performance backend systems and data processing pipelines.",
      details: {
        whatYouWillDo: [
          "Design and develop high-performance backend systems",
          "Build data processing pipelines",
          "Integrate ML models into production applications",
          "Optimize database queries and API performance",
          "Implement caching and background job processing"
        ],
        niceToHave: ["ML libraries", "AWS (Lambda, RDS)", "Docker", "Microservices"],
        projects: "AI/ML platforms, data analytics systems, automation tools"
      }
    },
    {
      id: "ai-1",
      category: "AI & Machine Learning",
      title: "Machine Learning Engineer",
      location: "Chennai, Hybrid",
      experience: "3-7 years",
      salary: "₹12-25 LPA",
      skills: ["Python", "TensorFlow/PyTorch", "ML Algorithms", "Deep Learning"],
      description: "Develop ML models for predictive analytics, computer vision, and NLP. Deploy models to production.",
      details: {
        whatYouWillDo: [
          "Develop ML models for predictive analytics, computer vision, NLP",
          "Train and optimize deep learning models",
          "Deploy models to production (REST APIs, real-time inference)",
          "Implement MLOps pipelines (training, versioning, monitoring)",
          "Collaborate with data engineers and domain experts"
        ],
        niceToHave: ["Computer vision (OpenCV, YOLO)", "NLP (Transformers)", "MLOps (MLflow)", "Cloud ML"],
        projects: "Manufacturing quality inspection, predictive maintenance, demand forecasting"
      }
    },
    {
      id: "ai-2",
      category: "AI & Machine Learning",
      title: "Data Scientist",
      location: "Chennai/Salem, Hybrid",
      experience: "2-5 years",
      skills: ["Python/R", "SQL", "Statistics", "Tableau/Power BI", "ML Modeling"],
      description: "Analyze complex datasets to extract business insights and build statistical models.",
      details: {
        whatYouWillDo: [
          "Analyze complex datasets to extract business insights",
          "Build statistical models and ML solutions",
          "Create dashboards and visualizations for stakeholders",
          "Conduct A/B testing and experimentation",
          "Present findings to non-technical audiences"
        ],
        niceToHave: ["Big data (Spark, Hadoop)", "Cloud data platforms", "Causal inference", "Time-series forecasting"],
        projects: "Business intelligence for retail, supply chain optimization, customer analytics"
      }
    },
    {
      id: "cloud-1",
      category: "Cloud & DevOps",
      title: "DevOps Engineer",
      location: "Chennai, Hybrid",
      experience: "3-6 years",
      skills: ["Linux", "Docker", "Kubernetes", "CI/CD", "AWS/Azure/GCP"],
      description: "Design and maintain CI/CD pipelines, manage Kubernetes clusters, and optimize cloud infrastructure.",
      details: {
        whatYouWillDo: [
          "Design and maintain CI/CD pipelines",
          "Manage Kubernetes clusters (EKS, AKS, GKE)",
          "Infrastructure as Code (Terraform, Ansible)",
          "Implement monitoring, logging, alerting",
          "Optimize cloud costs and performance"
        ],
        niceToHave: ["Service mesh (Istio)", "GitOps (ArgoCD)", "DevSecOps", "Multi-cloud"],
        projects: "Microservices platforms, auto-scaling infrastructure, disaster recovery setups"
      }
    },
    {
      id: "cloud-2",
      category: "Cloud & DevOps",
      title: "Cloud Architect",
      location: "Chennai, Hybrid",
      experience: "7-12 years",
      salary: "₹25-40 LPA",
      skills: ["Multi-cloud Architecture", "Microservices", "High Availability", "Security"],
      description: "Design enterprise cloud architectures and lead migration projects for Fortune 500 clients.",
      details: {
        whatYouWillDo: [
          "Design enterprise cloud architectures",
          "Lead cloud migration projects",
          "Provide technical leadership to development teams",
          "Conduct architecture reviews and audits",
          "Engage with clients as trusted technical advisor"
        ],
        certifications: "AWS Solutions Architect Professional, Azure Solutions Architect Expert, or Google Cloud Professional Architect",
        projects: "Cloud transformation for Fortune 500 clients, multi-cloud strategies"
      }
    },
    {
      id: "sec-1",
      category: "Cybersecurity",
      title: "Security Engineer",
      location: "Chennai, Hybrid",
      experience: "4-8 years",
      skills: ["Penetration Testing", "Vulnerability Assessment", "SIEM", "OWASP"],
      description: "Conduct security assessments, monitor events, and implement controls to protect enterprise assets.",
      details: {
        whatYouWillDo: [
          "Conduct security assessments and penetration tests",
          "Monitor security events and respond to incidents",
          "Implement security controls and policies",
          "Perform code reviews for security vulnerabilities",
          "Manage vulnerability management programs"
        ],
        certifications: "CEH, OSCP, CISSP, or equivalent",
        projects: "Secure cloud deployments, compliance programs, security operations center (SOC)"
      }
    },
    {
      id: "pm-1",
      category: "Project Management",
      title: "Technical Project Manager",
      location: "Chennai, Madurai",
      experience: "5-10 years",
      skills: ["Agile/Scrum", "Jira/Asana", "Stakeholder Management", "Budgeting"],
      description: "Lead end-to-end project delivery, manage cross-functional teams, and ensure client satisfaction.",
      details: {
        whatYouWillDo: [
          "Lead end-to-end project delivery (planning, execution, closure)",
          "Manage cross-functional teams (developers, designers, QA)",
          "Client communication and expectation management",
          "Risk management and mitigation",
          "Budget tracking and resource allocation"
        ],
        certifications: "PMP, Scrum Master (CSM/PSM), SAFe",
        projects: "Large enterprise software implementations, digital transformation programs"
      }
    },
    {
      id: "iot-1",
      category: "IoT & Hardware",
      title: "IoT Engineer",
      location: "Salem, Hybrid",
      experience: "3-6 years",
      skills: ["Embedded C/C++", "MQTT", "Microcontrollers", "AWS/Azure IoT"],
      description: "Design and develop IoT solutions, integrating sensors with cloud platforms and developing firmware.",
      details: {
        whatYouWillDo: [
          "Design and develop IoT solutions",
          "Integrate sensors and devices with cloud platforms",
          "Develop firmware for embedded devices",
          "Implement edge analytics and processing",
          "Troubleshoot hardware and connectivity issues"
        ],
        niceToHave: ["Industrial protocols (OPC-UA)", "Edge computing", "LoRaWAN", "Zigbee"],
        projects: "Industrial IoT (manufacturing sensors), smart building automation, asset tracking"
      }
    },
    {
      id: "qa-1",
      category: "Quality Assurance",
      title: "QA Automation Engineer",
      location: "Chennai, Hybrid",
      experience: "3-5 years",
      skills: ["Selenium/Cypress", "Java/Python/JS", "API Testing", "CI/CD Integration"],
      description: "Design automated test frameworks and write test scripts for web, mobile, and API applications.",
      details: {
        whatYouWillDo: [
          "Design and implement automated test frameworks",
          "Write test scripts for web, mobile, API",
          "Integrate tests into CI/CD pipelines",
          "Perform load and performance testing",
          "Collaborate with developers on testability"
        ],
        projects: "Enterprise application testing, mobile app testing, API test automation"
      }
    },
    {
      id: "ui-1",
      category: "UI/UX Design",
      title: "UI/UX Designer",
      location: "Chennai, Hybrid",
      experience: "2-5 years",
      skills: ["Figma", "User Research", "Prototyping", "Visual Design", "WCAG"],
      description: "Create intuitive user interfaces and conduct user research to design exceptional digital experiences.",
      details: {
        whatYouWillDo: [
          "Conduct user research and usability testing",
          "Create wireframes, prototypes, mockups",
          "Design intuitive user interfaces",
          "Collaborate with developers for implementation",
          "Maintain design systems and style guides"
        ],
        niceToHave: ["Motion design", "Design systems", "HTML/CSS basics"],
        projects: "Web applications, mobile apps, SaaS platforms, customer portals"
      }
    },
    {
      id: "intern-1",
      category: "Freshers & Interns",
      title: "Software Development Intern",
      location: "Chennai/Madurai/Salem",
      experience: "Final Year / Recent Grad",
      salary: "Stipend: ₹15k-25k/mo",
      skills: ["Programming (Java/Python/JS)", "DSA", "OOP", "SQL", "Git"],
      description: "6-month internship with potential for full-time conversion. Learn professional development practices.",
      details: {
        whatYouWillDo: [
          "Professional software development practices",
          "Work on real client projects (with mentorship)",
          "Agile methodologies & Code review process",
          "Industry-standard tools and technologies"
        ],
        conversion: "High-performing interns receive full-time offers (₹4-6 LPA starting)"
      }
    },
    {
      id: "intern-2",
      category: "Freshers & Interns",
      title: "Data Analytics Intern",
      location: "Chennai/Madurai/Salem",
      experience: "Final Year / Recent Grad",
      salary: "Stipend: ₹15k-20k/mo",
      skills: ["Python/R", "SQL", "Excel", "Data Visualization"],
      description: "6-month internship focusing on data analysis, SQL querying, and BI tools.",
      details: {
        whatYouWillDo: [
          "Data analysis and reporting",
          "SQL querying and database concepts",
          "BI tools (Tableau, Power BI)",
          "Basic ML concepts",
          "Business problem-solving with data"
        ]
      }
    }
  ]
};