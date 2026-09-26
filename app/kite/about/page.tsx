"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { FadeIn, PageHero, SectionHead, CTABand, Counter } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <FadeIn className="space-y-4 text-slate-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-bold text-[#4338CA]">{a.story3}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-[#4338CA]/15 to-[#0EA5E9]/15 blur-xl" aria-hidden />
            <img src={img.about} alt="Sunrise Public School campus" className="relative w-full rounded-[2rem] object-cover shadow-2xl" />
          </FadeIn>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] py-16">
        <FadeIn className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">{a.missionTitle}</h2>
          <p className="mt-5 text-xl font-semibold leading-relaxed text-indigo-50 md:text-2xl">&ldquo;{a.mission}&rdquo;</p>
        </FadeIn>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-500/5">
                  <p className="mb-2 bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] bg-clip-text text-3xl font-bold text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-500">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.06}>
                <p className="text-3xl font-bold text-[#4338CA]">
                  <Counter value={s.value} />
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-500">{s[lang]}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
