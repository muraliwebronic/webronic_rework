import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// --- AI SEO & Structured Data (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://webronic.com/#organization",
      "name": "Webronic Industries",
      "url": "https://webronic.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webronic.com./assets/webonic2.png",
        "width": 112,
        "height": 112
      },
      "sameAs": [
        "https://twitter.com/webronic",
        "https://www.linkedin.com/company/webronic",
        "https://www.facebook.com/webronic"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-72000-88500",
        "contactType": "customer service",
        "areaServed": ["IN", "EU"],
        "availableLanguage": ["en"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://webronic.com/#website",
      "url": "https://webronic.com",
      "name": "Webronic Industries",
      "description": "Global IT Services, AI Solutions & Digital Transformation",
      "publisher": {
        "@id": "https://webronic.com/#organization"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://webronic.com/#service",
      "url": "https://webronic.com",
      "name": "Webronic AI & IT Solutions",
      "description": "Enterprise technology partner delivering AI/ML solutions and digital transformation.",
      "image": "https://webronic.com/og-image.jpg",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  ]
};

// --- Next.js 16 Metadata API ---
export const metadata: Metadata = {
  title: "Webronic Industries | Global IT Services, AI Solutions & Digital Transformation",
  description: "Leading IT services company delivering AI/ML solutions, cloud services, and digital transformation across India and Europe. Enterprise technology partner for global success.",
  keywords: ["IT services company", "AI solutions", "cloud services", "digital transformation", "enterprise software", "technology consulting"],
  applicationName: "Webronic Industries",
  authors: [{ name: "Webronic Industries", url: "https://webronic.com" }],
  creator: "Webronic Industries",
  publisher: "Webronic Industries",
  metadataBase: new URL("https://webronic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webronic Industries | Global IT Services & AI Solutions",
    description: "Leading IT services company delivering AI/ML solutions, cloud services, and digital transformation across India and Europe.",
    url: "https://webronic.com",
    siteName: "Webronic Industries",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Webronic Industries - Global IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webronic Industries | Global IT Services",
    description: "Enterprise technology partner for digital transformation and AI innovation",
    images: ["/og-image.jpg"],
    creator: "@webronic", // Update with actual handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` font-sora antialiased bg-white text-slate-900`}>
        {/* JSON-LD Injection for AI SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header id="main-header" className="relative z-[100]">
          <Navbar />
        </header>

        <main className="min-h-screen">
          <Providers>{children}</Providers>
        </main>

        <footer id="main-footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}