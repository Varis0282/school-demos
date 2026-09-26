"use client";

import { useLang } from "@/lib/lang";
import { school } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { DISPLAY, RED, YELLOW, BLUE, GREEN, PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

const palette = [RED, BLUE, GREEN];

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} color={BLUE} />
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? school.address : school.addressHi },
              { icon: Phone, title: t.hero.cta2, body: school.phone, href: `tel:${school.phoneRaw}` },
              { icon: Mail, title: "Email", body: school.email },
            ].map((c, i) => (
              <div key={c.title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-md" style={{ borderLeft: `6px solid ${palette[i % 3]}` }}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: palette[i % 3] }}>
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className={`font-bold text-[#4A3F35] ${DISPLAY}`}>{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-[#4A3F35]/70 hover:text-[#E44D42]">{c.body}</a>
                  ) : (
                    <p className="text-[#4A3F35]/70">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-3xl bg-white p-5 shadow-md" style={{ borderLeft: `6px solid ${YELLOW}` }}>
              <h3 className={`mb-2 flex items-center gap-2 font-bold text-[#4A3F35] ${DISPLAY}`}>
                <Clock className="h-5 w-5 text-[#F5B82E]" /> {t.footer.hours}
              </h3>
              {school.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#4A3F35]/70">
                  <span className="font-bold text-[#4A3F35]">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-3xl border-2 border-dashed border-[#E44D42]/50 bg-white p-5">
              <Megaphone className="h-6 w-6 shrink-0 text-[#E44D42]" />
              <p className="text-sm font-bold text-[#4A3F35]">
                {t.misc.emergency}: <a href={`tel:${school.phoneRaw}`} className="text-[#E44D42] underline underline-offset-2">{school.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
