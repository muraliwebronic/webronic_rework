import { 
  Wallet, 
  Heart, 
  GraduationCap, 
  Clock, 
  Coffee, 
  Umbrella, 
  Smartphone,
  Plane,
  Baby,
  Dumbbell
} from "lucide-react";

export const BENEFITS_PERKS_DATA = {
  header: {
    badge: "Benefits & Perks",
    title: "Comprehensive Package",
    titleHighlight: "Supporting Your Life Goals",
    description: "We invest in our people. From financial security to physical well-being and professional growth, our benefits are designed to support you at every stage of life."
  },
  categories: [
    {
      id: "financial",
      title: "Financial Benefits",
      icon: Wallet,
      color: "blue",
      subsections: [
        {
          title: "Competitive Compensation",
          items: [
            "Industry-leading salaries benchmarked against top tech firms",
            "Annual performance bonuses (10-25% of base)",
            "Stock options for senior roles",
            "Retention & Referral bonuses (up to ₹2L)"
          ]
        },
        {
          title: "Additional Allowances",
          items: [
            "Housing/Rent & Transportation Allowance",
            "Mobile & Internet Reimbursement (₹3,000/mo)",
            "WFH setup allowance (₹50,000 one-time)"
          ]
        }
      ]
    },
    {
      id: "health",
      title: "Health & Wellness",
      icon: Heart,
      color: "green",
      subsections: [
        {
          title: "Comprehensive Insurance",
          items: [
            "Family Cover: Employee + Spouse + 2 Kids + Parents (₹10L)",
            "Dental, Vision, and Critical Illness (₹25L) coverage",
            "Mental health counseling support",
            "Annual preventive health checkups"
          ]
        },
        {
          title: "Wellness Programs",
          items: [
            "Gym reimbursement (₹2,000/mo)",
            "Weekly on-site Yoga & Meditation",
            "Ergonomic assessments & Blue-light glasses"
          ]
        }
      ]
    },
    {
      id: "growth",
      title: "Professional Development",
      icon: GraduationCap,
      color: "blue",
      subsections: [
        {
          title: "Learning & Growth",
          items: [
            "100% Sponsorship for AWS, Azure, PMP certifications",
            "Udemy/Coursera subscriptions & Tech books budget",
            "Conference attendance (2/year)",
            "Senior Engineering Mentorship program"
          ]
        },
        {
          title: "Career Advancement",
          items: [
            "Quarterly reviews with clear IDPs",
            "Priority internal job postings",
            "Leadership training programs"
          ]
        }
      ]
    },
    {
      id: "timeoff",
      title: "Time Off & Flexibility",
      icon: Clock,
      color: "green",
      subsections: [
        {
          title: "Paid Time Off",
          items: [
            "24 Annual Leave days (30 after 5 years)",
            "12 Public Holidays + 12 Sick Leave days",
            "Maternity (26w), Paternity (4w), Adoption (26w) leave",
            "Bereavement leave (7 days)"
          ]
        },
        {
          title: "Work Flexibility",
          items: [
            "Hybrid model (2-3 days office)",
            "Flexible core hours (11 AM - 4 PM)",
            "Work from anywhere (2 weeks/year)",
            "Paid Sabbatical option after 5 years"
          ]
        }
      ]
    },
    {
      id: "lifestyle",
      title: "Lifestyle & Campus",
      icon: Coffee,
      color: "blue",
      subsections: [
        {
          title: "Team & Culture",
          items: [
            "Monthly team outings & Annual 3-day offsite",
            "Festival bonuses & celebrations (Diwali, Pongal)",
            "Birthday half-day off"
          ]
        },
        {
          title: "Office Amenities",
          items: [
            "Subsidized cafeteria & Unlimited coffee/snacks",
            "Game room (PS5, Foosball) & Nap pods",
            "Shuttle service & EV charging stations"
          ]
        }
      ]
    },
    {
      id: "future",
      title: "Future & Family Support",
      icon: Umbrella,
      color: "green",
      subsections: [
        {
          title: "Family Support",
          items: [
            "Childcare allowance (₹5,000/mo)",
            "Children's scholarship program",
            "Relocation assistance for new hires"
          ]
        },
        {
          title: "Financial Planning",
          items: [
            "EPF Contributions & Gratuity",
            "National Pension Scheme (NPS) options",
            "Group life insurance (₹50 Lakh)"
          ]
        }
      ]
    }
  ]
};