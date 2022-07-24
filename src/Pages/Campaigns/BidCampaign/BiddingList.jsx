import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../Components/Shared/Icons";
import Navbar from "../../../Components/Shared/Navbar";

const BiddingList = () => {
  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>

      <div className="flex justify-between items-center px-30">
        <div>
          <h1 className="font-abhaya text-4.5xl font-bold leading-12 mb-0">
            Choose the creator of your choice
          </h1>
          <p className="font-mulish text-xs font-light m-0 leading-5">
            Find Online Learning Harvard at Shopwebly, the Website to Compare
            Prices!
          </p>
        </div>
        <div
          className="font-mulish w-38 mr-20 flex flex-col text-white justify-center items-center py-2 rounded-lg"
          style={{ backgroundColor: "#0074D1" }}
        >
          <p className="text-sm font-light leading-6 mb-2">Camping code</p>
          <p className="text-base leading-6 m-0">#785443</p>
        </div>
      </div>

      <div className="flex justify-between items-start px-30 mt-14">
        <div className="relative p-1 rounded-2xl shadow-md bg-white">
          <table className="font-mulish mt-5">
            <tr className="font-normal text-base leading-6">
              <td className="pl-4 pr-10 pb-6">Creator</td>
              <td className="pr-24 pb-6">Platform</td>
              <td className="pr-12 pb-6">Price</td>
              <td className="pr-10 pb-6">Date</td>
              <td className="pr-10 pb-6">Status</td>
            </tr>
            <tr className="w-10/12 flex justify-center items-center absolute top-16">
              <Icons.BorderStock />
            </tr>
            <tr className="font-normal text-base leading-6 hover:bg-gray-100 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div>
                  <div className="flex justify-start items-center">
                    <img
                      className="w-8"
                      src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                      alt=""
                    />
                    <div className="ml-2">Rajin Ahmed</div>
                  </div>
                </div>
              </td>
              <td className="w-20 pr-24">
                <div className="flex items-center">
                  <Link to={"/"}>
                    <Icons.Tiktok
                      className="w-4"
                      style={{ color: "#FE2C55" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Instagram
                      className="w-4 mx-1"
                      style={{ color: "#3F729B" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.OutlineFacebook className="w-4 text-blue-700 font-bold ml-0.5" />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Youtube className="w-4 text-red-700 ml-1.5" />
                  </Link>
                </div>
              </td>
              <td className="w-10 pr-12">
                <div className="text-center">5600</div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-center">3.7.22</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div className="text-center">
                  <button
                    className="w-28 py-1.5 bg-opacity-25 my-2"
                    style={{
                      backgroundColor: "#248F5640",
                      borderRadius: "10px",
                      color: "#248F56",
                    }}
                  >
                    Accepted
                  </button>
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 hover:bg-gray-100 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div>
                  <div className="flex justify-start items-center">
                    <img
                      className="w-8"
                      src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                      alt=""
                    />
                    <div className="ml-2">Rajin Ahmed</div>
                  </div>
                </div>
              </td>
              <td className="w-20 pr-24">
                <div className="flex items-center">
                  <Link to={"/"}>
                    <Icons.Tiktok
                      className="w-4"
                      style={{ color: "#FE2C55" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Instagram
                      className="w-4 mx-1"
                      style={{ color: "#3F729B" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.OutlineFacebook className="w-4 text-blue-700 font-bold ml-0.5" />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Youtube className="w-4 text-red-700 ml-1.5" />
                  </Link>
                </div>
              </td>
              <td className="w-10 pr-12">
                <div className="text-center">5600</div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-center">3.7.22</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div className="text-center">
                  <button
                    className="w-28 py-1.5 bg-opacity-25 my-2"
                    style={{
                      backgroundColor: "#248F5640",
                      borderRadius: "10px",
                      color: "#248F56",
                    }}
                  >
                    Accepted
                  </button>
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 hover:bg-gray-100 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div>
                  <div className="flex justify-start items-center">
                    <img
                      className="w-8"
                      src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                      alt=""
                    />
                    <div className="ml-2">Rajin Ahmed</div>
                  </div>
                </div>
              </td>
              <td className="w-20 pr-24">
                <div className="flex items-center">
                  <Link to={"/"}>
                    <Icons.Tiktok
                      className="w-4"
                      style={{ color: "#FE2C55" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Instagram
                      className="w-4 mx-1"
                      style={{ color: "#3F729B" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.OutlineFacebook className="w-4 text-blue-700 font-bold ml-0.5" />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Youtube className="w-4 text-red-700 ml-1.5" />
                  </Link>
                </div>
              </td>
              <td className="w-10 pr-12">
                <div className="text-center">5600</div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-center">3.7.22</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div className="text-center">
                  <button
                    className="w-28 py-1.5 bg-opacity-25 my-2"
                    style={{
                      backgroundColor: "#248F5640",
                      borderRadius: "10px",
                      color: "#248F56",
                    }}
                  >
                    Accepted
                  </button>
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 hover:bg-gray-100 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div>
                  <div className="flex justify-start items-center">
                    <img
                      className="w-8"
                      src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                      alt=""
                    />
                    <div className="ml-2">Rajin Ahmed</div>
                  </div>
                </div>
              </td>
              <td className="w-20 pr-24">
                <div className="flex items-center">
                  <Link to={"/"}>
                    <Icons.Tiktok
                      className="w-4"
                      style={{ color: "#FE2C55" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Instagram
                      className="w-4 mx-1"
                      style={{ color: "#3F729B" }}
                    />
                  </Link>
                  <Link to={"/"}>
                    <Icons.OutlineFacebook className="w-4 text-blue-700 font-bold ml-0.5" />
                  </Link>
                  <Link to={"/"}>
                    <Icons.Youtube className="w-4 text-red-700 ml-1.5" />
                  </Link>
                </div>
              </td>
              <td className="w-10 pr-12">
                <div className="text-center">5600</div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-center">3.7.22</div>
              </td>
              <td className="w-22 pr-8 rounded-r-full">
                <div className="text-center">
                  <button
                    className="w-28 py-1.5 my-2"
                    style={{
                      backgroundColor: "rgba(32, 151, 246, 0.5)",
                      borderRadius: "10px",
                      color: "#FFFFFF",
                    }}
                  >
                    Accept
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="w-66 p-6 rounded-2xl shadow-md">
          <div className="flex flex-col justify-center items-center">
            <h4 className="font-mulish font-normal text-base leading-6">
              Accepted Creator
            </h4>
            <h3 className="font-bold text-2xl leading-10 font-abhaya text-blue-600">
              3
            </h3>
          </div>
          <div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <div className="flex justify-start items-center">
                <img
                  className="w-8"
                  src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                  alt=""
                />
                <div className="ml-2 font-mulish font-normal text-base leading-5">
                  Rajin Ahmed Jony
                </div>
              </div>
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <div className="flex justify-start items-center">
                <img
                  className="w-8"
                  src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                  alt=""
                />
                <div className="ml-2 font-mulish font-normal text-base leading-5">
                  Mr. Sourav
                </div>
              </div>
            </div>
            <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <div className="flex justify-start items-center">
                <img
                  className="w-8"
                  src="https://i.ibb.co/HFNyMtV/Rectangle-6614.png"
                  alt=""
                />
                <div className="ml-2 font-mulish font-normal text-base leading-5">
                  Mr. Pranto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiddingList;
