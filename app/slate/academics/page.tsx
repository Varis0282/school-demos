"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { academics, achievements } from "@/lib/content";
import Icon from "@/components/Icon";
import { DISPLAY, PageHero, SectionHead, AchieveRow, CTABand } from "../_ui";

export default function Academics() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero label={t.nav.academics} title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="border-t border-[#16181D]/15">
            {academics.map((a, i) => {
              const d = pick(a, lang);
              return (
                <div key={a.icon} className="grid items-center gap-4 border-b border-[#16181D]/15 py-6 md:grid-cols-12">
                  <span className={`text-lg text-[#1D4ED8] md:col-span-1 ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</span>
                  <Icon name={a.icon} className="h-6 w-6 text-[#16181D] md:col-span-1" />
                  <h3 className={`text-xl font-semibold md:col-span-4 ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#16181D]/60 md:col-span-6">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#F6F7F9] py-16">
        <div className="mx-auto grid max-w-6xl gap-px border border-[#16181D]/15 bg-[#16181D]/15 px-4 md:grid-cols-2">
          <img src={img.aboutAlt} alt="Teacher guiding students" className="h-80 w-full object-cover grayscale-[35%]" />
          <img src={img.heroAlt} alt="Children playing outdoors" className="h-80 w-full object-cover grayscale-[35%]" />
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="02" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="border-t border-[#16181D]/15">
            {achievements.map((_, i) => (
              <AchieveRow key={i} i={i} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
