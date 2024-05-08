import { config } from '@/config/client-main-config';
import { useHapticFeedback, useTgWebApp } from '@/telegram-web-app/hooks';
import { useMutation } from '@tanstack/react-query';

import { onError } from '@/shared/common-tg-web-app-reactions';

export const useCreateInvoice = () => {
  const WebApp = useTgWebApp();
  const { notificationOccurred } = useHapticFeedback();
  return useMutation({
    mutationFn: config.global.createInvoiceLink,
    onSuccess: (invoiceURL) => {
      WebApp?.openInvoice(invoiceURL, (status) => {
        if (status === 'paid') notificationOccurred('success');
        if (status === 'cancelled') notificationOccurred('error');
      });
    },
    onError,
  });
};
