"use client";

import { useLang } from "@/lib/lang";
import { school } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { DISPLAY, PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero eyebrow={t.nav.contact} title={b.title} sub={b.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-px border border-white/10 bg-white/10 self-start lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? school.address : school.addressHi },
              { icon: Phone, title: t.hero.cta2, body: school.phone, href: `tel:${school.phoneRaw}` },
              { icon: Mail, title: "Email", body: school.email },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 bg-[#0B111D] p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C6B896]/40 text-[#C6B896]">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className={`text-lg font-semibold text-[#E8DCC3] ${DISPLAY}`}>{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-[#B9C2D0]/80 hover:text-[#E8DCC3]">{c.body}</a>
                  ) : (
                    <p className="text-[#B9C2D0]/80">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="bg-[#0B111D] p-6">
              <h3 className={`mb-3 flex items-center gap-2 text-lg font-semibold text-[#E8DCC3] ${DISPLAY}`}>
                <Clock className="h-5 w-5 text-[#C6B896]" /> {t.footer.hours}
              </h3>
              {school.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#B9C2D0]/70">
                  <span className="font-medium text-white/90">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-4 bg-[#0B111D] p-6">
              <Megaphone className="h-6 w-6 shrink-0 text-[#C6B896]" />
              <p className="text-sm text-[#E8DCC3]">
                {t.misc.emergency}: <a href={`tel:${school.phoneRaw}`} className="underline decoration-[#C6B896]/50 underline-offset-4">{school.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
