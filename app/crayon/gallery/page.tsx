"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { DISPLAY, RED, PageHero, CTABand } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const captions = {
    en: ["Smart classrooms", "Junior wing", "Art & craft period", "Young artists at work", "Sports & games", "Library & reading"],
    hi: ["स्मार्ट क्लासरूम", "जूनियर विंग", "कला व शिल्प पीरियड", "नन्हे कलाकार", "खेल-कूद", "लाइब्रेरी व रीडिंग"],
  };
  const all = [...img.gallery, img.hero, img.heroAlt, img.about];
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} color={RED} />
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((g, i) => (
              <figure
                key={g}
                className={`overflow-hidden rounded-3xl border-8 border-white bg-white shadow-lg transition-transform hover:scale-[1.03] ${i % 2 ? "[transform:rotate(0.8deg)]" : "[transform:rotate(-0.8deg)]"}`}
              >
                <img src={g} alt={captions[lang][i % captions.en.length]} className="h-60 w-full rounded-2xl object-cover" />
                <figcaption className={`px-3 py-3 text-center text-sm font-bold text-[#4A3F35] ${DISPLAY}`}>
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
