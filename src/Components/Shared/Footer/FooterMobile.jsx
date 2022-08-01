import React from "react";
import Icons from "../Icons";

const FooterMobile = () => {
  return (
    <div className="pt-20">
      <div>
        <h1 className="font-pacifico text-xl leading-5 font-normal tracking-wide text-center">
          LOGO
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10 mb-7.5">
        <Icons.FacebookMidium className="text-gray-400" />
        <Icons.TweeterMidium className="text-gray-400 ml-9 mr-8" />
        <Icons.InstagramMidium className="text-gray-400" />
      </div>
      <div className="w-48 mx-auto">
        <h4 className="text-base font-normal font-mulish leading-6 text-center">
          Adress
        </h4>
        <p
          className="font-normal leading-4 text-center font-mulish"
          style={{
            fontSize: "10px",
          }}
        >
          St. Augustine College Now Offers A Fully Online English Language
          Program. Learn more today. Learn English Today!
        </p>
      </div>
      <div className="mx-auto w-40 flex justify-center items-center mt-7.5 pb-24">
        <input
          className="w-full border-gray-300 border-b py-2 font-semibold leading-4 font-mulish"
          style={{ fontSize: "10px" }}
          type="email"
          name=""
          placeholder="ahsanhabib@gmail.com"
          id=""
        />
        <button className="p-1.5 bg-gray-300 rounded-tl-lg rounded-tr-xl text-xl font-bold">
          <Icons.RightArrow />
        </button>
      </div>
    </div>
  );
};

export default FooterMobile;
