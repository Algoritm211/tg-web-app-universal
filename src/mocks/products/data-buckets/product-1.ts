import { Product } from '@/config/types/entities';

export const product1: Product = {
  id: 'some_id_1',
  name: 'Composition "Raspberry Punch"',
  mainImage: '/demo/flowers/example-1/1.jpeg',
  images: [
    '/demo/flowers/example-1/1.jpeg',
    '/demo/flowers/example-1/2.jpeg',
    '/demo/flowers/example-1/3.jpeg',
    '/demo/flowers/example-1/4.jpeg',
  ],
  shortDescription:
    'mix of roses spray Misty Bubbles and Grace, decorated with orchid flowers and pistachio sprigs.',
  description: `
Discover the charm of "Raspberry Punch" composition from Camellia store. This exquisite bouquet consists of delicate spray roses Misty Bubbles and Gracia, tinted in various shades of pink, adorned with exotic orchid flowers and fragrant pistachio branches. Our composition is offered with a colorful orchid for decoration, so everyone can find the one that suits their taste. By purchasing from Camellia, you are guaranteed to receive high-quality flowers and unparalleled service. Indulge in the sophistication and freshness of this "Raspberry Punch" composition.
`,
  price: {
    currency: 'USD',
    amount: 5,
  },
};
