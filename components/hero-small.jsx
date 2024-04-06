import Link from "next/link";
import React from "react";
import HeaderNav from "./header-nav";
export default function HeroSmall() {
  return (
    <div className="bg-white pb-2">
      <div className="mx-auto max-w-screen-2xl">
        <HeaderNav />
      </div>
    </div>
  );
}
