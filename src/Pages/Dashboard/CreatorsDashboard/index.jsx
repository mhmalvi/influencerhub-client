import React, { useState } from "react";
import dashboardBg from "../../../assets/Images/dashboard-bg.jpg";
import dashboardImg from "../../../assets/Images/dashboard-image.jpg";
import Icons from "../../../Components/Shared/Icons";
import NavbarSm from "../../../Components/Shared/Navbar/NavbarSm";
import Campaign from "./Campaign";
import campaignData from "./CmapignData.json";

const CreatorsDashboard = () => {
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
            <div className="md:-ml-56 xl:-ml-44 2xl:-ml-44 mt-36">
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
                Beat to join the campign
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
                    <Campaign campaign={campaign} />
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

export default CreatorsDashboard;
