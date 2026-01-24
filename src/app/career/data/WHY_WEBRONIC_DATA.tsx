import { 
  Cpu, 
  TrendingUp, 
  Globe2, 
  Zap, 
  GitMerge, 
  HeartHandshake 
} from "lucide-react";

export const WHY_WEBRONIC_DATA = {
  header: {
    badge: "Why Webronic?",
    title: "More Than Just a Job",
    titleHighlight: "A Career Journey",
    description: "At Webronic Industries, we don't just build software. We solve real-world problems that impact millions of lives. From autonomous retail stores serving customers 24/7 in Sweden to manufacturing plants optimizing production in real-time, our solutions make a tangible difference"
  },
  features: [
    {
      id: 1,
      title: "Work on Cutting-Edge Technology",
      description: "We don't maintain legacy systems. We build the future with the latest frameworks and tools like TensorFlow, PyTorch, React, Node.js, Kubernetes, and Cloud Platforms",
      icon: Cpu,
      color: "blue", // Internal flag for UI styling
      details: [
        "AI & Machine Learning: Deep learning, computer vision, NLP",
        "Cloud-Native: Kubernetes, serverless, multi-cloud",
        "IoT & Edge: Industrial IoT, MQTT, smart sensors",
        "Blockchain & Web3: Smart contracts, DeFi",
        "Proprietary Platforms: StoreTech, FP Analyzer, Tanlux"
      ]
    },
    {
      id: 2,
      title: "Real Impact, Real Results",
      description: "Your work directly impacts businesses and people. We measure success in quantifiable outcomes like 68% downtime reduction and 99.2% quality inspection accuracy",
      icon: TrendingUp,
      color: "green",
      details: [
        "Power manufacturing plants producing 10k+ units daily",
        "Predict equipment failures saving $5M annually",
        "Mobile apps serving 100,000+ daily users",
        "IoT solutions monitoring critical infrastructure 24/7"
      ]
    },
    {
      id: 3,
      title: "Global Reach with Local Culture",
      description: "Headquartered in Chennai with offices in Madurai and Salem, and partnerships in Sweden. Work on international projects while enjoying the vibrant culture of India",
      icon: Globe2,
      color: "blue",
      details: [
        "Clients across Europe, North America, Asia, Middle East",
        "Collaborate with global teams",
        "Gain exposure to diverse international markets",
        "Offices in Chennai, Madurai, Salem (India) & Sweden"
      ]
    },
    {
      id: 4,
      title: "Innovation-Driven Environment",
      description: "We encourage experimentation and learning. We sponsor relevant tech conferences and provide financial support for AWS, Azure, and GCP certifications",
      icon: Zap,
      color: "green",
      details: [
        "20% Innovation Time: One day/week for personal projects",
        "Hackathons & Innovation Days: Quarterly events",
        "Tech Talks: Weekly internal knowledge sharing",
        "Conference Attendance & Certification Support"
      ]
    },
    {
      id: 5,
      title: "Career Growth & Development",
      description: "Clear career progression paths promoting from within. Many of our senior leaders started as developers and engineers",
      icon: GitMerge,
      color: "blue",
      details: [
        "Technical Track: Junior → Senior → Principal → Architect",
        "Management Track: Lead → Manager → Director → VP",
        "Specialist Track: Become a subject matter expert",
        "Internal promotion culture"
      ]
    },
    {
      id: 6,
      title: "Work-Life Balance",
      description: "Technology is demanding, but burnout helps no one. We offer a supportive environment where emergencies are rare",
      icon: HeartHandshake,
      color: "green",
      details: [
        "Hybrid work model (2-3 days office)",
        "24 annual leave days + 12 public holidays",
        "Generous sick leave (no questions asked)",
        "Sabbatical program after 5 years (1-month paid)"
      ]
    }
  ]
};