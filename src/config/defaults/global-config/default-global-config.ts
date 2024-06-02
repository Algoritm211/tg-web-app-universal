import { fetchInvoiceLink } from '@/config/defaults/global-config/fetch-invoice-link';
import { GlobalConfig } from '@/config/types/config-parts/global-config';
import { PaymentMethod } from '@/config/types/enums';

export const defaultGlobalConfig: Partial<GlobalConfig> = {
  createInvoiceLink: fetchInvoiceLink,
  paymentMethods: [PaymentMethod.card, PaymentMethod.ton],
};
