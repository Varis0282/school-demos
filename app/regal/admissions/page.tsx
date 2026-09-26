"use client";

import Link from "next/link";
import { Check, FileText } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { admissionSteps, ageCriteria, documents } from "@/lib/content";
import { BASE, DISPLAY, PageHero, SectionHead, CTABand } from "../_ui";

export default function Admissions() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.admissions} title={t.sections.admissionsTitle} sub={t.sections.admissionsSub} />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => {
              const d = pick(s, lang);
              return (
                <div key={i} className="bg-[#101828] p-8 transition-colors hover:bg-[#0B111D]">
                  <p className={`mb-4 text-3xl text-[#C6B896]/70 ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={`mb-2 text-lg font-semibold text-[#E8DCC3] ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#B9C2D0]/70">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href={`${BASE}/contact`} className="inline-block bg-[#C6B896] px-9 py-3.5 font-medium text-[#101828] transition-colors hover:bg-[#E8DCC3]">
              {t.hero.cta1}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0B111D] py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-2">
          <div>
            <SectionHead title={t.sections.ageTitle} />
            <div className="border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-[#C6B896]/40 text-[#C6B896]">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em]">{lang === "en" ? "Class" : "कक्षा"}</th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em]">{lang === "en" ? "Age Requirement" : "आयु आवश्यकता"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {ageCriteria.map((r) => (
                    <tr key={r.cls}>
                      <td className={`px-5 py-4 text-lg text-[#E8DCC3] ${DISPLAY}`}>{r.cls}</td>
                      <td className="px-5 py-4 text-[#B9C2D0]/80">{lang === "en" ? r.en : r.hi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHead title={t.sections.docsTitle} />
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {documents.map((d) => (
                <li key={d.en} className="flex items-start gap-4 px-2 py-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#C6B896]" />
                  <span className="text-[#B9C2D0]/90">{lang === "en" ? d.en : d.hi}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4 border border-[#C6B896]/40 p-5">
              <FileText className="h-6 w-6 shrink-0 text-[#C6B896]" />
              <p className="text-sm text-[#E8DCC3]">
                {lang === "en"
                  ? "The complete written fee structure is shared during your campus visit — transparent, with quarterly installments."
                  : "पूरा लिखित फी स्ट्रक्चर कैंपस विज़िट पर दिया जाता है — पारदर्शी, त्रैमासिक किस्तों के साथ।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
