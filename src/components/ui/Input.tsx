import React, { forwardRef } from "react";
import { type LucideIcon, Eye, EyeOff, Copy, Check } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  helperText?: string;
  copyable?: boolean;
  showPasswordToggle?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon: Icon,
      iconPosition = "left",
      helperText,
      copyable = false,
      showPasswordToggle = false,
      className = "",
      type = "text",
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    const inputType = showPasswordToggle && showPassword ? "text" : type;

    const handleCopy = () => {
      if (props.value) {
        navigator.clipboard.writeText(String(props.value));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className="block text-sm text-gray-600 mb-2">{label}</label>
        )}

        <div className="relative">
          {Icon && iconPosition === "left" && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon className="w-5 h-5" />
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-gray-300"
            } ${Icon && iconPosition === "left" ? "pl-11" : ""} ${
              copyable ||
              showPasswordToggle ||
              (Icon && iconPosition === "right")
                ? "pr-11"
                : ""
            }`}
            {...props}
          />

          {Icon &&
            iconPosition === "right" &&
            !copyable &&
            !showPasswordToggle && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon className="w-5 h-5" />
              </div>
            )}

          {copyable && (
            <button
              type="button"
              onClick={handleCopy}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          )}

          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {(error || helperText) && (
          <p
            className={`mt-1.5 text-sm ${error ? "text-red-500" : "text-gray-500"}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";