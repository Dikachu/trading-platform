import bgVideo from "@/assets/videos/bg_video.mp4";

import { SITE_CONFIG } from "@/constants/config";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full max-h-[550px] h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[5%] left-[5%] w-[90%] h-[90%] object-cover z-0 opacity-70"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-b from-black to-transparent z-1" />
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-40 bg-gradient-to-t from-black to-transparent z-0" />
      <div className="absolute top-0 bottom-0 left-0 h-full w-50 sm:w-100 bg-gradient-to-r from-black to-transparent z-1" />
      <div className="absolute top-0 bottom-0 right-0 h-full w-50 sm:w-100 bg-gradient-to-l from-black to-transparent z-1" />

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium mb-4 tracking-tight bg-gradient-to-b from-primary via-yellow-200 to-white bg-clip-text text-transparent">
          {SITE_CONFIG.name} • Crypto Exchange
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8">
          <span className="text-primary font-bold">Buy & Sell</span> Bitcoin,
          Ethereum, and Altcoins
        </p>

        {/* Create space for video */}
        <div className="w-full h-50" />

        {/* User Benefit Badge */}
        <div className="flex items-center gap-2 mb-5 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800 mt-3">
          <span className="text-primary">🎁</span>
          <p className="text-xs md:text-sm">
            Exclusive Benefit{" "}
            <span className="text-primary font-bold">$3000</span> for New Users!
          </p>
        </div>

        {/* Call to Action Button */}
        <NavLink to="/register" className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-12 rounded-sm uppercase tracking-widest text-lg">
          Get Started
        </NavLink>
        {/* <NavLink to="/profile" className="bg-primary hover:bg-yellow-500 text-black font-bold py-3 px-12 rounded-sm uppercase tracking-widest text-lg">
          Profile
        </NavLink> */}
      </div>
    </section>
  );
};

export default Hero;