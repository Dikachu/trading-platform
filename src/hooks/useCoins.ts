import { useEffect, useState } from "react";
import { fetchMarkets } from "../services/coingecko";
import type { Coin } from "@/types/types";

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMarkets()
      .then(setCoins)
      .finally(() => setLoading(false));
  }, []);

  return { coins, loading };
};

