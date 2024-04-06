import React from "react";

export default function News() {
  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
      <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
        Novinky
      </h2>
      <span>budou videt jen pokud nejake aktuality budou</span>
      <div className="divide-y divide-neutral-200">
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-2">Nadpis 1. aktuality</h3>
          <p className="md:pl-0 md:col-span-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque
            in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.
          </p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-2">Nadpis 2. aktuality</h3>
          <p className="md:pl-0 md:col-span-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            aspernatur quae, eos explicabo odit minima libero veniam similique
            quibusdam doloribus facilis ipsa accusantium vel maiores corrupti!
            Libero voluptate a doloribus?
          </p>
        </div>
      </div>
    </div>
  );
}
