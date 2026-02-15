import { useState, useEffect } from "react";

export type Currency = "USD" | "INR";

interface GeoPrice {
  currency: Currency;
  symbol: string;
  exchangeRate: number;
}

const PRICING_CONFIG: Record<Currency, GeoPrice> = {
  USD: { currency: "USD", symbol: "$", exchangeRate: 1 },
  INR: { currency: "INR", symbol: "₹", exchangeRate: 83 },
};

export function useGeoPricing() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const browserLocale = navigator.language || (navigator as any).userLanguage;
        if (browserLocale?.toLowerCase().includes("in") || browserLocale?.toLowerCase() === "hi") {
          setCurrency("INR");
          setIsLoading(false);
          return;
        }

        const response = await fetch("https://ipapi.co/json/", { 
          signal: AbortSignal.timeout(3000) 
        });
        const data = await response.json();
        
        if (data.country_code === "IN") {
          setCurrency("INR");
        }
      } catch (error) {
        console.log("Using default USD pricing");
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const formatPrice = (usdPrice: number): string => {
    const config = PRICING_CONFIG[currency];
    const localPrice = Math.round(usdPrice * config.exchangeRate);
    
    if (currency === "INR") {
      return `${config.symbol}${localPrice.toLocaleString("en-IN")}`;
    }
    return `${config.symbol}${localPrice.toLocaleString("en-US")}`;
  };

  const toggleCurrency = () => {
    setCurrency(prev => prev === "USD" ? "INR" : "USD");
  };

  return {
    currency,
    isLoading,
    formatPrice,
    toggleCurrency,
    symbol: PRICING_CONFIG[currency].symbol,
  };
}
