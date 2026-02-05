
interface PercentageSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  steps?: number[];
  className?: string;
}

export function PercentageSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  steps = [0, 25, 50, 75, 100],
  className = "",
}: PercentageSliderProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative pt-1">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #FDB022 0%, #FDB022 ${value}%, #E5E7EB ${value}%, #E5E7EB 100%)`,
          }}
        />

        <div className="flex justify-between mt-3">
          {steps.map((step) => (
            <button
              key={step}
              onClick={() => onChange(step)}
              className={`relative flex flex-col items-center ${
                value === step ? "text-yellow-500" : "text-gray-400"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full -mt-8 transition-colors ${
                  value === step
                    ? "bg-yellow-500 ring-4 ring-yellow-100"
                    : "bg-gray-300"
                }`}
              />
              <span className="text-xs mt-1 font-medium">{step}%</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fdb022;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fdb022;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
