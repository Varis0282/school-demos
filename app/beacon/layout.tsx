import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });
const merri = Merriweather({ weight: ["700", "900"], subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Sunrise Public School — Indore | Beacon Demo",
  description: "Nursery to Class 8, CBSE-pattern school in Nipania, Indore. Book a campus visit on WhatsApp.",
};

export default function BeaconLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} ${merri.variable} bg-[#FBFAF6] text-slate-700`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
