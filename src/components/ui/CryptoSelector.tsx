import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

export interface CryptoOption {
  symbol: string;
  name: string;
  icon: string;
  color?: string;
}

interface CryptoSelectorProps {
  options: CryptoOption[];
  selected: CryptoOption;
  onSelect: (option: CryptoOption) => void;
  label?: string;
  searchable?: boolean;
  className?: string;
}

export function CryptoSelector({
  options,
  selected,
  onSelect,
  label,
  searchable = false,
  className = "",
}: CryptoSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = searchable
    ? options.filter(
        (option) =>
          option.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
          option.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : options;

  const handleSelect = (option: CryptoOption) => {
    onSelect(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {label && (
        <label className="block text-sm text-gray-600 mb-2">{label}</label>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg flex items-center justify-between hover:border-gray-300 transition-colors"
      >
        <div className="flex items-center gap-3">
          <img src={selected.icon} alt={selected.name} className="w-6 h-6 object-contain" />
          <div className="flex items-center gap-2">
            <span className="font-medium">{selected.name}</span>
            <span className="text-gray-500">{selected.symbol}</span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-hidden">
          {searchable && (
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-300"
                  autoFocus
                />
              </div>
            </div>
          )}

          <div className="overflow-y-auto max-h-64">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-400 text-sm">
                No results found
              </div>
            ) : (
              filteredOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    option.symbol === selected.symbol ? "bg-gray-50" : ""
                  }`}
                >
                  <img src={option.icon} alt={option.name} className="w-6 h-6 object-contain" />
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{option.name}</span>
                    <span className="text-gray-500 text-sm">
                      {option.symbol}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
