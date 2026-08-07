export interface ExperienceChapter {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  quote: string;
  badge: string;
  accentColor: "teal" | "amber";
  visualType: "neural" | "awareness" | "privacy" | "sound" | "lifestyle";
}
