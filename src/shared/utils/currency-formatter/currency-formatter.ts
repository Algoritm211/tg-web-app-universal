export const currencyFormatter = (price: number, currency = 'USD') => {
  return Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
