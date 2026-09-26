"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, CTABand } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const captions = {
    en: ["Smart classrooms", "Junior wing", "Art & craft period", "Young artists at work", "Sports & games", "Library & reading"],
    hi: ["स्मार्ट क्लासरूम", "जूनियर विंग", "कला व शिल्प पीरियड", "नन्हे कलाकार", "खेल-कूद", "लाइब्रेरी व रीडिंग"],
  };
  const all = [...img.gallery, img.hero, img.heroAlt, img.about];
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((g, i) => (
              <figure key={g} className="group overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm">
                <img src={g} alt={captions[lang][i % captions.en.length]} className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <figcaption className="px-4 py-3 text-sm font-semibold text-[#1E5B3F]">
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
