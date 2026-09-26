"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, Plus, Minus, MapPin, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { faqs, achievements, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/slate";
export const DISPLAY = "[font-family:var(--font-display)]";
export const COBALT = "#1D4ED8";

export function Micro({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#16181D]/50">{children}</p>;
}

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
    <header className="sticky top-0 z-40 border-b-2 border-[#16181D] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-baseline gap-2">
          <span className={`text-xl font-bold tracking-tight ${DISPLAY}`}>
            {lang === "en" ? school.name : school.nameHi}
            <span className="text-[#1D4ED8]">.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="underline-offset-4 transition-colors hover:text-[#1D4ED8] hover:underline">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-[#16181D]/40 hover:text-[#16181D]">← All demos</Link>
          <LangToggle className="border-2 border-[#16181D] px-3 py-1 text-xs font-bold hover:bg-[#16181D] hover:text-white" />
          <Link href={`${BASE}/contact`} className="bg-[#1D4ED8] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#16181D]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#16181D]/15 bg-white px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#16181D]/10 py-3 font-medium">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <LangToggle className="border-2 border-[#16181D] px-4 py-2 text-sm font-bold" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 bg-[#1D4ED8] px-5 py-2.5 text-center font-semibold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ no, title, sub }: { no: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 border-t-2 border-[#16181D] pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className={`text-3xl font-semibold md:text-4xl ${DISPLAY}`}>
          <span className="mr-3 text-lg text-[#1D4ED8]">{no}</span>
          {title}
        </h2>
        {sub && <p className="max-w-md text-sm text-[#16181D]/60">{sub}</p>}
      </div>
    </div>
  );
}

export function PageHero({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-[#16181D]/15 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <Micro>{label}</Micro>
        <h1 className={`mt-4 text-5xl font-semibold tracking-tight md:text-6xl ${DISPLAY}`}>
          {title}
          <span className="text-[#1D4ED8]">.</span>
        </h1>
        {sub && <p className="mt-5 max-w-2xl text-lg text-[#16181D]/60">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <p className="text-sm tracking-[0.2em] text-[#1D4ED8]" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
      <span className="text-[#16181D]/20">{"★".repeat(5 - n)}</span>
    </p>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y-2 border-[#16181D]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[#16181D]/15 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value} className="px-4 py-10 text-center">
            <p className={`text-4xl font-semibold md:text-5xl ${DISPLAY}`}>{s.value}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#16181D]/50">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AchieveRow({ i }: { i: number }) {
  const { lang } = useLang();
  const a = achievements[i];
  const d = a[lang];
  return (
    <div className="grid items-center gap-4 border-b border-[#16181D]/15 py-5 md:grid-cols-12">
      <span className={`text-lg text-[#1D4ED8] md:col-span-1 ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</span>
      <img src={img.achievements[a.photo]} alt={a.name} className="h-14 w-14 rounded-full object-cover grayscale md:col-span-1" />
      <h3 className={`text-lg font-semibold md:col-span-3 ${DISPLAY}`}>{a.name}</h3>
      <p className="text-sm text-[#16181D]/60 md:col-span-4">{d.field}</p>
      <p className="font-bold text-[#1D4ED8] md:col-span-2">{d.result}</p>
      <p className="text-xs text-[#16181D]/50 md:col-span-1">{d.detail}</p>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-[#16181D]/15">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#16181D]/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold"
            >
              {item.q}
              {isOpen ? <Minus className="h-5 w-5 shrink-0 text-[#1D4ED8]" /> : <Plus className="h-5 w-5 shrink-0 text-[#1D4ED8]" />}
            </button>
            {isOpen && <p className="pb-5 pr-10 text-[#16181D]/70">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <Micro>{lang === "en" ? school.city : "इंदौर"}</Micro>
        <h3 className={`mt-3 text-2xl font-semibold ${DISPLAY}`}>{lang === "en" ? school.name : school.nameHi}</h3>
        <p className="mt-3 text-[#16181D]/70">{lang === "en" ? school.address : school.addressHi}</p>
        <div className="mt-5 space-y-1.5 border-t border-[#16181D]/15 pt-5 text-sm text-[#16181D]/70">
          {school.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-semibold text-[#16181D]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 font-semibold text-[#1D4ED8] underline underline-offset-4 hover:text-[#16181D]">
          {t.misc.getDirections} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="border-2 border-[#16181D] lg:col-span-3">
        <iframe src={school.mapEmbed} className="h-72 w-full grayscale lg:h-full" loading="lazy" title="School location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#16181D] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <Micro>
          <span className="text-white/50">{t.nav.admissions}</span>
        </Micro>
        <h2 className={`mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl ${DISPLAY}`}>
          {t.sections.ctaTitle}
        </h2>
        <p className="mt-4 max-w-xl text-white/60">{t.sections.ctaSub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={`${BASE}/contact`} className="bg-[#1D4ED8] px-9 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[#16181D]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 border border-white/30 px-9 py-4 font-semibold text-white transition-colors hover:border-white">
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
    <footer className="border-t-2 border-[#16181D] pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 md:grid-cols-4">
        <div>
          <p className={`text-xl font-bold ${DISPLAY}`}>
            {lang === "en" ? school.name : school.nameHi}
            <span className="text-[#1D4ED8]">.</span>
          </p>
          <p className="mt-2 text-sm text-[#16181D]/60">{t.footer.tagline}</p>
        </div>
        <div>
          <Micro>{t.footer.quick}</Micro>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline-offset-4 hover:text-[#1D4ED8] hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Micro>{t.footer.contact}</Micro>
          <ul className="mt-4 space-y-2 text-sm text-[#16181D]/70">
            <li>{lang === "en" ? school.address : school.addressHi}</li>
            <li><a href={`tel:${school.phoneRaw}`} className="underline-offset-4 hover:text-[#1D4ED8] hover:underline">{school.phone}</a></li>
            <li>{school.email}</li>
          </ul>
        </div>
        <div>
          <Micro>{t.footer.hours}</Micro>
          <ul className="mt-4 space-y-2 text-sm text-[#16181D]/70">
            {school.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-[#16181D]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#16181D]/15 py-5 text-center text-xs text-[#16181D]/50">
        © {new Date().getFullYear()} {school.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border-2 border-[#16181D] p-6 sm:p-9",
  label: "mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#16181D]/60",
  input: "w-full border-0 border-b-2 border-[#16181D]/20 bg-transparent px-0 py-2.5 outline-none transition-colors placeholder:text-[#16181D]/30 focus:border-[#1D4ED8]",
  select: "w-full border-0 border-b-2 border-[#16181D]/20 bg-transparent px-0 py-2.5 outline-none focus:border-[#1D4ED8]",
  dayBtn: "border border-[#16181D]/20 py-2 text-center text-[#16181D]/70 transition-colors hover:border-[#16181D]",
  dayBtnActive: "border border-[#1D4ED8] bg-[#1D4ED8] py-2 text-center text-white",
  slotBtn: "border border-[#16181D]/20 px-4 py-2 text-sm font-medium text-[#16181D]/70 transition-colors hover:border-[#16181D]",
  slotBtnActive: "border border-[#16181D] bg-[#16181D] px-4 py-2 text-sm font-medium text-white",
  groupTitle: "mb-2 mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#16181D]/40",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90",
  success: "border-l-4 border-green-600 bg-green-50 px-4 py-3 text-sm font-medium text-green-800",
  error: "border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm font-medium text-red-700",
};
