import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar contractor insurance services including general liability, workers compensation, commercial auto insurance. Get a quote today.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[#02418F] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Services
          </h2>
        </div>
      </section>

      {/* General Liability */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold text-gray-800 mb-6 uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Solar Contractor General Liability
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We have dozens of different programs and policies to choose from.
              </p>
              <p>
                We tailor each policy to meet the size, scope, operations for our
                contractors. If you are only doing small repairs why pay
                thousand&apos;s for insurance when you need a simple policy.
                Likewise, if you are doing new tract homes you might need the
                best insurance money can buy to meet the needs of the general
                contractor or home builders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workers Compensation */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold text-gray-800 mb-6 uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Workers Compensation
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Solar Contractors Workers Compensation insurance is very
                difficult for contractors to get approved and expensive. The
                reason is because workers compensation insurance is controlled by
                the states. There is also a 22 year tail liability period once
                someone is injured on the job. So if someone is hurt today they
                have 22 years to get assistance and workers comp help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Auto */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold text-gray-800 mb-6 uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Commercial Auto
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Solar Contractor commercial auto insurance is very important
                coverage. Anytime you start using a vehicle for business you need
                a commercial auto insurance. When you haul goods or materials,
                employees or customers in your vehicle you need higher limits of
                liability and coverage.
              </p>
              <p>
                A business auto policy is the most likely policy to be exhausted
                in a claim. Make sure you carry $1,000,000 in coverage for your
                business autos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Don't Buy the Cheapest */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h5
              className="text-2xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Don&apos;t Buy the Cheapest
            </h5>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We all understand the need to minimize insurance costs but when
                you have a claim you are going to want the best coverage money
                can buy. We try to balance the price that you want to pay with
                the coverage that you need. Don&apos;t buy more coverage than you
                need! If you have a question please ask. We love to educate our
                clients about the real coverage they have. There is no grey area
                with us. YOU KNOW YOU&apos;RE COVERED!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3
              className="text-3xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Get a Quote
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The quickest way to get a quote is to call 844-967-5247 but if you
              want to request a quote please fill out our form and one of our
              agents will contact you.
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
              Contact Us
            </Link>
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
