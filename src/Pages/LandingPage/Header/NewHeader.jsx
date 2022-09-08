import React from "react";
import { themeSelector } from "../../../Components/utils/selector";
import header_img from "../../../assets/Images/header_image.png";

const NewHeader = () => {
  return (
    <div className="page-width mx-auto pb-20 px-28">
      {/* Content */}
      <div className="flex justify-between">
        <div className="w-6/12 pt-28">
          <div>
            <h1 className="text-6xl font-bold font-abhaya leading-12 header-title">
              Brand Promoter and Creator are both in the same place
            </h1>
          </div>
          <div>
            <h4
              className={`font-mulish font-light leading-5 text-base w-9/12 mt-5 ${themeSelector}-text`}
            >
              the leading NFT Marketplace on Ethereum Home to the next
              generation of digital creators.
            </h4>
          </div>
          <div className="mt-9 font-mulish">
            <button
              className={`btn-grad text-white hover:text-white px-8 py-3 text-lg rounded-full cursor-pointer font-bold font-mulish mr-5`}
            >
              Brand & Agencies
            </button>
            <button
              className={`text-base font-noraml font-mulish px-14 py-2.5 rounded-full cursor-pointer ${themeSelector}-text border border-blue-500`}
            >
              Creator
            </button>
          </div>
          <div className="flex items-center mt-18">
            <div>
              <p className="text-3.5xl leading-10 font-medium font-clash mb-3">
                500+
              </p>
              <p className="font-mulish font-bold text-lg leading-7">Camping</p>
            </div>
            <div className="mx-12 px-0.5">
              <p className="text-3.5xl leading-10 font-medium font-clash mb-3">
                5678+
              </p>
              <p className="font-mulish font-bold text-lg leading-7">Creator</p>
            </div>
            <div>
              <p className="text-3.5xl leading-10 font-medium font-clash mb-3">
                500+
              </p>
              <p className="font-mulish font-bold text-lg leading-7">
                Brand & Agencie
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-6/12 -mt-10 -ml-24">
          <img
            className="rounded-tl-3xl rounded-bl-3xl"
            style={{
              width: "100%",
            }}
            src={header_img}
            alt="Banner"
          />
          <div className="absolute top-0 min-w-full min-h-full"></div>
        </div>
      </div>

      {/* Banner */}

      {/* <div className="rounded-tl-3xl rounded-bl-3xl"> */}
      {/* <div className="header-banner rounded-tl-3xl rounded-bl-3xl">
          <video
            className="min-h-full min-w-full"
            src={playbackVideo}
            autoPlay={true}
            loop
            controls
          ></video>
        </div> */}
      {/* <img */}
      {/* // className="header-banner rounded-tl-3xl rounded-bl-3xl" */}
      {/* className="rounded-tl-3xl rounded-bl-3xl"
          style={{
            width: "40rem",
          }}
          src={playbackGif}
          alt="Banner"
        /> */}
      {/* </div> */}
    </div>
  );
};

export default NewHeader;
