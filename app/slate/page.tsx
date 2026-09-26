"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { academics, whyUs, staff, achievements, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, DISPLAY, Micro, SectionHead, Stars, StatsBand, AchieveRow, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#16181D]/15">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Micro>{t.hero.badge}</Micro>
          <h1 className={`mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-8xl ${DISPLAY}`}>
            {t.hero.title}
            <br />
            <span className="text-[#1D4ED8]">{t.hero.titleAccent}.</span>
          </h1>
          <div className="mt-10 grid gap-8 border-t border-[#16181D]/15 pt-8 md:grid-cols-2">
            <p className="max-w-lg text-lg text-[#16181D]/60">{t.hero.sub}</p>
            <div className="flex flex-wrap items-start gap-4 md:justify-end">
              <Link href={`${BASE}/contact`} className="bg-[#1D4ED8] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#16181D]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#16181D] px-8 py-4 font-semibold transition-colors hover:bg-[#16181D] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <img src={img.hero} alt="Students learning at Sunrise" className="mt-12 h-[420px] w-full object-cover grayscale-[35%]" />
        </div>
      </section>

      <StatsBand />

      {/* 01 Academics */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="01" title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {academics.slice(0, 6).map((a) => {
              const d = pick(a, lang);
              return (
                <div key={a.icon} className="group border-t border-[#16181D]/15 pt-5">
                  <Icon name={a.icon} className="h-6 w-6 text-[#1D4ED8]" />
                  <h3 className={`mt-3 text-lg font-semibold ${DISPLAY}`}>{d.title}</h3>
                  <p className="mt-2 text-sm text-[#16181D]/60">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <Link href={`${BASE}/academics`} className="mt-10 inline-flex items-center gap-1 font-semibold text-[#1D4ED8] underline underline-offset-4 hover:text-[#16181D]">
            {t.misc.viewAll} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 02 Why us */}
      <section className="bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="02" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-px border border-[#16181D]/15 bg-[#16181D]/15 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="bg-white p-7">
                  <Icon name={w.icon} className="h-6 w-6 text-[#1D4ED8]" />
                  <h3 className={`mb-2 mt-4 font-semibold ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#16181D]/60">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 Achievements */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="03" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="border-t border-[#16181D]/15">
            {achievements.slice(0, 4).map((_, i) => (
              <AchieveRow key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 04 Staff */}
      <section className="bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="04" title={t.sections.staffTitle} sub={t.sections.staffSub} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.id} className="border-t-2 border-[#16181D] pt-5">
                  <img src={img.staff[s.photo]} alt={d.name} className="h-56 w-full object-cover grayscale" />
                  <h3 className={`mt-4 font-semibold ${DISPLAY}`}>{d.name}</h3>
                  <p className="text-sm font-semibold text-[#1D4ED8]">{d.spec}</p>
                  <p className="mt-1 text-xs text-[#16181D]/50">{d.qual}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 Reviews */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="05" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="border-t border-[#16181D]/15 pt-5">
                <Stars n={r.stars} />
                <p className={`mt-3 text-lg leading-relaxed ${DISPLAY}`}>&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-[#16181D]/50">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Gallery */}
      <section className="bg-[#F6F7F9] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="06" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px border border-[#16181D]/15 bg-[#16181D]/15 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className="h-48 w-full object-cover grayscale-[35%] transition-all hover:grayscale-0 md:h-56" />
            ))}
          </div>
          <Link href={`${BASE}/gallery`} className="mt-8 inline-flex items-center gap-1 font-semibold text-[#1D4ED8] underline underline-offset-4 hover:text-[#16181D]">
            {t.nav.gallery} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 07 FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="07" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* 08 Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead no="08" title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
