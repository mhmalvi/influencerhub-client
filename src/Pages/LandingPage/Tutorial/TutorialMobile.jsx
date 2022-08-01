import React from "react";

const TutorialMobile = () => {
  return (
    <div>
      <div className="w-67 mx-auto">
        <h1 className="text-2.5xl font-bold leading-7 text-center font-abhaya">
          How to work on platforms get camping
        </h1>
      </div>
      <div className="w-82 mx-auto mt-6">
        <img
          className="w-full rounded-2xl"
          src="https://i.ibb.co/tbwbBJY/Rectangle-3.jpg"
          alt=""
        />
        <div className="mt-5 flex flex-col justify-center items-center">
          <p className="px-2 font-light text-xs font-mulish leading-5 text-center">
            St. Augustine College Now Offers A Fully Online English Language
            Program.
          </p>
          <button className="text-base font-noraml font-mulish leading-6 px-3 py-2.5 rounded-full cursor-pointer  border-black border mt-2.5">
            Creat Campaign
          </button>
        </div>
      </div>

      <div className="w-82 mx-auto mt-14 pt-1">
        <h1 className="text-2.5xl font-bold leading-7 text-center font-abhaya">
          Studio
        </h1>
        <div>
          <img src="https://i.ibb.co/8rwSwCN/Rectangle-4043.jpg" alt="" />
        </div>
        <div className="mt-5 flex flex-col justify-center items-center">
          <p className="px-2 font-light text-xs font-mulish leading-5 text-center">
            St. Augustine College Now Offers A Fully Online English Language
            Program.
          </p>
          <button className="text-base font-noraml font-mulish leading-6 px-8 py-2.5 rounded-full cursor-pointer  border-black border mt-2.5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialMobile;
