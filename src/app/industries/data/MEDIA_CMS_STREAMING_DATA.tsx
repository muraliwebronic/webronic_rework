import { 
  Database, 
  Search, 
  GitBranch, 
  ShieldCheck, 
  Radio, 
  Mic2, 
  Music, 
  Globe, 
  Server, 
  Video, 
  Cpu, 
  BarChart, 
  Lock, 
  Wifi, 
  Layers,
  FileText,
  Users
} from "lucide-react";

export const MEDIA_CMS_STREAMING_DATA = {
  cms: {
    title: "3. Content Management Systems (CMS)",
    subTitle: "Digital Asset Management (DAM)",
    damFeatures: {
      title: "Media Library Management",
      description: "Organize thousands of hours of content:",
      sections: [
        {
          title: "Asset Storage",
          icon: Database,
          items: [
            "Video masters (RAW, ProRes, uncompressed)",
            "Edit-ready proxies (lower resolution for editing)",
            "Finished deliverables (broadcast, streaming, theatrical)",
            "Associated files (scripts, releases, contracts, music cues)"
          ]
        },
        {
          title: "Metadata Management",
          icon: FileText,
          items: [
            "Title, description, keywords, tags",
            "Rights information (territories, expiration dates)",
            "Technical metadata (resolution, codec, frame rate, aspect ratio)",
            "Production metadata (director, cast, crew, locations, shoot dates)",
            "Business metadata (budgets, revenue, licensing)"
          ]
        },
        {
          title: "Search & Discovery",
          icon: Search,
          items: [
            "Full-text search across metadata",
            "Facial recognition (find all content with specific person)",
            "Object recognition (find scenes with cars, beaches, etc.)",
            "Speech-to-text search (search within dialogue)",
            "Music recognition (find content with specific songs)"
          ]
        },
        {
          title: "Version Control",
          icon: GitBranch,
          items: [
            "Track edits and revisions",
            "Compare versions",
            "Approval workflows",
            "Lock files during editing"
          ]
        },
        {
          title: "Rights Management",
          icon: ShieldCheck,
          items: [
            "Licensing windows (availability periods)",
            "Geographic restrictions (territory rights)",
            "Platform rights (theatrical, broadcast, streaming, DVD)",
            "Talent contracts (usage restrictions)",
            "Music clearances"
          ]
        }
      ]
    },
    platforms: {
      title: "DAM Platforms",
      items: ["Adobe Experience Manager", "Widen Collective", "Bynder", "MediaValet", "Custom DAM development"]
    },
    integration: {
      title: "Integration",
      items: ["Adobe Creative Cloud (Premiere, After Effects)", "Avid Media Composer", "DaVinci Resolve", "Final Cut Pro"]
    }
  },
  live: {
    title: "4. Live Streaming & Broadcasting",
    infrastructure: {
      title: "Live Video Infrastructure",
      categories: [
        {
          title: "Streaming Protocols",
          icon: Wifi,
          items: [
            "RTMP ingest (from encoder to platform)",
            "WebRTC (ultra-low latency <1 second)",
            "HLS (standard latency 10-30 seconds)",
            "LL-HLS (low latency HLS 2-5 seconds)"
          ]
        },
        {
          title: "Live Encoding",
          icon: Cpu,
          items: [
            "Hardware encoders (Teradek, LiveU, Wirecast)",
            "Software encoders (OBS, vMix)",
            "Cloud encoding (AWS Elemental Live, Wowza)"
          ]
        },
        {
          title: "Features",
          icon: Layers,
          items: [
            "Multi-camera switching",
            "Graphics overlays (lower thirds, scoreboards)",
            "Instant replay",
            "Live chat moderation",
            "Viewer polls and Q&A",
            "Concurrent streaming (multi-platform: YouTube, Facebook, Twitch simultaneously)"
          ]
        }
      ]
    },
    useCases: {
      title: "Use Cases",
      cases: [
        {
          title: "Sports Broadcasting",
          items: ["Live games with instant replays", "Multi-angle viewing", "In-game betting integration", "Real-time statistics overlays"]
        },
        {
          title: "Concerts & Events",
          items: ["Virtual concerts", "Ticketed live events", "Meet-and-greet sessions", "Backstage access"]
        },
        {
          title: "News & Education",
          items: ["Live news broadcasts", "Webinars and virtual conferences", "Online classes", "Corporate town halls"]
        },
        {
          title: "E-commerce",
          items: ["Live shopping (QVC-style)", "Product launches", "Influencer shopping events"]
        }
      ]
    }
  },
  music: {
    title: "5. Music Streaming & Distribution",
    platform: {
      title: "Music Platform Development",
      features: [
        {
          title: "Core Features",
          icon: Music,
          items: [
            "Music library (millions of tracks)",
            "Playlists (user-created, editorial, algorithmic)",
            "Radio stations (personalized, artist-based, genre)",
            "Offline downloads",
            "High-quality audio (lossless, Dolby Atmos)",
            "Lyrics integration (time-synced)",
            "Social sharing",
            "Artist profiles and concert info"
          ]
        },
        {
          title: "Music Recommendation",
          icon: Radio,
          items: [
            "Collaborative filtering",
            "Audio analysis (tempo, key, mood, genre)",
            "Deep learning models",
            "Discover Weekly style playlists"
          ]
        },
        {
          title: "Royalty Management",
          icon: Users,
          items: [
            "Play tracking (every stream counted)",
            "Artist/label payouts",
            "Publishing rights (songwriter royalties)",
            "Territory-specific licensing",
            "Transparent reporting"
          ]
        }
      ]
    },
    distribution: {
      title: "Distribution Platform",
      subTitle: "Help artists distribute music to:",
      platforms: [
        "Spotify, Apple Music, Amazon Music",
        "YouTube Music, Pandora, Tidal",
        "Regional platforms (JioSaavn, Gaana in India)"
      ],
      services: {
        title: "Services",
        items: [
          "Metadata management",
          "ISRC code assignment",
          "Cover art compliance",
          "Release scheduling",
          "Revenue collection and splitting",
          "Analytics dashboard (streams, demographics)"
        ]
      }
    }
  },
  stack: {
    title: "Media Technology Stack",
    categories: [
      {
        title: "Video Processing",
        icon: Video,
        tools: ["FFmpeg, HandBrake", "AWS MediaConvert, Elemental", "Bitmovin, Zencoder, Mux"]
      },
      {
        title: "Streaming",
        icon: Wifi,
        tools: ["HLS, DASH protocols", "Video.js, JW Player, Bitmovin Player", "WebRTC (Agora, Twilio)"]
      },
      {
        title: "CDN",
        icon: Globe,
        tools: ["AWS CloudFront, Akamai, Fastly, Cloudflare"]
      },
      {
        title: "DRM",
        icon: Lock,
        tools: ["Widevine (Google)", "FairPlay (Apple)", "PlayReady (Microsoft)"]
      },
      {
        title: "Analytics",
        icon: BarChart,
        tools: ["Google Analytics, Mixpanel", "Mux Data (QoE analytics)", "Custom dashboards (Tableau, Grafana)"]
      },
      {
        title: "AI/ML",
        icon: Cpu,
        tools: ["TensorFlow, PyTorch", "OpenAI (GPT for scripts, metadata)", "Speech-to-text (Google, AWS, Azure)", "Computer vision (scene detection, object recognition)"]
      }
    ]
  }
};