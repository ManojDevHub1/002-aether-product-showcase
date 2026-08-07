export interface HardwareLayer {
  id: string;
  number: string;
  name: string;
  material: string;
  description: string;
  tolerance: string;
}

export interface MaterialCard {
  id: string;
  title: string;
  category: string;
  description: string;
  spec: string;
}

export interface SpecCategory {
  id: string;
  category: string;
  items: { label: string; value: string; detail?: string }[];
}
