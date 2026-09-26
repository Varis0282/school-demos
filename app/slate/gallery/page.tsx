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
      <PageHero label={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((g, i) => (
              <figure key={g} className="border-t border-[#16181D]/15 pt-4">
                <p className={`text-sm text-[#1D4ED8] ${DISPLAY}`}>{String(i + 1).padStart(2, "0")}</p>
                <img
                  src={g}
                  alt={captions[lang][i % captions.en.length]}
                  className="mt-3 h-64 w-full object-cover grayscale-[35%] transition-all hover:grayscale-0"
                />
                <figcaption className={`mt-3 font-semibold ${DISPLAY}`}>
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
