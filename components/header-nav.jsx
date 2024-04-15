import Image from "next/image";
import Link from "next/link";
import React from "react";
import MENU from "./menu-data";
import MenuMobilni from "./menuMobilni";
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
        {MENU.map((menu) => (
          <Link
            key={menu.id}
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-gray-900 hover:underline underline-offset-2 capitalize "
            href={menu.url}
          >
            {menu.title}
          </Link>
        ))}
      </nav>
      {/* nav - end */}

      {/* buttons - start */}

      <div className="flex lg:hidden w-full justify-end">
        <MenuMobilni />
      </div>
      {/* buttons - end */}
    </header>
  );
}
