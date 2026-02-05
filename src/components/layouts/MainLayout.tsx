import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { SITE_CONFIG } from "@/constants/config";
import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    document.title = SITE_CONFIG.fullName;
  }, []);

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <ScrollRestoration />
      <Header />
      <main className="mt-16">
        <Outlet />{" "}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;