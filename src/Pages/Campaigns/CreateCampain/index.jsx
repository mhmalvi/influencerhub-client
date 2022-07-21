import React, { useState } from "react";
import Navbar from "../../../Components/Shared/Navbar";
import CampaignInfo from "./CampaignInfo";
import SocialInfo from "./SocialInfo";

const CreateCampain = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="w-full px-46 mt-24 flex items-start">
        <div className="w-68 flex flex-col items-start">
          <div>
            <h1 className="font-abhaya text-4.5xl font-bold whitespace-nowrap leading-12 mb-2">
              Creat camping
            </h1>
            <p className="font-mulish font-light text-base leading-5 text-light-gray pr-2">
              Fill in the camping data. It will take a couple of minutes. All
              you need information submit.
            </p>
          </div>
          <div className="flex items-center -ml-3">
            <div className="flex flex-col justify-between items-center">
              <div
                className={`w-3.5 h-3.5 border mb-4 ${
                  activeSection === 0
                    ? "bg-blue-600"
                    : "border-gray-400 bg-white"
                } rounded-full cursor-pointer`}
                onClick={() => setActiveSection(0)}
              ></div>
              <div>
                <hr
                  className="inline-block bg-gray-400 w-10 rotate-90"
                  style={{ height: "1.2px" }}
                />
              </div>
              <div
                className={`w-3.5 h-3.5 border ${
                  activeSection === 1
                    ? "bg-blue-500"
                    : "border-gray-400 bg-white"
                } rounded-full mt-6 mb-4 cursor-pointer`}
                onClick={() => setActiveSection(1)}
              ></div>
              <div>
                <hr
                  className="inline-block bg-gray-400 w-10 rotate-90"
                  style={{ height: "1.2px" }}
                />
              </div>
              <div
                className={`w-3.5 h-3.5 border ${
                  activeSection === 2
                    ? "bg-blue-500"
                    : "border-gray-400 bg-white"
                } rounded-full mt-6 cursor-pointer`}
                onClick={() => setActiveSection(2)}
              ></div>
            </div>
            <div className="w-58">
              <img
                className="h-74 mt-4 mb-8"
                src={`${
                  activeSection === 0
                    ? "https://i.ibb.co/PjXk05V/unsplash-q19-HE3i7j-JI.jpg"
                    : "https://i.ibb.co/CPQ2404/unsplash-Nc9-U-m-Ykbx-A.jpg"
                }`}
                alt=""
              />
            </div>
          </div>
          <p className="font-mulish font-light text-base leading-5 text-light-gray pr-2">
            Fill in the camping data. It will take a couple of minutes. All you
            need information submit.
          </p>
        </div>

        {/* Form */}
        {activeSection === 0 ? <CampaignInfo /> : <SocialInfo />}
      </div>
    </div>
  );
};

export default CreateCampain;
