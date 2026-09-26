"use client";

import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { admissionSteps, ageCriteria, documents } from "@/lib/content";
import { BASE, DISPLAY, PageHero, SectionHead, CTABand } from "../_ui";

export default function Admissions() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.admissionsTitle} sub={t.sections.admissionsSub} />

      {/* Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => {
              const d = pick(s, lang);
              return (
                <div key={i} className="relative rounded-2xl border border-emerald-900/10 bg-white p-6 pt-9 shadow-sm">
                  <span className={`absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#D9A441] font-extrabold text-[#1E3A2C] shadow ${DISPLAY}`}>
                    {i + 1}
                  </span>
                  <h3 className="mb-2 font-extrabold text-[#1E5B3F]">{d.title}</h3>
                  <p className="text-sm text-slate-600">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/contact`} className="inline-block rounded-lg bg-[#1E5B3F] px-8 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
          </div>
        </div>
      </section>

      {/* Age criteria + documents */}
      <section className="bg-[#EFF5F0] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <SectionHead title={t.sections.ageTitle} />
            <div className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1E5B3F] text-white">
                  <tr>
                    <th className="px-5 py-3 font-bold">{lang === "en" ? "Class" : "कक्षा"}</th>
                    <th className="px-5 py-3 font-bold">{lang === "en" ? "Age Requirement" : "आयु आवश्यकता"}</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCriteria.map((r, i) => (
                    <tr key={r.cls} className={i % 2 ? "bg-[#FBFAF6]" : "bg-white"}>
                      <td className="px-5 py-3 font-bold text-[#1E5B3F]">{r.cls}</td>
                      <td className="px-5 py-3 text-slate-600">{lang === "en" ? r.en : r.hi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHead title={t.sections.docsTitle} />
            <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
              <ul className="space-y-4">
                {documents.map((d) => (
                  <li key={d.en} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E5B3F]" />
                    <span className="text-slate-700">{lang === "en" ? d.en : d.hi}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#D9A441]/15 p-4">
                <FileText className="h-6 w-6 shrink-0 text-[#1E5B3F]" />
                <p className="text-sm font-semibold text-[#1E5B3F]">
                  {lang === "en"
                    ? "The complete written fee structure is shared during your campus visit — transparent, with quarterly installments."
                    : "पूरा लिखित फी स्ट्रक्चर कैंपस विज़िट पर दिया जाता है — पारदर्शी, त्रैमासिक किस्तों के साथ।"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
