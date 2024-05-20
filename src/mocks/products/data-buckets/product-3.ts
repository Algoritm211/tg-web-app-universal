import { Product } from '@/config/types/entities';

export const product3: Product = {
  id: 'some_id_3',
  name: 'Composition of spray roses',
  mainImage: '/demo/flowers/example-3/1.jpeg',
  images: [
    '/demo/flowers/example-3/1.jpeg',
    '/demo/flowers/example-3/2.jpeg',
    '/demo/flowers/example-3/3.jpeg',
    '/demo/flowers/example-3/4.jpeg',
  ],
  shortDescription: 'Rose Kenya, rose spray Snow Flake',
  description: `
Welcome to "Camellia" store! We offer you a unique opportunity to purchase a beautiful composition of spray roses, which will be a perfect gift for your loved ones or a wonderful addition to your interior. This composition consists of Kenyan roses and Snow Flake spray roses, giving it uniqueness and charm.

By purchasing this composition at "Camellia" store, you can be sure of its high quality and the freshness of the flowers. We carefully select each element of our bouquets so that you get only the best. Moreover, our experts create each composition with great attention, giving them a unique design.

Do not hesitate, buying this composition at "Camellia" is the best choice for those who value quality and beauty. Let the beauty of roses immerse you in the world of elegance and harmony!
`,
  price: {
    currency: 'USD',
    amount: 67,
  },
};
