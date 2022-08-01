import React from "react";

const WorkShowcaseMobile = () => {
  return (
    <div>
      <div className="w-82 mx-auto pt-14 mb-10">
        <h1 className="text-2.5xl font-bold leading-7 font-abhaya text-center mx-10">
          Work show influencers in instagram
        </h1>
        <p className="text-base font-normal font-mulish text-center leading-6 mx-2">
          St. Augustine College Now Offers A Fully Online English Language
          Program. Learn more today. Learn English Today!
        </p>
      </div>
      {/* <div className="w-full flex justify-center items-center"> */}
      <div className="w-full flex justify-center items-center">
        <div className="h-39.5 w-23 rounded-2xl bg-gray-300 mr-2.5">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/N7QxCvW/Rectangle-6678.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-end mb-2.5">
            <div className="h-32 w-38 rounded-2xl bg-gray-300">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/02GxP3W/Rectangle-6679.jpg"
                alt=""
              />
            </div>
            <div className="h-19.5 w-14.5 rounded-2xl bg-gray-300 ml-2.5">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/4jzcWyH/Rectangle-6680.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-24 w-24 rounded-2xl bg-gray-300 ">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/JpxQzW7/Rectangle-6684.jpg"
                alt=""
              />
            </div>
            <div
              className="rounded-xl bg-gray-300 mx-2.5"
              style={{
                width: "125.1px",
                height: "119.41px",
              }}
            >
              <img
                className="w-full h-full"
                src="https://i.ibb.co/Mhymxg7/Rectangle-6683.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="text-base font-noraml font-mulish leading-6 px-8 py-2.5 rounded-full cursor-pointer  border-black border mt-2.5">
          Join Creator
        </button>
      </div>
    </div>
  );
};

export default WorkShowcaseMobile;
