import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import App from "./App";
import AssetOverviewPage from "./pages/assets/AssetOverviewPage";
import { AssetsLayout } from "./components/layouts/AssetsLayout";
import DepositPage from "./pages/assets/DepositPage";
import WithdrawPage from "./pages/assets/WithdrawPage";
import TransferPage from "./pages/assets/TransferPage";
import SwapPage from "./pages/assets/SwapPage";
import { TransactionLayout } from "./components/layouts/TransactionLayout";
import AllTransactionsPage from "./pages/transactions/AllTransactionsPage";
import { TransactionDepositsPage } from "./pages/transactions/TransactionDepositsPage";
import { TransactionWithdrawalPage } from "./pages/transactions/TransactionWithdrawalPage";
import { TransactionTransferPage } from "./pages/transactions/TransactionTransferPage";
import { TransactionEarningsPage } from "./pages/transactions/TransactionEarningsPage";
import { ProfileLayout } from "./components/layouts/ProfileLayout";
import { AccountSettingsPage } from "./pages/profile/AccountSettingsPage";
import { SecurityPage } from "./pages/profile/SecurityPage";
import { IdentityVerificationPage } from "./pages/profile/IdentityVerificationPage";
import { ReferralProgramPage } from "./pages/profile/ReferralProgramPage";
import { PromoCodesPage } from "./pages/profile/PromoCodesPage";
import { StakingPage } from "./pages/StakingPage";
import { EarnPage } from "./pages/EarnPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ChannelVerificationPage } from "./pages/ChannelVerificationPage";
import { BugBountyPage } from "./pages/BugBountyPage";
import { CorporateIdentityPage } from "./pages/CorporateIdentityPage";
import { InstitutionalServicesPage } from "./pages/InstitutionalServicesPage";
import { FeesPage } from "./pages/FeesPage";
import { MarketsPage } from "./pages/MarketsPage";
import { TradingPage } from "./pages/TradingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wraps children with Header/Footer
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/assets",
        element: <AssetsLayout />,
        children: [
          {
            path: "/assets/overview",
            element: <AssetOverviewPage />,
          },
          {
            path: "/assets/deposit",
            element: <DepositPage />,
          },
          {
            path: "/assets/withdraw",
            element: <WithdrawPage />,
          },
          {
            path: "/assets/transfer",
            element: <TransferPage />,
          },
          {
            path: "/assets/swap",
            element: <SwapPage />,
          },
        ],
      },
      {
        path: "/transaction",
        element: <TransactionLayout />,
        children: [
          {
            path: "/transaction/all",
            element: <AllTransactionsPage />,
          },
          {
            path: "/transaction/deposits",
            element: <TransactionDepositsPage />,
          },
          {
            path: "/transaction/withdrawals",
            element: <TransactionWithdrawalPage />,
          },
          {
            path: "/transaction/transfers",
            element: <TransactionTransferPage />,
          },
          {
            path: "/transaction/earnings",
            element: <TransactionEarningsPage />,
          },
        ],
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "/profile/settings",
            element: <AccountSettingsPage />,
          },
          {
            path: "/profile/security",
            element: <SecurityPage />,
          },
          {
            path: "/profile/identity-verification",
            element: <IdentityVerificationPage />,
          },
          {
            path: "/profile/referral-program",
            element: <ReferralProgramPage />,
          },
          {
            path: "/profile/promo-codes",
            element: <PromoCodesPage />,
          },
        ],
      },
      {
        path: "trading",
        element: <TradingPage />,
      },
      {
        path: "markets",
        element: <MarketsPage />,
      },
      {
        path: "staking",
        element: <StakingPage />,
      },
      {
        path: "earn",
        element: <EarnPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "fees",
        element: <FeesPage />,
      },
      {
        path: "bug-bounty",
        element: <BugBountyPage />,
      },
      {
        path: "corporate-identity",
        element: <CorporateIdentityPage />,
      },
      {
        path: "institutional-services",
        element: <InstitutionalServicesPage />,
      },
      {
        path: "channel-verification",
        element: <ChannelVerificationPage />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);