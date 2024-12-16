import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HeroSmall from "@/components/hero-small";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Biozahájí - BIO farma",
  keywords:
    "Biozahájí, bio farma, biozahaji, bio potraviny, zahájí, bio mělník, bio zelenina, bio ovoce, kiwi, bio kiwi, ovoce, zelenina, Lenka bio, Přemysl",
  description:
    "Rodinná bio farma. Pěstování se věnujeme celý život a BIO je náš životní směr. Vše naprosto čerstvé, v prvotřídní bio kvalitě.",
};
export default function RootLayout({ children }) {
  return (
    <div>
      <HeroSmall />
      {children}
    </div>
  );
}
