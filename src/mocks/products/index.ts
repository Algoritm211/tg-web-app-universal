import { Product } from '@/config/types/entities';

import { product1 } from './data-buckets/product-1';
import { product2 } from './data-buckets/product-2';
import { product3 } from './data-buckets/product-3';
import { product4 } from './data-buckets/product-4';
import { product5 } from './data-buckets/product-5';
import { product6 } from './data-buckets/product-6';
import { product7 } from './data-buckets/product-7';
import { product8 } from './data-buckets/product-8';
import { product9 } from './data-buckets/product-9';

export const products = [product1, product2, product3, product4, product5];

export const productMap = products.reduce((acc, product) => {
  acc.set(product.id, product);
  return acc;
}, new Map<string, Product>());
