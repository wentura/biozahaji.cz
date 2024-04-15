import Nabidka from "@/components/nabidka";
import Link from "next/link";
import React from "react";
export default function bezKempu() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col">
          <div>
            <div className=" md:h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
              <video
                className="h-full w-full object-cover object-center"
                poster="https://res.cloudinary.com/dsqrbvyhy/image/upload/v1713176728/biozahaji/video/stan_qcq7lm.webp"
                muted
                autoPlay
              >
                <source
                  src="https://res.cloudinary.com/dsqrbvyhy/video/upload/v1713176731/biozahaji/video/stan2_r9q941.webm"
                  type="video/webm"
                />
                <source
                  src="https://res.cloudinary.com/dsqrbvyhy/video/upload/v1713176735/biozahaji/video/stan_xjdurs.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="">
            <h2 className="my-12 text-4xl font-bold text-center sm:text-5xl">
              Bez Kempu
            </h2>
            <p className="py-2">
              Naše louka je vám k dispozici pro kempování a stanování jak v
              aplikaci{" "}
              <a
                href="https://www.bezkempu.cz/3921"
                target="_blank"
                className="odkazText"
              >
                bezkempu.cz
              </a>{" "}
              tak i pro náhodné kolemdoucí (nejlépe po{" "}
              <Link href="/onas" className="odkazText">
                telefonnícké domluvě
              </Link>
              ).
            </p>
            <p className="py-2">
              U nás budete mít tu klid, bude rušit pouze{" "}
              <strong>zpěv ptáků a kvákání žab</strong> z naší blízké nádrže na
              závlahu ovocných stromů a zeleniny.
            </p>
            <p className="py-2">
              Na pozemcích farmy probíhá pěstování, sklizeň i samosběr ovoce a
              zeleniny. Proto se v okolí budeme pohybovat a obstarávat fungování
              farmy, případně i tak zákazníci samosběru. Věříme, že Vás tím
              nebudeme rušit.
            </p>
            <p className="py-2">
              Pozemky pro kempování pravidelně sekáme. Pokud k nám plánujete
              cestu a chcete se podívat jaké je u nás počasí -{" "}
              <a
                href="https://app.weathercloud.net/d9254644291?fbclid=IwAR2N7tqG60khDqe-gVRAVR5RMznBKi9bTzeS3osUYKcjpZPq2lc_VZOPeLU#current"
                target="_blank"
                className="odkazText"
              >
                naše meteostanice
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
