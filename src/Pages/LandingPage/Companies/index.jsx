import React from "react";
import googleLogo from "../../../assets/Images/google.png";
import netflixLogo from "../../../assets/Images/netflix.png";
import airbnbLogo from "../../../assets/Images/airbnb.png";
import amazonLogo from "../../../assets/Images/amazon.png";
import facebookLogo from "../../../assets/Images/facebook.png";
import grabLogo from "../../../assets/Images/grab-logo.png";

const Companies = () => {
  const companies = [
    googleLogo,
    netflixLogo,
    airbnbLogo,
    amazonLogo,
    facebookLogo,
    grabLogo,
  ];
  return (
    <div className="page-width mx-auto pt-32 pb-20">
      <div className="w-8/12 mx-auto">
        <div>
          <h1 className="text-heading font-bold font-abhaya text-center mb-12 leading-12">
            Trusted by 5,000+ Companies Worldwide
          </h1>
        </div>
        <div className="flex justify-center items-center">
          {companies.map((company) => (
            <img className="mx-10" src={company} alt="" srcset="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
