import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: 'KES' | 'USD' = 'KES'): string {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  }

  // Format KES prices: e.g. Ksh 13.9M or Ksh 75,000
  if (price >= 1_000_000) {
    const inMillions = price / 1_000_000;
    // Show 1 decimal if not whole number, otherwise 0
    const formatted = inMillions.toFixed(inMillions % 1 === 0 ? 0 : 1);
    return `Ksh ${formatted}M`;
  }

  return `Ksh ${price.toLocaleString('en-KE')}`;
}
