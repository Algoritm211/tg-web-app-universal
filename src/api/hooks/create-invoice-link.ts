import { config } from '@/config/client-main-config';
import { useMutation } from '@tanstack/react-query';
import { useHapticFeedback, useWebApp } from '@vkruglikov/react-telegram-web-app';

import { onError } from '@/shared/common-tg-web-app-reactions';

export const useCreateInvoice = () => {
  const WebApp = useWebApp();
  const [, notificationOccurred] = useHapticFeedback();
  return useMutation({
    mutationFn: config.global.createInvoiceLink,
    onSuccess: (invoiceURL) => {
      WebApp?.openInvoice(invoiceURL, (status: string) => {
        if (status === 'paid') notificationOccurred('success');
        if (status === 'cancelled') notificationOccurred('error');
      });
    },
    onError,
  });
};
