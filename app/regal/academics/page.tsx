"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { academics, achievements } from "@/lib/content";
import Icon from "@/components/Icon";
import { DISPLAY, PageHero, SectionHead, AchieveCard, CTABand } from "../_ui";

export default function Academics() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.academics} title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {academics.map((a, i) => {
              const d = pick(a, lang);
              return (
                <div key={a.icon} className="grid items-center gap-4 px-2 py-7 transition-colors hover:bg-white/[0.03] md:grid-cols-12">
                  <span className={`text-xl text-[#C6B896]/70 md:col-span-1 ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex h-11 w-11 items-center justify-center border border-[#C6B896]/40 text-[#C6B896] md:col-span-1">
                    <Icon name={a.icon} className="h-5 w-5" />
                  </span>
                  <h3 className={`text-xl font-semibold text-white md:col-span-4 ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#B9C2D0]/70 md:col-span-6">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#0B111D] py-20">
        <div className="mx-auto grid max-w-6xl gap-px bg-white/10 px-4 md:grid-cols-2">
          <img src={img.aboutAlt} alt="Teacher guiding students" className="h-80 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0" />
          <img src={img.heroAlt} alt="Children playing outdoors" className="h-80 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0" />
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="★" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((_, i) => (
              <AchieveCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
