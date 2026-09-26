"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { DISPLAY, PageHero, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="space-y-4 text-slate-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-semibold text-[#1E5B3F]">{a.story3}</p>
          </div>
          <div className="relative">
            <img src={img.about} alt="Sunrise Public School campus" className="w-full rounded-3xl object-cover shadow-xl" />
            <div className="absolute -bottom-5 right-6 rounded-2xl bg-[#D9A441] px-5 py-3 shadow-lg">
              <p className={`text-2xl font-extrabold text-[#1E3A2C] ${DISPLAY}`}>{stats[1].value}</p>
              <p className="text-xs font-semibold text-[#1E3A2C]/80">{stats[1][lang]}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EFF5F0] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionHead title={a.missionTitle} />
          <p className={`text-xl font-bold leading-relaxed text-[#1E5B3F] md:text-2xl ${DISPLAY}`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
                <p className={`mb-2 text-3xl font-extrabold text-[#D9A441] ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mb-2 font-extrabold text-[#1E5B3F]">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
