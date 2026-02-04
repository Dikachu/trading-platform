// import React, { useState } from "react";
import { Menu, ArrowDownToLine, EyeClosed, ArrowUpToLine, ChevronRight, TrendingUp, Scroll, CircleHelp, CreditCard, FileText } from "lucide-react";
import Dropdown from "../ui/Dropdown";
import type { MenuItem } from "@/types/types";
import { MobileDropdown } from "../ui/MobileDropdown";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo.png"
import Avatar from "@/assets/images/avatar.svg"



const Header: React.FC = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tradingItems: MenuItem[] = [
    {
      label: "Markets"
    },
    {
      label: "Swap",
    },
    {
      label: "Spot",
    },
    {
      label: "Margin",
    },
    {
      label: "Tournament",
    },
  ];

  const futuresItems: MenuItem[] = [
    {
      label: "USDT Perpetuals",
    },
  ];
  
  const earnItems: MenuItem[] = [
    {
      label: "Staking",
    },
    {
      label: "Crypto Lending",
    },
  ];

  const buyCryptoItems: MenuItem[] = [
    {
      label: "Fiat Deposit",
    },
    {
      label: "P2P Trading",
    },
  ];

  const documentationItems: MenuItem[] = [
    {
      label: "User Agreement",
    },
    {
      label: "AML Policy",
    },
    {
      label: "Privacy Policy",
    },
  ];

  return (
    <header className="bg-black border-b border-gray-800 w-full fixed top-0 left-0 right-0 z-50 shadow-lg shadow-primary/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center justify-center flex-shrink-0 gap-2"
          >
            <img src={Logo} alt="Altarb Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-xl">ALTARB</span>
          </NavLink>

          {/* Desktop Navigation */}
          {/* <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
            <Dropdown label="Trading" items={tradingItems} />
            <Dropdown label="Futures" items={futuresItems} />
            <Dropdown label="Tools" items={toolsItems} />
            <Dropdown label="Earn" items={earnItems} />
            <Dropdown label="Buy Crypto" items={buyCryptoItems} />
            <Dropdown label="Documentation" items={documentationItems} />
          </nav> */}

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Deposit Button - Hidden on small screens */}
            <button className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-xs text-black font-medium px-4 py-2 rounded cursor-pointer">
              <ArrowDownToLine size={15} />
              Deposit
            </button>

            {/* Assets Dropdown */}
            <Dropdown
              label="Assets"
              hideOnSmallScreen
              customContent={
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-500">
                      Assets Overview
                    </h3>
                    <span className="text-gray-400 text-sm">
                      <EyeClosed size={16} className="cursor-pointer p-2 " />
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-1">
                      0 USD
                    </div>
                    <div className="text-gray-400 text-sm">≈ 0 BTC</div>
                    <div className="text-gray-500 text-xs mt-1">
                      Data may be delayed.
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded text-sm cursor-pointer">
                      <ArrowDownToLine className="w-4 h-4" />
                      Deposit
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded text-sm cursor-pointer">
                      <ArrowUpToLine className="w-4 h-4" />
                      Withdraw
                    </button>
                  </div>
                  <div className="space-y-3 border-t border-gray-800 pt-3">
                    {[
                      { label: "Spot", amount: "$0.00", percent: "0.0%" },
                      { label: "Margin", amount: "$0.00", percent: "0.0%" },
                      { label: "Futures", amount: "$0.00", percent: "0.0%" },
                      { label: "Earn", amount: "$0.00", percent: "0.0%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <div className="text-white text-md">{item.label}</div>
                          <div className="text-gray-500 text-xs">
                            {item.percent}
                          </div>
                        </div>
                        <div className="text-white text-sm">{item.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>
              }
            />

            {/* History Dropdown */}
            <Dropdown
              label="History"
              hideOnSmallScreen
              customContent={
                <div className="w-full">
                  {[
                    { label: "All transactions", value: "all" },
                    { label: "Deposits", value: "deposits" },
                    { label: "Withdrawals", value: "withdrawals" },
                    { label: "Transfers", value: "transfers" },
                    { label: "Earnings", value: "earnings" },
                  ].map((item) => (
                    <NavLink
                      to={`/history?view=${item.value}`}
                      key={item.value}
                      className="group flex items-center justify-between mb-1 last:m-0 w-full p-2 text-left hover:bg-gray-800/50 text-sm text-white"
                    >
                      {item.label}
                      <ChevronRight
                        size={16}
                        className="mr-1 group-hover:mr-0"
                      />
                    </NavLink>
                  ))}
                </div>
              }
            />

            {/* User Profile Dropdown */}
            <Dropdown
              label=""
              trigger={
                <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                  <img
                    src={Avatar}
                    alt="User Avatar"
                    className="h-full w-full"
                  />
                </div>
              }
              customContent={
                <div className="w-full">
                  <div className="p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800/50 p-2 rounded mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                        <img
                          src={Avatar}
                          alt="User Avatar"
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          kin***@****
                        </div>
                        <div className="bg-gray-800 text-gray-200 text-xs rounded px-2 py-1 mt-1 w-max">
                          UID 567359596
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className="px-2 py-1 bg-red-900/30 text-red-800 rounded w-full text-center">
                        VIP
                      </span>
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded w-full text-center">
                        Unverified
                      </span>
                    </div>
                  </div>
                  <div className="py-2">
                    {[
                      { label: "Wallet", path: "/profile/wallets" },
                      { label: "Settings", path: "profile/settings" },
                      { label: "Security", path: "profile/security" },
                      {
                        label: "Identity Verification",
                        path: "profile/identity",
                      },
                      { label: "Promo codes", path: "profile/promo-codes" },
                      {
                        label: "Referral program",
                        path: "profile/referral=program",
                      },
                    ].map((item) => (
                      <NavLink
                        to={item.path}
                        key={item.path}
                        className="group flex items-center justify-between mb-1 last:m-0 w-full p-2 text-left hover:bg-gray-800/50 text-sm text-white"
                      >
                        {item.label}
                        <ChevronRight
                          size={16}
                          className="mr-1 group-hover:mr-0"
                        />
                      </NavLink>
                    ))}
                  </div>
                  <div className="border-t border-gray-800 mt-2 pt-2">
                    <button className="w-full px-4 py-3 text-white text-sm text-left hover:bg-red-900/20 hover:text-red-700 cursor-pointer">
                      Log out
                    </button>
                  </div>
                </div>
              }
            />

            {/* Language Dropdown */}
            <Dropdown
              label="EN"
              customContent={
                <div className="w-full">
                  {[
                    { code: "EN", name: "English" },
                    { code: "TR", name: "Türkçe" },
                    { code: "DE", name: "Deutsch" },
                    { code: "ES", name: "Español" },
                    { code: "IT", name: "Italiano" },
                    { code: "FR", name: "Français" },
                    { code: "PT", name: "Portuguese" },
                    { code: "ZH", name: "繁體中文" },
                    { code: "JA", name: "日本語" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      className="flex items-center gap-3 mb-3 last:m-0 px-3 py-2 hover:bg-gray-900 w-full rounded cursor-pointer"
                    >
                      <span className="text-xs font-medium text-white px-2 py-1 bg-gray-800 rounded">
                        {lang.code}
                      </span>
                      <span className="text-sm text-white">{lang.name}</span>
                    </button>
                  ))}
                </div>
              }
            />

            {/* Side Menu */}
            <Dropdown
              label=""
              trigger={
                <button className="p-2 text-white hover:bg-gray-800 rounded cursor-pointer">
                  <Menu className="w-6 h-6" />
                </button>
              }
              customContent={
                <div className="w-full">
                  <nav className="space-y-1 h-auto max-h-[80vh] overflow-y-auto">
                    <MobileDropdown
                      label="Trading"
                      items={tradingItems}
                      icon={<TrendingUp />}
                    />
                    <MobileDropdown
                      label="Futures"
                      items={futuresItems}
                      icon={<Scroll />}
                    />
                    <MobileDropdown label="Earn" items={earnItems} icon={<CircleHelp />} />
                    <MobileDropdown
                      label="Buy Crypto"
                      items={buyCryptoItems}
                      icon={<CreditCard />}
                    />
                    <MobileDropdown
                      label="Documentation"
                      items={documentationItems}
                      icon={<FileText />}
                    />
                  </nav>
                </div>
              }
            />
            {/* <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:bg-gray-800 rounded"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {mobileMenuOpen && (
          <div className="py-4 border-t border-gray-800 max-h-[calc(100vh-64px)] overflow-y-auto">
            <nav className="space-y-1">
              <MobileDropdown label="Trading" items={tradingItems} icon="📊" />
              <MobileDropdown label="Futures" items={futuresItems} icon="💱" />
              <MobileDropdown label="Earn" items={earnItems} icon="💰" />
              <MobileDropdown
                label="Buy Crypto"
                items={buyCryptoItems}
                icon="💳"
              />
              <MobileDropdown
                label="Documentation"
                items={documentationItems}
                icon="📄"
              />
            </nav>
          </div>
        )} */}
      </div>
    </header>
  );
};

export default Header;
