interface RateInfo {
  prices: Record<string, number>;
  diff_24h: Record<string, string>;
  diff_7d: Record<string, string>;
  diff_30d: Record<string, string>;
}

type Rates = Record<string, RateInfo>;

export interface TonExchangeRate {
  rates: Rates;
}
