import Nabidka from "@/components/nabidka";
import React from "react";
export default function aktualniNabidka() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <video
                className="h-full w-full object-cover object-center"
                poster="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713172380/biozahaji/video/cmelak-poster_jib2vb.webp"
                loop
                muted
                autoPlay
              >
                <source
                  src="https://res.cloudinary.com/dsqrbvyhy/video/upload/v1713172553/biozahaji/video/cmelak_o1kvom.webm"
                  type="video/webm"
                />
                <source
                  src="https://res.cloudinary.com/dsqrbvyhy/video/upload/v1713172226/biozahaji/video/cmelak_a47kxa.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div>
            <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
              Aktuální nabídka
            </h2>

            <Nabidka />
          </div>
        </div>
      </div>
    </div>
  );
}
