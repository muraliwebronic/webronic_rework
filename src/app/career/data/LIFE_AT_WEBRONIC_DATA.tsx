import { 
  Code2, 
  Brain, 
  Cloud, 
  Quote, 
  Clock, 
  Smile, 
  Zap 
} from "lucide-react";

export const LIFE_AT_WEBRONIC_DATA = {
  header: {
    badge: "Life at Webronic",
    title: "A Day in the Life",
    description: "Don't just take our word for it. Hear directly from the people building the future of technology"
  },
  stories: [
    {
      name: "Rajesh",
      role: "Senior Full Stack Developer",
      tenure: "3 years at Webronic",
      icon: Code2,
      color: "blue",
      content: "I start around 10 AM (flexible hours are great). Morning standup at 10:30 with my team for a quick sync on what everyone's working on. Then I dive into coding, currently building a new feature for our e-commerce platform. Our code review culture is fantastic; I learn something new from every review. Lunch at our subsidized cafeteria (₹40 for a full meal). Sometimes we play table tennis after lunch, which is a great way to recharge. Afternoons are for focused work or pair programming sessions. We have 'no meeting Wednesdays' which I love for deep work. Thursdays we have tech talks. Last week someone presented on GraphQL, super interesting. I usually wrap up by 6:30 PM. No pressure to stay late unless there's a genuine deadline (rare). Fridays we sometimes do team outings. We recently went to an escape room",
      love: "Working on real problems (our code impacts actual businesses), learning constantly (I’ve picked up Kubernetes and AWS here), and the people (smart, collaborative, no egos)"
    },
    {
      name: "Priya",
      role: "Machine Learning Engineer",
      tenure: "1.5 years at Webronic",
      icon: Brain,
      color: "green",
      content: "I came from a research background and was nervous about industry. Webronic made the transition smooth. I work on manufacturing quality inspection using computer vision models to detect defects. Seeing my model deployed in a factory, running 24/7, inspecting thousands of parts... that's incredibly satisfying. The team is supportive. When I struggled with production deployment, senior engineers patiently helped me learn Docker, Kubernetes, CI/CD. There’s zero judgment for asking questions. I'm currently pursuing my AWS ML certification, and the company is sponsoring it. The 20% innovation time is real; I'm experimenting with transformer models for a side project",
      love: "Work-life balance is solid. I work from home 3 days a week. No weekend work. I have time for my hobbies (I dance on weekends)"
    },
    {
      name: "Arun",
      role: "DevOps Engineer",
      tenure: "4 years at Webronic",
      icon: Cloud,
      color: "blue",
      content: "Started as a junior developer, transitioned to DevOps after 2 years. Webronic supported the switch by giving me training time, assigning a mentor, and letting me gradually transition. Now I manage our Kubernetes infrastructure and CI/CD pipelines. I recently migrated a major client to AWS, which was challenging but rewarding. The client saved 40% on infrastructure costs. On-call rotation is fair (1 week every 2 months), and we’re compensated for it. Incidents are rare because we invest in monitoring and automation. Company culture is great. There's no blame game when things break. Post-mortems focus on learning and improving systems, not punishing people",
      love: "I’ve grown a lot here. Webronic invested in my certifications (AWS DevOps Professional, CKA). I feel valued"
    }
  ],
  testimonials: [
    {
      text: "Webronic gave me the opportunity to work on cutting-edge AI projects right out of college. The mentorship and learning culture here are exceptional",
      author: "Divya S",
      role: "ML Engineer (2 years)",
      icon: Zap
    },
    {
      text: "The work-life balance is real. I’ve worked at startups with 12-hour days. Here, I deliver quality work in 8-9 hours and have time for my family",
      author: "Karthik R",
      role: "Backend Developer (3 years)",
      icon: Clock
    },
    {
      text: "Transparent management, clear career paths, and genuinely smart colleagues. This is the best place I’ve worked",
      author: "Sneha M",
      role: "Project Manager (5 years)",
      icon: Smile
    }
  ]
};