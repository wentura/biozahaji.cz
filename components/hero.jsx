import Link from "next/link";
import React from "react";
import CarouselBanner from "./carouselBanner.jsx";
import HeaderNav from "./header-nav";

const images = [
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182458/biozahaji/carousel/41572_DSC-0793.jpeg_lmgjwt.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182463/biozahaji/carousel/34206_DSC-0612.jpeg_uugs0u.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182460/biozahaji/carousel/34214_DSC-0620.jpeg_hokeyu.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182455/biozahaji/carousel/34217_DSC-0623.jpeg_dj54vh.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182453/biozahaji/carousel/34215_DSC-0621.jpeg_taghqe.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182451/biozahaji/carousel/42965_1660381316288_jxvu6w.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182450/biozahaji/carousel/34445_DSC-0661.jpeg_igut7m.webp",
  "https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713182448/biozahaji/carousel/34196_DSC-0602.jpeg_gz6nnk.webp",
];

export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-2xl px-2 md:px-0	">
      <HeaderNav />
      <CarouselBanner images={images} />

      {/* <section className="flex flex-col items-center hero-background">
        <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
          <img
            src="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1712328176/biozahaji/logo1_dxk9bz.webp"
            width={800}
            height={800}
            className="max-w-[150px] sm:max-w-sm"
            alt="logo"
          />
        </div>
      </section> */}
    </div>
  );
}
