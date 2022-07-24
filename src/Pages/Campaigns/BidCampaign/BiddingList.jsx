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
          className="font-mulish w-38 flex flex-col text-white justify-center items-center py-2 rounded-lg"
          style={{ backgroundColor: "#0074D1" }}
        >
          <p className="text-sm font-light leading-6 mb-2">Camping code</p>
          <p className="text-base leading-6 m-0">#785443</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="px-8 pb-8 rounded-2xl shadow-md bg-white">
          <table className="font-mulish mt-5">
            <tr className="font-normal text-base leading-6 ">
              <td className="pl-4 pr-10 pb-6">Creator</td>
              <td className="pr-24 pb-6">Platform</td>
              <td className="pr-12 pb-6">Price</td>
              <td className="pr-10 pb-6">Date</td>
              <td>Status</td>
            </tr>
            <tr className="font-normal text-base leading-6 hover:bg-gray-100 cursor-pointer">
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
              <td className="pl-8 py-3 pr-10 rounded-l-full">
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
                    className="py-1.5 px-5 bg-opacity-25"
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
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BiddingList;
