import type { Asset, Balance, Coin } from "@/types/types";
import { useMemo } from "react";

type UserBalances = Record<string, Balance>;

export function useAssets({ coins, balances }: { coins: Coin[]; balances: UserBalances }) {
  const assets: Asset[] = useMemo(() => {    
    return coins.map((coin) => {
      const bal = balances[coin.symbol.toUpperCase()] || {
        overall: 0,
        main: 0,
        trade: 0,
        collateral: 0,
      };
      

      return {
        ...bal, // Spreads overall, main, trade, collateral
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,

        // Calculate USD equivalents
        overallUsd: bal.overall * coin.current_price,
        mainUsd: bal.main * coin.current_price,
        tradeUsd: bal.trade * coin.current_price,
        collateralUsd: bal.collateral * coin.current_price,
      };
    });
  }, [coins, balances]);

  return assets;
}
