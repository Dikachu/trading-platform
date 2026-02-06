import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type VerificationType = "website" | "email" | "social" | "business";

export function ChannelVerificationPage() {
  const [selectedType, setSelectedType] = useState<VerificationType>("website");
  const [inputValue, setInputValue] = useState("https://altarb.com");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const verificationTypes = [
    { value: "website", label: "Website", icon: Globe },
    { value: "email", label: "Email", icon: Globe },
    { value: "social", label: "Social Media", icon: Globe },
    { value: "business", label: "Business Account", icon: Globe },
  ];

  const currentType = verificationTypes.find((t) => t.value === selectedType);
  const Icon = currentType?.icon || Globe;

  const handleVerify = () => {
    console.log("Verifying:", selectedType, inputValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-600">
              <Globe className="w-4 h-4" />
              <span>https://altarb.com</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Make sure you are on the official website
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Verification of ALTARBs
            <br />
            communication channels
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            To prevent fraud, we have created a page to verify ALTARBs channels
            and business accounts. Below you can check all official
            communication channels: social media groups, websites, email
            addresses, and business accounts.
          </p>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Type Selector */}
            <div className="relative">
              <label className="block text-sm text-gray-600 mb-2">
                Select type
              </label>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-between hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900 font-medium">
                    {currentType?.label}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  {verificationTypes.map((type) => {
                    const TypeIcon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => {
                          setSelectedType(type.value as VerificationType);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <TypeIcon className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900 font-medium">
                          {type.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Input Field */}
            <div>
              <Input
                label=""
                placeholder="https://altarb.com"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="h-full"
              />
            </div>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 text-base"
          >
            Verify
          </Button>
        </div>

        {/* Info Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            Always verify the authenticity of communication channels before
            sharing sensitive information
          </p>
        </div>
      </div>
    </div>
  );
}