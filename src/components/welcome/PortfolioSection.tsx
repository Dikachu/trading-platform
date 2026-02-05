import { NavLink } from "react-router-dom";
import { Card } from "../ui/Card";

interface PortfolioOption {
  title: string;
  description: string;
  cta: string;
  image: string;
  path: string;
}

export function PortfolioSection() {
  const options: PortfolioOption[] = [
    {
      title: "Spot",
      description: "Hundreds of cryptos to choose from. Easy to Trade.",
      cta: "Trade",
      image: "/images/portfolio/spot.svg",
      path: "/trade/spot",
    },
    {
      title: "Perpetual",
      description: "Up to 200x leverage with top-level liquidity.",
      cta: "Trade",
      image: "/images/portfolio/perpetual.svg",
      path: "/trade/perpetual",
    },
    {
      title: "Copy Trading",
      description: "Follow professional traders to earn with ease.",
      cta: "Trade",
      image: "/images/portfolio/copy-trading.svg",
      path: "/trade/copy-trading",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Build Your Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  {option.description}
                </p>

                <div className="flex justify-center mb-6">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="h-24 w-auto object-contain"
                  />
                </div>

                <NavLink
                  to={option.path}
                  className="inline-block text-primary hover:text-primary/80 font-medium text-sm"
                >
                  {option.cta}
                </NavLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}