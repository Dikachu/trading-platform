import { Shield, AlertCircle, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AboutUsPage() {
  const stats = [
    { value: "150+", label: "assets" },
    { value: "200+", label: "trading pairs" },
    { value: "3+", label: "national currencies" },
    { value: "$10 mil", label: "24-hour trading volume" },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "We store 96% of assets in cold wallets",
    },
    {
      icon: AlertCircle,
      title: "We counteract hacker attacks with WAF",
    },
    {
      icon: FileText,
      title:
        "We comply with the standards of the Financial Action Task Force (FATF)",
    },
    {
      icon: CheckCircle,
      title: "We verify assets using AML systems",
    },
  ];

  const timeline = [
    {
      date: "16 January 2022",
      color: "bg-yellow-400",
      title: "Launch of ALTARB exchange",
      description:
        "The start of the journey from a startup to one of the largest European crypto platforms",
    },
    {
      date: "February 2022",
      color: "bg-yellow-400",
      title: "Release of ALTARB Earn",
      description: "Added a tool for passive income on cryptocurrency",
    },
    {
      date: "February 2022",
      color: "bg-yellow-400",
      title: "Implementation of AML address verification",
      description:
        "Added the ability to check crypto addresses for involvement in money laundering",
    },
    {
      date: "March 2023",
      color: "bg-yellow-400",
      title: "First trading pairs with hryvnia",
      description:
        "Trading in hryvnia pairs with the most popular assets became available",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">
            ABOUT US
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl">
            Hello! Let's get acquainted
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl">
            The ALTARB exchange, founded in Europe in 2022, believes in the
            future of blockchain and strives to make it accessible to everyone.
            The exchange quickly took leading positions thanks to its strategy
            focused on transparency and security.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">
            WE WORK 24/7 TO PROTECT YOUR FUNDS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16">
            Security
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">
            MORE THAN JUST AN EXCHANGE
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            We value your trust, so we do everything to ensure convenience,
            transparency, and security of all operations
          </h2>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 md:mb-16">
            Writing history together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Date Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded text-xs font-semibold mb-4 ${item.color} text-gray-900`}
                >
                  {item.date}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-900 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-orange-500 rounded-lg rotate-45" />
            </div>

            {/* Logo/Brand */}
            <div className="mb-6">
              <div className="inline-block px-6 py-2 bg-yellow-400 rounded-full">
                <span className="text-gray-900 font-bold text-lg">ALTARB</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Are you with us?
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto">
              Register, get acquainted with unique tools and a variety of
              cryptocurrencies, and our support service is with you 24/7
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8">
              I'm already with you
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}