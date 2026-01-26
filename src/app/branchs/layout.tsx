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
          "name": "Contact Us",
          "item": "https://webronic.com/branchs"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://webronic.com/branchs/#webpage",
      "url": "https://webronic.com/branchs",
      "name": "Contact Webronic | Get in Touch",
      "description": "Contact our offices in Salem, Madurai, and Chennai. Expert IT consulting and support.",
      "mainEntity": {
        "@id": "https://webronic.com/#organization"
      }
    },
    // --- Local Business Schema: Salem (HQ) ---
    {
      "@type": "ProfessionalService",
      "@id": "https://webronic.com/branchs/#salem",
      "name": "Webronic Industries - Salem HQ",
      "parentOrganization": { "@id": "https://webronic.com/#organization" },
      "image": "https://webronic.com/og-contact.jpg",
      "telephone": "+91-720-008-8500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK)",
        "addressLocality": "Jalakandapuram, Salem",
        "postalCode": "636501",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.7700", // Update with exact lat/long if available
        "longitude": "77.9400"
      }
    },
    // --- Local Business Schema: Madurai ---
    {
      "@type": "ProfessionalService",
      "@id": "https://webronic.com/branchs/#madurai",
      "name": "Webronic Industries - Madurai",
      "parentOrganization": { "@id": "https://webronic.com/#organization" },
      "telephone": "+91-638-332-6928",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi",
        "addressLocality": "Madurai",
        "postalCode": "625018",
        "addressCountry": "IN"
      }
    },
    // --- Local Business Schema: Chennai ---
    {
      "@type": "ProfessionalService",
      "@id": "https://webronic.com/branchs/#chennai",
      "name": "Webronic Industries - Chennai Hub",
      "parentOrganization": { "@id": "https://webronic.com/#organization" },
      "telephone": "+91-720-008-8500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Rathna Nagar, Teynampet",
        "addressLocality": "Chennai",
        "postalCode": "600004",
        "addressCountry": "IN"
      }
    }
  ]
};

// --- Next.js 16 Metadata API ---
export const metadata: Metadata = {
  title: "Contact Webronic | IT Services in Salem, Madurai & Chennai",
  description: "Get in touch with Webronic Industries. Visit our digital hubs in Salem, Madurai, and Chennai for enterprise IT solutions, AI consulting, and software development.",
  keywords: [
    "contact webronic",
    "IT company Salem",
    "software company Madurai",
    "IT services Chennai",
    "web development company Tamil Nadu",
    "webronic address",
    "webronic phone number"
  ],
  alternates: {
    canonical: "https://webronic.com/branchs",
  },
  openGraph: {
    title: "Contact Webronic Industries | Let's Build Something Great",
    description: "Connect with our teams in Salem, Madurai, and Chennai. We are ready to scale your business.",
    url: "https://webronic.com/branchs",
    siteName: "Webronic Industries",
    images: [
      {
        url: "https://webronic.com/og-contact.jpg", // Suggested: Use an image of a map or office front
        width: 1200,
        height: 630,
        alt: "Contact Webronic Locations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Webronic Industries",
    description: "Offices in Salem, Madurai, and Chennai. Reach out today.",
    images: ["https://webronic.com/og-contact.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Injection for Local Business/branchs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Render the Page Content */}
      {children}
    </>
  );
}