import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PercentageSlider } from "@/components/ui/PercentageSlider";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CryptoSelector, type CryptoOption } from "@/components/ui/CryptoSelector";
import { useCoins } from "@/hooks/useCoins";
import Loader from "@/components/ui/Loader";

type OrderType = "limit" | "market" | "trigger";

interface OpenOrder {
  date: string;
  pair: string;
  side: "Buy" | "Sell";
  type: string;
  amount: string;
  price: string;
}

interface TradeHistory {
  date: string;
  pair: string;
  side: "Buy" | "Sell";
  type: string;
  amount: string;
  price: string;
  total: string;
  status: string;
}

interface OrderBookItem {
  price: number;
  size: number;
  total: number;
}

interface Trade {
  price: number;
  size: number;
  time: string;
}

export function TradingPage() {
  const {coins, loading} = useCoins()
  // Convert crypto data to CryptoOption format
  const cryptoOptions: CryptoOption[] = coins.map((coin) => ({
    symbol: coin.symbol,
    name: coin.name,
    icon: coin.image,
  }));

  const [selectedCrypto, setSelectedCrypto] = useState<CryptoOption>(
    cryptoOptions[0],
  );
  const [orderType, setOrderType] = useState<OrderType>("market");
  const [orderHistoryTab, setOrderHistoryTab] = useState<"open" | "history">(
    "open",
  );

  // Form states for different order types
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [buyPercentage, setBuyPercentage] = useState(0);
  const [sellPercentage, setSellPercentage] = useState(0);

  // Limit order states
  const [limitBuyPrice, setLimitBuyPrice] = useState("");
  const [limitSellPrice, setLimitSellPrice] = useState("");
  const [limitBuyTotal, setLimitBuyTotal] = useState("");
  const [limitSellTotal, setLimitSellTotal] = useState("");

  // Trigger order states
  const [triggerBuyStop, setTriggerBuyStop] = useState("");
  const [triggerBuyPrice, setTriggerBuyPrice] = useState("");
  const [triggerBuySize, setTriggerBuySize] = useState("");
  const [triggerSellStop, setTriggerSellStop] = useState("");
  const [triggerSellPrice, setTriggerSellPrice] = useState("");
  const [triggerSellSize, setTriggerSellSize] = useState("");

  // Get market stats for selected crypto
  const selectedCoinData = coins.find(
    (coin) => coin.symbol === selectedCrypto.symbol,
  );

  const marketStats = {
    price: selectedCoinData?.current_price.toFixed(2) || "0",
    change24h: selectedCoinData?.price_change_percentage_24h.toFixed(2) || "0",
    high24h: (selectedCoinData ? selectedCoinData.high_24h * 1.06 : 0).toFixed(2),
    low24h: (selectedCoinData ? selectedCoinData.low_24h * 0.94 : 0).toFixed(2),
    volume24hBTC: "26.44",
    volume24hUSDT: "205,767,110.00",
  };

  // Sample data for open orders
  const openOrders: OpenOrder[] = [
    {
      date: "2026-02-03 10:23:45",
      pair: "BTC/USDT",
      side: "Buy",
      type: "Limit",
      amount: "0.05 BTC",
      price: "74500.00",
    },
    {
      date: "2026-02-03 09:15:22",
      pair: "ETH/USDT",
      side: "Sell",
      type: "Market",
      amount: "1.5 ETH",
      price: "Market",
    },
  ];

  // Sample data for trading history
  const tradingHistory: TradeHistory[] = [
    {
      date: "2026-02-02 18:45:12",
      pair: "BTC/USDT",
      side: "Buy",
      type: "Market",
      amount: "0.1 BTC",
      price: "74200.00",
      total: "7420.00 USDT",
      status: "Completed",
    },
    {
      date: "2026-02-02 15:30:08",
      pair: "ETH/USDT",
      side: "Sell",
      type: "Limit",
      amount: "2.0 ETH",
      price: "2450.00",
      total: "4900.00 USDT",
      status: "Completed",
    },
    {
      date: "2026-02-01 22:12:33",
      pair: "BTC/USDT",
      side: "Buy",
      type: "Market",
      amount: "0.25 BTC",
      price: "75100.00",
      total: "18775.00 USDT",
      status: "Completed",
    },
  ];

  // Sample order book data
  const orderBookAsks: OrderBookItem[] = [
    {
      price: parseFloat(marketStats.price) + 10,
      size: 0.523,
      total: 39077.43,
    },
    {
      price: parseFloat(marketStats.price) + 5,
      size: 1.234,
      total: 92165.97,
    },
    {
      price: parseFloat(marketStats.price) + 2,
      size: 0.876,
      total: 65438.15,
    },
    {
      price: parseFloat(marketStats.price) + 1,
      size: 2.145,
      total: 160233.64,
    },
  ];

  const orderBookBids: OrderBookItem[] = [
    {
      price: parseFloat(marketStats.price),
      size: 1.543,
      total: 115262.1,
    },
    {
      price: parseFloat(marketStats.price) - 5,
      size: 0.987,
      total: 73723.86,
    },
    {
      price: parseFloat(marketStats.price) - 10,
      size: 2.234,
      total: 166897.46,
    },
    {
      price: parseFloat(marketStats.price) - 15,
      size: 1.876,
      total: 140109.26,
    },
  ];

  // Sample recent trades
  const recentTrades: Trade[] = [
    {
      price: parseFloat(marketStats.price),
      size: 0.156,
      time: "19:14:23",
    },
    {
      price: parseFloat(marketStats.price) - 2,
      size: 0.234,
      time: "19:14:20",
    },
    {
      price: parseFloat(marketStats.price) + 5,
      size: 0.543,
      time: "19:14:18",
    },
    {
      price: parseFloat(marketStats.price) + 2,
      size: 0.123,
      time: "19:14:15",
    },
    {
      price: parseFloat(marketStats.price),
      size: 0.876,
      time: "19:14:12",
    },
  ];

  const openOrderColumns: Column<OpenOrder>[] = [
    { key: "date", header: "Date" },
    { key: "pair", header: "Pair" },
    {
      key: "side",
      header: "Side",
      render: (item) => (
        <span
          className={item.side === "Buy" ? "text-green-500" : "text-red-500"}
        >
          {item.side}
        </span>
      ),
    },
    { key: "type", header: "Type" },
    { key: "amount", header: "Amount" },
    { key: "price", header: "Price" },
    {
      key: "action",
      header: "Action",
      render: () => (
        <button className="text-red-500 hover:text-red-600 text-sm font-medium">
          Cancel
        </button>
      ),
    },
  ];

  const tradingHistoryColumns: Column<TradeHistory>[] = [
    { key: "date", header: "Date" },
    { key: "pair", header: "Pair" },
    {
      key: "side",
      header: "Side",
      render: (item) => (
        <span
          className={item.side === "Buy" ? "text-green-500" : "text-red-500"}
        >
          {item.side}
        </span>
      ),
    },
    { key: "type", header: "Type" },
    { key: "amount", header: "Amount" },
    { key: "price", header: "Price" },
    { key: "total", header: "Total" },
    { key: "status", header: "Status" },
  ];

  const handleBuyPercentageChange = (value: number) => {
    setBuyPercentage(value);
  };

  const handleSellPercentageChange = (value: number) => {
    setSellPercentage(value);
  };

  const isChangePositive = parseFloat(marketStats.change24h) >= 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {loading && <Loader/>}

      {/* Market Header */}
      <div className="bg-gray-950 border-b border-gray-800 px-3 md:px-6 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {/* Crypto Selector */}
            <div className="w-64">
              <CryptoSelector
                options={cryptoOptions}
                selected={selectedCrypto}
                onSelect={setSelectedCrypto}
                searchable={true}
              />
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`text-2xl font-bold ${isChangePositive ? "text-green-500" : "text-red-500"}`}
              >
                {marketStats.price}
              </span>
            </div>

            {/* Market Stats */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm">
              <div>
                <div className="text-gray-500 text-xs mb-1">24h Change</div>
                <div
                  className={`font-medium ${isChangePositive ? "text-green-500" : "text-red-500"}`}
                >
                  {isChangePositive ? "+" : ""}
                  {marketStats.change24h}%
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">24h High</div>
                <div className="font-medium text-gray-300">
                  {marketStats.high24h}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">24h Low</div>
                <div className="font-medium text-gray-300">
                  {marketStats.low24h}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">
                  24h Volume ({selectedCrypto.symbol})
                </div>
                <div className="font-medium text-gray-300">
                  {marketStats.volume24hBTC}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs mb-1">
                  24h Volume (USDT)
                </div>
                <div className="font-medium text-gray-300">
                  {marketStats.volume24hUSDT}
                </div>
              </div>
            </div>
          </div>

          {/* Time Intervals */}
          <div className="flex gap-2 text-xs">
            <span className="text-gray-500">Time:</span>
            {["1s", "1m", "5m", "1H", "4H", "1D", "1W"].map((time) => (
              <button
                key={time}
                className="text-gray-400 hover:text-white px-2 py-1 hover:bg-gray-800 rounded transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-6">
        {/* Left Section - Chart & Orders */}
        <div className="lg:col-span-9 space-y-4">
          {/* Chart Area */}
          <div className="bg-white rounded-lg h-[400px] md:h-[500px] flex items-center justify-center">
            <p className="text-gray-400 text-sm">Trading Chart Area</p>
          </div>

          {/* Order History Section */}
          <div className="bg-gray-950 rounded-lg border border-gray-800">
            {/* Custom Tabs */}
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setOrderHistoryTab("open")}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                  orderHistoryTab === "open"
                    ? "text-gray-900 bg-gray-200"
                    : "text-gray-400 hover:text-gray-300 bg-transparent"
                }`}
              >
                My Open Orders
              </button>
              <button
                onClick={() => setOrderHistoryTab("history")}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                  orderHistoryTab === "history"
                    ? "text-gray-900 bg-gray-200"
                    : "text-gray-400 hover:text-gray-300 bg-transparent"
                }`}
              >
                My Trading History
              </button>
            </div>

            <div className="p-4">
              {orderHistoryTab === "open" ? (
                <DataTable
                  columns={openOrderColumns}
                  data={openOrders}
                  emptyStateMessage="No Records"
                />
              ) : (
                <DataTable
                  columns={tradingHistoryColumns}
                  data={tradingHistory}
                  emptyStateMessage="No Records"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Trading Panel */}
        <div className="lg:col-span-3 space-y-4">
          {/* Order Type Tabs & Trading Forms */}
          <div className="bg-gray-950 rounded-lg border border-gray-800">
            {/* Custom Order Type Tabs */}
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setOrderType("limit")}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  orderType === "limit"
                    ? "text-gray-900 bg-gray-200"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Limit
              </button>
              <button
                onClick={() => setOrderType("market")}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  orderType === "market"
                    ? "text-gray-900 bg-gray-200"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Market
              </button>
              <button
                onClick={() => setOrderType("trigger")}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  orderType === "trigger"
                    ? "text-gray-900 bg-gray-200"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Trigger Order
              </button>
            </div>

            <div className="p-4">
              {/* Buy Section */}
              <div className="space-y-4">
                <div className="text-gray-400 text-sm">
                  Available: <span className="text-white">0.00 USDT</span>
                </div>

                {/* Market Order Type */}
                {orderType === "market" && (
                  <>
                    <div className="bg-gray-900 rounded px-3 py-2.5 text-gray-400 text-sm border border-gray-800">
                      Market Price
                    </div>

                    <div>
                      <Input
                        label="Amount"
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <PercentageSlider
                      value={buyPercentage}
                      onChange={handleBuyPercentageChange}
                    />

                    <div className="text-gray-400 text-sm">
                      Get per purchase:{" "}
                      <span className="text-white">
                        0 {selectedCrypto.symbol}
                      </span>
                    </div>

                    <Button
                      fullWidth
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Buy {selectedCrypto.symbol}
                    </Button>
                  </>
                )}

                {/* Limit Order Type */}
                {orderType === "limit" && (
                  <>
                    <div>
                      <Input
                        label="Price"
                        value={limitBuyPrice}
                        onChange={(e) => setLimitBuyPrice(e.target.value)}
                        placeholder={marketStats.price}
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <div>
                      <Input
                        label="Amount"
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {selectedCrypto.symbol}
                      </div>
                    </div>

                    <PercentageSlider
                      value={buyPercentage}
                      onChange={handleBuyPercentageChange}
                    />

                    <div>
                      <Input
                        label="Total"
                        value={limitBuyTotal}
                        onChange={(e) => setLimitBuyTotal(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <Button
                      fullWidth
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Buy {selectedCrypto.symbol}
                    </Button>
                  </>
                )}

                {/* Trigger Order Type */}
                {orderType === "trigger" && (
                  <>
                    <div>
                      <Input
                        label="Stop"
                        value={triggerBuyStop}
                        onChange={(e) => setTriggerBuyStop(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Input
                          label="Price"
                          value={triggerBuyPrice}
                          onChange={(e) => setTriggerBuyPrice(e.target.value)}
                          placeholder="0"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                        <div className="text-right text-xs text-gray-500 mt-1">
                          USDT
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Type
                        </label>
                        <button className="w-full px-4 py-3 bg-gray-900 rounded-lg text-sm flex items-center justify-between border border-gray-800 text-white">
                          Limit <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <Input
                        label="Size"
                        value={triggerBuySize}
                        onChange={(e) => setTriggerBuySize(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <PercentageSlider
                      value={buyPercentage}
                      onChange={handleBuyPercentageChange}
                    />

                    <Button
                      fullWidth
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Buy {selectedCrypto.symbol}
                    </Button>
                  </>
                )}
              </div>

              {/* Sell Section */}
              <div className="mt-6 space-y-4 pt-6 border-t border-gray-800">
                <div className="text-gray-400 text-sm">
                  Available:{" "}
                  <span className="text-white">0 {selectedCrypto.symbol}</span>
                </div>

                {/* Market Order Type */}
                {orderType === "market" && (
                  <>
                    <div className="bg-gray-900 rounded px-3 py-2.5 text-gray-400 text-sm border border-gray-800">
                      Market Price
                    </div>

                    <div>
                      <Input
                        label="Amount"
                        value={sellAmount}
                        onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {selectedCrypto.symbol}
                      </div>
                    </div>

                    <PercentageSlider
                      value={sellPercentage}
                      onChange={handleSellPercentageChange}
                    />

                    <div className="text-gray-400 text-sm">
                      Get per sale: <span className="text-white">0 USDT</span>
                    </div>

                    <Button
                      fullWidth
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      Sell {selectedCrypto.symbol}
                    </Button>
                  </>
                )}

                {/* Limit Order Type */}
                {orderType === "limit" && (
                  <>
                    <div>
                      <Input
                        label="Price"
                        value={limitSellPrice}
                        onChange={(e) => setLimitSellPrice(e.target.value)}
                        placeholder={marketStats.price}
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <div>
                      <Input
                        label="Amount"
                        value={sellAmount}
                        onChange={(e) => setSellAmount(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {selectedCrypto.symbol}
                      </div>
                    </div>

                    <PercentageSlider
                      value={sellPercentage}
                      onChange={handleSellPercentageChange}
                    />

                    <div>
                      <Input
                        label="Total"
                        value={limitSellTotal}
                        onChange={(e) => setLimitSellTotal(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <Button
                      fullWidth
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      Sell {selectedCrypto.symbol}
                    </Button>
                  </>
                )}

                {/* Trigger Order Type */}
                {orderType === "trigger" && (
                  <>
                    <div>
                      <Input
                        label="Stop"
                        value={triggerSellStop}
                        onChange={(e) => setTriggerSellStop(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Input
                          label="Price"
                          value={triggerSellPrice}
                          onChange={(e) => setTriggerSellPrice(e.target.value)}
                          placeholder="0"
                          className="bg-gray-900 border-gray-800 text-white"
                        />
                        <div className="text-right text-xs text-gray-500 mt-1">
                          USDT
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">
                          Type
                        </label>
                        <button className="w-full px-4 py-3 bg-gray-900 rounded-lg text-sm flex items-center justify-between border border-gray-800 text-white">
                          Limit <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <Input
                        label="Size"
                        value={triggerSellSize}
                        onChange={(e) => setTriggerSellSize(e.target.value)}
                        placeholder="0"
                        className="bg-gray-900 border-gray-800 text-white"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        USDT
                      </div>
                    </div>

                    <PercentageSlider
                      value={sellPercentage}
                      onChange={handleSellPercentageChange}
                    />

                    <Button
                      fullWidth
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      Sell {selectedCrypto.symbol}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Order Book */}
          <div className="bg-gray-950 rounded-lg border border-gray-800 p-4">
            <h3 className="text-sm font-semibold mb-4 text-white">
              Order Book
            </h3>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 text-gray-500 mb-3 font-medium">
                <span>Price (USDT)</span>
                <span className="text-right">
                  Size ({selectedCrypto.symbol})
                </span>
                <span className="text-right">Total (USDT)</span>
              </div>

              {/* Asks (Sell Orders) */}
              {orderBookAsks.map((ask, i) => (
                <div key={i} className="grid grid-cols-3 text-red-500">
                  <span>{ask.price.toFixed(2)}</span>
                  <span className="text-right">{ask.size.toFixed(3)}</span>
                  <span className="text-gray-400 text-right">
                    {ask.total.toFixed(2)}
                  </span>
                </div>
              ))}

              {/* Current Price */}
              <div className="flex items-center gap-2 py-3 my-2 border-y border-gray-800">
                <span
                  className={`font-bold text-base ${isChangePositive ? "text-green-500" : "text-red-500"}`}
                >
                  {marketStats.price}
                </span>
                <span
                  className={`text-xs ${isChangePositive ? "text-green-500" : "text-red-500"}`}
                >
                  {isChangePositive ? "↑" : "↓"}
                </span>
              </div>

              {/* Bids (Buy Orders) */}
              {orderBookBids.map((bid, i) => (
                <div key={i} className="grid grid-cols-3 text-green-500">
                  <span>{bid.price.toFixed(2)}</span>
                  <span className="text-right">{bid.size.toFixed(3)}</span>
                  <span className="text-gray-400 text-right">
                    {bid.total.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-gray-950 rounded-lg border border-gray-800 p-4">
            <h3 className="text-sm font-semibold mb-4 text-white">Trades</h3>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-3 text-gray-500 mb-3 font-medium">
                <span>Price (USDT)</span>
                <span className="text-right">
                  Size ({selectedCrypto.symbol})
                </span>
                <span className="text-right">Time</span>
              </div>

              {recentTrades.map((trade, i) => (
                <div key={i} className="grid grid-cols-3">
                  <span
                    className={i % 2 === 0 ? "text-green-500" : "text-red-500"}
                  >
                    {trade.price.toFixed(2)}
                  </span>
                  <span className="text-gray-400 text-right">
                    {trade.size.toFixed(3)}
                  </span>
                  <span className="text-gray-500 text-right">{trade.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { Tabs } from "@/components/ui/Tabs";
// import { PercentageSlider } from "@/components/ui/PercentageSlider";
// import { DataTable, type Column } from "@/components/ui/DataTable";
// import { Button } from "@/components/ui/Button";
// import { Input } from "@/components/ui/Input";
// import cryptoData from "@/data/cryptoData.json";

// type OrderType = "limit" | "market" | "trigger";

// interface OpenOrder {
//   date: string;
//   pair: string;
//   side: "Buy" | "Sell";
//   type: string;
//   amount: string;
//   price: string;
//   action: string;
// }

// interface TradeHistory {
//   date: string;
//   pair: string;
//   side: "Buy" | "Sell";
//   type: string;
//   amount: string;
//   price: string;
//   total: string;
//   status: string;
// }

// interface OrderBookItem {
//   price: number;
//   size: number;
//   total: number;
// }

// interface Trade {
//   price: number;
//   size: number;
//   time: string;
// }

// export function TradingPage() {
//   const [selectedPair, setSelectedPair] = useState("BTC/USDT");
//   const [selectedCoin] = useState(cryptoData.coins[0]); // Bitcoin
//   const [orderType, setOrderType] = useState<OrderType>("market");
//   const [buySellTab, setBuySellTab] = useState<"buy" | "sell">("buy");
//   const [orderHistoryTab, setOrderHistoryTab] = useState<"open" | "history">(
//     "open",
//   );

//   // Form states for different order types
//   const [buyAmount, setBuyAmount] = useState("");
//   const [sellAmount, setSellAmount] = useState("");
//   const [buyPercentage, setBuyPercentage] = useState(0);
//   const [sellPercentage, setSellPercentage] = useState(0);

//   // Limit order states
//   const [limitBuyPrice, setLimitBuyPrice] = useState("");
//   const [limitSellPrice, setLimitSellPrice] = useState("");
//   const [limitBuyTotal, setLimitBuyTotal] = useState("");
//   const [limitSellTotal, setLimitSellTotal] = useState("");

//   // Trigger order states
//   const [triggerBuyStop, setTriggerBuyStop] = useState("");
//   const [triggerBuyPrice, setTriggerBuyPrice] = useState("");
//   const [triggerBuySize, setTriggerBuySize] = useState("");
//   const [triggerSellStop, setTriggerSellStop] = useState("");
//   const [triggerSellPrice, setTriggerSellPrice] = useState("");
//   const [triggerSellSize, setTriggerSellSize] = useState("");

//   // Market stats
//   const marketStats = {
//     price: "74700",
//     change24h: "-4.83%",
//     high24h: "79186.81",
//     low24h: "74882.28",
//     volume24hBTC: "26.44",
//     volume24hUSDT: "205,767,110.00",
//   };

//   // Sample data for open orders
//   const openOrders: OpenOrder[] = [
//     {
//       date: "2026-02-03 10:23:45",
//       pair: "BTC/USDT",
//       side: "Buy",
//       type: "Limit",
//       amount: "0.05 BTC",
//       price: "74500.00",
//       action: "Cancel",
//     },
//     {
//       date: "2026-02-03 09:15:22",
//       pair: "ETH/USDT",
//       side: "Sell",
//       type: "Market",
//       amount: "1.5 ETH",
//       price: "Market",
//       action: "Cancel",
//     },
//   ];

//   // Sample data for trading history
//   const tradingHistory: TradeHistory[] = [
//     {
//       date: "2026-02-02 18:45:12",
//       pair: "BTC/USDT",
//       side: "Buy",
//       type: "Market",
//       amount: "0.1 BTC",
//       price: "74200.00",
//       total: "7420.00 USDT",
//       status: "Completed",
//     },
//     {
//       date: "2026-02-02 15:30:08",
//       pair: "ETH/USDT",
//       side: "Sell",
//       type: "Limit",
//       amount: "2.0 ETH",
//       price: "2450.00",
//       total: "4900.00 USDT",
//       status: "Completed",
//     },
//     {
//       date: "2026-02-01 22:12:33",
//       pair: "BTC/USDT",
//       side: "Buy",
//       type: "Market",
//       amount: "0.25 BTC",
//       price: "75100.00",
//       total: "18775.00 USDT",
//       status: "Completed",
//     },
//   ];

//   // Sample order book data
//   const orderBookAsks: OrderBookItem[] = [
//     { price: 74710, size: 0.523, total: 39077.43 },
//     { price: 74705, size: 1.234, total: 92165.97 },
//     { price: 74702, size: 0.876, total: 65438.15 },
//     { price: 74701, size: 2.145, total: 160233.64 },
//   ];

//   const orderBookBids: OrderBookItem[] = [
//     { price: 74700, size: 1.543, total: 115262.1 },
//     { price: 74695, size: 0.987, total: 73723.86 },
//     { price: 74690, size: 2.234, total: 166897.46 },
//     { price: 74685, size: 1.876, total: 140109.26 },
//   ];

//   // Sample recent trades
//   const recentTrades: Trade[] = [
//     { price: 74700, size: 0.156, time: "19:14:23" },
//     { price: 74698, size: 0.234, time: "19:14:20" },
//     { price: 74705, size: 0.543, time: "19:14:18" },
//     { price: 74702, size: 0.123, time: "19:14:15" },
//     { price: 74700, size: 0.876, time: "19:14:12" },
//   ];

//   const orderTypeTabsConfig = [
//     { key: "limit" as OrderType, label: "Limit" },
//     { key: "market" as OrderType, label: "Market" },
//     { key: "trigger" as OrderType, label: "Trigger Order" },
//   ];

//   const orderHistoryTabsConfig = [
//     { key: "open", label: "My Open Orders" },
//     { key: "history", label: "My Trading History" },
//   ];

//   const openOrderColumns: Column<OpenOrder>[] = [
//     { key: "date", header: "Date" },
//     { key: "pair", header: "Pair" },
//     {
//       key: "side",
//       header: "Side",
//       render: (item) => (
//         <span
//           className={item.side === "Buy" ? "text-green-500" : "text-red-500"}
//         >
//           {item.side}
//         </span>
//       ),
//     },
//     { key: "type", header: "Type" },
//     { key: "amount", header: "Amount" },
//     { key: "price", header: "Price" },
//     {
//       key: "action",
//       header: "Action",
//       render: () => (
//         <button className="text-red-500 hover:text-red-600 text-sm">
//           Cancel
//         </button>
//       ),
//     },
//   ];

//   const tradingHistoryColumns: Column<TradeHistory>[] = [
//     { key: "date", header: "Date" },
//     { key: "pair", header: "Pair" },
//     {
//       key: "side",
//       header: "Side",
//       render: (item) => (
//         <span
//           className={item.side === "Buy" ? "text-green-500" : "text-red-500"}
//         >
//           {item.side}
//         </span>
//       ),
//     },
//     { key: "type", header: "Type" },
//     { key: "amount", header: "Amount" },
//     { key: "price", header: "Price" },
//     { key: "total", header: "Total" },
//     { key: "status", header: "Status" },
//   ];

//   const handleBuyPercentageChange = (value: number) => {
//     setBuyPercentage(value);
//     // Calculate amount based on percentage (simplified)
//     const availableBalance = 0; // Replace with actual balance
//     const calculatedAmount = (availableBalance * value) / 100;
//     setBuyAmount(calculatedAmount.toString());
//   };

//   const handleSellPercentageChange = (value: number) => {
//     setSellPercentage(value);
//     // Calculate amount based on percentage (simplified)
//     const availableBalance = 0; // Replace with actual balance
//     const calculatedAmount = (availableBalance * value) / 100;
//     setSellAmount(calculatedAmount.toString());
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white">
//       {/* Market Header */}
//       <div className="bg-gray-900 border-b border-gray-800 px-4 md:px-6 py-3">
//         <div className="flex flex-wrap items-center gap-4 md:gap-6">
//           {/* Pair Selector */}
//           <button className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded">
//             <span className="text-xl font-bold">{selectedPair}</span>
//             <span className="text-red-500 text-lg">{marketStats.price}</span>
//             <ChevronDown className="w-4 h-4 text-gray-400" />
//           </button>

//           {/* Market Stats */}
//           <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
//             <div>
//               <div className="text-gray-400 text-xs">24h Change</div>
//               <div className="text-red-500 font-medium">
//                 {marketStats.change24h}
//               </div>
//             </div>
//             <div>
//               <div className="text-gray-400 text-xs">24h High</div>
//               <div className="font-medium">{marketStats.high24h}</div>
//             </div>
//             <div>
//               <div className="text-gray-400 text-xs">24h Low</div>
//               <div className="font-medium">{marketStats.low24h}</div>
//             </div>
//             <div>
//               <div className="text-gray-400 text-xs">24h Volume (BTC)</div>
//               <div className="font-medium">{marketStats.volume24hBTC}</div>
//             </div>
//             <div>
//               <div className="text-gray-400 text-xs">24h Volume (USDT)</div>
//               <div className="font-medium">{marketStats.volume24hUSDT}</div>
//             </div>
//           </div>
//         </div>

//         {/* Time Intervals */}
//         <div className="flex gap-2 mt-3 text-xs">
//           <span className="text-gray-400">Time:</span>
//           {["1s", "1m", "5m", "1H", "4H", "1D", "1W"].map((time) => (
//             <button
//               key={time}
//               className="text-gray-400 hover:text-white px-2 py-1"
//             >
//               {time}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-6">
//         {/* Left Section - Chart & Orders */}
//         <div className="lg:col-span-9 space-y-4">
//           {/* Chart Area */}
//           <div className="bg-gray-900 rounded-lg h-[400px] md:h-[500px] border border-gray-800 flex items-center justify-center">
//             <p className="text-gray-500">Trading Chart Area</p>
//           </div>

//           {/* Order History Section */}
//           <div className="bg-gray-900 rounded-lg border border-gray-800">
//             <div className="border-b border-gray-800">
//               <Tabs
//                 tabs={orderHistoryTabsConfig}
//                 activeTab={orderHistoryTab}
//                 onChange={(key) =>
//                   setOrderHistoryTab(key as "open" | "history")
//                 }
//                 variant="underline"
//                 className="px-4 pt-4"
//               />
//             </div>

//             <div className="p-4">
//               {orderHistoryTab === "open" ? (
//                 <DataTable
//                   columns={openOrderColumns}
//                   data={openOrders}
//                   emptyStateMessage="No Open Orders"
//                   className="text-gray-300"
//                 />
//               ) : (
//                 <DataTable
//                   columns={tradingHistoryColumns}
//                   data={tradingHistory}
//                   emptyStateMessage="No Trading History"
//                   className="text-gray-300"
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Trading Panel */}
//         <div className="lg:col-span-3 space-y-4">
//           {/* Order Type Tabs */}
//           <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
//             <Tabs
//               tabs={orderTypeTabsConfig}
//               activeTab={orderType}
//               onChange={(key) => setOrderType(key as OrderType)}
//               variant="underline"
//             />

//             {/* Buy Section */}
//             <div className="mt-6 space-y-4">
//               <div className="text-gray-400 text-sm">
//                 Available: <span className="text-white">0.00 USDT</span>
//               </div>

//               {/* Market Order Type */}
//               {orderType === "market" && (
//                 <>
//                   <div className="bg-gray-800 rounded px-3 py-2.5 text-gray-400 text-sm">
//                     Market Price
//                   </div>

//                   <Input
//                     label="Amount"
//                     value={buyAmount}
//                     onChange={(e) => setBuyAmount(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400">USDT</div>

//                   <PercentageSlider
//                     value={buyPercentage}
//                     onChange={handleBuyPercentageChange}
//                     className="mt-4"
//                   />

//                   <div className="text-gray-400 text-sm mt-2">
//                     Get per purchase: <span className="text-white">0 BTC</span>
//                   </div>

//                   <Button
//                     variant="success"
//                     fullWidth
//                     className="mt-4 bg-green-600 hover:bg-green-700"
//                   >
//                     Buy BTC
//                   </Button>
//                 </>
//               )}

//               {/* Limit Order Type */}
//               {orderType === "limit" && (
//                 <>
//                   <Input
//                     label="Price"
//                     value={limitBuyPrice}
//                     onChange={(e) => setLimitBuyPrice(e.target.value)}
//                     placeholder="755.79"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <Input
//                     label="Amount"
//                     value={buyAmount}
//                     onChange={(e) => setBuyAmount(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     BNB
//                   </div>

//                   <PercentageSlider
//                     value={buyPercentage}
//                     onChange={handleBuyPercentageChange}
//                     className="mt-4"
//                   />

//                   <Input
//                     label="Total"
//                     value={limitBuyTotal}
//                     onChange={(e) => setLimitBuyTotal(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <Button
//                     variant="success"
//                     fullWidth
//                     className="mt-4 bg-green-600 hover:bg-green-700"
//                   >
//                     Buy BNB
//                   </Button>
//                 </>
//               )}

//               {/* Trigger Order Type */}
//               {orderType === "trigger" && (
//                 <>
//                   <Input
//                     label="Stop"
//                     value={triggerBuyStop}
//                     onChange={(e) => setTriggerBuyStop(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <div className="flex gap-2">
//                     <Input
//                       label="Price"
//                       value={triggerBuyPrice}
//                       onChange={(e) => setTriggerBuyPrice(e.target.value)}
//                       placeholder="0"
//                       className="bg-gray-800 border-gray-700 flex-1"
//                     />
//                     <button className="mt-6 px-4 py-3 bg-gray-800 rounded-lg text-sm flex items-center gap-2 border border-gray-700">
//                       Limit <ChevronDown className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <Input
//                     label="Size"
//                     value={triggerBuySize}
//                     onChange={(e) => setTriggerBuySize(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <PercentageSlider
//                     value={buyPercentage}
//                     onChange={handleBuyPercentageChange}
//                     className="mt-4"
//                   />

//                   <Button
//                     variant="success"
//                     fullWidth
//                     className="mt-4 bg-green-600 hover:bg-green-700"
//                   >
//                     Buy BNB
//                   </Button>
//                 </>
//               )}
//             </div>

//             {/* Sell Section */}
//             <div className="mt-6 space-y-4 pt-6 border-t border-gray-800">
//               <div className="text-gray-400 text-sm">
//                 Available: <span className="text-white">0 BTC</span>
//               </div>

//               {/* Market Order Type */}
//               {orderType === "market" && (
//                 <>
//                   <div className="bg-gray-800 rounded px-3 py-2.5 text-gray-400 text-sm">
//                     Market Price
//                   </div>

//                   <Input
//                     label="Amount"
//                     value={sellAmount}
//                     onChange={(e) => setSellAmount(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400">BTC</div>

//                   <PercentageSlider
//                     value={sellPercentage}
//                     onChange={handleSellPercentageChange}
//                     className="mt-4"
//                   />

//                   <div className="text-gray-400 text-sm mt-2">
//                     Get per sale: <span className="text-white">0 USDT</span>
//                   </div>

//                   <Button
//                     variant="danger"
//                     fullWidth
//                     className="mt-4 bg-red-500 hover:bg-red-600"
//                   >
//                     Sell BTC
//                   </Button>
//                 </>
//               )}

//               {/* Limit Order Type */}
//               {orderType === "limit" && (
//                 <>
//                   <Input
//                     label="Price"
//                     value={limitSellPrice}
//                     onChange={(e) => setLimitSellPrice(e.target.value)}
//                     placeholder="755.79"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <Input
//                     label="Amount"
//                     value={sellAmount}
//                     onChange={(e) => setSellAmount(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     BNB
//                   </div>

//                   <PercentageSlider
//                     value={sellPercentage}
//                     onChange={handleSellPercentageChange}
//                     className="mt-4"
//                   />

//                   <Input
//                     label="Total"
//                     value={limitSellTotal}
//                     onChange={(e) => setLimitSellTotal(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <Button
//                     variant="danger"
//                     fullWidth
//                     className="mt-4 bg-red-500 hover:bg-red-600"
//                   >
//                     Sell BNB
//                   </Button>
//                 </>
//               )}

//               {/* Trigger Order Type */}
//               {orderType === "trigger" && (
//                 <>
//                   <Input
//                     label="Stop"
//                     value={triggerSellStop}
//                     onChange={(e) => setTriggerSellStop(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <div className="flex gap-2">
//                     <Input
//                       label="Price"
//                       value={triggerSellPrice}
//                       onChange={(e) => setTriggerSellPrice(e.target.value)}
//                       placeholder="0"
//                       className="bg-gray-800 border-gray-700 flex-1"
//                     />
//                     <button className="mt-6 px-4 py-3 bg-gray-800 rounded-lg text-sm flex items-center gap-2 border border-gray-700">
//                       Limit <ChevronDown className="w-4 h-4" />
//                     </button>
//                   </div>
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <Input
//                     label="Size"
//                     value={triggerSellSize}
//                     onChange={(e) => setTriggerSellSize(e.target.value)}
//                     placeholder="0"
//                     className="bg-gray-800 border-gray-700"
//                   />
//                   <div className="text-right text-xs text-gray-400 -mt-2">
//                     USDT
//                   </div>

//                   <PercentageSlider
//                     value={sellPercentage}
//                     onChange={handleSellPercentageChange}
//                     className="mt-4"
//                   />

//                   <Button
//                     variant="danger"
//                     fullWidth
//                     className="mt-4 bg-red-500 hover:bg-red-600"
//                   >
//                     Sell BNB
//                   </Button>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Order Book */}
//           <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
//             <h3 className="text-sm font-medium mb-4">Order Book</h3>
//             <div className="space-y-1 text-xs">
//               <div className="flex justify-between text-gray-400 mb-2">
//                 <span>Price (USDT)</span>
//                 <span>Size (BTC)</span>
//                 <span>Total (USDT)</span>
//               </div>

//               {/* Asks (Sell Orders) */}
//               {orderBookAsks.map((ask, i) => (
//                 <div key={i} className="flex justify-between text-red-500">
//                   <span>{ask.price.toFixed(2)}</span>
//                   <span>{ask.size.toFixed(3)}</span>
//                   <span className="text-gray-400">{ask.total.toFixed(2)}</span>
//                 </div>
//               ))}

//               {/* Current Price */}
//               <div className="flex items-center gap-2 py-2 my-2 border-y border-gray-800">
//                 <span className="text-green-500 font-medium text-base">
//                   {marketStats.price}
//                 </span>
//                 <span className="text-green-500 text-xs">↑</span>
//               </div>

//               {/* Bids (Buy Orders) */}
//               {orderBookBids.map((bid, i) => (
//                 <div key={i} className="flex justify-between text-green-500">
//                   <span>{bid.price.toFixed(2)}</span>
//                   <span>{bid.size.toFixed(3)}</span>
//                   <span className="text-gray-400">{bid.total.toFixed(2)}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Recent Trades */}
//           <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
//             <h3 className="text-sm font-medium mb-4">Trades</h3>
//             <div className="space-y-1 text-xs">
//               <div className="flex justify-between text-gray-400 mb-2">
//                 <span>Price (USDT)</span>
//                 <span>Size (BTC)</span>
//                 <span>Time</span>
//               </div>

//               {recentTrades.map((trade, i) => (
//                 <div key={i} className="flex justify-between">
//                   <span
//                     className={i % 2 === 0 ? "text-green-500" : "text-red-500"}
//                   >
//                     {trade.price.toFixed(2)}
//                   </span>
//                   <span className="text-gray-400">{trade.size.toFixed(3)}</span>
//                   <span className="text-gray-500">{trade.time}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
