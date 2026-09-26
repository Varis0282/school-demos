"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { academics, whyUs, staff, achievements, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, DISPLAY, Eyebrow, SectionHead, Stars, StatsBand, AchieveCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Eyebrow>{t.hero.badge}</Eyebrow>
            <h1 className={`text-4xl font-semibold leading-tight text-[#E8DCC3] md:text-6xl ${DISPLAY}`}>
              {t.hero.title}
              <br />
              <span className="italic text-white">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#B9C2D0]/85">{t.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="bg-[#C6B896] px-8 py-3.5 font-medium text-[#101828] transition-colors hover:bg-[#E8DCC3]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 border border-white/25 px-8 py-3.5 font-medium text-white transition-colors hover:border-white/60">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#C6B896]/70">{t.hero.open}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-[#C6B896]/30" aria-hidden />
            <img src={img.hero} alt="Students learning at Sunrise" className="relative w-full object-cover" />
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Academics preview — numbered rows */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.academics} title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {academics.slice(0, 6).map((a, i) => {
              const d = pick(a, lang);
              return (
                <div key={a.icon} className="group grid items-center gap-4 px-2 py-6 transition-colors hover:bg-white/[0.03] md:grid-cols-12">
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
          <div className="mt-10 text-center">
            <Link href={`${BASE}/academics`} className="text-sm uppercase tracking-[0.2em] text-[#C6B896] underline decoration-[#C6B896]/40 underline-offset-8 hover:text-[#E8DCC3]">
              {t.misc.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-white/10 bg-[#0B111D] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="✦" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="bg-[#0B111D] p-8 transition-colors hover:bg-[#101828]">
                  <Icon name={w.icon} className="h-7 w-7 text-[#C6B896]" />
                  <h3 className={`mb-2 mt-5 text-xl font-semibold text-[#E8DCC3] ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#B9C2D0]/70">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="★" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.slice(0, 3).map((_, i) => (
              <AchieveCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="border-y border-white/10 bg-[#0B111D] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.staffTitle} sub={t.sections.staffSub} />
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.id} className="group bg-[#0B111D] p-7 text-center">
                  <img src={img.staff[s.photo]} alt={d.name} className="mx-auto h-28 w-28 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                  <h3 className={`mt-5 text-lg font-semibold text-white ${DISPLAY}`}>{d.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#C6B896]">{d.spec}</p>
                  <p className="mt-2 text-xs text-[#B9C2D0]/60">{d.qual}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="flex flex-col border border-white/10 bg-[#0B111D] p-7">
                <Stars n={r.stars} />
                <p className={`mt-4 flex-1 text-lg italic leading-relaxed text-[#B9C2D0]/90 ${DISPLAY}`}>&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                <p className="mt-5 font-medium text-[#E8DCC3]">{r.name}</p>
                <p className="text-xs uppercase tracking-wider text-[#B9C2D0]/40">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img
                key={g}
                src={g}
                alt={`Campus photo ${i + 1}`}
                className="h-48 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-56"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/gallery`} className="text-sm uppercase tracking-[0.2em] text-[#C6B896] underline decoration-[#C6B896]/40 underline-offset-8 hover:text-[#E8DCC3]">
              {t.nav.gallery}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#0B111D] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Map */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
