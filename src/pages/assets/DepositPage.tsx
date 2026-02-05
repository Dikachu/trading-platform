import { useState } from "react";
import {
  ArrowLeftRight,
  CheckCircle,
} from "lucide-react";
import { CryptoSelector, type CryptoOption } from "@/components/ui/CryptoSelector";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { QRCodeDisplay } from "@/components/ui/QRCodeDisplay";
import { Input } from "@/components/ui/Input";
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
    symbol: "TON",
    name: "Toncoin",
    icon: "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=025",
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
  TON: ["TON"],
};

const partnerOptions = [
  { name: "PayPal", url: "https://paypal.com" },
  { name: "Coinbase", url: "https://coinbase.com" },
  { name: "Binance Pay", url: "https://binance.com/pay" },
  { name: "Crypto.com Pay", url: "https://crypto.com/pay" },
  { name: "Moonpay", url: "https://moonpay.com" },
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

export default function DepositPage() {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>(
    cryptoOptions[0],
  );
  const [selectedAddressType, setSelectedAddressType] = useState<string>("");
  const [selectedPartner, setSelectedPartner] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const currentAddressTypes = addressTypes[selectedCrypto.symbol] || [];
  const depositAddress = selectedAddressType
    ? `bc1qa3mv30rf66xpdffmqkdk8mkrl0fs4ngavtum5`
    : "";

  const tradingPairs = ["BTC", "ETH", "USDT", "USDC", "TRX", "TON", "BNB"];

  const handlePartnerSelect = (partner: string) => {
    const selectedPartnerObj = partnerOptions.find((p) => p.name === partner);
    if (selectedPartnerObj) {
      window.open(selectedPartnerObj.url, "_blank");
    }
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Deposit {selectedCrypto.symbol}
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
              setSelectedAddressType("");
            }}
            searchable
          />

          {/* General Balance */}
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-gray-500">General balance:</span>
            <span className="font-semibold text-gray-900">
              0.0 {selectedCrypto.symbol}
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
          {selectedAddressType && (
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">
                  Selected network: {selectedAddressType}
                </span>
                <br />
                <br />
                Before sending funds, pay attention to the selected token
                standard! Make sure that you use the selected network when
                transferring funds. Otherwise your funds may be lost.
                <br />
                <br />
                Send only{" "}
                <span className="font-semibold">
                  {selectedCrypto.symbol}
                </span>{" "}
                to the deposit address. Sending any other coins or tokens to
                this address may result in loss of funds.
              </p>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          {/* QR Code */}
          <div
            className={`flex items-center justify-center mb-6 transition-opacity ${
              !selectedAddressType ? "opacity-30 pointer-events-none" : ""
            }`}
          >
            <QRCodeDisplay data={depositAddress} size={200} />
          </div>

          {/* Instructions */}
          <div className="space-y-3 text-sm text-gray-600 mb-6">
            <p>Select a partner site from the list below</p>
            <p>Copy the deposit address</p>
            <p>Make an exchange for the copied address on the selected site</p>
          </div>

          {selectedAddressType && (
            <>
              {/* Partner Selection */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">
                  Select partner from the list
                </label>
                <select
                  value={selectedPartner}
                  onChange={(e) => {
                    setSelectedPartner(e.target.value);
                    handlePartnerSelect(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                >
                  <option value="">Choose a payment partner...</option>
                  {partnerOptions.map((partner) => (
                    <option key={partner.name} value={partner.name}>
                      {partner.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deposit Address */}
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">
                  Deposit address
                </label>
                <Input
                  value={depositAddress}
                  readOnly
                  copyable
                  // disabled={!selectedAddressType}
                />
              </div>

              {/* Minimum Deposit */}
              <p className="text-sm text-gray-600">
                Minimum deposit amount:{" "}
                <span className="text-red-500 font-medium">
                  0.0005 {selectedCrypto.symbol}
                </span>
              </p>
            </>
          )}
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
