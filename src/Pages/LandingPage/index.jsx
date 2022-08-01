import React from "react";
import Companies from "./Companies";
import DemandMarketing from "./DemandMarketing";
import Header from "./Header";
import Tutorial from "./Tutorial";
import FeedBacks from "./FeedBacks";
import WorkShowcase from "./WorkShowcase";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";
import ScrollToTop from "../../Components/Shared/ScrollToTop";
import { Breakpoint } from "react-socks";
import NavbarMobile from "../../Components/Shared/Navbar/NavbarMobile";
import HeaderMobile from "./Header/HeaderMobile";
import CompainesMobile from "./Companies/CompainesMobile";
import DemandMarketingMobile from "./DemandMarketing/DemandMarketingMobile";

const LandingPage = () => {
  return (
    <div>
      <Breakpoint large up>
        <Navbar />
        <Header />
        <Companies />
        <DemandMarketing />
        <Tutorial />
        <FeedBacks />
        <WorkShowcase />
        <Footer />
        <ScrollToTop />
      </Breakpoint>
      <Breakpoint small down>
        <div className="mobile-landingpage-bg">
          <NavbarMobile />
          <HeaderMobile />
          <CompainesMobile />
          <DemandMarketingMobile />
        </div>
      </Breakpoint>
    </div>
  );
};

export default LandingPage;
