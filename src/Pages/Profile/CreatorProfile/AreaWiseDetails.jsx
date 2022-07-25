import React from "react";

const AreaWiseDetails = () => {
  return (
    <div className="p-8 rounded-xl border border-gray-300 mx-30">
      <h2 className="text-2xl font-mulish leading-8 font-normal text-center -mb-12">
        Area
      </h2>
      <div className="flex items-center">
        <div>
          <img src="https://i.ibb.co/PQ2RFHj/Group-10000008112-1.png" alt="" />
        </div>
        <div className="ml-16">
          <table className="font-mulish mt-5">
            <tr className="font-normal text-base leading-6 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div className="text-blue-500 text-base text-center font-medium font-mulish leading-6">
                  50%
                </div>
              </td>

              <td className="w-10 pr-12">
                <div className="text-orange-500 text-base text-center font-medium font-mulish leading-6">
                  Dhaka
                </div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-blue-500 text-base text-center font-medium font-mulish leading-6">
                  45%
                </div>
              </td>

              <td className="w-12 pr-10">
                <div className="text-green-500 text-base text-center font-medium font-mulish leading-6">
                  Chittagong
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div className="text-blue-500 text-base text-center font-medium font-mulish leading-6">
                  12%
                </div>
              </td>

              <td className="w-10 pr-12">
                <div className="text-lime-500 text-base text-center font-medium font-mulish leading-6">
                  Barisal
                </div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-blue-500 text-base text-center font-medium font-mulish leading-6">
                  45%
                </div>
              </td>

              <td className="w-12 pr-10">
                <div className="text-black text-base text-center font-medium font-mulish leading-6">
                  Rangpur
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div className="text-blue-500 text-base text-center font-medium font-mulish leading-6">
                  20%
                </div>
              </td>

              <td className="w-10 pr-12">
                <div className="text-yellow-500 text-base text-center font-medium font-mulish leading-6">
                  Khulna
                </div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-blue-500 text-base text-center font-medium font-mulish leading-6">
                  45%
                </div>
              </td>

              <td className="w-12 pr-10">
                <div className="text-blue-400 text-base text-center font-medium font-mulish leading-6">
                  Rajshahi
                </div>
              </td>
            </tr>

            <tr className="font-normal text-base leading-6 cursor-pointer">
              <td className="pl-8 py-2 pr-10 rounded-l-full">
                <div className="text-blue-400 text-base text-center font-medium font-mulish leading-6">
                  15%
                </div>
              </td>
              <td className="w-10 pr-12">
                <div className="text-red-400 text-base text-center font-medium font-mulish leading-6">
                  Sylhet
                </div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-blue-400 text-base text-center font-medium font-mulish leading-6">
                  1%
                </div>
              </td>
              <td className="w-12 pr-10">
                <div className="text-lime-400 text-base text-center font-medium font-mulish leading-6">
                  Rangpur
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AreaWiseDetails;
