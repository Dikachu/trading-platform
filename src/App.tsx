import CardCarousel from "./components/welcome/CardCarousel";
import { CryptoCarouselSection } from "./components/welcome/CryptoCarouselSection";
import { CTASection } from "./components/welcome/CTASection";
import Hero from "./components/welcome/Hero";
import { JourneySection } from "./components/welcome/JourneySection";
import MarketOverview from "./components/welcome/MarketOverview";
import { PortfolioSection } from "./components/welcome/PortfolioSection";
import { TrustedExchangeSection } from "./components/welcome/TrustedExchangeSection";

const App: React.FC = () => {

  return (
    <>
      <Hero />
      <CardCarousel />
      <MarketOverview />
      <PortfolioSection />
      <JourneySection />
      <TrustedExchangeSection />
      <CryptoCarouselSection />
      <CTASection />
    </>
  );
};

export default App;
