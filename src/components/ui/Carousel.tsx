interface CryptoToken {
  name: string;
  icon: string;
}

interface CarouselProps {
  items: CryptoToken[];
  duration?: number;
  direction?: "left" | "right";
  className?: string;
}

export function Carousel({
  items,
  duration = 30,
  direction = "left",
  className = "",
}: CarouselProps) {
  // Duplicate items multiple times for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  const animationDirection =
    direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex gap-3 py-2 ${animationDirection}`}
        style={{
          animation: `${animationDirection} ${duration}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full whitespace-nowrap flex-shrink-0"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-left,
        .scroll-right {
          will-change: transform;
        }

        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}