import { Dropdown, Menu, Space } from "antd";
import React from "react";
import Icons from "../../../Components/Shared/Icons";

const CampaignInfo = () => {
  const menu = (
    <Menu
      className="w-66"
      items={[
        {
          label: (
            <a className="text-black hover:text-black" href="/create-campaign">
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a className="text-black hover:text-black" href="/create-campaign">
              2nd menu item
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
  const socialMenu = (
    <Menu
      className="w-38"
      items={[
        {
          label: (
            <a className="text-black hover:text-black" href="/create-campaign">
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a className="text-black hover:text-black" href="/create-campaign">
              2nd menu item
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="flex justify-between items-center">
      <div className="mr-6 ml-10">
        <Icons.CreateCreatorBorder />
      </div>
      <div>
        <div>
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Title
          </h4>
          <input
            type="text"
            placeholder="ABCDEFGHIJKLMNOP"
            className="w-66 py-1 px-4 border-b text-light-gray text-base font-semibold text-opacity-75 border-gray-400 border-opacity-50 bg-transparent outline-none"
          />
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Description
          </h4>
          <textarea
            placeholder="ABCDEFGHIJKLMNOP"
            className="w-66 h-9 py-1 px-4 border-b text-base border-gray-400 text-light-gray font-semibold text-opacity-75 bg-transparent outline-none"
          />
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Attached
          </h4>
          <label
            htmlFor="attached"
            className="flex justify-between items-center w-66 px-4 cursor-pointer border-b text-light-gray font-semibold text-opacity-75 border-gray-400 border-opacity-50 bg-transparent"
          >
            <p className="m-0 py-1 text-base text-gray-400 font-semibold">
              PDF OR JPG
            </p>
            <Icons.DoubleClip className="p-1 mb-1 bg-white shadow text-black w-5 rounded" />
          </label>
          <input id="attached" hidden type="file" />
        </div>

        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Campaign Category
          </h4>
          <Dropdown
            className="w-66 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={menu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-66 flex justify-between items-center px-4 pb-2 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  Select Category
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Promotion Type
          </h4>
          <Dropdown
            className="w-66 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={menu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-66 flex justify-between items-center px-4 pb-2 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  Select Promotion Type
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Campaign Expire Date
          </h4>
          <Dropdown
            className="w-66 py-1 border-b border-gray-400 border-opacity-50 bg-transparent shadow-transparent"
            overlay={menu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-66 flex justify-between items-center px-4 pb-2 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  Select Promotion Type
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="flex items-center ml-16 mt-12">
          <button
            className="px-5 py-1.5 text-base leading-6 font-mulish rounded-md text-light-gray font-semibold flex justify-center items-center"
            style={{ border: "1px solid rgba(21, 29, 72, 0.15)" }}
          >
            Back
          </button>
          <button className="px-5 py-1.5 ml-2 text-base leading-6 font-mulish rounded-md bg-dark-blue text-white flex justify-center items-center">
            Continue
          </button>
        </div>
      </div>
      <div className="mr-6 ml-14">
        <Icons.CreateCreatorBorder />
      </div>
      <div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Facebook
          </h4>
          <Dropdown
            className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={socialMenu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  1-1k
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Tiktok
          </h4>
          <Dropdown
            className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={socialMenu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  1-1k
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Instagram
          </h4>
          <Dropdown
            className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={socialMenu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  1-1k
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Youtube
          </h4>
          <Dropdown
            className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={socialMenu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  1-1k
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Livesream
          </h4>
          <Dropdown
            className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={socialMenu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  1-1k
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="mt-5">
          <h4 className="text-base font-semibold text-light-gray leading-6">
            Twitter
          </h4>
          <Dropdown
            className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
            overlay={socialMenu}
            trigger={["click"]}
          >
            <a
              className="pb-2 text-black hover:text-black"
              href="/"
              onClick={(e) => e.preventDefault()}
            >
              <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                  1-1k
                </p>
                <Icons.DownArror className="ml-auto" />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default CampaignInfo;
