import React from "react";
import googleLogo from "../../../assets/Images/Google-colored.png";
import uberLogo from "../../../assets/Images/Uber-colored.png";
import airbnbLogo from "../../../assets/Images/Airbnb-colored.png";
import amazonLogo from "../../../assets/Images/Amazon-colored.png";

const Companies = () => {
  const companies = [googleLogo, uberLogo, airbnbLogo, amazonLogo];
  return (
    <div className="page-width mx-auto pt-60 pb-20">
      <div className="w-8/12 mx-auto">
        <div className="flex justify-center items-center">
          {companies.map((company) => (
            <img className="mx-10" src={company} alt="" srcSet="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
