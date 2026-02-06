import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { useCoins } from "@/hooks/useCoins";
import Loader from "@/components/ui/Loader";

// Helper function to generate min deposit based on price
const getMinDeposit = (symbol: string, price: number) => {
  const minDepositValues: Record<string, string> = {
    BTC: "0.0005 BTC",
    ETH: "0.005 ETH",
    USDT: "50 USDT",
    USDC: "50 USDC",
    TRX: "20 TRX",
    TON: "1 TON",
    BNB: "0.01 BNB",
    XRP: "10 XRP",
    SOL: "0.1 SOL",
    LTC: "0.025 LTC",
    DOGE: "50 DOGE",
    ADA: "2 ADA",
    DASH: "0.05 DASH",
    BCH: "0.01 BCH",
    ZEC: "0.05 ZEC",
    ETC: "0.2 ETC",
    EOS: "1 EOS",
    XLM: "10 XLM",
    SHIB: "1000000 SHIB",
  };

  return minDepositValues[symbol] || `${(50 / price).toFixed(4)} ${symbol}`;
};

interface CryptoFee {
  id: string;
  symbol: string;
  name: string;
  icon: string;
  minDeposit: string;
  depositFee: string;
}

export function FeesPage() {
  const {coins, loading} = useCoins();

  // Transform crypto data to include fee information
  const cryptoFees: CryptoFee[] = coins.slice(1,20).map((crypto) => ({
    id: crypto.id,
    symbol: crypto.symbol,
    name: crypto.name,
    icon: crypto.image,
    minDeposit: getMinDeposit(crypto.symbol, crypto.current_price),
    depositFee: "1.0%",
  }));

  const columns: Column<CryptoFee>[] = [
    {
      key: "symbol",
      header: "Payment method",
      render: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <img
              src={item.icon}
              alt={item.symbol}
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{item.symbol}</div>
            <div className="text-xs text-gray-500">{item.name}</div>
          </div>
        </div>
      ),
    },
    {
      key: "minDeposit",
      header: "Min deposit",
      render: (item) => (
        <span className="text-sm text-gray-900">{item.minDeposit}</span>
      ),
    },
    {
      key: "depositFee",
      header: "Deposit fee",
      render: (item) => (
        <span className="text-sm text-gray-900">{item.depositFee}</span>
      ),
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <Button variant="outline" size="sm" className="text-xs px-4 py-2">
            Deposit
          </Button>
          <Button variant="outline" size="sm" className="text-xs px-4 py-2">
            Swap
          </Button>
          <Button variant="outline" size="sm" className="text-xs px-4 py-2">
            Withdraw
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      {loading && <Loader />}
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fees
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl">
            Withdrawal fees depend on the value of the blockchain and asset
            prices. They are subject to change without notice. Always check the
            information.
          </p>
        </div>

        {/* Trading Fees */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Trading Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Standard trading fee. Please note that for some pairs the
                trading fee may differ but does not exceed 0.1%
              </p>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                0.1%
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Daily fee for using funds in margin trading and loans
              </p>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                0.078%
              </div>
            </Card>
          </div>
        </section>

        {/* Payment Fees */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Payment Fees
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Checkout our Payment Fees
          </p>

          {/* DataTable */}
          <DataTable
            columns={columns}
            data={cryptoFees}
            paginate={true}
            itemsPerPage={20}
            emptyStateMessage="No cryptocurrencies available"
          />
        </section>
      </div>
    </div>
  );
}

// import { Card } from "@/components/ui/Card";
// import { Button } from "@/components/ui/Button";
// import cryptoData from "@/data/cryptoData.json";

// // Helper function to generate min deposit based on price
// const getMinDeposit = (symbol: string, price: number) => {
//   const minDepositValues: Record<string, string> = {
//     BTC: "0.0005 BTC",
//     ETH: "0.005 ETH",
//     USDT: "50 USDT",
//     USDC: "50 USDC",
//     TRX: "20 TRX",
//     TON: "1 TON",
//     BNB: "0.01 BNB",
//     XRP: "10 XRP",
//     SOL: "0.1 SOL",
//     LTC: "0.025 LTC",
//     DOGE: "50 DOGE",
//     ADA: "2 ADA",
//     DASH: "0.05 DASH",
//     BCH: "0.01 BCH",
//     ZEC: "0.05 ZEC",
//     ETC: "0.2 ETC",
//     EOS: "1 EOS",
//     XLM: "10 XLM",
//     SHIB: "1000000 SHIB",
//   };

//   return minDepositValues[symbol] || `${(50 / price).toFixed(4)} ${symbol}`;
// };

// export function FeesPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8 md:py-12">
//       <div className="container mx-auto px-4 max-w-6xl">
//         {/* Header */}
//         <div className="mb-8 md:mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Fees
//           </h1>
//           <p className="text-gray-600 text-sm md:text-base max-w-3xl">
//             Withdrawal fees depend on the value of the blockchain and asset
//             prices. They are subject to change without notice. Always check the
//             information.
//           </p>
//         </div>

//         {/* Trading Fees */}
//         <section className="mb-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//             Trading Fees
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card className="p-6">
//               <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                 Standard trading fee. Please note that for some pairs the
//                 trading fee may differ but does not exceed 0.1%
//               </p>
//               <div className="text-3xl md:text-4xl font-bold text-gray-900">
//                 0.1%
//               </div>
//             </Card>

//             <Card className="p-6">
//               <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                 Daily fee for using funds in margin trading and loans
//               </p>
//               <div className="text-3xl md:text-4xl font-bold text-gray-900">
//                 0.078%
//               </div>
//             </Card>
//           </div>
//         </section>

//         {/* Payment Fees */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//             Payment Fees
//           </h2>
//           <p className="text-gray-600 text-sm mb-6">
//             Checkout our Payment Fees
//           </p>

//           {/* Table */}
//           <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//             {/* Table Header */}
//             <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
//               <div className="col-span-3">Payment method</div>
//               <div className="col-span-2">Min deposit</div>
//               <div className="col-span-2">Deposit fee</div>
//               <div className="col-span-5"></div>
//             </div>

//             {/* Table Body */}
//             <div className="divide-y divide-gray-100">
//               {cryptoData.coins.map((crypto) => (
//                 <div
//                   key={crypto.id}
//                   className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 hover:bg-gray-50 transition-colors"
//                 >
//                   {/* Crypto Info */}
//                   <div className="col-span-1 md:col-span-3 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
//                       <img
//                         src={crypto.icon}
//                         alt={crypto.symbol}
//                         className="w-6 h-6 object-contain"
//                       />
//                     </div>
//                     <div>
//                       <div className="font-semibold text-gray-900">
//                         {crypto.symbol}
//                       </div>
//                       <div className="text-sm text-gray-500">{crypto.name}</div>
//                     </div>
//                   </div>

//                   {/* Min Deposit */}
//                   <div className="col-span-1 md:col-span-2 flex items-center">
//                     <div>
//                       <span className="md:hidden text-xs text-gray-500 mr-2">
//                         Min deposit:
//                       </span>
//                       <span className="text-sm text-gray-900">
//                         {getMinDeposit(crypto.symbol, crypto.price)}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Deposit Fee */}
//                   <div className="col-span-1 md:col-span-2 flex items-center">
//                     <div>
//                       <span className="md:hidden text-xs text-gray-500 mr-2">
//                         Deposit fee:
//                       </span>
//                       <span className="text-sm text-gray-900">10%</span>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="col-span-1 md:col-span-5 flex items-center gap-2 flex-wrap">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="text-xs px-4 py-2"
//                     >
//                       Deposit
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="text-xs px-4 py-2"
//                     >
//                       Swap
//                     </Button>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="text-xs px-4 py-2"
//                     >
//                       Withdraw
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
