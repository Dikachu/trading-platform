import { QRCodeSVG } from "qrcode.react";

interface QRCodeDisplayProps {
  data: string;
  size?: number;
  className?: string;
}

export function QRCodeDisplay({
  data,
  size = 200,
  className = "",
}: QRCodeDisplayProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <QRCodeSVG
        value={data}
        size={size}
        level="H"
        className="p-4 bg-white rounded-lg border-2 border-gray-200"
      />
    </div>
  );
}
