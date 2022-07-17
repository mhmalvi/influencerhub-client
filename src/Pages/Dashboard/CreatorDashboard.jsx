import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboardBg from "../../assets/Images/dashboard-bg.jpg";
import dashboardImg from "../../assets/Images/dashboard-image.jpg";
import Icons from "../../Components/Shared/Icons";
import NavbarSm from "../../Components/Shared/Navbar/NavbarSm";
import campaignData from "./CmapignData.json";

const CreatorDashboard = () => {
  const [active, setActive] = useState("Biding");
  const [campaignType, setCampaignType] = useState(0);

  const types = [
    { id: 0, title: "Newest" },
    { id: 1, title: "Deadline" },
  ];

  return (
    <div className="bg-gray-50">
      <div className="page-width h-screen mx-auto">
        <div className="flex">
          <div className="flex relative top-0 left-0">
            <div className="w-86">
              <img className="z-0 h-screen" src={dashboardBg} alt="" />
            </div>
            <div className="md:-ml-60 lg:-ml-44 mt-36">
              <div>
                <img className="rounded-lg mb-16" src={dashboardImg} alt="" />
              </div>
              <div className="font-mulish">
                <div
                  className={`flex w-48 py-2 rounded-md my-2 cursor-pointer ${
                    active === "Biding"
                      ? "bg-gradient-to-r from-white text-black"
                      : "text-white"
                  }`}
                  onClick={() => setActive("Biding")}
                >
                  <div className="pl-8">
                    <span className="text-base font-light">Biding</span>
                    <span className="ml-2 text-xs text-blue-600 font-light">
                      6
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-center w-48 py-2 rounded-md my-2 cursor-pointer ${
                    active === "Working"
                      ? "bg-gradient-to-r from-white text-black"
                      : "text-white"
                  }`}
                  onClick={() => setActive("Working")}
                >
                  <div className="pl-8">
                    <span className="text-base font-light">Working</span>
                    <span className="ml-2 text-xs text-blue-600 font-light">
                      2
                    </span>
                  </div>
                </div>
                <div
                  className={`flex items-center w-48 py-2 rounded-md my-2 cursor-pointer ${
                    active === "Complete"
                      ? "bg-gradient-to-r from-white text-black"
                      : "text-white"
                  }`}
                  onClick={() => setActive("Complete")}
                >
                  <div className="pl-8">
                    <span className="text-base font-light">Complete</span>
                    <span className="ml-2 text-xs text-blue-600 font-light">
                      6
                    </span>
                  </div>
                </div>
                <div
                  className={`flex items-center w-48 py-2 rounded-md my-2 cursor-pointer ${
                    active === "Cancel"
                      ? "bg-gradient-to-r from-white text-black"
                      : "text-white"
                  }`}
                  onClick={() => setActive("Cancel")}
                >
                  <div className="pl-8">
                    <span className="text-base font-light">Cancel</span>
                    <span className="ml-2 text-xs text-blue-600 font-light">
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <NavbarSm loggedin={true} />
            <div className="ml-6 mt-12">
              <h1 className="text-4.5xl font-abhaya font-bold text-gray-700 leading-12 m-0">
                Beat to join the camping
              </h1>
              <p className="text-sm font-light leading-5 text-gray-400">
                Filter Get the best camping
              </p>
              <div className="w-full flex justify-between items-end pr-4">
                <div className="text-sm flex justify-start items-center">
                  {types.map((type) => (
                    <div
                      key={type.title}
                      className={`cursor-pointer text-sm font-mulish leading-5 mr-2 ${
                        campaignType === type.id ? "font-normal" : "font-light"
                      }`}
                      onClick={() => setCampaignType(type.id)}
                    >
                      {type.title}
                    </div>
                  ))}
                </div>
                <div className="font-mulish">
                  <form action="" className="flex justify-start items-center">
                    <div className="w-60 px-2.5 py-3 border border-gray-400 rounded-2xl flex justify-center items-center">
                      <div className="w-14 mr-3">
                        <Icons.Search />
                      </div>
                      <input
                        className="outline-none bg-gray-50"
                        type="text"
                        placeholder="Search Campaigns"
                      />
                    </div>
                    <button
                      className="py-3 px-5 font-light rounded-2xl bg-dark-blue text-white ml-2"
                      type="submit"
                    >
                      GO
                    </button>
                  </form>
                </div>
              </div>
              <div>
                <div className="creator-campaigns scroll-smooth grid grid-cols-3 gap-6 justify-between items-center mt-10 overflow-y-auto">
                  {campaignData.map((campaign) => (
                    <div className="w-60 rounded-md bg-white shadow-sm">
                      <img
                        className="w-full rounded-tl-md rounded-tr-md"
                        src={campaign.banner}
                        alt=""
                      />
                      <div className="px-3 py-2">
                        <h5 className="text-sm font-light text-blue-500">
                          {campaign.type}
                        </h5>
                        <p>{campaign.title}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-xs">
                            <div className="flex items-center mr-3 leading-5">
                              <Icons.People className="text-gray-400 mr-1" />
                              <span>30</span>
                            </div>
                            <div className="flex items-center leading-5">
                              <Icons.Clock className="text-gray-400 mr-1" />
                              <span>3</span>
                              <span className="text-gray-400 ml-1">Days</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Link to={"/"}>
                              <Icons.Tiktok className="w-5 text-gray-400" />
                            </Link>
                            <Link to={"/"}>
                              <Icons.Instagram className="w-4 text-gray-400 mx-1" />
                            </Link>
                            <Link to={"/"}>
                              <Icons.OutlineFacebook className="w-4 text-gray-500 ml-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
