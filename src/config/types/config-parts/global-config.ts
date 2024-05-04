import { Product } from '@/config/types/entities';

export interface GlobalConfig {
  /**
   * If true - user will see cart and will be able to add items to cart
   * If false - user will instantly have an invoice to buy a product
   */
  isUseCart: boolean;

  createInvoiceLink?: (product: Product) => Promise<string>;
}
