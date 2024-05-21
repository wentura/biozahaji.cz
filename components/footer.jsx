import Link from "next/link";
import React from "react";
import Matomo from "./matomo";
import MENU from "./menu-data";
import Social from "./social";

export default function Footer() {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6 items-center uppercase text-neutral-400">
            <a href="#">
              {" "}
              <img
                src="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1712328176/biozahaji/logo1_dxk9bz.webp"
                width={50}
                height={50}
                alt="logo"
              />
            </a>
            {MENU.map((menu) => (
              <Link
                key={menu.id}
                className="text-sm font-semibold text-gray-400 transition duration-100 hover:text-gray-500 capitalize "
                href={menu.url}
              >
                {menu.title}
              </Link>
            ))}
          </nav>
          <Social />
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          <span className="uppercase">Biozaháji</span> s.r.o. © 2024 -
          <a
            className=" hover:bg-bio-50 hover:bg-opacity-40 p-1 rounded-sm hover:text-bio-800"
            href="https://www.zbyneksvoboda.cz"
            target="_blank"
          >
            vytvořil Zbyněk Svoboda
          </a>
        </div>
      </footer>
      <Matomo />
    </div>
  );
}
