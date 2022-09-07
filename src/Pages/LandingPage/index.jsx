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
import TutorialMobile from "./Tutorial/TutorialMobile";
import FeedBackMobile from "./FeedBacks/FeedBackMobile";
import WorkShowcaseMobile from "./WorkShowcase/WorkShowcaseMobile";
import FooterMobile from "../../Components/Shared/Footer/FooterMobile";
import headerBg from "../../assets/Images/landing_header_bg.png";

const LandingPage = () => {
  return (
    <div className="relative">
      <Breakpoint large up>
        <div
          style={{
            zIndex: 99999,
          }}
        >
          <div className="header-bg">
            <Navbar />
            <Header />
          </div>
          <Companies />
          <DemandMarketing />
          <Tutorial />
          <FeedBacks />
          <WorkShowcase />
          <Footer />
          <ScrollToTop />
        </div>
        {/* <img
          className="w-full absolute top-0"
          style={{
            zIndex: 1,
          }}
          src={headerBg}
          alt=""
        /> */}
      </Breakpoint>
      <Breakpoint small down>
        <div className="mobile-landingpage-bg">
          <NavbarMobile />
          <HeaderMobile />
          <CompainesMobile />
          <DemandMarketingMobile />
          <TutorialMobile />
          <FeedBackMobile />
          <WorkShowcaseMobile />
          <FooterMobile />
        </div>
      </Breakpoint>
    </div>
  );
};

export default LandingPage;
