import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// interface MenuItem {
//   label: string;
//   description?: string;
//   icon?: React.ReactNode;
//   items?: MenuItem[];
// }

interface DropdownProps {
  label: string;
  // items: MenuItem[];
  // isButton?: boolean;
  hideOnSmallScreen?: boolean;
  trigger?: React.ReactNode;
  customContent: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  // items,
  // isButton = false,
  hideOnSmallScreen = false,
  trigger,
  customContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {trigger ? (
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            hideOnSmallScreen ? "hidden sm:flex" : "flex"
          } items-center gap-1 px-3 py-2 rounded font-medium cursor-pointer ${
            isOpen
              ? "text-primary bg-gray-800/50"
              : "text-white hover:text-primary hover:bg-gray-800/30"
          }`}
        >
          <span className="text-sm font-medium">{label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      )}

      {isOpen && (
        <div className="fixed top-16 right-0 bg-black border border-gray-800 rounded-lg z-50 max-w-[300px] w-full animate-slide-in-right p-4">
          {customContent}
          {/* {customContent ? (
            customContent
          ) : (
            <div className="py-2">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-800/50 transition-colors flex items-start gap-3 group"
                >
                  {item.icon && (
                    <div className="text-2xl flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-medium mb-0.5">
                      {item.label}
                    </div>
                    {item.description && (
                      <div className="text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </div>
                    )}
                  </div>
                  {!item.description && !item.icon && (
                    <span className="text-gray-500 ml-auto">→</span>
                  )}
                </button>
              ))}
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;