import { 
  Wifi, 
  UploadCloud, 
  Globe, 
  Smartphone, 
  MonitorPlay, 
  Layers, 
  CreditCard, 
  Megaphone, 
  ShoppingBag, 
  Sparkles, 
  BrainCircuit, 
  BarChart3, 
  Search, 
  Server, 
  Video, 
  Code, 
  Cloud,
  PlayCircle
} from "lucide-react";

export const MEDIA_STREAMING_DATA = {
  header: {
    section: "Core Media Solutions",
    title: "1. Streaming Platform Development",
    subTitle: "OTT (Over-The-Top) Video Platform",
    description: "Build Netflix-style streaming services with comprehensive features."
  },
  infrastructure: {
    title: "Video Streaming Infrastructure",
    steps: [
      {
        title: "Adaptive Bitrate Streaming",
        icon: Wifi,
        items: [
          "HLS (HTTP Live Streaming) - Apple standard",
          "DASH (Dynamic Adaptive Streaming over HTTP) - ISO standard",
          "Smooth Streaming (Microsoft)",
          "Multiple quality levels (360p, 480p, 720p, 1080p, 4K, 8K)",
          "Automatic quality switching based on bandwidth",
          "Smooth playback without buffering"
        ]
      },
      {
        title: "Video Processing Pipeline",
        icon: UploadCloud,
        items: [
          "Upload: Support large files (100GB+ 4K masters)",
          "Transcoding: Convert to multiple formats, resolutions, bitrates",
          "Thumbnail generation: Automatic preview images",
          "Subtitle extraction: Closed captions, multi-language",
          "DRM encryption: Widevine, FairPlay, PlayReady",
          "Storage: AWS S3, Azure Blob, Google Cloud Storage"
        ]
      },
      {
        title: "CDN (Content Delivery Network)",
        icon: Globe,
        items: [
          "Global distribution (200+ edge locations)",
          "Edge caching (videos cached near users)",
          "CloudFront, Akamai, Fastly, Cloudflare",
          "Origin shielding (protect origin servers)",
          "Real-time analytics (concurrent viewers, buffering ratio)"
        ]
      }
    ]
  },
  features: {
    title: "Platform Features",
    categories: [
      {
        title: "User Experience",
        icon: Smartphone,
        items: [
          "Web player (HTML5 video.js, JW Player, custom)",
          "Mobile apps (iOS, Android native or React Native)",
          "Smart TV apps (Android TV, Apple TV, Roku, Fire TV, Samsung Tizen, LG webOS)",
          "Offline downloads (for mobile)",
          "Chromecast, AirPlay support",
          "Continue watching across devices (sync playback position)",
          "Watchlist and favorites",
          "Parental controls (content ratings, PINs)"
        ]
      },
      {
        title: "Content Management",
        icon: Layers,
        items: [
          "Video library management (metadata, thumbnails, trailers)",
          "Series/season/episode organization",
          "Genre tagging and categorization",
          "Release scheduling (premiere dates, availability windows)",
          "Content expiration (licensing windows)",
          "Multi-language support (subtitles, audio tracks, metadata)"
        ]
      }
    ]
  },
  monetization: {
    title: "Monetization Models",
    models: [
      {
        type: "SVOD (Subscription Video On Demand)",
        icon: CreditCard,
        color: "blue",
        details: [
          "Monthly/annual subscriptions",
          "Multiple tier pricing (Basic, Standard, Premium)",
          "Free trials (7-day, 30-day)",
          "Family plans (multiple profiles)",
          "Billing integration (Stripe, Razorpay, PayPal)",
          "Churn prevention (cancel flow optimization, win-back campaigns)"
        ]
      },
      {
        type: "AVOD (Advertising Video On Demand)",
        icon: Megaphone,
        color: "green",
        details: [
          "Pre-roll, mid-roll, post-roll ads",
          "Ad server integration (Google Ad Manager, FreeWheel)",
          "VAST/VPAID standards",
          "Frequency capping (limit ads per user)",
          "Targeted advertising (demographics, interests, viewing history)",
          "Ad-free premium tier option"
        ]
      },
      {
        type: "TVOD (Transactional Video On Demand)",
        icon: ShoppingBag,
        color: "blue",
        details: [
          "Rent: 24-48 hour access",
          "Buy: Permanent access",
          "Early access (before SVOD release)",
          "Pay-per-view events (sports, concerts, premieres)"
        ]
      },
      {
        type: "Hybrid Models",
        icon: Sparkles,
        color: "green",
        details: [
          "Freemium (free tier with ads + premium subscription)",
          "Premium VOD (early access for premium subscribers)",
          "Bundling (music + video, sports + entertainment)"
        ]
      }
    ]
  },
  recommendation: {
    title: "Recommendation Engine",
    subTitle: "AI-Powered Content Discovery",
    methods: [
      {
        title: "Collaborative Filtering",
        items: [
          "User-based: Recommend what similar users watched",
          "Item-based: If you liked X, you’ll like Y",
          "Matrix factorization (SVD, ALS algorithms)"
        ]
      },
      {
        title: "Content-Based Filtering",
        items: [
          "Genre, cast, director, themes",
          "Video analysis (scenes, objects, mood)",
          "Metadata matching (tags, keywords)"
        ]
      },
      {
        title: "Deep Learning",
        items: [
          "Neural networks learning complex patterns",
          "RNN/LSTM for sequential viewing patterns",
          "Embeddings for users and content",
          "Multi-armed bandit for exploration vs exploitation"
        ]
      },
      {
        title: "Personalization",
        items: [
          "Homepage customized per user",
          "Personalized genre rows",
          "“Because you watched…” sections",
          "Search result ranking",
          "Thumbnail selection (A/B tested per user)",
          "Email recommendations"
        ]
      }
    ],
    impact: [
      "60% of viewing driven by recommendations (Netflix benchmark)",
      "25% increase in engagement",
      "15% reduction in churn (users find content they love)"
    ]
  },
  analytics: {
    title: "Analytics & Insights",
    categories: [
      {
        title: "Viewing Metrics",
        icon: MonitorPlay,
        items: [
          "Total views, unique viewers",
          "Completion rate (% watched)",
          "Engagement time",
          "Rewatch rate",
          "Popular content (trending)",
          "Geographic distribution",
          "Device breakdown (mobile, TV, web)"
        ]
      },
      {
        title: "User Behavior",
        icon: BrainCircuit,
        items: [
          "Acquisition sources (organic, paid, referral)",
          "Conversion funnel (trial → paid)",
          "Churn rate and reasons",
          "Content discovery paths",
          "Search queries",
          "Abandonment points (where users stop watching)"
        ]
      },
      {
        title: "Content Performance",
        icon: BarChart3,
        items: [
          "Views per title",
          "Retention curve (minute-by-minute viewing)",
          "Completion rate by episode",
          "Binge-watching patterns",
          "Time to first watch (after release)"
        ]
      }
    ]
  },
  techStack: {
    title: "Technology Stack",
    layers: [
      {
        layer: "Backend",
        icon: Server,
        tools: [
          "Node.js, Python (Django/Flask), Ruby on Rails",
          "Microservices architecture",
          "PostgreSQL, MongoDB databases",
          "Redis caching",
          "Elasticsearch for search",
          "Kafka for event streaming"
        ]
      },
      {
        layer: "Video",
        icon: Video,
        tools: [
          "AWS MediaConvert, AWS Elemental for transcoding",
          "Bitmovin, Zencoder",
          "FFmpeg for video processing",
          "Mux for video analytics"
        ]
      },
      {
        layer: "Frontend",
        icon: Code,
        tools: [
          "React, Vue.js, Angular",
          "React Native for mobile",
          "Native iOS (Swift), Android (Kotlin) for premium experience"
        ]
      },
      {
        layer: "Infrastructure",
        icon: Cloud,
        tools: [
          "AWS, Google Cloud, Azure",
          "Kubernetes for orchestration",
          "Docker containers",
          "Auto-scaling"
        ]
      }
    ]
  }
};