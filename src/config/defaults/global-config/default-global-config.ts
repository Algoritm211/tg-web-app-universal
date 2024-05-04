import { fetchInvoiceLink } from '@/config/defaults/global-config/fetch-invoice-link';
import { GlobalConfig } from '@/config/types/config-parts/global-config';

export const defaultGlobalConfig: Partial<GlobalConfig> = {
  createInvoiceLink: fetchInvoiceLink,
};
