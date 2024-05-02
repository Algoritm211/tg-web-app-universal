import { Product } from '@/config/types/entities';

export const fetchProduct = (): Promise<Product> => {
  return Promise.resolve({
    id: 'some_id_1',
    name: '2023 Range Rover P530 SV',
    mainImage: '/demo/cars/range-rover/car-photos/1.jpeg',
    images: [
      '/demo/cars/range-rover/car-photos/1.jpeg',
      '/demo/cars/range-rover/car-photos/2.jpeg',
      '/demo/cars/range-rover/car-photos/3.jpeg',
      '/demo/cars/range-rover/car-photos/4.jpeg',
    ],
    shortDescription: 'Twin-Turbo V8, AWD, Highly Equipped, Unmodified',
    description: `
**THIS...** is a 2023 Range Rover P530 SV, finished in Varesine Blue Metallic with a Perlino interior.

- The attached Carfax vehicle history report shows no accidents or mileage discrepancies in this Range Rover’s brief past.
- According to the window sticker provided in the gallery, factory equipment includes:
- 23-inch forged Style 1077 diamond turned wheels
- SV Intrepid exterior accents
- Black contrast roof
- Natural Dark Linear wenge veneer with mosaic metal interior trim
- SV semi-aniline leather upholstery
- Meridian Signature sound system
- Rear seat entertainment system
- And more as detailed below. The selling dealer reports no modifications.
`,
    price: {
      currency: 'USD',
      amount: 150_000,
    },
  });
};
