export interface InvoiceClosePaymentInfo {
  url: string;
  status: 'paid' | 'cancelled' | 'failed' | 'pending';
}
