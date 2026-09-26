"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { academics, achievements } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, AchieveCard, CTABand } from "../_ui";

export default function Academics() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {academics.map((a) => {
              const d = pick(a, lang);
              return (
                <div key={a.icon} className="flex gap-5 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1E5B3F] text-[#D9A441]">
                    <Icon name={a.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-extrabold text-[#1E5B3F]">{d.title}</h3>
                    <p className="text-sm text-slate-600">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#EFF5F0] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
          <img src={img.aboutAlt} alt="Teacher with students" className="w-full rounded-3xl object-cover shadow-lg" />
          <img src={img.heroAlt} alt="Children playing outdoors" className="w-full rounded-3xl object-cover shadow-lg" />
        </div>
      </section>
      <section className="py-16">
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
