
interface StatusBadgeProps {
  status: "success" | "warning" | "error" | "info" | "pending";
  text: string;
  dot?: boolean;
  className?: string;
}

export function StatusBadge({
  status,
  text,
  dot = false,
  className = "",
}: StatusBadgeProps) {
  const styles = {
    success: "bg-green-100 text-green-700 border-green-200",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-200",
    error: "bg-red-100 text-red-700 border-red-200",
    info: "bg-blue-100 text-blue-700 border-blue-200",
    pending: "bg-gray-100 text-gray-700 border-gray-200",
  };

  const dotStyles = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    pending: "bg-gray-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotStyles[status]}`} />
      )}
      {text}
    </span>
  );
}