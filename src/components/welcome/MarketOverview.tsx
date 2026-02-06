import { DataTable, type Column } from "../ui/DataTable";
import { SITE_CONFIG } from "@/constants/config";
import { Button } from "../ui/Button";
import { ArrowUp } from "lucide-react";
import type { Coin } from "@/types/types";
import Loader from "../ui/Loader";

const MarketOverview: React.FC<{ marketData: Coin[]; loading: boolean }> = ({ marketData, loading }) => {
  
  if(loading) {
    return <Loader />
  }

  const columns: Column<Coin>[] = [
    {
      header: "Name",
      key: "name",
      className: "w-[30%]",
      render: (item) => (
        <div className="flex items-center gap-3">
          <img
            src={item.image}
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
        <span className="font-semibold text-gray-700">
          ${item.current_price.toLocaleString()}
        </span>
      ),
    },
    {
      header: "24H Change",
      key: "change24h",
      render: (item) => (
        <span
          className={`font-medium ${item.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {item.price_change_percentage_24h >= 0 ? "+" : ""}
          {item.price_change_percentage_24h}%
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
        <Button
          variant="secondary"
          to={`profile/trading?action=${item.name.split("/")[0].toLowerCase()}`}
          size="sm"
        >
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
            <Button
              variant="outline"
              icon={ArrowUp}
              iconPosition="right"
              to="/assets/overview"
            >
              View more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
