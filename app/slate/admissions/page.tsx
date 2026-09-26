"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { admissionSteps, ageCriteria, documents } from "@/lib/content";
import { BASE, DISPLAY, PageHero, SectionHead, CTABand } from "../_ui";

export default function Admissions() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero label={t.nav.admissions} title={t.sections.admissionsTitle} sub={t.sections.admissionsSub} />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => {
              const d = pick(s, lang);
              return (
                <div key={i} className="border-t-2 border-[#16181D] pt-5">
                  <p className={`text-3xl text-[#1D4ED8] ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={`mb-2 mt-3 text-lg font-semibold ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#16181D]/60">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <Link href={`${BASE}/contact#book`} className="mt-12 inline-flex items-center gap-2 bg-[#1D4ED8] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#16181D]">
            {t.hero.cta1} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F6F7F9] py-16">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-2">
          <div>
            <SectionHead no="01" title={t.sections.ageTitle} />
            <table className="w-full border-2 border-[#16181D] text-left text-sm">
              <thead className="bg-[#16181D] text-white">
                <tr>
                  <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em]">{lang === "en" ? "Class" : "कक्षा"}</th>
                  <th className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em]">{lang === "en" ? "Age Requirement" : "आयु आवश्यकता"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16181D]/15 bg-white">
                {ageCriteria.map((r) => (
                  <tr key={r.cls}>
                    <td className={`px-5 py-3.5 font-semibold ${DISPLAY}`}>{r.cls}</td>
                    <td className="px-5 py-3.5 text-[#16181D]/70">{lang === "en" ? r.en : r.hi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <SectionHead no="02" title={t.sections.docsTitle} />
            <ul className="border-t border-[#16181D]/15 bg-white px-5">
              {documents.map((d) => (
                <li key={d.en} className="flex items-start gap-4 border-b border-[#16181D]/15 py-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#1D4ED8]" />
                  <span className="text-[#16181D]/80">{lang === "en" ? d.en : d.hi}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-4 border-[#1D4ED8] bg-white p-5 text-sm font-medium">
              {lang === "en"
                ? "The complete written fee structure is shared during your campus visit — transparent, with quarterly installments."
                : "पूरा लिखित फी स्ट्रक्चर कैंपस विज़िट पर दिया जाता है — पारदर्शी, त्रैमासिक किस्तों के साथ।"}
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
