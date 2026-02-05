import { useState } from "react";
import { CryptoSelector, type CryptoOption } from "@/components/ui/CryptoSelector";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";

const cryptoOptions: CryptoOption[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
  },
  {
    symbol: "USDT",
    name: "Tether",
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025",
  },
  {
    symbol: "BNB",
    name: "Binance",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
  },
  {
    symbol: "TRX",
    name: "TRON",
    icon: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=025",
  },
];

interface Transaction {
  txid: string;
  created: string;
  address: string;
  amount: string;
  commission: string;
  type: string;
  status: "success" | "pending" | "error";
}

const mockTransactions: Transaction[] = [];

export default function TransferPage() {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>(
    cryptoOptions[0],
  );
  const [recipientEmail, setRecipientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const availableBalance = 0.0;

  const handleSubmit = () => {
    // Handle transfer submission
    console.log("Transfer:", { selectedCrypto, recipientEmail, amount });
  };

  const columns: Column<Transaction>[] = [
    { key: "txid", header: "TXID" },
    { key: "created", header: "Created (DD/MM)" },
    { key: "address", header: "Address" },
    { key: "amount", header: "Amount" },
    { key: "commission", header: "Commission" },
    { key: "type", header: "Type" },
    {
      key: "status",
      header: "Status",
      render: (item) => <StatusBadge status={item.status} text={item.status} />,
    },
  ];

  return (
    <>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Transfer {selectedCrypto.symbol}
      </h1>

      <div className="max-w-xl mx-auto">
        {/* Transfer Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          {/* Crypto Selector */}
          <CryptoSelector
            options={cryptoOptions}
            selected={selectedCrypto}
            onSelect={setSelectedCrypto}
            searchable
          />

          {/* Recipient Email */}
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-2">
              Recipient's E-Mail / ID
            </label>
            <Input
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              placeholder="E-Mail or ID"
            />
          </div>

          {/* Amount */}
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-2">Amount</label>
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              type="number"
            />
            <div className="flex items-center justify-end mt-2 text-sm">
              <span className="text-gray-500">Available balance:</span>
              <span className="ml-2 text-blue-600 font-medium cursor-pointer hover:underline">
                {availableBalance.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            fullWidth
            className="mt-6"
            onClick={handleSubmit}
          >
            Submit Transfer
          </Button>

          {/* Info Text */}
          <p className="mt-4 text-xs text-gray-500 text-center">
            Transfers are made within the exchange and are executed instantly.
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-4">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Address, TXID/Hash"
          className="max-w-md"
        />
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <DataTable
          columns={columns}
          data={mockTransactions}
          searchQuery={searchQuery}
          emptyStateMessage="No Records"
        />
      </div>
    </>
  );
}
