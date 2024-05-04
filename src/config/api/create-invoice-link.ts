import {useMutation} from "@tanstack/react-query";
import {config} from "@/config/client-main-config";
import {useTgWebApp} from "@/telegram-web-app/hooks";
import {onError} from "@/shared/common-tg-web-app-reactions";

export const useCreateInvoiceLink = () => {
  const WebApp = useTgWebApp();
  return useMutation({
    mutationFn: config.global.createInvoiceLink,
    onSuccess:(invoiceURL) => {
      WebApp?.openInvoice(invoiceURL, (status) => {
        console.log(status)
      })
    },
    onError,
  })
}
