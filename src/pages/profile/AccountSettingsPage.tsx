import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { User, IdCard, Shield, KeyRound, Copy, Check } from "lucide-react";

export function AccountSettingsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accountInfo = {
    email: "kin***@****",
    uid: "567359596",
    lastLogin: "2026/02/03 17:59:22",
    status: "Unverified",
    vip: "No",
    securityLevel: "Low",
  };

  const securityFeatures = [
    {
      icon: User,
      title: "Profile Picture",
      description: "Please upload a profile picture",
      status: "Not Configured",
      actionLabel: "Upload",
      secondaryAction: "Remove",
    },
    {
      icon: IdCard,
      title: "Identity Verification",
      description: "Complete KYC verification to unlock new opportunities",
      status: "Not Configured",
      actionLabel: "Verify Now",
    },
    {
      icon: Shield,
      title: "Google Two Factor Authentication",
      description: "Additional protection when logging into an account",
      status: "Not Configured",
      actionLabel: "Settings",
    },
    {
      icon: KeyRound,
      title: "Anti-Phishing Code",
      description:
        "All of our official emails will contain anti-phishing code to prevent phishing attempts",
      status: "Not Configured",
      actionLabel: "Settings",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Account Info</h1>

      {/* User Profile Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
            <User className="w-12 h-12 text-white" />
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {accountInfo.email}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>UID {accountInfo.uid}</span>
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <button
                  onClick={() => handleCopy(accountInfo.uid)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Copy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Account Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Last login time:</p>
            <p className="text-sm font-semibold text-gray-900">
              {accountInfo.lastLogin}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Status:</p>
            <StatusBadge status="error" text={accountInfo.status} />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">VIP:</p>
            <StatusBadge status="error" text={accountInfo.vip} />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Security level:</p>
            <StatusBadge status="error" text={accountInfo.securityLevel} />
          </div>
        </div>
      </Card>

      {/* Security Features */}
      <div className="space-y-4">
        {securityFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>

                {/* Status & Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:ml-auto">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <span>{feature.status}</span>
                  </div>
                  <div className="flex gap-2">
                    {feature.secondaryAction && (
                      <Button variant="outline" size="sm">
                        {feature.secondaryAction}
                      </Button>
                    )}
                    <Button variant="primary" size="sm" className="bg-primary">
                      {feature.actionLabel}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
