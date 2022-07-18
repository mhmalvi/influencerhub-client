import { Upload } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../Components/Shared/Icons";
import NavbarSm from "../../../Components/Shared/Navbar/NavbarSm";
import Creators from "./Creators";
import Message from "./Message";
import Replay from "./Replay";

const WorkingCampaign = () => {
  const [fileList, setFileList] = useState([]);
  const [ifBrand, setIfBrand] = useState(true);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    newFileList = fileList.slice(-2);

    newFileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }

      return file;
    });
    setFileList(newFileList);
  };

  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: true,
  };

  return (
    <div className="page-width mx-auto h-screen">
      <div className="float-right">
        <NavbarSm loggedin={true} />
      </div>
      <div className="w-10/12 px-4 mx-auto">
        <div className="w-full flex items-center pt-6">
          <img
            className="rounded-md"
            src="https://i.ibb.co/N2v0SML/Image.jpg"
            alt=""
          />
          <div className="w-full flex justify-between">
            <div className="px-3 py-2 mr-28 ml-4">
              <h5 className="text-base font-light text-blue-600">Giveaway</h5>
              <h1 className="text-2xl font-normal leading-8 font-mulish">
                He popularity of this megastar fashion house is evident
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center mb-6">
                <Link to={"/"}>
                  <Icons.Tiktok className="w-10 text-red-500" />
                </Link>
                <Link to={"/"}>
                  <Icons.Instagram className="w-8 text-sea-green mx-1" />
                </Link>
                <Link to={"/"}>
                  <Icons.OutlineFacebook className="w-8 text-blue-800 ml-0.5" />
                </Link>
              </div>

              <div className="flex items-center text-xs">
                <div className="flex items-center mr-8 leading-5">
                  <Icons.PeopleFilled className="w-4 text-black mr-2" />
                  <span className="text-xs font-light">30</span>
                </div>
                <div className="flex items-center leading-5">
                  <Icons.Clock className="text-black mr-1" />
                  <span>3</span>
                  <span className="font-light ml-1">Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          {/* Creators */}
          <div className="w-60 h-100 rounded-xl shadow-md">
            <div>
              <h2 className="text-center text-base font-semibold font-mulish leading-6 py-2">
                Creators
              </h2>
              <Icons.BorderStock className="w-full" />
            </div>
            <div className="mt-2 overflow-y-auto h-92">
              <Creators />
              <Creators />
              <Creators />
              <Creators />
              <Creators />
              <Creators />
              <Creators />
              <Creators />
            </div>
          </div>
          {/* Conversations */}
          <div className="w-86 h-100 rounded-xl shadow-md">
            <div>
              <h2 className="text-center text-base font-semibold font-mulish leading-6 py-2">
                Massage
              </h2>
              <Icons.BorderStock className="w-86" />
            </div>
            <div className="mt-2 h-76 overflow-y-auto">
              <Message />
              <Replay />
            </div>
            <div className="font-mulish flex justify-end items-end mt-auto">
              <form
                action=""
                className="w-79 p-2 flex justify-between items-center bg-dark-blue rounded-xl mx-auto mt-auto"
              >
                <input
                  className="outline-none pl-4 bg-transparent text-white font-extralight"
                  type="text"
                  placeholder="Write a message..."
                />
                <button
                  className="py-1.5 px-4 text-xs font-light rounded-lg bg-blue-600 text-white ml-2"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="w-86 h-100 rounded-xl shadow-md">
            <div>
              <h2 className="text-center text-base font-semibold font-mulish leading-6 py-2">
                Work Progressing
              </h2>
              <Icons.BorderStock className="w-86" />
            </div>

            <div className={`mt-2 ${ifBrand && "h-68"} h-76 overflow-y-auto`}>
              <div className="flex w-11/12 mr-auto px-4 mb-2">
                <img
                  className="w-6 h-6 mx-2 rounded-full"
                  src="https://i.ibb.co/Z18pJLT/Ellipse-114.png"
                  alt=""
                />
                <div className="text-xs w-9/12">
                  <img
                    src="https://i.ibb.co/Y7G832J/Rectangle-6572.png"
                    alt=""
                  />
                  <span className="text-gray-400">10:15 pm</span>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              {ifBrand ? (
                <div>
                  <button
                    className="w-60 py-3 text-xs font-light rounded-xl bg-blue-600 text-white flex justify-center items-center mb-2"
                    type="submit"
                  >
                    Done
                  </button>
                  <button
                    className="w-60 py-3 text-xs font-light rounded-xl bg-dark-blue text-white flex justify-center items-center"
                    type="submit"
                  >
                    Recreate
                  </button>
                </div>
              ) : (
                <Upload {...props} fileList={fileList}>
                  <button
                    className="py-3 px-20 text-xs font-light rounded-xl bg-blue-600 text-white flex justify-center items-center"
                    type="submit"
                  >
                    <Icons.Clip className="mr-4" />
                    Attach file
                  </button>
                </Upload>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingCampaign;
