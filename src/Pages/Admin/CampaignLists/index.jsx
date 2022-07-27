import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../Components/Shared/Icons";
import Navbar from "../../../Components/Shared/Navbar";

const CampaignLists = () => {
  const [activeSection, setactiveSection] = useState("");

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a className="text-black hover:text-black" href="/create-campaign">
              Live
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a className="text-black hover:text-black" href="/create-campaign">
              Pending
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="mx-28  py-4">
        <div className="flex justify-between items-center px-6 pb-2 pt-4 border-t border-l border-r">
          <div className="flex">
            <div>
              <p
                className={`text-base font-semibold font-mulish leading-6 mr-7.5 cursor-pointer mb-0 ${
                  activeSection === "bidding" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setactiveSection("bidding")}
              >
                Biding
              </p>
            </div>
            <div>
              <p
                className={`text-base font-semibold font-mulish leading-6 mr-7.5 cursor-pointer mb-0 ${
                  activeSection === "working" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setactiveSection("working")}
              >
                Working
              </p>
            </div>
            <div>
              <p
                className={`text-base font-semibold font-mulish leading-6 mr-7.5 cursor-pointer mb-0 ${
                  activeSection === "complete" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setactiveSection("complete")}
              >
                Complete
              </p>
            </div>
            <div>
              <p
                className={`text-base font-semibold font-mulish leading-6 cursor-pointer mb-0 ${
                  activeSection === "cancel" ? "text-blue-500" : "text-black"
                }`}
                onClick={() => setactiveSection("cancel")}
              >
                Cancel
              </p>
            </div>
            <div>
              <Dropdown
                className="bg-dark-blue bg-opacity-75 py-2 rounded-xl ml-16"
                overlay={menu}
                trigger={["click"]}
              >
                <a
                  className="text-black hover:text-black"
                  href="/"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space className="flex justify-between items-center px-4 pb-2 rounded-br-xl">
                    <p className=" my-0 mr-2 text-base font-light font-mulish leading-6 text-white">
                      Draft
                    </p>
                    <Icons.DownArror className="text-white" />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="font-mulish">
            <form action="" className="flex justify-start items-center">
              <div className="w-56 px-4 py-1.5 border border-gray-400 rounded-3xl">
                <input
                  className="outline-none text-center placeholder-black placeholder-opacity-20"
                  type="text"
                  placeholder="Campaign Code"
                />
              </div>
              <button
                className="py-2.5 px-3.5 font-light rounded-2xl bg-dark-blue text-white ml-2"
                type="submit"
              >
                <Icons.Send />
              </button>
            </form>
          </div>
        </div>
        <div>
          <table className="min-w-full font-mulish">
            <tr className="font-normal text-base leading-6 border-2">
              <td className="pl-6 pr-10 py-2.5 font-semibold text-base leading-6 font-mulish">
                Code
              </td>
              <td className="w-64 py-2.5 font-semibold text-base leading-6 font-mulish">
                Biding date
              </td>
              <td className="w-64 py-2.5 whitespace-nowrap font-semibold text-base leading-6 font-mulish">
                Camping name
              </td>
              <td className="w-48 py-2.5 whitespace-nowrap font-semibold text-base leading-6 font-mulish">
                Total biding
              </td>
              <td className="pr-20 py-2.5 whitespace-nowrap font-semibold text-base leading-6 font-mulish">
                Draft
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer border">
              <td className="py-2 pr-10 rounded-l-full">
                <div className="pl-6">
                  <p className="text-blue-500">32467566</p>
                </div>
              </td>
              <td>
                <p className="whitespace-nowrap">11:20 05.01.2019</p>
              </td>
              <td>
                <div className="w-38 truncate">
                  Smile camping Flow Smile camping Flow......
                </div>
              </td>
              <td className="w-12 pr-10">
                <div>15</div>
              </td>
              <td>
                <div>
                  <button
                    className="w-16 py-1 text-white bg-opacity-25 my-2 font-light text-xs leading-5 font-mulish"
                    style={{
                      background: "#0074D1",
                      borderRadius: "12.5px",
                    }}
                  >
                    Live
                  </button>
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer border">
              <td className="py-2 pr-10 rounded-l-full">
                <div className="pl-6">
                  <p className="text-blue-500">32467566</p>
                </div>
              </td>
              <td>
                <p>11:20 05.01.2019</p>
              </td>
              <td>
                <div className="w-38 truncate">
                  Smile camping Flow Smile camping Flow......
                </div>
              </td>
              <td className="w-12 pr-10">
                <div>15</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div>
                  <button
                    className="w-16 py-1 text-white bg-opacity-25 my-2 font-light text-xs leading-5 font-mulish"
                    style={{
                      background: "#D100D1",
                      borderRadius: "12.5px",
                    }}
                  >
                    Draft
                  </button>
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer border">
              <td className="py-2 pr-10 rounded-l-full">
                <div className="pl-6">
                  <p className="text-blue-500">32467566</p>
                </div>
              </td>
              <td>
                <p>11:20 05.01.2019</p>
              </td>
              <td>
                <div className="w-38 truncate">
                  Smile camping Flow Smile camping Flow......
                </div>
              </td>
              <td className="w-12 pr-10">
                <div>15</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div>
                  <button
                    className="w-16 py-1 text-white bg-opacity-25 my-2 font-light text-xs leading-5 font-mulish"
                    style={{
                      background: "#0074D1",
                      borderRadius: "12.5px",
                    }}
                  >
                    Live
                  </button>
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer border">
              <td className="py-2 pr-10 rounded-l-full">
                <div className="pl-6">
                  <p className="text-blue-500">32467566</p>
                </div>
              </td>
              <td>
                <p>11:20 05.01.2019</p>
              </td>
              <td>
                <div className="w-38 truncate">
                  Smile camping Flow Smile camping Flow......
                </div>
              </td>
              <td className="w-12 pr-10">
                <div>15</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div>
                  <button
                    className="w-16 py-1 text-white bg-opacity-25 my-2 font-light text-xs leading-5 font-mulish"
                    style={{
                      background: "#0074D1",
                      borderRadius: "12.5px",
                    }}
                  >
                    Live
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampaignLists;
