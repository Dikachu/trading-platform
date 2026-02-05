import { Button } from "../ui/Button";


export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Start Your Crypto Journey today
        </h2>

        <Button
          variant="primary"
          size="lg"
          className="px-12 py-4 text-base font-semibold shadow-lg hover:shadow-xl"
          to="/register"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}