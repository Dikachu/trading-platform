import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  paginate?: boolean;
  itemsPerPage?: number;
  emptyStateIcon?: React.ReactNode;
  emptyStateMessage?: string;
  className?: string;
  searchQuery?: string; // New Optional Prop
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  paginate = false,
  itemsPerPage = 10,
  emptyStateIcon,
  emptyStateMessage = "No Records",
  className = "",
  searchQuery = "", // Default to empty string
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter data based on search query across all keys
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;

    const query = searchQuery.toLowerCase();

    return data.filter((item) => {
      // We search through all values in the object
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query),
      );
    });
  }, [data, searchQuery]);

  // 2. Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // 3. Calculate pagination based on filtered data
  const totalPages = paginate
    ? Math.ceil(filteredData.length / itemsPerPage)
    : 1;
  const startIndex = paginate ? (currentPage - 1) * itemsPerPage : 0;
  const endIndex = paginate ? startIndex + itemsPerPage : filteredData.length;

  // Slice the filtered data for the current view
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 10;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const getValue = (item: T, key: string | keyof T): any => {
    if (typeof key === "string" && key.includes(".")) {
      return key.split(".").reduce((obj, k) => obj?.[k], item);
    }
    return item[key as keyof T];
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-left text-sm font-medium text-gray-500 ${column.className || ""}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="py-16 text-center">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    {emptyStateIcon || (
                      <div className="text-yellow-500 opacity-50">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          fill="none"
                        >
                          <rect
                            x="20"
                            y="15"
                            width="40"
                            height="50"
                            rx="2"
                            fill="currentColor"
                            opacity="0.2"
                          />
                          <path
                            d="M25 25h30M25 35h20M25 45h25"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle cx="60" cy="60" r="8" fill="#FDB022" />
                          <path
                            d="M58 58l4 4"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                    <p className="text-gray-400 text-sm">
                      {searchQuery
                        ? `No results found for "${searchQuery}"`
                        : emptyStateMessage}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              currentData.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-gray-100 cursor-pointer hover:bg-primary/10"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-4 py-4 text-sm ${column.className || ""}`}
                    >
                      {column.render
                        ? column.render(item)
                        : getValue(item, column.key)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination View - Logic based on filtered results */}
      {paginate && filteredData.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6 pb-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              disabled={page === "..."}
              className={`min-w-[32px] h-8 px-2 rounded text-sm transition-colors ${
                page === currentPage
                  ? "bg-gray-900 text-white"
                  : page === "..."
                    ? "cursor-default"
                    : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export interface Column<T> {
//   key: keyof T | string;
//   header: string;
//   render?: (item: T) => React.ReactNode;
//   className?: string;
// }

// interface DataTableProps<T> {
//   columns: Column<T>[];
//   data: T[];
//   paginate?: boolean;
//   itemsPerPage?: number;
//   emptyStateIcon?: React.ReactNode;
//   emptyStateMessage?: string;
//   className?: string;
// }

// export function DataTable<T extends Record<string, any>>({
//   columns,
//   data,
//   paginate = false,
//   itemsPerPage = 10,
//   emptyStateIcon,
//   emptyStateMessage = "No Records",
//   className = "",
// }: DataTableProps<T>) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = paginate ? Math.ceil(data.length / itemsPerPage) : 1;
//   const startIndex = paginate ? (currentPage - 1) * itemsPerPage : 0;
//   const endIndex = paginate ? startIndex + itemsPerPage : data.length;
//   const currentData = data.slice(startIndex, endIndex);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
//     const maxVisible = 10;

//     if (totalPages <= maxVisible) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);

//       if (currentPage > 3) {
//         pages.push("...");
//       }

//       const start = Math.max(2, currentPage - 1);
//       const end = Math.min(totalPages - 1, currentPage + 1);

//       for (let i = start; i <= end; i++) {
//         pages.push(i);
//       }

//       if (currentPage < totalPages - 2) {
//         pages.push("...");
//       }

//       pages.push(totalPages);
//     }

//     return pages;
//   };

//   const getValue = (item: T, key: string | keyof T): any => {
//     if (typeof key === "string" && key.includes(".")) {
//       return key.split(".").reduce((obj, k) => obj?.[k], item);
//     }
//     return item[key];
//   };

//   return (
//     <div className={`w-full ${className}`}>
//       <div className="overflow-x-auto">
//         <table className="w-full min-w-[500px]">
//           <thead>
//             <tr className="border-b border-gray-200">
//               {columns.map((column, index) => (
//                 <th
//                   key={index}
//                   className={`px-4 py-3 text-left text-sm font-medium text-gray-500 ${column.className || ""}`}
//                 >
//                   {column.header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length === 0 ? (
//               <tr>
//                 <td colSpan={columns.length} className="py-16 text-center">
//                   <div className="flex flex-col items-center justify-center space-y-3">
//                     {emptyStateIcon || (
//                       <div className="text-yellow-500">
//                         <svg
//                           width="80"
//                           height="80"
//                           viewBox="0 0 80 80"
//                           fill="none"
//                         >
//                           <rect
//                             x="20"
//                             y="15"
//                             width="40"
//                             height="50"
//                             rx="2"
//                             fill="currentColor"
//                             opacity="0.2"
//                           />
//                           <path
//                             d="M25 25h30M25 35h20M25 45h25"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                           />
//                           <circle cx="60" cy="60" r="8" fill="#FDB022" />
//                           <path
//                             d="M58 58l4 4"
//                             stroke="white"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                     <p className="text-gray-400 text-sm">{emptyStateMessage}</p>
//                   </div>
//                 </td>
//               </tr>
//             ) : (
//               currentData.map((item, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   className="border-b border-gray-100 cursor-pointer hover:bg-primary/20"
//                 >
//                   {columns.map((column, colIndex) => (
//                     <td
//                       key={colIndex}
//                       className={`px-4 py-4 text-sm ${column.className || ""}`}
//                     >
//                       {column.render
//                         ? column.render(item)
//                         : getValue(item, column.key)}
//                     </td>
//                   ))}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {paginate && data.length > 0 && totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 mt-6 pb-4">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>

//           {getPageNumbers().map((page, index) => (
//             <button
//               key={index}
//               onClick={() => typeof page === "number" && handlePageChange(page)}
//               disabled={page === "..."}
//               className={`min-w-[32px] h-8 px-2 rounded text-sm transition-colors ${
//                 page === currentPage
//                   ? "bg-gray-900 text-white"
//                   : page === "..."
//                     ? "cursor-default"
//                     : "hover:bg-gray-100"
//               }`}
//             >
//               {page}
//             </button>
//           ))}

//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="p-2 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
