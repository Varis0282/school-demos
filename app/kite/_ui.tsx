"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Star, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { school, img } from "@/lib/config";
import { faqs, achievements, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/kite";
export const INDIGO = "#4338CA";
export const SKY = "#0EA5E9";
export const AMBER = "#F59E0B";

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-10 top-16 h-40 w-40 rounded-[38%_62%_55%_45%/55%_40%_60%_45%] bg-[#0EA5E9]/15"
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-8 top-8 h-24 w-24 rotate-45 rounded-2xl bg-[#F59E0B]/20"
        animate={{ y: [0, 14, 0], rotate: [45, 60, 45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-1/3 h-28 w-28 rounded-full bg-[#4338CA]/10"
        animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [text, setText] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) {
      setText(value);
      return;
    }
    const prefix = "";
    const suffix = value.replace(/^[0-9,.]+/, "");
    const controls = animate(0, num, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        const rounded = num % 1 !== 0 ? v.toFixed(1) : Math.round(v).toLocaleString("en-IN");
        setText(`${prefix}${rounded}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{text}</span>;
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
    <header className="sticky top-3 z-40 px-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/80 px-5 py-2.5 shadow-lg shadow-indigo-500/5 backdrop-blur-md">
        <Link href={BASE} className="flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: 15 }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M12 2 20 12 12 22 4 12z" />
            </svg>
          </motion.span>
          <span className="font-bold text-[#4338CA]">{lang === "en" ? school.name : school.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-semibold text-slate-600 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-2.5 py-1 transition-colors hover:bg-indigo-50 hover:text-[#4338CA]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-slate-400 hover:text-slate-600">← All demos</Link>
          <LangToggle className="rounded-full border border-indigo-100 px-3 py-1 text-xs font-bold text-[#4338CA] hover:bg-indigo-50" />
          <Link
            href={`${BASE}/contact`}
            className="rounded-full bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-5 py-2 text-white shadow-md shadow-indigo-500/30 transition-transform hover:scale-105"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/60 bg-white/95 px-5 pb-4 shadow-lg backdrop-blur lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle className="rounded-full border border-indigo-100 px-4 py-2 text-sm font-bold text-[#4338CA]" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-5 py-2.5 text-center font-semibold text-white">
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
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-[#4338CA]/10 to-[#0EA5E9]/10 px-4 py-1 text-sm font-bold text-[#4338CA]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-slate-500">{sub}</p>}
    </FadeIn>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden py-16 text-center">
      <FloatingShapes />
      <FadeIn>
        <h1 className="bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] bg-clip-text px-4 text-4xl font-bold text-transparent md:text-5xl">
          {title}
        </h1>
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-slate-500">{sub}</p>}
      </FadeIn>
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
    <section className="relative overflow-hidden bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.value} delay={i * 0.08}>
            <p className="text-4xl font-bold text-white">
              <Counter value={s.value} />
            </p>
            <p className="mt-1 text-sm font-medium text-indigo-100">{s[lang]}</p>
          </FadeIn>
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
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-indigo-100 bg-white p-6 text-center shadow-lg shadow-indigo-500/5"
    >
      <img src={img.achievements[a.photo]} alt={a.name} className="mx-auto h-24 w-24 rounded-full border-4 border-[#0EA5E9]/30 object-cover" />
      <span className="mt-3 inline-block rounded-full bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-4 py-1 text-xs font-bold text-white">
        {d.result}
      </span>
      <h3 className="mt-3 font-bold text-slate-900">{a.name}</h3>
      <p className="text-sm font-semibold text-[#4338CA]">{d.field}</p>
      <p className="mt-1 text-xs text-slate-400">{d.detail}</p>
    </motion.div>
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
          <FadeIn key={i} delay={i * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-800"
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#0EA5E9] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="border-t border-indigo-50 px-5 py-4 text-slate-600">{item.a}</p>}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <FadeIn className="lg:col-span-2">
        <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg shadow-indigo-500/5">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#4338CA]">
            <MapPin className="h-5 w-5 text-[#0EA5E9]" /> {lang === "en" ? school.name : school.nameHi}
          </h3>
          <p className="mb-4 text-slate-600">{lang === "en" ? school.address : school.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-slate-600">
            {school.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-bold text-slate-800">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a
            href={school.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
          >
            {t.misc.getDirections} →
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="overflow-hidden rounded-3xl border border-indigo-100 shadow-lg shadow-indigo-500/5 lg:col-span-3">
        <iframe src={school.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="School location map" />
      </FadeIn>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#4338CA] via-[#3B6FE0] to-[#0EA5E9] py-16">
      <FloatingShapes />
      <FadeIn className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-indigo-100">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-full bg-white px-8 py-3.5 font-bold text-[#4338CA] shadow-xl transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${school.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </FadeIn>
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
    <footer className="mt-10 bg-white pt-14 text-slate-500">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
                <path d="M12 2 20 12 12 22 4 12z" />
              </svg>
            </span>
            <span className="font-bold text-[#4338CA]">{lang === "en" ? school.name : school.nameHi}</span>
          </div>
          <p className="text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-slate-800">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#4338CA]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-slate-800">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm">
            <li>{lang === "en" ? school.address : school.addressHi}</li>
            <li><a href={`tel:${school.phoneRaw}`} className="hover:text-[#4338CA]">{school.phone}</a></li>
            <li>{school.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-slate-800">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm">
            {school.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-bold text-slate-700">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {school.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-indigo-100 bg-white p-6 shadow-xl shadow-indigo-500/5 sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#4338CA]",
  input: "w-full rounded-2xl border border-indigo-100 bg-[#F5F9FF] px-4 py-2.5 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0EA5E9] focus:bg-white focus:ring-2 focus:ring-sky-100",
  select: "w-full rounded-2xl border border-indigo-100 bg-[#F5F9FF] px-4 py-2.5 text-slate-800 outline-none focus:border-[#0EA5E9] focus:bg-white focus:ring-2 focus:ring-sky-100",
  dayBtn: "rounded-2xl border border-indigo-100 bg-white py-2 text-center text-slate-600 transition-all hover:border-[#0EA5E9] hover:shadow-md",
  dayBtnActive: "rounded-2xl border-transparent bg-gradient-to-b from-[#4338CA] to-[#0EA5E9] py-2 text-center text-white shadow-lg shadow-indigo-500/30",
  slotBtn: "rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition-all hover:border-[#0EA5E9]",
  slotBtnActive: "rounded-full border-transparent bg-gradient-to-r from-[#4338CA] to-[#0EA5E9] px-4 py-2 text-sm font-bold text-white shadow-md",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600",
};
