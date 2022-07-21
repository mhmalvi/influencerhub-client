import { Dropdown, Menu, Space } from "antd";
import React from "react";
import Icons from "../../../Components/Shared/Icons";

const SocialInfo = () => {
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
    <div>
      <div className="flex justify-between items-center font-mulish">
        <div className="mr-6 ml-18">
          <Icons.CreateCreatorBorder />
        </div>
        <div>
          <div>
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Creator Required
            </h4>
            <Dropdown
              className="w-66 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
              overlay={menu}
              trigger={["click"]}
            >
              <a
                className="pb-3 text-black hover:text-black"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Space className="w-66 flex justify-between items-center px-4 pb-2 rounded-br-xl">
                  <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                    Select number of Creator
                  </p>
                  <Icons.DownArror className="ml-auto" />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Content type
            </h4>
            <div className="flex items-center">
              <div className="flex items-center">
                <input
                  className="cursor-pointer"
                  id="video"
                  type="radio"
                  name="video"
                />
                <label
                  htmlFor="video"
                  className="ml-1 text-base font-semibold leading-6 font-mulish text-light-gray opacity-80 cursor-pointer"
                >
                  Video
                </label>
              </div>
              <div className="flex items-center ml-4">
                <input
                  className="cursor-pointer"
                  id="static-post"
                  type="radio"
                  name="video"
                />
                <label
                  htmlFor="static-post"
                  className="ml-1 text-base font-semibold leading-6 font-mulish text-light-gray opacity-80 cursor-pointer"
                >
                  Static post
                </label>
              </div>
            </div>
          </div>

          <div>
            <div>
              <table className="font-mulish mt-5">
                <tr className="text-gray-400 text-opacity-60 font-semibold text-base">
                  <td>Platform</td>
                  <td>No.</td>
                  <td className="pl-5">Duration</td>
                  <td className="pl-5">Placement</td>
                </tr>
                <tr className="text-base text-gray-400 font-semibold text-opacity-80">
                  <td className="pb-5 pt-4">Facebook</td>
                  <td>
                    <input
                      type="text"
                      placeholder="15"
                      className="w-7 p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="3.45"
                      className="w-16 ml-5 text-center p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Post"
                      className="w-16 ml-5 text-center p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                </tr>
                <tr className="text-gray-500 text-opacity-70 font-semibold text-base">
                  <td className="py-5">Instagram</td>
                  <td>
                    <input
                      type="text"
                      placeholder="15"
                      className="w-7 p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="3.45"
                      className="w-16 ml-5 text-center p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
                <tr className="text-gray-500 text-opacity-70 font-semibold text-base">
                  <td className="py-5">Youtube</td>
                  <td>
                    <input
                      type="text"
                      placeholder="15"
                      className="w-7 p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="3.5"
                      className="w-16 ml-5 text-center p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
                <tr className="text-gray-500 text-opacity-70 font-semibold text-base">
                  <td className="py-5 pr-12">Tiktok</td>
                  <td>
                    <input
                      type="text"
                      placeholder="15"
                      className="w-7 p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="3.5"
                      className="w-16 ml-5 text-center p-1 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
                    />
                  </td>
                  <td>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Content Select ?
            </h4>
            <div className="flex items-center">
              <div className="flex items-center">
                <input
                  className="cursor-pointer"
                  id="creator"
                  type="radio"
                  name="Content"
                />
                <label
                  htmlFor="creator"
                  className="ml-1 leading-6 font-mulish text-base text-gray-400 font-semibold text-opacity-80 cursor-pointer"
                >
                  Creator
                </label>
              </div>
              <div className="flex items-center ml-4">
                <input
                  className="cursor-pointer"
                  id="brand"
                  type="radio"
                  name="Content"
                />
                <label
                  htmlFor="brand"
                  className="ml-1 text-base font-semibold leading-6 font-mulish text-gray-400 text-opacity-80 cursor-pointer"
                >
                  Brand
                </label>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="attached"
              className="flex justify-between items-center w-66 px-4 cursor-pointer border-b text-light-gray font-semibold text-opacity-75 border-gray-400 border-opacity-50 bg-transparent"
            >
              <p className="m-0 py-1 text-base text-gray-400 font-semibold text-opacity-80">
                Typing
              </p>
              <Icons.DoubleClip className="p-1 bg-white shadow mb-2 text-black w-6 rounded" />
            </label>
            <input id="attached" hidden type="file" />
          </div>

          <div>
            <h4 className="text-base font-semibold text-light-gray leading-6 mt-5">
              Adress
            </h4>
            <Dropdown
              className="w-66 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
              overlay={menu}
              trigger={["click"]}
            >
              <a
                className="pb-3 text-black hover:text-black"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Space className="w-38 flex justify-between items-center px-4 pb-2 rounded-br-xl">
                  <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                    Dhaka
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

        <div className="mr-6 ml-4">
          <Icons.CreateCreatorBorder />
        </div>
        <div>
          <div className="mt-5">
            <div>
              <h4 className="text-base font-semibold text-light-gray leading-6">
                Would you provide any physical product ?
              </h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  <input
                    className="cursor-pointer"
                    id="physical_product"
                    type="radio"
                    name="product"
                  />
                  <label
                    htmlFor="physical_product"
                    className="ml-1 text-base font-semibold leading-6 font-mulish text-light-gray opacity-80 cursor-pointer"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center ml-4">
                  <input
                    className="cursor-pointer"
                    id="no_physical_product"
                    type="radio"
                    name="product"
                  />
                  <label
                    htmlFor="no_physical_product"
                    className="ml-1 text-base font-semibold leading-6 font-mulish text-light-gray opacity-80 cursor-pointer"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <Dropdown
              className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
              overlay={socialMenu}
              trigger={["click"]}
            >
              <a
                className="pb-3 text-black hover:text-black"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Space className="w-38 mt-2 flex justify-between items-center px-4 pb-3 rounded-br-xl">
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
              Creator’s Gender
            </h4>
            <Dropdown
              className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
              overlay={socialMenu}
              trigger={["click"]}
            >
              <a
                className="pb-3 text-black hover:text-black"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                  <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                    Any
                  </p>
                  <Icons.DownArror className="ml-auto" />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Creator’s Age
            </h4>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="15"
                className="w-16 text-center px-1 pt-1 pb-2 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
              />
              <div className="text-base text-gray-400 font-semibold text-opacity-80 leading-6">
                to
              </div>
              <input
                type="text"
                placeholder="30"
                className="w-16 text-center px-1 pt-1 pb-2 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Audience Location
            </h4>
            <Dropdown
              className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
              overlay={socialMenu}
              trigger={["click"]}
            >
              <a
                className="pb-3 text-black hover:text-black"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                  <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                    Dhaka
                  </p>
                  <Icons.DownArror className="ml-auto" />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Deadline
            </h4>

            <div>
              <input
                type="date"
                className="px-4 py-2 outline-none cursor-pointer text-gray-400 font-semibold text-opacity-80 font-mulish leading-6 border-b border-gray-400 border-opacity-50"
                name="deadline"
                id=""
              />
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Shooting Location
            </h4>
            <Dropdown
              className="w-38 py-1 border-b border-gray-400 border-opacity-50 bg-transparent"
              overlay={socialMenu}
              trigger={["click"]}
            >
              <a
                className="pb-3 text-black hover:text-black"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Space className="w-38 flex justify-between items-center px-4 pb-3 rounded-br-xl">
                  <p className="m-0 text-base text-gray-400 font-semibold text-opacity-80 font-mulish leading-6">
                    Dhaka
                  </p>
                  <Icons.DownArror className="ml-auto" />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="mt-5">
            <h4 className="text-base font-semibold text-light-gray leading-6">
              Camping Budget
            </h4>
            <div>
              <input
                type="text"
                placeholder="Amount"
                className="w-38 px-4 p-1 text-base text-gray-400 font-semibold text-opacity-80 border-b border-gray-400 border-opacity-50 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;
