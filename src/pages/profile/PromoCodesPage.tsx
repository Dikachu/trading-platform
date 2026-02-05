import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Ticket } from "lucide-react";

export function PromoCodesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Promo codes</h1>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Ticket className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Activate your gift code
            </h2>
            <p className="text-sm text-gray-500">
              Enter code of your gift card (promo)
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-primary mb-4">
            You haven't activated the promo codes yet
          </p>

          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Project gift codes can be purchased and exchanged through
                distributors and stockbrokers, as well as used to settle
                payments with vendors.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Once you receive a gift code, you only need to take a few steps
                to use it.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>
                Usage options include: Reselling gift cards, loyalty rewards and
                games, e-commerce purchases and more.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <Input placeholder="Promo code" className="flex-1" />
          <Button variant="primary" className="bg-primary px-8">
            Activate
          </Button>
        </div>
      </Card>
    </div>
  );
}