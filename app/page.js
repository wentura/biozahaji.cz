import Hero from "@/components/hero";
import Nabidka from "@/components/nabidka";
import News from "@/components/news";
import Image from "next/image";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense>
        <News />
      </Suspense>
      <div className="container flex flex-col justify-center px-2 py-16 mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl">
          Aktuální nabídka
        </h2>
        <Suspense>
          <Nabidka />
        </Suspense>
      </div>
    </div>
  );
}
