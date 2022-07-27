import React from "react";

const Header = () => {
  return (
    <div className="relative flex justify-end items-center mb-36">
      {/* Content */}
      <div className="header-width mx-auto py-20">
        {/* <div className="w-10/12 mx-auto"> */}
        <div className="w-6/12 mr-auto">
          <div>
            <h1 className="text-4.5xl font-bold font-abhaya leading-12">
              Brand Promoter and Creator are both in the same place
            </h1>
          </div>
          <div>
            <h4 className="font-mulish font-light pr-16 mt-5">
              Warning Importing demo data will replace your current theme
              options, content and widget settings. Importing data is
              recommended on fresh installs only.
            </h4>
          </div>
          <div className="mt-9 font-mulish">
            <button className="px-8 py-2.5 rounded-full cursor-pointer border-black border mr-6">
              Brand & Agencie
            </button>
            <button className="px-14 py-2.5 rounded-full cursor-pointer  border-black border">
              Creator
            </button>
          </div>
        </div>
        <div className="w-1/2"></div>
        {/* </div> */}
      </div>
      {/* Banner */}
      <div className="absolute right-0 top-0 rounded-tl-3xl rounded-bl-3xl">
        <img
          className="header-banner rounded-tl-3xl rounded-bl-3xl"
          src="https://i.ibb.co/nM89vkf/0x0.jpg"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Header;
