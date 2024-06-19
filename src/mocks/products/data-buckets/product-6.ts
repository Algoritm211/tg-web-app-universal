import { Product } from '@/config/types/entities';

export const product6: Product = {
  id: 'some_id_6',
  name: 'Roses Avalanche "Heart"',
  mainImage: '/demo/flowers/example-6/1.jpeg',
  images: [
    '/demo/flowers/example-6/1.jpeg',
    '/demo/flowers/example-6/2.jpeg',
    '/demo/flowers/example-6/3.jpeg',
    '/demo/flowers/example-6/4.jpeg',
  ],
  shortDescription: 'White box in the shape of a heart with white roses for the most beloved!',
  description: `
We invite you to delight your loved one with the most tender impressions with our bouquet "Roses Avalanche 'Heart'" in a pink heart-shaped box. Each rose in this bouquet is a unique masterpiece of our own cultivation, which we have prepared for you with love. The snow-white roses arranged in the shape of a heart symbolize purity, tenderness, and deep affection.

By purchasing this bouquet at Camellia store, you are guaranteed to receive fresh and high-quality flowers that will captivate with their beauty and fragrance. Let this bouquet express your feelings better than any words. Gift it to your beloved and leave unforgettable impressions!
`,
  price: {
    currency: 'USD',
    amount: 9,
  },
};
