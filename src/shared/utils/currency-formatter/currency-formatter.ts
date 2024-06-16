export const currencyFormatter = (price: number, currency = 'USD') => {
  return Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const cryptoFormatter = (price: number) => {
  return Intl.NumberFormat('en-EN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(price);
};
