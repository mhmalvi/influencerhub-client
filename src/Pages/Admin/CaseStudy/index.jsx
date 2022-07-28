import React from "react";
import Icons from "../../../Components/Shared/Icons";
import Navbar from "../../../Components/Shared/Navbar";

const CaseStudy = () => {
  return (
    <div className="page-width mx-auto">
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className="mx-28">
        <div className="case-study-bg h-39 flex items-center justify-center">
          <div
            className="bg-black bg-opacity-20 my-8"
            style={{
              width: "846px",
              height: "105px",
              borderRadius: "10px",
            }}
          >
            <h1 className="font-abhaya font-bold text-2xl leading-10 text-center text-white px-40 py-3">
              Get Results for Online Courses Uk.v Find Quick Results from
              Multiple Sources.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div
            className="w-81 h-56 py-1 border border-black flex justify-center items-center cursor-pointer"
            style={{
              borderRadius: "10px",
            }}
          >
            <Icons.PlusCircle />
          </div>
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              className="w-81 h-43"
              src="https://i.ibb.co/bL1L8Cj/P-03.png"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex items-center mt-2.5 mb-1.5">
                <p className="m-0 text-xs leading-5 font-mulish font-light">
                  15.1. 2022
                </p>
                <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                  Digital
                </p>
              </div>

              <h2 className="text-base leading-5 font-normal font-mulish">
                CLINIQUE for It Online Learning
              </h2>
            </div>
          </div>
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              className="w-81 h-43"
              src="https://i.ibb.co/bL1L8Cj/P-03.png"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex items-center mt-2.5 mb-1.5">
                <p className="m-0 text-xs leading-5 font-mulish font-light">
                  15.1. 2022
                </p>
                <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                  Digital
                </p>
              </div>

              <h2 className="text-base leading-5 font-normal font-mulish">
                CLINIQUE for It Online Learning
              </h2>
            </div>
          </div>
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              className="w-81 h-43"
              src="https://i.ibb.co/WyM7FC0/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.png"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex items-center mt-2.5 mb-1.5">
                <p className="m-0 text-xs leading-5 font-mulish font-light">
                  15.1. 2022
                </p>
                <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                  Digital
                </p>
              </div>

              <h2 className="text-base leading-5 font-normal font-mulish">
                CLINIQUE for It Online Learning
              </h2>
            </div>
          </div>
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              className="w-81 h-43"
              src="https://i.ibb.co/bL1L8Cj/P-03.png"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex items-center mt-2.5 mb-1.5">
                <p className="m-0 text-xs leading-5 font-mulish font-light">
                  15.1. 2022
                </p>
                <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                  Digital
                </p>
              </div>

              <h2 className="text-base leading-5 font-normal font-mulish">
                CLINIQUE for It Online Learning
              </h2>
            </div>
          </div>
          <div>
            <img
              style={{
                borderRadius: "10px",
              }}
              className="w-81 h-43"
              src="https://i.ibb.co/WyM7FC0/jess-bailey-n-Oe-Vi8-Ds-N8-U-unsplash-1.png"
              alt=""
            />
            <div className="flex flex-col">
              <div className="flex items-center mt-2.5 mb-1.5">
                <p className="m-0 text-xs leading-5 font-mulish font-light">
                  15.1. 2022
                </p>
                <p className="m-0 text-xs leading-5 font-mulish font-light ml-2.5">
                  Digital
                </p>
              </div>

              <h2 className="text-base leading-5 font-normal font-mulish">
                CLINIQUE for It Online Learning
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
