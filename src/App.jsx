import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import CampaignLists from "./Pages/Admin/CampaignLists";
import FindCampaigns from "./Pages/Campaigns";
import BiddingForms from "./Pages/Campaigns/BidCampaign/BiddingForms";
import BiddingList from "./Pages/Campaigns/BidCampaign/BiddingList";
import CampaignDetails from "./Pages/Campaigns/CampaignDetails";
import CompletedCampaigns from "./Pages/Campaigns/CompletedCampaigns";
import CreateCampain from "./Pages/Campaigns/CreateCampain";
import CreatorsDashboard from "./Pages/Dashboard/CreatorsDashboard";
import WorkingCampaign from "./Pages/Dashboard/WorkingCampaign";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import BrandProfile from "./Pages/Profile/BrandProfile";
import CreatorProfile from "./Pages/Profile/CreatorProfile";
import Settings from "./Pages/Settings";
import Signup from "./Pages/Signup";
<<<<<<< HEAD
import Wallet from "./Pages/Wallets";
=======
import Academy from "./Pages/Academy";
>>>>>>> de60a2cdfcba22259c4d7f8d18336fb7765b61c4

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="campaigns" element={<FindCampaigns />} />
        <Route path="campaign/:id" element={<CampaignDetails />} />
        <Route path="bid/:id" element={<BiddingForms />} />
        <Route path="bidders/:id" element={<BiddingList />} />
        <Route path="creator-dashboard" element={<CreatorsDashboard />} />
        <Route path="working-campaign/:id" element={<WorkingCampaign />} />
        <Route path="settings/:username" element={<Settings />} />
        <Route path="create-campaign" element={<CreateCampain />} />
        <Route path="completed-campaigns" element={<CompletedCampaigns />} />
        <Route path="brand-profile" element={<BrandProfile />} />
        <Route path="creator-profile" element={<CreatorProfile />} />
<<<<<<< HEAD
        <Route path="wallet" element={<Wallet />} />
        <Route path="admin/campaign-lists" element={<CampaignLists />} />
=======
        <Route path="academy" element={<Academy/>} />
>>>>>>> de60a2cdfcba22259c4d7f8d18336fb7765b61c4
      </Routes>
    </div>
  );
}

export default App;
