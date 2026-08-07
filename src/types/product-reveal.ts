export interface ProductHotspot {
  id: string;
  title: string;
  category: string;
  description: string;
  x: number; // Percent 0-100 for desktop position
  y: number; // Percent 0-100 for desktop position
  alignment?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}
