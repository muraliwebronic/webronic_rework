import type { Metadata } from "next";

// --- AI SEO & Structured Data (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://webronic.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://webronic.com/about"
        }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://webronic.com/about/#webpage",
      "url": "https://webronic.com/about",
      "name": "About Webronic Industries | Global IT Services & Technology Innovation",
      "description": "Leading IT services company delivering AI/ML solutions, cloud services, and digital transformation.",
      "inLanguage": "en-US",
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://webronic.com/#organization",
        "name": "Webronic Industries",
        "foundingDate": "2010", 
        "description": "Global IT Services & Technology Innovation Partner",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 50,
            "maxValue": 500
        },
        // Official Social Profiles for Knowledge Graph
        "sameAs": [
          "https://www.linkedin.com/company/webronic",
          "https://twitter.com/webronic",
          "https://www.facebook.com/webronic",
          "https://www.youtube.com/webronic",
          "https://www.instagram.com/webronic_tech"
        ],
        "knowsAbout": ["AI Solutions", "Cloud Services", "Digital Transformation", "Software Development"]
      },
      "isPartOf": {
        "@id": "https://webronic.com/#website"
      }
    }
  ]
};

// --- Next.js 16 Metadata API ---
export const metadata: Metadata = {
  title: "About Webronic Industries | Global IT Services & Technology Innovation",
  description: "Leading IT services company delivering AI/ML solutions, cloud services, and digital transformation. 15+ years of excellence serving 500+ clients across 50+ countries.",
  keywords: [
    "about webronic",
    "IT services company",
    "technology consulting",
    "software development company",
    "global IT services",
    "digital transformation agency"
  ],
  alternates: {
    canonical: "https://webronic.com/about",
  },
  openGraph: {
    title: "About Webronic Industries | Innovation & Excellence",
    description: "15+ years of delivering AI/ML solutions and digital transformation to 500+ clients globally.",
    url: "https://webronic.com/about",
    siteName: "Webronic Industries",
    images: [
      {
        url: "https://webronic.com/og-about.jpg", 
        width: 1200,
        height: 630,
        alt: "Webronic Industries Team and Culture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Webronic Industries",
    description: "Global IT Services & Technology Innovation. Serving 500+ clients worldwide.",
    images: ["https://webronic.com/og-about.jpg"],
    creator: "@webronic",
    site: "@webronic"
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}