import type { Transaction } from "@/types/types";

export const mockTransactions: Transaction[] = [
  {
    txid: "0x7a8f3c2e4b1d9a6c5e8f2d3a1b7c9e4f6a2d8c1b5e7f3a9c4d6e2b8f1a7c3d5e",
    created: "05/02",
    address: "bc1qa3mv30rf66xpdffmqkdk8mkrl0fs4ngavtum5",
    amount: "0.05 BTC",
    commission: "0.0001 BTC",
    type: "Deposit",
    status: "success",
    currency: "BTC",
  },
  {
    txid: "0x2b4c6d8e1a3f5c7e9b2d4a6c8e1f3a5c7e9b1d3a5c7e9b2d4f6a8c1e3b5d7f9a",
    created: "04/02",
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    amount: "2.5 ETH",
    commission: "0.005 ETH",
    type: "Withdrawal",
    status: "success",
    currency: "ETH",
  },
  {
    txid: "0x9c1e3a5f7d2b4c6e8a1f3d5c7e9b2a4d6f8c1e3a5b7d9c2e4f6a8b1d3c5e7f9a",
    created: "04/02",
    address: "internal_transfer",
    amount: "1000 USDT",
    commission: "0 USDT",
    type: "Transfer",
    status: "success",
    currency: "USDT",
  },
  {
    txid: "0x4e6a8c1d3f5b7e9c2a4d6f8b1e3c5a7d9f2b4c6e8a1d3f5c7e9b2a4d6f8c1e3a",
    created: "03/02",
    address: "TXyZ9KpL3mN5qR7sT2vW4xY6zA8bC1dE3fG5hJ7kL9mN1pQ3rS5tU7vW9xY1zA3b",
    amount: "500 USDT",
    commission: "1.5 USDT",
    type: "Deposit",
    status: "pending",
    currency: "USDT",
  },
  {
    txid: "0x8f1a3c5e7b9d2f4a6c8e1b3d5f7a9c2e4f6a8b1d3c5e7f9a2c4e6d8f1a3c5e7b9",
    created: "02/02",
    address: "staking_reward",
    amount: "25 USDT",
    commission: "0 USDT",
    type: "Earning",
    status: "success",
    currency: "USDT",
  },
  {
    txid: "0x5c7e9b2d4f6a8c1e3b5d7f9a2c4e6d8f1a3c5e7b9d2f4a6c8e1b3d5f7a9c2e4f6",
    created: "01/02",
    address: "bc1qxy4z8a6b2c4d6e8f1a3b5c7d9e2f4a6b8c1d3e",
    amount: "0.1 BTC",
    commission: "0.0002 BTC",
    type: "Deposit",
    status: "success",
    currency: "BTC",
  },
  {
    txid: "0x2e4d6f8a1c3e5b7d9f2a4c6e8b1d3f5a7c9e2b4d6f8a1c3e5b7d9f2a4c6e8b1d3",
    created: "01/02",
    address: "0x8a2c4e6f8b1d3a5c7e9b2d4f6a8c1e3b5d7f9a2c",
    amount: "5 ETH",
    commission: "0.01 ETH",
    type: "Withdrawal",
    status: "error",
    currency: "ETH",
  },
  {
    txid: "0x1d3f5a7c9e2b4d6f8a1c3e5b7d9f2a4c6e8b1d3f5a7c9e2b4d6f8a1c3e5b7d9f2",
    created: "28/01",
    address:
      "addr1qxy4z8a6b2c4d6e8f1a3b5c7d9e2f4a6b8c1d3e5f7a9b2c4d6e8f1a3b5c7d9e",
    amount: "500 ADA",
    commission: "2 ADA",
    type: "Withdrawal",
    status: "success",
    currency: "ADA",
  },
  {
    txid: "0x2a4c6e8d1f3a5c7e9b2d4f6a8c1e3b5d7f9a2c4e6d8f1a3b5c7e9d2f4b6a8c1e3",
    created: "24/01",
    address: "0x1a3b5c7d9e2f4a6b8c1d3e5f7a9b2c4d6e8f1a3b5",
    amount: "10 ETH",
    commission: "0.02 ETH",
    type: "Withdrawal",
    status: "success",
    currency: "ETH",
  },
];

export const depositTransactions = mockTransactions.filter(
  (t) => t.type === "Deposit",
);

export const withdrawalTransactions = mockTransactions.filter(
  (t) => t.type === "Withdrawal",
);

export const transferTransactions = mockTransactions.filter(
  (t) => t.type === "Transfer",
);

export const earningTransactions = mockTransactions.filter(
  (t) => t.type === "Earning",
);