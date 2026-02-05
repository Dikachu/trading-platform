import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Download, Upload, TrendingUp, Repeat } from "lucide-react";

export function IdentityVerificationPage() {
  const verificationLevels = [
    {
      level: "Lv.1 Basic Verification",
      status: "Unverified",
      requirements: "Personal Information & Identification Document",
      features: [
        { icon: Download, label: "Deposits", availability: "Available" },
        { icon: Upload, label: "Withdrawals", availability: "Available" },
        { icon: TrendingUp, label: "Spot Trading", availability: "Available" },
      ],
      available: true,
    },
    {
      level: "Lv.2 Advanced Verification",
      status: "Unverified",
      requirements: "Identification Document",
      features: [
        { icon: Download, label: "Deposits", availability: "Unlimited" },
        { icon: Upload, label: "Withdrawals", availability: "Unlimited" },
        {
          icon: TrendingUp,
          label: "Margin Trading",
          availability: "Available",
        },
        { icon: Repeat, label: "Futures Trading", availability: "Available" },
      ],
      available: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Identity Verification
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {verificationLevels.map((level, index) => (
          <Card key={index} className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">{level.level}</h2>
              <StatusBadge status="pending" text={level.status} />
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Requirements
              </h3>
              <p className="text-sm text-gray-500">{level.requirements}</p>
            </div>

            {/* Features and Limits */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Features and Limits
              </h3>
              <div className="space-y-3">
                {level.features.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-gray-600">
                          {feature.label}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {feature.availability}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant={level.available ? "primary" : "outline"}
              fullWidth
              disabled={!level.available}
              className={level.available ? "bg-primary" : ""}
            >
              Verify
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}