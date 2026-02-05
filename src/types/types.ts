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