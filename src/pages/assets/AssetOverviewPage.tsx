import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { CryptoIconWithLabel } from "@/components/ui/CryptoIconWithLabel";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";
import type { Asset } from "@/types/types";
import { useAssets } from "@/hooks/useAssets";
import { useCoins } from "@/hooks/useCoins";
import balances from "@/data/balances.json";
import Loader from "@/components/ui/Loader";


export default function AssetOverviewPage() {
  const { coins, loading } = useCoins();
  const assets: Asset[] = useAssets({ coins, balances });
  const [searchQuery, setSearchQuery] = useState("");

  const sortedAssets = useMemo(() => {
    if (!assets) return [];

    return [...assets].sort((a, b) => {
      // 1. Check if they have a balance
      const hasBalanceA = a.overallUsd > 0;
      const hasBalanceB = b.overallUsd > 0;

      // 2. If both have balances, sort by USD value (highest first)
      if (hasBalanceA && hasBalanceB) {
        return b.overallUsd - a.overallUsd;
      }

      // 3. If only A has a balance, move it to the top
      if (hasBalanceA) return -1;

      // 4. If only B has a balance, move it to the top
      if (hasBalanceB) return 1;

      // 5. If neither has a balance, keep their original order (Market Rank)
      return 0;
    });
  }, [assets]);

  const columns: Column<Asset>[] = [
    {
      key: "symbol",
      header: "Assets",
      render: (item) => (
        <CryptoIconWithLabel
          icon={item.image}
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

  if (loading) {
    return <Loader />;
  }

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
          data={sortedAssets}
          searchQuery={searchQuery}
          paginate
          itemsPerPage={10}
          emptyStateMessage="No assets found"
        />
      </div>
    </>
  );
}
