"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Clock, Sun, Menu, X, ChevronDown, Star, MapPin, BadgeCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { faqs, achievements, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/beacon";
const GREEN = "text-[#1E5B3F]";
export const DISPLAY = "[font-family:var(--font-display)]";

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/academics`, label: t.nav.academics },
    { href: `${BASE}/admissions`, label: t.nav.admissions },
    { href: `${BASE}/gallery`, label: t.nav.gallery },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-[#1E5B3F] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4">
            <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5 text-[#D9A441]" /> {school.phone}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#D9A441]" /> {t.hero.open}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E5B3F] text-[#D9A441]">
            <Sun className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className={`block text-lg font-extrabold ${GREEN} ${DISPLAY}`}>
              {lang === "en" ? school.name : school.nameHi}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#D9A441]">
              {lang === "en" ? school.classes : school.classesHi}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#1E5B3F]">
              {l.label}
            </Link>
          ))}
          <Link
            href={`${BASE}/contact#book`}
            className="rounded-lg bg-[#D9A441] px-5 py-2.5 text-[#1E3A2C] shadow-md shadow-amber-500/25 transition-all hover:bg-[#c4922f]"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="mt-3 block rounded-lg bg-[#D9A441] px-5 py-3 text-center font-semibold text-[#1E3A2C]">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#D9A441]">{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${DISPLAY} ${light ? "text-white" : GREEN}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-emerald-100/70" : "text-slate-500"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-br from-[#1E5B3F] to-[#123526] py-16 text-center text-white">
      <h1 className={`px-4 text-4xl font-extrabold md:text-5xl ${DISPLAY}`}>{title}</h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#D9A441]" />
      {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-emerald-100/80">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y-4 border-[#D9A441]/70 bg-[#1E5B3F] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value}>
            <p className={`text-4xl font-extrabold text-[#D9A441] ${DISPLAY}`}>{s.value}</p>
            <p className="mt-1 text-sm font-medium text-emerald-100/80">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AchieveCard({ i }: { i: number }) {
  const { lang } = useLang();
  const a = achievements[i];
  const d = a[lang];
  return (
    <div className="group overflow-hidden rounded-2xl border border-emerald-900/10 bg-white text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative pt-8">
        <img src={img.achievements[a.photo]} alt={a.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#D9A441]/40 object-cover" />
        <span className="absolute left-1/2 top-[104px] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#D9A441] px-3 py-0.5 text-xs font-bold text-[#1E3A2C] shadow">
          {d.result}
        </span>
      </div>
      <div className="px-4 pb-6 pt-5">
        <h3 className={`font-extrabold ${GREEN}`}>{a.name}</h3>
        <p className="text-sm font-semibold text-slate-600">{d.field}</p>
        <p className="mt-1 text-xs text-slate-500">{d.detail}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800"
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#D9A441] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-emerald-900/10 px-5 py-4 text-slate-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm">
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold ${GREEN}`}>
            <MapPin className="h-5 w-5 text-[#D9A441]" /> {lang === "en" ? school.name : school.nameHi}
          </h3>
          <p className="mb-4 text-slate-600">{lang === "en" ? school.address : school.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-slate-600">
            {school.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#1E5B3F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#123526]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-emerald-900/10 shadow-sm lg:col-span-3">
        <iframe src={school.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="School location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1E5B3F] to-[#123526] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className={`text-3xl font-extrabold md:text-4xl ${DISPLAY}`}>{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-emerald-100/80">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="rounded-lg bg-[#D9A441] px-8 py-3.5 font-bold text-[#1E3A2C] shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TrustPoint({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
      <BadgeCheck className="h-4 w-4 text-[#1E5B3F]" /> {text}
    </span>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/academics`, label: t.nav.academics },
    { href: `${BASE}/admissions`, label: t.nav.admissions },
    { href: `${BASE}/gallery`, label: t.nav.gallery },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="bg-[#10291D] pt-14 text-emerald-100/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9A441] text-[#1E3A2C]"><Sun className="h-5 w-5" /></span>
            <span className={`font-extrabold text-white ${DISPLAY}`}>{lang === "en" ? school.name : school.nameHi}</span>
          </div>
          <p className="text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#D9A441]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm">
            <li>{lang === "en" ? school.address : school.addressHi}</li>
            <li><a href={`tel:${school.phoneRaw}`} className="hover:text-[#D9A441]">{school.phone}</a></li>
            <li>{school.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm">
            {school.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-white/90">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-emerald-100/50">
        © {new Date().getFullYear()} {school.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#1E5B3F]",
  input: "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#D9A441] focus:ring-2 focus:ring-amber-200",
  select: "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 outline-none focus:border-[#D9A441] focus:ring-2 focus:ring-amber-200",
  dayBtn: "rounded-lg border border-slate-200 bg-white py-2 text-center text-slate-600 transition-colors hover:border-[#D9A441]",
  dayBtnActive: "rounded-lg border border-[#1E5B3F] bg-[#1E5B3F] py-2 text-center text-white shadow-md shadow-emerald-900/20",
  slotBtn: "rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-[#D9A441]",
  slotBtnActive: "rounded-lg border border-[#D9A441] bg-[#D9A441] px-4 py-2 text-sm font-semibold text-[#1E3A2C]",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};
