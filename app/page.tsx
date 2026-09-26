import Link from "next/link";

const themes = [
  {
    href: "/beacon",
    name: "Beacon",
    tag: "Classic Trust",
    desc: "Forest green and gold with serif headings — the established, trustworthy school every parent recognises.",
    dots: ["#1E5B3F", "#D9A441", "#FBFAF6", "#10291D"],
    chrome: "bg-[#FBFAF6]",
    bar: "bg-[#1E5B3F]",
    accent: "bg-[#D9A441]",
  },
  {
    href: "/kite",
    name: "Kite",
    tag: "Modern Animated",
    desc: "Indigo-to-sky gradients, floating shapes and scroll animations — a school that feels future-ready.",
    dots: ["#4338CA", "#0EA5E9", "#F59E0B", "#F5F9FF"],
    chrome: "bg-[#F5F9FF]",
    bar: "bg-gradient-to-r from-[#4338CA] to-[#0EA5E9]",
    accent: "bg-[#F59E0B]",
  },
  {
    href: "/crayon",
    name: "Crayon",
    tag: "Warm & Playful",
    desc: "Crayon-box primaries, tilted frames and doodle underlines — joyful without looking childish to parents.",
    dots: ["#E44D42", "#F5B82E", "#3E7CB8", "#5DA271"],
    chrome: "bg-[#FFF8ED]",
    bar: "bg-[#E44D42]",
    accent: "bg-[#F5B82E]",
  },
  {
    href: "/regal",
    name: "Regal",
    tag: "Elite Premium",
    desc: "Charcoal navy and champagne with garamond serifs — the international-school look, priced accordingly.",
    dots: ["#101828", "#E8DCC3", "#C6B896", "#0B111D"],
    chrome: "bg-[#101828]",
    bar: "bg-[#C6B896]",
    accent: "bg-[#E8DCC3]",
  },
  {
    href: "/slate",
    name: "Slate",
    tag: "Minimal Editorial",
    desc: "White space, hairline rules, numbered sections and one cobalt accent — quietly confident and modern.",
    dots: ["#FFFFFF", "#16181D", "#1D4ED8", "#F6F7F9"],
    chrome: "bg-white",
    bar: "bg-[#16181D]",
    accent: "bg-[#1D4ED8]",
  },
];

const features = [
  "Campus-visit booking on WhatsApp",
  "Hindi / English toggle",
  "Admissions process + age criteria",
  "Student achievements showcase",
  "Parent reviews",
  "Photo gallery",
  "Google Maps",
  "Mobile-first & fast",
];

export default function Showcase() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-300">
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Live demo showcase</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          One school.{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            Five completely different websites.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-400">
          Every demo below is a complete, working website for the same school — same content, same features. You simply
          pick the design you love, and we put your school&apos;s name on it.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <span key={f} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {themes.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
            >
              {/* mini browser preview */}
              <div className="overflow-hidden rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 bg-[#1A1D24] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 h-2 w-40 rounded bg-white/10" />
                </div>
                <div className={`${t.chrome} p-4`}>
                  <div className={`h-3 w-24 rounded ${t.bar}`} />
                  <div className="mt-3 h-2.5 w-4/5 rounded bg-black/20" />
                  <div className="mt-1.5 h-2.5 w-3/5 rounded bg-black/10" />
                  <div className="mt-3 flex gap-2">
                    <div className={`h-4 w-16 rounded ${t.accent}`} />
                    <div className="h-4 w-16 rounded border border-black/15" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-extrabold text-white">{t.name}</h2>
                  <span className="rounded-full border border-white/15 px-3 py-0.5 text-xs font-semibold text-slate-300">
                    {t.tag}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {t.dots.map((d) => (
                    <span key={d} className="h-3.5 w-3.5 rounded-full border border-white/20" style={{ backgroundColor: d }} />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
              <p className="mt-4 font-semibold text-emerald-400 transition-transform group-hover:translate-x-1">
                View demo →
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
          Built with Next.js · Ready in 7 days for your school · Nursery to Class 8, CBSE pattern
        </footer>
      </main>
    </div>
  );
}
