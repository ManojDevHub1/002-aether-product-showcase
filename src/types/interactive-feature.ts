export interface FlagshipFeature {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  metricLabel: string;
  metricValue: string;
  accentColor: "teal" | "amber";
  hudType: "adaptive" | "spatial" | "neural" | "audio" | "battery";
  specCallouts: string[];
}
