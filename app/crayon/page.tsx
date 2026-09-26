"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { academics, whyUs, staff, achievements, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, DISPLAY, RED, YELLOW, BLUE, GREEN, Squiggle, SectionHead, Stars, StatsBand, AchieveCard, FAQList, MapBlock, CTABand } from "./_ui";

const palette = [RED, BLUE, GREEN, YELLOW];

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="absolute -left-14 top-10 h-48 w-48 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-[#F5B82E]/20" />
        <div aria-hidden className="absolute -right-10 bottom-8 h-40 w-40 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-[#3E7CB8]/12" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-[#5DA271]/15 px-4 py-1.5 text-sm font-bold text-[#3F7351]">
              {t.hero.badge}
            </span>
            <h1 className={`mt-5 text-4xl font-bold leading-tight text-[#4A3F35] md:text-5xl ${DISPLAY}`}>
              {t.hero.title}
              <br />
              <span className="text-[#E44D42]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle color={YELLOW} className="mt-3" />
            <p className="mt-5 max-w-lg text-lg text-[#4A3F35]/65">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`${BASE}/contact#book`}
                className={`rounded-full bg-[#E44D42] px-8 py-3.5 font-bold text-white shadow-lg shadow-red-200 transition-transform hover:-rotate-1 hover:scale-105 ${DISPLAY}`}
              >
                {t.hero.cta1}
              </Link>
              <a
                href={`tel:${school.phoneRaw}`}
                className="flex items-center gap-2 rounded-full border-2 border-[#3E7CB8]/40 bg-white px-8 py-3.5 font-bold text-[#3E7CB8] transition-colors hover:border-[#3E7CB8]"
              >
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={img.heroAlt}
              alt="Happy children playing at Sunrise"
              className="w-full rounded-[2rem] border-8 border-white object-cover shadow-2xl [transform:rotate(1.5deg)]"
            />
            <div className="absolute -bottom-6 left-8 rounded-2xl border-4 border-white bg-[#F5B82E] px-5 py-3 shadow-xl [transform:rotate(-3deg)]">
              <p className={`text-2xl font-bold text-[#4A3F35] ${DISPLAY}`}>1:20</p>
              <p className="text-xs font-bold text-[#4A3F35]/70">{lang === "en" ? "Teacher–student ratio" : "शिक्षक–छात्र अनुपात"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Academics preview */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.academicsTitle} sub={t.sections.academicsSub} color={BLUE} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academics.slice(0, 6).map((a, i) => {
              const d = pick(a, lang);
              const c = palette[i % 4];
              return (
                <div key={a.icon} className="rounded-3xl bg-white p-6 shadow-md transition-transform hover:scale-[1.02]" style={{ borderTop: `6px solid ${c}` }}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: c }}>
                    <Icon name={a.icon} className="h-6 w-6" />
                  </span>
                  <h3 className={`mb-2 font-bold text-[#4A3F35] ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#4A3F35]/60">{d.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/academics`} className={`inline-block rounded-full bg-[#3E7CB8] px-7 py-3 font-bold text-white shadow-md transition-transform hover:scale-105 ${DISPLAY}`}>
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.whyTitle} sub={t.sections.whySub} color={GREEN} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              const c = palette[i % 4];
              return (
                <div key={w.icon} className={`rounded-3xl bg-[#FFF8ED] p-6 text-center ${i % 2 ? "[transform:rotate(0.7deg)]" : "[transform:rotate(-0.7deg)]"}`}>
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md" style={{ backgroundColor: c }}>
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className={`mb-2 font-bold text-[#4A3F35] ${DISPLAY}`}>{d.title}</h3>
                  <p className="text-sm text-[#4A3F35]/60">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.achievementsTitle} sub={t.sections.achievementsSub} color={YELLOW} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.slice(0, 3).map((_, i) => (
              <AchieveCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.staffTitle} sub={t.sections.staffSub} color={RED} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s, i) => {
              const d = pick(s, lang);
              const c = palette[i % 4];
              return (
                <div key={s.id} className="rounded-3xl bg-[#FFF8ED] p-6 text-center">
                  <img src={img.staff[s.photo]} alt={d.name} className="mx-auto h-24 w-24 rounded-full object-cover" style={{ border: `4px solid ${c}` }} />
                  <h3 className={`mt-4 font-bold text-[#4A3F35] ${DISPLAY}`}>{d.name}</h3>
                  <p className="text-sm font-bold" style={{ color: c }}>{d.spec}</p>
                  <p className="mt-1 text-xs text-[#4A3F35]/50">{d.qual}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} color={BLUE} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className="rounded-3xl bg-white p-6 shadow-md" style={{ borderLeft: `6px solid ${palette[i % 4]}` }}>
                <Stars n={r.stars} />
                <p className="mt-3 text-sm text-[#4A3F35]/70">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                <p className={`mt-4 font-bold text-[#4A3F35] ${DISPLAY}`}>{r.name}</p>
                <p className="text-xs text-[#4A3F35]/40">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.galleryTitle} sub={t.sections.gallerySub} color={GREEN} />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img
                key={g}
                src={g}
                alt={`Campus photo ${i + 1}`}
                className={`h-44 w-full rounded-2xl border-4 border-white object-cover shadow-md transition-transform hover:scale-105 md:h-52 ${i % 2 ? "[transform:rotate(1deg)]" : "[transform:rotate(-1deg)]"}`}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${BASE}/gallery`} className="font-bold text-[#3E7CB8] underline decoration-[#F5B82E] decoration-4 underline-offset-4">
              {t.nav.gallery} →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.faqTitle} sub={t.sections.faqSub} color={YELLOW} />
          <FAQList />
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.visitTitle} sub={t.sections.visitSub} color={RED} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
