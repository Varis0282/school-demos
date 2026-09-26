"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Star, MapPin, Sun } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { faqs, achievements, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/crayon";
export const DISPLAY = "[font-family:var(--font-display)]";
// crayon palette: coral red, sunshine yellow, sky blue, leaf green
export const RED = "#E44D42";
export const YELLOW = "#F5B82E";
export const BLUE = "#3E7CB8";
export const GREEN = "#5DA271";

export function Squiggle({ color = RED, className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 ${className}`} aria-hidden>
      <path d="M2 8 Q 12 2, 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 118 8" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home, c: RED },
    { href: `${BASE}/about`, label: t.nav.about, c: BLUE },
    { href: `${BASE}/academics`, label: t.nav.academics, c: GREEN },
    { href: `${BASE}/admissions`, label: t.nav.admissions, c: YELLOW },
    { href: `${BASE}/gallery`, label: t.nav.gallery, c: RED },
    { href: `${BASE}/contact`, label: t.nav.contact, c: BLUE },
  ];
  return (
    <header className="sticky top-0 z-40 border-b-4 border-[#F5B82E] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E44D42] text-white shadow-md shadow-red-300 [transform:rotate(-6deg)]">
            <Sun className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className={`block text-lg font-bold text-[#4A3F35] ${DISPLAY}`}>
              {lang === "en" ? school.name : school.nameHi}
            </span>
            <span className="block text-[11px] font-bold text-[#3E7CB8]">
              {lang === "en" ? school.classes : school.classesHi}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-bold lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[#4A3F35]/70 transition-colors hover:text-[#E44D42]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-[#4A3F35]/40 hover:text-[#4A3F35]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#3E7CB8]/30 px-3 py-1 text-xs font-bold text-[#3E7CB8] hover:bg-[#3E7CB8]/10" />
          <Link
            href={`${BASE}/contact`}
            className={`rounded-full bg-[#E44D42] px-5 py-2.5 text-white shadow-lg shadow-red-200 transition-transform hover:scale-105 hover:rotate-1 ${DISPLAY}`}
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-dashed border-[#F5B82E] bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#FFF8ED] py-3 font-bold text-[#4A3F35]">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle className="rounded-full border-2 border-[#3E7CB8]/30 px-4 py-2 text-sm font-bold text-[#3E7CB8]" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#E44D42] px-5 py-2.5 text-center font-bold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ title, sub, color = RED }: { title: string; sub?: string; color?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold text-[#4A3F35] md:text-4xl ${DISPLAY}`}>{title}</h2>
      <Squiggle color={color} className="mx-auto mt-3" />
      {sub && <p className="mt-4 text-[#4A3F35]/60">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub, color = RED }: { title: string; sub?: string; color?: string }) {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-center">
      <div aria-hidden className="absolute -left-8 top-6 h-24 w-24 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-[#F5B82E]/25" />
      <div aria-hidden className="absolute -right-6 bottom-4 h-28 w-28 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-[#3E7CB8]/15" />
      <h1 className={`relative px-4 text-4xl font-bold text-[#4A3F35] md:text-5xl ${DISPLAY}`}>{title}</h1>
      <Squiggle color={color} className="mx-auto mt-4" />
      {sub && <p className="relative mx-auto mt-4 max-w-xl px-4 text-[#4A3F35]/60">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#F5B82E] text-[#F5B82E]" : "fill-[#4A3F35]/10 text-[#4A3F35]/10"}`} />
      ))}
    </div>
  );
}

const statColors = [RED, BLUE, GREEN, YELLOW];

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`rounded-3xl bg-white p-6 shadow-md ${i % 2 ? "[transform:rotate(1.2deg)]" : "[transform:rotate(-1.2deg)]"}`}
            style={{ borderBottom: `6px solid ${statColors[i % 4]}` }}
          >
            <p className={`text-3xl font-bold md:text-4xl ${DISPLAY}`} style={{ color: statColors[i % 4] }}>{s.value}</p>
            <p className="mt-1 text-sm font-bold text-[#4A3F35]/60">{s[lang]}</p>
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
  const c = statColors[i % 4];
  return (
    <div className={`rounded-3xl bg-white p-6 text-center shadow-md transition-transform hover:scale-[1.03] ${i % 2 ? "[transform:rotate(0.8deg)]" : "[transform:rotate(-0.8deg)]"}`}>
      <img src={img.achievements[a.photo]} alt={a.name} className="mx-auto h-24 w-24 rounded-full object-cover" style={{ border: `4px solid ${c}` }} />
      <span className="mt-3 inline-block rounded-full px-4 py-1 text-xs font-bold text-white" style={{ backgroundColor: c }}>
        {d.result}
      </span>
      <h3 className={`mt-3 font-bold text-[#4A3F35] ${DISPLAY}`}>{a.name}</h3>
      <p className="text-sm font-bold" style={{ color: c }}>{d.field}</p>
      <p className="mt-1 text-xs text-[#4A3F35]/50">{d.detail}</p>
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
        const c = statColors[i % 4];
        return (
          <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm" style={{ borderLeft: `6px solid ${c}` }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#4A3F35]"
            >
              {item.q}
              <ChevronDown className="h-5 w-5 shrink-0 transition-transform" style={{ color: c, transform: isOpen ? "rotate(180deg)" : undefined }} />
            </button>
            {isOpen && <p className="border-t border-dashed border-[#4A3F35]/15 px-5 py-4 text-[#4A3F35]/70">{item.a}</p>}
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
        <div className="rounded-3xl bg-white p-6 shadow-md" style={{ borderBottom: `6px solid ${BLUE}` }}>
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold text-[#4A3F35] ${DISPLAY}`}>
            <MapPin className="h-5 w-5 text-[#E44D42]" /> {lang === "en" ? school.name : school.nameHi}
          </h3>
          <p className="mb-4 text-[#4A3F35]/70">{lang === "en" ? school.address : school.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-[#4A3F35]/70">
            {school.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-bold text-[#4A3F35]">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className={`inline-block rounded-full bg-[#3E7CB8] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 ${DISPLAY}`}>
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl shadow-md lg:col-span-3" style={{ border: "4px solid white" }}>
        <iframe src={school.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="School location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#E44D42] py-16">
      <div aria-hidden className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#F5B82E]/30" />
      <div aria-hidden className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-white/10" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className={`text-3xl font-bold md:text-4xl ${DISPLAY}`}>{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-white/85">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className={`rounded-full bg-white px-8 py-3.5 font-bold text-[#E44D42] shadow-xl transition-transform hover:scale-105 hover:-rotate-1 ${DISPLAY}`}>
            {t.hero.cta1}
          </Link>
          <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
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
    <footer className="border-t-8 border-[#F5B82E] bg-[#4A3F35] pt-14 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5B82E] text-[#4A3F35] [transform:rotate(-6deg)]"><Sun className="h-5 w-5" /></span>
            <span className={`font-bold text-white ${DISPLAY}`}>{lang === "en" ? school.name : school.nameHi}</span>
          </div>
          <p className="text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className={`mb-3 font-bold text-[#F5B82E] ${DISPLAY}`}>{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={`mb-3 font-bold text-[#F5B82E] ${DISPLAY}`}>{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm">
            <li>{lang === "en" ? school.address : school.addressHi}</li>
            <li><a href={`tel:${school.phoneRaw}`} className="hover:text-white">{school.phone}</a></li>
            <li>{school.email}</li>
          </ul>
        </div>
        <div>
          <h4 className={`mb-3 font-bold text-[#F5B82E] ${DISPLAY}`}>{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm">
            {school.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-bold text-white/90">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {school.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl bg-white p-6 shadow-lg sm:p-8 border-b-8 border-[#F5B82E]",
  label: "mb-1.5 block text-sm font-bold text-[#4A3F35]",
  input: "w-full rounded-2xl border-2 border-[#4A3F35]/10 bg-[#FFF8ED] px-4 py-2.5 text-[#4A3F35] outline-none transition-colors placeholder:text-[#4A3F35]/35 focus:border-[#3E7CB8] focus:bg-white",
  select: "w-full rounded-2xl border-2 border-[#4A3F35]/10 bg-[#FFF8ED] px-4 py-2.5 text-[#4A3F35] outline-none focus:border-[#3E7CB8] focus:bg-white",
  dayBtn: "rounded-2xl border-2 border-[#4A3F35]/10 bg-white py-2 text-center text-[#4A3F35]/70 transition-colors hover:border-[#F5B82E]",
  dayBtnActive: "rounded-2xl border-2 border-[#E44D42] bg-[#E44D42] py-2 text-center text-white shadow-md shadow-red-200",
  slotBtn: "rounded-full border-2 border-[#4A3F35]/10 bg-white px-4 py-2 text-sm font-bold text-[#4A3F35]/70 transition-colors hover:border-[#3E7CB8]",
  slotBtnActive: "rounded-full border-2 border-[#3E7CB8] bg-[#3E7CB8] px-4 py-2 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-[#4A3F35]/40",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-200 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600",
};
