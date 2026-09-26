import { Blocks, BookOpen, GraduationCap, MonitorPlay, FlaskConical, Library, Trophy, Music, Users, ShieldCheck, Lightbulb, IndianRupee, Clock, Bus, BadgeCheck, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Blocks, BookOpen, GraduationCap, MonitorPlay, FlaskConical, Library, Trophy, Music, Users, ShieldCheck, Lightbulb, IndianRupee, Clock, Bus, BadgeCheck };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? GraduationCap;
  return <C className={className} />;
}
