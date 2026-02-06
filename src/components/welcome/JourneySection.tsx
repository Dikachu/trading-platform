import { Card } from "../ui/Card";
import VerifyImage from "@/assets/images/journey/verify.png";
import DepositImage from "@/assets/images/journey/deposit.png";
import TradeImage from "@/assets/images/journey/trade.png";
import { NavLink } from "react-router-dom";


interface JourneyStep {
  title: string;
  cta: string;
  image: string;
  path: string | undefined;
}

export function JourneySection() {
  const steps: JourneyStep[] = [
    {
      title: "How to verify your account",
      cta: "I want to see more",
      image: VerifyImage,
      path: "/journey/verify",
    },
    {
      title: "How to deposit",
      cta: "I want to see more",
      image: DepositImage,
      path: "/journey/deposit",
    },
    {
      title: "Trade with us",
      cta: "I want to see more",
      image: TradeImage,
      path: "/journey/trade",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Start Your Journey
          </h2>
          <p className="text-gray-600">
            A beginners guide on your crypto journey with (0)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured card takes full width on desktop */}
          <Card className="p-8 hover:shadow-lg md:row-span-2">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {steps[0].title}
              </h3>
              <NavLink
                to={steps[0].path || "#"}
                className="text-primary/70 hover:text-primary font-medium text-sm mb-6 text-left"
              >
                {steps[0].cta}
              </NavLink>

              <div className="flex-1 flex items-center justify-end mt-4">
                <img
                  src={steps[0].image}
                  alt={steps[0].title}
                  className="max-w-full h-auto max-h-[180px] object-contain"
                />
              </div>
            </div>
          </Card>

          {/* Right column cards */}
          <div className="flex flex-col gap-6 h-full">
            {steps.slice(1).map((step, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg flex-1"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 h-full">
                  <div className="flex-1 self-start">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <NavLink
                      to={step.path || "#"}
                      className="text-yellow-500 hover:text-yellow-600 font-medium text-sm text-left"
                    >
                      {step.cta}
                    </NavLink>
                  </div>

                  <div className="flex-shrink-0 self-end">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-24 w-auto object-contain"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
