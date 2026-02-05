import { type LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export interface SidebarItem {
  icon: LucideIcon;
  label: string;
  path: string;
  active?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  onItemClick?: (item: SidebarItem) => void;
  className?: string;
}

export function Sidebar({ items, onItemClick, className = "" }: SidebarProps) {
  return (
    <aside className={`w-64 bg-white border-r border-gray-200 ${className}`}>
      <nav className="py-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          if (item.path) {
            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => onItemClick?.(item)}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                    isActive
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            );
          }

          return (
            <button
              key={index}
              onClick={() => onItemClick?.(item)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                item.active
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
