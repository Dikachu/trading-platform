import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  className?: string;
}

export function FaqAccordion({
  items,
  title,
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      )}

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
            >
              <span className="font-medium text-gray-900 pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}