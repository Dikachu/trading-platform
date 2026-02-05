import { DataTable, type Column } from "../ui/DataTable";
import { SITE_CONFIG } from "@/constants/config";
import { Button } from "../ui/Button";
import { ArrowUp } from "lucide-react";

// Define the data interface based on the image
interface CoinData {
  id: string;
  name: string;
  lastPrice: string;
  change24h: number;
  icon: string;
}

const MarketOverview: React.FC = () => {
  // Hand-coded data from the screenshot
  const marketData: CoinData[] = [
    {
      id: "1",
      name: "BTC/USDT",
      lastPrice: "76714.84",
      change24h: -2.33,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "2",
      name: "ETH/USDT",
      lastPrice: "2278.94",
      change24h: -1.8,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "3",
      name: "BNB/USDT",
      lastPrice: "762.61",
      change24h: -1.98,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "4",
      name: "SOL/USDT",
      lastPrice: "105.36",
      change24h: -5.78,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "5",
      name: "XRP/USDT",
      lastPrice: "1.6025",
      change24h: -0.63,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "6",
      name: "DOGE/USDT",
      lastPrice: "0.10855",
      change24h: 1.61,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "7",
      name: "TON/USDT",
      lastPrice: "1.396",
      change24h: 2.19,
      icon: "/images/crypto-icons/BTC.png",
    },
    {
      id: "8",
      name: "TRX/USDT",
      lastPrice: "0.2872",
      change24h: 1.27,
      icon: "/images/crypto-icons/BTC.png",
    },
  ];

  const columns: Column<CoinData>[] = [
    {
      header: "Name",
      key: "name",
      className: "w-[30%]",
      render: (item) => (
        <div className="flex items-center gap-3">
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="font-bold text-gray-800">{item.name}</span>
        </div>
      ),
    },
    {
      header: "Last Price",
      key: "lastPrice",
      render: (item) => (
        <span className="font-semibold text-gray-700">${item.lastPrice}</span>
      ),
    },
    {
      header: "24H Change",
      key: "change24h",
      render: (item) => (
        <span
          className={`font-medium ${item.change24h >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {item.change24h >= 0 ? "+" : ""}
          {item.change24h}%
        </span>
      ),
    },
    {
      header: "Crypto Markets",
      key: "markets",
      className: "hidden md:table-cell",
      render: () => <div className="h-4 w-24 bg-gray-50 rounded" />,
    },
    {
      header: "Operation",
      key: "operation",
      className: "text-right",
      render: (item) => (
        <Button variant="secondary" to={`profile/trading?action=${item.name.split("/")[0].toLowerCase()}`} size="sm">
          Trade
        </Button>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Market Overview
          </h2>
          <p className="text-gray-500 text-lg">
            Popular cryptocurrencies on the market{" "}
            <span className="font-semibold text-gray-700">
              {SITE_CONFIG.name}
            </span>
          </p>
        </div>

        {/* Table Wrapper */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <DataTable
            columns={columns}
            data={marketData}
            paginate={false} 
            className="px-2"
          />

          {/* Footer Link */}
          <div className="py-4 border-t border-gray-50 flex justify-center">
            <Button variant="outline" icon={ArrowUp} iconPosition="right" to="/profile/markets">View more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
