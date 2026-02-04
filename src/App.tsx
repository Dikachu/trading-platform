import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black mt-16">
      <Header />

      {/* Demo Content */}
      <div className="max-w-[1600px] mx-auto px-4 py-12 h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to BITPLAX
          </h1>
          <p className="text-gray-400 text-lg">Your crypto trading platform</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
