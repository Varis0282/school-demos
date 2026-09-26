"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { academics, whyUs, staff, achievements, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, FadeIn, FloatingShapes, SectionHead, Stars, StatsBand, AchieveCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <FloatingShapes />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-gradient-to-r from-[#4338CA]/10 to-[#0EA5E9]/10 px-4 py-1.5 text-sm font-bold text-[#4338CA]"
            >
              {t.hero.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl"
            >
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-lg text-lg text-slate-500"
            >
              {t.hero.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href={`${BASE}/contact`}
                className="rounded-full bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-8 py-3.5 font-bold text-white shadow-xl shadow-indigo-500/30 transition-transform hover:scale-105"
              >
                {t.hero.cta1}
              </Link>
              <a
                href={`tel:${school.phoneRaw}`}
                className="flex items-center gap-2 rounded-full border-2 border-indigo-200 bg-white/70 px-8 py-3.5 font-bold text-[#4338CA] backdrop-blur transition-colors hover:border-[#4338CA]"
              >
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#4338CA]/20 to-[#0EA5E9]/20 blur-2xl" aria-hidden />
            <img src={img.hero} alt="Students learning at Sunrise" className="relative w-full rounded-[2rem] object-cover shadow-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-3 shadow-xl sm:left-6"
            >
              <p className="text-2xl font-bold text-[#4338CA]">1:20</p>
              <p className="text-xs font-semibold text-slate-500">{lang === "en" ? "Teacher–student ratio" : "शिक्षक–छात्र अनुपात"}</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-4 rounded-2xl bg-white px-5 py-3 shadow-xl"
            >
              <p className="text-2xl font-bold text-[#F59E0B]">4.7★</p>
              <p className="text-xs font-semibold text-slate-500">{lang === "en" ? "Parent rating" : "अभिभावक रेटिंग"}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsBand />

      {/* Academics preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.academics} title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academics.slice(0, 6).map((a, i) => {
              const d = pick(a, lang);
              return (
                <FadeIn key={a.icon} delay={i * 0.06}>
                  <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-500/5">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] text-white">
                      <Icon name={a.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mb-2 font-bold text-slate-900">{d.title}</h3>
                    <p className="text-sm text-slate-500">{d.desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/academics`} className="font-bold text-[#4338CA] hover:underline">
              {t.misc.viewAll} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <FadeIn key={w.icon} delay={i * 0.08}>
                  <div className="h-full rounded-3xl bg-gradient-to-b from-[#F5F9FF] to-white p-6 text-center ring-1 ring-indigo-100">
                    <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] text-white shadow-lg shadow-indigo-500/25">
                      <Icon name={w.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mb-2 font-bold text-slate-900">{d.title}</h3>
                    <p className="text-sm text-slate-500">{d.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="★" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.slice(0, 3).map((_, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <AchieveCard i={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.staffTitle} sub={t.sections.staffSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s, i) => {
              const d = pick(s, lang);
              return (
                <FadeIn key={s.id} delay={i * 0.07}>
                  <motion.div whileHover={{ y: -6 }} className="rounded-3xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-500/5">
                    <img src={img.staff[s.photo]} alt={d.name} className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-[#0EA5E9]/20" />
                    <h3 className="mt-4 font-bold text-slate-900">{d.name}</h3>
                    <p className="text-sm font-bold text-[#4338CA]">{d.spec}</p>
                    <p className="mt-1 text-xs text-slate-400">{d.qual}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-500/5">
                  <Stars n={r.stars} />
                  <p className="mt-3 text-sm text-slate-600">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                  <p className="mt-4 font-bold text-[#4338CA]">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.area}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <FadeIn key={g} delay={i * 0.05}>
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  src={g}
                  alt={`Campus photo ${i + 1}`}
                  className="h-44 w-full rounded-3xl object-cover shadow-md md:h-52"
                />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-8 text-center">
            <Link href={`${BASE}/gallery`} className="font-bold text-[#4338CA] hover:underline">
              {t.nav.gallery} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Map */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
