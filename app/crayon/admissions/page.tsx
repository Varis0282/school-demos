"use client";

import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { admissionSteps, ageCriteria, documents } from "@/lib/content";
import { BASE, DISPLAY, RED, YELLOW, BLUE, GREEN, PageHero, SectionHead, CTABand } from "../_ui";

const palette = [RED, BLUE, GREEN, YELLOW];

export default function Admissions() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.admissionsTitle} sub={t.sections.admissionsSub} color={YELLOW} />

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((s, i) => {
              const d = pick(s, lang);
              const c = palette[i % 4];
              return (
                <div key={i} className={`relative rounded-3xl bg-white p-6 pt-10 shadow-md ${i % 2 ? "[transform:rotate(0.6deg)]" : "[transform:rotate(-0.6deg)]"}`}>
                  <span className={`absolute -top-5 left-6 flex h-11 w-11 items-center justify-center rounded-full font-bold text-white shadow-lg ${DISPLAY}`} style={{ backgroundColor: c }}>
                    {i + 1}
                  </span>
                  <h3 className={`mb-2 font-bold text-[#4A3F35] ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#4A3F35]/60">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/contact#book`} className={`inline-block rounded-full bg-[#E44D42] px-8 py-3.5 font-bold text-white shadow-lg shadow-red-200 transition-transform hover:scale-105 ${DISPLAY}`}>
              {t.hero.cta1}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <SectionHead title={t.sections.ageTitle} color={BLUE} />
            <div className="overflow-hidden rounded-3xl shadow-md">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#3E7CB8] text-white">
                  <tr>
                    <th className={`px-5 py-3 ${DISPLAY}`}>{lang === "en" ? "Class" : "कक्षा"}</th>
                    <th className={`px-5 py-3 ${DISPLAY}`}>{lang === "en" ? "Age Requirement" : "आयु आवश्यकता"}</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCriteria.map((r, i) => (
                    <tr key={r.cls} className={i % 2 ? "bg-[#FFF8ED]" : "bg-white"}>
                      <td className="px-5 py-3 font-bold text-[#3E7CB8]">{r.cls}</td>
                      <td className="px-5 py-3 text-[#4A3F35]/70">{lang === "en" ? r.en : r.hi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <SectionHead title={t.sections.docsTitle} color={GREEN} />
            <div className="rounded-3xl bg-[#FFF8ED] p-6 shadow-md">
              <ul className="space-y-4">
                {documents.map((d, i) => (
                  <li key={d.en} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: palette[i % 4] }} />
                    <span className="text-[#4A3F35]/80">{lang === "en" ? d.en : d.hi}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border-2 border-dashed border-[#F5B82E] bg-white p-4">
                <FileText className="h-6 w-6 shrink-0 text-[#E44D42]" />
                <p className="text-sm font-bold text-[#4A3F35]">
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
