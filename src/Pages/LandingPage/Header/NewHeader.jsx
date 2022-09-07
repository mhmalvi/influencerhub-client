import React from "react";
import playbackVideo from "../../../assets/Images/playback.mp4";
import playbackGif from "../../../assets/Images/playback.gif";

const NewHeader = () => {
  return (
    <div className="relative flex justify-end items-center pt-36 2xl:pt-48 pb-56">
      {/* Content */}
      <div className="header-width mx-auto pb-20">
        <div className="w-6/12 mr-auto">
          <div>
            <h1 className="text-5xl font-bold font-abhaya leading-12 header-title">
              Brand Promoter and Creator are both in the same place
            </h1>
          </div>
          <div>
            <h4 className="font-mulish font-light leading-6 text-base pr-16 mt-5">
              Warning Importing demo data will replace your current theme
              options, content and widget settings. Importing data is
              recommended on fresh installs only.
            </h4>
          </div>
          <div className="mt-9 font-mulish">
            <button className="text-base font-noraml font-mulish px-8 py-2.5 rounded-full cursor-pointer text-blue-600  border-blue-600 hover:bg-blue-600 hover:text-white hover:transition-colors hover:delay-150 border mr-6">
              Brand & Agencies
            </button>
            <button className="text-base font-noraml font-mulish px-14 py-2.5 rounded-full cursor-pointer text-pink-600 border-pink-600 border">
              Creator
            </button>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      {/* Banner */}
      <div className="absolute right-0 top-0 rounded-tl-3xl rounded-bl-3xl">
        {/* <div className="header-banner rounded-tl-3xl rounded-bl-3xl">
          <video
            className="min-h-full min-w-full"
            src={playbackVideo}
            autoPlay={true}
            loop
            controls
          ></video>
        </div> */}
        <img
          // className="header-banner rounded-tl-3xl rounded-bl-3xl"
          className="rounded-tl-3xl rounded-bl-3xl"
          style={{
            width: "40rem",
          }}
          src={playbackGif}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default NewHeader;
