import React from "react";

function BezKempu() {
  return (
    <a
      href="https://www.bezkempu.cz/3921"
      target="_blank"
      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 flex gap-2 items-center"
    >
      <img
        className="h-5 w-5 grayscale opacity-80"
        src="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1712515533/biozahaji/logo-ico-dark_pph4ly.png"
        alt="Bez Kempu"
      />
      <span className="text-xs">Bez Kempu</span>
    </a>
  );
}

export default BezKempu;
