import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";

const CompletedCampaigns = () => {
  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="px-24">
        <div>
          <div to={"/campaign/1"} className="flex items-center mb-5">
            <Link to={"/campaign/1"} className="mr-6">
              <img
                className="w-60 h-42 rounded-2xl"
                src="https://i.ibb.co/ynbFR7h/Rectangle-6576.jpg"
                alt=""
              />
            </Link>
            <div className="font-mulish flex">
              <Link to={"/campaign/1"}>
                <div className="w-8/12 text-black hover:text-black mb-6">
                  <h3 className="font-abhaya font-bold text-4.5xl leading-12 mb-0">
                    he popularity of this megastar fashion house is evident
                  </h3>
                  <p className="text-xs font-light mb-1">
                    Please Share your Past Work of home Page Design. Must Share
                    some Figma Projects Links.
                  </p>
                </div>
                <div>
                  <Link
                    className="text-sm font-normal leading-5 font-mulish text-black hover:text-black mt-2 mr-4"
                    to={"/"}
                  >
                    Facebook
                  </Link>
                  <Link
                    className="text-sm font-light leading-4 font-mulish text-black text-opacity-50 hover:text-black mt-2 mr-4"
                    to={"/"}
                  >
                    Instagram
                  </Link>
                  <Link
                    className="text-sm font-light leading-4 font-mulish text-black text-opacity-50 hover:text-black mt-2 mr-4"
                    to={"/"}
                  >
                    Tik Tok
                  </Link>
                  <Link
                    className="text-sm font-light leading-4 font-mulish text-black text-opacity-50 hover:text-black mt-2"
                    to={"/"}
                  >
                    Youtube
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-4 gap-8 overflow-y-scroll mt-16"
          style={{
            height: `calc(100vh - 400px)`,
          }}
        >
          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/mFTvCrp/Picture-1.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>

          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/3kDrqXt/Picture.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>

          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/ynbFR7h/Rectangle-6576.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>

          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/hK91Tgp/Share-Image.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>
          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/hK91Tgp/Share-Image.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>
          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/hK91Tgp/Share-Image.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>
          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/hK91Tgp/Share-Image.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>
          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/hK91Tgp/Share-Image.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>

          <div className="w-59 hover:shadow cursor-pointer rounded-xl">
            <img
              className="w-full h-52"
              src="https://i.ibb.co/ynbFR7h/Rectangle-6576.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center p-4">
              <h4 className="font-semibold text-base leading-6 font-mulish">
                Atika
              </h4>
              <Link
                className="text-black text-opacity-50 hover:text-blue-500 text-xs leading-5 font-mulish font-light"
                to={"/completed-campaigns"}
              >
                instagram/pranto.tepantorar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedCampaigns;
