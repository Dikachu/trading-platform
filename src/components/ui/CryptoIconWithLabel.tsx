
export function CryptoIconWithLabel({
  icon,
  symbol,
  name,
  className = "",
}: {
  icon?: string;
  symbol: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
        <img src={icon} alt={symbol} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-sm uppercase">
          {symbol}
        </span>
        <span className="text-xs text-gray-500">{name}</span>
      </div>
    </div>
  );
}