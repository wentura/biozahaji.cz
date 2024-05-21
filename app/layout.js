import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "./ApolloWrapper";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Biozahájí - BIO farma",
  description:
    "Rodinná bio farma. Pěstování se věnujeme celý život a BIO je náš životní směr. Vše naprosto čerstvé, v prvotřídní bio kvalitě.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-lg max-w-screen-xl mx-auto">
        <main className="">
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
