import React from "react";

const HeaderMobile = () => {
  return (
    <div>
      <div className="page-width-mobile mx-auto ">
        <h1 className="text-2.5xl font-abhaya leading-8 text-center font-bold mx-8 text-black">
          Brand Promoter and Creator are both in the same place
        </h1>
      </div>
      <div className="w-full pt-4">
        <img
          className="w-full"
          src="https://i.ibb.co/hdX6Lj7/video.png"
          alt=""
        />
      </div>
      <div className="mt-5 font-mulish flex flex-col justify-center items-center">
        <button className="text-base bg-dark-blue text-white font-noraml font-mulish leading-6 px-8 py-2.5 rounded-full cursor-pointer border-black border">
          Brand & Agencies
        </button>
        <button className="text-base font-noraml font-mulish leading-6 px-14 py-2.5 rounded-full cursor-pointer  border-black border mt-2.5">
          Creator
        </button>
      </div>
    </div>
  );
};

export default HeaderMobile;
