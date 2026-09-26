"use client";

import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { admissionSteps, ageCriteria, documents } from "@/lib/content";
import { BASE, FadeIn, PageHero, SectionHead, CTABand } from "../_ui";

export default function Admissions() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.admissionsTitle} sub={t.sections.admissionsSub} />

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => {
              const d = pick(s, lang);
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="relative h-full rounded-3xl border border-indigo-100 bg-white p-6 pt-10 shadow-lg shadow-indigo-500/5">
                    <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] font-bold text-white shadow-lg">
                      {i + 1}
                    </span>
                    <h3 className="mb-2 font-bold text-slate-900">{d.title}</h3>
                    <p className="text-sm text-slate-500">{d.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/contact`} className="inline-block rounded-full bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-8 py-3.5 font-bold text-white shadow-xl shadow-indigo-500/30 transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <FadeIn>
            <SectionHead title={t.sections.ageTitle} />
            <div className="overflow-hidden rounded-3xl border border-indigo-100 shadow-lg shadow-indigo-500/5">
              <table className="w-full text-left text-sm">
                <thead className="bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] text-white">
                  <tr>
                    <th className="px-5 py-3 font-bold">{lang === "en" ? "Class" : "कक्षा"}</th>
                    <th className="px-5 py-3 font-bold">{lang === "en" ? "Age Requirement" : "आयु आवश्यकता"}</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCriteria.map((r, i) => (
                    <tr key={r.cls} className={i % 2 ? "bg-[#F5F9FF]" : "bg-white"}>
                      <td className="px-5 py-3 font-bold text-[#4338CA]">{r.cls}</td>
                      <td className="px-5 py-3 text-slate-600">{lang === "en" ? r.en : r.hi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHead title={t.sections.docsTitle} />
            <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-500/5">
              <ul className="space-y-4">
                {documents.map((d) => (
                  <li key={d.en} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA5E9]" />
                    <span className="text-slate-700">{lang === "en" ? d.en : d.hi}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#4338CA]/8 to-[#0EA5E9]/8 p-4">
                <FileText className="h-6 w-6 shrink-0 text-[#4338CA]" />
                <p className="text-sm font-semibold text-[#4338CA]">
                  {lang === "en"
                    ? "The complete written fee structure is shared during your campus visit — transparent, with quarterly installments."
                    : "पूरा लिखित फी स्ट्रक्चर कैंपस विज़िट पर दिया जाता है — पारदर्शी, त्रैमासिक किस्तों के साथ।"}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
