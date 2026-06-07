import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Solar Contractor Insurance. Call 844-967-5247 or fill out our form for a free quote. Located at 4435 E Chandler Blvd Suite 200, Phoenix, AZ 85048.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#02418F] py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Contact Us
          </h2>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2
                className="text-3xl font-bold text-gray-800 mb-8 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Contact
              </h2>
              <ul className="space-y-6">
                <li>
                  <a
                    href="mailto:josh@contractorschoiceagency.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#02418F] text-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#02418F]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    josh@contractorschoiceagency.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:844-967-5247"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#02418F] text-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#02418F]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.457-2.393a1 1 0 00.043-1.391L6.853 3.513a1.003 1.003 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.549c-.083.471-.367 2.205.555 4.374 1.136 2.672 3.432 5.34 6.573 7.927 2.607 2.147 5.048 3.209 6.508 3.209.454 0 .816-.082 1.072-.242l1.926-1.736a.998.998 0 00-.149-1.528z" />
                    </svg>
                    844-967-5247
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#02418F] mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    4435 E Chandler Blvd Suite 200,
                    <br />
                    Phoenix, AZ 85048
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02418F] focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02418F] focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02418F] focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={180}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02418F] focus:border-transparent outline-none transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#02418F] hover:bg-[#001a47] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Duty, Honor, Faith */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Duty */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-[#02418F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Duty
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It is our duty to find you the best insurance coverage for your
                business.
              </p>
            </div>

            {/* Honor */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-[#02418F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Honor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It is our honor to serve you. We treat everyone the same no
                matter how large or small your business is.
              </p>
            </div>

            {/* Faith */}
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-[#02418F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-3 uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Faith
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We want you to have faith in your solar contractor insurance
                agent. We want you to know you can reach an insurance expert when
                you have a claim before you contact your insurance company to
                report it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
