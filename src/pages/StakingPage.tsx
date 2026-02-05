import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { SearchInput } from "@/components/ui/SearchInput";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CryptoIconWithLabel } from "@/components/ui/CryptoIconWithLabel";
import stakingHeroImage from "@/assets/images/staking_page_hero.png";

interface StakingPlan {
  asset: {
    icon: string;
    symbol: string;
    name: string;
  };
  period: string;
  rate: string;
  depositRange: string;
}

interface ActivePlan {
  asset: {
    icon: string;
    symbol: string;
    name: string;
  };
  plan: string;
  deposited: string;
  realtimeProfit: string;
  openTime: string;
  closeTime: string;
}

export function StakingPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [assetFilter, setAssetFilter] = useState("All");

  const stakingPlans: StakingPlan[] = [
    {
      asset: {
        icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        symbol: "BTC",
        name: "Bitcoin",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "0.005 - 120 BTC",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
        symbol: "USDT",
        name: "Tether",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "50 - 600,000 USDT",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        symbol: "ETH",
        name: "Ethereum",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "0.05 - 400 ETH",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
        symbol: "USDC",
        name: "USD Coin",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "100 - 600,000 USDC",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
        symbol: "SOL",
        name: "Solana",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "1 - 5,000 SOL",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/tron-trx-logo.png",
        symbol: "TRX",
        name: "TRON",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "1,500 - 15,000,000 TRX",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
        symbol: "XRP",
        name: "Ripple",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "150 - 1,150,000 XRP",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
        symbol: "LTC",
        name: "Litecoin",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "1 - 7,500 LTC",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/the-open-network-ton-logo.png",
        symbol: "TON",
        name: "Toncoin",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "50 - 10,000 TON",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
        symbol: "DOGE",
        name: "Dogecoin",
      },
      period: "7, 14, 30, 90, 180, 360 Days",
      rate: "17.39%",
      depositRange: "1,000 - 4,000,000 DOGE",
    },
  ];

  const activePlans: ActivePlan[] = [
    {
      asset: {
        icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
        symbol: "BTC",
        name: "Bitcoin",
      },
      plan: "90 Days",
      deposited: "0.5 BTC",
      realtimeProfit: "0.02134 BTC",
      openTime: "2026/01/15 10:30:00",
      closeTime: "2026/04/15 10:30:00",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        symbol: "ETH",
        name: "Ethereum",
      },
      plan: "180 Days",
      deposited: "10 ETH",
      realtimeProfit: "0.8567 ETH",
      openTime: "2026/01/01 14:20:00",
      closeTime: "2026/06/30 14:20:00",
    },
    {
      asset: {
        icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
        symbol: "USDT",
        name: "Tether",
      },
      plan: "30 Days",
      deposited: "5,000 USDT",
      realtimeProfit: "145.67 USDT",
      openTime: "2026/02/01 09:15:00",
      closeTime: "2026/03/03 09:15:00",
    },
  ];

  const faqItems = [
    {
      question: "What is a Crypto Staking?",
      answer:
        "Crypto staking is a process where you lock up your cryptocurrency holdings to support the operations of a blockchain network and earn rewards in return. It's similar to earning interest on a savings account, but for cryptocurrencies.",
    },
    {
      question: "How do I start staking?",
      answer:
        "To start staking, select your preferred cryptocurrency and staking period from the available plans above. Click 'Choose Plan', enter the amount you want to stake, and confirm your transaction. Your rewards will start accumulating immediately.",
    },
    {
      question:
        "Can I withdraw my staked assets before the lock-up period ends?",
      answer:
        "No, staked assets are locked for the duration of the selected period. Early withdrawal is not permitted. Make sure to choose a lock-up period that suits your needs before staking.",
    },
    {
      question: "How are rewards calculated?",
      answer:
        "Rewards are calculated based on the annual percentage rate (APR) shown for each plan. The actual reward amount depends on the amount staked and the duration of the staking period. Rewards are distributed proportionally throughout the staking period.",
    },
  ];

  const assetFilters = ["All", "Crypto", "Stablecoins"];

  const stakingPlanColumns: Column<StakingPlan>[] = [
    {
      key: "asset",
      header: "Assets",
      render: (item) => (
        <CryptoIconWithLabel
          icon={item.asset.icon}
          symbol={item.asset.symbol}
          name={item.asset.name}
        />
      ),
    },
    {
      key: "period",
      header: "Period",
      render: () => {
        const periods = ["7", "14", "30", "90", "180", "360"];
        return (
          <div className="flex flex-wrap gap-2">
            {periods.map((period, index) => (
              <button
                key={index}
                className="px-3 py-1.5 border border-gray-200 rounded text-xs hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {period} Days
              </button>
            ))}
          </div>
        );
      },
    },
    {
      key: "rate",
      header: "Rate",
      render: (item) => (
        <span className="text-sm font-semibold text-gray-900">{item.rate}</span>
      ),
    },
    {
      key: "depositRange",
      header: "Deposit Range",
      render: (item) => (
        <span className="text-sm text-gray-600">{item.depositRange}</span>
      ),
    },
    {
      key: "action",
      header: "",
      render: () => (
        <Button variant="primary" size="sm" className="bg-primary">
          Choose Plan
        </Button>
      ),
    },
  ];

  const activePlanColumns: Column<ActivePlan>[] = [
    {
      key: "asset",
      header: "Assets",
      render: (item) => (
        <CryptoIconWithLabel
          icon={item.asset.icon}
          symbol={item.asset.symbol}
          name={item.asset.name}
        />
      ),
    },
    {
      key: "plan",
      header: "Plan",
    },
    {
      key: "deposited",
      header: "Deposited",
    },
    {
      key: "realtimeProfit",
      header: "Realtime Profit",
      render: (item) => (
        <span className="text-green-600 font-medium">
          {item.realtimeProfit}
        </span>
      ),
    },
    {
      key: "openTime",
      header: "Open Time",
    },
    {
      key: "closeTime",
      header: "Close Time",
    },
    {
      key: "action",
      header: "Action",
      render: () => (
        <Button variant="outline" size="sm">
          Details
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="bg-gray-900 text-white py-16 md:py-24 px-4 bg-[100%, 100%] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${stakingHeroImage})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Crypto Staking
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              ALTARB Crypto Staking is a simple yet effective way to earn
              rewards. It allows you to gain profit by staking your crypto
              assets. Select the best staking plan for you based on its rate,
              lock-up period, and staking amount, and start earning today.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Plans Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plans</h2>

          <Card className="p-6">
            {/* Tabs and Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <Tabs
                tabs={[
                  { key: "active", label: "Active Plans" },
                  { key: "history", label: "History" },
                ]}
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

            {/* Asset Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {assetFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setAssetFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    assetFilter === filter
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                  {filter === "Stablecoins" && (
                    <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Plans Table */}
            <DataTable
              columns={stakingPlanColumns}
              data={stakingPlans}
              searchQuery={searchQuery}
              paginate={true}
              itemsPerPage={10}
              emptyStateMessage="No staking plans available"
            />
          </Card>
        </section>

        {/* Your Active Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You Active Plans
          </h2>

          <Card>
            <DataTable
              columns={activePlanColumns}
              data={activePlans}
              emptyStateMessage="No Records"
            />
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <FaqAccordion
            title="Any questions?"
            items={faqItems}
            className="max-w-4xl mx-auto"
          />
        </section>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { Card } from "@/components/ui/Card";
// import { Button } from "@/components/ui/Button";
// import { Tabs } from "@/components/ui/Tabs";
// import { SearchInput } from "@/components/ui/SearchInput";
// import { DataTable, type Column } from "@/components/ui/DataTable";
// import { FaqAccordion } from "@/components/ui/FaqAccordion";
// import { CryptoIconWithLabel } from "@/components/ui/CryptoIconWithLabel";
// import stakingHeroImage from "@/assets/images/staking_page_hero.png";

// interface StakingPlan {
//   asset: {
//     icon: string;
//     symbol: string;
//     name: string;
//   };
//   periods: {
//     label: string;
//     value: number;
//   }[];
//   rate: string;
//   depositRange: string;
// }

// interface ActivePlan {
//   asset: {
//     icon: string;
//     symbol: string;
//     name: string;
//   };
//   plan: string;
//   deposited: string;
//   realtimeProfit: string;
//   openTime: string;
//   closeTime: string;
// }

// export function StakingPage() {
//   const [activeTab, setActiveTab] = useState("active");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [assetFilter, setAssetFilter] = useState("All");

//   const stakingPlans: StakingPlan[] = [
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
//         symbol: "BTC",
//         name: "Bitcoin",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "0.005 - 120 BTC",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
//         symbol: "USDT",
//         name: "Tether",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "50 - 600,000 USDT",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
//         symbol: "ETH",
//         name: "Ethereum",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "0.05 - 400 ETH",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
//         symbol: "USDC",
//         name: "USD Coin",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "100 - 600,000 USDC",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
//         symbol: "SOL",
//         name: "Solana",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "1 - 5,000 SOL",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/tron-trx-logo.png",
//         symbol: "TRX",
//         name: "TRON",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "1,500 - 15,000,000 TRX",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
//         symbol: "XRP",
//         name: "Ripple",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "150 - 1,150,000 XRP",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
//         symbol: "LTC",
//         name: "Litecoin",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "1 - 7,500 LTC",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/the-open-network-ton-logo.png",
//         symbol: "TON",
//         name: "Toncoin",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "50 - 10,000 TON",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
//         symbol: "DOGE",
//         name: "Dogecoin",
//       },
//       periods: [
//         { label: "7 Days", value: 7 },
//         { label: "14 Days", value: 14 },
//         { label: "30 Days", value: 30 },
//         { label: "90 Days", value: 90 },
//         { label: "180 Days", value: 180 },
//         { label: "360 Days", value: 360 },
//       ],
//       rate: "17.39%",
//       depositRange: "1,000 - 4,000,000 DOGE",
//     },
//   ];

//   const activePlans: ActivePlan[] = [
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
//         symbol: "BTC",
//         name: "Bitcoin",
//       },
//       plan: "90 Days",
//       deposited: "0.5 BTC",
//       realtimeProfit: "0.02134 BTC",
//       openTime: "2026/01/15 10:30:00",
//       closeTime: "2026/04/15 10:30:00",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
//         symbol: "ETH",
//         name: "Ethereum",
//       },
//       plan: "180 Days",
//       deposited: "10 ETH",
//       realtimeProfit: "0.8567 ETH",
//       openTime: "2026/01/01 14:20:00",
//       closeTime: "2026/06/30 14:20:00",
//     },
//     {
//       asset: {
//         icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
//         symbol: "USDT",
//         name: "Tether",
//       },
//       plan: "30 Days",
//       deposited: "5,000 USDT",
//       realtimeProfit: "145.67 USDT",
//       openTime: "2026/02/01 09:15:00",
//       closeTime: "2026/03/03 09:15:00",
//     },
//   ];

//   const faqItems = [
//     {
//       question: "What is a Crypto Staking?",
//       answer:
//         "Crypto staking is a process where you lock up your cryptocurrency holdings to support the operations of a blockchain network and earn rewards in return. It's similar to earning interest on a savings account, but for cryptocurrencies.",
//     },
//     {
//       question: "How do I start staking?",
//       answer:
//         "To start staking, select your preferred cryptocurrency and staking period from the available plans above. Click 'Choose Plan', enter the amount you want to stake, and confirm your transaction. Your rewards will start accumulating immediately.",
//     },
//     {
//       question:
//         "Can I withdraw my staked assets before the lock-up period ends?",
//       answer:
//         "No, staked assets are locked for the duration of the selected period. Early withdrawal is not permitted. Make sure to choose a lock-up period that suits your needs before staking.",
//     },
//     {
//       question: "How are rewards calculated?",
//       answer:
//         "Rewards are calculated based on the annual percentage rate (APR) shown for each plan. The actual reward amount depends on the amount staked and the duration of the staking period. Rewards are distributed proportionally throughout the staking period.",
//     },
//   ];

//   const assetFilters = ["All", "Crypto", "Stablecoins"];

//   const activePlanColumns: Column<ActivePlan>[] = [
//     {
//       key: "asset",
//       header: "Assets",
//       render: (item) => (
//         <CryptoIconWithLabel
//           icon={item.asset.icon}
//           symbol={item.asset.symbol}
//           name={item.asset.name}
//         />
//       ),
//     },
//     {
//       key: "plan",
//       header: "Plan",
//     },
//     {
//       key: "deposited",
//       header: "Deposited",
//     },
//     {
//       key: "realtimeProfit",
//       header: "Realtime Profit",
//       render: (item) => (
//         <span className="text-green-600 font-medium">
//           {item.realtimeProfit}
//         </span>
//       ),
//     },
//     {
//       key: "openTime",
//       header: "Open Time",
//     },
//     {
//       key: "closeTime",
//       header: "Close Time",
//     },
//     {
//       key: "action",
//       header: "Action",
//       render: () => (
//         <Button variant="outline" size="sm">
//           Details
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div
//         className="bg-gray-900 text-white py-16 md:py-24 px-4 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${stakingHeroImage})`,
//           backgroundBlendMode: "overlay",
//           backgroundColor: "rgba(0, 0, 0, 0.7)",
//         }}
//       >
//         <div className="max-w-6xl mx-auto">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Crypto Staking
//             </h1>
//             <p className="text-gray-300 text-base md:text-lg leading-relaxed">
//               ALTARB Crypto Staking is a simple yet effective way to earn
//               rewards. It allows you to gain profit by staking your crypto
//               assets. Select the best staking plan for you based on its rate,
//               lock-up period, and staking amount, and start earning today.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
//         {/* Plans Section */}
//         <section className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Plans</h2>

//           <Card className="p-6">
//             {/* Tabs and Search */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//               <Tabs
//                 tabs={[
//                   { key: "active", label: "Active Plans" },
//                   { key: "history", label: "History" },
//                 ]}
//                 activeTab={activeTab}
//                 onChange={setActiveTab}
//                 variant="underline"
//               />

//               <SearchInput
//                 value={searchQuery}
//                 onChange={setSearchQuery}
//                 placeholder="Search"
//                 className="md:w-64"
//               />
//             </div>

//             {/* Asset Filters */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {assetFilters.map((filter) => (
//                 <button
//                   key={filter}
//                   onClick={() => setAssetFilter(filter)}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                     assetFilter === filter
//                       ? "bg-gray-900 text-white"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {filter}
//                   {filter === "Stablecoins" && (
//                     <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">
//                       Soon
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Plans Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[900px]">
//                 <thead>
//                   <tr className="border-b border-gray-200">
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
//                       Assets
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
//                       Period
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
//                       Rate
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
//                       Deposit Range
//                     </th>
//                     <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {stakingPlans.map((plan, index) => (
//                     <tr
//                       key={index}
//                       className="border-b border-gray-100 hover:bg-gray-50"
//                     >
//                       <td className="px-4 py-4">
//                         <CryptoIconWithLabel
//                           icon={plan.asset.icon}
//                           symbol={plan.asset.symbol}
//                           name={plan.asset.name}
//                         />
//                       </td>
//                       <td className="px-4 py-4">
//                         <div className="flex flex-wrap gap-2">
//                           {plan.periods.map((period, periodIndex) => (
//                             <button
//                               key={periodIndex}
//                               className="px-3 py-1.5 border border-gray-200 rounded text-xs hover:border-gray-300 hover:bg-gray-50 transition-colors"
//                             >
//                               {period.label}
//                             </button>
//                           ))}
//                         </div>
//                       </td>
//                       <td className="px-4 py-4">
//                         <span className="text-sm font-semibold text-gray-900">
//                           {plan.rate}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <span className="text-sm text-gray-600">
//                           {plan.depositRange}
//                         </span>
//                       </td>
//                       <td className="px-4 py-4">
//                         <Button
//                           variant="primary"
//                           size="sm"
//                           className="bg-primary"
//                         >
//                           Choose Plan
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </Card>
//         </section>

//         {/* Your Active Plans */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">
//             You Active Plans
//           </h2>

//           <Card>
//             <DataTable
//               columns={activePlanColumns}
//               data={activePlans}
//               emptyStateMessage="No Records"
//             />
//           </Card>
//         </section>

//         {/* FAQ Section */}
//         <section>
//           <FaqAccordion
//             title="Any questions?"
//             items={faqItems}
//             className="max-w-4xl mx-auto"
//           />
//         </section>
//       </div>
//     </div>
//   );
// }
