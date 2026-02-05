import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { QRCodeDisplay } from "@/components/ui/QRCodeDisplay";
import { Alert } from "@/components/ui/Alert";
import { Copy, Check } from "lucide-react";

export function SecurityPage() {
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState({
    old: "",
    new: "",
    confirm: "",
  });

  const secretKey = "4P2TUNYU7OVWR2DBLEFFRAWXMPBYAV7V";
  const qrCodeData = `otpauth://totp/ALTARB:user@example.com?secret=${secretKey}&issuer=ALTARB`;

  const handleCopy = () => {
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic
    console.log("Password change:", password);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Two-Factor Authentication */}
      <section>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Two-Factor Authentication
        </h1>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            <span className="text-sm font-semibold text-red-600">Disabled</span>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-2">
                  Download Google Authenticator Android / iOS
                </h3>
                <p className="text-sm text-gray-500">
                  Google Authenticator can be downloaded from the App store or
                  Google Play. search "Google Authenticator" and proceed to
                  download.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-2">
                  Add key phrase into Google Authenticator and remember the key
                  phrase
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Open Google Authenticator, scan the QR code below or manually
                  enter the key phrase to activate the verification token.
                </p>
                <Alert variant="warning" className="mb-4">
                  <span className="text-primary font-medium">
                    Key phrase is used to recover Google Authenticator in the
                    event of a loss or change of device — please make sure to
                    keep the key phrase safe before setting up Google
                    Authenticator.
                  </span>
                </Alert>

                {/* QR Code and Secret Key */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <QRCodeDisplay data={qrCodeData} size={160} />

                  <div className="flex-1 w-full">
                    <label className="block text-sm text-gray-600 mb-2">
                      Secret key
                    </label>
                    <div className="flex gap-2">
                      <Input
                        value={secretKey}
                        readOnly
                        className="font-mono text-sm"
                      />
                      <button
                        onClick={handleCopy}
                        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>

                    <div className="mt-4">
                      <Input placeholder="6-digit code" className="mb-3" />
                      <Button
                        variant="primary"
                        fullWidth
                        className="bg-primary"
                      >
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Anti-phishing Code */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Anti-phishing code
        </h2>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            <span className="text-sm font-semibold text-red-600">Disabled</span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            All of our official emails will contain anti-phishing code to
            prevent phishing attempts
          </p>

          <div className="flex gap-3">
            <Input placeholder="Anti-phishing code (4-16)" className="flex-1" />
            <Button variant="primary" className="bg-primary">
              Enable
            </Button>
          </div>
        </Card>
      </section>

      {/* Account Password */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account</h2>

        <Card className="p-6">
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <Input
              type="password"
              placeholder="Old password"
              value={password.old}
              onChange={(e) =>
                setPassword({ ...password, old: e.target.value })
              }
              showPasswordToggle
            />

            <div>
              <Input
                type="password"
                placeholder="New password"
                value={password.new}
                onChange={(e) =>
                  setPassword({ ...password, new: e.target.value })
                }
                showPasswordToggle
              />
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  8-30 Characters
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  One uppercase letter
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  One number
                </span>
              </div>
            </div>

            <Input
              type="password"
              placeholder="Password confirmation"
              value={password.confirm}
              onChange={(e) =>
                setPassword({ ...password, confirm: e.target.value })
              }
              showPasswordToggle
            />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="bg-primary"
            >
              🔄 Change password
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
}