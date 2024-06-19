import { Product } from '@/config/types/entities';

export const product5: Product = {
  id: 'some_id_5',
  name: 'Rose Sophie Loren in the blue hatbox',
  mainImage: '/demo/flowers/example-5/1.jpeg',
  images: [
    '/demo/flowers/example-5/1.jpeg',
    '/demo/flowers/example-5/2.jpeg',
    '/demo/flowers/example-5/3.jpeg',
    '/demo/flowers/example-5/4.jpeg',
  ],
  shortDescription: 'Rose Sophie Loren in the blue hatbox',
  description: `
The Sophia Loren rose in a box from Camellia is an exquisite gift that inspires the finest feelings. The flowers of this rose, grown by hand, impress with their unique beauty and freshness. The bouquet presented in a blue box looks very elegant and stylish.

By purchasing the Sophia Loren rose in our store, you can be sure of its high quality and durability. We take care of each flower meticulously and guarantee that it will bring you only joy and satisfaction. Immerse yourself in the world of unique beauty with the Sophia Loren rose from Camellia!
`,
  price: {
    currency: 'USD',
    amount: 10,
  },
};
