import { school } from "./config";

// Campus visits run 9 AM – 1 PM only (no evening group).
export const SLOTS = {
  morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
  evening: [] as string[],
};

const DAY_NAMES = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], hi: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] };
const MONTH_NAMES = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फर", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सितं", "अक्टू", "नवं", "दिसं"] };

export type BookableDay = { iso: string; day: string; dayHi: string; date: number; month: string; monthHi: string; isSunday: boolean };

/** Next 7 bookable days starting today (Sundays disabled — school closed for visits) */
export function getNextDays(count = 7): BookableDay[] {
  const days: BookableDay[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: DAY_NAMES.en[d.getDay()],
      dayHi: DAY_NAMES.hi[d.getDay()],
      date: d.getDate(),
      month: MONTH_NAMES.en[d.getMonth()],
      monthHi: MONTH_NAMES.hi[d.getMonth()],
      isSunday: d.getDay() === 0,
    });
  }
  return days;
}

export type BookingDetails = { name: string; phone: string; cls: string; day?: BookableDay; slot: string; note: string };

/** Build a wa.me deep link with a pre-filled campus-visit request.
 *  Keep emoji to single code points (see clinic-demos FFFD gotcha). */
export function whatsAppLink(b: BookingDetails): string {
  const SCHOOL_EMOJI = "🏫";
  const lines = [
    `${SCHOOL_EMOJI} *Campus Visit Request — ${school.name}*`,
    ``,
    `*Parent:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    `*Admission for:* ${b.cls}`,
    b.day ? `*Visit Date:* ${b.day.day}, ${b.day.date} ${b.day.month}` : "",
    b.slot ? `*Time:* ${b.slot}` : "",
    b.note ? `*Child:* ${b.note}` : "",
    ``,
    `Please confirm my campus visit. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 8);
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(`Hello ${school.name}, I would like to book a campus visit for admission.`)}`;
}
