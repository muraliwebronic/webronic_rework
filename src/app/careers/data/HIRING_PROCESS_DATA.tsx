import { 
  FileText, 
  Phone, 
  Code2, 
  Users, 
  HeartHandshake, 
  UserCheck, 
  Gift, 
  Rocket, 
  Clock,
  MessageSquare,
  Ghost,
  CheckCircle,Eye,
} from "lucide-react";

export const HIRING_PROCESS_DATA = {
  header: {
    badge: "Hiring Process",
    title: "Transparent, Efficient, Respectful",
    description: "We value your time and aim for a smooth, efficient hiring process. Here’s what to expect:"
  },
  totalTimeline: "2-3 weeks from application to offer",
  steps: [
    {
      step: "Step 1",
      title: "Application Review",
      duration: "1-3 days",
      icon: FileText,
      description: "Submit resume/CV via our careers portal",
      details: [
        "Our talent team reviews all applications",
        "Relevant applications move forward within 3 business days",
        "Everyone receives a response (yes or no)"
      ]
    },
    {
      step: "Step 2",
      title: "Initial Screening",
      duration: "30 minutes",
      icon: Phone,
      description: "Phone or video call with HR/Recruiter to discuss your background, interests, and salary expectations",
      details: [
        "Overview of role and company",
        "Answer your initial questions",
        "Timeline: Scheduled within 5 days of application approval"
      ]
    },
    {
      step: "Step 3",
      title: "Technical Assessment",
      duration: "1-2 hours",
      icon: Code2,
      description: "Practical evaluation of skills relevant to the role",
      subSections: [
        {
          heading: "For Engineering Roles:",
          items: [
            "Coding assessment (HackerRank, CodeSignal, or take-home)",
            "Practical problem-solving (real-world scenarios)",
            "Focus on approach, code quality, communication",
            "Note: Not whiteboard algorithm puzzles"
          ]
        },
        {
          heading: "For Other Roles:",
          items: [
            "Case study or practical assignment relevant to role",
            "Design challenge (for designers)",
            "Strategy presentation (for PM/architect roles)"
          ]
        }
      ]
    },
    {
      step: "Step 4",
      title: "Technical Interview",
      duration: "1-2 rounds, 1 hour each",
      icon: Users,
      description: "Video call with senior engineers/team leads to deep-dive into technical skills",
      details: [
        "Discuss past projects and experiences",
        "Pair programming or system design (for senior roles)",
        "Evaluation: technical depth, problem-solving, collaboration"
      ]
    },
    {
      step: "Step 5",
      title: "Cultural Fit Interview",
      duration: "45 minutes",
      icon: HeartHandshake,
      description: "Meet with hiring manager or department head to assess alignment with company values",
      details: [
        "Discuss career goals and aspirations",
        "Your questions about team, projects, culture",
        "Evaluation: teamwork, ownership, learning mindset"
      ]
    },
    {
      step: "Step 6",
      title: "Final Discussion",
      duration: "30 minutes (Optional)",
      icon: UserCheck,
      description: "Final alignment meeting",
      details: [
        "For senior/leadership roles: meet with VP/CTO",
        "For all roles: opportunity to meet potential teammates",
        "Ask any remaining questions"
      ]
    },
    {
      step: "Step 7",
      title: "Offer",
      duration: "1-2 days after final interview",
      icon: Gift,
      description: "We extend a formal offer to join the team",
      details: [
        "Verbal offer call (salary, benefits discussion)",
        "Written offer letter (24-48 hours)",
        "Negotiation welcome (we’re reasonable and fair)",
        "Decision timeline: 1 week (extendable if needed)"
      ]
    },
    {
      step: "Step 8",
      title: "Onboarding",
      duration: "Start Date",
      icon: Rocket,
      description: "Welcome to Webronic!",
      details: [
        "Background verification (standard process)",
        "Pre-joining paperwork (digital, easy)",
        "Welcome kit sent to your address",
        "First day: orientation, team introduction, laptop setup"
      ]
    }
  ],
  commitments: [
    {
      title: "Respectful Communication",
      desc: "Timely responses, clear expectations",
      icon: MessageSquare
    },
    {
      title: "No Ghosting",
      desc: "Everyone gets closure",
      icon: Ghost
    },
    {
      title: "Feedback Provided",
      desc: "If requested, we share interview feedback",
      icon: CheckCircle
    },
    {
      title: "Transparent Process",
      desc: "No surprises, no hidden steps",
      icon: Eye // Importing Lucide Eye directly in component or mapping here
    }
  ]
};