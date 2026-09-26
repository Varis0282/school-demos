"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { FadeIn, PageHero, CTABand } from "../_ui";

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
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((g, i) => (
              <FadeIn key={g} delay={(i % 3) * 0.06}>
                <motion.figure whileHover={{ y: -6 }} className="overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-lg shadow-indigo-500/5">
                  <img src={g} alt={captions[lang][i % captions.en.length]} className="h-60 w-full object-cover" />
                  <figcaption className="px-4 py-3 text-sm font-bold text-[#4338CA]">
                    {captions[lang][i % captions.en.length]}
                  </figcaption>
                </motion.figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
