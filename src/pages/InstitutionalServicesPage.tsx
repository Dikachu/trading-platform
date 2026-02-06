import { useState } from "react";
import {
  Users,
  BarChart3,
  Wallet,
  Smartphone,
  Coins,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Shield, Bug, FileCheck, Award } from "lucide-react";

export function InstitutionalServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    telegram: "",
    website: "",
    email: "",
    interest: "",
  });

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "institutional clients",
    },
    {
      icon: BarChart3,
      value: "equivalent of $700 million",
      label: "average daily trading volume",
    },
    {
      icon: Coins,
      value: "8 offices across three continents",
      label: "",
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Market Makers",
      description:
        "Utilize an additional liquidity pool, diversify risks, and trade on more favorable terms.",
    },
    {
      icon: Wallet,
      title: "Asset Management",
      description:
        "Automate and accelerate the reception, exchange, and withdrawal of over 270 digital assets.",
    },
    {
      icon: Wallet,
      title: "Crypto Wallets",
      description:
        "Expand your cryptocurrency assortment and generate an unlimited number of wallet addresses.",
    },
    {
      icon: Smartphone,
      title: "Exchanges",
      description:
        "Increase the number of trading instruments and pairs using our API and liquidity.",
    },
    {
      icon: Coins,
      title: "Funds or Private Investors",
      description:
        "Hedge risks by investing in CryptoDeposit plans with returns up to 24.85% annually.",
    },
    {
      icon: Rocket,
      title: "Cryptocurrencies",
      description:
        "Get fast listing, promotion, and comprehensive support to help your project grow.",
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      text: "We store 96% of digital assets in cold wallets",
    },
    {
      icon: Bug,
      text: "We use WAF to detect and block hacker attacks",
    },
    {
      icon: FileCheck,
      text: "We comply with GDPR European data protection standards",
    },
    {
      icon: Award,
      text: "We are certified in confidential information management",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-6">
            For partners
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Institutional Services
            <br />
            ALTARB
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            A full range of solutions for corporate clients
            <br />
            From providing liquidity to customized terms for traders
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8">
            Let's start cooperation!
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-full h-full text-gray-700" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  {stat.label && (
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strengthen your business with ALTARB
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              We provide advanced solutions and personalized support to all
              types of institutional clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stable and Secure Conditions
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Reliability and security of your assets are assured by regular
              audits and certifications in compliance with global security
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-sm md:text-base">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Take a Step Towards Cooperation
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Leave your contact information to start an effective and
              transparent partnership with ALTARB
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Input
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="telegram"
                placeholder="Personal Telegram or WhatsApp*"
                value={formData.telegram}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Input
                name="website"
                placeholder="Company Website"
                value={formData.website}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="email"
                type="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
              <Input
                name="interest"
                placeholder="What are you interested in?"
                value={formData.interest}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4"
            >
              Send
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}