export const fetchProducts = (): Promise<Product[]> => {
  return Promise.resolve([
    {
      id: 'some_id_1',
      name: 'Product',
      mainImage: '/demo/cars/range-rover/car-photos/1.jpeg',
      images: [
        '/demo/cars/range-rover/car-photos/1.jpeg',
        '/demo/cars/range-rover/car-photos/2.jpeg',
        '/demo/cars/range-rover/car-photos/3.jpeg',
        '/demo/cars/range-rover/car-photos/4.jpeg',
      ],
      currency: 'USD',
      shortDescription: 'Twin-Turbo V8, AWD, Highly Equipped, Unmodified',
      description:
        '**THIS...** is a 2023 Range Rover P530 SV, finished in Varesine Blue Metallic with a Perlino interior',
      price: 150_000,
    },
  ]);
};
