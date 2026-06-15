import type { Metadata } from "next";
import MobileNavToggle from "./components/MobileNavToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Solar Contractor Insurance | Call 844-967-5247",
    template: "%s | Solar Contractor Insurance",
  },
  description:
    "Need Solar Contractor's Insurance? Get low cost contractor's insurance for your company. We shop the market for you to get you the best price and coverage.",
  keywords: [
    "solar contractor insurance",
    "contractor insurance",
    "solar panel insurance",
    "general liability insurance",
    "workers compensation",
    "surety bonds",
    "commercial auto insurance",
  ],
  metadataBase: new URL("https://solarcontractorinsurance.com"),
  openGraph: {
    title: "Solar Contractor Insurance | Call 844-967-5247",
    description:
      "Need Solar Contractor's Insurance? Get low cost contractor's insurance for your company. We shop the market for you to get you the best price and coverage.",
    url: "https://solarcontractorinsurance.com",
    siteName: "Solar Contractor Insurance",
    images: [
      {
        url: "/images/electrician-connecting-solar-panels-1-1024x684.jpg",
        width: 1024,
        height: 684,
        alt: "Electrician connecting solar panels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Solar Contractor Insurance Call 844-967-5247",
    description:
      "Need Solar Contractor's Insurance? Get low cost contractor's insurance for your company. We shop the market for you to get you the best price and coverage.",
    images: ["/images/electrician-connecting-solar-panels-1-1024x684.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Solar Contractor Insurance — Contractors Choice Agency",
  "url": "https://solarcontractorinsurance.com",
  "telephone": "+18449675247",
  "email": "josh@contractorschoiceagency.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12220 E Riggs Road Suite #105",
    "addressLocality": "Chandler",
    "addressRegion": "AZ",
    "postalCode": "85249",
    "addressCountry": "US"
  },
  "areaServed": "US",
  "priceRange": "$$",
  "description": "Specialized insurance agency for solar contractors. General liability, workers compensation, commercial auto, professional liability, surety bonds, and equipment coverage for solar installers. Licensed in all 50 states.",
  "sameAs": [
    "https://contractorschoiceagency.com",
    "https://linkedin.com/in/joshcotner"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <h1 className="text-[#02418F] text-2xl md:text-[42px] font-medium uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Solar Contractor&apos;s Insurance
                </h1>
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="/" className="px-4 py-2 text-gray-700 hover:text-[#02418F] font-semibold uppercase text-base transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Home
              </a>
              <a href="/about-us/" className="px-4 py-2 text-gray-700 hover:text-[#02418F] font-semibold uppercase text-base transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
                About Us
              </a>
              <a href="/services/" className="px-4 py-2 text-gray-700 hover:text-[#02418F] font-semibold uppercase text-base transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Services
              </a>
              <a href="/contact-us/" className="px-4 py-2 text-gray-700 hover:text-[#02418F] font-semibold uppercase text-base transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Contact Us
              </a>
            </nav>

            {/* CTA Button */}
            <a
              href="tel:844-967-5247"
              className="bg-[#02418F] hover:bg-black text-white px-5 py-3 rounded-full font-medium text-sm flex items-center gap-2 transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.457-2.393a1 1 0 00.043-1.391L6.853 3.513a1.003 1.003 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.549c-.083.471-.367 2.205.555 4.374 1.136 2.672 3.432 5.34 6.573 7.927 2.607 2.147 5.048 3.209 6.508 3.209.454 0 .816-.082 1.072-.242l1.926-1.736a.998.998 0 00-.149-1.528z"/>
              </svg>
              CALL 844-967-5247
            </a>

            {/* Mobile menu toggle + nav (client component) */}
            <MobileNavToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div className="text-right md:text-left">
                <h2 className="text-2xl font-medium text-gray-800 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Solar Contractor&apos;s Insurance
                </h2>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:josh@contractorschoiceagency.com" className="flex items-center gap-2 text-gray-600 hover:text-[#02418F] transition-colors text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      josh@contractorschoiceagency.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:844-967-5247" className="flex items-center gap-2 text-gray-600 hover:text-[#02418F] transition-colors text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.457-2.393a1 1 0 00.043-1.391L6.853 3.513a1.003 1.003 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.549c-.083.471-.367 2.205.555 4.374 1.136 2.672 3.432 5.34 6.573 7.927 2.607 2.147 5.048 3.209 6.508 3.209.454 0 .816-.082 1.072-.242l1.926-1.736a.998.998 0 00-.149-1.528z"/>
                      </svg>
                      844-967-5247
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <p className="text-center text-sm text-gray-500 uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Copyright &copy; 2021 All Rights Reserved. Contractor&apos;s Choice Agency
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
