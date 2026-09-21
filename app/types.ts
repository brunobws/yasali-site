export type ProductGender = "Masculino" | "Feminino" | "Unissex";
export type ProductUsage = "Dia" | "Noite" | "Dia e noite";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  gender: ProductGender;
  category: string;
  family: string;
  notes: string[];
  usage: ProductUsage;
  giftable: boolean;
  featured: boolean;
  price: string;
  volume: string;
  image: string;
  alt: string;
  imageFit: "contain" | "cover";
  description: string;
}
