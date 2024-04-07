import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function HeaderNav() {
  return (
    <header className=" flex items-center justify-between px-2 py-2 md:py-4">
      {/* logo - start */}
      <a
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-neutral-600 md:text-3xl"
        aria-label="logo"
      >
        <img
          src="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1712328176/biozahaji/logo1_dxk9bz.webp"
          width={80}
          height={50}
          alt="logo"
        />{" "}
        Biozahájí
      </a>
      {/* logo - end */}

      {/* nav - start */}
      <nav className="hidden gap-12 lg:flex">
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:  active: "
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:  active: "
        >
          Pricing
        </Link>
        <Link
          href="/onas"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:  active: "
        >
          O nás
        </Link>
      </nav>
      {/* nav - end */}

      {/* buttons - start */}

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* buttons - end */}
    </header>
  );
}
