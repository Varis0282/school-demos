"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { DISPLAY, Micro, PageHero, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero label={t.nav.about} title={a.title} sub={a.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-[#16181D]/70">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`text-xl text-[#16181D] ${DISPLAY}`}>{a.story3}</p>
          </div>
          <div>
            <img src={img.about} alt="Sunrise Public School campus" className="w-full object-cover grayscale-[35%]" />
            <div className="mt-6 grid grid-cols-2 gap-px border border-[#16181D]/15 bg-[#16181D]/15">
              {stats.map((s) => (
                <div key={s.value} className="bg-white p-5 text-center">
                  <p className={`text-2xl font-semibold ${DISPLAY}`}>{s.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#16181D]/50">{s[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F6F7F9] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Micro>{a.missionTitle}</Micro>
          <p className={`mt-5 max-w-4xl text-3xl font-semibold leading-snug md:text-4xl ${DISPLAY}`}>
            &ldquo;{a.mission}&rdquo;
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="01" title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="border-t border-[#16181D]/15 pt-5">
                <p className={`text-lg text-[#1D4ED8] ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`mb-2 mt-2 font-semibold ${DISPLAY}`}>{v.title}</h3>
                <p className="text-sm text-[#16181D]/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
