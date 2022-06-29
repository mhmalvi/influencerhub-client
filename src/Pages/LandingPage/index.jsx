import React from "react";
import Companies from "./Companies";
import DemandMarketing from "./DemandMarketing";
import Header from "./Header";
import Tutorial from "./Tutorial";
import FeedBacks from "./FeedBacks";
import WorkShowcase from "./WorkShowcase";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Companies />
      <DemandMarketing />
      <Tutorial />
      <FeedBacks />
      <WorkShowcase />
    </div>
  );
};

export default LandingPage;
