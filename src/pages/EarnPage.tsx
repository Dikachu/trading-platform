import { RefreshCw, Building2, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export function EarnPage() {
  const faqItems = [
    {
      question: "What is ALTARB Earn?",
      answer:
        "ALTARB Earn is a suite of investment instruments designed to help you generate passive income with competitive interest rates on your crypto holdings.",
    },
    {
      question: "What is currently available from ALTARB Earn tools?",
      answer:
        "Currently, we offer Staking services where you can earn rewards by keeping your funds in staking pools. Crypto Lending will be available soon.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Earn with ALTARB
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            The ALTARB family of investment instruments is a great way to
            generate passive income with a high interest rate
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Staking Card */}
            <Card className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <RefreshCw className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Staking</h2>
              <p className="text-gray-600 text-sm mb-8 max-w-sm">
                Profit daily by keeping your funds in staking pool without
                risking your principal
              </p>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                Choose Plan
              </Button>
            </Card>

            {/* Crypto Lending Card */}
            <Card className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Crypto Lending
              </h2>
              <p className="text-gray-600 text-sm mb-8 max-w-sm">
                Lending certain assets to the Exchange at interest rates ranging
                from 0.3% to 24.85% of revenue
              </p>
              <Button
                variant="secondary"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-600"
                disabled
              >
                Soon
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Staking Details Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Mobile App Preview */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="assets/images/staking-phone.png"
                  alt="Staking Mobile App"
                  className="w-full max-w-sm lg:max-w-md"
                />
                {/* Decorative coins */}
                <div className="absolute -right-8 top-1/4 hidden lg:block">
                  <img
                    src="assets/images/coins.png"
                    alt="coins"
                    className="w-48 opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-blue-600 text-sm font-medium mb-3">
                Easy to use
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Staking
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                By investing, you participate in various functions of the
                network in exchange for a reward (fixed or in the form of
                interest). Your cryptocurrency becomes part of the
                Proof-of-Stake process, i.e. it provides verification and
                protection of all transactions without the involvement of a bank
                or payment processor and receives income for this.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8">
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Lending Details Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content - Order first on mobile, second on desktop */}
            <div className="order-2 lg:order-1">
              <p className="text-green-600 text-sm font-medium mb-3">
                Guaranteed income
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Crypto Lending
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                The tool allows lending digital assets on the exchange, placing
                them on special terms and earning interest income.
              </p>
              <Button
                variant="secondary"
                className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-8"
                disabled
              >
                Soon
              </Button>
            </div>

            {/* Safe Image - Order second on mobile, first on desktop */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <img
                  src="assets/images/safe.png"
                  alt="Crypto Safe"
                  className="w-full max-w-sm lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Passive Income */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Passive income
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Profit from holding or lending your own assets by choosing a
                tool from the Earn catalog.
              </p>
            </div>

            {/* Asset Security */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
                <Lock className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Asset security
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We store 96% of digital assets on cold wallets and use WAFs to
                detect and block various attacks.
              </p>
            </div>

            {/* Simple Interaction */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 text-gray-400">
                <Zap className="w-full h-full" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Simple interaction
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Open or close investments in minutes. Investment statuses are
                displayed on your personal balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Any questions?
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}