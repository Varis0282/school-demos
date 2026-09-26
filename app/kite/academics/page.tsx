"use client";

import { motion } from "framer-motion";
import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { academics, achievements } from "@/lib/content";
import Icon from "@/components/Icon";
import { FadeIn, PageHero, SectionHead, AchieveCard, CTABand } from "../_ui";

export default function Academics() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {academics.map((a, i) => {
              const d = pick(a, lang);
              return (
                <FadeIn key={a.icon} delay={(i % 2) * 0.07}>
                  <motion.div whileHover={{ y: -4 }} className="flex h-full gap-5 rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-500/5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] text-white">
                      <Icon name={a.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <h3 className="mb-1.5 font-bold text-slate-900">{d.title}</h3>
                      <p className="text-sm text-slate-500">{d.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <FadeIn>
            <img src={img.aboutAlt} alt="Teacher guiding students" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <img src={img.heroAlt} alt="Children playing outdoors" className="h-72 w-full rounded-3xl object-cover shadow-lg" />
          </FadeIn>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="★" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((_, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.07}>
                <AchieveCard i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
