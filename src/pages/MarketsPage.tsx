// import React, { useState } from "react";
// import { Star, TrendingUp } from "lucide-react";
// import { Tabs } from "../components/Tabs";
// import { SearchInput } from "../components/SearchInput";
// import { DataTable } from "../components/DataTable";
// import { CryptoIcon } from "../components/CryptoIcon";
// import { Button } from "../components/Button";
// import { Toggle } from "../components/Toggle";

// const marketData = [
//   {
//     pair: "BTC / USDT",
//     symbol: "BTC",
//     lastPrice: "$78587.44",
//     change24h: 2.99,
//     high24h: "$79360",
//     low24h: "$74604",
//     volume: "306,803,104.00 (USDT)",
//     isFavorite: false,
//   },
//   {
//     pair: "ETH / USDT",
//     symbol: "ETH",
//     lastPrice: "$2531.1",
//     change24h: 3.65,
//     high24h: "$2604.4",
//     low24h: "$2344.16",
//     volume: "284,223,590.00 (USDT)",
//     isFavorite: false,
//   },
//   {
//     pair: "BNB / USDT",
//     symbol: "BNB",
//     lastPrice: "$770.76",
//     change24h: 3.12,
//     high24h: "$781.58",
//     low24h: "$728.44",
//     volume: "217,116,05.00 (USDT)",
//     isFavorite: false,
//   },
//   {
//     pair: "SOL / USDT",
//     symbol: "SOL",
//     lastPrice: "$103.86",
//     change24h: 3.85,
//     high24h: "$106.12",
//     low24h: "$95.95",
//     volume: "511,530,46.00 (USDT)",
//     isFavorite: false,
//   },
//   {
//     pair: "USDC / USDT",
//     symbol: "USDC",
//     lastPrice: "$1",
//     change24h: -0.01,
//     high24h: "$1.001",
//     low24h: "$1.0003",
//     volume: "261,463,860.00 (USDT)",
//     isFavorite: false,
//   },
// ];

// export default function MarketsPage() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showVisualization, setShowVisualization] = useState(true);

//   const columns = [
//     {
//       key: "pair",
//       header: "Trading Pairs",
//       render: (item: any) => (
//         <div className="flex items-center gap-3">
//           <button className="text-gray-400 hover:text-yellow-500">
//             <Star className="w-4 h-4" />
//           </button>
//           <CryptoIcon symbol={item.symbol} size="sm" />
//           <span className="font-medium">{item.pair}</span>
//         </div>
//       ),
//     },
//     {
//       key: "lastPrice",
//       header: "Last Price",
//       render: (item: any) => (
//         <span className="font-medium">{item.lastPrice}</span>
//       ),
//     },
//     {
//       key: "change24h",
//       header: "24H Change %",
//       render: (item: any) => (
//         <span
//           className={`font-medium ${
//             item.change24h >= 0 ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {item.change24h >= 0 ? "+" : ""}
//           {item.change24h}%
//         </span>
//       ),
//     },
//     { key: "high24h", header: "24H High" },
//     { key: "low24h", header: "24H Low" },
//     { key: "volume", header: "24H Volume" },
//     {
//       key: "action",
//       header: "Crypto Markets",
//       render: () => (
//         <Button variant="outline" size="sm">
//           Trade
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-8 py-8">
//         <h1 className="text-3xl font-bold mb-8">Markets</h1>

//         <div className="flex items-center gap-4 mb-6">
//           <Tabs
//             tabs={[
//               { key: "favorites", label: "Favorites" },
//               { key: "spot", label: "Spot" },
//               { key: "futures", label: "Futures" },
//             ]}
//             activeTab={activeTab}
//             onChange={setActiveTab}
//             variant="underline"
//           />

//           <SearchInput
//             value={searchTerm}
//             onChange={setSearchTerm}
//             placeholder="Search"
//             className="ml-auto w-64"
//           />
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200">
//           <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
//             <div className="flex gap-6">
//               {["All", "Crypto", "State Currencies"].map((tab) => (
//                 <button
//                   key={tab}
//                   className={`text-sm font-medium ${
//                     tab === "All"
//                       ? "text-gray-900"
//                       : "text-gray-500 hover:text-gray-700"
//                   }`}
//                 >
//                   {tab}
//                   {tab === "State Currencies" && (
//                     <span className="ml-2 px-2 py-0.5 bg-gray-900 text-white text-xs rounded">
//                       Soon
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>

//             <Toggle
//               enabled={showVisualization}
//               onChange={setShowVisualization}
//               label="Visualization"
//             />
//           </div>

//           <DataTable
//             columns={columns}
//             data={marketData}
//             paginate
//             itemsPerPage={10}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }