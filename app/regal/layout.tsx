import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const jost = Jost({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Sunrise Public School — Indore | Regal Demo",
  description: "Nursery to Class 8, CBSE-pattern school in Nipania, Indore. Book a campus visit on WhatsApp.",
};

export default function RegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${jost.className} ${cormorant.variable} bg-[#101828] text-[#B9C2D0]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
