import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/Shared/ScrollToTop";
import Login from "./Pages/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup from "./Pages/Signup";
import FindCampaigns from "./Pages/Campaigns/FindCampaigns";

function App() {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="find-campaign" element={<FindCampaigns />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
