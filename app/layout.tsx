import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Website Demos — 5 Styles",
  description:
    "One school, five completely different websites. Campus-visit booking on WhatsApp, Hindi/English, admissions, achievements, gallery and map — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
