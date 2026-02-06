export interface MenuItem {
  label: string;
  path?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export interface Transaction {
  txid: string;
  created: string;
  address: string;
  amount: string;
  commission: string;
  type: "Deposit" | "Withdrawal" | "Transfer" | "Earning";
  status: "success" | "pending" | "error";
  currency: string;
}

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export interface Balance {
  overall: number;
  main: number;
  trade: number;
  collateral: number;
}

export interface Asset extends Balance {
  image: string;
  symbol: string;
  name: string;
  overallUsd: number;
  mainUsd: number;
  tradeUsd: number;
  collateralUsd: number;
}

