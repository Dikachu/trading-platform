import { Carousel } from "../ui/Carousel";

interface CryptoToken {
  name: string;
  icon: string;
}

export function CryptoCarouselSection() {
  const row1: CryptoToken[] = [
    { name: "Fusion", icon: "/images/crypto/fusion.svg" },
    { name: "Bitcoin", icon: "/images/crypto/bitcoin.svg" },
    { name: "Ethereum", icon: "/images/crypto/ethereum.svg" },
    { name: "1Inch", icon: "/images/crypto/1inch.svg" },
    { name: "Algorand", icon: "/images/crypto/algorand.svg" },
  ];

  const row2: CryptoToken[] = [
    { name: "Polygon", icon: "/images/crypto/polygon.svg" },
    { name: "Waves", icon: "/images/crypto/waves.svg" },
    { name: "MakerDAO", icon: "/images/crypto/makerdao.svg" },
    { name: "Monero", icon: "/images/crypto/monero.svg" },
    { name: "Solana", icon: "/images/crypto/solana.svg" },
  ];

  const row3: CryptoToken[] = [
    { name: "Ethereum Classic", icon: "/images/crypto/ethereum-classic.svg" },
    { name: "Polkadot", icon: "/images/crypto/polkadot.svg" },
    { name: "Cosmos", icon: "/images/crypto/cosmos.svg" },
    { name: "EOS", icon: "/images/crypto/eos.svg" },
    { name: "Stellar", icon: "/images/crypto/stellar.svg" },
  ];

  const row4: CryptoToken[] = [
    { name: "Axie Infinity Shard", icon: "/images/crypto/axie.svg" },
    { name: "Litecoin", icon: "/images/crypto/litecoin.svg" },
    { name: "Kusama", icon: "/images/crypto/kusama.svg" },
    { name: "Chainlink", icon: "/images/crypto/chainlink.svg" },
    { name: "Cardano", icon: "/images/crypto/cardano.svg" },
  ];

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-full">
        <div className="space-y-4">
          <Carousel items={row1} duration={40} direction="left" />
          <Carousel items={row2} duration={35} direction="right" />
          <Carousel items={row3} duration={45} direction="left" />
          <Carousel items={row4} duration={38} direction="right" />
        </div>
      </div>
    </section>
  );
}