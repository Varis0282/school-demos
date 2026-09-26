"use client";

import Link from "next/link";
import { Phone, ShieldCheck, Bus, Users } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { academics, whyUs, staff, achievements, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, DISPLAY, SectionHead, Stars, StatsBand, AchieveCard, FAQList, MapBlock, CTABand, TrustPoint } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#EFF5F0] to-[#FBFAF6]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E5B3F]/20 bg-white px-4 py-1.5 text-sm font-semibold text-[#1E5B3F]">
              <span className="h-2 w-2 rounded-full bg-[#D9A441]" /> {t.hero.badge}
            </span>
            <h1 className={`mt-5 text-4xl font-extrabold leading-tight text-[#1E5B3F] md:text-5xl ${DISPLAY}`}>
              {t.hero.title} <span className="text-[#D9A441]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="rounded-lg bg-[#1E5B3F] px-7 py-3.5 font-bold text-white shadow-lg shadow-emerald-900/20 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 rounded-lg border-2 border-[#1E5B3F]/30 bg-white px-7 py-3.5 font-bold text-[#1E5B3F] transition-colors hover:border-[#1E5B3F]">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {whyUs.slice(0, 3).map((w) => (
                <TrustPoint key={w.icon} text={pick(w, lang).title} />
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Students learning in a Sunrise classroom" className="w-full rounded-3xl object-cover shadow-2xl" />
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <span className={`text-3xl font-extrabold text-[#1E5B3F] ${DISPLAY}`}>1:20</span>
              <span className="text-xs font-semibold leading-tight text-slate-500">
                {lang === "en" ? "Teacher–Student\nRatio" : "शिक्षक–छात्र\nअनुपात"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Academics preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.academics} title={t.sections.academicsTitle} sub={t.sections.academicsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academics.slice(0, 6).map((a) => {
              const d = pick(a, lang);
              return (
                <div key={a.icon} className="group rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E5B3F]/10 text-[#1E5B3F] transition-colors group-hover:bg-[#1E5B3F] group-hover:text-[#D9A441]">
                    <Icon name={a.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 font-extrabold text-[#1E5B3F]">{d.title}</h3>
                  <p className="text-sm text-slate-600">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/academics`} className="font-bold text-[#1E5B3F] underline decoration-[#D9A441] decoration-2 underline-offset-4 hover:text-[#123526]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#EFF5F0] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="✓" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D9A441]/15 text-[#1E5B3F]">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mb-2 font-extrabold text-[#1E5B3F]">{d.title}</h3>
                  <p className="text-sm text-slate-600">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="★" title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.slice(0, 3).map((_, i) => (
              <AchieveCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff preview */}
      <section className="bg-[#1E5B3F] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead light title={t.sections.staffTitle} sub={t.sections.staffSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.id} className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                  <img src={img.staff[s.photo]} alt={d.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#D9A441]/50 object-cover" />
                  <h3 className="mt-4 font-extrabold text-white">{d.name}</h3>
                  <p className="text-sm font-semibold text-[#D9A441]">{d.spec}</p>
                  <p className="mt-1 text-xs text-emerald-100/70">{d.qual}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety strip */}
      <section className="border-b border-emerald-900/10 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4">
          {[
            { icon: ShieldCheck, en: "CCTV in every classroom", hi: "हर कक्षा में CCTV" },
            { icon: Bus, en: "GPS buses with lady attendant", hi: "महिला परिचारिका सहित GPS बसें" },
            { icon: Users, en: "Verified staff only", hi: "केवल सत्यापित स्टाफ" },
          ].map((s) => (
            <span key={s.en} className="flex items-center gap-2 font-semibold text-[#1E5B3F]">
              <s.icon className="h-5 w-5 text-[#D9A441]" /> {lang === "en" ? s.en : s.hi}
            </span>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm text-slate-600">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                <p className="mt-4 font-bold text-[#1E5B3F]">{r.name}</p>
                <p className="text-xs text-slate-400">{r.area}</p>
              </div>
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
              <img key={g} src={g} alt={`Campus photo ${i + 1}`} className="h-44 w-full rounded-2xl object-cover shadow-sm transition-transform hover:scale-[1.02] md:h-52" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${BASE}/gallery`} className="font-bold text-[#1E5B3F] underline decoration-[#D9A441] decoration-2 underline-offset-4">
              {t.nav.gallery} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#EFF5F0] py-20">
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
