"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { academics, achievements } from "@/lib/content";
import Icon from "@/components/Icon";
import { DISPLAY, RED, YELLOW, BLUE, GREEN, PageHero, SectionHead, AchieveCard, CTABand } from "../_ui";

const palette = [RED, BLUE, GREEN, YELLOW];

export default function Academics() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.academicsTitle} sub={t.sections.academicsSub} color={GREEN} />
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {academics.map((a, i) => {
              const d = pick(a, lang);
              const c = palette[i % 4];
              return (
                <div key={a.icon} className="flex gap-5 rounded-3xl bg-white p-6 shadow-md" style={{ borderLeft: `6px solid ${c}` }}>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: c }}>
                    <Icon name={a.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className={`mb-1.5 font-bold text-[#4A3F35] ${DISPLAY}`}>{d.title}</h3>
                    <p className="text-sm text-[#4A3F35]/60">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <img src={img.aboutAlt} alt="Teacher guiding students" className="h-72 w-full rounded-[2rem] border-8 border-[#FFF8ED] object-cover shadow-lg [transform:rotate(-1deg)]" />
          <img src={img.heroAlt} alt="Children playing outdoors" className="h-72 w-full rounded-[2rem] border-8 border-[#FFF8ED] object-cover shadow-lg [transform:rotate(1deg)]" />
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} color={YELLOW} />
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
