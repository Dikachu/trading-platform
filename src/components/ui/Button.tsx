import React from "react";
import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "danger";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  to?: string;
  rotateIcon?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  loading = false,
  className = "",
  rotateIcon = true,
  disabled,
  to,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-primary/80 text-white hover:bg-primary",
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-200 bg-white hover:bg-gray-50",
    ghost: "hover:bg-gray-100",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  if (to) {
    return (
      <NavLink
        to={to}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className} group`}
      >
        {Icon && iconPosition === "left" && <Icon className={`w-4 h-4 mr-2 ${rotateIcon ? "group-hover:rotate-45" : ""}`} />}
        {children}
        {Icon && iconPosition === "right" && <Icon className={`w-4 h-4 ml-2 ${rotateIcon ? "group-hover:rotate-45" : ""}`} />}
      </NavLink>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon className="w-4 h-4 mr-2" />}
          {children}
          {Icon && iconPosition === "right" && (
            <Icon className="w-4 h-4 ml-2" />
          )}
        </>
      )}
    </button>
  );
}