import { useState } from "react";
import { Download } from "lucide-react";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { CryptoIconWithLabel } from "@/components/ui/CryptoIconWithLabel";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";

interface Asset {
  icon: string;
  symbol: string;
  name: string;
  overall: number;
  overallUsd: number;
  main: number;
  mainUsd: number;
  trade: number;
  tradeUsd: number;
  collateral: number;
  collateralUsd: number;
}

const mockAssets: Asset[] = [
  {
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
    symbol: "BTC",
    name: "Bitcoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
    symbol: "ETH",
    name: "Ethereum",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
    symbol: "USDT",
    name: "Tether",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
    symbol: "BNB",
    name: "Binance",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
    symbol: "SOL",
    name: "Solana",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025",
    symbol: "USDC",
    name: "USD Coin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/ripple-xrp-logo.svg?v=025",
    symbol: "XRP",
    name: "Ripple",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=025",
    symbol: "DOGE",
    name: "Dogecoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=025",
    symbol: "TON",
    name: "Toncoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=025",
    symbol: "TRX",
    name: "TRON",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=025",
    symbol: "ADA",
    name: "Cardano",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=025",
    symbol: "AVAX",
    name: "Avalanche",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=025",
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=025",
    symbol: "SHIB",
    name: "Shiba Inu",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=025",
    symbol: "BCH",
    name: "Bitcoin Cash",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
    symbol: "BTC",
    name: "Bitcoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
    symbol: "ETH",
    name: "Ethereum",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
    symbol: "USDT",
    name: "Tether",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
    symbol: "BNB",
    name: "Binance",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
    symbol: "SOL",
    name: "Solana",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025",
    symbol: "USDC",
    name: "USD Coin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/ripple-xrp-logo.svg?v=025",
    symbol: "XRP",
    name: "Ripple",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=025",
    symbol: "DOGE",
    name: "Dogecoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=025",
    symbol: "TON",
    name: "Toncoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=025",
    symbol: "TRX",
    name: "TRON",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=025",
    symbol: "ADA",
    name: "Cardano",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=025",
    symbol: "AVAX",
    name: "Avalanche",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=025",
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=025",
    symbol: "SHIB",
    name: "Shiba Inu",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
  {
    icon: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=025",
    symbol: "BCH",
    name: "Bitcoin Cash",
    overall: 0.0,
    overallUsd: 0.0,
    main: 0.0,
    mainUsd: 0.0,
    trade: 0.0,
    tradeUsd: 0.0,
    collateral: 0.0,
    collateralUsd: 0.0,
  },
];

export default function AssetOverviewPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const columns: Column<Asset>[] = [
    {
      key: "symbol",
      header: "Assets",
      render: (item) => (
        <CryptoIconWithLabel
          icon={item.icon}
          symbol={item.symbol}
          name={item.name}
        />
      ),
    },
    {
      key: "overall",
      header: "Overall",
      render: (item) => (
        <div>
          <div className="font-medium">{item.overall.toFixed(2)}</div>
          <div className="text-xs text-gray-400">
            {item.overallUsd.toFixed(2)} USD
          </div>
        </div>
      ),
    },
    {
      key: "main",
      header: "Main",
      render: (item) => (
        <div>
          <div className="font-medium">{item.main.toFixed(2)}</div>
          <div className="text-xs text-gray-400">
            {item.mainUsd.toFixed(2)} USD
          </div>
        </div>
      ),
    },
    {
      key: "trade",
      header: "Trade",
      render: (item) => (
        <div>
          <div className="font-medium">{item.trade.toFixed(2)}</div>
          <div className="text-xs text-gray-400">
            {item.tradeUsd.toFixed(2)} USD
          </div>
        </div>
      ),
    },
    {
      key: "collateral",
      header: "Collateral",
      render: (item) => (
        <div>
          <div className="font-medium">{item.collateral.toFixed(2)}</div>
          <div className="text-xs text-gray-400">
            {item.collateralUsd.toFixed(2)} USD
          </div>
        </div>
      ),
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" to="assets/deposit">
            Deposit
          </Button>
          <Button size="sm" variant="outline" to="assets/swap">
            Swap
          </Button>
          <Button size="sm" variant="outline" to="assets/withdraw">
            Withdraw
          </Button>
        </div>
      ),
      className: "text-right",
    },
  ];

  return (
    <>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Assets Overview</h1>

      {/* Balance Card */}
      <div className="bg-gray-100 rounded-lg p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-gray-700">
          Balance: <span className="font-semibold">$0 ≈ 0 BTC</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="primary"
            icon={Download}
            to="/assets/deposit"
            rotateIcon={false}
          >
            Deposit
          </Button>
          <Button variant="outline" to="/assets/withdraw">
            Withdraw
          </Button>
          <Button variant="outline" to="/assets/transfer">
            Transfer
          </Button>
          <Button variant="outline" to="/assets/swap">
            Swap
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search assets..."
          className="max-w-sm"
        />
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <DataTable
          columns={columns}
          data={mockAssets}
          searchQuery={searchQuery}
          paginate
          itemsPerPage={10}
          emptyStateMessage="No assets found"
        />
      </div>
    </>
  );
}
