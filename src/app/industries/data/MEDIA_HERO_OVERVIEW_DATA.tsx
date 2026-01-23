import { 
  Tv, 
  Users, 
  Server, 
  TrendingDown, 
  Layers, 
  Globe, 
  DollarSign, 
  Clapperboard, 
  ShieldAlert, 
  UserCheck, 
  PlayCircle,
  Zap,
  CheckCircle2
} from "lucide-react";

export const MEDIA_HERO_OVERVIEW_DATA = {
  hero: {
    h1: "Media & Entertainment Technology Solutions",
    description: "Digital content platforms, streaming infrastructure, content management systems, and AI-powered production tools transforming media creation, distribution, and monetization.",
    stats: [
      {
        value: "50+",
        label: "Media platform implementations",
        icon: Tv
      },
      {
        value: "10M+",
        label: "Concurrent streaming users supported",
        icon: Users
      },
      {
        value: "99.99%",
        label: "CDN uptime",
        icon: Server
      },
      {
        value: "40%",
        label: "Content production cost reduction through AI",
        icon: TrendingDown
      }
    ]
  },
  overview: {
    title: "Industry Overview",
    content: "The media and entertainment industry faces unprecedented disruption. Traditional broadcast models give way to streaming, linear viewing shifts to on-demand, and content consumption fragments across devices. Meanwhile, production costs rise, advertising models evolve, and audiences demand personalized, interactive experiences.",
    challenges: {
      title: "Critical Media & Entertainment Challenges:",
      items: [
        {
          title: "Content Overload",
          description: "Thousands of hours uploaded daily, discovery becomes critical for engagement and monetization.",
          icon: Layers
        },
        {
          title: "Distribution Complexity",
          description: "Multi-platform delivery (web, mobile, smart TV, gaming consoles, VR), varying codecs, adaptive bitrate requirements, global CDN management.",
          icon: Globe
        },
        {
          title: "Monetization Pressure",
          description: "Declining traditional revenue (cable subscriptions, theatrical), evolving models (SVOD, AVOD, TVOD, hybrid), ad-blocking, subscription fatigue.",
          icon: DollarSign
        },
        {
          title: "Production Costs",
          description: "Rising content production budgets (premium series cost $10M-$20M per episode), competition for talent, location constraints, post-production complexity.",
          icon: Clapperboard
        },
        {
          title: "Piracy",
          description: "Content theft, illegal streaming sites, screener leaks costing billions in lost revenue.",
          icon: ShieldAlert
        },
        {
          title: "Personalization Expectations",
          description: "Netflix-level recommendations expected, algorithmic content curation, individualized advertising, interactive storytelling.",
          icon: UserCheck
        }
      ]
    },
    expertise: {
      title: "Our Media & Entertainment Expertise:",
      description: "We’ve delivered 50+ media technology solutions for streaming platforms, production studios, broadcasters, music labels, gaming companies, and publishing houses.",
      resultsTitle: "Our solutions enable:",
      results: [
        { text: "Streaming platforms serving 10M+ concurrent users", icon: PlayCircle },
        { text: "99.99% CDN uptime globally", icon: Globe },
        { text: "40% production cost reduction through AI automation", icon: Zap },
        { text: "85% recommendation accuracy driving 60% higher engagement", icon: UserCheck },
        { text: "50% faster content delivery pipelines", icon: CheckCircle2 }
      ]
    }
  }
};