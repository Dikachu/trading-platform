import CardCarousel from "./components/welcome/CardCarousel";
import { CryptoCarouselSection } from "./components/welcome/CryptoCarouselSection";
import { CTASection } from "./components/welcome/CTASection";
import Hero from "./components/welcome/Hero";
import { JourneySection } from "./components/welcome/JourneySection";
import MarketOverview from "./components/welcome/MarketOverview";
import { PortfolioSection } from "./components/welcome/PortfolioSection";
import { TrustedExchangeSection } from "./components/welcome/TrustedExchangeSection";
import { useCoins } from "./hooks/useCoins";

const App: React.FC = () => {
  const { coins, loading } = useCoins();

  return (
    <>
      <Hero />
      <CardCarousel />
      <MarketOverview marketData={coins.slice(0, 20)} loading={loading} />
      <PortfolioSection />
      <JourneySection />
      <TrustedExchangeSection />
      <CryptoCarouselSection coins={coins} />
      <CTASection />
    </>
  );
};

export default App;
