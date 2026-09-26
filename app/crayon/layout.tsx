import type { Metadata } from "next";
import { Fredoka, Mulish } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const mulish = Mulish({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Sunrise Public School — Indore | Crayon Demo",
  description: "Nursery to Class 8, CBSE-pattern school in Nipania, Indore. Book a campus visit on WhatsApp.",
};

export default function CrayonLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${mulish.className} ${fredoka.variable} bg-[#FFF8ED] text-[#4A3F35]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
