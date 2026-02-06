import type { Coin } from "@/types/types";
import { Carousel } from "../ui/Carousel";


export function CryptoCarouselSection({coins}: {coins: Coin[]}) {
  const row1: Coin[] = coins.slice(0, 10);

  const row2: Coin[] = coins.slice(20, 30);

  const row3: Coin[] = coins.slice(30, 40);

  const row4: Coin[] = coins.slice(40, 50);

  // const row1: Coin[] = coins.slice(0, 20);

  // const row2: Coin[] = coins.slice(20, 40);

  // const row3: Coin[] = coins.slice(40, 60);

  // const row4: Coin[] = coins.slice(60, 80);

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