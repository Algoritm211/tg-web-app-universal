import {GlobalConfig} from "@/config/types/config-parts/global-config";
import {fetchInvoiceLink} from "@/config/defaults/global-config/fetch-invoice-link";

export const defaultGlobalConfig: Partial<GlobalConfig> = {
  createInvoiceLink: fetchInvoiceLink
}
