"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { DISPLAY, PageHero, CTABand } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const captions = {
    en: ["Smart classrooms", "Junior wing", "Art & craft period", "Young artists at work", "Sports & games", "Library & reading"],
    hi: ["स्मार्ट क्लासरूम", "जूनियर विंग", "कला व शिल्प पीरियड", "नन्हे कलाकार", "खेल-कूद", "लाइब्रेरी व रीडिंग"],
  };
  const all = [...img.gallery, img.hero, img.heroAlt, img.about];
  return (
    <>
      <PageHero eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((g, i) => (
              <figure key={g} className="group relative overflow-hidden bg-[#0B111D]">
                <img
                  src={g}
                  alt={captions[lang][i % captions.en.length]}
                  className="h-64 w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <figcaption className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#101828] to-transparent px-5 pb-4 pt-10 text-sm tracking-wide text-[#E8DCC3] ${DISPLAY}`}>
                  {captions[lang][i % captions.en.length]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
