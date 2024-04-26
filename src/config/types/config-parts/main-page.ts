export interface MainPage {
  fetchProducts: () => Promise<Product[]>;
}
