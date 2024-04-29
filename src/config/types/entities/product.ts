export interface Product {
  id: string;
  name: string;
  shortDescription?: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  };
  mainImage: string;
  images: string[];
}
