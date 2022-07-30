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
import Wallet from "./Pages/Wallets";
import Academy from "./Pages/Academy";
import AnimatedCursor from "react-animated-cursor";
import CaseStudy from "./Pages/Admin/CaseStudy";
import WorkShowcase from "./Pages/WorkShowcase";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/Blog/BlogDetails";
import Home from "./Pages/Academy/Home";
import AcademicVideos from "./Pages/Academy/Videos";
import Studio from "./Pages/Studio/Home";

function App() {
  return (
    <div className='bg-white'>
      <AnimatedCursor
        color='0,0,0'
        innerSize={10}
        outerSize={40}
        innerScale={1}
        outerScale={1.8}
        outerAlpha={0}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          border: "1px solid #000000",
          zIndex: "9999",
        }}
        innerStyle={{
          zIndex: "9999",
        }}
      />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='campaigns' element={<FindCampaigns />} />
        <Route path='campaign/:id' element={<CampaignDetails />} />
        <Route path='bid/:id' element={<BiddingForms />} />
        <Route path='bidders/:id' element={<BiddingList />} />
        <Route path='creator-dashboard' element={<CreatorsDashboard />} />
        <Route path='working-campaign/:id' element={<WorkingCampaign />} />
        <Route path='settings/:username' element={<Settings />} />
        <Route path='create-campaign' element={<CreateCampain />} />
        <Route path='completed-campaigns' element={<CompletedCampaigns />} />
        <Route path='brand-profile' element={<BrandProfile />} />
        <Route path='creator-profile' element={<CreatorProfile />} />
        <Route path='wallet' element={<Wallet />} />
        <Route path='admin/campaign-lists' element={<CampaignLists />} />
        <Route path='academy' element={<Academy />} />
        <Route path='academy/home' element={<Home />} />
        <Route path='academy/videos' element={<AcademicVideos />} />
        <Route path='case-study' element={<CaseStudy />} />
        <Route path='work-showcase' element={<WorkShowcase />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetails />} />
        <Route path='studio' element={<Studio />} />
      </Routes>
    </div>
  );
}

export default App;
