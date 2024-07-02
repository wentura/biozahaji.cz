import Nabidka from "@/components/nabidka";
import React, { Suspense } from "react";
export default function aktualniNabidka() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden bg-gray-100 rounded-lg shadow-lg md:h-auto">
              <video
                className="object-cover object-center w-full h-full"
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
            <Suspense>
              <Nabidka />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
