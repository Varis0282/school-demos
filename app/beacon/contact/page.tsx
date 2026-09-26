"use client";

import { useLang } from "@/lib/lang";
import { school } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? school.address : school.addressHi },
              { icon: Phone, title: t.hero.cta2, body: school.phone, href: `tel:${school.phoneRaw}` },
              { icon: Mail, title: "Email", body: school.email },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E5B3F] text-[#D9A441]">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-[#1E5B3F]">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-slate-600 hover:text-[#D9A441]">{c.body}</a>
                  ) : (
                    <p className="text-slate-600">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-[#1E5B3F]">
                <Clock className="h-5 w-5 text-[#D9A441]" /> {t.footer.hours}
              </h3>
              {school.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-[#D9A441]/15 p-5">
              <Megaphone className="h-6 w-6 shrink-0 text-[#1E5B3F]" />
              <p className="text-sm font-semibold text-[#1E5B3F]">
                {t.misc.emergency}: <a href={`tel:${school.phoneRaw}`} className="underline decoration-[#D9A441] decoration-2 underline-offset-2">{school.phone}</a>
              </p>
            </div>
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
