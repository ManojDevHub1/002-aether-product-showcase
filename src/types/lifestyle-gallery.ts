export interface LifestyleScene {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  timeOfDay: string;
  description: string;
  quote: string;
  imageSrc: string;
  aspectRatio: "wide" | "tall" | "square";
  accentColor: "teal" | "amber";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  imageSrc: string;
  gridSpan: "col-span-12 md:col-span-8" | "col-span-12 md:col-span-4" | "col-span-12 md:col-span-6";
}
