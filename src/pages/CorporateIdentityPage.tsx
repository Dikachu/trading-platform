import { Image, Type, FileText, CheckCircle, XCircle } from "lucide-react";
import { Alert } from "@/components/ui/Alert";

export function CorporateIdentityPage() {
  const brandResources = [
    {
      icon: Image,
      title: "Logo",
      description:
        "Logos are available in PNG and SVG formats in the archive; rules for their use are below",
    },
    {
      icon: Type,
      title: "Font",
      description: "Use Inertia for headings and Inter for body text",
    },
    {
      icon: FileText,
      title: "Materials",
      description:
        "If you lack materials for your purposes, write to us and we will provide them",
    },
  ];

  const namingRules = [
    {
      correct: true,
      name: "ALTARB",
      description:
        'When writing the name, you cannot change the case and must use a capital "B"',
    },
    {
      correct: false,
      name: "ALTARB!",
      description: "Do not add any characters to the spelling of the name",
    },
    {
      correct: false,
      name: "ALTARB",
      description: "Do not change the number of capital letters",
    },
    {
      correct: false,
      name: "altarb",
      description: "Do not use only lowercase letters",
    },
  ];

  const brandUsageRules = [
    "Do not combine the ALTARB logo with other images without the consent of a company representative",
    "Do not alter the ALTARB logo and always use it on a dark background for good readability",
    "Do not use the ALTARB brand implying relationships with other brands, affiliation, or endorsement",
    "Do not use the ALTARB brand in conjunction with any illegal activity, advertisement, or product",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Corporate Identity
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              On this page, we present guidelines for using brand materials. It
              is important for us to maintain the integrity of the product
              perception
            </p>
          </div>

          {/* Brand Resources Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {brandResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Naming Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded mb-4">
              Please note
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naming
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              Correct spelling of our brand is very important to us, as it
              affects how we are perceived as a company in the information space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {namingRules.map((rule, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 border-2 ${
                  rule.correct ? "border-green-200" : "border-red-200"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  {rule.correct ? (
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                  )}
                  <div className="text-2xl font-bold text-gray-900">
                    {rule.name}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Usage Rules Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brand Usage Rules
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-3xl">
            Materials on this page are the property of the company. Do not copy
            the brand's visual style and do not use a similar style to avoid
            misleading consumers
          </p>

          <div className="space-y-4">
            {brandUsageRules.map((rule, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Alert variant="info">
              For questions regarding brand usage or to request additional
              materials, please contact our support team.
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
}
