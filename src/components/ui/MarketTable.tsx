import React, { useState, useMemo } from "react";

// Define the structure for dynamic columns
export interface ColumnConfig<T> {
  header: string;
  key: keyof T | string; // key from data object or a custom string for computed cols
  render?: (item: T) => React.ReactNode; // custom renderer for things like icons or colored text
  className?: string; // custom classes for specific columns (e.g., text-right for prices)
}

interface MarketTableProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  paginate?: boolean;
  itemsPerPage?: number;
}

const MarketTable = <T extends Record<string, any>>({
  data,
  columns,
  paginate = false,
  itemsPerPage = 10,
}: MarketTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Logic to calculate sliced data for pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    if (!paginate) return data;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, paginate, currentPage, itemsPerPage]);

  return (
    <div className="w-full bg-[#0B0E11] rounded-xl overflow-hidden border border-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Header */}
          <thead className="bg-[#181A20] text-gray-400 border-b border-gray-800">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-4 font-medium text-sm ${col.className || ""}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-white divide-y divide-gray-800">
            {currentData.map((item, rowIdx) => (
              <tr
                key={rowIdx}
                className="hover:bg-[#1E2329] transition-colors group"
              >
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-4 py-4 text-sm ${col.className || ""}`}
                  >
                    {col.render ? col.render(item) : item[col.key as keyof T]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {paginate && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 py-6 border-t border-gray-800">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`min-w-[32px] h-8 rounded px-2 transition-all font-medium text-sm ${
                currentPage === num
                  ? "bg-primary text-black"
                  : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketTable;