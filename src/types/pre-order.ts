export interface ProductFinish {
  id: string;
  name: string;
  hex: string;
  borderHex: string;
  tagline: string;
  imageSrc: string;
}

export interface StorageOption {
  id: string;
  capacity: string;
  price: number;
  label: string;
}

export interface AccessoryItem {
  id: string;
  name: string;
  price: number;
  description: string;
}
