import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { BusinessVerification } from "./pages/BusinessVerification";
import { HSNSetup } from "./pages/HSNSetup";
import { WelcomeScreen } from "./pages/WelcomeScreen";
import { CompleteProfile } from "./pages/CompleteProfile";
import { Dashboard } from "./pages/Dashboard";
import { TenderListing } from "./pages/TenderListing";
import { TenderDetails } from "./pages/TenderDetails";
import { EligibilityFlow } from "./pages/EligibilityFlow";
import { UserProfile } from "./pages/UserProfile";
import { SavedBids } from "./pages/SavedBids";
import { WonBids } from "./pages/WonBids";
import { MetalCapitalDashboard } from "./pages/MetalCapitalDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/verify-business",
    Component: BusinessVerification,
  },
  {
    path: "/hsn-setup",
    Component: HSNSetup,
  },
  {
    path: "/welcome",
    Component: WelcomeScreen,
  },
  {
    path: "/complete-profile",
    Component: CompleteProfile,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/tenders",
    Component: TenderListing,
  },
  {
    path: "/tender/:tenderId",
    Component: TenderDetails,
  },
  {
    path: "/eligibility/:tenderId",
    Component: EligibilityFlow,
  },
  {
    path: "/profile",
    Component: UserProfile,
  },
  {
    path: "/saved-bids",
    Component: SavedBids,
  },
  {
    path: "/won-bids",
    Component: WonBids,
  },
  {
    path: "/metal-capital-dashboard",
    Component: MetalCapitalDashboard,
  },
]);