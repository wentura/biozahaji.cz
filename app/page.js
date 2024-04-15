import Hero from "@/components/hero";
import Nabidka from "@/components/nabidka";
import News from "@/components/news";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
          Aktuální nabídka
        </h2>

        <Nabidka />
      </div>
    </div>
  );
}
