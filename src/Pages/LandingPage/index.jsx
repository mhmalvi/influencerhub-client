import React from "react";
import Companies from "./Companies";
import DemandMarketing from "./DemandMarketing";
import Header from "./Header";
import Tutorial from "./Tutorial";
import FeedBacks from "./FeedBacks";
import WorkShowcase from "./WorkShowcase";
import Navbar from "../../Components/Shared/Navbar";
import Footer from "../../Components/Shared/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Companies />
      <DemandMarketing />
      <Tutorial />
      <FeedBacks />
      <WorkShowcase />
      <Footer />
    </div>
  );
};

export default LandingPage;
