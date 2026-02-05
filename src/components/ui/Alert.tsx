import { Info, AlertCircle, CheckCircle, XCircle } from "lucide-react";

interface AlertProps {
  variant?: "info" | "warning" | "success" | "error";
  children: React.ReactNode;
  className?: string;
}

export function Alert({
  variant = "info",
  children,
  className = "",
}: AlertProps) {
  const icons = {
    info: Info,
    warning: AlertCircle,
    success: CheckCircle,
    error: XCircle,
  };

  const styles = {
    info: "bg-blue-50 text-blue-900 border-blue-200",
    warning: "bg-yellow-50 text-yellow-900 border-yellow-200",
    success: "bg-green-50 text-green-900 border-green-200",
    error: "bg-red-50 text-red-900 border-red-200",
  };

  const iconColors = {
    info: "text-blue-500",
    warning: "text-yellow-500",
    success: "text-green-500",
    error: "text-red-500",
  };

  const Icon = icons[variant];

  return (
    <div
      className={`flex gap-3 p-4 rounded-lg border ${styles[variant]} ${className}`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColors[variant]}`} />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}