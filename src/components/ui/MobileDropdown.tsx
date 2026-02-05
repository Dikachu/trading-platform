import type { MenuItem } from "@/types/types";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export // Mobile Dropdown Component
const MobileDropdown: React.FC<{
  label: string;
  items: MenuItem[];
  icon?: React.ReactNode;
}> = ({ label, items, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 last:m-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-gray-800/50 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <span
            className={`${isOpen ? "text-primary" : "text-gray-400"} font-medium`}
          >
            {label}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="bg-gray-900/50">
          {items.map((item, index) => (
            <NavLink
              to={item.path || "#"}
              key={index}
              className="block w-full px-6 py-3 text-left hover:bg-gray-800/50"
            >
              <div className="flex items-start gap-2">
                {item.icon && (
                  <span className="text-lg mt-0.5">{item.icon}</span>
                )}
                <div>
                  <div className="text-white text-sm font-medium">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-gray-400 text-xs mt-1">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};