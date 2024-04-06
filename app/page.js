import Hero from "@/components/hero";
import Nabidka from "@/components/nabidka";
import News from "@/components/news";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <Nabidka />
    </div>
  );
}
