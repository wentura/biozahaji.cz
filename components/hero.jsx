import Link from "next/link";
import React from "react";
import HeaderNav from "./header-nav";

export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-2xl px-2 md:px-0	">
      <HeaderNav />

      <section className="flex flex-col items-center hero-background">
        <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
          <img
            src="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1712328176/biozahaji/logo1_dxk9bz.webp"
            width={800}
            height={800}
            className="max-w-[150px] sm:max-w-sm"
            alt="logo"
          />
        </div>
      </section>
    </div>
  );
}
