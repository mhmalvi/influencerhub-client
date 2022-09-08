import React from "react";
import { Breakpoint } from "react-socks";
import Footer from "../../Components/Shared/Footer";
import FooterMobile from "../../Components/Shared/Footer/FooterMobile";
import Navbar from "../../Components/Shared/Navbar";
import NavbarMobile from "../../Components/Shared/Navbar/NavbarMobile";
import ScrollToTop from "../../Components/Shared/ScrollToTop";
import { themeSelector } from "../../Components/utils/selector";
import CampaignSuccesses from "./CampaignSuccesses";
import Companies from "./Companies";
import CompainesMobile from "./Companies/CompainesMobile";
import DemandMarketing from "./DemandMarketing";
import DemandMarketingMobile from "./DemandMarketing/DemandMarketingMobile";
import FeedBacks from "./FeedBacks";
import FeedBackMobile from "./FeedBacks/FeedBackMobile";
import HeaderMobile from "./Header/HeaderMobile";
import NewHeader from "./Header/NewHeader";
import Tutorial from "./Tutorial";
import TutorialMobile from "./Tutorial/TutorialMobile";
import WorkShowcase from "./WorkShowcase";
import WorkShowcaseMobile from "./WorkShowcase/WorkShowcaseMobile";

const LandingPage = () => {
  return (
    <div className={`relative ${themeSelector}-bg`}>
      <Breakpoint large up>
        <div
          style={{
            zIndex: 99999,
          }}
        >
          <div className="header-bg">
            <Navbar />
            <NewHeader />
            {/* <Header /> */}
            <Companies />
          </div>
          <CampaignSuccesses />
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
