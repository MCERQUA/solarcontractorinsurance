"use client";

import { useState } from "react";

export default function MobileNavToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden p-2 text-gray-700"
        aria-label="Menu Toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile nav */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden border-t border-gray-200 bg-white`}
      >
        <a
          href="/"
          className="block px-4 py-3 text-gray-700 font-semibold uppercase text-base border-b border-gray-100"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Home
        </a>
        <a
          href="/about-us/"
          className="block px-4 py-3 text-gray-700 font-semibold uppercase text-base border-b border-gray-100"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          About Us
        </a>
        <a
          href="/services/"
          className="block px-4 py-3 text-gray-700 font-semibold uppercase text-base border-b border-gray-100"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Services
        </a>
        <a
          href="/contact-us/"
          className="block px-4 py-3 text-gray-700 font-semibold uppercase text-base"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
