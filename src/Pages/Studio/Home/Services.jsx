import React from "react";
import contentSolution from "../../../assets/Images/content-solution.png";
import design from "../../../assets/Images/design.png";
import video from "../../../assets/Images/camera-reels.png";
import eventManagement from "../../../assets/Images/event-management.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="page-width mx-auto px-30 py-24 my-1 flex justify-between items-center">
      <div className="w-98 pr-10">
        <h1
          className="leading-10 font-abhaya font-bold"
          style={{ fontSize: "25px" }}
        >
          Get Results for Online Courses Uk. Find Quick Results from Multiple
          Sources. Quick Results - Search for Relevant Info & Results. Multiple
          sources combined
        </h1>
        <p className="text-base font-normal leading-6 font-mulish mt-5">
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </div>
      <div className="flex">
        <div className="mr-6 mt-12">
          <div
            className="w-59 bg-white py-7 rounded"
            style={{
              borderRadius: "40px",
              boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="w-23 h-23 content-solution flex justify-center items-center mx-auto">
              <img src={contentSolution} alt="" />
            </div>
            <h4 className="text-2xl font-normal leading-8 font-mulish text-center mx-18">
              Content Solution
            </h4>
            <p className="text-base font-light leading-5 font-mulish text-center mx-6 mb-0">
              We build readymade websites, mobile
            </p>
          </div>
          <Link
            className="w-59 bg-white py-7 rounded mt-6"
            style={{
              borderRadius: "40px",
              boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
            }}
            to={"studio/design-solution"}
          >
            <div className="w-23 h-23 design-solution flex justify-center items-center mx-auto">
              <img src={design} alt="" />
            </div>
            <h4 className="text-2xl font-normal leading-8 font-mulish text-center mx-18">
              Content Solution
            </h4>
            <p className="text-base font-light leading-5 font-mulish text-center mx-6 mb-0">
              We build readymade websites, mobile
            </p>
          </Link>
        </div>

        <div>
          <div
            className="w-59 bg-white py-7 rounded"
            style={{
              borderRadius: "40px",
              boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="w-23 h-23 video-solution flex justify-center items-center mx-auto">
              <img src={video} alt="" />
            </div>
            <h4 className="text-2xl font-normal leading-8 font-mulish text-center mx-18">
              Content Solution
            </h4>
            <p className="text-base font-light leading-5 font-mulish text-center mx-6 mb-0">
              We build readymade websites, mobile
            </p>
          </div>
          <div
            className="w-59 bg-white py-7 rounded mt-6"
            style={{
              borderRadius: "40px",
              boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="w-23 h-23 event-solution flex justify-center items-center mx-auto">
              <img src={eventManagement} alt="" />
            </div>
            <h4 className="text-2xl font-normal leading-8 font-mulish text-center mx-18">
              Content Solution
            </h4>
            <p className="text-base font-light leading-5 font-mulish text-center mx-6 mb-0">
              We build readymade websites, mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
