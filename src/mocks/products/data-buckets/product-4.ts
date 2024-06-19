import { Product } from '@/config/types/entities';

export const product4: Product = {
  id: 'some_id_4',
  name: 'Composition with Snow World roses spray',
  mainImage: '/demo/flowers/example-4/1.jpeg',
  images: [
    '/demo/flowers/example-4/1.jpeg',
    '/demo/flowers/example-4/2.jpeg',
    '/demo/flowers/example-4/3.jpeg',
    '/demo/flowers/example-4/4.jpeg',
  ],
  shortDescription:
    'Composition with white roses spray Snow World and exotic greenery in a blue hat box',
  description: `
Visit Camellia store and make your day special with our exquisite "Snow World" composition. This delicate arrangement featuring white spray roses Snow World and exotic greens will find its place in everyone's heart. Beautifully presented in a blue hat box, it will create an atmosphere of tenderness and sophistication in your home or office.

At our store, we always prioritize quality. Each rose in our compositions is a wonderful symbol of love and attention, and every detail is taken care of with the utmost diligence. We guarantee the freshness and long-lasting beauty of our flowers.

By purchasing the "Snow World" composition at Camellia store, you will not only get a beautiful gift for yourself or your loved ones but also the opportunity to enjoy the highest quality and service that will exceed your expectations.
`,
  price: {
    currency: 'USD',
    amount: 8,
  },
};
