import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import images (Assuming 4 cards as per the image)
import card1 from "@/assets/images/cards/1.jpg";
import card2 from "@/assets/images/cards/2.jpg";
import card3 from "@/assets/images/cards/3.jpg";
import card4 from "@/assets/images/cards/4.jpg";
import card5 from "@/assets/images/cards/5.jpg";
import card6 from "@/assets/images/cards/6.jpg";
import card7 from "@/assets/images/cards/7.jpg";
import card8 from "@/assets/images/cards/8.jpg";
import card9 from "@/assets/images/cards/9.jpg";
import card10 from "@/assets/images/cards/10.jpg";
import card11 from "@/assets/images/cards/11.jpg";
import card12 from "@/assets/images/cards/12.jpg";
import card13 from "@/assets/images/cards/13.jpg";

const CardCarousel = () => {
  const slides = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 group">
      <Swiper
        modules={[Autoplay, Pagination]}
        // grabCursor={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-500 !opacity-100",
          bulletActiveClass: "!bg-primary !w-6 !rounded-full duration-300",
        }}
        // Responsive breakpoints
        breakpoints={{
          // Mobile (small screens)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Tablets (two cards)
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // Desktop (four cards as shown in image)
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        className="!pb-12" // Space for the dots
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
              <img
                src={img}
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Global Styles for the Dots to match your image */}
      <style>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;