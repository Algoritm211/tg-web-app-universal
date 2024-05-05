import { Price } from './price';

export interface Product {
  id: string;
  name: string;
  shortDescription?: string;
  description: string;
  price: Price;
  mainImage: string;
  images: string[];
}

export interface ProductCartItem {
  id: string;
  name: string;
  price: Price;
  count: number;
}

export type ProductCartItemDTO = Omit<ProductCartItem, 'count'>;
