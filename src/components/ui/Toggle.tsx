
interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Toggle({
  enabled,
  onChange,
  label,
  disabled = false,
  className = "",
}: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!enabled)}
      className={`relative inline-flex items-center gap-3 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${className}`}
      disabled={disabled}
    >
      <div
        className={`w-11 h-6 rounded-full transition-colors ${
          enabled ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
            enabled ? "translate-x-6" : "translate-x-0.5"
          } mt-0.5`}
        />
      </div>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </button>
  );
}