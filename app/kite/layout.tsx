import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Sunrise Public School — Indore | Kite Demo",
  description: "Nursery to Class 8, CBSE-pattern school in Nipania, Indore. Book a campus visit on WhatsApp.",
};

export default function KiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${quicksand.className} bg-[#F5F9FF] text-slate-700`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
