import React from "react";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon?: LucideIcon | React.ReactNode;
  iconColor?: string;
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({
  icon,
  iconColor = "text-yellow-500",
  title,
  value,
  subtitle,
  trend,
  className = "",
}: StatCardProps) {
  const renderIcon = () => {
    if (!icon) return null;

    if (React.isValidElement(icon)) {
      return icon;
    }

    const IconComponent = icon as LucideIcon;
    return <IconComponent className={`w-6 h-6 ${iconColor}`} />;
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className="ml-4">{renderIcon()}</div>}
      </div>
      {trend && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span
            className={`text-sm font-medium ${
              trend.isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}%
          </span>
          <span className="text-sm text-gray-500 ml-2">vs last period</span>
        </div>
      )}
    </div>
  );
}