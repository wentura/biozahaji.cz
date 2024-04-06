import React from "react";
import Social from "./social";

export default function Footer() {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          {/* nav - start */}
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
            <a href="#">Biozahájí</a>
            <a href="#">Aktuální nabídka</a>
            <a href="#">Kemp</a>
            <a href="#">Pronájem prostor</a>
            <a href="">O nás</a>
            <a href="#">Kontakt</a>
          </nav>
          {/* nav - end */}
          {/* social - start */}
          <Social /> {/* social - end */}
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
    </div>
  );
}
