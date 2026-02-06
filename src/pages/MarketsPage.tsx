import { useState } from "react";
import { Star } from "lucide-react";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { SearchInput } from "@/components/ui/SearchInput";
import { Tabs } from "@/components/ui/Tabs";
import { Toggle } from "@/components/ui/Toggle";
import { Button } from "@/components/ui/Button";
import cryptoData from "@/data/cryptoData.json";

interface MarketCrypto {
  id: number;
  symbol: string;
  name: string;
  icon: string;
  pair: string;
  lastPrice: string;
  change24h: number;
  high24h: string;
  low24h: string;
  volume24h: string;
  isFavorite?: boolean;
}

export function MarketsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visualization, setVisualization] = useState(false);

  // Transform crypto data to market data
  const marketData: MarketCrypto[] = cryptoData.coins.map((crypto) => ({
    id: crypto.id,
    symbol: crypto.symbol,
    name: crypto.name,
    icon: crypto.icon,
    pair: `${crypto.symbol} / USDT`,
    lastPrice: `$${crypto.price.toLocaleString()}`,
    change24h: crypto.change24h,
    high24h: `$${(crypto.price * 1.05).toLocaleString()}`,
    low24h: `$${(crypto.price * 0.95).toLocaleString()}`,
    volume24h: `${(Math.random() * 1000000).toFixed(2)} (USDT)`,
    isFavorite: false,
  }));

  const tabs = [
    { key: "favorites", label: "Favorites" },
    { key: "spot", label: "Spot" },
    { key: "futures", label: "Futures" },
  ];

  const subTabs = [
    { key: "all", label: "All" },
    { key: "crypto", label: "Crypto" },
    { key: "stable", label: "State Currencies" },
  ];

  const columns: Column<MarketCrypto>[] = [
    {
      key: "pair",
      header: "Trading Pairs",
      render: (item) => (
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-yellow-500 transition-colors">
            <Star className="w-4 h-4" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <img
              src={item.icon}
              alt={item.symbol}
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="font-semibold text-gray-900">{item.pair}</div>
        </div>
      ),
    },
    {
      key: "lastPrice",
      header: "Last Price",
      render: (item) => (
        <span className="font-medium text-gray-900">{item.lastPrice}</span>
      ),
    },
    {
      key: "change24h",
      header: "24H Change %",
      render: (item) => (
        <span
          className={`font-medium ${
            item.change24h >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {item.change24h >= 0 ? "+" : ""}
          {item.change24h.toFixed(2)}%
        </span>
      ),
    },
    {
      key: "high24h",
      header: "24H High",
      render: (item) => <span className="text-gray-900">{item.high24h}</span>,
    },
    {
      key: "low24h",
      header: "24H Low",
      render: (item) => <span className="text-gray-900">{item.low24h}</span>,
    },
    {
      key: "volume24h",
      header: "24H Volume",
      render: (item) => <span className="text-gray-900">{item.volume24h}</span>,
    },
    {
      key: "actions",
      header: "Crypto Markets",
      render: () => (
        <Button variant="outline" size="sm" className="text-xs px-4">
          Trade
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Markets
          </h1>

          {/* Main Tabs */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              variant="underline"
            />

            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search"
              className="md:w-64"
            />
          </div>

          {/* Sub Tabs and Visualization Toggle */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Tabs
              tabs={subTabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              variant="pills"
            />

            <Toggle
              enabled={visualization}
              onChange={setVisualization}
              label="Visualization"
            />
          </div>
        </div>

        {/* Markets Table */}
        <DataTable
          columns={columns}
          data={marketData}
          paginate={true}
          itemsPerPage={25}
          emptyStateMessage="No markets available"
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
}