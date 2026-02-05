import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  shadow = "sm",
  hover = false,
  onClick,
}: CardProps) {

  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg border border-gray-200 ${
        shadowStyles[shadow]
      } ${hover ? "hover:shadow-md transition-shadow cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}