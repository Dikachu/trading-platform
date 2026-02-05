import { useState } from "react";
import {
  ArrowLeftRight,
  CheckCircle,
  HelpCircle,
  Coins,
  // Paypal as PaypalIcon,
  // DollarSign,
  // Send,
  // Banknote,
  CreditCard,
  Building2,
  ArrowRight,
} from "lucide-react";
import { CryptoSelector, type CryptoOption } from "@/components/ui/CryptoSelector";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Input } from "@/components/ui/Input";
import { Toggle } from "@/components/ui/Toggle";
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
  {
    symbol: "XRP",
    name: "Ripple",
    icon: "https://cryptologos.cc/logos/ripple-xrp-logo.svg?v=025",
  },
];

const addressTypes: Record<string, string[]> = {
  BTC: ["BTC"],
  ETH: ["ETH"],
  USDT: ["TRC20", "ERC20", "OMNI"],
  USDC: ["ERC20", "SOL"],
  BNB: ["BEP20"],
  SOL: ["SOL"],
  TRX: ["TRC20"],
  XRP: ["XRP"],
};

const paymentSystems = [
  { name: "Crypto", icon: <Coins /> },
  { name: "PayPal", icon: <Coins /> },
  { name: "Bank Transfer", icon: <Building2 /> },
  { name: "Wise", icon: <ArrowRight /> },
  { name: "Payoneer", icon: <CreditCard /> },
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

export default function WithdrawPage() {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>(
    cryptoOptions[0],
  );
  const [selectedAddressType, setSelectedAddressType] = useState<string>("BTC");
  const [selectedPaymentSystem, setSelectedPaymentSystem] =
    useState<string>("Crypto");
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [showCommission, setShowCommission] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentAddressTypes = addressTypes[selectedCrypto.symbol] || [];
  const tradingPairs = ["BTC", "ETH", "USDT", "BNB", "SOL", "USDC", "XRP"];
  const availableBalance = 0.0;

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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Withdraw {selectedCrypto.symbol}
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 font-medium">Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {/* Crypto Selector */}
          <CryptoSelector
            options={cryptoOptions}
            selected={selectedCrypto}
            onSelect={(crypto) => {
              setSelectedCrypto(crypto);
              const types = addressTypes[crypto.symbol] || [];
              setSelectedAddressType(types[0] || "");
            }}
            searchable
          />

          {/* General Balance */}
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-gray-500">General balance:</span>
            <span className="font-semibold text-gray-900">
              {availableBalance.toFixed(1)} {selectedCrypto.symbol}
            </span>
          </div>

          {/* Go to Trading */}
          <div className="mt-4 flex items-center gap-2 flex-wrap sm:flex-nowrap text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <ArrowLeftRight className="w-4 h-4" />
              <span>Go to trading:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tradingPairs.map((pair) => (
                <button key={pair} className="text-blue-600 hover:underline">
                  {pair}
                </button>
              ))}
            </div>
          </div>

          {/* Address Type Selection */}
          <div className="mt-6">
            <label className="block text-sm text-gray-600 mb-2">
              Select the address type:
            </label>
            <div className="flex flex-wrap gap-2">
              {currentAddressTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedAddressType(type)}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedAddressType === type
                      ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {selectedAddressType === type && (
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                    )}
                    {type}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              We only send funds to the network of your choice. Make sure you
              choose the right network before withdrawing funds!
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {/* Payment System */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Payment System
            </label>
            <div className="grid grid-cols-2 gap-2">
              {paymentSystems.map((system) => (
                <button
                  key={system.name}
                  onClick={() => setSelectedPaymentSystem(system.name)}
                  className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-colors ${
                    selectedPaymentSystem === system.name
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-xl">{system.icon}</span>
                  <span className="font-medium">{system.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Withdrawal Address */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-gray-600">
                Withdrawal Address
              </label>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <Input
              value={withdrawalAddress}
              onChange={(e) => setWithdrawalAddress(e.target.value)}
              placeholder="Address"
            />
          </div>

          {/* Amount */}
          <div className="mb-4">
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              type="number"
            />
            <div className="flex items-center justify-end mt-2 text-sm">
              <span className="text-gray-500">Available balance:</span>
              <span className="ml-2 text-blue-600 font-medium cursor-pointer hover:underline">
                {availableBalance.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Show Commission Toggle */}
          <div className="mb-6">
            <Toggle
              enabled={showCommission}
              onChange={setShowCommission}
              label="Show amount with commission"
            />
          </div>

          {/* Payment Info */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <span className="text-gray-600">
              You'll Pay: 0 {selectedCrypto.symbol}
            </span>
            <span className="text-gray-600">
              You'll Receive: 0 {selectedCrypto.symbol}
            </span>
          </div>

          {/* Request Button */}
          <Button variant="primary" fullWidth className="mb-4">
            Request withdrawal
          </Button>

          {/* Info Text */}
          <p className="text-xs text-gray-500 text-center">
            Payments can take anywhere from a few minutes to a few hours to
            process.
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
