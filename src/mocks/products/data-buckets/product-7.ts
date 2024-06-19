import { Product } from '@/config/types/entities';

export const product7: Product = {
  id: 'some_id_7',
  name: 'Pink Ohara rose in a hat box',
  mainImage: '/demo/flowers/example-7/1.jpeg',
  images: [
    '/demo/flowers/example-7/1.jpeg',
    '/demo/flowers/example-7/2.jpeg',
    '/demo/flowers/example-7/3.jpeg',
    '/demo/flowers/example-7/4.jpeg',
  ],
  shortDescription: 'Arrangement in a hat box with Pink Ohara roses and spray roses',
  description: `
Camellia flower shop offers you a unique opportunity to make a special gift - a rose bouquet in a hat box. Our composition, created from Pink Ohara roses and spray roses, impresses with its unique beauty and sophistication. Each rose is grown manually by our specialists, ensuring their freshness and quality. Ordering a bouquet in our store, you will receive the best flowers from our own nursery, which will undoubtedly impress the recipient.
`,
  price: {
    currency: 'USD',
    amount: 7,
  },
};
