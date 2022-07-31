import { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../Components/Shared/Icons";
import Modal from "../../../Components/Shared/Modal";
import NavbarSm from "../../../Components/Shared/Navbar/NavbarSm";
import { handleBidSuccess } from "../../../Components/utils/sounds";

const BiddingForms = () => {
  const [popUp, setPopUp] = useState(false);

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

        {/* Modal */}
        <div>{popUp && <Modal popUp={popUp} setPopUp={setPopUp} />}</div>

        <div className="ml-16 font-mulish">
          <NavbarSm loggedin={true} />
          <div className="pt-8 flex justify-between items-center">
            <div className="w-2/3 mr-4">
              <h4 className="text-base leading-6 font-semibold text-blue-500 mb-4">
                Creator name
              </h4>
              <h2 className="text-2xl leading-8 font-normal">Camping Name</h2>
              <p className="leading-4.5">Hello creator</p>

              <h4 className="text-sm leading-4 pt-13 pb-8">
                What is the full amount you'd like to bid for this job?
              </h4>

              {/* Bidding Form */}
              <div>
                <hr className="my-4" />
                <h4 className="text-xs font-semibold">
                  What is the full amount you&apos;d like to bid for this job?
                </h4>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-semibold py-2">Bid</h4>
                    <p className="text-xs">
                      Total amount the client will see on your proposal
                    </p>
                  </div>
                  <div className="w-48 flex items-center border py-2 px-4 rounded-md">
                    <label className="mr-4" htmlFor="amount">
                      $
                    </label>
                    <input
                      className="w-36 text-right outline-none"
                      id="amount"
                      type="text"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-semibold py-2">
                      Upwork Service Fee{" "}
                      <Link
                        to={"/"}
                        className="text-green-600 hover:text-green-500"
                      >
                        Explain This
                      </Link>
                    </h4>
                  </div>
                  <div className="w-48 flex items-center border py-2 px-4 rounded-md">
                    <label className="mr-4" htmlFor="amount">
                      $
                    </label>
                    <input
                      className="w-36 text-right outline-none"
                      id="amount"
                      type="text"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <hr className="my-4" />
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-semibold py-2">
                      You'll Receive
                    </h4>
                    <p className="text-xs">
                      The estimated amount you will receive after service fees
                      <Icons.QuestionMark className="w-3 text-green-600 cursor-pointer" />
                    </p>
                  </div>
                  <div className="w-48 flex items-center border py-2 px-4 rounded-md">
                    <label className="mr-4" htmlFor="amount">
                      $
                    </label>
                    <input
                      className="w-36 text-right outline-none"
                      id="amount"
                      type="text"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-73 flex flex-col justify-center border border-gray-400 rounded-xl p-8 mx-4">
              <button
                className="w-full py-3 text-base leading-6 font-light bg-dark-blue text-white rounded-lg mx-auto"
                onClick={() => {
                  setPopUp(true);
                  handleBidSuccess();
                }}
              >
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

export default BiddingForms;
