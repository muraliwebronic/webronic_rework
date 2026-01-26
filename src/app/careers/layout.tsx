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
          "name": "Careers",
          "item": "https://webronic.com/careers"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://webronic.com/careers/#webpage",
      "url": "https://webronic.com/careers",
      "name": "Careers at Webronic Industries | Join Our Team of Innovators",
      "description": "Join Webronic Industries - a leading IT services company. Explore careers in AI/ML, Cloud, Software Development, and IoT.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": "https://webronic.com/#website"
      },
      "about": {
        "@id": "https://webronic.com/#organization" 
      },
      "potentialAction": {
        "@type": "ReadAction",
        "target": ["https://webronic.com/careers"]
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Careers at Webronic Industries | Join Our Team of Innovators",
  description: "Join Webronic Industries - a leading IT services company with 15+ years of innovation. Explore careers in AI/ML, Cloud, Software Development, IoT, and more. Competitive benefits, global opportunities.",
  keywords: [
    "Webronic careers",
    "IT jobs",
    "AI/ML careers",
    "software engineer jobs",
    "cloud computing jobs",
    "tech hiring",
    "innovation careers",
    "IoT jobs"
  ],
  alternates: {
    canonical: "https://webronic.com/careers",
  },
  openGraph: {
    title: "Careers at Webronic Industries | Join Our Team of Innovators",
    description: "Build the future with us. Explore opportunities in AI, Cloud, and Software Development at Webronic.",
    url: "https://webronic.com/careers",
    siteName: "Webronic Industries",
    images: [
      {
        url: "https://webronic.com/og-careers.jpg", 
        width: 1200,
        height: 630,
        alt: "Join the Webronic Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Webronic Industries | Tech Careers",
    description: "Explore careers in AI/ML, Cloud, and Software Development. Join a team of innovators.",
    images: ["https://webronic.com/og-careers.jpg"],
  },
};

export default function CareersLayout({
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