import { cn, formatPrice } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  currency?: 'KES' | 'USD';
  suffix?: string;
  className?: string;
  label?: string;
}

export function PriceTag({ price, currency = 'KES', suffix, className, label }: PriceTagProps) {
  if (label) {
    return (
      <span className={cn("font-semibold text-base", className)}>
        {label}
      </span>
    );
  }

  return (
    <span className={cn("font-semibold text-base", className)}>
      {formatPrice(price, currency)}
      {suffix && <span className="text-xs font-normal text-muted-foreground ml-1">{suffix}</span>}
    </span>
  );
}