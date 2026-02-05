import { Shield, Droplets, FileCheck } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function TrustedExchangeSection() {
  const features: Feature[] = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
          <Shield className="w-6 h-6 text-orange-500" />
        </div>
      ),
      title: "Outstanding Security Level",
      description:
        "With a high-security rating and 1,000 BTC as insurance funds, ALTARB aims to provide users the safest trading experience.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
          <Droplets className="w-6 h-6 text-orange-500" />
        </div>
      ),
      title: "Excellent Liquidity",
      description:
        "With 50+ market making teams, reliable partners and an extensive order book, ALTARB supports a wide array of order types with ultra low door-to-door latency.",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
          <FileCheck className="w-6 h-6 text-orange-500" />
        </div>
      ),
      title: "Key Licences Obtained",
      description:
        "Registered in Czech Republic, currently ALTARB holds regulatory licences from US with MSB and NFA. Meanwhile the applications of Canada, Lithuania, and Estonia are under process.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Exchange
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As the infrastructure provider in the blockchain ecosystem, ALTARB
            encourages crypto circulation at a global level and promotes the
            formation of global liquidity.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">{feature.icon}</div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}