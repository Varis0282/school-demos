"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { DISPLAY, Eyebrow, PageHero, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero eyebrow={t.nav.about} title={a.title} sub={a.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 border border-[#C6B896]/30" aria-hidden />
            <img src={img.about} alt="Sunrise Public School campus" className="relative w-full object-cover" />
          </div>
          <div className="order-1 space-y-5 text-[#B9C2D0]/85 lg:order-2">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`text-xl italic text-[#E8DCC3] ${DISPLAY}`}>{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#0B111D] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Eyebrow>{a.missionTitle}</Eyebrow>
          <p className={`text-2xl font-semibold italic leading-relaxed text-[#E8DCC3] md:text-3xl ${DISPLAY}`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="bg-[#101828] p-8">
                <p className={`mb-3 text-2xl text-[#C6B896]/70 ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`mb-2 text-lg font-semibold text-[#E8DCC3] ${DISPLAY}`}>{v.title}</h3>
                <p className="text-sm text-[#B9C2D0]/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
