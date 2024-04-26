interface Product {
  id: string;
  name: string;
  shortDescription?: string;
  description: string;
  price: number;
  currency: string;
  mainImage: string;
  images: string[];
}
