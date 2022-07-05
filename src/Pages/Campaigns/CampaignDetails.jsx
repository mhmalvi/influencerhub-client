import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../Components/Shared/Navbar";
import NavbarSm from "../../Components/Shared/Navbar/NavbarSm";

const CampaignDetails = () => {
  return (
    <div className="page-width mx-auto">
      <div className="flex items-start">
        <div>
          <img
            className="cmpaign-details-banner min-h-screen"
            src="https://i.ibb.co/k2WXcs6/unsplash-YBUj1dkt4-Do.jpg"
            alt=""
          />
        </div>
        <div className="ml-16 font-mulish">
          {/* <Navbar loggedin={true} /> */}
          <NavbarSm loggedin={true} />
          <div className="flex justify-between items-center">
            <div className="w-2/3 mr-4">
              <h4 className="text-base leading-6 font-semibold text-blue-500 mb-4">
                Creator name
              </h4>
              <h2 className="text-2xl leading-8 font-normal">Camping Name</h2>
              <p className="leading-4.5">Hello creator</p>
              <p className="leading-5 text-base">
                The term angel, which is derived from the Greek word angelos, is
                the equivalent of the Hebrew word mal&apos;akh, meaning
                “messenger.” The literal meaning of the word angel thus points
                more toward the function or status of such beings in a cosmic
                hierarchy rather than toward connotations of essence or nature,
                which have been prominent in popular piety, especially in
                Western religions. Thus, angels have their significance
                primarily in what they do rather than in what they are. Whatever
                essence or inherent nature they possess is in terms of their
                relationship to their source (God, or the ultimate being).
              </p>
              <div className="flex items-center mt-6">
                <Link
                  to={"/signup"}
                  className="btn-grad text-white px-12 py-2.5 rounded-lg cursor-pointer text-base font-semibold leading-6 font-mulish hover:text-white"
                >
                  Submit Proposal
                </Link>
                <Link
                  to={"/login"}
                  className="ml-2 px-10 border rounded-lg border-gray-600 py-2.5 cursor-pointer text-base font-semibold leading-6 text-black hover:text-black"
                >
                  Bid
                </Link>
              </div>
            </div>
            <div className="w-80 flex flex-col justify-center border border-gray-400 rounded-xl p-8 mx-10">
              <button className="w-full py-3 text-base leading-6 font-light bg-dark-blue text-white rounded-lg mx-auto">
                Bid submit
              </button>

              <div className="mt-8">
                <p className="text-sm font-light m-0">Camping code</p>
                <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                  #785443
                </h4>

                <p className="text-sm font-light m-0">Prize money</p>
                <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                  5000 BDT
                </h4>

                <p className="text-sm font-light m-0">Dead line</p>
                <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                  Apr 03, 2022
                </h4>
                <p className="text-sm font-light m-0">creator need</p>
                <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                  20
                </h4>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-light m-0">platform</p>
                    <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                      facebook
                    </h4>
                    <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                      Tiktok
                    </h4>
                  </div>
                  <div>
                    <p className="text-sm font-light m-0">Range</p>
                    <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                      10k-100k
                    </h4>
                    <h4 className="font-semibold leading-6 text-base mb-3 mt-2">
                      10k-100k
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
