"use client";

import { useLang } from "@/lib/lang";
import { school } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { FadeIn, PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="pb-16">
        <div id="book" className="scroll-mt-28 mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </FadeIn>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? school.address : school.addressHi },
              { icon: Phone, title: t.hero.cta2, body: school.phone, href: `tel:${school.phoneRaw}` },
              { icon: Mail, title: "Email", body: school.email },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07}>
                <div className="flex gap-4 rounded-3xl border border-indigo-100 bg-white p-5 shadow-lg shadow-indigo-500/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4338CA] to-[#0EA5E9] text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="text-slate-500 hover:text-[#4338CA]">{c.body}</a>
                    ) : (
                      <p className="text-slate-500">{c.body}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.2}>
              <div className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-lg shadow-indigo-500/5">
                <h3 className="mb-2 flex items-center gap-2 font-bold text-slate-900">
                  <Clock className="h-5 w-5 text-[#0EA5E9]" /> {t.footer.hours}
                </h3>
                {school.timings[lang].map((tm) => (
                  <p key={tm.days} className="text-sm text-slate-500">
                    <span className="font-bold text-slate-700">{tm.days}:</span> {tm.hours}
                  </p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="flex items-center gap-3 rounded-3xl bg-gradient-to-r from-[#4338CA]/8 to-[#0EA5E9]/8 p-5">
                <Megaphone className="h-6 w-6 shrink-0 text-[#4338CA]" />
                <p className="text-sm font-bold text-[#4338CA]">
                  {t.misc.emergency}: <a href={`tel:${school.phoneRaw}`} className="underline underline-offset-2">{school.phone}</a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
