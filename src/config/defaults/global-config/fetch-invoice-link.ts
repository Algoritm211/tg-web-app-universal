import {Product} from "@/config/types/entities";


export const fetchInvoiceLink = async (product: Product): Promise<string> => {
  const res = await fetch(
    '/api/create-invoice-link',
    {
      method: 'POST',
      body: JSON.stringify(product)
    })

  const invoiceLink = await res.json()

  return invoiceLink
}
