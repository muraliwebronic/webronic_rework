import { 
  Tv, 
  Film, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  DollarSign, 
  Smartphone, 
  Server, 
  Database, 
  Video 
} from "lucide-react";

export const MEDIA_CASES_PRICING_DATA = {
  caseStudies: {
    title: "Media Case Studies",
    cases: [
      {
        title: "Case Study 1: Regional OTT Platform Launch",
        icon: Tv,
        client: "Regional language content producer, launching streaming platform",
        challenge: {
          items: [
            "No existing streaming infrastructure",
            "500-hour content library to digitize",
            "Limited budget ($500K)",
            "6-month launch deadline",
            "Target: 1M subscribers in Year 1"
          ]
        },
        solution: {
          items: [
            "AWS-based streaming infrastructure",
            "Multi-bitrate transcoding pipeline",
            "React web app, React Native mobile apps",
            "Smart TV apps (Android TV, Fire TV)",
            "Freemium model (ads + premium)",
            "AI-powered recommendations",
            "Social sharing for virality"
          ]
        },
        technology: {
          items: [
            "AWS MediaConvert for transcoding",
            "CloudFront CDN",
            "Node.js backend, MongoDB",
            "Stripe payment integration",
            "Google Ad Manager for AVOD"
          ]
        },
        timeline: "5 months development + 1 month testing",
        results: {
          items: [
            "Launch on time and budget",
            "800K subscribers in Year 1 (80% of target)",
            "40% conversion from free to paid",
            "99.8% uptime",
            "2.5 hours average daily viewing",
            "12% monthly churn rate"
          ]
        }
      },
      {
        title: "Case Study 2: AI-Powered Post-Production",
        icon: Film,
        client: "Documentary production house, 50 hours footage per project",
        challenge: {
          items: [
            "Manual editing taking 6-8 weeks",
            "High post-production costs ($200K per documentary)",
            "Tight broadcast deadlines",
            "Small editing team (3 editors)"
          ]
        },
        solution: {
          items: [
            "AI-powered scene detection and cataloging",
            "Automated transcription and logging",
            "Speech-to-text search (find specific quotes instantly)",
            "Highlight reel generation",
            "Auto-captioning (95% accuracy)",
            "Proxy generation for fast editing"
          ]
        },
        technology: {
          items: [
            "Custom Python AI pipeline",
            "Google Speech-to-Text API",
            "OpenCV for scene detection",
            "AWS for processing",
            "Adobe Premiere Pro integration"
          ]
        },
        results: {
          items: [
            "Editing time: 6 weeks → 2 weeks (67% reduction)",
            "Cost per documentary: $200K → $120K (40% reduction)",
            "Editor productivity: 200% increase",
            "Faster turnaround enables 2× more projects/year",
            "ROI: 8 months"
          ]
        }
      }
    ]
  },
  pricing: {
    title: "Media Solution Pricing",
    categories: [
      {
        title: "OTT Platform Development",
        icon: Smartphone,
        items: [
          { label: "MVP (web + mobile)", price: "$150,000 - $400,000" },
          { label: "Full platform (web, mobile, TV apps)", price: "$500,000 - $1.5M" },
          { label: "Enterprise platform", price: "$2M - $5M+" }
        ]
      },
      {
        title: "Streaming Infrastructure",
        icon: Server,
        items: [
          { label: "Monthly costs", price: "$5,000 - $100,000+", sub: "(scales with viewers)" },
          { label: "CDN bandwidth", price: "$0.02 - $0.15 per GB" },
          { label: "Transcoding", price: "$0.015 - $0.03 per minute" }
        ]
      },
      {
        title: "Content Management System",
        icon: Database,
        items: [
          { label: "DAM implementation", price: "$100,000 - $500,000" },
          { label: "Annual licensing", price: "$25,000 - $150,000" }
        ]
      },
      {
        title: "Live Streaming Platform",
        icon: Video,
        items: [
          { label: "Basic setup", price: "$50,000 - $150,000" },
          { label: "Professional platform", price: "$200,000 - $750,000" }
        ]
      },
      {
        title: "AI Post-Production Tools",
        icon: Film,
        items: [
          { label: "Custom pipeline", price: "$100,000 - $400,000" },
          { label: "Per-project processing", price: "$2,000 - $20,000" }
        ]
      }
    ]
  }
};