import React from "react";
import Navbar from "../../../Components/Shared/Navbar";
import CaseStudy from "./CaseStudy";
import Companies from "./Companies";
import Contact from "./Contact";
import Header from "./Header";
import Services from "./Services";

const Studio = () => {
  return (
    <div>
      <div>
        <Navbar loggedin={true} />
      </div>
      <Header />
      <Companies />
      <Services />
      <CaseStudy />
      <Contact />
    </div>
  );
};

export default Studio;
