import { useState } from "react";
import { Sidebar, type SidebarItem } from "@/components/ui/Sidebar";
import {
  Settings,
  Shield,
  BadgeCheck,
  Gift,
  Ticket,
  Menu,
  X,
} from "lucide-react";
import { Outlet } from "react-router-dom";

export function ProfileLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems: SidebarItem[] = [
    { icon: Settings, label: "Account Settings", path: "/profile/settings" },
    { icon: Shield, label: "Security", path: "/profile/security" },
    {
      icon: BadgeCheck,
      label: "Identity Verification",
      path: "/profile/identity-verification",
    },
    { icon: Gift, label: "Referral Program", path: "/profile/referral-program" },
    { icon: Ticket, label: "Promo Codes", path: "/profile/promo-codes" },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Backdrop Filter */}
      {isSidebarOpen && (
        <div
          className="fixed top-16 left-0 right-0 bottom-0 z-20 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Responsive Sidebar */}
      <div
        className={`fixed lg:top-0 left-0 z-30 transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[calc(100%+100px)]"
        }`}
      >
        <Sidebar
          items={sidebarItems}
          onItemClick={() => setIsSidebarOpen(false)}
        />

        {/* Mobile Close Button inside Sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-[-50px] p-2 bg-white rounded-md shadow-md lg:hidden"
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header (Visible only on small screens) */}
        <div className="flex items-center justify-between p-4 bg-white border-b lg:hidden">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleSidebar}
          >
            <Menu className="text-gray-600" />
            <span className="font-bold text-gray-800">Profile</span>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-8 lg:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}