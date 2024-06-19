import { Product } from '@/config/types/entities';

export const product9: Product = {
  id: 'some_id_9',
  name: 'Composition with a rose Penny Lane',
  mainImage: '/demo/flowers/example-9/1.jpeg',
  images: [
    '/demo/flowers/example-9/1.jpeg',
    '/demo/flowers/example-9/2.jpeg',
    '/demo/flowers/example-9/3.jpeg',
    '/demo/flowers/example-9/4.jpeg',
  ],
  shortDescription: 'Composition consists of Penny Lane roses, decorated with lilac limonium',
  description: `
Welcome to "Camellia" - the place where beauty comes to life. Today we are delighted to introduce our new composition with the Penny Lane rose. These yellow roses, adorned with delicate purple limonium, can make any setting more welcoming and bright.

By purchasing this composition at "Camellia," you're not just getting flowers; you're receiving a genuine piece of joy and harmony. Our roses are always fresh and well-cared for, and our professional florists know how to make each bouquet unique.

Choose quality and beauty - choose "Camellia" store!
`,
  price: {
    currency: 'USD',
    amount: 8,
  },
};
