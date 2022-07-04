import React from "react";

const WorkShowcase = () => {
  return (
    <div className="page-width mx-auto pt-44 pb-4">
      <div className="w-10/12 mx-auto mb-20 flex items-center">
        <div className="">
          <div className=" mx-auto">
            <h3 className="text-heading font-bold font-abhaya pr-40 mb-4 leading-12">
              Work show influencers in instagram
            </h3>
            <p className="mt-6 text-left font-mulish mr-36">
              St. Augustine College Now Offers A Fully Online English Language
              Program. Learn more today. Learn English Today!
            </p>
            <div className="mt-6">
              <button className="px-6 py-2.5 rounded-full cursor-pointer border-black border">
                Join Creator
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full flex justify-end items-center mx-auto">
            <div className="h-48 w-28 rounded-xl bg-gray-300 mr-3 "></div>
            <div>
              <div className="flex justify-between items-end mb-3">
                <div className="h-40 w-50 rounded-xl bg-gray-300 "></div>
                <div className="h-24 w-19 rounded-xl bg-gray-300 mx-3 "></div>
                <div className="h-24 w-19 rounded-xl bg-gray-300 "></div>
              </div>

              <div className="flex justify-between items-start">
                <div className="h-28 w-29 rounded-xl bg-gray-300 "></div>
                <div className="h-39 w-40 rounded-xl bg-gray-300 mx-3 "></div>
                <div className="h-24 w-19 rounded-xl bg-gray-300 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
