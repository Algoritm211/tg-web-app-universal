import { Product, ProductCartItem } from '@/config/types/entities';

export const fetchInvoiceLink = async (
  products: Product[] | ProductCartItem[]
): Promise<string> => {
  const res = await fetch('/api/create-invoice-link', {
    method: 'POST',
    body: JSON.stringify(products),
  });

  const invoiceLink = await res.json();

  return invoiceLink;
};
