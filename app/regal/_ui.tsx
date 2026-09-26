"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Star, MapPin, Landmark } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { faqs, achievements, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/regal";
export const DISPLAY = "[font-family:var(--font-display)]";
// regal palette: charcoal navy + champagne
export const CHAMPAGNE = "#E8DCC3";
export const CHAMPAGNE_DIM = "#C6B896";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6B896]">
      <span className="h-px w-8 bg-[#C6B896]/50" aria-hidden />
      {children}
      <span className="h-px w-8 bg-[#C6B896]/50" aria-hidden />
    </p>
  );
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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101828]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-[#C6B896]/60 text-[#E8DCC3]">
            <Landmark className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className={`block text-xl font-semibold tracking-wide text-[#E8DCC3] ${DISPLAY}`}>
              {lang === "en" ? school.name : school.nameHi}
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#C6B896]/80">
              {lang === "en" ? school.classes : school.classesHi}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] font-medium uppercase tracking-wider text-[#B9C2D0] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#E8DCC3]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-[11px] normal-case tracking-normal text-white/30 hover:text-white/60">← All demos</Link>
          <LangToggle className="border border-[#C6B896]/40 px-3 py-1 text-xs text-[#E8DCC3] hover:bg-[#C6B896]/10" />
          <Link
            href={`${BASE}/contact#book`}
            className="border border-[#C6B896] bg-transparent px-5 py-2.5 text-[#E8DCC3] transition-colors hover:bg-[#C6B896] hover:text-[#101828]"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-[#E8DCC3] lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#101828] px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 font-medium uppercase tracking-wider text-[#B9C2D0]">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <LangToggle className="border border-[#C6B896]/40 px-4 py-2 text-sm text-[#E8DCC3]" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 border border-[#C6B896] px-5 py-2.5 text-center text-[#E8DCC3]">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl font-semibold text-[#E8DCC3] md:text-5xl ${DISPLAY}`}>{title}</h2>
      {sub && <p className="mt-4 text-[#B9C2D0]/80">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-white/10 py-20 text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={`px-4 text-4xl font-semibold text-[#E8DCC3] md:text-6xl ${DISPLAY}`}>{title}</h1>
      {sub && <p className="mx-auto mt-5 max-w-xl px-4 text-[#B9C2D0]/80">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#C6B896] text-[#C6B896]" : "fill-white/10 text-white/10"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-white/10 bg-[#0B111D]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value} className="px-4 py-12 text-center">
            <p className={`text-4xl font-semibold text-[#E8DCC3] md:text-5xl ${DISPLAY}`}>{s.value}</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#B9C2D0]/60">{s[lang]}</p>
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
    <div className="group border border-white/10 bg-[#0B111D] p-8 text-center transition-colors hover:border-[#C6B896]/50">
      <img
        src={img.achievements[a.photo]}
        alt={a.name}
        className="mx-auto h-24 w-24 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        style={{ border: "1px solid rgba(198,184,150,.5)", padding: "3px" }}
      />
      <p className={`mt-5 text-2xl font-semibold text-[#E8DCC3] ${DISPLAY}`}>{d.result}</p>
      <h3 className="mt-2 font-medium tracking-wide text-white">{a.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#C6B896]/80">{d.field}</p>
      <p className="mt-2 text-xs text-[#B9C2D0]/60">{d.detail}</p>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-2 py-5 text-left font-medium text-white"
            >
              <span className="flex items-baseline gap-4">
                <span className={`text-sm text-[#C6B896] ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</span>
                {item.q}
              </span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#C6B896] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="px-2 pb-5 pl-12 text-[#B9C2D0]/80">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-5">
      <div className="bg-[#0B111D] p-8 lg:col-span-2">
        <h3 className={`mb-4 flex items-center gap-2 text-2xl font-semibold text-[#E8DCC3] ${DISPLAY}`}>
          <MapPin className="h-5 w-5 text-[#C6B896]" /> {lang === "en" ? school.name : school.nameHi}
        </h3>
        <p className="mb-5 text-[#B9C2D0]/80">{lang === "en" ? school.address : school.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-[#B9C2D0]/70">
          {school.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-medium text-white">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={school.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#C6B896] px-6 py-2.5 text-sm text-[#E8DCC3] transition-colors hover:bg-[#C6B896] hover:text-[#101828]">
          {t.misc.getDirections} →
        </a>
      </div>
      <div className="bg-[#0B111D] lg:col-span-3">
        <iframe src={school.mapEmbed} className="h-72 w-full opacity-80 grayscale invert lg:h-full" loading="lazy" title="School location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="border-t border-white/10 bg-[#0B111D] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Eyebrow>{t.nav.admissions}</Eyebrow>
        <h2 className={`text-3xl font-semibold text-[#E8DCC3] md:text-5xl ${DISPLAY}`}>{t.sections.ctaTitle}</h2>
        <p className="mt-4 text-[#B9C2D0]/80">{t.sections.ctaSub}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="bg-[#C6B896] px-9 py-3.5 font-medium text-[#101828] transition-colors hover:bg-[#E8DCC3]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 border border-white/25 px-9 py-3.5 font-medium text-white transition-colors hover:border-white/60">
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
    <footer className="border-t border-white/10 bg-[#0B111D] pt-16 text-[#B9C2D0]/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-[#C6B896]/60 text-[#E8DCC3]"><Landmark className="h-4 w-4" /></span>
            <span className={`text-lg font-semibold text-[#E8DCC3] ${DISPLAY}`}>{lang === "en" ? school.name : school.nameHi}</span>
          </div>
          <p className="text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C6B896]">{t.footer.quick}</h4>
          <ul className="space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#E8DCC3]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C6B896]">{t.footer.contact}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{lang === "en" ? school.address : school.addressHi}</li>
            <li><a href={`tel:${school.phoneRaw}`} className="hover:text-[#E8DCC3]">{school.phone}</a></li>
            <li>{school.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C6B896]">{t.footer.hours}</h4>
          <ul className="space-y-2.5 text-sm">
            {school.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-medium text-white/90">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[#B9C2D0]/40">
        © {new Date().getFullYear()} {school.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border border-white/10 bg-[#0B111D] p-6 sm:p-9",
  label: "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#C6B896]",
  input: "w-full border border-white/15 bg-[#101828] px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#C6B896]",
  select: "w-full border border-white/15 bg-[#101828] px-4 py-3 text-white outline-none focus:border-[#C6B896]",
  dayBtn: "border border-white/15 bg-[#101828] py-2 text-center text-[#B9C2D0]/80 transition-colors hover:border-[#C6B896]/60",
  dayBtnActive: "border border-[#C6B896] bg-[#C6B896] py-2 text-center text-[#101828]",
  slotBtn: "border border-white/15 bg-[#101828] px-4 py-2 text-sm text-[#B9C2D0]/80 transition-colors hover:border-[#C6B896]/60",
  slotBtnActive: "border border-[#C6B896] bg-[#C6B896] px-4 py-2 text-sm font-medium text-[#101828]",
  groupTitle: "mb-2 mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90",
  success: "border border-green-700/50 bg-green-900/20 px-4 py-3 text-sm font-medium text-green-400",
  error: "border border-red-700/50 bg-red-900/20 px-4 py-3 text-sm font-medium text-red-400",
};
