import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Solar Contractor Insurance - our approach, our story, and our commitment to solar contractors. Josh Cotner, CRIS.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#02418F] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Our Company
          </h2>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8 uppercase text-center"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Our Approach
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We like to listen to our solar contractors! They know their trade
            better than anyone. Sometimes they have better knowledge of their
            safety risks than their workers&apos; compensation insurance
            carriers! Because of this, we have found that it is best to take one
            application and shop every insurance carrier for quotes. Depending
            on your roofing activities and state(s) of operation we can present
            up to 18 different quotes from different carriers. Each carrier has
            different coverage options and pricing. We try to present a good,
            better, best quote and let our contractors pick which option suits
            them best.
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8 uppercase text-center"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            My Story
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              My name is Josh Cotner and I used to work in construction. I fell
              through a roof in 2005 and had a nightmare workers compensation
              claim. I needed to support my family and I learned a lot about
              liability and insurance during my recovery time. I had to fight the
              workers compensation company to get the results I was entitled to.
            </p>
            <p>
              After my injury I learned a lot about insurance and the law and I
              started selling insurance with a National Contractors Insurance
              Company, RRG which was started by ABC Supply.
            </p>
            <p>
              I worked with them for several years until the depression took its
              toll on the insurance carriers reserves. NCIC was shut down but all
              my roofers still needed coverage, so I worked and found other
              insurance companies to work with that liked writing roofing
              insurance.
            </p>
            <p>
              I have sold a lot of insurance to roofing contractors over the
              years and I have seen it all. I have helped thousands of roofing
              contractor find affordable insurance, cover the construction risks,
              keep money in their pockets, and fight for coverage to pay claims
              for my roofers.
            </p>
          </div>

          <div className="text-center mt-8">
            <p
              className="text-xl font-bold text-[#02418F]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Josh Cotner, CRIS
            </p>
          </div>
        </div>
      </section>

      {/* Request a Quote CTA */}
      <section className="bg-[#02418F] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Request a Quote
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                The quickest way to get a quote is to call 844-967-5247 but if
                you want to request a quote please fill out our form and one of
                our agents will contact you.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-white text-[#02418F] hover:bg-gray-100 px-8 py-4 rounded text-lg font-semibold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
