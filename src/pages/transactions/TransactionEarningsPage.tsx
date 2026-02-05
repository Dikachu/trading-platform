import { useState } from "react";
import { Upload } from "lucide-react";
import { earningTransactions } from "@/data/transactions";
import { exportToCSV, exportToJSON } from "@/utils/export";
import { DataTable, type Column } from "@/components/ui/DataTable";
import type { Transaction } from "@/types/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { SearchInput } from "@/components/ui/SearchInput";

export function TransactionEarningsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleExport = (format: "csv" | "json") => {
    if (format === "csv") {
      exportToCSV(earningTransactions, "earnings");
    } else {
      exportToJSON(earningTransactions, "earnings");
    }
    setShowExportMenu(false);
  };

  const columns: Column<Transaction>[] = [
    {
      key: "txid",
      header: "TXID",
      render: (item) => (
        <div className="max-w-[200px] truncate font-mono text-xs">
          {item.txid}
        </div>
      ),
    },
    { key: "created", header: "Created (DD/MM)" },
    {
      key: "address",
      header: "Address",
      render: (item) => (
        <div className="max-w-[200px] truncate font-mono text-xs">
          {item.address}
        </div>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      render: (item) => <span className="font-medium">{item.amount}</span>,
    },
    { key: "commission", header: "Commission" },
    {
      key: "type",
      header: "Type",
      render: (item) => <span className="text-gray-700">{item.type}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (item) => (
        <StatusBadge status={item.status} text={item.status} dot />
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          History - Earnings
        </h1>

        <div className="relative">
          <Button
            variant="outline"
            icon={Upload}
            onClick={() => setShowExportMenu(!showExportMenu)}
          >
            Export
          </Button>

          {showExportMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <button
                onClick={() => handleExport("csv")}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-t-lg"
              >
                Export as CSV
              </button>
              <button
                onClick={() => handleExport("json")}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-b-lg"
              >
                Export as JSON
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Address, TXID/Hash"
          className="max-w-md"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <DataTable
          columns={columns}
          data={earningTransactions}
          searchQuery={searchQuery}
          paginate
          itemsPerPage={15}
          emptyStateMessage="No Records"
        />
      </div>
    </div>
  );
}