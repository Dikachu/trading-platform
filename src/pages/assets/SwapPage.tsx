import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { CryptoSelector, type CryptoOption } from "@/components/ui/CryptoSelector";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const cryptoOptions: CryptoOption[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
  },
  {
    symbol: "USDT",
    name: "Tether",
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=025",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025",
  },
  {
    symbol: "BNB",
    name: "Binance",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
  },
  {
    symbol: "SOL",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
  },
  {
    symbol: "TRX",
    name: "TRON",
    icon: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=025",
  },
];

export default function SwapPage() {
  const [fromCrypto, setFromCrypto] = useState<CryptoOption>(cryptoOptions[0]);
  const [toCrypto, setToCrypto] = useState<CryptoOption>(cryptoOptions[1]);
  const [sendingAmount, setSendingAmount] = useState("");
  const [receivingAmount, setReceivingAmount] = useState("");

  const fromBalance = 0.0;
  const toBalance = 0.0;
  const currentRate = 31.47495897;
  const rateChange24h = -4.83;
  const commission = 0.0;

  const handleSwapCurrencies = () => {
    const temp = fromCrypto;
    setFromCrypto(toCrypto);
    setToCrypto(temp);
  };

  const faqItems = [
    {
      question: "How to exchange cryptocurrency?",
      answer:
        "To exchange cryptocurrency on ALTARB, select the cryptocurrency you want to send and the one you want to receive. Enter the amount you wish to exchange, review the current exchange rate and any applicable fees, then confirm the transaction. The exchange will be processed instantly within the platform.",
    },
    {
      question: "At what rate does cryptocurrency exchange occur?",
      answer:
        "Cryptocurrency exchanges on ALTARB occur at real-time market rates. The rate is displayed before you confirm your transaction and includes the current market price plus any applicable exchange fees. Rates are updated continuously to reflect market conditions.",
    },
    {
      question: "How is the conversion fee calculated?",
      answer:
        "The conversion fee is a small percentage of the transaction amount, typically ranging from 0.1% to 0.5% depending on the cryptocurrency pair and your trading volume. The exact fee is displayed before you confirm any exchange, ensuring full transparency.",
    },
    {
      question: "What are the minimum and maximum transaction amounts?",
      answer:
        "Minimum transaction amounts vary by cryptocurrency, typically starting from $10 USD equivalent. Maximum transaction amounts depend on your account verification level and the specific cryptocurrency. You can view the limits for each currency pair before initiating a transaction.",
    },
    {
      question: "Is registration or KYC required?",
      answer:
        "Basic registration is required to use ALTARB's exchange services. KYC (Know Your Customer) verification may be required for higher transaction limits and to comply with regulatory requirements. The verification process is straightforward and helps ensure the security of your account.",
    },
    {
      question: "How long does the exchange process take?",
      answer:
        "Most cryptocurrency exchanges on ALTARB are processed instantly or within a few minutes. The exact time depends on network congestion for the specific cryptocurrencies involved. You can track the status of your exchange in your transaction history.",
    },
    {
      question: "Which payment systems do we support?",
      answer:
        "ALTARB supports a wide range of payment systems including cryptocurrency deposits/withdrawals, bank transfers, credit/debit cards, PayPal, and other popular payment processors. The available options may vary based on your location and account status.",
    },
    {
      question: "How to deposit and withdraw funds?",
      answer:
        "To deposit funds, navigate to the Deposit section, select your preferred cryptocurrency or payment method, and follow the instructions provided. For withdrawals, go to the Withdraw section, enter your destination address or payment details, specify the amount, and confirm the transaction.",
    },
    {
      question: "Which cryptocurrencies can be exchanged?",
      answer:
        "ALTARB supports exchanges between major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), Binance Coin (BNB), Solana (SOL), TRON (TRX), and many others. The platform is continuously adding support for new cryptocurrencies.",
    },
  ];

  return (
    <>
      {/* Swap Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_100px_1fr] gap-6">
          {/* From Section */}
          <div>
            <CryptoSelector
              options={cryptoOptions}
              selected={fromCrypto}
              onSelect={setFromCrypto}
              searchable
            />
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-600">Available balance:</span>
                <span className="font-medium underline cursor-pointer">
                  {fromBalance.toFixed(2)} {fromCrypto.symbol}
                </span>
              </div>
              <Input
                value={sendingAmount}
                onChange={(e) => setSendingAmount(e.target.value)}
                placeholder="I'm sending"
                type="number"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleSwapCurrencies}
              className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To Section */}
          <div>
            <CryptoSelector
              options={cryptoOptions}
              selected={toCrypto}
              onSelect={setToCrypto}
              searchable
            />
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-gray-600">Available balance:</span>
                <span className="font-medium underline cursor-pointer">
                  {toBalance.toFixed(2)} {toCrypto.symbol}
                </span>
              </div>
              <Input
                value={receivingAmount}
                onChange={(e) => setReceivingAmount(e.target.value)}
                placeholder="I'm receiving"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="mt-8 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Current rate:</span>
            <span className="font-medium">
              1 {fromCrypto.symbol} ≈ {currentRate.toFixed(8)} {toCrypto.symbol}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Rate for 24h:</span>
            <span
              className={`font-medium ${rateChange24h < 0 ? "text-red-500" : "text-green-500"}`}
            >
              {rateChange24h}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Commission:</span>
            <span className="font-medium">{commission.toFixed(2)}</span>
          </div>
        </div>

        {/* Exchange Button */}
        <Button variant="outline" fullWidth className="mt-6">
          Exchange
        </Button>
      </div>

      {/* FAQ Section */}
      <FaqAccordion items={faqItems} title="Any questions?" />
    </>
  );
}
