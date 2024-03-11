import Hero from "@/components/hero";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <header className="max-w-7xl mx-auto bg-red-200">
        logo a menu
        <Hero />
      </header>
      <div className="nadpis flex min-h-96 flex-col items-center justify-between p-24 max-w-7xl mx-auto bg-green-200">
        BIOZAHAJI
      </div>
    </div>
  );
}
