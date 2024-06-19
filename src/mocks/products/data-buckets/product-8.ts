import { Product } from '@/config/types/entities';

export const product8: Product = {
  id: 'some_id_8',
  name: 'Composition with Orange Fire roses',
  mainImage: '/demo/flowers/example-8/1.jpeg',
  images: [
    '/demo/flowers/example-8/1.jpeg',
    '/demo/flowers/example-8/2.jpeg',
    '/demo/flowers/example-8/3.jpeg',
    '/demo/flowers/example-8/4.jpeg',
  ],
  shortDescription: 'Composition in a hatbox with rose spray Orange Fire and panicum',
  description: `
The Orange Fair Rose Composition is an excellent choice for those who appreciate elegance and uniqueness. At our store, Camellia, we craft each composition with love and attention to detail. Every spray rose included in this composition impresses with its brightness and aroma. Panicum adds lightness and ease to the bouquet. Purchasing this composition from us, you will receive a high-quality product that will be a wonderful gift for your loved one or a great addition to your home decor.
`,
  price: {
    currency: 'USD',
    amount: 5,
  },
};
