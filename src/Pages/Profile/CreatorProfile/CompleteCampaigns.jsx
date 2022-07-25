import React from "react";

const CompleteCampaigns = () => {
  return (
    <div className="p-8 rounded-xl border border-gray-300 mx-30">
      <h2 className="text-2xl font-mulish leading-8 font-normal text-center mb-8">
        Complete Campaign
      </h2>
      <div className="flex justify-center items-center">
        <img
          className="w-67 h-36 rounded-xl mr-5"
          src="https://i.ibb.co/F4PHkTR/stil-gzuk1-Onzdw4-unsplash-1.jpg"
          alt=""
        />
        <img
          className="w-67 h-36 rounded-xl mr-5"
          src="https://i.ibb.co/zQWysFJ/P-03.jpg"
          alt=""
        />
        <img
          className="w-67 h-36 rounded-xl"
          src="https://i.ibb.co/yB2QgCF/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.jpgs"
          alt=""
        />
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <button className="w-59 h-9 rounded-xl bg-dark-blue text-center text-white text-sm font-light leading-5">
          All Camping
        </button>
      </div>
    </div>
  );
};

export default CompleteCampaigns;
