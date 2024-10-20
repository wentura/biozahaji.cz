import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HeroSmall from "@/components/hero-small";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
      <HeroSmall />
      {children}
    </div>
  );
}
