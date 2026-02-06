import { Shield, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function BugBountyPage() {
  const requirements = [
    {
      icon: Shield,
      title: "Inform us about the vulnerability",
      description:
        "Do not disclose information about it and give us sufficient time to fix the vulnerability",
    },
    {
      icon: Users,
      title: "Make the necessary efforts",
      description: "To avoid damage to the exchange and its users.",
    },
    {
      icon: AlertCircle,
      title: "Do not mislead",
      description:
        "Users and/or exchange employees during the search and elimination of the vulnerability.",
    },
  ];

  const rewards = [
    { vulnerability: "Remote code execution", amount: "$5000" },
    { vulnerability: "Manipulation of user balances", amount: "$3000" },
    {
      vulnerability:
        "XSS/CSRF/Clickjacking affecting actions with user balances/trading/exchange/deposit",
      amount: "$2000",
    },
    {
      vulnerability:
        "Theft of information related to passwords/API keys/personal information",
      amount: "$2000",
    },
    { vulnerability: "Partial authentication bypass", amount: "$1500" },
    {
      vulnerability:
        "Other vulnerabilities that can lead to financial losses or data leakage",
      amount: "$500",
    },
    { vulnerability: "Other CSRF (except CSRF logout)", amount: "$500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bug Bounty
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            Security is our top priority. The ALTARB cryptocurrency exchange
            cares about the security of each user. Therefore, we encourage
            finding vulnerabilities on the exchange and pay rewards for their
            discovery.
          </p>

          <div className="mt-12">
            <p className="text-white font-semibold mb-8">
              To be eligible to receive a reward for finding a vulnerability,
              you need to:
            </p>

            <div className="space-y-4">
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-6 text-left"
                  >
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {req.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {req.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Reward
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
            We do not limit the maximum amount of rewards and can increase the
            reward depending on the severity of the vulnerability. You are more
            likely to receive an increased reward if you show how the
            vulnerability can be used to cause maximum harm.
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-8">
            Here is a list of approximate rewards for finding vulnerabilities:
          </p>

          {/* Rewards List */}
          <div className="space-y-4">
            {rewards.map((reward, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0"
              >
                <p className="text-gray-700 text-sm md:text-base flex-1 pr-4">
                  {reward.vulnerability}
                </p>
                <p className="text-gray-900 font-bold text-lg md:text-xl">
                  {reward.amount}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm mt-8">
            Rewards will NOT be granted for DDoS, Self-XSS, Spam, Social
            engineering attacks.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Have you found a vulnerability?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              To report it, send us an email; we will contact you as soon as
              possible and resolve the issue.
            </p>

            <div className="space-y-4">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4">
                Contact Support
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-4"
              >
                Send vulnerability to Security
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}