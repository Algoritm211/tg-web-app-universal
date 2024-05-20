import { Product } from '@/config/types/entities';

export const product2: Product = {
  id: 'some_id_2',
  name: 'Composition "Misty Bubbles"',
  mainImage: '/demo/flowers/example-2/1.jpeg',
  images: [
    '/demo/flowers/example-2/1.jpeg',
    '/demo/flowers/example-2/2.jpeg',
    '/demo/flowers/example-2/3.jpeg',
    '/demo/flowers/example-2/4.jpeg',
  ],
  shortDescription:
    'Composition in ahat box with a rose spray Misty Bubbles, decorated with greens and bows.',
  description: `
Visit Camellia store and make your day brighter with the exquisite "Misty Bubbles" composition. This charming arrangement, presented in a hat box, will surely captivate you with its elegance and beauty. The highlight of this bouquet is the Misty Bubbles spray rose, which impresses with its unique beauty and fragrance. Additionally, the composition is adorned with greens and ribbons, adding a special charm to it.

By purchasing the "Misty Bubbles" composition at Camellia store, you are guaranteed to receive the highest quality flowers and excellent service. We carefully oversee every detail and the process of creating each bouquet to ensure that our customers receive only the best.
`,
  price: {
    currency: 'USD',
    amount: 99,
  },
};
