import { 
  Scissors, 
  Mic, 
  Palette, 
  Type, 
  Clapperboard, 
  MonitorPlay, 
  Video, 
  Sun, 
  DollarSign, 
  Smile, 
  Mic2, 
  UserCheck, 
  ShieldCheck, 
  Layers
} from "lucide-react";

export const MEDIA_CONTENT_PRODUCTION_DATA = {
  header: {
    section: "2. Content Production & AI Automation",
    title: "AI-Powered Video Editing",
    subTitle: "Automated Editing",
    description: "Reduce post-production time and costs with AI."
  },
  videoEditing: {
    categories: [
      {
        title: "Scene Detection",
        icon: Scissors,
        color: "blue",
        items: [
          "Automatically identify scene changes",
          "Segment long footage into clips",
          "Detect and remove duplicate takes",
          "Highlight reel generation (best moments)"
        ]
      },
      {
        title: "Audio Cleanup",
        icon: Mic,
        color: "green",
        items: [
          "Background noise reduction",
          "Voice isolation",
          "Audio leveling (consistent volume)",
          "Automatic music ducking (lower music during dialogue)"
        ]
      },
      {
        title: "Color Grading",
        icon: Palette,
        color: "blue",
        items: [
          "AI-based color matching across scenes",
          "Style transfer (apply cinematic looks)",
          "Consistency across shots"
        ]
      },
      {
        title: "Auto-Captioning",
        icon: Type,
        color: "green",
        items: [
          "Speech-to-text transcription (95%+ accuracy)",
          "Multi-language subtitle generation",
          "Closed caption formatting (SRT, VTT, WebVTT)",
          "Translation (50+ languages)"
        ]
      },
      {
        title: "Highlight Generation",
        icon: Clapperboard,
        color: "blue",
        items: [
          "Sports highlights (goals, key plays) from full match",
          "Trailer creation from full movie",
          "Social media clips from long-form content",
          "Podcast snippet extraction"
        ]
      }
    ]
  },
  virtualProduction: {
    title: "Virtual Production",
    subTitle: "Real-Time Rendering",
    ledVolume: {
      title: "LED volume stages (like The Mandalorian)",
      icon: MonitorPlay,
      features: [
        "Unreal Engine real-time backgrounds",
        "In-camera VFX (no green screen)",
        "Interactive lighting",
        "Location flexibility (any environment digitally)"
      ]
    },
    benefits: {
      title: "Benefits",
      items: [
        { label: "30-50% cost savings vs location shoots", icon: DollarSign },
        { label: "Weather/time independence", icon: Sun },
        { label: "Instant feedback (see final shot on set)", icon: Video },
        { label: "Actor immersion (realistic environments vs green screen)", icon: Smile }
      ]
    }
  },
  aiVoice: {
    title: "AI Voice & Deepfake",
    columns: [
      {
        title: "Voice Cloning",
        icon: Mic2,
        items: [
          "Text-to-speech with celebrity voices",
          "Dubbing automation (lip-sync, voice matching)",
          "Posthumous voice recreation (with estate permission)",
          "Multi-language content (same voice, different languages)"
        ]
      },
      {
        title: "Deepfake (Ethical Use)",
        icon: UserCheck,
        items: [
          "Age transformation (young/old versions of actors)",
          "Stunt double face replacement",
          "Archive footage restoration",
          "Language dubbing with lip-sync"
        ]
      },
      {
        title: "Regulatory Compliance",
        icon: ShieldCheck,
        items: [
          "Disclosure requirements",
          "Consent and rights management",
          "Watermarking for transparency"
        ]
      }
    ]
  }
};