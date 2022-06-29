import React from "react";
import Icons from "../Icons";

const Footer = () => {
  return (
    <div className="page-width mt-28 mb-10 mx-auto">
      <div className="w-10/12 mx-auto text-black md:py-4">
        {/* <div className="container-fluid grid grid-cols-1 md:grid-cols-4"> */}
        <div className="flex justify-evenly items-start">
          <div className="mt-5">
            <div className="mb-3">
              <div className="font-pacifico text-2xl">LOGO</div>
              {/* <img className="mx-auto mb-2" width="70%" src="" alt="" /> */}
              <p className="mt-6">Address</p>
            </div>
            <div className="w-68 flex justify-center items-center">
              <input
                className="w-full border-black border-b py-3"
                type="email"
                name=""
                placeholder="ahsanhabib@gmail.com"
                id=""
              />
              <button className="px-5 py-3.5 bg-gray-300 rounded-tl-lg rounded-tr-xl text-xl font-bold">
                {">"}
              </button>
            </div>
          </div>

          <div className="mt-5 mx-auto font-mulish">
            <h4 className="text-black font-semibold mb-6">Services</h4>
            <div className="grid grid-cols-4 md:grid-cols-1  gap-6 float-left">
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
            </div>
          </div>

          <div className="mt-5 mx-auto font-mulish">
            <h4 className="text-black font-semibold mb-6">Services</h4>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-6 float-left">
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
            </div>
          </div>

          <div className="mt-5 mx-auto font-mulish">
            <h4 className="text-black font-semibold mb-6">About</h4>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-6 float-left">
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
              <div href="/" className="mb-1">
                Services
              </div>
            </div>
          </div>
        </div>
        <div className="-mr-16 flex justify-end items-center mt-10">
          <div>
            <Icons.Facebook />
          </div>
          <div>
            <Icons.Instagram className="mx-10" />
          </div>
          <div>
            <Icons.Twiteter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
