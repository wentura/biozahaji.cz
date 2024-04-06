import React from "react";

export default function Nabidka() {
  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
      <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
        Aktuální nabídka
      </h2>
      <span>bude videt jen pokud nejaka nabidka bude</span>
      <div className="divide-y divide-neutral-200">
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-3">1. plodina</h3>
          <p className="md:pl-0 md:col-span-7">kratky popis</p>
          <p className="md:pl-0 md:col-span-2">cena za jednotku</p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-3">2. plodina</h3>
          <p className="md:pl-0 md:col-span-7">kratky popis</p>
          <p className="md:pl-0 md:col-span-2">cena za jednotku</p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-3">3. plodina</h3>
          <p className="md:pl-0 md:col-span-7">kratky popis</p>
          <p className="md:pl-0 md:col-span-2">cena za jednotku</p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-3">4. plodina</h3>
          <p className="md:pl-0 md:col-span-7">kratky popis</p>
          <p className="md:pl-0 md:col-span-2">cena za jednotku</p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-3">5. plodina</h3>
          <p className="md:pl-0 md:col-span-7">kratky popis</p>
          <p className="md:pl-0 md:col-span-2">cena za jednotku</p>
        </div>
      </div>
    </div>
  );
}
