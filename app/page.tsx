import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Solar Contractor Insurance Call 844-967-5247",
  description:
    "Need Solar Contractor's Insurance? Get low cost contractor's insurance for your company. We shop the market for you to get you the best price and coverage.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{
          backgroundImage:
            "url('/images/electrician-connecting-solar-panels-1-1024x684.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-xl">
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Need Solar Contractor&apos;s Insurance?
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Get low cost contractor&apos;s insurance for your company. We shop
              the market for you to get you the best price and coverage.
            </p>
            <Link
              href="/contact-us/"
              className="inline-flex items-center gap-2 bg-[#02418F] hover:bg-[#001a47] text-white px-8 py-4 rounded text-lg font-semibold transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance & Bonds Section */}
      <section className="bg-[#f9f9f9] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Solar Contractor Insurance */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Solar Contractor Insurance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a full-service insurance agency devoted to solar
                contractors. We offer general liability insurance, commercial
                auto insurance, surety bonds, workers compensation insurance,
                tool &amp; equipment coverage (inland marine), and
                umbrella/excess liability insurance.
              </p>
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#02418F] hover:bg-[#001a47] text-white px-8 py-3 rounded text-lg font-semibold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                Request a Quote
              </Link>
            </div>

            {/* Solar Contractor Bonds */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Solar Contractor Bonds
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Do you need a surety bond for your roofing company? If you need
                a license bond, permit bond, bid or performance bond,
                maintenance bond, payment bond we got you covered with several
                options from the nations leading surety companies. It
                doesn&apos;t matter what size bond you need or what your credit
                is we have programs for every credit profile. Bad credit, good
                credit, or perfect credit we have the bonds you need to get to
                work.
              </p>
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 bg-[#02418F] hover:bg-[#001a47] text-white px-8 py-3 rounded text-lg font-semibold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div>
              <h2
                className="text-2xl font-bold text-gray-800 mb-6 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                My Story
              </h2>
              <div className="w-16 h-1 bg-[#02418F] mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>
                  My name is Josh Cotner and I used to work in construction. I
                  fell through a roof in 2005 and had a nightmare workers
                  compensation claim. I needed to support my family and I
                  learned a lot about liability and insurance during my recovery
                  time. I had to fight the workers compensation company to get
                  the results I was entitled to...
                </strong>
              </p>
              <p className="text-right">
                <Link
                  href="/about-us/"
                  className="text-[#02418F] hover:text-black font-bold transition-colors"
                >
                  Learn More &gt;
                </Link>
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/roofing-construction-job-p8dtgslulcs05nd44dzp7or9zbhitlgvb71t6o7shc.jpg"
                alt="Roofing Construction Job"
                className="w-full max-w-[450px] rounded shadow-lg"
              />
            </div>
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
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Coverages Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Coverage List */}
            <div>
              <h2
                className="text-3xl font-bold text-gray-800 mb-6 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Insurance Coverages
              </h2>
              <h4 className="text-lg font-bold text-gray-700 mb-4">
                List of Coverage Types:
              </h4>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-[#02418F] mt-1">&#9679;</span>
                  General Liability Insurance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#02418F] mt-1">&#9679;</span>
                  Professional Liability Insurance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#02418F] mt-1">&#9679;</span>
                  Property Damage Insurance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#02418F] mt-1">&#9679;</span>
                  Equipment Breakdown Coverage
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#02418F] mt-1">&#9679;</span>
                  Workers&apos; Compensation Insurance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#02418F] mt-1">&#9679;</span>
                  Installation Errors &amp; Omissions Insurance
                </li>
              </ul>
            </div>

            {/* Image */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/electrician-connecting-solar-panels-1-1024x684.jpg"
                alt="Electrician connecting solar panels"
                className="w-full rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solar Contractor Insurance Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-gray-800 mb-8 text-center uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Comprehensive Solar Contractor Insurance:
            <br />
            Protecting Your Investments
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              In the ever-expanding realm of renewable energy, solar contractors
              play a pivotal role in transforming the way we harness power. From
              designing and installing solar panel systems to maintaining their
              efficiency, solar contractors bear significant responsibilities.
              However, with great responsibility comes potential risks.
              That&apos;s where comprehensive solar contractor insurance steps
              in &ndash; to safeguard your investments and ventures in the solar
              industry.
            </p>

            <h5
              className="text-xl font-bold text-gray-800 mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Understanding the Risks:
            </h5>
            <p>
              Solar contractors face a unique set of risks due to the nature of
              their work. Whether it&apos;s installation errors, property
              damage, or accidents on the job site, these risks can lead to
              costly legal and financial repercussions. This is why having
              specialized insurance tailored for solar contractors is crucial.
            </p>

            <h5
              className="text-xl font-bold text-gray-800 mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Key Insurance Coverage:
            </h5>

            <p>
              <strong>1. General Liability Insurance:</strong> Protects your
              business against third-party claims of bodily injury, property
              damage, or advertising injury. It&apos;s a foundational coverage
              that every solar contractor should have in place.
            </p>
            <p>
              <strong>2. Professional Liability Insurance:</strong> Also known
              as Errors and Omissions (E&amp;O) insurance, this coverage
              safeguards you against claims of negligence, mistakes, or
              omissions in your professional services, ensuring your reputation
              remains intact.
            </p>
            <p>
              <strong>3. Property Damage Insurance:</strong> Covers damage to
              your business property, including tools, equipment, and solar
              panel inventory, in case of accidents, theft, or unforeseen
              events.
            </p>
            <p>
              <strong>4. Equipment Breakdown Coverage:</strong> With solar
              installations relying heavily on complex equipment, this coverage
              comes to your rescue in case of sudden breakdowns or malfunctions.
            </p>
            <p>
              <strong>5. Workers&apos; Compensation Insurance:</strong> If you
              have employees, this coverage provides financial protection in
              case they suffer work-related injuries or illnesses.
            </p>
            <p>
              <strong>6. Installation Errors &amp; Omissions Insurance:</strong>{" "}
              Specifically tailored for solar contractors, this coverage
              addresses potential errors in design, installation, or maintenance
              of solar systems.
            </p>

            <h5
              className="text-xl font-bold text-gray-800 mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Why Choose Us:
            </h5>
            <p>
              We specialize in providing comprehensive insurance solutions
              exclusively for solar contractors. Our years of experience in the
              industry have enabled us to develop insurance packages that align
              with the specific challenges you face. We understand that each
              solar project is unique, and our goal is to offer tailored
              coverage that addresses your individual needs.
            </p>

            <h5
              className="text-xl font-bold text-gray-800 mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Educational Resources:
            </h5>
            <p>
              Our commitment goes beyond just providing insurance coverage.
              We&apos;re here to be your partners in success. Explore our
              resources section for insightful articles and blog posts on solar
              industry trends, risk management strategies, and expert advice on
              how to minimize potential liabilities.
            </p>

            <h5
              className="text-xl font-bold text-gray-800 mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Customer Testimonials:
            </h5>
            <p>
              Don&apos;t just take our word for it. Hear from our satisfied
              clients who have benefited from our specialized insurance
              solutions. Their success stories demonstrate how having the right
              insurance partner can make a substantial difference in the solar
              contracting business.
            </p>

            <h5
              className="text-xl font-bold text-gray-800 mt-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Get in Touch:
            </h5>
            <p>
              Ready to take the first step in securing your solar ventures?
              Contact us today for a personalized consultation. Our dedicated
              team is here to guide you through the insurance process, ensuring
              you have the coverage you need to thrive in the solar industry.
            </p>
            <p>
              The solar industry holds immense promise, but it&apos;s essential
              to be prepared for the unexpected. With comprehensive solar
              contractor insurance from us you can approach your projects with
              confidence, knowing that your investments are protected.
            </p>
            <p>
              Partner with us and harness the power of insurance tailored to
              your solar ventures.
            </p>
          </div>
        </div>
      </section>

      {/* Second Request a Quote CTA */}
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
