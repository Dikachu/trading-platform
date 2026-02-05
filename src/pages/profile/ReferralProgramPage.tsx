import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { Copy, Check } from "lucide-react";

interface ReferralRecord {
  user: string;
  registrationTime: string;
  depositAmount: string;
  tradingVolume: string;
  reward: string;
}

export function ReferralProgramPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const referralLink = "https://altarb.com/signup?ref=CVTPS56T";
  const referralCode = "CVTPS56T";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const referralData: ReferralRecord[] = [];

  const columns: Column<ReferralRecord>[] = [
    {
      key: "user",
      header: "User",
    },
    {
      key: "registrationTime",
      header: "Registration Time",
    },
    {
      key: "depositAmount",
      header: "Deposit Amount",
    },
    {
      key: "tradingVolume",
      header: "Trading Volume",
    },
    {
      key: "reward",
      header: "Reward",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Referral Program</h1>

      {/* How it Works */}
      <Card className="p-6">
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                Share Your Code and Link
              </h3>
              <p className="text-sm text-gray-500">
                You can invite your friends to use all ALTARB products with just
                one referral code.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                Connect with Your Friends
              </h3>
              <p className="text-sm text-gray-500">
                Your friends will be associated with you after they sign up.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                Get Multiple Rewards
              </h3>
              <p className="text-sm text-gray-500">
                Automatically get Trading Commissions, ALTARB Card Rewards when
                your friends trade and apply for a ALTARB Card
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Referral Link and Code */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            My Referral Link
          </label>
          <div className="flex gap-2">
            <Input value={referralLink} readOnly className="flex-1" />
            <button
              onClick={() => handleCopy(referralLink, "link")}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {copied === "link" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            My Referral Code
          </label>
          <div className="flex gap-2">
            <Input value={referralCode} readOnly className="flex-1" />
            <button
              onClick={() => handleCopy(referralCode, "code")}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {copied === "code" ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Referral History */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Referral History
        </h2>

        <Card>
          <DataTable
            columns={columns}
            data={referralData}
            emptyStateMessage="No Records"
          />
        </Card>
      </div>
    </div>
  );
}