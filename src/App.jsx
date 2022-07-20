import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/Shared/ScrollToTop";
import Login from "./Pages/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from "./Pages/Signup";
import FindCampaigns from "./Pages/Campaigns";
import CampaignDetails from "./Pages/Campaigns/CampaignDetails";
import BiddingForms from "./Pages/Campaigns/BiddingForms";
import CreatorsDashboard from "./Pages/Dashboard/CreatorsDashboard";
import WorkingCampaign from "./Pages/Dashboard/WorkingCampaign";
import Settings from "./Pages/Settings";
import CreateCampain from "./Pages/Campaigns/CreateCampain";

function App() {
  return (
    <div className='bg-white'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='campaigns' element={<FindCampaigns />} />
        <Route path='campaign/:id' element={<CampaignDetails />} />
        <Route path='bid/:id' element={<BiddingForms />} />
        <Route path='creator-dashboard' element={<CreatorsDashboard />} />
        <Route path='working-campaign/:id' element={<WorkingCampaign />} />
        <Route path='settings/:username' element={<Settings />} />
        <Route path='create-campaign' element={<CreateCampain />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
