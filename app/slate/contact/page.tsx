"use client";

import { useLang } from "@/lib/lang";
import { school } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { DISPLAY, Micro, PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero label={t.nav.contact} title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-8 self-start lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? school.address : school.addressHi },
              { icon: Phone, title: t.hero.cta2, body: school.phone, href: `tel:${school.phoneRaw}` },
              { icon: Mail, title: "Email", body: school.email },
            ].map((c) => (
              <div key={c.title} className="border-t border-[#16181D]/15 pt-4">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#16181D]/50">
                  <c.icon className="h-4 w-4 text-[#1D4ED8]" /> {c.title}
                </p>
                {c.href ? (
                  <a href={c.href} className={`mt-2 block text-lg font-semibold underline-offset-4 hover:text-[#1D4ED8] hover:underline ${DISPLAY}`}>{c.body}</a>
                ) : (
                  <p className={`mt-2 text-lg ${DISPLAY}`}>{c.body}</p>
                )}
              </div>
            ))}
            <div className="border-t border-[#16181D]/15 pt-4">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#16181D]/50">
                <Clock className="h-4 w-4 text-[#1D4ED8]" /> {t.footer.hours}
              </p>
              <div className="mt-2 space-y-1 text-sm text-[#16181D]/70">
                {school.timings[lang].map((tm) => (
                  <p key={tm.days}><span className="font-semibold text-[#16181D]">{tm.days}:</span> {tm.hours}</p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 border-2 border-[#16181D] p-5">
              <Megaphone className="h-6 w-6 shrink-0 text-[#1D4ED8]" />
              <p className="text-sm font-semibold">
                {t.misc.emergency}: <a href={`tel:${school.phoneRaw}`} className="text-[#1D4ED8] underline underline-offset-4">{school.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <Micro>{t.sections.visitTitle}</Micro>
          <div className="mt-6">
            <MapBlock />
          </div>
        </div>
      </section>
    </>
  );
}
