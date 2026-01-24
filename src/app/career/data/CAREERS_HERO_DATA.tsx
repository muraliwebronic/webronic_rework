import { 
  Users, 
  Globe, 
  Award, 
  Briefcase, 
  Star 
} from "lucide-react";

export const CAREERS_HERO_DATA = {
  header: {
    badge: "Build Your Career",
    h1: "Shape the Future of Technology",
    subHeadline: "Join a team of 200+ innovators delivering cutting-edge solutions to 500+ clients across 50+ countries. Work on real-world problems using AI, Cloud, IoT, and emerging technologies"
  },
  ctas: {
    primary: {
      label: "View Open Positions",
      href: "/careers/openings"
    },
    secondary: {
      label: "Submit General Application",
      href: "/careers/general-application"
    }
  },
  stats: [
    { 
      value: "200+", 
      label: "Team Members", 
      icon: Users 
    },
    { 
      value: "15+", 
      label: "Years Innovation", 
      icon: Briefcase 
    },
    { 
      value: "50+", 
      label: "Countries Served", 
      icon: Globe 
    },
    { 
      value: "4.8/5", 
      label: "Glassdoor Rating", 
      icon: Star 
    }
  ]
};