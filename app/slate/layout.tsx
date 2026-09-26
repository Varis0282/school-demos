import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const workSans = Work_Sans({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Sunrise Public School — Indore | Slate Demo",
  description: "Nursery to Class 8, CBSE-pattern school in Nipania, Indore. Book a campus visit on WhatsApp.",
};

export default function SlateLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${workSans.className} ${lora.variable} bg-white text-[#16181D]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
