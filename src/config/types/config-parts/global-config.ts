import { Product, ProductCartItem } from '@/config/types/entities';
import { PaymentMethod } from '@/config/types/enums';

export interface GlobalConfig {
  createInvoiceLink?: (product: Product[] | ProductCartItem[]) => Promise<string>;

  paymentMethods?: PaymentMethod[];
}
