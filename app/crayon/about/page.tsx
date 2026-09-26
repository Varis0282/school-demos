"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { DISPLAY, RED, YELLOW, BLUE, GREEN, PageHero, SectionHead, CTABand } from "../_ui";

const palette = [RED, BLUE, GREEN, YELLOW];

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} color={BLUE} />
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="space-y-4 text-[#4A3F35]/75">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`font-bold text-[#E44D42]`}>{a.story3}</p>
          </div>
          <img
            src={img.about}
            alt="Sunrise Public School campus"
            className="w-full rounded-[2rem] border-8 border-white object-cover shadow-2xl [transform:rotate(-1.5deg)]"
          />
        </div>
      </section>
      <section className="bg-[#3E7CB8] py-14">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className={`text-2xl font-bold md:text-3xl ${DISPLAY}`}>{a.missionTitle}</h2>
          <p className="mt-5 text-xl font-semibold leading-relaxed text-white/90 md:text-2xl">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} color={GREEN} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="rounded-3xl bg-white p-6 shadow-md" style={{ borderTop: `6px solid ${palette[i % 4]}` }}>
                <p className={`mb-2 text-3xl font-bold ${DISPLAY}`} style={{ color: palette[i % 4] }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={`mb-2 font-bold text-[#4A3F35] ${DISPLAY}`}>{v.title}</h3>
                <p className="text-sm text-[#4A3F35]/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
