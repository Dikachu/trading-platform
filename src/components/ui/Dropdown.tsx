import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  hideOnSmallScreen?: boolean;
  trigger?: React.ReactNode;
  customContent: React.ReactNode;
  closeOnInsideClick?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  hideOnSmallScreen = false,
  trigger,
  customContent,
  closeOnInsideClick = true,
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

  const handleContentClick = (e: React.MouseEvent) => {
    if (!closeOnInsideClick) return;
    const target = e.target as HTMLElement;
    const isActionable =
      target.closest("a") || target.closest("button.closeOnInsideClick"); // || target.closest("Link");

    if (isActionable) {
      setIsOpen(false);
    }
  };

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
        <div
          onClick={handleContentClick}
          className="fixed top-16 right-0 bg-black border border-gray-800 z-50 max-w-[300px] w-full animate-slide-in-right p-4"
        >
          {customContent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;