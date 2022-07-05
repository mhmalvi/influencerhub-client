import React from "react";
import { Dropdown } from "antd";
import { Space, Menu } from "antd/lib";
import Icons from "../../Components/Shared/Icons";
import Navbar from "../../Components/Shared/Navbar";
import Campaingn from "./Campaingn";

const FindCampaigns = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              className="text-black hover:text-black"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a
              className="text-black hover:text-black"
              href="https://www.aliyun.com"
            >
              2nd menu item
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="max-h-screen">
      <Navbar loggedin={true} />
      <div className="page-width pl-27 pr-30 mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-52 h-32 bg-blue-200 rounded-2xl mr-3.5"></div>
          <div className="w-full">
            <h1 className="text-heading font-bold font-abhaya mb-1 leading-12">
              Beat to join the camping
            </h1>
            <p className="font-light text-gray-400 text-xs font-mulish">
              Filter Get the best camping
            </p>
            <div className="w-full flex justify-between items-end">
              <div className="text-sm flex justify-start items-center">
                <div className="cursor-pointer">All Courses</div>
                <div className="cursor-pointer font-light mx-2 font-mulish">
                  The Newest
                </div>
                <div className="cursor-pointer font-light mx-2 font-mulish">
                  Top Rated
                </div>
                <div className="cursor-pointer font-light mx-2 font-mulish">
                  Most Popular
                </div>
              </div>
              <div className="font-mulish">
                <form action="" className="flex justify-start items-center">
                  <div className="w-60 px-2.5 py-3 border border-gray-400 rounded-2xl flex justify-center items-center">
                    <div className="w-14 mr-3">
                      <Icons.Search />
                    </div>
                    <input
                      className="outline-none"
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
          </div>
        </div>
        <div className="font-mulish mt-6 flex justify-between items-start">
          <div className="w-42 px-3 py-7 border rounded-xl">
            <div className="py-2">
              <p className="text-xs font-light">Creator in</p>
              <div>
                <Dropdown className="py-2" overlay={menu} trigger={["click"]}>
                  <a
                    className="text-black hover:text-black"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space className="w-38 flex justify-between items-center px-4 pb-2 rounded-br-xl border-gray-200 border-b border-r">
                      <p className="m-0 font-light text-sm">Influencer</p>
                      <Icons.DownArror className="ml-auto" />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>

            <div className="py-2">
              <p className="text-xs font-light">Platform</p>
              <div>
                <Dropdown className="py-2" overlay={menu} trigger={["click"]}>
                  <a
                    className="text-black hover:text-black"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space className="w-38 flex justify-between items-center px-4 pb-2 rounded-br-xl border-gray-200 border-b border-r">
                      <p className="m-0 font-light text-sm">Youtube</p>
                      <Icons.DownArror className="ml-auto" />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>

            <div className="py-2">
              <p className="text-xs font-light">Categories</p>
              <div>
                <Dropdown className="py-2" overlay={menu} trigger={["click"]}>
                  <a
                    className="text-black hover:text-black"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space className="w-38 flex justify-between items-center px-4 pb-2 rounded-br-xl border-gray-200 border-b border-r">
                      <p className="m-0 font-light text-sm">Fashion</p>
                      <Icons.DownArror className="ml-auto" />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>

            <div className="py-2">
              <p className="text-xs font-light">Campaign on</p>
              <div>
                <Dropdown className="py-2" overlay={menu} trigger={["click"]}>
                  <a
                    className="text-black hover:text-black"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space className="w-38 flex justify-between items-center px-4 pb-2 rounded-br-xl border-gray-200 border-b border-r">
                      <p className="m-0 font-light text-sm">Image</p>
                      <Icons.DownArror className="ml-auto" />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>

            <div>
              <p className="m-0 font-light text-sm">Prize money</p>
              <div>
                <input
                  className="w-17 pl-5 pr-1 py-1.5 mr-2 outline-none rounded-br-xl border-b border-r"
                  type="text"
                  placeholder="Min"
                />
                <input
                  className="w-17 pl-5 pr-1 py-1.5 outline-none rounded-br-xl border-b border-r"
                  type="text"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          <div className="cmpaigns mt-0.5 overflow-y-scroll">
            <Campaingn />
            <Campaingn />
            <Campaingn />
            <Campaingn />
            <Campaingn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCampaigns;
