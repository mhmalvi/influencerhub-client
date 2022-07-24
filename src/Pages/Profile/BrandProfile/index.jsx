import React from "react";
import Navbar from "../../../Components/Shared/Navbar";
import FeaturedCampaign from "./FeaturedCampaign";

const BrandProfile = () => {
  return (
    <div className="page-width mx-auto font-mulish">
      <div className="ml-4">
        <Navbar loggedin={true} />
      </div>
      <div className="px-30 flex items-start">
        <div className="w-81 felx justify-center items-start shadow rounded-xl px-3.5 pb-10 pt-4">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-2xl h-25"
              src="https://i.ibb.co/k6kMjq0/Rectangle-6611.jpg"
              alt=""
            />
            <img
              className="w-19 h-19 rounded-full -mt-9"
              src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
              alt=""
            />
          </div>
          <div className="ml-8 mt-8">
            <div>
              <h2 className="font-mulish font-normal text-2xl leading-8">
                Youzarsif Brother
              </h2>
              <h4 className="font-mulish font-light text-base leading-5">
                Dhaka, Bangladesh
              </h4>
            </div>
            <div className="mt-4">
              <p className="font-mulish font-light text-xs leading-5 mb-1">
                Catagory
              </p>
              <div className="flex flex-wrap">
                <h4 className="font-mulish font-normal text-base leading-6 mr-2">
                  Food
                </h4>
                <h4 className="font-mulish font-normal text-base leading-6 mr-2">
                  Shop
                </h4>
                <h4 className="font-mulish font-normal text-base leading-6 mr-2">
                  Sports
                </h4>
                <h4 className="font-mulish font-normal text-base leading-6 mr-2">
                  Dance
                </h4>
                <h4 className="font-mulish font-normal text-base leading-6 mr-2">
                  Shop
                </h4>
                <h4 className="font-mulish font-normal text-base leading-6 mr-2">
                  Sports
                </h4>
                <h4 className="font-mulish font-normal text-base leading-6">
                  Dance
                </h4>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-mulish font-light text-xs leading-5 mb-1">
                Biography
              </p>
              <h4 className="font-mulish font-light text-sm leading-4 mr-10">
                Get the best Results for Learning Management System Uk. Find
                what you are looking for! 99% Match on Learning Management
                System Uk.
              </h4>
            </div>
          </div>
        </div>
        <div
          className="ml-6 grid grid-cols-2 gap-5 overflow-y-scroll"
          style={{
            height: "calc(100vh - 160px)",
          }}
        >
          <FeaturedCampaign />
          <FeaturedCampaign />
          <FeaturedCampaign />
          <FeaturedCampaign />
          <FeaturedCampaign />
          <FeaturedCampaign />
          <FeaturedCampaign />
          <FeaturedCampaign />
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;
