import { 
  Heart, 
  Rocket, 
  Award, 
  Users, 
  ShieldCheck, 
  Zap, 
  Scale, 
  MessageCircle, 
  Eye, 
  Globe2, 
  Smile, 
  Monitor, 
  Coffee 
} from "lucide-react";

export const CULTURE_VALUES_DATA = {
  header: {
    badge: "Our Culture & Values",
    title: "Built on Trust, Innovation,",
    titleHighlight: "and Excellence",
    description: "We don't just deliver projects. We deliver outcomes. Our culture is the foundation of every solution we build"
  },
  coreValues: [
    {
      title: "1. Customer Obsession",
      description: "We measure our success by our clients' success. A 30% cost reduction for a client is our achievement. A system running at 99.99% uptime makes us proud",
      icon: Heart,
      color: "blue"
    },
    {
      title: "2. Innovation Without Boundaries",
      description: "We question the status quo. 'That’s how it’s always been done' isn’t an acceptable answer. We experiment, fail fast, learn, and iterate",
      icon: Rocket,
      color: "green"
    },
    {
      title: "3. Excellence as Standard",
      description: "Good enough isn't good enough. We write clean, maintainable code. We document thoroughly. We test rigorously. Quality isn't a phase. It's a mindset",
      icon: Award,
      color: "blue"
    },
    {
      title: "4. Collaboration Over Competition",
      description: "We succeed together. Knowledge hoarding is discouraged. Helping teammates is celebrated. Code reviews are learning opportunities, not fault-finding sessions",
      icon: Users,
      color: "green"
    },
    {
      title: "5. Ownership & Accountability",
      description: "Take ownership of your work. If you write it, you own it. If it breaks, you fix it. If it succeeds, you celebrate it. We trust our team to make decisions",
      icon: ShieldCheck,
      color: "blue"
    },
    {
      title: "6. Continuous Learning",
      description: "Technology evolves rapidly. Yesterday’s expert becomes today’s student. We embrace learning as a career-long commitment. Questions are encouraged",
      icon: Zap,
      color: "green"
    },
    {
      title: "7. Integrity Above All",
      description: "We do the right thing even when no one’s watching. We’re honest with clients about timelines and capabilities. We respect confidentiality. We honor commitments",
      icon: Scale,
      color: "blue",
      fullWidth: true // Special flag to span across grid
    }
  ],
  environment: {
    title: "Our Work Environment",
    items: [
      {
        title: "Open Communication",
        desc: "Flat hierarchy, accessible leadership, no bureaucracy",
        icon: MessageCircle
      },
      {
        title: "Transparent Decision-Making",
        desc: "Understand the 'why' behind decisions",
        icon: Eye
      },
      {
        title: "Diverse & Inclusive",
        desc: "30% women in tech roles, team members from 8+ states, all backgrounds welcome",
        icon: Globe2
      },
      {
        title: "Fun & Engaging",
        desc: "Team outings, birthday celebrations, Diwali parties, sports tournaments, game rooms",
        icon: Smile
      },
      {
        title: "Modern Workspace",
        desc: "Air-conditioned offices, ergonomic furniture, high-speed internet, dual monitors, latest development machines",
        icon: Monitor
      },
      {
        title: "Healthy Environment",
        desc: "Subsidized cafeteria (healthy meals), recreational areas, fitness partnerships",
        icon: Coffee
      }
    ]
  }
};